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

	it('setLoading(true) opens the modal in loading state with no product', () => {
		const store = new QuickViewStore();

		store.setLoading(true, 'src-id');

		expect(store.isOpen).toBe(true);
		expect(store.loading).toBe(true);
		expect(store.product).toBeUndefined();
		expect(store.triggeringResultId).toBe('src-id');
	});

	it('update(...) flips loading back to false', () => {
		const store = new QuickViewStore();
		store.setLoading(true, 'src-id');
		expect(store.loading).toBe(true);

		store.update({ result: makeFakeProduct({ id: 'src-id' }) });

		expect(store.loading).toBe(false);
		expect(store.triggeringResultId).toBeUndefined();
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
		store.setLoading(true, 'src-id');

		store.setError({ message: 'something blew up', cause: new Error('boom') });

		expect(store.error?.message).toBe('something blew up');
		expect(store.loading).toBe(false);
		expect(store.isOpen).toBe(true);
	});

	it('setLoading(true, ...) clears any previously-set error', () => {
		const store = new QuickViewStore();
		store.setError({ message: 'old failure' });

		store.setLoading(true, 'src-id');

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
});
