import deepmerge from 'deepmerge';

import { AbstractController } from '../Abstract/AbstractController';
import { getSearchParams } from '../utils/getParams';
import { SearchOperation } from '../SearchOperation/SearchOperation';
import { ControllerTypes } from '../types';
import type { FinderStore } from '@athoscommerce/snap-store-mobx';
import type { SearchOutcome } from '../SearchOperation/SearchOperation';
import type { FinderControllerConfig, ControllerServices, ContextVariables } from '../types';

const defaultConfig: FinderControllerConfig = {
	id: 'finder',
	beacon: {
		enabled: true,
	},
	globals: {
		pagination: {
			pageSize: 0,
		},
	},
	fields: [],
	persist: {
		enabled: false,
		lockSelections: true,
		expiration: 0,
	},
};

export class FinderController extends AbstractController {
	public type = ControllerTypes.finder;
	declare store: FinderStore;
	declare searching?: SearchOperation<Record<string, any>>;
	declare config: FinderControllerConfig;

	constructor(
		config: FinderControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);
		this.store.setConfig(this.config);

		// set the root URL on urlManager
		if (this.config.url) {
			this.urlManager = this.urlManager.withConfig((translatorConfig) => {
				return {
					...translatorConfig,
					urlRoot: this.config.url,
				};
			});
		}

		// attach config plugins and event middleware
		this.use(this.config);

		this.store.loadPersisted();
	}

	get params(): Record<string, any> {
		const urlState = this.urlManager.state;
		const { userId, sessionId, pageLoadId } = this.tracker.getContext();

		const tracking: any = {};

		if (userId) {
			tracking.userId = userId;
		}
		if (sessionId) {
			tracking.sessionId = sessionId;
		}
		if (pageLoadId) {
			tracking!.pageLoadId = pageLoadId;
		}
		tracking.domain = window.location.href;

		// get only the finder fields and disable auto drill down
		const defaultParams = {
			facets: {
				include: this.config.fields.map((fieldConfig) => fieldConfig.field),
				autoDrillDown: false,
			},
			tracking: tracking,
		};

		const params: Record<string, any> = deepmerge({ ...getSearchParams(urlState) }, deepmerge(defaultParams, this.config.globals));

		return params;
	}

	find = async (): Promise<void> => {
		await this.store.save(); // save current selections to storage

		try {
			await this.eventManager.fire('beforeFind', {
				controller: this,
			});

			// redirect to configured URL after middleware completes
			window.location.href = this.urlManager.href;
		} catch (err: any) {
			if (err?.message == 'cancelled') {
				this.log.warn(`'beforeFind' middleware cancelled`);
			} else {
				this.log.error(`error in 'beforeFind' middleware`);
				this.log.error(err);
			}
		}
	};

	reset = (): void => {
		this.store.reset();
		this.urlManager.remove('filter').go();
		this.store.setService('urlManager', this.urlManager);
	};

	search = async (): Promise<SearchOutcome> => {
		let operation: SearchOperation<Record<string, any>> | undefined;

		try {
			if (!this.initialized) {
				await this.init();
			}

			if (this.store.persisted) {
				return 'complete';
			}

			const params = this.params;

			operation = this.createSearchOperation(params);
			this.store.loading = true;
			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					operation.resolve('cancelled');
					return operation.promise;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const { meta, search } = await this.client.finder(params, { signal: operation.signal });

			// the request is back - bail if this search was cancelled or replaced while it was out
			if (this.searchOperationSuperseded(operation)) {
				return operation.promise;
			}

			searchProfile.stop();
			this.log.profile(searchProfile);

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response: {
						meta,
						search,
					},
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterSearch' middleware cancelled`);
					afterSearchProfile.stop();
					operation.resolve('cancelled');
					return operation.promise;
				} else {
					this.log.error(`error in 'afterSearch' middleware`);
					throw err;
				}
			}

			afterSearchProfile.stop();
			this.log.profile(afterSearchProfile);

			// awaited middleware above can let a newer search take over - it owns the store now
			if (this.searchOperationSuperseded(operation)) {
				return operation.promise;
			}

			// update the store
			this.store.update({ meta, search });

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response: {
						meta,
						search,
					},
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterStore' middleware cancelled`);
					afterStoreProfile.stop();
					operation.resolve('cancelled');
					return operation.promise;
				} else {
					this.log.error(`error in 'afterStore' middleware`);
					throw err;
				}
			}

			afterStoreProfile.stop();
			this.log.profile(afterStoreProfile);
		} catch (err: any) {
			if (operation) {
				this.handleSearchOperationError(operation, err);
			} else {
				// failed before the operation existed (init or params) - report it the same way
				this.log.error(err);
				this.handleError(err);
			}
		} finally {
			if (operation) {
				this.settleSearchOperation(operation, 'complete');
			}
		}

		return operation?.promise || 'error';
	};
}
