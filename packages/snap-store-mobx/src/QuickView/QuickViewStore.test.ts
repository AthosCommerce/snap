import { QuickViewStore } from './QuickViewStore';
import { Product } from '../Search/Stores';

// Build a stub Product-shaped object that survives the Product constructor's
// JSON-deep-clone round-trip. Keep it minimal — we only need id/attributes/mappings.
const makeFakeProduct = (overrides: Partial<Product> = {}): Product =>
	({
		id: 'fake-id',
		type: 'product',
		attributes: {},
		mappings: { core: {} },
		...overrides,
	} as unknown as Product);

describe('QuickViewStore', () => {
	it('starts closed with no product', () => {
		const store = new QuickViewStore();
		expect(store.isOpen).toBe(false);
		expect(store.product).toBeUndefined();
		expect(store.loading).toBe(false);
		expect(store.config).toBeUndefined();
	});

	it('close() hides the modal but retains the product', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'p1' });
		store.update({ result: source });
		const opened = store.product;

		store.close();

		expect(store.isOpen).toBe(false);
		expect(store.product).toBe(opened);
	});

	it('update({ result }) clones the result into a fresh Product instance', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'a' });

		store.update({ result: source });

		expect(store.isOpen).toBe(true);
		expect(store.product).toBeInstanceOf(Product);
		expect(store.product?.id).toBe('a');
		// The clone is not identity-equal to the source.
		expect(store.product).not.toBe(source);
	});

	it('reset() clears product and closes', () => {
		const store = new QuickViewStore();
		store.update({ result: makeFakeProduct({ id: 'p1' }) });

		store.reset();

		expect(store.product).toBeUndefined();
		expect(store.isOpen).toBe(false);
		expect(store.config).toBeUndefined();
		expect(store.loading).toBe(false);
	});

	it('setLoading(true, source) opens the modal in loading state and stores the source as product', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'src-id' });

		store.setLoading(true, source);

		expect(store.isOpen).toBe(true);
		expect(store.loading).toBe(true);
		// The source is stored as `product` so the modal can scope by product.id during the fetch.
		expect(store.product).toBe(source);
	});

	it('update(...) flips loading back to false and replaces the source with the clone', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'src-id' });
		store.setLoading(true, source);
		expect(store.loading).toBe(true);
		expect(store.product).toBe(source);

		store.update({ result: source });

		expect(store.loading).toBe(false);
		// After update the product is the clone, not the source reference.
		expect(store.product).not.toBe(source);
		expect(store.product?.id).toBe('src-id');
	});

	it('update({ result, config }) stores the config on the store', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'a' });

		store.update({ result: source, config: { displayFields: ['size'] } });

		expect(store.config).toEqual({ displayFields: ['size'] });
	});

	it('update({ result, config: { clone: false } }) uses the source result by reference (no clone)', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'a' });

		store.update({ result: source, config: { clone: false } });

		// Identity-equal to the source; no Product re-instantiation happened.
		expect(store.product).toBe(source);
		expect(store.isOpen).toBe(true);
	});

	it('update({ result }) (no config) clones by default', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'a' });

		store.update({ result: source });

		expect(store.product).not.toBe(source);
		expect(store.product).toBeInstanceOf(Product);
	});

	it('setError(...) surfaces an error, flips loading off, and keeps the modal open', () => {
		const store = new QuickViewStore();
		store.setLoading(true, makeFakeProduct({ id: 'src-id' }));

		store.setError({ message: 'something blew up', cause: new Error('boom') });

		expect(store.error?.message).toBe('something blew up');
		expect(store.loading).toBe(false);
		expect(store.isOpen).toBe(true);
	});

	it('setLoading(true, ...) clears any previously-set error', () => {
		const store = new QuickViewStore();
		store.setError({ message: 'old failure' });

		store.setLoading(true, makeFakeProduct({ id: 'src-id' }));

		expect(store.error).toBeUndefined();
		expect(store.loading).toBe(true);
	});

	it('successful update(...) clears any previously-set error', () => {
		const store = new QuickViewStore();
		store.setError({ message: 'old failure' });

		store.update({ result: makeFakeProduct({ id: 'p1' }) });

		expect(store.error).toBeUndefined();
		expect(store.product).toBeDefined();
	});

	it('reset() clears the error', () => {
		const store = new QuickViewStore();
		store.setError({ message: 'old failure' });

		store.reset();

		expect(store.error).toBeUndefined();
	});

	it('update({ result, productsData: { variants: { data: undefined } } }) does not throw or call variants.update', () => {
		// Mirrors the path when /v1/products returns a response without variants — the
		// store should populate `product` happily without trying to call `variants.update`.
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'a' });
		const productsData = { mappings: { core: {} }, variants: { data: undefined as any } };

		expect(() => store.update({ result: source, productsData })).not.toThrow();
		expect(store.product?.id).toBe('a');
		expect(store.isOpen).toBe(true);
	});

	it('close() followed by update(...) re-opens with the freshly-updated product', () => {
		const store = new QuickViewStore();
		store.update({ result: makeFakeProduct({ id: 'first' }) });
		store.close();
		expect(store.isOpen).toBe(false);

		// Update with a different result — the store should re-open with the new clone,
		// not retain stale state from the first call.
		store.update({ result: makeFakeProduct({ id: 'second' }) });

		expect(store.isOpen).toBe(true);
		expect(store.product?.id).toBe('second');
	});

	it('update({ result, productsData }) populates clone variants from productsData', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'a' });
		const productsData = {
			mappings: { core: {} },
			variants: {
				data: [
					{ attributes: { color: 'red' }, mappings: { core: { uid: 'v1' } } },
					{ attributes: { color: 'blue' }, mappings: { core: { uid: 'v2' } } },
				],
			},
		};

		store.update({ result: source, productsData });

		expect(store.product?.variants).toBeDefined();
		expect((store.product?.variants as any)?.data?.length).toBe(2);
	});

	it("preserves the source product's badges instance on the clone", () => {
		const store = new QuickViewStore();
		const badges = { all: [], atLocation: () => [] };
		const source = makeFakeProduct({ id: 'p1', badges } as any);

		store.update({ result: source });

		// Clone is a fresh Product, but the source's Badges instance is carried over by reference
		// (it doesn't survive the JSON round-trip, so it's reattached).
		expect(store.product).not.toBe(source);
		expect((store.product as any).badges).toBe(badges);
	});

	it('populates selection.type from productsData.variants.optionConfig', () => {
		const store = new QuickViewStore();
		const source = makeFakeProduct({ id: 'p1' });
		const productsData = {
			mappings: { core: {} },
			variants: {
				optionConfig: { color: { count: 2, type: 'swatches' } },
				data: [
					{ attributes: { color: 'Indigo' }, mappings: { core: { uid: 'v1', available: true } }, options: { color: { value: 'Indigo' } } },
					{ attributes: { color: 'Lavender' }, mappings: { core: { uid: 'v2', available: true } }, options: { color: { value: 'Lavender' } } },
				],
			},
		};

		store.update({ result: source, productsData });

		const colorSelection = (store.product?.variants as any)?.selections?.find((s: any) => s.field === 'color');
		expect(colorSelection).toBeDefined();
		// The optionConfig type flows through to the selection so the UI can pick swatches vs dropdown.
		expect(colorSelection.type).toBe('swatches');
		expect(colorSelection.count).toBe(2);
	});
});
