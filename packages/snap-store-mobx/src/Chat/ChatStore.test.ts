import { reaction } from 'mobx';

import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';
import { StorageStore } from '@athoscommerce/snap-toolbox';
import type { MetaResponseModel, SearchResponseModelFacet } from '@athoscommerce/snapi-types';

import { ChatStore } from './ChatStore';
import { ChatStoreConfig } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { ChatSessionStore } from './Stores/ChatSessionStore';
import { ChatAttachmentProduct } from './Stores/ChatAttachmentStore';
import { Product, RangeFacet, ValueFacet } from '../Search/Stores';

const createServices = () => ({
	urlManager: new UrlManager(new UrlTranslator()),
});

// ── Store factory ─────────────────────────────────────────────────────────────
const createStore = (configOverrides: Partial<ChatStoreConfig> = {}) => {
	const config: ChatStoreConfig = { id: 'chat', siteId: '8uyt2m', ...configOverrides };
	const services = createServices();
	return new ChatStore(config, services);
};

const createProduct = (id: string, name = `Product ${id}`) =>
	new Product({
		config: { id: 'chat' },
		data: {
			result: {
				id,
				mappings: { core: { uid: id, name, thumbnailImageUrl: `http://example.com/thumb-${id}.jpg` } },
				attributes: {},
			},
			meta: {} as MetaResponseModel,
		},
		position: 1,
		responseId: 'resp-1',
	});

const createChatFacets = (): SearchResponseModelFacet[] =>
	[
		{
			field: 'color_family',
			type: 'value',
			label: 'Color',
			filtered: true,
			values: [
				{ value: 'Blue', label: 'Blue', count: 10, filtered: true },
				{ value: 'Red', label: 'Red', count: 5, filtered: false },
			],
		},
		{
			field: 'price',
			type: 'range',
			label: 'Price',
			filtered: false,
			step: 1,
			range: { low: 0, high: 100 },
			active: { low: 0, high: 100 },
		},
	] as unknown as SearchResponseModelFacet[];

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
		// the `chats` object is rewritten without the pruned keys — nulling the
		// leaves would leave entries accumulating forever since StorageStore.set
		// never deletes keys
		expect(Object.keys(storage.get('chats'))).not.toContain('chat-0');
		expect(Object.keys(storage.get('chats'))).not.toContain('chat-1');
		expect(storage.get('chats')['chat-11']).toBeDefined();
	});

	it('drops previously nulled entries so they do not count toward maxSessions', () => {
		const key = storageKey('8uyt2m', 'chat');
		const chats: Record<string, any> = { 'chat-null': null };
		for (let i = 0; i < 5; i++) {
			chats[`chat-${i}`] = { createdAt: new Date(2020, 0, 1 + i).toISOString() };
		}
		seedLocalStorage(key, { chats });

		const storage = new StorageStore({ type: 'local', key });
		const pruned = ChatSessionStore.pruneStoredSessions(storage);

		expect(pruned).toEqual([]);
		expect(Object.keys(storage.get('chats'))).toEqual(['chat-0', 'chat-1', 'chat-2', 'chat-3', 'chat-4']);
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
		expect(impressions['chat-0']).toBeUndefined();
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
		expect(stored.meta).toEqual(mockMeta);
	});

	it('subsequent updates re-persist meta so the stored snapshot stays fresh', () => {
		const store = createStore({ id, siteId });
		store.createChat();
		// first update — sets meta and persists
		store.update({ chat: mockChat, meta: mockMeta });

		const secondMeta = { badges: {}, facets: { color: {} } } as any;
		store.update({ chat: mockChat, meta: secondMeta });

		const storedAfterSecond = readLocalStorage(key);
		expect(storedAfterSecond.meta).toEqual(secondMeta);
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

	it('switchChat() resets in-flight request state like createChat does', () => {
		const store = createStore({ id, siteId });
		const chat1 = store.createChat();
		store.createChat();

		store.loading = true;
		store.error = { type: 'error' as any, code: 500, message: 'boom' };

		store.switchChat(chat1.id);

		expect(store.loading).toBe(false);
		expect(store.error).toBeUndefined();
	});
});

describe('ChatStore — services validation', () => {
	beforeEach(() => window.localStorage.clear());

	it('throws when services is missing a urlManager with a subscribe function', () => {
		expect(() => new ChatStore({ id: 'chat' }, undefined as any)).toThrow(/urlManager/);
		expect(() => new ChatStore({ id: 'chat' }, {} as any)).toThrow(/urlManager/);
		expect(() => new ChatStore({ id: 'chat' }, { urlManager: {} } as any)).toThrow(/urlManager/);
	});
});

describe('ChatStore — external launcher registration', () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.sessionStorage.clear();
	});

	it('hasExternalLauncher is false until a launcher registers', () => {
		const store = createStore();
		expect(store.hasExternalLauncher).toBe(false);

		const dispose = store.registerLauncher();
		expect(store.hasExternalLauncher).toBe(true);

		dispose();
		expect(store.hasExternalLauncher).toBe(false);
	});

	it('tracks multiple launchers and each disposer only decrements once', () => {
		const store = createStore();
		const dispose1 = store.registerLauncher();
		const dispose2 = store.registerLauncher();
		expect(store.launcherCount).toBe(2);

		dispose1();
		dispose1();
		expect(store.launcherCount).toBe(1);
		expect(store.hasExternalLauncher).toBe(true);

		dispose2();
		expect(store.launcherCount).toBe(0);
		expect(store.hasExternalLauncher).toBe(false);
	});

	it('hasExternalLauncher is observable', () => {
		const store = createStore();
		const seen: boolean[] = [];
		const stop = reaction(
			() => store.hasExternalLauncher,
			(value) => seen.push(value)
		);

		const dispose = store.registerLauncher();
		dispose();
		stop();

		expect(seen).toEqual([true, false]);
	});
});

describe('ChatStore — facets and detached urlManager', () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.sessionStorage.clear();
	});

	it('setActiveFacets builds the facet store and seeds the applied selection', () => {
		const store = createStore();
		store.setActiveFacets(createChatFacets(), 'msg-1');

		expect(store.facets.length).toBe(2);
		const [colorFacet, priceFacet] = store.facets;
		expect(colorFacet).toBeInstanceOf(ValueFacet);
		expect(colorFacet.display).toBe('list');
		expect(priceFacet).toBeInstanceOf(RangeFacet);
		expect(priceFacet.display).toBe('slider');

		// the API-reported filtered value is seeded into the detached urlManager
		expect(store.isFacetSelected('color_family', 'Blue')).toBe(true);
		expect(store.isFacetSelected('color_family', 'Red')).toBe(false);
		expect(store.pendingFacetCount).toBe(1);
		expect(store.searchFilters).toEqual([{ key: 'color_family', options: [{ key: 'Blue' }] }]);
		expect(store.hasPendingFacetChanges).toBe(false);
	});

	it('addFacet/removeFacet toggle pending state against the applied snapshot', () => {
		const store = createStore();
		store.setActiveFacets(createChatFacets(), 'msg-1');

		store.addFacet({ key: 'color_family', value: 'Red' });
		expect(store.isFacetSelected('color_family', 'Red')).toBe(true);
		expect(store.pendingFacetCount).toBe(2);
		expect(store.hasPendingFacetChanges).toBe(true);

		store.removeFacet('color_family', 'Red');
		expect(store.isFacetSelected('color_family', 'Red')).toBe(false);
		expect(store.pendingFacetCount).toBe(1);
		expect(store.hasPendingFacetChanges).toBe(false);
	});

	it('supports range values in addFacet, searchFilters and isFacetSelected', () => {
		const store = createStore();
		store.setActiveFacets(createChatFacets(), 'msg-1');

		store.addFacet({ key: 'price', value: { low: 10, high: 50 } });

		expect(store.isFacetSelected('price', { low: 10, high: 50 })).toBe(true);
		expect(store.searchFilters).toContainEqual({ key: 'price', options: [{ low: '10', high: '50' }] });
		expect(store.hasPendingFacetChanges).toBe(true);
	});

	it('clearPendingFacets clears the selection and flags pending changes', () => {
		const store = createStore();
		store.setActiveFacets(createChatFacets(), 'msg-1');

		store.clearPendingFacets();

		expect(store.pendingFacetCount).toBe(0);
		expect(store.searchFilters).toEqual([]);
		// applied snapshot still contains Blue — clearing is a pending change
		expect(store.hasPendingFacetChanges).toBe(true);
	});

	it('hasPendingFacetChanges reflects manual additions before any facets are seeded', () => {
		const store = createStore();
		expect(store.hasPendingFacetChanges).toBe(false);

		store.addFacet({ key: 'color_family', value: 'Red' });
		expect(store.hasPendingFacetChanges).toBe(true);
	});

	it('hasPendingFacetChanges settles for observers when setActiveFacets replaces a pending selection', () => {
		const store = createStore();
		store.setActiveFacets(createChatFacets(), 'msg-1');

		const observed: boolean[] = [];
		const dispose = reaction(
			() => store.hasPendingFacetChanges,
			(value) => observed.push(value)
		);

		store.addFacet({ key: 'color_family', value: 'Red' });
		expect(store.hasPendingFacetChanges).toBe(true);

		// applying facets that match the pending selection clears the pending state —
		// even while a reaction is actively observing the computed
		const appliedFacets = createChatFacets();
		(appliedFacets[0] as any).values[1].filtered = true;
		store.setActiveFacets(appliedFacets, 'msg-2');

		expect(store.hasPendingFacetChanges).toBe(false);
		expect(observed[observed.length - 1]).toBe(false);

		dispose();
	});

	it('builds facets from the active productSearchResult message and clears them on other messages', () => {
		const store = createStore();
		const chat = store.createChat();

		chat.chat.push({
			id: 'msg-1',
			messageType: 'productSearchResult',
			text: '',
			results: [],
			facets: createChatFacets(),
			filterSummary: [],
		} as any);

		expect(store.facets.length).toBe(2);
		expect(store.isFacetSelected('color_family', 'Blue')).toBe(true);

		chat.chat.push({ id: 'msg-2', messageType: 'text', text: 'hello' } as any);

		expect(store.facets.length).toBe(0);
		expect(store.pendingFacetCount).toBe(0);
	});

	it('keeps the carousel facets visible while a productQuery side chat is active', () => {
		const store = createStore();
		const chat = store.createChat();

		chat.chat.push({
			id: 'msg-1',
			messageType: 'productSearchResult',
			text: '',
			results: [],
			facets: createChatFacets(),
			filterSummary: [],
		} as any);
		expect(store.facets.length).toBe(2);

		chat.pushProductQueryMessage(createProduct('prod-1'));

		expect(chat.activeMessage?.messageType).toBe('productQuery');
		expect(store.facets.length).toBe(2);
	});

	it('mirrors pending range filters into the RangeFacet active values', () => {
		const store = createStore();
		store.setActiveFacets(createChatFacets(), 'msg-1');

		store.addFacet({ key: 'price', value: { low: 10, high: 50 } });

		const priceFacet = store.facets.find((facet: any) => facet.field === 'price') as RangeFacet;
		expect(priceFacet.active).toEqual({ low: 10, high: 50 });

		store.removeFacet('price', { low: 10, high: 50 });
		expect(priceFacet.active).toEqual({ low: 0, high: 100 });
	});
});

describe('ChatStore — blocked', () => {
	beforeEach(() => window.localStorage.clear());

	it('is true while loading', () => {
		const store = createStore();
		store.createChat();
		expect(store.blocked).toBe(false);

		store.loading = true;
		expect(store.blocked).toBe(true);
	});

	it('is true while an image attachment is uploading', () => {
		const store = createStore();
		store.createChat();

		store.currentChat!.attachments.add({ type: 'image', fileName: 'photo.jpg' });
		expect(store.blocked).toBe(true);
	});
});

describe('ChatStore — sendProductQuery() and compareProduct()', () => {
	beforeEach(() => window.localStorage.clear());

	it('attaches the product with the request type and thumbnail fallback', () => {
		const store = createStore();
		store.createChat();

		store.sendProductQuery(createProduct('prod-1', 'Widget'), { requestType: 'productSimilar' });

		const attachment = store.currentChat!.attachments.items[0] as ChatAttachmentProduct;
		expect(attachment.type).toBe('product');
		expect(attachment.requestType).toBe('productSimilar');
		expect(attachment.productId).toBe('prod-1');
		expect(attachment.parentId).toBe('prod-1');
		expect(attachment.name).toBe('Widget');
		expect(attachment.thumbnailUrl).toBe('http://example.com/thumb-prod-1.jpg');
	});

	it('attaches the parent product id from the core mappings when present', () => {
		const store = createStore();
		store.createChat();

		const product = createProduct('prod-1', 'Widget');
		product.mappings.core!.parentId = 'parent-1';
		store.sendProductQuery(product, { requestType: 'productQuery' });

		const attachment = store.currentChat!.attachments.items[0] as ChatAttachmentProduct;
		expect(attachment.productId).toBe('prod-1');
		expect(attachment.parentId).toBe('parent-1');
		expect(attachment.variantUid).toBe('prod-1');
	});

	it('captures the selected variant uid from the display mask', () => {
		const store = createStore();
		store.createChat();

		const product = createProduct('prod-1', 'Widget');
		product.mappings.core!.parentId = 'parent-1';
		product.mask.merge({ mappings: { core: { uid: 'variant-2' } } });
		store.sendProductQuery(product, { requestType: 'productQuery' });

		const attachment = store.currentChat!.attachments.items[0] as ChatAttachmentProduct;
		expect(attachment.productId).toBe('prod-1');
		expect(attachment.parentId).toBe('parent-1');
		expect(attachment.variantUid).toBe('variant-2');
	});

	it('pushes a productQuery message for the productQuery flow only', () => {
		const store = createStore();
		store.createChat();

		store.sendProductQuery(createProduct('prod-1'), { requestType: 'productSimilar' });
		expect(store.currentChat!.chat.length).toBe(0);

		store.sendProductQuery(createProduct('prod-2'), { requestType: 'productQuery' });
		expect(store.currentChat!.chat.length).toBe(1);
		expect(store.currentChat!.chat[0].messageType).toBe('productQuery');
	});

	it('compareProduct adds the product to the current chat comparisons', () => {
		const store = createStore();
		store.createChat();

		const product = createProduct('prod-1');
		store.compareProduct(product);
		store.compareProduct(product); // duplicate is ignored

		expect(store.currentChat!.comparisons.compared.length).toBe(1);
		expect(store.currentChat!.comparisons.compared[0].result.id).toBe('prod-1');
	});
});

describe('ChatStore — reset()', () => {
	const siteId = '8uyt2m';
	const id = 'chat';
	const key = storageKey(siteId, id);

	const mockMeta = { badges: {}, facets: {} } as any;
	const mockChat = { context: { sessionId: 'sess1' }, data: [] } as any;

	beforeEach(() => window.localStorage.clear());

	it('clears chats and storage and starts a fresh chat', () => {
		const store = createStore({ id, siteId });
		store.createChat();
		store.createChat();

		store.reset();

		expect(store.chats.length).toBe(1);
		expect(store.currentChatId).toBe(store.chats[0].id);
	});

	it('clears meta so hydration works again after the next update', () => {
		const store = createStore({ id, siteId });
		store.createChat();
		store.update({ chat: mockChat, meta: mockMeta });
		expect(readLocalStorage(key).meta).toBeDefined();

		store.reset();

		expect(store.meta).toBeUndefined();
		expect(readLocalStorage(key).meta).toBeUndefined();

		// the next update re-persists meta — restored sessions can hydrate after a reload
		store.update({ chat: mockChat, meta: mockMeta });
		expect(readLocalStorage(key).meta).toEqual(mockMeta);

		const chat = store.currentChat!;
		chat.hydrated = false;
		store.switchChat(chat.id);
		expect(chat.hydrated).toBe(true);
	});

	it('clears impressionStorage entries for the dropped chats', () => {
		const store = createStore({ id, siteId });
		const chat = store.createChat();
		store.impressionStorage.set([chat.id], { resp: { prod: true } });

		store.reset();

		expect(readLocalStorage(`${key}-impressions`)).toEqual({});
	});
});

describe('ChatStore — clearHistory()', () => {
	const siteId = '8uyt2m';
	const id = 'chat';
	const key = storageKey(siteId, id);

	beforeEach(() => window.localStorage.clear());

	it('keeps only the current chat in memory, storage and impressionStorage', () => {
		const store = createStore({ id, siteId });
		const chat1 = store.createChat();
		const chat2 = store.createChat();
		chat1.saveImmediate();
		chat2.saveImmediate();
		store.impressionStorage.set([chat1.id], { resp1: { prod: true } });
		store.impressionStorage.set([chat2.id], { resp2: { prod: true } });

		store.clearHistory();

		expect(store.chats).toEqual([chat2]);
		expect(Object.keys(readLocalStorage(key).chats)).toEqual([chat2.id]);
		const impressions = readLocalStorage(`${key}-impressions`);
		expect(impressions[chat1.id]).toBeUndefined();
		expect(impressions[chat2.id]).toEqual({ resp2: { prod: true } });
	});

	it('falls back to reset when there is no current chat', () => {
		const store = createStore({ id, siteId });
		expect(store.currentChat).toBeUndefined();

		store.clearHistory();

		expect(store.chats.length).toBe(1);
		expect(store.currentChatId).toBe(store.chats[0].id);
	});
});

describe('ChatStore — product quickview', () => {
	beforeEach(() => window.localStorage.clear());

	it('setProductQuickview clones the product so mutations do not affect the original', () => {
		const store = createStore();
		const product = createProduct('prod-1', 'Widget');

		store.setProductQuickview(product);

		expect(store.productQuickview).toBeInstanceOf(Product);
		expect(store.productQuickview).not.toBe(product);
		expect(store.productQuickview!.id).toBe('prod-1');

		store.productQuickview!.mappings.core!.name = 'Changed';
		expect(product.mappings.core!.name).toBe('Widget');
	});

	it('setProductQuickviewError and clearProductQuickview manage the quickview state', () => {
		const store = createStore();
		store.setProductQuickview(createProduct('prod-1'));

		store.setProductQuickviewError('something went wrong');
		expect(store.productQuickviewError).toBe('something went wrong');

		store.clearProductQuickview();
		expect(store.productQuickview).toBeNull();
		expect(store.productQuickviewError).toBeNull();
	});
});
