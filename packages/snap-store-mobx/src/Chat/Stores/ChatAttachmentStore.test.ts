import { ChatAttachmentStore } from './ChatAttachmentStore';

const createStore = () => new ChatAttachmentStore();

describe('ChatAttachmentStore remove()', () => {
	it('does not throw when removing a nonexistent id', () => {
		const store = createStore();
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });

		expect(() => store.remove('nonexistent-id')).not.toThrow();
		expect(store.items.length).toBe(1);
	});

	it('leaves items unchanged when removing a nonexistent id', () => {
		const store = createStore();
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });
		const idBefore = store.items[0].id;

		store.remove('nonexistent-id');

		expect(store.items.length).toBe(1);
		expect(store.items[0].id).toBe(idBefore);
	});
});

describe('ChatAttachmentStore add() product requestType stamp', () => {
	it('does not set requestType on surviving non-product attachments when adding a product', () => {
		const store = createStore();

		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });
		const facetItem = store.items[0];

		// Force the facet into 'active' state so remove() calls save() instead of splicing it out,
		// meaning it survives in store.items through the product-add pass.
		(facetItem as any).state = 'active';

		store.add({
			type: 'product',
			productId: 'prod-1',
			thumbnailUrl: 'http://example.com/img.jpg',
			name: 'Widget',
			requestType: 'productComparison',
		});

		expect(store.items).toContain(facetItem);
		expect((facetItem as any).requestType).toBeUndefined();
	});

	it('updates requestType only on existing product attachments', () => {
		const store = createStore();

		store.add({
			type: 'product',
			productId: 'prod-1',
			thumbnailUrl: 'http://example.com/img.jpg',
			name: 'Widget A',
			requestType: 'productComparison',
		});

		store.add({
			type: 'product',
			productId: 'prod-2',
			thumbnailUrl: 'http://example.com/img2.jpg',
			name: 'Widget B',
			requestType: 'productComparison',
		});

		const productItems = store.items.filter((item) => item.type === 'product');
		productItems.forEach((item) => {
			expect((item as any).requestType).toBe('productComparison');
		});
	});
});
