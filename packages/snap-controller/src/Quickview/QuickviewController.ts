import deepmerge from 'deepmerge';

import { Product } from '@athoscommerce/snap-store-mobx';
import type { QuickviewConfig, QuickviewStore } from '@athoscommerce/snap-store-mobx';
import type { ProductsResponseModel } from '@athoscommerce/snap-client';
import { AbstractController } from '../Abstract/AbstractController';
import { ControllerTypes } from '../types';
import type { QuickviewControllerConfig, ControllerServices, ContextVariables, ProductQuickviewObj } from '../types';
import type { SearchController } from '../Search/SearchController';
import type { AutocompleteController } from '../Autocomplete/AutocompleteController';
import type { RecommendationController } from '../Recommendation/RecommendationController';

const defaultConfig: QuickviewControllerConfig = {
	id: 'quickview',
};

// The controller that triggered the quickview. The modal delegates actions that
// need platform integration (e.g. add-to-cart) back to it.
type SourceController = SearchController | AutocompleteController | RecommendationController;

// Quickview has no search/tracking lifecycle of its own — every tracked interaction happened
// against a result that belongs to the originating controller's response, so tracking is
// delegated back to it (with `quickView: true`) rather than reimplemented here.
type QuickviewTrackMethods = {
	product: {
		clickThrough: (e: MouseEvent, result: Product) => void;
		click: (e: MouseEvent, result: Product) => void;
		impression: (result: Product) => void;
		addToCart: (result: Product) => void;
	};
};

export class QuickviewController extends AbstractController {
	public type = ControllerTypes.quickview;
	declare store: QuickviewStore;
	declare config: QuickviewControllerConfig;

	// The controller that opened the current quickview, used to delegate add-to-cart.
	private sourceController?: SourceController;

	// Monotonic token identifying the most recent quickview() call; awaited continuations
	// from superseded calls must not write to the shared store.
	private quickviewToken = 0;

	constructor(
		config: QuickviewControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);
		this.store.setConfig(this.config);

		// attach config plugins and event middleware
		this.use(this.config);
	}

	// Quickview has no search lifecycle. Implemented to satisfy AbstractController.
	public search = async (): Promise<void> => {
		return Promise.resolve();
	};

	// Delegate add-to-cart back to the controller that opened the quickview so the
	// platform's existing cart integration (tracking + 'addToCart' middleware) runs.
	// The originating controller's `track.product.addToCart` call is flagged `quickView: true`
	// so the beacon event reflects that the add-to-cart happened from within the modal.
	public addToCart = async (products: Product[] | Product): Promise<void> => {
		if (this.sourceController?.addToCart) {
			await this.sourceController.addToCart(products, { quickView: true });
		} else {
			this.log.warn('Quickview has no originating controller to handle addToCart');
		}
	};

	// Tracking is delegated to the controller that opened the quickview (`sourceController`) —
	// the tracked result belongs to that controller's response/responseId, so re-implementing
	// dedup/beacon logic here would duplicate (and could desync from) the source controller's
	// own `events` bookkeeping. Each call is flagged `quickView: true` so downstream consumers
	// of the beacon event can distinguish quickview interactions from the originating page.
	public track: QuickviewTrackMethods = {
		product: {
			clickThrough: (e: MouseEvent, result: Product): void => {
				if (!this.sourceController?.track?.product?.clickThrough) {
					this.log.warn('Quickview has no originating controller to handle track.product.clickThrough');
					return;
				}
				this.sourceController.track.product.clickThrough(e, result, { quickView: true });
			},
			click: (e: MouseEvent, result: Product): void => {
				if (!this.sourceController?.track?.product?.click) {
					this.log.warn('Quickview has no originating controller to handle track.product.click');
					return;
				}
				this.sourceController.track.product.click(e, result, { quickView: true });
			},
			impression: (result: Product): void => {
				if (!this.sourceController?.track?.product?.impression) {
					this.log.warn('Quickview has no originating controller to handle track.product.impression');
					return;
				}
				this.sourceController.track.product.impression(result, { quickView: true });
			},
			addToCart: (result: Product): void => {
				if (!this.sourceController?.track?.product?.addToCart) {
					this.log.warn('Quickview has no originating controller to handle track.product.addToCart');
					return;
				}
				this.sourceController.track.product.addToCart(result, { quickView: true });
			},
		},
	};

	public quickview = async (
		result: Product,
		productsData?: ProductsResponseModel,
		config?: QuickviewConfig,
		options?: {
			parentId?: string;
			// The originating controller's `meta` store (a MetaStore), forwarded for badge/facet labels.
			meta?: any;
			// The controller that opened the quickview, for delegated actions like add-to-cart.
			controller?: SourceController;
		}
	): Promise<void> => {
		if (!result) {
			this.log.warn('No result provided to quickview');
			return;
		}

		const { parentId, meta, controller } = options || {};

		const token = ++this.quickviewToken;

		// Remember the opener so delegated modal actions reach the right platform integration,
		// and surface its meta store so OverlayBadge / facet-label lookups work on the singleton.
		this.sourceController = controller;
		if (meta) this.store.meta = meta;

		// Controller-level quickview defaults underlay the caller-provided config.
		const effectiveConfig: QuickviewConfig = {
			...(this.config?.settings?.quickview || {}),
			...(config || {}),
		};

		// Open the modal immediately in loading state, scoped to the triggering result.
		this.store.setLoading(true, result);

		const resolvedParentId = parentId || (result.mappings?.core?.parentId as string) || result.id;

		let resolvedProductsData: ProductsResponseModel | undefined = productsData;

		// `config.fetchProductData` defaults to true. When explicitly false, skip the
		// /v1/products call and rely on whatever data is already on the source result.
		if (!resolvedProductsData && effectiveConfig.fetchProductData !== false) {
			try {
				resolvedProductsData = await this.client.products({ parentId: resolvedParentId });
			} catch (err) {
				this.log.warn('Failed to load /v1/products for quickview', err);
			}
		}

		// A newer quickview() call superseded this one while the fetch was in flight.
		if (token !== this.quickviewToken) return;

		// Fire the 'quickview' middleware. Listeners can inspect/mutate productsData/config
		// on the event, or throw `new Error('cancelled')` to short-circuit before the store update.
		const eventObj: ProductQuickviewObj = {
			controller: this,
			result,
			productsData: resolvedProductsData,
			config: effectiveConfig,
		};
		try {
			await this.eventManager.fire('quickview', eventObj);
			if (token !== this.quickviewToken) return;
		} catch (err: any) {
			if (token !== this.quickviewToken) return;
			if (err?.message == 'cancelled') {
				this.log.warn(`'quickview' middleware cancelled`);
				this.store.reset();
				return;
			}
			this.log.error(`error in 'quickview' middleware`, err);
			this.store.setError({ message: `'quickview' middleware error`, cause: err });
			return;
		}

		// Wrap update() so a bad clone/variants payload surfaces via store.error instead of
		// leaving the modal stuck in loading state. `meta?.data` is the raw meta the cloned
		// Product needs for badge processing (the originating MetaStore was forwarded as `meta`).
		// The impression for the displayed product is not tracked here — the quickview containers
		// (ProductQuickviewModal / ProductQuickviewSlideout) observe their content via useTracking
		// and call track.product.impression when it is actually viewed.
		try {
			this.store.update({
				result: eventObj.result,
				productsData: eventObj.productsData,
				config: eventObj.config,
				storeConfig: controller?.config || this.config,
				meta: meta?.data,
			});
		} catch (err) {
			this.log.warn('quickview.update failed', err);
			this.store.setError({ message: 'Failed to display quickview', cause: err });
		}
	};
}
