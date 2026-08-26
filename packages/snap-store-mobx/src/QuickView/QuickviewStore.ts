import { action, makeObservable, observable } from 'mobx';
import { AbstractStore } from '../Abstract/AbstractStore';
import { Product } from '../Search/Stores';
import type { QuickviewStoreConfig, StoreConfigs, SearchStoreConfig } from '../types';

// Structural type — avoids a dependency on snap-client.
export type QuickviewProductsData = {
	mappings?: { core?: Record<string, any> };
	variants?: { data?: any[]; optionConfig?: Record<string, any> };
};

export type QuickviewConfig = {
	displayFields?: string[] | ((result: Product) => string[]);
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

export type QuickviewUpdateArgs = {
	result: Product;
	productsData?: QuickviewProductsData;
	config?: QuickviewConfig;
	storeConfig?: StoreConfigs;
	// Optional raw meta data passthrough for badges processing.
	meta?: Record<string, any>;
};

export type QuickviewError = {
	message: string;
	cause?: unknown;
};

export class QuickviewStore extends AbstractStore<QuickviewStoreConfig> {
	public product?: Product = undefined;
	public isOpen = false;
	// Per-quickview config for the currently-open modal, set on each `update()` and read by the
	// modal (displayFields, imagesField). Distinct from the store-level `config` (QuickviewStoreConfig).
	public resolvedConfig: QuickviewConfig | undefined = undefined;
	public error: QuickviewError | undefined = undefined;

	constructor(config: QuickviewStoreConfig) {
		super(config);

		makeObservable(this, {
			product: observable.ref,
			isOpen: observable,
			resolvedConfig: observable,
			error: observable,
			update: action,
			reset: action,
		});
	}

	// Build (or reuse) the Product instance and populate variants from productsData.
	// Honors config.clone (default true). When clone is false, the source result is used
	// directly and variant interactions in the modal will mutate the source result tile.
	public update({ result, productsData, config, meta, storeConfig }: QuickviewUpdateArgs): void {
		if (!result) return;

		// Capture the source tile's current variant choices before anything mutates them, and
		// re-apply them after the variants are (re)built below. With cloning (default) this is a
		// point-in-time snapshot onto an independent product — no live link after open. With
		// clone: false the productsData update rebuilds this same product's selections, so the
		// capture preserves the tile's selection across that reset. Keys lowercased to match
		// makeSelections' lookup.
		const sourceSelections: Record<string, string[]> = {};
		result.variants?.selections.forEach((selection) => {
			if (selection.selected?.value !== undefined) {
				sourceSelections[selection.field.toLowerCase()] = [selection.selected.value];
			}
		});

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

			// Seed variants from the source result's serialized variant data — a round-tripped
			// Variant matches the raw VariantData shape — so the clone keeps the variants the
			// source result already carried when the /v1/products fetch is skipped
			// (fetchProductData: false). The seed (even when empty) also guarantees a
			// Variants instance exists for the productsData update below to populate.
			product = new Product({
				data: {
					result: {
						...rawResult,
						badges: undefined,
						variants: { data: rawResult.variants?.data || [], optionConfig: rawResult.variants?.optionConfig },
					},
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

		// Initialize the modal's selections from the tile's captured choices. Runs after the
		// productsData update above (whose autoSelect picks defaults) so the shopper's selection
		// wins; makeSelections keeps the default for any option the modal's variant data no
		// longer offers.
		if (Object.keys(sourceSelections).length) {
			product.variants?.makeSelections(sourceSelections);
		}

		this.product = product;
		this.resolvedConfig = config;
		this.error = undefined;
	}

	public reset(): void {
		this.product = undefined;
		this.resolvedConfig = undefined;
		this.isOpen = false;
		this.loading = false;
		this.error = undefined;
	}
}
