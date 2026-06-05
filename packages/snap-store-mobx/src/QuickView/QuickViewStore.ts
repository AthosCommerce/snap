import { action, makeObservable, observable } from 'mobx';

import { Product } from '../Search/Stores';
import type { StoreConfigs, SearchStoreConfig } from '../types';

// Structural type — avoids a dependency on snap-client.
export type QuickViewProductsData = {
	mappings?: { core?: Record<string, any> };
	variants?: { data?: any[]; optionConfig?: Record<string, any> };
};

export type QuickViewConfig = {
	displayFields?: string[];
	// When false, the source `result` is used directly as the modal's product (no cloning).
	// Variant selection in the modal will then mutate the source result tile. Default: true.
	clone?: boolean;
	// When false, the controller skips the /v1/products fetch and the modal renders whatever
	// data is already on the source result (any variants the search response carried).
	// Default: true.
	fetchProductData?: boolean;
	// Field name(s) (looked up on the product's mappings.core, then attributes) holding a list
	// of image URLs. Accepts a single field name or an array of candidate names tried in order;
	// the first that resolves to more than one image is rendered in a 1-per-view carousel instead
	// of the single core image. When omitted, defaults to trying 'images' then 'ss_images'.
	imagesField?: string | string[];
};

export type QuickViewUpdateArgs = {
	result: Product;
	productsData?: QuickViewProductsData;
	config?: QuickViewConfig;
	// Optional store-config passthrough, used when cloning so variants pick up the existing variants settings.
	storeConfig?: StoreConfigs;
	// Optional meta passthrough for badges processing.
	meta?: any;
};

export type QuickViewError = {
	message: string;
	cause?: unknown;
};

export class QuickViewStore {
	public product?: Product = undefined;
	public isOpen = false;
	public loading = false;
	public config?: QuickViewConfig = undefined;
	public error?: QuickViewError = undefined;

	constructor() {
		makeObservable(this, {
			product: observable.ref,
			isOpen: observable,
			loading: observable,
			config: observable,
			error: observable,
			update: action,
			close: action,
			reset: action,
			setLoading: action,
			setError: action,
		});
	}

	// Open the modal in a loading state for the given source product/result. The source is
	// stored as `product` immediately so consumers can scope the modal by `product.id` during
	// the fetch (only a spinner renders in this phase — no mutation risk). `update` later
	// replaces it with the cloned product. Clears any prior error so a retry starts fresh.
	public setLoading(loading: boolean, product?: Product): void {
		this.loading = loading;
		if (loading) {
			this.isOpen = true;
			this.product = product;
			this.error = undefined;
		}
	}

	// Surface a fatal error from the controller (e.g. an exception inside update()).
	// The modal will render an error branch instead of the product. Flips loading off
	// to ensure the spinner doesn't remain stuck.
	public setError(error: QuickViewError | undefined): void {
		this.error = error;
		this.loading = false;
		if (error) {
			this.isOpen = true;
		}
	}

	// Build (or reuse) the Product instance and populate variants from productsData.
	// Honors config.clone (default true). When clone is false, the source result is used
	// directly and variant interactions in the modal will mutate the source result tile.
	public update({ result, productsData, config, storeConfig, meta }: QuickViewUpdateArgs): void {
		if (!result) return;

		let product: Product;

		if (config?.clone === false) {
			// Caller opted out of cloning — use the source result directly.
			product = result;
		} else {
			// Default: deep-clone into a fresh Product instance so variant selection in
			// the modal can't leak back to the source result tile. Drop `badges` because
			// the source Product's Badges instance JSON-serializes to {all: [...]} which
			// isn't the raw array the Product constructor expects.
			const rawResult = JSON.parse(JSON.stringify(result));

			product = new Product({
				data: {
					result: { ...rawResult, badges: undefined, variants: { data: [] } },
					meta: meta || {},
				},
				config: storeConfig,
				position: result.position ?? 0,
				responseId: result.responseId,
			} as any);

			// Carry the source product's Badges instance onto the clone (it was dropped above
			// because it doesn't survive the JSON round-trip). Badges are display-only and not
			// mutated by variant selection (which writes to the mask), so sharing the instance is
			// safe — and `display` merges with `isPlainObject`, preserving its prototype/methods.
			if ((result as any).badges) {
				product.badges = (result as any).badges;
			}
		}

		// Apply variants from /v1/products if available. Force autoSelect on so a default
		// is picked the moment data arrives. Skipped when productsData has no variants OR
		// the product has no Variants instance to update (e.g. clone=false on a result
		// whose search response carried no variants).
		if (productsData?.variants?.data && product.variants) {
			// Carry the API's optionConfig onto the Variants instance before updating. `update`
			// reads `this.optionConfig?.[field]` when (re)building each VariantSelection, which is
			// what populates `selection.type` ('dropdown' | 'swatches') and `count`. Without this,
			// the empty-seeded clone would have no optionConfig and every selection would fall back
			// to a dropdown.
			if (productsData.variants.optionConfig) {
				product.variants.optionConfig = productsData.variants.optionConfig as any;
			}
			// Cast through SearchStoreConfig to read settings.variants: the StoreConfigs union
			// includes FinderStoreConfig (which has no typed `settings`), so a bare access on
			// the union won't compile. Mirrors how the Product constructor reads variants config.
			product.variants.update(productsData.variants.data, {
				...((storeConfig as SearchStoreConfig)?.settings?.variants || {}),
				autoSelect: true,
			});
		}

		this.product = product;
		this.config = config;
		this.isOpen = true;
		this.loading = false;
		this.error = undefined;
	}

	public close(): void {
		this.isOpen = false;
	}

	public reset(): void {
		this.product = undefined;
		this.config = undefined;
		this.isOpen = false;
		this.loading = false;
		this.error = undefined;
	}
}
