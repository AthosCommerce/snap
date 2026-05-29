import { action, makeObservable, observable } from 'mobx';

import { Product } from '../Search/Stores';

// Structural type — avoids a dependency on snap-client.
export type QuickViewProductsData = {
	mappings?: { core?: Record<string, any> };
	variants?: { data?: any[] };
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
};

export type QuickViewUpdateArgs = {
	result: Product;
	productsData?: QuickViewProductsData;
	config?: QuickViewConfig;
	// Optional store-config passthrough, used when cloning so variants pick up the existing variants settings.
	storeConfig?: any;
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
	public triggeringResultId?: string = undefined;
	public error?: QuickViewError = undefined;

	constructor() {
		makeObservable(this, {
			product: observable.ref,
			isOpen: observable,
			loading: observable,
			config: observable,
			triggeringResultId: observable,
			error: observable,
			update: action,
			close: action,
			reset: action,
			setLoading: action,
			setError: action,
		});
	}

	// Open the modal in loading state. Used by setQuickView while it awaits productsData.
	// Clears any prior error so a retry starts fresh.
	public setLoading(loading: boolean, resultId?: string): void {
		this.loading = loading;
		if (loading) {
			this.isOpen = true;
			this.triggeringResultId = resultId;
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
		}

		// Apply variants from /v1/products if available. Force autoSelect on so a default
		// is picked the moment data arrives. Skipped when productsData has no variants OR
		// the product has no Variants instance to update (e.g. clone=false on a result
		// whose search response carried no variants).
		if (productsData?.variants?.data && product.variants) {
			product.variants.update(productsData.variants.data, {
				...(storeConfig?.settings?.variants || {}),
				autoSelect: true,
			});
		}

		this.product = product;
		this.config = config;
		this.isOpen = true;
		this.loading = false;
		this.error = undefined;
		// The product itself now scopes the modal; the triggering id is no longer needed.
		this.triggeringResultId = undefined;
	}

	public close(): void {
		this.isOpen = false;
	}

	public reset(): void {
		this.product = undefined;
		this.config = undefined;
		this.isOpen = false;
		this.loading = false;
		this.triggeringResultId = undefined;
		this.error = undefined;
	}
}
