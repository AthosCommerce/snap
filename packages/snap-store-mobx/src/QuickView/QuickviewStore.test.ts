import { isObservableProp } from 'mobx';
import { MockData } from '@athoscommerce/snap-shared';

import { QuickviewStore } from './QuickviewStore';
import { Product, SearchResultStore } from '../Search/Stores';
import type { SearchStoreConfig } from '../types';

const quickviewConfig = {
	id: 'quickview',
};

const searchConfig: SearchStoreConfig = {
	id: 'search',
};

// Builds real Product instances (as the source result tiles a quickview opens from) the same way
// SearchResultStore tests do. siteId '8uyt2m' results carry badges but no variants; siteId 'z7h1jh'
// file 'variants' results carry variants with optionConfig.
const sourceProducts = (siteId = '8uyt2m', file?: string, config: SearchStoreConfig = searchConfig) => {
	const data = new MockData().updateConfig({ siteId }).searchMeta(file);
	const results = new SearchResultStore({
		config,
		state: {
			loaded: false,
		},
		data: {
			search: data.search,
			meta: data.meta,
		},
	});

	return { data, results: results as Product[] };
};

// Raw variant payload in the shape the /v1/products endpoint returns.
const variantsProductsData = () => {
	const data = new MockData().updateConfig({ siteId: 'z7h1jh' }).searchMeta('variants');
	const raw = (data.search.results![0] as any).variants;
	return { variants: { data: raw.data, optionConfig: raw.optionConfig } };
};

describe('QuickviewStore', () => {
	beforeEach(() => {
		expect.hasAssertions();
	});

	it('constructs with defaults and keeps the passed config', () => {
		const store = new QuickviewStore(quickviewConfig);

		expect(store.config).toStrictEqual(quickviewConfig);
		expect(store.product).toBeUndefined();
		expect(store.isOpen).toBe(false);
		expect(store.resolvedConfig).toBeUndefined();
		expect(store.error).toBeUndefined();
		expect(store.loading).toBe(false);
	});

	it('has observable properties', () => {
		const store = new QuickviewStore(quickviewConfig);

		expect(isObservableProp(store, 'product')).toBe(true);
		expect(isObservableProp(store, 'isOpen')).toBe(true);
		expect(isObservableProp(store, 'resolvedConfig')).toBe(true);
		expect(isObservableProp(store, 'error')).toBe(true);
		expect(isObservableProp(store, 'loading')).toBe(true);
	});

	describe('update', () => {
		it('does nothing when no result is provided', () => {
			const store = new QuickviewStore(quickviewConfig);

			store.update({} as any);

			expect(store.product).toBeUndefined();
			expect(store.resolvedConfig).toBeUndefined();
		});

		it('clones the source result into a fresh Product by default', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const result = results[0];

			store.update({ result });

			const product = store.product!;
			expect(product).toBeInstanceOf(Product);
			expect(product).not.toBe(result);
			expect(product.id).toBe(result.id);
			expect(product.mappings.core).toEqual(result.mappings.core);
			expect(product.attributes).toEqual(result.attributes);
			expect(product.position).toBe(result.position);
			expect(product.responseId).toBe(result.responseId);
		});

		it('carries the source Badges instance onto the clone', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const result = results[0];
			expect(result.badges.all.length).toBeGreaterThan(0);

			store.update({ result });

			expect(store.product!.badges).toBe(result.badges);
		});

		it('seeds the clone with the variants the source result already carried', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts('z7h1jh', 'variants');
			const result = results[0];
			expect(result.variants).toBeDefined();

			store.update({ result });

			const variants = store.product!.variants!;
			expect(variants).not.toBe(result.variants);
			expect(variants.data.length).toBe(result.variants!.data.length);
			expect(variants.selections.length).toBe(result.variants!.selections.length);
		});

		it('creates an empty Variants instance on the clone when the source had none', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const result = results[0];
			expect(result.variants).toBeUndefined();

			store.update({ result });

			const variants = store.product!.variants!;
			expect(variants).toBeDefined();
			expect(variants.data.length).toBe(0);
			expect(variants.selections.length).toBe(0);
		});

		it('populates the empty-seeded clone from productsData with autoSelect forced on', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const result = results[0];
			const productsData = variantsProductsData();
			const availableCount = productsData.variants.data.filter((variant: any) => variant.mappings.core?.available !== false).length;

			store.update({ result, productsData });

			const variants = store.product!.variants!;
			expect(variants.data.length).toBe(availableCount);
			expect(variants.selections.length).toBe(Object.keys(productsData.variants.data[0].options).length);
			expect(variants.active).toBeDefined();
			expect(store.product!.display.mappings.core?.sku).toBe(variants.active!.mappings.core?.sku);
		});

		it('applies productsData optionConfig so selections get type and count', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const productsData = variantsProductsData();

			store.update({ result: results[0], productsData });

			const optionConfig = productsData.variants.optionConfig as Record<string, { type: string; count: number }>;
			store.product!.variants!.selections.forEach((selection) => {
				expect(selection.type).toBe(optionConfig[selection.field].type);
				expect(selection.count).toBe(optionConfig[selection.field].count);
			});
		});

		it('leaves selection type undefined when productsData has no optionConfig', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const productsData = variantsProductsData();
			delete (productsData.variants as any).optionConfig;

			store.update({ result: results[0], productsData });

			store.product!.variants!.selections.forEach((selection) => {
				expect(selection.type).toBeUndefined();
			});
		});

		it('honors storeConfig settings.variants when applying productsData', () => {
			const store = new QuickviewStore(quickviewConfig);
			const storeConfig: SearchStoreConfig = {
				id: 'search',
				settings: {
					variants: {
						showDisabledSelectionValues: true,
					},
				},
			};
			const { results } = sourceProducts();
			const productsData = variantsProductsData();

			store.update({ result: results[0], productsData, storeConfig });

			const variants = store.product!.variants!;
			expect(variants.data.length).toBe(productsData.variants.data.length);
			expect(variants.active).toBeDefined();
		});

		it('keeps variant selection on the clone from mutating the source result', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts('z7h1jh', 'variants');
			const result = results[0];
			const productsData = variantsProductsData();

			store.update({ result, productsData });

			expect(store.product!.variants!.active).toBeDefined();
			expect(Object.keys(store.product!.mask.data).length).toBeGreaterThan(0);
			expect(result.variants!.active).toBeUndefined();
			expect(result.mask.data).toEqual({});
		});

		it('initializes the modal selections from the tile selection, overriding autoSelect defaults', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts('z7h1jh', 'variants');
			const result = results[0];
			const productsData = variantsProductsData();

			// shopper picks a non-default value on the tile before opening quickview
			const tileSelection = result.variants!.selections.find((selection) => selection.values.filter((value) => value.available).length > 1)!;
			const availableValues = tileSelection.values.filter((value) => value.available);
			const chosen = availableValues[availableValues.length - 1];
			// guard: the choice must differ from the first-available default autoSelect would pick
			expect(chosen.value).not.toBe(availableValues[0].value);
			tileSelection.select(chosen.value);

			store.update({ result, productsData });

			const modalSelection = store.product!.variants!.selections.find((selection) => selection.field === tileSelection.field)!;
			expect(modalSelection.selected?.value).toBe(chosen.value);
		});

		it('initializes the modal selections from the tile selection when productsData is skipped', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts('z7h1jh', 'variants');
			const result = results[0];

			const tileSelection = result.variants!.selections.find((selection) => selection.values.filter((value) => value.available).length > 1)!;
			const availableValues = tileSelection.values.filter((value) => value.available);
			const chosen = availableValues[availableValues.length - 1];
			tileSelection.select(chosen.value);

			store.update({ result });

			const modalSelection = store.product!.variants!.selections.find((selection) => selection.field === tileSelection.field)!;
			expect(modalSelection.selected?.value).toBe(chosen.value);
		});

		it('uses the source result directly when clone is false', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts('z7h1jh', 'variants');
			const result = results[0];
			const productsData = variantsProductsData();

			store.update({ result, productsData, config: { clone: false } });

			expect(store.product).toBe(result);
			expect(result.variants!.active).toBeDefined();
		});

		it('preserves the tile selection across the productsData rebuild when clone is false', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts('z7h1jh', 'variants');
			const result = results[0];
			const productsData = variantsProductsData();

			const tileSelection = result.variants!.selections.find((selection) => selection.values.filter((value) => value.available).length > 1)!;
			const availableValues = tileSelection.values.filter((value) => value.available);
			const chosen = availableValues[availableValues.length - 1];
			tileSelection.select(chosen.value);

			// the update rebuilds this same product's selections (autoSelect defaults) — the
			// captured tile selection must survive the reset
			store.update({ result, productsData, config: { clone: false } });

			expect(store.product).toBe(result);
			const rebuiltSelection = result.variants!.selections.find((selection) => selection.field === tileSelection.field)!;
			expect(rebuiltSelection.selected?.value).toBe(chosen.value);
		});

		it('skips productsData when clone is false and the source has no Variants instance', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const result = results[0];
			expect(result.variants).toBeUndefined();

			store.update({ result, productsData: variantsProductsData(), config: { clone: false } });

			expect(store.product).toBe(result);
			expect(store.product!.variants).toBeUndefined();
		});

		it('stores the per-quickview config and clears a previous error', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();
			const config = { displayFields: [{ field: 'name' }, { field: 'price', type: 'price' as const }], imagesField: 'ss_images' };
			store.error = { message: 'previous failure' };

			store.update({ result: results[0], config });

			expect(store.resolvedConfig).toStrictEqual(config);
			expect(store.error).toBeUndefined();
		});
	});

	describe('reset', () => {
		it('clears the product, config, error, and open/loading state', () => {
			const store = new QuickviewStore(quickviewConfig);
			const { results } = sourceProducts();

			store.update({ result: results[0], config: { displayFields: [{ field: 'name' }] } });
			store.isOpen = true;
			store.loading = true;
			store.error = { message: 'failure' };

			store.reset();

			expect(store.product).toBeUndefined();
			expect(store.resolvedConfig).toBeUndefined();
			expect(store.isOpen).toBe(false);
			expect(store.loading).toBe(false);
			expect(store.error).toBeUndefined();
		});
	});
});
