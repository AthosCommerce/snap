import { ChatCompareStore, CHAT_COMPARISON_MAX } from './ChatCompareStore';

const makeItem = (id: string) => ({ result: { id } });

describe('ChatCompareStore', () => {
	it('has CHAT_COMPARISON_MAX equal to 4', () => {
		expect(CHAT_COMPARISON_MAX).toBe(4);
	});

	it('add pushes an item; compared getter reflects it', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		expect(store.compared.length).toBe(1);
		expect(store.compared[0].result.id).toBe('a');
	});

	it('add ignores a duplicate item with the same result.id', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.add(makeItem('a'));
		expect(store.compared.length).toBe(1);
	});

	it('add ignores items beyond maxItems — add 5, expect 4', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.add(makeItem('b'));
		store.add(makeItem('c'));
		store.add(makeItem('d'));
		store.add(makeItem('e'));
		expect(store.compared.length).toBe(4);
	});

	// NOTE: current behavior — an item without result.id skips the dedup guard
	// and is pushed unconditionally (as long as maxItems is not reached).
	it('add pushes an item lacking result.id (dedup guard short-circuits)', () => {
		const store = new ChatCompareStore();
		store.add({ result: {} });
		store.add({ result: {} });
		expect(store.compared.length).toBe(2);
	});

	it('remove filters by result.id', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.add(makeItem('b'));
		store.remove('a');
		expect(store.compared.length).toBe(1);
		expect(store.compared[0].result.id).toBe('b');
	});

	it('remove with an unknown id is a no-op', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.remove('unknown');
		expect(store.compared.length).toBe(1);
	});

	it('commit moves items to committedItems and clears items', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.add(makeItem('b'));
		store.commit();
		expect(store.items.length).toBe(0);
		expect(store.committed.length).toBe(2);
		expect(store.committed[0].result.id).toBe('a');
	});

	it('commit with empty items leaves committedItems untouched', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.commit();
		// second commit with empty items — committedItems should stay
		store.commit();
		expect(store.committed.length).toBe(1);
	});

	it('reset clears items', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.reset();
		expect(store.items.length).toBe(0);
	});

	it('resetCommitted clears committedItems', () => {
		const store = new ChatCompareStore();
		store.add(makeItem('a'));
		store.commit();
		expect(store.committed.length).toBe(1);
		store.resetCommitted();
		expect(store.committedItems.length).toBe(0);
	});
});
