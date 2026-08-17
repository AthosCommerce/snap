import { DomTargeter } from '@athoscommerce/snap-toolbox';
import { ErrorType } from '@athoscommerce/snap-store-mobx';

import { SearchOperation, isAbortError } from '../SearchOperation/SearchOperation';
import type { SearchOutcome } from '../SearchOperation/SearchOperation';

import type { Client } from '@athoscommerce/snap-client';
import type { AbstractStore } from '@athoscommerce/snap-store-mobx';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import type { EventManager, Middleware } from '@athoscommerce/snap-event-manager';
import type { Profiler } from '@athoscommerce/snap-profiler';
import type { Logger } from '@athoscommerce/snap-logger';
import type { Tracker, TrackErrorEvent } from '@athoscommerce/snap-tracker';
import type { Target, OnTarget } from '@athoscommerce/snap-toolbox';

import type { ControllerServices, ControllerConfig, Attachments, ContextVariables, PluginFunction } from '../types';

// mirrors the inline shape of AbstractStore.error
type SearchStoreError = {
	code?: number;
	type?: ErrorType;
	message?: string;
};

export abstract class AbstractController {
	public id: string;
	public type = 'abstract';
	public config: ControllerConfig;
	public client: Client;
	public store: AbstractStore;
	public urlManager: UrlManager;
	public eventManager: EventManager;
	public profiler: Profiler;
	public log: Logger;
	public tracker: Tracker;
	public context: ContextVariables;

	public targeters: {
		[key: string]: DomTargeter;
	} = {};

	// the search currently underway, undefined when idle. Code that triggered the search can
	// await the outcome returned by search() instead - this is the handle for everyone else
	public searching?: SearchOperation<any>;

	protected _initialized = false;

	get initialized(): boolean {
		return this._initialized;
	}

	public handleError = (err: unknown, details?: { [any: string]: unknown }): void => {
		let event: ErrorEvent | undefined;

		if (err instanceof ErrorEvent) {
			event = err;
		} else if (err instanceof Error) {
			event = new ErrorEvent('error', {
				error: err,
				message: err.message,
			});
		} else if (typeof err === 'string' || typeof err == 'number') {
			event = new ErrorEvent('error', {
				error: new Error(err.toString()),
			});
		} else if (typeof err === 'object' && Object.keys(err as object).length) {
			try {
				event = new ErrorEvent('error', {
					error: new Error(JSON.stringify(err)),
				});
			} catch (e) {}
		}

		if (event) {
			const {
				filename,
				colno,
				lineno,
				error: { stack },
				message,
				timeStamp,
			} = event;

			const beaconPayload: TrackErrorEvent = {
				filename,
				stack,
				message,
				colno,
				lineno,
				errortimestamp: timeStamp,
				details,
				context: {
					controller: {
						id: this.id,
						type: this.type,
					},
				},
			};

			this.tracker.track.error(beaconPayload);

			this.eventManager.fire('error', { controller: this, error: err });
		}
	};

	constructor(
		config: ControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context: ContextVariables = {}
	) {
		if (typeof config != 'object' || typeof config.id != 'string' || !config.id.match(/^[a-zA-Z0-9_-]*$/)) {
			throw new Error(`Invalid config passed to controller. The "id" attribute must be an alphanumeric string.`);
		}

		if (typeof client != 'object' || typeof client.search != 'function') {
			throw new Error(`Invalid service 'client' passed to controller. Missing "search" function.`);
		}

		if (typeof store != 'object' || typeof store.update != 'function') {
			throw new Error(`Invalid service 'store' passed to controller. Missing "update" function.`);
		}

		if (typeof urlManager != 'object' || typeof urlManager.subscribe != 'function') {
			throw new Error(`Invalid service 'urlManager' passed to controller. Missing "subscribe" function.`);
		}

		if (typeof eventManager != 'object' || typeof eventManager.on != 'function') {
			throw new Error(`Invalid service 'eventManager' passed to controller. Missing "on" function.`);
		}

		if (typeof eventManager != 'object' || typeof eventManager.fire != 'function') {
			throw new Error(`Invalid service 'eventManager' passed to controller. Missing "fire" function.`);
		}

		if (typeof profiler != 'object' || typeof profiler.setNamespace != 'function') {
			throw new Error(`Invalid service 'profiler' passed to controller. Missing "setNamespace" function.`);
		}

		if (typeof profiler != 'object' || typeof profiler.create != 'function') {
			throw new Error(`Invalid service 'profiler' passed to controller. Missing "create" function.`);
		}

		if (typeof logger != 'object' || typeof logger.dev != 'function') {
			throw new Error(`Invalid service 'logger' passed to controller. Missing "dev" function.`);
		}
		if (typeof tracker != 'object' || typeof tracker.track != 'object') {
			throw new Error(`Invalid service 'tracker' passed to controller. Missing "track" object.`);
		}

		this.id = config.id;
		this.config = config;
		this.client = client;
		this.store = store;
		this.urlManager = urlManager;
		this.eventManager = eventManager;
		this.profiler = profiler;
		this.log = logger;
		this.tracker = tracker;
		this.context = context;

		// configure the logger
		this.log.setNamespace(this.config.id);

		// set namespaces
		this.profiler.setNamespace(this.config.id);
	}

	public createTargeter(target: Target, onTarget: OnTarget, document?: Document): DomTargeter | undefined {
		return this.addTargeter(new DomTargeter([target], onTarget, document));
	}

	public addTargeter(target: DomTargeter): DomTargeter | undefined {
		const firstTarget = target.getTargets()[0];
		const targetName: string = (firstTarget?.name as string) ?? firstTarget?.selector;
		if (targetName && !this.targeters[targetName]) {
			this.targeters[targetName] = target;
			return target;
		}
	}

	public async init(): Promise<void> {
		if (this._initialized) {
			this.log.warn(`'init' middleware recalled`);
		}
		const initProfile = this.profiler.create({ type: 'event', name: 'init', context: this.config }).start();

		try {
			try {
				await this.eventManager.fire('init', {
					controller: this,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'init' middleware cancelled`);
				} else {
					this.log.error(`error in 'init' middleware`);
					throw err;
				}
			}
		} catch (err) {
			if (err) {
				console.error(err);
				this.handleError(err);
			}
		}

		if (!this._initialized) {
			// subscribe to urlManager changes
			this.urlManager.subscribe((prev, next) => {
				try {
					const prevString = JSON.stringify(prev);
					const nextString = JSON.stringify(next);

					if (prevString !== nextString) {
						this.search();
					}
				} catch (err) {
					this.log.error('URL state is invalid', err);
				}
			});

			this._initialized = true;
		}

		initProfile.stop();
		this.log.profile(initProfile);
	}

	public retarget(): void {
		Object.keys(this.targeters).forEach((target) => {
			this.targeters[target].retarget();
		});
	}

	public abstract search(): Promise<SearchOutcome>;

	/*
		Creates the operation for a search that is about to run and makes it the current one.

		Any search already underway is superseded: a controller has one store, so two searches
		can never both apply their results. The older one has its request aborted and resolves
		'cancelled' with the reason 'superseded' - no `cancelled` event, since nothing external
		asked for it.
	*/
	protected createSearchOperation<ParamsType>(
		params: ParamsType,
		options?: { pending?: boolean; onDiscard?: () => void }
	): SearchOperation<ParamsType> {
		this.searching?.supersede();

		const operation: SearchOperation<ParamsType> = new SearchOperation<ParamsType>(params, {
			pending: options?.pending,
			onCancel: (reason?: string) => {
				// external cancellation only - fire and forget so cancel() stays synchronous
				this.eventManager.fire('cancelled', { controller: this, reason }).catch((err) => {
					this.log.error(`error in 'cancelled' middleware`, err);
				});
			},
			onDiscard: () => {
				// a discarded pending operation has no running search() to clean up after it
				if (this.searching === operation && operation.pending) {
					this.searching = undefined;
				}

				options?.onDiscard?.();
			},
		});

		this.searching = operation;

		return operation;
	}

	/*
		Settles an operation and, when it is still the current one, releases the controller's
		in-flight state. The identity check is what keeps a superseded search from clearing the
		loading flag out from under the search that replaced it.
	*/
	protected settleSearchOperation(operation: SearchOperation<any>, outcome: SearchOutcome): void {
		operation.resolve(outcome);

		if (this.searching === operation) {
			this.searching = undefined;
			this.store.loading = false;
		}
	}

	/*
		True when the operation must not apply anything else to the store - it was cancelled, or a
		newer search has taken over. Checked after each await in search() where a store write follows.
	*/
	protected searchOperationSuperseded(operation: SearchOperation<any>): boolean {
		if (operation.cancelled || this.searching !== operation) {
			operation.resolve('cancelled');
			return true;
		}

		return false;
	}

	/*
		Maps a failed search onto the store. Cancellations exit first: an aborted request is not an
		error, so it produces no store error, no log entry and no error beacon.
	*/
	protected handleSearchOperationError(operation: SearchOperation<any>, err: any): void {
		if (operation.cancelled || isAbortError(err)) {
			operation.resolve('cancelled');
			return;
		}

		if (err) {
			if (err.err && err.fetchDetails) {
				let searchError: SearchStoreError;

				switch (err.fetchDetails.status) {
					case 429: {
						searchError = {
							code: 429,
							type: ErrorType.WARNING,
							message: 'Too many requests try again later',
						};
						break;
					}

					case 500: {
						searchError = {
							code: 500,
							type: ErrorType.ERROR,
							message: 'Invalid Search Request or Service Unavailable',
						};
						break;
					}

					default: {
						searchError = {
							type: ErrorType.ERROR,
							message: err.err.message,
						};
						break;
					}
				}

				// only the current search may write to the store
				if (this.searching === operation) {
					this.store.error = searchError;
				}

				this.log.error(searchError);
				this.handleError(err.err, err.fetchDetails);
			} else {
				const searchError: SearchStoreError = {
					type: ErrorType.ERROR,
					message: `Something went wrong... - ${err}`,
				};

				if (this.searching === operation) {
					this.store.error = searchError;
				}

				this.log.error(err);
				this.handleError(err);
			}
		}

		operation.resolve('error');
	}

	public async plugin(func: PluginFunction, ...args: unknown[]): Promise<void> {
		await func(this, ...args);
	}

	public on<T>(event: string, ...func: Middleware<T>[]): void {
		this.eventManager.on(event, ...func);
	}

	public use(attachments: Attachments): void {
		// attach plugins
		if (attachments?.plugins) {
			try {
				if (!Array.isArray(attachments?.plugins)) {
					throw 'invalid format';
				}

				attachments?.plugins.forEach((plugin) => {
					if (!Array.isArray(plugin)) {
						throw 'invalid format';
					}
					const [func, ...args] = plugin;
					this.plugin(func, ...args);
				});
			} catch (err) {
				this.log.warn('plugins not attached - use format [func, ...args?][]');
			}
		}

		// attach event middleware
		if (attachments?.middleware) {
			Object.keys(attachments.middleware).forEach((eventName) => {
				const eventMiddleware = attachments.middleware![eventName];
				let middlewareArray;
				if (Array.isArray(eventMiddleware)) {
					middlewareArray = eventMiddleware;
				} else {
					middlewareArray = [eventMiddleware];
				}
				middlewareArray.forEach((middleware) => {
					this.on(eventName, middleware);
				});
			});
		}
	}

	setConfig(newConfig: any): void {
		this.config = newConfig;
		this.store.setConfig(newConfig);
	}
}
