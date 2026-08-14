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

describe('ChatAttachmentStore add() image branch', () => {
	it('removes ALL existing attachments when adding an image (no skips while splicing)', () => {
		const store = createStore();
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'blue', label: 'Blue', count: 3 });
		expect(store.items.length).toBe(2);

		store.add({ type: 'image', fileName: 'photo.jpg' });

		expect(store.items.length).toBe(1);
		expect(store.items[0].type).toBe('image');
	});

	it('replaces a previous image with the new one', () => {
		const store = createStore();
		store.add({ type: 'image', fileName: 'first.jpg' });
		store.add({ type: 'image', fileName: 'second.jpg' });

		expect(store.items.length).toBe(1);
		expect((store.items[0] as any).fileName).toBe('second.jpg');
	});
});

describe('ChatAttachmentStore add() product branch', () => {
	const productConfig = (id: string, requestType: 'productQuery' | 'productSimilar' | 'productComparison' = 'productComparison') => ({
		type: 'product' as const,
		productId: id,
		thumbnailUrl: `http://example.com/${id}.jpg`,
		name: `Product ${id}`,
		requestType,
	});

	it('productSimilar replaces ALL existing attachments including multiple facets', () => {
		const store = createStore();
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'blue', label: 'Blue', count: 3 });

		store.add(productConfig('prod-1', 'productSimilar'));

		expect(store.items.length).toBe(1);
		expect((store.items[0] as any).productId).toBe('prod-1');
	});

	it('dedupes an already-attached product and updates its requestType', () => {
		const store = createStore();
		const first = store.add(productConfig('prod-1', 'productQuery'));
		const second = store.add(productConfig('prod-1', 'productComparison'));

		expect(second).toBe(first);
		expect(store.items.length).toBe(1);
		expect((first as any).requestType).toBe('productComparison');
	});

	it('caps comparison attachments at the comparison max by trimming the oldest', () => {
		const store = createStore();
		for (let i = 1; i <= 5; i++) {
			store.add(productConfig(`prod-${i}`));
		}

		const productIds = store.items.filter((item) => item.type === 'product').map((item: any) => item.productId);
		expect(productIds.length).toBe(4);
		expect(productIds).not.toContain('prod-1');
		expect(productIds).toContain('prod-5');
	});
});

describe('ChatAttachmentStore add() facet dedup', () => {
	it('returns the existing attachment for the same facet key/value', () => {
		const store = createStore();
		const first = store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });
		const second = store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });

		expect(second).toBe(first);
		expect(store.items.length).toBe(1);
	});

	it('removes non-facet attachments when adding a facet', () => {
		const store = createStore();
		store.add({ type: 'image', fileName: 'photo.jpg' });
		store.add({ type: 'facet', key: 'color', facetLabel: 'Color', value: 'red', label: 'Red', count: 5 });

		expect(store.items.length).toBe(1);
		expect(store.items[0].type).toBe('facet');
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
