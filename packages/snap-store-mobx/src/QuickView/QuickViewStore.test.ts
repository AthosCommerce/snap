import { QuickviewStore } from './QuickviewStore';

describe('QuickviewStore', () => {
	it('returns correct initial state', () => {
		const store = new QuickviewStore();
		expect(store.isOpen).toBe(false);
		expect(store.loading).toBe(false);
		expect(store.product).toBeUndefined();
		expect(store.config).toBeUndefined();
		expect(store.error).toBeUndefined();
	});

	it('setLoading opens the modal and stores the product', () => {
		const store = new QuickviewStore();
		const mockProduct = { id: 'abc' } as any;
		store.setLoading(true, mockProduct);
		expect(store.loading).toBe(true);
		expect(store.isOpen).toBe(true);
		expect(store.product).toBe(mockProduct);
		expect(store.error).toBeUndefined();
	});

	it('setLoading with false does not close the modal', () => {
		const store = new QuickviewStore();
		store.setLoading(true, { id: 'abc' } as any);
		store.setLoading(false);
		expect(store.loading).toBe(false);
		expect(store.isOpen).toBe(true);
	});

	it('setError opens the modal and stops loading', () => {
		const store = new QuickviewStore();
		store.setLoading(true, { id: 'abc' } as any);
		store.setError({ message: 'something went wrong' });
		expect(store.error).toEqual({ message: 'something went wrong' });
		expect(store.loading).toBe(false);
		expect(store.isOpen).toBe(true);
	});

	it('setError with undefined clears the error', () => {
		const store = new QuickviewStore();
		store.setError({ message: 'oops' });
		store.setError(undefined);
		expect(store.error).toBeUndefined();
		expect(store.loading).toBe(false);
	});

	it('close sets isOpen to false', () => {
		const store = new QuickviewStore();
		store.setLoading(true, { id: 'abc' } as any);
		store.close();
		expect(store.isOpen).toBe(false);
	});

	it('reset returns to initial state', () => {
		const store = new QuickviewStore();
		store.setLoading(true, { id: 'abc' } as any);
		store.reset();
		expect(store.isOpen).toBe(false);
		expect(store.loading).toBe(false);
		expect(store.product).toBeUndefined();
		expect(store.config).toBeUndefined();
		expect(store.error).toBeUndefined();
	});
});
