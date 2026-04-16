import { makeObservable, observable } from 'mobx';
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
import { ChatAttachmentAddAttachment, ChatAttachmentFacet, ChatAttachmentProduct, ChatAttachmentStore } from '../Stores/ChatAttachmentStore';
import type { StorageStore } from '../../Storage/StorageStore';
import { MetaResponseModel } from '@athoscommerce/snapi-types';
import { ChatCompareStore } from './ChatCompareStore';

export type ChatFeedbacks = { messageId: string; rating: 'UP' | 'DOWN' };

export type ChatSessionFeedback = { rating: 'UP' | 'DOWN' };

export type ChatUserMessage = {
	id: string;
	messageType: 'user';
	text: string;
	attachments?: string[];
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
		committedComparisons?: any[];
	};
	stores: {
		storage: StorageStore;
	};
};

export type FacetsData = {
	type: 'facets';
	// data: MoiResponseModelProductSearchResult['facets'];
	data: any;
};

export type ActionsData = {
	type: 'actions';
	// data: ChatResponseActionsData['actions'];
	data: any;
};
export type ChatActions = (FacetsData | ActionsData)[];

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
	public requestType: string = '';
	public dismissedSideChatMessageId: string | null = null;
	public activeMessageId: string | null = null;

	constructor(params: ChatSessionStoreConfig) {
		const { id, sessionId, chat, attachments, actions, feedbacks, sessionFeedback, feedbackDismissed, createdAt, committedComparisons } =
			params.data || {};
		const { stores } = params;
		this.id = id || uuidv4();
		this.sessionId = sessionId;
		this.storage = stores.storage;
		this.actions = actions || [];
		this.createdAt = createdAt ? new Date(createdAt) : new Date();
		this.feedbacks = feedbacks || [];
		this.sessionFeedback = sessionFeedback || null;
		this.feedbackDismissed = feedbackDismissed || false;

		// if chat and attachments are passed, load them
		if (chat && chat.length > 0) {
			// productQuery messages only exist to drive the side-chat panel for an
			// in-flight discussProduct click; they must not be rehydrated on reload
			// or the side chat would re-open without the matching primary-chat state
			this.chat = chat.filter((message) => message.messageType !== 'productQuery');
		}
		if (attachments && attachments.length > 0) {
			attachments.forEach((attachment) => {
				this.attachments.add(attachment);
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
	}

	public pushProductQueryMessage(result: any): void {
		// capture the side-chat message that was active at click time so a back action
		// can restore it even when it's not the last message in the chat
		const sourceMessageId = this.activeMessage?.id;
		// drop any trailing productQuery so a fresh discussProduct click replaces
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
		const ONE_DAY = 24 * 60 * 60 * 1000;
		const now = new Date();
		const diff = now.getTime() - this.createdAt.getTime();
		return diff > ONE_DAY;
	}

	get topicDrift(): ChatResponseTopicDriftData | null {
		const lastMessage = this.chat[this.chat.length - 1];
		return lastMessage?.messageType === 'topicDrift' ? lastMessage : null;
	}

	get activeMessage(): ChatMessage | null {
		const EXCLUDED_MESSAGE_TYPES = ['topicDrift', 'productAnswer'];
		const messages = this.chat.filter((message) => !EXCLUDED_MESSAGE_TYPES.includes(message.messageType));

		if (this.activeMessageId) {
			const override = messages.find((m) => m.id === this.activeMessageId);
			if (override) return override;
		}

		const lastMessage = messages[messages.length - 1];

		// When the user sends a follow-up while in a productQuery flow (e.g. "discuss product"),
		// the last visible message becomes a 'user' message which would close the secondary panel.
		// Instead, keep the productQuery message as the active side-chat target so the product
		// information panel stays open during and after the request.
		if (lastMessage?.messageType === 'user' && this.requestType === 'productQuery') {
			const lastProductQuery = [...messages].reverse().find((m) => m.messageType === 'productQuery');
			if (lastProductQuery) {
				return lastProductQuery;
			}
		}

		return lastMessage || null;
	}

	public dismissTopicDrift(): void {
		this.chat = this.chat.filter((m) => m.messageType !== 'topicDrift');
		this.save();
	}

	public handleTopicDrift(): string | undefined {
		const lastUserMessage = [...this.chat].reverse().find((m) => m.messageType === 'user') as ChatUserMessage | undefined;
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

	public save(): void {
		// TODO: save chat state to storage store (local)
		this.storage.set(`chats.${this.id}`, {
			sessionId: this.sessionId,
			chat: this.chat,
			// attachments: this.attachments.items,
			actions: this.actions,
			feedbacks: this.feedbacks,
			sessionFeedback: this.sessionFeedback,
			feedbackDismissed: this.feedbackDismissed,
			createdAt: this.createdAt,
			committedComparisons: this.comparisons.committedItems,
		});
	}

	public request(request: ChatRequestModel): void {
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
					const attachedFacet = this.attachments.attached.find(
						(item) => item.type == 'facet' && (item as any).key == filter.key
					) as ChatAttachmentFacet;
					if (attachedFacet) {
						attachments.push(attachedFacet.id);
						attachedFacet.activate();
						filterTextArray.push(`${attachedFacet.facetLabel} ${attachedFacet.label}`);
					}
				});
				this.chat.push({
					id: uuidv4(),
					messageType: 'user',
					attachments: attachments.length > 0 ? attachments : undefined,
					text: `Filter by ${filterTextArray.join('and ')}`,
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
				const productIds = request.data.productIds;
				productIds.forEach((productId) => {
					const attachedProduct = this.attachments.attached.find((item) => item.type == 'product' && item.productId == productId);
					if (attachedProduct) {
						attachments.push(attachedProduct.id);
						attachedProduct.activate();
					}
				});
			}

			this.chat.push({
				id: uuidv4(),
				messageType: 'user',
				attachments: attachments.length > 0 ? attachments : undefined,
				text: request.data.message,
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
		data.chat.data.forEach((data) => {
			// check if the data has questions?
			if (data.messageType === 'actions') {
				this.actions.push({
					type: 'actions',
					data: data.actions,
				});
				return;
			}

			if (data.messageType === 'productSearchResult' && data.facets?.length > 0) {
				this.actions.push({
					type: 'facets',
					data: data.facets,
				});
			}

			this.chat.push(data);
		});

		this.save();
	}
}
