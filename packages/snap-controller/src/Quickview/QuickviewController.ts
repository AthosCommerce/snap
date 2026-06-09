import deepmerge from 'deepmerge';

import { Product } from '@athoscommerce/snap-store-mobx';
import type { QuickviewConfig, QuickviewStore } from '@athoscommerce/snap-store-mobx';
import type { ProductsResponseModel } from '@athoscommerce/snap-client';
import { AbstractController } from '../Abstract/AbstractController';
import { ControllerTypes } from '../types';
import type { QuickviewControllerConfig, ControllerServices, ContextVariables, ProductQuickviewObj } from '../types';

const defaultConfig: QuickviewControllerConfig = {
	id: 'quickview',
};

// Minimal shape of the controller that triggered the quickview. The modal delegates
// actions that need platform integration (e.g. add-to-cart) back to it.
type SourceController = {
	addToCart?: (products: Product[] | Product) => Promise<void> | void;
};

export class QuickviewController extends AbstractController {
	public type = ControllerTypes.quickview;
	declare store: QuickviewStore;
	declare config: QuickviewControllerConfig;

	// The controller that opened the current quickview, used to delegate add-to-cart.
	private sourceController?: SourceController;

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
	public addToCart = async (products: Product[] | Product): Promise<void> => {
		if (this.sourceController?.addToCart) {
			await this.sourceController.addToCart(products);
		} else {
			this.log.warn('Quickview has no originating controller to handle addToCart');
		}
	};

	public quickview = async ({
		result,
		productsData,
		parentId,
		config,
		meta,
		controller,
	}: {
		result: Product;
		productsData?: ProductsResponseModel;
		parentId?: string;
		config?: QuickviewConfig;
		// The originating controller's `meta` store (a MetaStore), forwarded for badge/facet labels.
		meta?: any;
		// The controller that opened the quickview, for delegated actions like add-to-cart.
		controller?: SourceController;
	}): Promise<void> => {
		if (!result) {
			this.log.warn('No result provided to quickview');
			return;
		}

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
		} catch (err: any) {
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
		try {
			this.store.update({
				result: eventObj.result,
				productsData: eventObj.productsData,
				config: eventObj.config,
				storeConfig: this.config,
				meta: meta?.data,
			});
		} catch (err) {
			this.log.warn('quickview.update failed', err);
			this.store.setError({ message: 'Failed to display quickview', cause: err });
		}
	};
}
