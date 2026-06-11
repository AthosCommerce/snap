import { makeObservable, observable, computed } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import type {
	ChatResponseModel,
	ChatRequestModel,
	ChatResponseTextData,
	ChatResponseProductSearchResultData,
	ChatResponseInspirationResultData,
	ChatResponseContentData,
	ChatResponseProductAnswerData,
	ChatResponseProductComparisonData,
	ChatResponseProductRecommendationData,
	ChatResponseErrorData,
	ChatResponseTopicDriftData,
} from '@athoscommerce/snap-client';
import {
	ChatAttachmentAddAttachment,
	ChatAttachmentFacet,
	ChatAttachmentImage,
	ChatAttachmentProduct,
	ChatAttachmentStore,
} from '../Stores/ChatAttachmentStore';
import type { StorageStore } from '@athoscommerce/snap-toolbox';
import { MetaResponseModel, SearchResponseModelResult } from '@athoscommerce/snapi-types';
import { ChatCompareStore } from './ChatCompareStore';
import { SearchResultStore, Product } from '../../Search/Stores/SearchResultStore';

function createChatResultStore(results: SearchResponseModelResult[], meta: MetaResponseModel): SearchResultStore {
	return new SearchResultStore({
		config: {} as any,
		state: { loaded: true },
		data: {
			search: { results },
			meta,
		},
	});
}

function createChatProduct(result: SearchResponseModelResult, meta: MetaResponseModel): Product {
	return new Product({
		config: {} as any,
		data: { result, meta },
		position: 0,
		responseId: '',
	});
}

/** Extract raw serializable data from a Product instance for storage. */
function serializeProduct(product: any): any {
	if (!(product instanceof Product)) return product;
	const raw: any = {
		id: product.id,
		responseId: product.responseId,
		mappings: product.mappings,
		attributes: product.attributes,
		badges: product.badges?.all?.map((b: any) => ({ tag: b.tag })) || [],
	};
	if (product.variants) {
		raw.variants = {
			data: product.variants.data.map((v: any) => ({
				mappings: v.mappings,
				attributes: v.attributes,
				options: v.options,
				badges: v.badges,
			})),
			optionConfig: product.variants.optionConfig,
		};
	}
	return raw;
}

/** Serialize attachments for localStorage. Strips base64 from images (kept only at runtime). */
function serializeAttachmentsForStorage(items: (ChatAttachmentImage | ChatAttachmentProduct | ChatAttachmentFacet)[]): ChatAttachmentAddAttachment[] {
	return items.map((item) => {
		if (item.type === 'image') {
			return {
				type: 'image',
				id: item.id,
				fileName: item.fileName,
				imageId: item.imageId,
				imageUrl: item.imageUrl,
				thumbnailUrl: item.thumbnailUrl,
				state: item.state,
				error: item.error,
			};
		}
		if (item.type === 'product') {
			return {
				type: 'product',
				id: item.id,
				productId: item.productId,
				thumbnailUrl: item.thumbnailUrl,
				name: item.name,
				requestType: item.requestType,
				state: item.state,
				error: item.error,
			};
		}
		return {
			type: 'facet',
			id: item.id,
			key: item.key,
			facetLabel: item.facetLabel,
			value: item.value,
			label: item.label,
			count: item.count,
			state: item.state,
			error: item.error,
		};
	});
}

/** Convert a chat message array to a plain serializable form for localStorage. */
function serializeChatForStorage(chat: ChatMessage[]): any[] {
	return chat.map((message) => {
		switch (message.messageType) {
			case 'productSearchResult': {
				const msg = message as any;
				return { ...msg, results: Array.from(msg.results || []).map(serializeProduct) };
			}
			case 'inspirationResult': {
				const msg = message as any;
				return {
					...msg,
					inspirationSections: msg.inspirationSections?.map((section: any) => ({
						...section,
						products: Array.from(section.products || []).map(serializeProduct),
					})),
				};
			}
			case 'productAnswer': {
				const msg = message as any;
				return { ...msg, sourceProduct: serializeProduct(msg.sourceProduct) };
			}
			case 'productComparison': {
				const msg = message as any;
				return { ...msg, searchResults: Array.from(msg.searchResults || []).map(serializeProduct) };
			}
			case 'productRecommendation': {
				const msg = message as any;
				return {
					...msg,
					recommendationResult: msg.recommendationResult?.map((rec: any) => ({
						...rec,
						results: Array.from(rec.results || []).map(serializeProduct),
					})),
				};
			}
			case 'productQuery': {
				const msg = message as any;
				return { ...msg, sourceProduct: serializeProduct(msg.sourceProduct) };
			}
			default:
				return message;
		}
	});
}

export type ChatFeedbacks = { messageId: string; rating: 'UP' | 'DOWN' };

export type ChatSessionFeedback = { rating: 'UP' | 'DOWN' };

export type ChatUserMessage = {
	id: string;
	messageType: 'user';
	text: string;
	attachments?: string[];
	requestType?: string;
	request?: Record<string, any>;
};

export type ChatProductQueryMessageData = {
	id: string;
	messageType: 'productQuery';
	sourceProduct: any;
	sourceMessageId?: string;
};

export type ChatSystemMessage =
	| ChatResponseTextData
	| ChatResponseContentData
	| ChatResponseProductSearchResultData
	| ChatResponseInspirationResultData
	| ChatResponseProductAnswerData
	| ChatResponseProductComparisonData
	| ChatResponseProductRecommendationData
	| ChatResponseErrorData
	| ChatResponseTopicDriftData
	| ChatProductQueryMessageData;

export type ChatMessage = ChatUserMessage | ChatSystemMessage;

type ChatSessionStoreConfig = {
	data?: {
		id?: string;
		sessionId?: string;
		chat?: ChatMessage[];
		attachments?: ChatAttachmentAddAttachment[];
		actions?: ChatActions;
		feedbacks?: ChatFeedbacks[];
		sessionFeedback?: ChatSessionFeedback | null;
		feedbackDismissed?: boolean;
		createdAt?: Date;
		sessionEndTime?: Date;
		committedComparisons?: any[];
	};
	stores: {
		storage: StorageStore;
	};
};

export type ActionsData = {
	type: 'actions';
	// data: ChatResponseActionsData['actions'];
	data: any;
};
export type ChatActions = ActionsData[];

/** Snapshot of facet labels keyed by field — used to render the user message text for a productSearch request. */
export type FilterLabelMap = Record<string, { facetLabel: string; values: Record<string, string> }>;

export class ChatSessionStore {
	public chat: ChatMessage[] = [];
	public actions: ChatActions = [];
	public id: string;
	public sessionId?: string;
	public attachments: ChatAttachmentStore = new ChatAttachmentStore();
	public comparisons: ChatCompareStore = new ChatCompareStore();
	public storage: StorageStore;
	public feedbacks: ChatFeedbacks[] = [];
	public sessionFeedback: ChatSessionFeedback | null = null;
	public feedbackDismissed: boolean = false;
	public feedbackJustGiven: boolean = false;
	public createdAt: Date = new Date();
	public sessionEndTime?: Date;
	public requestType: string = '';
	public dismissedSideChatMessageId: string | null = null;
	public activeMessageId: string | null = null;
	public sessionLimitReached: boolean = false;
	/** Whether raw stored results have been hydrated into Product/SearchResultStore instances. */
	public hydrated: boolean = true;

	constructor(params: ChatSessionStoreConfig) {
		const {
			id,
			sessionId,
			chat,
			attachments,
			actions,
			feedbacks,
			sessionFeedback,
			feedbackDismissed,
			createdAt,
			sessionEndTime,
			committedComparisons,
		} = params.data || {};
		const { stores } = params;
		this.id = id || uuidv4();
		this.sessionId = sessionId;
		this.storage = stores.storage;
		this.actions = actions || [];
		this.createdAt = createdAt ? new Date(createdAt) : new Date();
		this.sessionEndTime = sessionEndTime ? new Date(sessionEndTime) : undefined;
		this.feedbacks = feedbacks || [];
		this.sessionFeedback = sessionFeedback || null;
		this.feedbackDismissed = feedbackDismissed || false;

		// if chat and attachments are passed, load them
		if (chat && chat.length > 0) {
			// productQuery messages only exist to drive the side-chat panel for an
			// in-flight productQuery click; they must not be rehydrated on reload
			// or the side chat would re-open without the matching primary-chat state
			this.chat = chat.filter((message) => message.messageType !== 'productQuery');
		}
		if (attachments && attachments.length > 0) {
			this.attachments.hydrate(attachments);

			// Any attachment already referenced by a sent user message is no longer
			// pending — transition it from 'active' to 'saved' so it stops appearing
			// in the attachment context bar while remaining available via get(id) for
			// rendering inside historical user messages.
			const usedAttachmentIds = new Set<string>();
			this.chat.forEach((msg) => {
				if (msg.messageType === 'user' && (msg as ChatUserMessage).attachments) {
					(msg as ChatUserMessage).attachments!.forEach((id) => usedAttachmentIds.add(id));
				}
			});
			this.attachments.items.forEach((item) => {
				if ((item.state === 'active' || item.state === 'attached') && usedAttachmentIds.has(item.id)) {
					item.save();
				}
			});
		}

		// restore committed comparisons only if the thread is still anchored
		// to a product comparison — either the last response was a
		// productComparison or the user sent a follow-up before a response
		// arrived (pending state)
		if (committedComparisons && committedComparisons.length > 0) {
			const EXCLUDED_MESSAGE_TYPES = ['topicDrift'];
			const visibleMessages = this.chat.filter((message) => !EXCLUDED_MESSAGE_TYPES.includes(message.messageType));
			const lastMessage = visibleMessages[visibleMessages.length - 1];
			if (lastMessage?.messageType === 'productComparison' || lastMessage?.messageType === 'user') {
				this.comparisons.committedItems = committedComparisons;
			}
		}

		makeObservable(this, {
			chat: observable,
			requestType: observable,
			actions: observable,
			attachments: observable,
			feedbacks: observable,
			sessionFeedback: observable,
			feedbackDismissed: observable,
			feedbackJustGiven: observable,
			dismissedSideChatMessageId: observable,
			activeMessageId: observable,
			sessionLimitReached: observable,
			activeMessage: computed,
		});
	}

	public dismissSideChat(): void {
		// clear the override first so the fallback (last eligible message) is what we
		// dismiss — otherwise closing while viewing an older message would leave the
		// last message undismissed and the side chat would auto-reopen on it
		this.activeMessageId = null;
		const fallback = this.activeMessage;
		if (fallback) {
			this.dismissedSideChatMessageId = fallback.id;
		}
	}

	public setActiveMessage(id: string): void {
		this.activeMessageId = id;
		this.dismissedSideChatMessageId = null;

		// Reopening a previous productComparison switches the conversation context
		// back to the comparison — drop any lingering 'discuss product' (productQuery)
		// attachment so the footer reflects only the comparison products.
		const target = this.chat.find((m) => m.id === id);
		if (target?.messageType === 'productComparison') {
			const productQueryAttachments = this.attachments.attached.filter(
				(item) => item.type === 'product' && (item as any).requestType === 'productQuery'
			);
			productQueryAttachments.forEach((item) => this.attachments.remove(item.id));
		}
	}

	public pushProductQueryMessage(result: any): void {
		// capture the side-chat message that was active at click time so a back action
		// can restore it even when it's not the last message in the chat
		const sourceMessageId = this.activeMessage?.id;
		// drop any trailing productQuery so a fresh productQuery click replaces
		// the side-chat target rather than stacking up
		while (this.chat.length > 0 && this.chat[this.chat.length - 1]?.messageType === 'productQuery') {
			this.chat.pop();
		}
		this.chat.push({
			id: uuidv4(),
			messageType: 'productQuery',
			sourceProduct: result,
			sourceMessageId,
		});
		// re-show the side chat in case the user previously dismissed it
		this.dismissedSideChatMessageId = null;
		this.activeMessageId = null;
		this.save();
	}

	public popProductQueryMessage(restoreActiveMessageId?: string): void {
		while (this.chat.length > 0 && this.chat[this.chat.length - 1]?.messageType === 'productQuery') {
			this.chat.pop();
		}
		this.activeMessageId = restoreActiveMessageId || null;
		this.save();
	}

	get isExpired(): boolean {
		// Prefer the server-provided end time (returned by chatInit); fall back to a
		// 24-hour window from createdAt for sessions persisted before that field existed.
		if (this.sessionEndTime) {
			return Date.now() > this.sessionEndTime.getTime();
		}
		const ONE_DAY = 24 * 60 * 60 * 1000;
		return Date.now() - this.createdAt.getTime() > ONE_DAY;
	}

	get topicDrift(): ChatResponseTopicDriftData | null {
		const lastMessage = this.chat[this.chat.length - 1];
		return lastMessage?.messageType === 'topicDrift' ? lastMessage : null;
	}

	get activeMessage(): ChatMessage | null {
		const EXCLUDED_MESSAGE_TYPES = ['topicDrift', 'productAnswer'];

		if (this.activeMessageId) {
			// Walk backward — the override is usually near the end
			for (let i = this.chat.length - 1; i >= 0; i--) {
				const m = this.chat[i];
				if (m.id === this.activeMessageId && !EXCLUDED_MESSAGE_TYPES.includes(m.messageType)) {
					return m;
				}
			}
		}

		// Find the last eligible message by iterating backwards
		let lastMessage: ChatMessage | null = null;
		for (let i = this.chat.length - 1; i >= 0; i--) {
			if (!EXCLUDED_MESSAGE_TYPES.includes(this.chat[i].messageType)) {
				lastMessage = this.chat[i];
				break;
			}
		}

		// When the user sends a follow-up while in a productQuery flow (e.g. "discuss product"),
		// the last visible message becomes a 'user' message which would close the secondary panel.
		// Instead, keep the productQuery message as the active side-chat target so the product
		// information panel stays open during and after the request.
		if (lastMessage?.messageType === 'user' && this.requestType === 'productQuery') {
			for (let i = this.chat.length - 1; i >= 0; i--) {
				const m = this.chat[i];
				if (m.messageType === 'productQuery' && !EXCLUDED_MESSAGE_TYPES.includes(m.messageType)) {
					return m;
				}
			}
		}

		return lastMessage || null;
	}

	public dismissTopicDrift(): void {
		this.chat = this.chat.filter((m) => m.messageType !== 'topicDrift');
		this.save();
	}

	public handleTopicDrift(): string | undefined {
		let lastUserMessage: ChatUserMessage | undefined;
		for (let i = this.chat.length - 1; i >= 0; i--) {
			if (this.chat[i].messageType === 'user') {
				lastUserMessage = this.chat[i] as ChatUserMessage;
				break;
			}
		}
		const messageText = lastUserMessage?.text;

		// remove all topicDrift messages and the last user message that triggered the drift
		if (lastUserMessage) {
			const lastUserIndex = this.chat.lastIndexOf(lastUserMessage);
			this.chat = this.chat.slice(0, lastUserIndex);
		} else {
			this.chat = this.chat.filter((m) => m.messageType !== 'topicDrift');
		}
		this.save();

		return messageText;
	}

	public reset(): void {
		this.attachments.reset();
		this.chat = [];
		this.actions = [];
		this.feedbacks = [];
		this.sessionFeedback = null;
	}

	private saveTimerId: ReturnType<typeof setTimeout> | null = null;

	/** Persist the session to storage immediately (synchronous). */
	public saveImmediate(): void {
		if (this.saveTimerId !== null) {
			clearTimeout(this.saveTimerId);
			this.saveTimerId = null;
		}

		this.storage.set(`chats.${this.id}`, {
			sessionId: this.sessionId,
			chat: serializeChatForStorage(this.chat),
			attachments: serializeAttachmentsForStorage(this.attachments.items),
			actions: this.actions,
			feedbacks: this.feedbacks,
			sessionFeedback: this.sessionFeedback,
			feedbackDismissed: this.feedbackDismissed,
			createdAt: this.createdAt,
			sessionEndTime: this.sessionEndTime,
			committedComparisons: this.comparisons.committedItems,
		});
	}

	/**
	 * Schedule a save — multiple calls within the debounce window are coalesced
	 * into a single localStorage write.
	 */
	public save(): void {
		if (this.saveTimerId !== null) {
			clearTimeout(this.saveTimerId);
		}
		this.saveTimerId = setTimeout(() => {
			this.saveTimerId = null;
			this.saveImmediate();
		}, 0);
	}

	/** Remove oldest stored sessions when exceeding the limit. */
	public static pruneStoredSessions(storage: StorageStore, maxSessions: number = 10): void {
		const storedChats = storage.get('chats');
		if (storedChats) {
			const chatIds = Object.keys(storedChats);
			if (chatIds.length > maxSessions) {
				chatIds
					.sort((a, b) => {
						const aTime = new Date(storedChats[a]?.createdAt || 0).getTime();
						const bTime = new Date(storedChats[b]?.createdAt || 0).getTime();
						return aTime - bTime;
					})
					.slice(0, chatIds.length - maxSessions)
					.forEach((id) => {
						storage.set(`chats.${id}`, null);
					});
			}
		}
	}

	/** Re-wrap raw stored results as Product / SearchResultStore instances. */
	public hydrateResults(meta: MetaResponseModel): void {
		this.chat.forEach((message) => {
			if (message.messageType === 'productSearchResult') {
				const msg = message as any;
				if (msg.results?.length && !(msg.results[0] instanceof Product)) {
					msg.results = createChatResultStore(msg.results, meta);
				}
			} else if (message.messageType === 'inspirationResult') {
				const msg = message as any;
				msg.inspirationSections?.forEach((section: any) => {
					if (section.products?.length && !(section.products[0] instanceof Product)) {
						section.products = createChatResultStore(section.products, meta);
					}
				});
			} else if (message.messageType === 'productAnswer') {
				const msg = message as any;
				if (msg.sourceProduct && !(msg.sourceProduct instanceof Product)) {
					msg.sourceProduct = createChatProduct(msg.sourceProduct, meta);
				}
			} else if (message.messageType === 'productComparison') {
				const msg = message as any;
				if (msg.searchResults?.length && !(msg.searchResults[0] instanceof Product)) {
					msg.searchResults = createChatResultStore(msg.searchResults, meta);
				}
			} else if (message.messageType === 'productRecommendation') {
				const msg = message as any;
				msg.recommendationResult?.forEach((rec: any) => {
					if (rec.results?.length && !(rec.results[0] instanceof Product)) {
						rec.results = createChatResultStore(rec.results, meta);
					}
				});
			}
		});
	}

	public request(request: ChatRequestModel, filterLabels?: FilterLabelMap): void {
		// clear the questions on new request
		this.actions = [];
		this.requestType = request.data.requestType;
		this.activeMessageId = null;

		// remove any attachments that failed to upload
		const errorAttachments = this.attachments.items.filter((item) => item.state === 'error');
		errorAttachments.forEach((item) => this.attachments.items.splice(this.attachments.items.indexOf(item), 1));

		const attachments: string[] = [];
		if (request.data.requestType === 'productSearch') {
			const searchFilters = request.data.searchFilters;
			if (searchFilters && searchFilters.length > 0) {
				const filterTextArray: string[] = [];

				searchFilters.forEach((filter) => {
					const labelEntry = filterLabels?.[filter.key];
					filter.options?.forEach((option) => {
						const facetLabel = labelEntry?.facetLabel || filter.key;
						if ('low' in option || 'high' in option) {
							const low = (option as { low: string }).low ?? '*';
							const high = (option as { high: string }).high ?? '*';
							filterTextArray.push(`${facetLabel} ${low}-${high}`);
						} else {
							const key = (option as { key: string }).key;
							const optionLabel = labelEntry?.values[key] || key;
							filterTextArray.push(`${facetLabel} ${optionLabel}`);
						}
					});
				});
				this.chat.push({
					id: uuidv4(),
					messageType: 'user',
					attachments: attachments.length > 0 ? attachments : undefined,
					text: `Filter by ${filterTextArray.join(' and ')}`,
					requestType: request.data.requestType,
					request: request.data, // request is added here to conditionally display different text in MessageUser
				});
			} else if (request.data.searchTerm) {
				// for when a query is clicked from ChatInspirationResultMessage
				this.chat.push({
					id: uuidv4(),
					messageType: 'user',
					text: request.data.searchTerm,
					requestType: request.data.requestType,
					request: request.data, // request is added here to conditionally display different text in MessageUser
				});
			}
		} else if ('message' in request.data && request.data.message) {
			if (request.data.requestType === 'imageSearch') {
				const imageId = request.data.attachedImageId;
				const attachedImage = this.attachments.attached.find((item) => item.type == 'image' && item.imageId == imageId);
				if (attachedImage) {
					attachments.push(attachedImage.id);
					attachedImage.activate();
				}
			} else if (request.data.requestType === 'productQuery') {
				const productId = request.data.productId;
				const attachedProduct = this.attachments.attached.find((item) => item.type == 'product' && item.productId == productId);
				if (attachedProduct) {
					attachments.push(attachedProduct.id);
					attachedProduct.activate();
				}
			} else if (request.data.requestType === 'productComparison') {
				this.comparisons.compared.forEach((item) => {
					const d = item.result?.display || item.result;
					const attachment = this.attachments.add<ChatAttachmentProduct>({
						type: 'product',
						requestType: 'productComparison',
						productId: item.result.id,
						name: d.mappings?.core?.name,
						thumbnailUrl: d.mappings?.core?.thumbnailImageUrl || d.mappings?.core?.imageUrl || d.mappings?.core?.parentImageUrl,
					});
					if (attachment) {
						attachments.push(attachment.id);
						attachment.activate();
					}
				});
			}

			this.chat.push({
				id: uuidv4(),
				messageType: 'user',
				attachments: attachments.length > 0 ? attachments : undefined,
				text: request.data.message,
				requestType: request.data.requestType,
			});
		} else if (request.data?.requestType === 'productSimilar') {
			const attachedSimilarProduct = this.attachments.attached.find((item) => item.type == 'product' && item.requestType == 'productSimilar');
			if (attachedSimilarProduct) {
				attachments.push(attachedSimilarProduct.id);
				attachedSimilarProduct.activate();
				this.chat.push({
					id: uuidv4(),
					messageType: 'user',
					attachments: attachments.length > 0 ? attachments : undefined,
					text: `Show similar products to "${
						(attachedSimilarProduct as ChatAttachmentProduct).name || (attachedSimilarProduct as ChatAttachmentProduct).productId
					}"`,
					requestType: request.data.requestType,
				});
			}
		} else if (request.data?.requestType === 'productComparison') {
			const productNames: string[] = [];
			this.comparisons.compared.forEach((item) => {
				const d = item.result?.display || item.result;
				const attachment = this.attachments.add<ChatAttachmentProduct>({
					type: 'product',
					requestType: 'productComparison',
					productId: item.result.id,
					name: d.mappings?.core?.name,
					thumbnailUrl: d.mappings?.core?.thumbnailImageUrl || d.mappings?.core?.imageUrl || d.mappings?.core?.parentImageUrl,
				});
				if (attachment) {
					attachments.push(attachment.id);
					attachment.activate();
					productNames.push(attachment.name || attachment.productId);
				}
			});

			if (attachments.length > 0) {
				this.chat.push({
					id: uuidv4(),
					messageType: 'user',
					attachments: attachments,
					text: `Compare ${productNames.map((name) => `"${name}"`).join(' and ')}`,
					requestType: request.data.requestType,
				});
			}
		}

		// snapshot the comparison list into the committed list so the
		// header section can clear and the footer can display them
		if (request.data.requestType === 'productComparison') {
			this.comparisons.commit();
		}

		this.save();
	}

	public update(data: { chat: ChatResponseModel; meta: MetaResponseModel }): void {
		this.sessionId = data.chat.context.sessionId;
		const meta = data.meta;

		data.chat.data.forEach((messageData) => {
			// check if the data has questions?
			if (messageData.messageType === 'actions') {
				this.actions.push({
					type: 'actions',
					data: messageData.actions,
				});
				return;
			}

			// convert raw results to Product instances (via SearchResultStore) so
			// display components can use result.display for mask-aware rendering
			if (messageData.messageType === 'productSearchResult' && messageData.results?.length) {
				messageData.results = createChatResultStore(messageData.results as SearchResponseModelResult[], meta) as any;
			} else if (messageData.messageType === 'inspirationResult' && messageData.inspirationSections?.length) {
				messageData.inspirationSections = messageData.inspirationSections.map((section) => ({
					...section,
					products: section.products?.length
						? (createChatResultStore(section.products as SearchResponseModelResult[], meta) as any)
						: section.products,
				}));
			} else if (messageData.messageType === 'productAnswer' && messageData.sourceProduct) {
				(messageData as any).sourceProduct = createChatProduct(messageData.sourceProduct as SearchResponseModelResult, meta);
			} else if (messageData.messageType === 'productComparison' && messageData.searchResults?.length) {
				messageData.searchResults = createChatResultStore(messageData.searchResults as SearchResponseModelResult[], meta) as any;
			} else if (messageData.messageType === 'productRecommendation' && messageData.recommendationResult?.length) {
				messageData.recommendationResult = messageData.recommendationResult.map((rec) => ({
					...rec,
					results: rec.results?.length ? (createChatResultStore(rec.results as SearchResponseModelResult[], meta) as any) : rec.results,
				}));
			}

			this.chat.push(messageData);
		});

		this.save();
	}
}
