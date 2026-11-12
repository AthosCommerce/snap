import { makeObservable, observable, computed, runInAction } from 'mobx';
import { ChatStoreConfig, StoreServices } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import type { MetaResponseModel } from '@athoscommerce/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import type { ChatResponseModel, ChatRequestModel, ChatStatusResponseModel } from '@athoscommerce/snap-client';
import { StorageStore } from '@athoscommerce/snap-toolbox';
import { ChatSessionStore, getProductThumbnailUrl } from './Stores/ChatSessionStore';
import { ChatAttachmentProduct } from './Stores/ChatAttachmentStore';
import { Product } from '../Search/Stores';

const CHAT_STATUS_EXPIRATION_TIME = 1000 * 60 * 10; // 10 minutes

export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public meta?: MetaStore = undefined;
	public inputValue: string = '';
	public open: boolean = false;
	public storage: StorageStore;
	/** Session-scoped storage for the chat status response — cleared when a new
	 * browser session starts, so the status is rechecked on each new session. */
	public statusStorage: StorageStore;
	/** Local storage of impressed products, keyed chatId → responseId → productId,
	 * so the same product is not re-impressed after the chat reopens on a new page. */
	public impressionStorage: StorageStore;
	public services: StoreServices;
	public chats: ChatSessionStore[] = [];
	public currentChatId: string;
	public chatEnabled: boolean | null = null;
	public initChatLoading: boolean = false;
	public suggestedQuestions: string[] = [];
	public welcomeMessage: string = '';
	public features: ChatStatusResponseModel['features'] = { imageSearch: { enabled: false }, similarProducts: { enabled: false } };
	/** Count of externally-mounted launchers (e.g. inline ChatButton). >0 hides the built-in bubble. */
	public launcherCount: number = 0;
	/** Raw meta kept for lazy hydration of inactive chat sessions. */
	private storedMetaData: MetaResponseModel | null = null;

	constructor(config: ChatStoreConfig, services: StoreServices) {
		super(config);

		if (typeof services != 'object' || typeof services.urlManager?.subscribe != 'function') {
			throw new Error(`Invalid service 'urlManager' passed to ChatStore. Missing "subscribe" function.`);
		}

		this.services = services;

		const legacyKey = `ss-${this.config.id}`;
		const storageKey = this.config.siteId ? `ss-${this.config.siteId}-${this.config.id}` : legacyKey;
		this.storage = new StorageStore({
			type: 'local',
			key: storageKey,
		});
		this.statusStorage = new StorageStore({
			type: 'session',
			key: `${storageKey}-status`,
		});
		this.impressionStorage = new StorageStore({
			type: 'local',
			key: `${storageKey}-impressions`,
		});

		const storedChatStatusResponse = this.statusStorage.get('chatStatusResponse');
		if (storedChatStatusResponse) {
			try {
				const storedChatStatus = JSON.parse(storedChatStatusResponse);
				if (storedChatStatus.checkTime && Date.now() - storedChatStatus.checkTime > CHAT_STATUS_EXPIRATION_TIME) {
					// chat status is expired, remove from storage to trigger a new check
					this.statusStorage.set('chatStatusResponse', null);
				} else {
					// Apply the stored response without persisting, so the
					// checkTime keeps counting from the last real API call rather
					// than resetting on every page load.
					this.applyChatStatusResponse(storedChatStatus.response);
				}
			} catch {
				this.statusStorage.set('chatStatusResponse', null);
			}
		}

		// check for entries in storage
		let latestChatId = '';
		const storedChats = this.storage.get('chats');
		if (storedChats) {
			Object.keys(storedChats).forEach((chatId) => {
				const chatData = storedChats[chatId];
				if (chatData) {
					const restoredChat = new ChatSessionStore({
						config: this.config,
						data: {
							...chatData,
							id: chatId,
						},
						stores: {
							storage: this.storage,
						},
					});
					// Mark as unhydrated — results are still raw JSON from storage.
					// Only the active session will be hydrated below.
					restoredChat.hydrated = false;
					this.chats.push(restoredChat);
					latestChatId = chatId;
				}
			});
		}

		// Prefer the persisted active chat ID so switching chats survives page reloads.
		// Fall back to the most recently created chat if the stored ID is missing or stale.
		const storedCurrentChatId = this.storage.get('currentChatId');
		const activeChatId = storedCurrentChatId && this.chats.some((chat) => chat.id === storedCurrentChatId) ? storedCurrentChatId : latestChatId;
		const storedMeta = this.storage.get('meta');
		if (storedMeta) {
			try {
				const metaData = typeof storedMeta === 'string' ? JSON.parse(storedMeta) : storedMeta;
				this.meta = new MetaStore({
					data: {
						meta: metaData,
					},
				});

				// Keep raw meta for lazy hydration of inactive sessions
				this.storedMetaData = metaData;

				// Only hydrate the active chat session — inactive sessions will be
				// hydrated lazily when switched to via switchChat()
				const activeChat = this.chats.find((chat) => chat.id === activeChatId);
				if (activeChat) {
					activeChat.hydrateResults(metaData);
					activeChat.hydrated = true;
				}
			} catch {
				this.storage.set('meta', null);
			}
		}

		this.currentChatId = activeChatId;

		makeObservable(this, {
			meta: observable,
			inputValue: observable,
			open: observable,
			chats: observable,
			currentChatId: observable,
			chatEnabled: observable,
			initChatLoading: observable,
			blocked: computed,
			currentChat: computed,
			chatIds: computed,
			features: observable,
			suggestedQuestions: observable,
			welcomeMessage: observable,
			launcherCount: observable,
			hasExternalLauncher: computed,
		});
	}

	/** Tear down any pending session saves. Integrators that discard a chat controller
	 * (e.g. on an SPA route change) should call this to avoid leaking timers. */
	public dispose(): void {
		this.chats.forEach((chat) => chat.destroy());
	}

	get currentChat(): ChatSessionStore | undefined {
		return this.chats.find((chat) => chat.id === this.currentChatId);
	}

	get chatIds(): string[] {
		return this.chats.map((chat) => chat.id);
	}

	get hasExternalLauncher(): boolean {
		return this.launcherCount > 0;
	}

	/** Registers an externally-mounted launcher (e.g. inline ChatButton) and returns
	 * a disposer that unregisters it. The disposer is idempotent. */
	public registerLauncher(): () => void {
		runInAction(() => this.launcherCount++);
		let disposed = false;
		return () => {
			if (!disposed) {
				disposed = true;
				runInAction(() => this.launcherCount--);
			}
		};
	}

	get blocked(): boolean {
		let isBlocked = false;

		const blockedAttachments = this.currentChat?.attachments.items.some((item) => item.type === 'image' && item.state === 'loading');
		if (this.loading || blockedAttachments) {
			isBlocked = true;
		}
		return isBlocked;
	}

	private applyChatStatusResponse(response: ChatStatusResponseModel): boolean {
		const { chatbot, features } = response;
		const { status, suggestedQuestions, welcomeMessage } = chatbot;
		this.chatEnabled = status.enabled === true;
		this.features = features;
		this.suggestedQuestions = suggestedQuestions || [];
		this.welcomeMessage = welcomeMessage || '';
		return this.chatEnabled;
	}

	public handleChatStatusResponse(response: ChatStatusResponseModel): boolean {
		const enabled = this.applyChatStatusResponse(response);
		// Always persist on a real API response — restarts the 10-minute expiration
		// so each new chat session refreshes the cache.
		this.statusStorage.set('chatStatusResponse', JSON.stringify({ response, checkTime: Date.now() }));
		return enabled;
	}

	public reset(): void {
		this.chats = [];
		this.storage.clear();
		this.impressionStorage.clear();
		// clear meta so the next update() re-persists it — otherwise restored
		// sessions could never hydrate after a reload
		this.meta = undefined;
		this.storedMetaData = null;
		this.createChat();
	}

	public clearHistory(): void {
		// drop previous chats while keeping the conversation the user is currently in;
		// if there is no current chat, fall back to a full reset
		const currentChat = this.currentChat;

		if (!currentChat) {
			this.reset();
			return;
		}

		const storedChats = this.storage.get('chats') || {};
		const filtered: Record<string, any> = {};
		if (storedChats[currentChat.id]) {
			filtered[currentChat.id] = storedChats[currentChat.id];
		}
		this.storage.set('chats', filtered);

		// drop impression entries for every chat except the one being kept
		const currentImpressions = this.impressionStorage.get([currentChat.id]);
		this.impressionStorage.clear();
		if (currentImpressions) {
			this.impressionStorage.set([currentChat.id], currentImpressions);
		}

		this.chats = [currentChat];
	}

	public createChat(data?: { sessionId: string; sessionEndTime?: Date }): ChatSessionStore {
		// abandon any in-flight request state from the previous chat — its
		// response will be discarded by the controller, so the UI shouldn't
		// keep showing its loading spinner or stale error
		this.loading = false;
		this.error = undefined;

		// Prune old sessions before creating a new one to keep storage bounded,
		// and drop impression entries for any chat that was pruned. `set(key, null)`
		// stores null rather than deleting, so rebuild the map without the pruned ids.
		const prunedChatIds = ChatSessionStore.pruneStoredSessions(this.storage);
		if (prunedChatIds.length) {
			const remaining = { ...this.impressionStorage.state };
			prunedChatIds.forEach((id) => delete remaining[id]);
			this.impressionStorage.clear();
			Object.keys(remaining).forEach((id) => this.impressionStorage.set([id], remaining[id]));
		}

		const newChat = new ChatSessionStore({
			config: this.config,
			data: {
				sessionId: data?.sessionId,
				sessionEndTime: data?.sessionEndTime,
			},
			stores: {
				storage: this.storage,
			},
		});

		this.currentChatId = newChat.id;
		this.storage.set('currentChatId', newChat.id);
		this.chats.push(newChat);
		return newChat;
	}

	public switchChat(id: string): void {
		const chatExists = this.chats.find((chat) => chat.id === id);
		if (chatExists) {
			// abandon any in-flight request state from the previous chat — its
			// response will be discarded by the controller, so the UI shouldn't
			// keep showing its loading spinner or stale error
			this.loading = false;
			this.error = undefined;

			// Lazily hydrate results when switching to a session for the first time
			if (!chatExists.hydrated && this.storedMetaData) {
				chatExists.hydrateResults(this.storedMetaData);
				chatExists.hydrated = true;
			}
			this.currentChatId = id;
			this.storage.set('currentChatId', id);
		}
	}

	public sendProductQuery(result: Product, options: { requestType: 'productQuery' | 'productSimilar' | 'productComparison' }): void {
		const display = result?.display || result;
		this.currentChat?.attachments.add<ChatAttachmentProduct>({
			type: 'product',
			requestType: options.requestType,
			productId: result.id,
			parentId: display.mappings?.core?.parentId || result.id,
			variantUid: display.mappings?.core?.uid,
			name: display.mappings?.core?.name,
			thumbnailUrl: getProductThumbnailUrl(display.mappings?.core),
		});

		// for the productQuery flow we want the secondary chat to immediately
		// show the product details panel — push a productQuery message so it
		// becomes the active side-chat message until a productAnswer arrives
		if (options.requestType === 'productQuery' && this.currentChat) {
			this.currentChat.pushProductQueryMessage(result);
		}
	}

	public compareProduct(result: Product): void {
		this.currentChat?.comparisons.add({
			result,
		});
	}

	public request(request: ChatRequestModel): void {
		this.currentChat?.request(request);

		// remove any productSimilar attachments after request
		const productSimilarAttachments =
			this.currentChat?.attachments.attached.filter(
				(item) => item.type === 'product' && (item as ChatAttachmentProduct).requestType === 'productSimilar'
			) || [];
		productSimilarAttachments.forEach((item) => {
			this.currentChat?.attachments.remove(item.id);
		});
	}

	public update(data: { chat: ChatResponseModel; meta: MetaResponseModel }): void {
		this.error = undefined;
		this.loaded = true;

		this.currentChat?.update(data);
		this.storage.set('meta', data.meta);
		this.meta = new MetaStore({
			data: {
				meta: data.meta,
			},
		});
		// Keep raw meta in sync for lazy hydration of inactive sessions
		this.storedMetaData = data.meta;
	}
}
