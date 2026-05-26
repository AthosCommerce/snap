import { makeObservable, observable, computed, reaction } from 'mobx';
import { ChatStoreConfig, StoreServices } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import type { MetaResponseModel, SearchResponseModelFacet } from '@athoscommerce/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import type { ChatResponseModel, ChatRequestModel, ProductsResponseModel } from '@athoscommerce/snap-client';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import { StorageStore } from '@athoscommerce/snap-toolbox';
import { ChatSessionStore } from './Stores/ChatSessionStore';
import { ChatAttachmentProduct } from './Stores/ChatAttachmentStore';
import { ChatStatusResponse } from '@athoscommerce/snap-client';
import { Product, Variants } from '../Search/Stores/SearchResultStore';
import { SearchFacetStore } from '../Search/Stores/SearchFacetStore';

const CHAT_STATUS_EXPIRATION_TIME = 1000 * 60 * 60 * 12; // 12 hours

export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public meta?: MetaStore = undefined;
	public inputValue: string = '';
	public open: boolean = false;
	public storage: StorageStore;
	public services: StoreServices;
	/** Detached UrlManager — holds the in-progress facet selection for the active facets display.
	 * Detached so .go() updates state without navigating the page. */
	public urlManager: UrlManager;
	/** The single facet store rendered in chat — backed by the active message's facets. */
	public facets: SearchFacetStore;
	public chats: ChatSessionStore[] = [];
	public currentChatId: string;
	public chatEnabled: boolean | null = null;
	public initChatLoading: boolean = false;
	public suggestedQuestions: string[] = [];
	public welcomeMessage: string = '';
	public features: ChatStatusResponse['features'] = { imageSearch: { enabled: false }, similarProducts: { enabled: false } };
	public productQuickview: Product | null = null;
	public productQuickviewError: string | null = null;
	/** Raw meta kept for lazy hydration of inactive chat sessions. */
	private storedMetaData: MetaResponseModel | null = null;
	/** Tracks which message currently owns the displayed facets — guards against redundant rebuilds. */
	private activeFacetsMessageId: string | null = null;
	/** Bumps on every detached-urlManager change so observers re-evaluate isFacetSelected. */
	public urlVersion: number = 0;
	/** Snapshot of the applied filter state captured the last time the active message was seeded.
	 * Compared against the live urlManager state to decide whether there are pending changes.
	 * `null` means no facets have been seeded yet — there are no pending changes in that case. */
	private appliedFilterSnapshot: string | null = null;

	constructor(config: ChatStoreConfig, services: StoreServices) {
		super(config);

		this.services = services;
		this.urlManager = services.urlManager.detach(true);
		this.urlManager.subscribe(() => {
			this.urlVersion++;
		});

		const legacyKey = `ss-${this.config.id}`;
		const storageKey = this.config.siteId ? `ss-${this.config.siteId}-${this.config.id}` : legacyKey;
		this.storage = new StorageStore({
			type: 'local',
			key: storageKey,
		});

		this.facets = this.buildFacetStore();

		const storedChatStatusResponse = this.storage.get('chatStatusResponse');
		if (storedChatStatusResponse) {
			try {
				const storedChatStatus = JSON.parse(storedChatStatusResponse);
				if (storedChatStatus.checkTime && Date.now() - storedChatStatus.checkTime > CHAT_STATUS_EXPIRATION_TIME) {
					// chat status is expired, remove from storage to trigger a new check
					this.storage.set('chatStatusResponse', null);
				} else {
					// Apply the stored response without persisting, so the 12-hour
					// checkTime keeps counting from the last real API call rather
					// than resetting on every page load.
					this.applyChatStatusResponse(storedChatStatus.response);
				}
			} catch {
				this.storage.set('chatStatusResponse', null);
			}
		}

		// check for entries in storage
		let latestChatId = '';
		const storedChats = this.storage.get('chats');
		storedChats &&
			Object.keys(storedChats || {}).forEach((chatId) => {
				const chatData = storedChats[chatId];
				if (chatData) {
					const restoredChat = new ChatSessionStore({
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

		// Prefer the persisted active chat ID so switching chats survives page reloads.
		// Fall back to the most recently created chat if the stored ID is missing or stale.
		const storedCurrentChatId = this.storage.get('currentChatId');
		const activeChatId = storedCurrentChatId && this.chats.some((chat) => chat.id === storedCurrentChatId) ? storedCurrentChatId : latestChatId;
		const storedMeta = this.storage.get('meta');
		if (storedMeta) {
			try {
				const metaData = JSON.parse(storedMeta);
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
			chatsIds: computed,
			features: observable,
			suggestedQuestions: observable,
			welcomeMessage: observable,
			productQuickview: observable,
			productQuickviewError: observable,
			facets: observable,
			urlVersion: observable,
			hasPendingFacetChanges: computed,
			pendingFacetCount: computed,
			searchFilters: computed,
		});

		// Sync the root facets display with the active message. Only productSearchResult
		// messages carry facets — for any other active message, clear the display so a
		// stale facet bar from a previous response doesn't linger.
		// Exception: when the user clicks "discuss product" on a carousel result, the
		// active message becomes the productQuery side-chat, but the carousel is still
		// the last real message — keep its facets visible alongside the product context.
		reaction(
			() => {
				const chat = this.currentChat;
				const active = chat?.activeMessage;
				if (active?.messageType === 'productSearchResult') return active;
				if (active?.messageType === 'productQuery' && chat) {
					const messages = chat.chat;
					const activeIdx = messages.findIndex((m) => m.id === active.id);
					if (activeIdx > 0 && messages[activeIdx - 1].messageType === 'productSearchResult') {
						return messages[activeIdx - 1];
					}
				}
				return null;
			},
			(active) => {
				if (active && active.id !== this.activeFacetsMessageId) {
					const facets = (active as any).facets as SearchResponseModelFacet[] | undefined;
					this.setActiveFacets(facets || [], active.id);
				} else if (!active && this.activeFacetsMessageId !== null) {
					this.setActiveFacets([], null);
				}
			},
			{ fireImmediately: true }
		);

		// Mirror the urlManager's pending range filters into each RangeFacet's `active`.
		// Slider facets are remounted whenever their dropdown closes/reopens and the
		// FacetSlider seeds its state from facet.active — without this sync the slider
		// would snap back to the server-provided active on every reopen, losing the
		// user's pending selection until Apply is clicked.
		// Note: range filters round-trip through the detached urlManager's URL form,
		// so they come back as `[{low, high}]` arrays even though they were set as objects.
		const readRangeFilter = (raw: any): { low?: number; high?: number } | null => {
			const entry = Array.isArray(raw) ? raw[raw.length - 1] : raw;
			if (!entry || typeof entry !== 'object') return null;
			if (typeof entry.low === 'undefined' && typeof entry.high === 'undefined') return null;
			return {
				low: entry.low === null || typeof entry.low === 'undefined' ? undefined : Number(entry.low),
				high: entry.high === null || typeof entry.high === 'undefined' ? undefined : Number(entry.high),
			};
		};
		reaction(
			() => {
				void this.urlVersion;
				const filterState = (this.urlManager.state as any)?.filter || {};
				return this.facets
					.filter((f: any) => f.type === 'range')
					.map((f: any) => {
						const pending = readRangeFilter(filterState[f.field]);
						return `${f.field}:${pending?.low ?? '*'}:${pending?.high ?? '*'}`;
					})
					.join('|');
			},
			() => {
				const filterState = (this.urlManager.state as any)?.filter || {};
				for (const facet of this.facets) {
					if ((facet as any).type !== 'range') continue;
					const rangeFacet = facet as any;
					const pending = readRangeFilter(filterState[rangeFacet.field]);
					const desired = pending
						? {
								low: typeof pending.low !== 'undefined' ? pending.low : rangeFacet.range?.low,
								high: typeof pending.high !== 'undefined' ? pending.high : rangeFacet.range?.high,
						  }
						: rangeFacet.range
						? { low: rangeFacet.range.low, high: rangeFacet.range.high }
						: null;
					if (!desired) continue;
					if (rangeFacet.active?.low !== desired.low || rangeFacet.active?.high !== desired.high) {
						rangeFacet.active = desired;
					}
				}
			},
			{ fireImmediately: true }
		);
	}

	/** Build a SearchFacetStore from raw facet data using the current detached urlManager.
	 * Synthesizes meta entries for each facet so SearchFacetStore's display/meta filter
	 * doesn't drop chat facets (the chat backend already decided what to send). */
	private buildFacetStore(facets: SearchResponseModelFacet[] = []): SearchFacetStore {
		const baseMeta = this.meta?.data || ({} as MetaResponseModel);
		const baseFacetMeta = (baseMeta.facets as Record<string, any> | undefined) || {};
		const facetMeta: Record<string, any> = { ...baseFacetMeta };
		facets.forEach((facet) => {
			if (!facet.field) return;
			const expectedDisplay = facet.type === 'range' ? 'slider' : 'list';
			const existing = facetMeta[facet.field];
			if (!existing || existing.display !== expectedDisplay) {
				facetMeta[facet.field] = {
					...(existing || {}),
					field: facet.field,
					label: (facet as any).label,
					display: expectedDisplay,
				};
			}
		});

		return new SearchFacetStore({
			config: {} as any,
			services: { ...this.services, urlManager: this.urlManager },
			stores: { storage: this.storage },
			data: {
				search: { facets } as any,
				meta: { ...baseMeta, facets: facetMeta } as MetaResponseModel,
			},
		});
	}

	/** Reset the detached urlManager and seed it with this message's filtered facet values,
	 * then rebuild the root SearchFacetStore so the UI shows the matching display. */
	public setActiveFacets(facets: SearchResponseModelFacet[], messageId: string | null): void {
		// reset url state, then seed with the API-reported filtered values
		this.urlManager.reset().go();
		facets.forEach((facet) => {
			// Slider/range facets carry the active selection on the facet itself rather
			// than on individual bucket values.
			if ((facet as any).type === 'range') {
				const active = (facet as any).active as { low?: number; high?: number } | undefined;
				const range = (facet as any).range as { low?: number; high?: number } | undefined;
				if (active && range && (active.low !== range.low || active.high !== range.high)) {
					this.urlManager.set(`filter.${facet.field}`, { low: active.low, high: active.high }).go();
				}
				return;
			}
			const filteredValues = ((facet as any).values || []).filter((v: any) => v?.filtered);
			filteredValues.forEach((v: any) => {
				if (typeof v.low !== 'undefined' || typeof v.high !== 'undefined') {
					this.urlManager.merge(`filter.${facet.field}`, [{ low: v.low, high: v.high }]).go();
				} else if (typeof v.value !== 'undefined') {
					this.urlManager.merge(`filter.${facet.field}`, v.value).go();
				}
			});
		});
		this.facets = this.buildFacetStore(facets);
		this.activeFacetsMessageId = messageId;
		this.appliedFilterSnapshot = stableStringify((this.urlManager.state as any)?.filter);
	}

	/** Total number of selected facet values in the in-progress urlManager state, summed
	 * across all filter fields. Each value in a value facet, each range in a range-bucket
	 * facet, and the single range on a slider facet each count as one. */
	get pendingFacetCount(): number {
		void this.urlVersion;
		const filterState = (this.urlManager.state as any)?.filter;
		if (!filterState) return 0;
		let count = 0;
		for (const key of Object.keys(filterState)) {
			const value = filterState[key];
			if (Array.isArray(value)) {
				count += value.length;
			} else if (typeof value !== 'undefined') {
				count += 1;
			}
		}
		return count;
	}

	/** Current in-progress facet selection translated into the API's `searchFilters` shape.
	 * Returned unconditionally (not gated on `hasPendingFacetChanges`) so callers that need
	 * to explicitly force a `productSearch` request — e.g. the non-multiselect facet
	 * click handlers — can attach the current filters without re-implementing the mapping. */
	get searchFilters(): { key: string; options: ({ key: string } | { low: string; high: string })[] }[] {
		void this.urlVersion;
		const filterState = (this.urlManager.state as any)?.filter as Record<string, any> | undefined;
		const result: { key: string; options: ({ key: string } | { low: string; high: string })[] }[] = [];
		if (!filterState) return result;
		Object.keys(filterState).forEach((field) => {
			const raw = filterState[field];
			const values = Array.isArray(raw) ? raw : [raw];
			const options: ({ key: string } | { low: string; high: string })[] = [];
			values.forEach((v) => {
				if (typeof v === 'object' && v !== null) {
					const low = v.low;
					const high = v.high;
					if (low == null && high == null) return;
					options.push({ low: low == null ? '*' : String(low), high: high == null ? '*' : String(high) });
				} else {
					options.push({ key: String(v) });
				}
			});
			if (options.length > 0) {
				result.push({ key: field, options });
			}
		});
		return result;
	}

	/** True when the in-progress facet selection differs from the filters that were applied
	 * by the active productSearchResult — i.e. the user has selected/removed something that
	 * hasn't been sent yet. Used to decide whether to show the Apply button. */
	get hasPendingFacetChanges(): boolean {
		// touch the version so mobx re-runs this when urlManager state changes
		void this.urlVersion;
		const filterState = (this.urlManager.state as any)?.filter;
		if (this.appliedFilterSnapshot === null) {
			// No facets have been seeded — pending changes exist only if
			// the user has manually added filters via addFacet.
			return filterState !== undefined && Object.keys(filterState).length > 0;
		}
		return stableStringify(filterState) !== this.appliedFilterSnapshot;
	}

	get currentChat(): ChatSessionStore | undefined {
		return this.chats.find((chat) => chat.id === this.currentChatId);
	}

	get chatsIds(): string[] {
		return this.chats.map((chat) => chat.id);
	}

	get blocked(): boolean {
		let isBlocked = false;

		const blockedAttachments = this.currentChat?.attachments.items.some((item) => item.type === 'image' && item.state === 'loading');
		if (this.loading || blockedAttachments) {
			isBlocked = true;
		}
		return isBlocked;
	}

	private applyChatStatusResponse(response: ChatStatusResponse): boolean {
		const { chatbot, features } = response;
		const { status, suggestedQuestions, welcomeMessage } = chatbot;
		this.chatEnabled = status.enabled === true;
		this.features = features;
		this.suggestedQuestions = suggestedQuestions || [];
		this.welcomeMessage = welcomeMessage || '';
		return this.chatEnabled;
	}

	public handleChatStatusResponse(response: ChatStatusResponse): boolean {
		const enabled = this.applyChatStatusResponse(response);
		// Always persist on a real API response — restarts the 12-hour expiration
		// so each new chat session refreshes the cache.
		this.storage.set('chatStatusResponse', JSON.stringify({ response, checkTime: Date.now() }));
		return enabled;
	}

	public reset(): void {
		this.chats = [];
		this.clearProductQuickview();
		this.storage.clear();
		this.createChat();
	}

	public setProductQuickview(product: Product): void {
		// Clone the product so variant selections (and the parent-mappings merge done
		// in updateProductQuickview) only affect the quickview — the carousel and any
		// other surfaces still hold the original instance.
		this.productQuickview = cloneProductForQuickview(product, this.meta?.data);
		this.productQuickviewError = null;
	}

	public updateProductQuickview(response: ProductsResponseModel): void {
		if (!this.productQuickview) {
			return;
		}

		// merge parent-level mappings from the API response into the Product
		this.productQuickview.mappings = {
			...this.productQuickview.mappings,
			core: { ...this.productQuickview.mappings.core, ...response.mappings.core },
		};

		const meta = this.meta?.data || {};

		if (this.productQuickview.variants) {
			// update existing Variants with new data from the Products API
			this.productQuickview.variants.optionConfig = response.variants.optionConfig;
			this.productQuickview.variants.update(response.variants.data as any);
		} else {
			// create Variants for the first time using the Products API data
			this.productQuickview.variants = new Variants({
				data: {
					mask: this.productQuickview.mask,
					variants: response.variants.data as any,
					optionConfig: response.variants.optionConfig as any,
					meta,
				},
			});
		}
	}

	public setProductQuickviewError(message: string): void {
		this.productQuickviewError = message;
	}

	public clearProductQuickview(): void {
		this.productQuickview = null;
		this.productQuickviewError = null;
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

		this.chats = [currentChat];
	}

	public createChat(data?: { sessionId: string; sessionEndTime?: Date }): ChatSessionStore {
		// abandon any in-flight request state from the previous chat — its
		// response will be discarded by the controller, so the UI shouldn't
		// keep showing its loading spinner or stale error
		this.loading = false;
		this.error = undefined;

		// Prune old sessions before creating a new one to keep storage bounded
		ChatSessionStore.pruneStoredSessions(this.storage);

		const newChat = new ChatSessionStore({
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
			// Lazily hydrate results when switching to a session for the first time
			if (!chatExists.hydrated && this.storedMetaData) {
				chatExists.hydrateResults(this.storedMetaData);
				chatExists.hydrated = true;
			}
			this.currentChatId = id;
			this.storage.set('currentChatId', id);
		}
	}

	public sendProductQuery(result: any, options: { requestType: 'productQuery' | 'productSimilar' | 'productComparison' }): void {
		const display = result?.display || result;
		this.currentChat?.attachments.add<ChatAttachmentProduct>({
			type: 'product',
			requestType: options.requestType,
			productId: result.id,
			name: display.mappings?.core?.name,
			thumbnailUrl: display.mappings?.core?.thumbnailImageUrl || display.mappings?.core?.imageUrl || display.mappings?.core?.parentImageUrl,
		});

		// for the productQuery flow we want the secondary chat to immediately
		// show the product details panel — push a productQuery message so it
		// becomes the active side-chat message until a productAnswer arrives
		if (options.requestType === 'productQuery' && this.currentChat) {
			this.currentChat.pushProductQueryMessage(result);
		}
	}

	public compareProduct(result: any): void {
		this.currentChat?.comparisons.add({
			result,
		});
	}

	public addFacet(facet: { key: string; value: string }): void {
		const value = parseFacetValue(facet.value);
		this.urlManager.merge(`filter.${facet.key}`, Array.isArray(value) ? value : value).go();
	}

	public removeFacet(key: string, value: string): void {
		const parsed = parseFacetValue(value);
		this.urlManager.remove(`filter.${key}`, parsed).go();
	}

	public clearPendingFacets(): void {
		this.urlManager.remove('filter').go();
	}

	public isFacetSelected(key: string, value: string): boolean {
		// touch the version so mobx re-runs this when urlManager state changes (the
		// underlying UrlManager isn't a mobx observable, so we mirror its updates here)
		void this.urlVersion;
		const filterState = (this.urlManager.state as any)?.filter;
		if (!filterState || !filterState[key]) return false;
		const stored = Array.isArray(filterState[key]) ? filterState[key] : [filterState[key]];
		const parsed = parseFacetValue(value);
		return stored.some((entry: any) => facetValueEquals(entry, parsed));
	}

	public request(request: ChatRequestModel): void {
		// snapshot facet labels (field + per-value) from the active facets display so the
		// outgoing user message can render "Filter by Color Red" rather than raw keys
		const filterLabels: Record<string, { facetLabel: string; values: Record<string, string> }> = {};
		for (const facet of this.facets) {
			const valueFacet: any = facet;
			const values: Record<string, string> = {};
			(valueFacet.values || []).forEach((v: any) => {
				if (typeof v.low !== 'undefined' || typeof v.high !== 'undefined') {
					values[`${v.low ?? '*'}:${v.high ?? '*'}`] = v.label;
				} else if (typeof v.value !== 'undefined') {
					values[v.value] = v.label;
				}
			});
			filterLabels[valueFacet.field] = { facetLabel: valueFacet.label || valueFacet.field, values };
		}

		this.currentChat?.request(request, filterLabels);

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
		// TODO: handle error
		// if(err?.responseBody?.errorMessage || err?.responseBody?.errorCode) {
		// 	const errorMessage = err?.responseBody?.errorMessage || 'An unknown error has occurred.';
		// }

		this.currentChat?.update(data);
		if (!this.meta) {
			this.storage.set('meta', JSON.stringify(data.meta));
		}
		this.meta = new MetaStore({
			data: {
				meta: data.meta,
			},
		});
		// Keep raw meta in sync for lazy hydration of inactive sessions
		this.storedMetaData = data.meta;
	}
}

/** Deterministic JSON.stringify — sorts object keys recursively so equality comparisons
 * aren't sensitive to insertion order. */
function stableStringify(value: any): string {
	if (value === null || value === undefined) return 'null';
	if (typeof value !== 'object') return JSON.stringify(value);
	if (Array.isArray(value)) {
		return `[${value.map((v) => stableStringify(v)).join(',')}]`;
	}
	const keys = Object.keys(value).sort();
	return `{${keys.map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`).join(',')}}`;
}

/** Convert a chat-facet UI value into the URL-state shape — range buckets arrive as "low:high". */
function parseFacetValue(value: string): string | { low?: number; high?: number } {
	if (typeof value === 'string' && value.includes(':')) {
		const [low, high] = value.split(':');
		return {
			low: low === '*' ? undefined : Number(low),
			high: high === '*' ? undefined : Number(high),
		};
	}
	return value;
}

function facetValueEquals(a: any, b: any): boolean {
	if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
		return a.low === b.low && a.high === b.high;
	}
	return a === b;
}

/** Build a fresh observable Product from an existing one. Variants are intentionally
 * omitted — `updateProductQuickview` populates them from the products API response. */
function cloneProductForQuickview(product: Product, meta: MetaResponseModel | undefined): Product {
	const result: any = {
		id: product.id,
		responseId: product.responseId,
		mappings: JSON.parse(JSON.stringify(product.mappings || {})),
		attributes: JSON.parse(JSON.stringify(product.attributes || {})),
		badges: product.badges?.all?.map((b: any) => ({ tag: b.tag })) || [],
	};
	return new Product({
		config: {} as any,
		data: { result, meta: meta || ({} as MetaResponseModel) },
		position: product.position ?? 0,
		responseId: product.responseId,
	});
}
