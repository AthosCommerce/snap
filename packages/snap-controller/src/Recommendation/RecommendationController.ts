import deepmerge from 'deepmerge';

import { Product } from '@athoscommerce/snap-store-mobx';
import { AbstractController } from '../Abstract/AbstractController';
import { SearchOperation } from '../SearchOperation/SearchOperation';
import { ControllerTypes } from '../types';
import {
	type Product as BeaconProduct,
	type RecommendationsAddtocartSchemaData,
	ResultProductType,
	RecommendationsClickthroughSchemaData,
	RecommendationsImpressionSchemaData,
	RecommendationsRenderSchemaData,
	ResultsInner,
	ClickthroughResultsInner,
} from '@athoscommerce/beacon';
import type { Banner, RecommendationStore } from '@athoscommerce/snap-store-mobx';
import type { RecommendRequestModel } from '@athoscommerce/snap-client';
import type { SearchOutcome } from '../SearchOperation/SearchOperation';
import type { RecommendationControllerConfig, ControllerServices, ContextVariables } from '../types';
import { CLICK_DUPLICATION_TIMEOUT, isClickWithinProductLink } from '../utils/isClickWithinProductLink';

type RecommendationTrackMethods = {
	product: {
		clickThrough: (e: MouseEvent, result: Product | Banner) => void;
		click: (e: MouseEvent, result: Product | Banner) => void;
		impression: (result: Product | Banner) => void;
		addToCart: (result: Product) => void;
	};
};

const defaultConfig: RecommendationControllerConfig = {
	id: 'recommend',
	beacon: {
		enabled: true,
	},
	tag: '',
	batched: true,
	realtime: false,
	globals: {},
};

export class RecommendationController extends AbstractController {
	public type = ControllerTypes.recommendation;
	declare store: RecommendationStore;
	declare searching?: SearchOperation<RecommendRequestModel>;
	declare config: RecommendationControllerConfig;

	private beaconType: 'recommendations' | 'bundles' = 'recommendations';

	private events: {
		[responseId: string]: {
			product: {
				[id: string]: {
					inlineBannerClickThrough?: boolean;
					productClickThrough?: boolean;
					impression?: boolean;
				};
			};
		};
	} = {};

	constructor(
		config: RecommendationControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		if (!config.tag) {
			throw new Error(`Invalid config passed to RecommendationController. The "tag" attribute is required.`);
		}

		// attach to bfCache restore event and re-run search on the controller
		// enabled by default
		if (config.settings?.searchOnPageShow !== false) {
			window.addEventListener('pageshow', (e) => {
				if (e.persisted && !this.store.error && this.store.loaded && !this.store.loading) {
					this.search();
				}
			});
		}

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);
		this.store.setConfig(this.config);

		// add 'afterStore' middleware
		// this.eventManager.on('afterStore', async (recommend: AfterStoreObj, next: Next): Promise<void | boolean> => {
		// 	await next();

		// 	// attach tracking events to cart store
		// 	this.store.cart?.on('addItems', ({ items }: { items: Product[] }) => {
		// 		// add to bundle
		// 	});

		// 	this.store.cart?.on('removeItems', ({ items }: { items: Product[] }) => {
		// 		// remove from bundle
		// 	});
		// });

		// attach config plugins and event middleware
		this.use(this.config);
	}

	track: RecommendationTrackMethods = {
		product: {
			clickThrough: (e: MouseEvent, result): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.clickThrough');
					return;
				}

				const responseId = result.responseId;

				if (!this.events[responseId]) {
					this.log.warn('No responseId found in controller, ensure correct controller is used');
					return;
				}

				if (this.events[responseId]?.product[result.id]?.productClickThrough) return;
				const type = (['product', 'banner'].includes(result.type) ? result.type : 'product') as ResultProductType;
				const beaconResult: ClickthroughResultsInner = {
					type,
					uid: result.id ? '' + result.id : '',
					...(type === 'product'
						? {
								parentId: result.mappings.core?.parentId ? '' + result.mappings.core?.parentId : '',
								sku: result.mappings.core?.sku ? '' + result.mappings.core?.sku : undefined,
						  }
						: {}),
				};
				const data: RecommendationsClickthroughSchemaData = {
					tag: this.store.profile.tag,
					responseId,
					results: [beaconResult],
				};
				this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: result, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events[this.beaconType].clickThrough({ data, siteId: this.config.globals?.siteId });
				this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
				this.events[responseId].product[result.id].productClickThrough = true;
			},
			click: (e: MouseEvent, result): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.click');
					return;
				}

				const responseId = result.responseId;

				if (!this.events[responseId]) {
					this.log.warn('No responseId found in controller, ensure correct controller is used');
					return;
				}

				if (result.type === 'banner') {
					if (this.events[responseId]?.product[result.id]?.inlineBannerClickThrough) {
						return;
					}
					this.track.product.clickThrough(e, result);
					this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
					this.events[responseId].product[result.id].inlineBannerClickThrough = true;
					setTimeout(() => {
						this.events[responseId].product[result.id].inlineBannerClickThrough = false;
					}, CLICK_DUPLICATION_TIMEOUT);
				} else if (isClickWithinProductLink(e, result as Product)) {
					if (this.events?.[responseId]?.product[result.id]?.productClickThrough) {
						return;
					}
					this.track.product.clickThrough(e, result);
					this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
					this.events[responseId].product[result.id].productClickThrough = true;
					setTimeout(() => {
						this.events[responseId].product[result.id].productClickThrough = false;
					}, CLICK_DUPLICATION_TIMEOUT);
				}
			},
			impression: (result): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.impression');
					return;
				}

				const responseId = result.responseId;

				if (!this.events[responseId]) {
					this.log.warn('No responseId found in controller, ensure correct controller is used');
					return;
				} else if (this.events[responseId]?.product[result.id]?.impression) {
					return;
				}
				const type = (['product', 'banner'].includes(result.type) ? result.type : 'product') as ResultProductType;
				const item: ResultsInner = {
					type,
					uid: result.id ? '' + result.id : '',
					...(type === 'product'
						? {
								parentId: result.mappings.core?.parentId ? '' + result.mappings.core?.parentId : '',
								sku: result.mappings.core?.sku ? '' + result.mappings.core?.sku : undefined,
						  }
						: {}),
				};
				const data: RecommendationsImpressionSchemaData = {
					tag: this.store.profile.tag,
					responseId,
					results: [item],
					banners: [],
				};
				this.eventManager.fire('track.product.impression', { controller: this, product: result, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events[this.beaconType].impression({ data, siteId: this.config.globals?.siteId });
				this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
				this.events[responseId].product[result.id].impression = true;
			},
			addToCart: (result: Product): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.addToCart');
					return;
				}

				const responseId = result.responseId;

				if (!this.events[responseId]) {
					this.log.warn('No responseId found in controller, ensure correct controller is used');
					return;
				}

				const product: BeaconProduct = {
					parentId: result.display.mappings.core?.parentId ? '' + result.display.mappings.core?.parentId : '',
					uid: result.display.mappings.core?.uid || result.display.id,
					sku: result.display.mappings.core?.sku,
					qty: result.quantity || 1,
					price: Number(result.display.mappings.core?.price) || 0,
				};
				const data: RecommendationsAddtocartSchemaData = {
					responseId,
					tag: this.store.profile.tag,
					results: [product],
				};
				this.eventManager.fire('track.product.addToCart', { controller: this, product: result, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events[this.beaconType].addToCart({ data, siteId: this.config.globals?.siteId });
			},
		},
	};

	get params(): RecommendRequestModel {
		const params = {
			tag: this.config.tag,
			batched: this.config.batched,
			branch: this.config.branch || 'production',
			batchId: this.config.batchId,
			...this.config.globals,
		};

		const { shopperId } = this.tracker.getContext();

		if (shopperId) {
			params.shopper = shopperId;
		}

		if (!params.siteId || params.siteId == this.tracker.getGlobals().siteId) {
			const cart = this.tracker.cookies.cart.get();
			const lastViewed = this.tracker.cookies.viewed.get();

			if (cart?.length) {
				params.cart = cart;
			}
			if (lastViewed?.length) {
				params.lastViewed = lastViewed;
			}
		}

		return params as RecommendRequestModel;
	}

	search = async (): Promise<SearchOutcome> => {
		let operation: SearchOperation<RecommendRequestModel> | undefined;

		try {
			if (!this.initialized) {
				await this.init();
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

			// no signal is passed here: recommendation requests are batched, so one POST serves every
			// co-batched profile and aborting it would take out other consumers' recommendations.
			// Cancelling still prevents results being applied, it just cannot stop the request.
			const { meta, profile, results, responseId } = await this.client.recommend(params);

			// the request is back - bail if this search was cancelled or replaced while it was out
			if (this.searchOperationSuperseded(operation)) {
				return operation.promise;
			}

			searchProfile.stop();
			this.log.profile(searchProfile);

			this.events[responseId] = this.events[responseId] || { product: {} };

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response: { meta, profile, results },
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
			this.store.update({
				meta: meta,
				profile: profile,
				results: results,
				responseId: responseId,
			});

			this.beaconType = this.store.profile.type === 'bundle' ? 'bundles' : 'recommendations';

			const data: RecommendationsRenderSchemaData = { responseId, tag: this.store.profile.tag };
			this.config.beacon?.enabled && this.tracker.events[this.beaconType].render({ data, siteId: this.config.globals?.siteId });

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response: { meta, profile, results, responseId },
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

	addToCart = async (_products: Product[] | Product): Promise<void> => {
		const products = typeof (_products as Product[])?.slice == 'function' ? (_products as Product[]).slice() : [_products];
		if (!_products || products.length === 0) {
			this.log.warn('No products provided to recommendation controller.addToCart');
			return;
		}
		(products as Product[]).forEach((product) => {
			this.track.product.addToCart(product);
		});
		if (products.length > 0) {
			await this.eventManager.fire('addToCart', { controller: this, products });
		}
	};
}
