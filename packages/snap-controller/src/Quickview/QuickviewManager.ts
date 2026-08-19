import deepmerge from 'deepmerge';

import { QuickviewStore } from '@athoscommerce/snap-store-mobx';

import type { ProductsResponseModel } from '@athoscommerce/snap-client';
import type { Product, QuickviewConfig, QuickviewStoreConfig } from '@athoscommerce/snap-store-mobx';
import type { AutocompleteController, RecommendationController, SearchController } from '../index';
import type { ProductQuickviewObj } from '../types';

// The controller that triggered the quickview. FinderController is excluded: the manager delegates
// add-to-cart and product tracking back to the opener, and finder has neither.
export type SourceController = SearchController | AutocompleteController | RecommendationController;

export type QuickviewManagerConfig = QuickviewStoreConfig;

export type QuickviewManagerServices = {
	store?: QuickviewStore;
};

export type QuickviewShowOptions = {
	productsData?: ProductsResponseModel; // when passed, the /v1/products fetch is skipped and this data is used as-is
	config?: QuickviewConfig; // per call config; wins over the source controller's and this manager's defaults
	controller: SourceController;
};

const defaultConfig: QuickviewManagerConfig = {
	id: 'quickview',
};

/**
 * Owns the product quickview modal state. Not a controller: quickview has no search lifecycle,
 * no url state and no tracking identity of its own — the product it displays is a clone of a
 * result from another controller's response, so tracking and add-to-cart are delegated back to
 * that controller (flagged `quickView: true`) rather than reimplemented here.
 *
 * Lives here rather than in snap-preact because it has no rendering dependency — the quickview
 * components consume it, not the reverse — which lets it be passed to controllers as the
 * `quickview` service instead of being looked up off the window. Within Snap it is created from
 * `config.quickview` and exposed as `snap.quickview` / `window.athos.quickview`.
 *
 * `show()` always runs on behalf of a source controller; there is no standalone mode.
 */
export class QuickviewManager {
	public readonly type = 'quickview';
	public config: QuickviewManagerConfig;
	public store: QuickviewStore;

	// The controller that opened the current quickview, used to delegate add-to-cart and tracking.
	public sourceController?: SourceController;

	// monotonic token identifying the most recent show() call; awaited continuations
	// from superseded calls must not write to the shared store.
	private token = 0;

	constructor({ store }: QuickviewManagerServices, config?: QuickviewManagerConfig) {
		this.config = deepmerge(defaultConfig, config || {});
		this.store = store || new QuickviewStore(this.config);
		this.store.setConfig(this.config);
	}

	// delegate addToCart to source controller
	public addToCart = async (products: Product[] | Product): Promise<void> => {
		await this.sourceController?.addToCart(products, { quickView: true });
	};

	// delegate tracking to source controller
	public track = {
		product: {
			clickThrough: (e: MouseEvent, result: Product): void => {
				this.sourceController?.track.product.clickThrough(e, result, { quickView: true });
			},
			click: (e: MouseEvent, result: Product): void => {
				this.sourceController?.track.product.click(e, result, { quickView: true });
			},
			impression: (result: Product): void => {
				this.sourceController?.track.product.impression(result, { quickView: true });
			},
			addToCart: (result: Product): void => {
				this.sourceController?.track.product.addToCart(result, { quickView: true });
			},
		},
	};

	/**
	 * Open the quickview for the given result and populate the store. All derivation lives here
	 * (config precedence, meta) so callers — including `AbstractController.quickview()` —
	 * can forward raw arguments. The result must carry `mappings.core.parentId` (the id used
	 * for the /v1/products request); results without one are rejected with a warning.
	 */
	public show = async (result: Product, options: QuickviewShowOptions): Promise<void> => {
		const source = options.controller;
		const { productsData, config } = options;

		if (!result || !result.mappings?.core?.parentId || result.type != 'product') {
			source.log.warn('No product provided to quickview');
			return;
		}

		// Claim delegation only after validation — a rejected call must not re-point
		// add-to-cart/tracking away from a quickview that is still in flight or on screen.
		this.sourceController = source;

		// Claim the shared store for this call. Any continuation below whose token is no longer
		// current belongs to a superseded show(), and a closed store means the shopper dismissed
		// the modal while it was loading — neither may write to the store.
		const token = ++this.token;
		const superseded = (): boolean => token != this.token || !this.store.isOpen;

		// The opener's meta store, for OverlayBadge / facet-label lookups on the shared store.
		const meta = source.store.meta;

		// Config precedence: manager defaults < source controller settings < per-call config.
		const effectiveConfig: QuickviewConfig = {
			...(this.config?.settings?.quickview || {}),
			...((source.config as { settings?: { quickview?: QuickviewConfig } } | undefined)?.settings?.quickview || {}),
			...(config || {}),
		};

		// Open the modal immediately in loading state, scoped to the triggering result.
		this.store.setLoading(true, result);

		const parentId = result.mappings?.core?.parentId as string;

		let resolvedProductsData: ProductsResponseModel | undefined = productsData;

		// `config.fetchProductData` defaults to true. When explicitly false, skip the
		// /v1/products call and rely on whatever data is already on the source result.
		if (!resolvedProductsData && effectiveConfig.fetchProductData !== false) {
			try {
				resolvedProductsData = await source.client.products({ parentId });
			} catch (err) {
				source.log.warn('Failed to load /v1/products for quickview', err);
				// generic error message as this is displayed to the user in QuickviewLayout
				this.store.setError({ message: `Failed to load quickview data`, cause: err });
			}
			if (superseded()) return;
		}

		// Fire the 'quickview' middleware on the originating controller's event manager — controllers
		// own plugin/middleware attachment, which also scopes interception per controller. Listeners
		// can inspect/mutate productsData/config on the event, or throw `new Error('cancelled')` to
		// short-circuit before the store update.
		const eventObj: ProductQuickviewObj = {
			controller: source,
			result,
			productsData: resolvedProductsData,
			config: effectiveConfig,
		};

		try {
			await source.eventManager.fire('quickview', eventObj);
		} catch (err: any) {
			if (superseded()) return;
			if (err?.message == 'cancelled') {
				source.log.warn(`'quickview' middleware cancelled`);
				this.store.reset();
				return;
			}
			source.log.error(`error in 'quickview' middleware`, err);
			// generic error message as this is displayed to the user in QuickviewLayout
			this.store.setError({ message: `Failed to load quickview`, cause: err });
			return;
		}

		if (superseded()) return;

		// Wrap update() so a bad clone/variants payload surfaces via store.error instead of
		// leaving the modal stuck in loading state. `meta?.data` is the raw meta the cloned
		// Product needs for badge processing.
		// The impression for the displayed product is not tracked here — the quickview containers
		// (ProductQuickviewModal / ProductQuickviewSlideout) observe their content via useTracking
		// and call track.product.impression when it is actually viewed.
		try {
			this.store.update({
				result: eventObj.result,
				productsData: eventObj.productsData,
				config: eventObj.config,
				storeConfig: eventObj.controller.store.config,
				meta: meta?.data,
			});
		} catch (err) {
			source.log.warn('quickview.update failed', err);
			this.store.setError({ message: 'Failed to display quickview', cause: err });
		}
	};
}
