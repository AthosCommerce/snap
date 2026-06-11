import { ChatSessionStore } from './ChatSessionStore';

// minimal mock for StorageStore — only `set` and `get` are needed by ChatSessionStore
const createMockStorage = () =>
	({
		state: {},
		set: jest.fn(),
		get: jest.fn(),
	} as any);

const createStore = () =>
	new ChatSessionStore({
		data: { sessionId: 'test-session' },
		stores: { storage: createMockStorage() },
	});

describe('ChatSessionStore productQuery messages', () => {
	it('pushProductQueryMessage adds a productQuery chat message', () => {
		const store = createStore();
		const fakeResult = { id: 'prod1', mappings: { core: {} } };
		store.pushProductQueryMessage(fakeResult);

		expect(store.chat.length).toBe(1);
		expect(store.chat[0].messageType).toBe('productQuery');
		expect((store.chat[0] as any).sourceProduct.id).toBe('prod1');
	});

	it('pushProductQueryMessage replaces stacked productQuery messages', () => {
		const store = createStore();

		store.pushProductQueryMessage({ id: 'prod1' });
		store.pushProductQueryMessage({ id: 'prod2' });

		expect(store.chat.length).toBe(1);
		expect((store.chat[0] as any).sourceProduct.id).toBe('prod2');
	});

	it('popProductQueryMessage removes productQuery messages', () => {
		const store = createStore();

		store.pushProductQueryMessage({ id: 'prod1' });
		expect(store.chat.length).toBe(1);

		store.popProductQueryMessage();
		expect(store.chat.length).toBe(0);
	});

	it('popProductQueryMessage restores activeMessageId', () => {
		const store = createStore();

		store.pushProductQueryMessage({ id: 'prod1' });
		store.popProductQueryMessage('restored-msg-id');

		expect(store.activeMessageId).toBe('restored-msg-id');
	});

	it('does not contain productQuickview or productQuickviewError properties', () => {
		const store = createStore();
		// productQuickview was moved to ChatStore — verify it no longer exists here
		expect((store as any).productQuickview).toBeUndefined();
		expect((store as any).productQuickviewError).toBeUndefined();
	});
});
