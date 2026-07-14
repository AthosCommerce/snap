import { ChatStore } from './ChatStore';
import { ChatStoreConfig } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { ChatSessionStore } from './Stores/ChatSessionStore';
import { StorageStore } from '@athoscommerce/snap-toolbox';

// ── Minimal mock urlManager ───────────────────────────────────────────────────
// ChatStore calls services.urlManager.detach(true) which must return an object
// with subscribe, reset (chainable), go, set, merge, remove, and a state property.
const createMockUrlManager = () => {
	const self: any = {
		state: {},
		subscribe: jest.fn(),
		reset: jest.fn().mockReturnThis(),
		go: jest.fn().mockReturnThis(),
		set: jest.fn().mockReturnThis(),
		merge: jest.fn().mockReturnThis(),
		remove: jest.fn().mockReturnThis(),
		detach: jest.fn(),
	};
	// detach returns another mock with the same shape (which is what urlManager
	// assigns to this.urlManager inside ChatStore)
	const detached: any = {
		state: {},
		subscribe: jest.fn(),
		reset: jest.fn().mockReturnThis(),
		go: jest.fn().mockReturnThis(),
		set: jest.fn().mockReturnThis(),
		merge: jest.fn().mockReturnThis(),
		remove: jest.fn().mockReturnThis(),
	};
	self.detach.mockReturnValue(detached);
	return self;
};

const createMockServices = () => ({
	urlManager: createMockUrlManager() as any,
});

// ── Store factory ─────────────────────────────────────────────────────────────
const createStore = (configOverrides: Partial<ChatStoreConfig> = {}) => {
	const config: ChatStoreConfig = { id: 'chat', siteId: '8uyt2m', ...configOverrides };
	const services = createMockServices();
	return new ChatStore(config, services);
};

// ── localStorage helpers ──────────────────────────────────────────────────────
// StorageStore uses window.localStorage keyed by `ss-${siteId}-${id}`.
const storageKey = (siteId: string, id: string) => `ss-${siteId}-${id}`;
const legacyStorageKey = (id: string) => `ss-${id}`;

function seedLocalStorage(key: string, data: Record<string, any>) {
	window.localStorage.setItem(key, JSON.stringify(data));
}

function readLocalStorage(key: string): Record<string, any> {
	const raw = window.localStorage.getItem(key);
	return raw ? JSON.parse(raw) : {};
}

// Chat status is cached in sessionStorage under a `-status`-suffixed key so it is
// rechecked when a new browser session starts.
const statusStorageKey = (siteId: string, id: string) => `ss-${siteId}-${id}-status`;

function seedSessionStorage(key: string, data: Record<string, any>) {
	window.sessionStorage.setItem(key, JSON.stringify(data));
}

function readSessionStorage(key: string): Record<string, any> {
	const raw = window.sessionStorage.getItem(key);
	return raw ? JSON.parse(raw) : {};
}

// ─────────────────────────────────────────────────────────────────────────────

describe('ChatStore — construction and storage key', () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	it('uses siteId-prefixed key when siteId is provided', () => {
		createStore({ id: 'chat', siteId: '8uyt2m' });
		// StorageStore initialises itself by writing to the key on construction
		const keys = Object.keys(window.localStorage);
		expect(keys).toContain(storageKey('8uyt2m', 'chat'));
	});

	it('falls back to legacy key when siteId is absent', () => {
		createStore({ id: 'chat', siteId: undefined });
		const keys = Object.keys(window.localStorage);
		expect(keys).toContain(legacyStorageKey('chat'));
	});

	it('fresh construction — no stored chats — chats is empty and currentChatId is empty string', () => {
		const store = createStore();
		expect(store.chats.length).toBe(0);
		expect(store.currentChatId).toBe('');
	});

	it('creates a local impressionStorage keyed with an -impressions suffix', () => {
		createStore({ id: 'chat', siteId: '8uyt2m' });
		const keys = Object.keys(window.localStorage);
		expect(keys).toContain(`${storageKey('8uyt2m', 'chat')}-impressions`);
	});
});

describe('ChatSessionStore.pruneStoredSessions — return value', () => {
	beforeEach(() => window.localStorage.clear());

	it('returns the ids of the chats it pruned, oldest first', () => {
		const key = storageKey('8uyt2m', 'chat');
		const chats: Record<string, any> = {};
		// 12 chats; maxSessions default 10 → 2 oldest pruned
		for (let i = 0; i < 12; i++) {
			chats[`chat-${i}`] = { createdAt: new Date(2020, 0, 1 + i).toISOString() };
		}
		seedLocalStorage(key, { chats });

		const storage = new StorageStore({ type: 'local', key });
		const pruned = ChatSessionStore.pruneStoredSessions(storage);

		expect(pruned).toEqual(['chat-0', 'chat-1']);
		// StorageStore.set nulls the leaf rather than deleting the key, so the
		// pruned entry is `null` (not `undefined`) — consistent with the
		// impression-cleanup test below.
		expect(storage.get('chats')['chat-0']).toBeNull();
		expect(storage.get('chats')['chat-11']).toBeDefined();
	});

	it('returns an empty array when nothing is pruned', () => {
		const key = storageKey('8uyt2m', 'chat');
		seedLocalStorage(key, { chats: { 'chat-0': { createdAt: new Date().toISOString() } } });
		const storage = new StorageStore({ type: 'local', key });
		expect(ChatSessionStore.pruneStoredSessions(storage)).toEqual([]);
	});
});

describe('ChatStore.createChat — impression cleanup', () => {
	beforeEach(() => window.localStorage.clear());

	it('removes impressionStorage entries for chats pruned during createChat', () => {
		const key = storageKey('8uyt2m', 'chat');
		const chats: Record<string, any> = {};
		for (let i = 0; i < 11; i++) {
			chats[`chat-${i}`] = { createdAt: new Date(2020, 0, 1 + i).toISOString() };
		}
		seedLocalStorage(key, { chats });
		// impressions for the oldest (chat-0, will be pruned) and a survivor (chat-10)
		seedLocalStorage(`${key}-impressions`, {
			'chat-0': { resp: { prod: true } },
			'chat-10': { resp: { prod: true } },
		});

		const store = createStore({ id: 'chat', siteId: '8uyt2m' });
		store.createChat(); // 11 existing + guard → prunes the single oldest (chat-0)

		const impressions = readLocalStorage(`${key}-impressions`);
		expect(impressions['chat-0']).toBeNull();
		expect(impressions['chat-10']).toEqual({ resp: { prod: true } });
	});
});

describe('ChatStore — restoring chats from storage', () => {
	const siteId = '8uyt2m';
	const id = 'chat';
	const key = storageKey(siteId, id);

	beforeEach(() => {
		window.localStorage.clear();
	});

	it('restores stored chats with hydrated === false', () => {
		const chatId1 = 'chat-id-1';
		const chatId2 = 'chat-id-2';
		seedLocalStorage(key, {
			chats: {
				[chatId1]: { sessionId: 'sess1', chat: [], createdAt: new Date().toISOString() },
				[chatId2]: { sessionId: 'sess2', chat: [], createdAt: new Date().toISOString() },
			},
		});

		const store = createStore({ id, siteId });
		expect(store.chats.length).toBe(2);
		store.chats.forEach((chat) => {
			expect(chat.hydrated).toBe(false);
		});
	});

	it('prefers stored currentChatId when it matches a restored chat', () => {
		const chatId1 = 'chat-id-1';
		const chatId2 = 'chat-id-2';
		seedLocalStorage(key, {
			chats: {
				[chatId1]: { sessionId: 'sess1', chat: [], createdAt: new Date().toISOString() },
				[chatId2]: { sessionId: 'sess2', chat: [], createdAt: new Date().toISOString() },
			},
			currentChatId: chatId1,
		});

		const store = createStore({ id, siteId });
		expect(store.currentChatId).toBe(chatId1);
	});

	it('falls back to latest restored chat when stored currentChatId does not match any chat', () => {
		const chatId1 = 'chat-id-1';
		const chatId2 = 'chat-id-2';
		seedLocalStorage(key, {
			chats: {
				[chatId1]: { sessionId: 'sess1', chat: [], createdAt: new Date().toISOString() },
				[chatId2]: { sessionId: 'sess2', chat: [], createdAt: new Date().toISOString() },
			},
			currentChatId: 'nonexistent-id',
		});

		const store = createStore({ id, siteId });
		// latestChatId is the last key iterated — implementation pushes chatId2 last
		expect(store.currentChatId).toBe(chatId2);
	});
});

describe('ChatStore — chat-status caching', () => {
	const siteId = '8uyt2m';
	const id = 'chat';
	const key = statusStorageKey(siteId, id);
	const TEN_MINUTES = 1000 * 60 * 10;

	beforeEach(() => {
		window.localStorage.clear();
		window.sessionStorage.clear();
		jest.restoreAllMocks();
	});

	const makeChatStatusPayload = (ageMs: number) => {
		const checkTime = Date.now() - ageMs;
		return {
			chatStatusResponse: JSON.stringify({
				checkTime,
				response: {
					chatbot: {
						status: { enabled: true },
						suggestedQuestions: ['What can I help you find?'],
						welcomeMessage: 'Hello!',
					},
					features: {
						imageSearch: { enabled: true },
						similarProducts: { enabled: false },
					},
				},
			}),
		};
	};

	it('applies a stored chatStatusResponse younger than 10 minutes', () => {
		const nowSpy = jest.spyOn(Date, 'now').mockReturnValue(1000000000000);
		// stored 5 minutes ago — still valid
		const ageMs = 1000 * 60 * 5;
		seedSessionStorage(key, makeChatStatusPayload(ageMs));

		const store = createStore({ id, siteId });

		expect(store.chatEnabled).toBe(true);
		expect(store.suggestedQuestions).toEqual(['What can I help you find?']);
		expect(store.welcomeMessage).toBe('Hello!');
		nowSpy.mockRestore();
	});

	it('clears a stored chatStatusResponse older than 10 minutes', () => {
		const nowSpy = jest.spyOn(Date, 'now').mockReturnValue(1000000000000);
		// stored 11 minutes ago — expired
		const ageMs = TEN_MINUTES + 1000 * 60;
		seedSessionStorage(key, makeChatStatusPayload(ageMs));

		const store = createStore({ id, siteId });

		// chat status should not have been applied
		expect(store.chatEnabled).toBeNull();
		expect(store.suggestedQuestions).toEqual([]);
		// storage entry should be cleared (set to null)
		const stored = readSessionStorage(key);
		expect(stored.chatStatusResponse).toBeNull();
		nowSpy.mockRestore();
	});

	it('clears a corrupt chatStatusResponse without throwing', () => {
		seedSessionStorage(key, { chatStatusResponse: 'not-valid-json{{{' });

		expect(() => createStore({ id, siteId })).not.toThrow();

		const stored = readSessionStorage(key);
		expect(stored.chatStatusResponse).toBeNull();
	});

	it('rechecks status on a new session — sessionStorage empty even when a stale localStorage entry exists', () => {
		// A new browser session has empty sessionStorage; any prior localStorage
		// entry must be ignored so the status is rechecked.
		seedLocalStorage(storageKey(siteId, id), makeChatStatusPayload(1000 * 60 * 5));

		const store = createStore({ id, siteId });

		expect(store.chatEnabled).toBeNull();
		expect(store.suggestedQuestions).toEqual([]);
	});

	it('handleChatStatusResponse persists to sessionStorage', () => {
		const nowSpy = jest.spyOn(Date, 'now').mockReturnValue(1000000000000);
		const store = createStore({ id, siteId });

		store.handleChatStatusResponse({
			chatbot: {
				status: { enabled: true },
				suggestedQuestions: ['What can I help you find?'],
				welcomeMessage: 'Hello!',
			},
			features: {
				imageSearch: { enabled: true },
				similarProducts: { enabled: false },
			},
		} as any);

		const stored = readSessionStorage(key);
		const parsed = JSON.parse(stored.chatStatusResponse);
		expect(parsed.checkTime).toBe(1000000000000);
		expect(parsed.response.chatbot.status.enabled).toBe(true);
		nowSpy.mockRestore();
	});
});

describe('ChatStore — update() and meta handling', () => {
	const siteId = '8uyt2m';
	const id = 'chat';
	const key = storageKey(siteId, id);

	const mockMeta = { badges: {}, facets: {} } as any;
	const mockChat = {
		context: { sessionId: 'sess1' },
		data: [],
	} as any;

	beforeEach(() => {
		window.localStorage.clear();
	});

	it('update() constructs this.meta as a MetaStore', () => {
		const store = createStore({ id, siteId });
		store.createChat();
		store.update({ chat: mockChat, meta: mockMeta });
		expect(store.meta).toBeInstanceOf(MetaStore);
	});

	it('first update() persists meta to storage', () => {
		const store = createStore({ id, siteId });
		store.createChat();
		store.update({ chat: mockChat, meta: mockMeta });

		const stored = readLocalStorage(key);
		expect(stored.meta).toBeDefined();
		const parsedMeta = JSON.parse(stored.meta);
		expect(parsedMeta).toEqual(mockMeta);
	});

	it('subsequent updates do not re-persist meta (if (!this.meta) guard)', () => {
		const store = createStore({ id, siteId });
		store.createChat();
		// first update — sets meta and persists
		store.update({ chat: mockChat, meta: mockMeta });

		// overwrite storage meta with a sentinel to detect re-persist
		const storedAfterFirst = readLocalStorage(key);
		const sentinelMeta = { ...mockMeta, sentinel: true };
		window.localStorage.setItem(key, JSON.stringify({ ...storedAfterFirst, meta: JSON.stringify(sentinelMeta) }));

		// second update — should NOT overwrite storage.meta because `if (!this.meta)` is false
		const secondMeta = { badges: {}, facets: { color: {} } } as any;
		store.update({ chat: mockChat, meta: secondMeta });

		const storedAfterSecond = readLocalStorage(key);
		// meta in storage should still be the sentinel (not secondMeta)
		const parsedMeta = JSON.parse(storedAfterSecond.meta);
		expect(parsedMeta.sentinel).toBe(true);
	});
});

describe('ChatStore — createChat()', () => {
	const siteId = '8uyt2m';
	const id = 'chat';

	beforeEach(() => {
		window.localStorage.clear();
	});

	it('createChat() adds a new session and sets it as currentChatId', () => {
		const store = createStore({ id, siteId });
		expect(store.chats.length).toBe(0);

		const newChat = store.createChat();
		expect(store.chats.length).toBe(1);
		expect(store.currentChatId).toBe(newChat.id);
	});

	it('createChat() returns a ChatSessionStore with the provided sessionId', () => {
		const store = createStore({ id, siteId });
		const newChat = store.createChat({ sessionId: 'my-session' });
		expect(newChat.sessionId).toBe('my-session');
	});
});

describe('ChatStore — switchChat()', () => {
	const siteId = '8uyt2m';
	const id = 'chat';

	beforeEach(() => {
		window.localStorage.clear();
	});

	it('switchChat() changes currentChatId to the target chat', () => {
		const store = createStore({ id, siteId });
		const chat1 = store.createChat();
		const chat2 = store.createChat();

		expect(store.currentChatId).toBe(chat2.id);
		store.switchChat(chat1.id);
		expect(store.currentChatId).toBe(chat1.id);
	});

	it('switchChat() hydrates an unhydrated chat when storedMetaData is available', () => {
		const store = createStore({ id, siteId });
		const chat1 = store.createChat();

		// Seed meta so storedMetaData is set
		store.update({
			chat: { context: { sessionId: 'sess' }, data: [] } as any,
			meta: { badges: {}, facets: {} } as any,
		});

		const chat2 = store.createChat();
		// Mark chat1 as unhydrated
		chat1.hydrated = false;

		store.switchChat(chat1.id);

		expect(chat1.hydrated).toBe(true);
	});

	it('switchChat() is a no-op for a non-existent chat id', () => {
		const store = createStore({ id, siteId });
		const chat1 = store.createChat();
		const originalId = store.currentChatId;

		store.switchChat('does-not-exist');
		expect(store.currentChatId).toBe(originalId);
	});
});
