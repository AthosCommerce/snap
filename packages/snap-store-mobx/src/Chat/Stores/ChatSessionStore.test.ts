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

describe('ChatSessionStore productSearch request messages', () => {
	it('uses the searchTerm as the message text even when searchFilters are present', () => {
		const store = createStore();
		store.request({
			context: {},
			data: {
				requestType: 'productSearch',
				searchTerm: 'short modern bench for dog to reach the bed',
				searchFilters: [{ key: 'product_type', options: [{ key: 'Furniture/Living Room Furniture/Benches' }] }],
			},
			tracking: {},
		} as any);

		expect(store.chat.length).toBe(1);
		expect(store.chat[0].messageType).toBe('user');
		expect((store.chat[0] as any).text).toBe('short modern bench for dog to reach the bed');
	});

	it('uses the "Filter by" text when only searchFilters are present', () => {
		const store = createStore();
		store.request({
			context: {},
			data: {
				requestType: 'productSearch',
				searchFilters: [{ key: 'product_type', options: [{ key: 'Benches' }] }],
			},
			tracking: {},
		} as any);

		expect(store.chat.length).toBe(1);
		expect((store.chat[0] as any).text).toBe('Filter by product_type Benches');
	});
});

describe('ChatSessionStore badge persistence', () => {
	const meta: any = {
		badges: {
			locations: {
				left: [{ tag: 'left-middle', name: 'Left Middle' }],
				callout: [{ tag: 'callout', name: 'Callout' }],
			},
			groups: {
				overlay: { grid: [['left-middle']], sections: ['left'] },
			},
			tags: {
				'on-sale': {
					location: 'left/left-middle',
					component: 'BadgeText',
					priority: 2,
					enabled: true,
					parameters: { color: '#0000FF', colorText: '#FFFFFF' },
				},
			},
		},
	};

	const rawResult: any = {
		id: 'prod1',
		mappings: { core: { uid: 'prod1', name: 'Product 1', price: 10 } },
		attributes: {},
		badges: [{ tag: 'on-sale', value: '20% off' }],
	};

	it('keeps badges (including value) through save, JSON round trip, and rehydration', () => {
		const saved: Record<string, any> = {};
		const storage = {
			state: {},
			set: jest.fn((key: string, value: any) => {
				saved[key] = value;
			}),
			get: jest.fn((key: string) => saved[key]),
		} as any;

		const store = new ChatSessionStore({
			data: { sessionId: 'test-session' },
			stores: { storage },
		});

		store.update({
			chat: {
				context: { sessionId: 'test-session' },
				data: [{ messageType: 'productSearchResult', id: 'msg1', results: [rawResult] }],
			} as any,
			meta,
		});

		store.saveImmediate();

		// simulate the localStorage JSON round trip of a page reload
		const restoredData = JSON.parse(JSON.stringify(saved[`chats.${store.id}`]));
		const restored = new ChatSessionStore({
			data: { ...restoredData, id: store.id },
			stores: { storage },
		});
		restored.hydrateResults(meta);

		const badges = (restored.chat[0] as any).results[0].badges.all;
		expect(badges.length).toBe(1);
		expect(badges[0].tag).toBe('on-sale');
		// BadgeText renders nothing without `value` — it must survive serialization
		expect(badges[0].value).toBe('20% off');
	});
});

describe('ChatSessionStore pendingRequest', () => {
	it('defaults to null and restores from stored data', () => {
		const store = createStore();
		expect(store.pendingRequest).toBeNull();

		const restored = new ChatSessionStore({
			data: { sessionId: 'test-session', pendingRequest: { requestType: 'general', message: 'hello' } },
			stores: { storage: createMockStorage() },
		});
		expect(restored.pendingRequest).toEqual({ requestType: 'general', message: 'hello' });
	});

	it('setPendingRequest updates the value and persists it via saveImmediate', () => {
		const storage = createMockStorage();
		const store = new ChatSessionStore({
			data: { sessionId: 'test-session' },
			stores: { storage },
		});

		store.setPendingRequest({ requestType: 'general', message: 'hello' });
		expect(store.pendingRequest).toEqual({ requestType: 'general', message: 'hello' });

		// setPendingRequest persists synchronously — no debounce flush needed
		const savedCall = storage.set.mock.calls.find((call: any[]) => call[0] === `chats.${store.id}`);
		expect(savedCall[1].pendingRequest).toEqual({ requestType: 'general', message: 'hello' });

		store.setPendingRequest(null);
		const lastCall = storage.set.mock.calls[storage.set.mock.calls.length - 1];
		expect(lastCall[1].pendingRequest).toBeNull();
	});
});
