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
	FeedbackRequestModel,
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
	public createdAt: Date = new Date();
	public requestType: string = '';
	public dismissedSideChatMessageId: string | null = null;

	constructor(params: ChatSessionStoreConfig) {
		const { id, sessionId, chat, attachments, actions, feedbacks, createdAt, committedComparisons } = params.data || {};
		const { stores } = params;
		this.id = id || uuidv4();
		this.sessionId = sessionId;
		this.storage = stores.storage;
		this.actions = actions || [];
		this.createdAt = createdAt ? new Date(createdAt) : new Date();
		this.feedbacks = feedbacks || [];

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
			const EXCLUDED_MESSAGE_TYPES = ['topic_drift'];
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
			dismissedSideChatMessageId: observable,
		});
	}

	public dismissSideChat(): void {
		const active = this.activeMessage;
		if (active) {
			this.dismissedSideChatMessageId = active.id;
		}
	}

	public pushProductQueryMessage(result: any): void {
		// drop any trailing productQuery so a fresh discussProduct click replaces
		// the side-chat target rather than stacking up
		while (this.chat.length > 0 && this.chat[this.chat.length - 1]?.messageType === 'productQuery') {
			this.chat.pop();
		}
		this.chat.push({
			id: uuidv4(),
			messageType: 'productQuery',
			sourceProduct: result,
		});
		// re-show the side chat in case the user previously dismissed it
		this.dismissedSideChatMessageId = null;
		this.save();
	}

	get isExpired(): boolean {
		const ONE_DAY = 24 * 60 * 60 * 1000;
		const now = new Date();
		const diff = now.getTime() - this.createdAt.getTime();
		return diff > ONE_DAY;
	}

	// get topicDrift(): ChatResponseTopicDriftData | null {
	// 	const lastMessage = this.chat[this.chat.length - 1];
	// 	return lastMessage?.messageType === 'topic_drift' ? lastMessage : null;
	// }

	get activeMessage(): ChatMessage | null {
		const EXCLUDED_MESSAGE_TYPES = ['topic_drift', 'productAnswer'];
		const messages = this.chat.filter((message) => !EXCLUDED_MESSAGE_TYPES.includes(message.messageType));
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

	// public handleTopicDrift(message: ChatResponseTopicDriftData | null): void {
	// 	// driftType: 'SCOPE_DRIFT' | 'CATEGORY_DRIFT' | 'NO_DRIFT';
	// 	// messageForDrift: string;
	// 	// recommendedAction: 'SCOPE_REDIRECT' | 'CATEGORY_SWITCH_CONFIRM' | 'CONTINUE';

	// 	if(message?.driftType === 'NO_DRIFT') {
	// 		// if no drift, do nothing but remove the topic drift message from the chat
	// 		this.chat = this.chat.filter(m => m.messageType !== 'topic_drift');
	// 		this.save();
	// 		return;
	// 	}
	// 	if(message?.driftType === 'SCOPE_DRIFT' || message?.driftType === 'CATEGORY_DRIFT') {
	// 		const lastUserMessageIndex = this.chat.map((message, index) => ({ message, index })).filter(({ message }) => message.messageType === 'user').map(({ index }) => index).pop();
	// 		if (lastUserMessageIndex !== undefined) {
	// 			this.chat = this.chat.slice(0, lastUserMessageIndex + 1);
	// 		} else {
	// 			this.reset();
	// 		}
	// 		this.save();
	// 	}
	// }

	public reset(): void {
		this.attachments.reset();
		this.chat = [];
		this.actions = [];
		this.feedbacks = [];
	}

	public save(): void {
		// TODO: save chat state to storage store (local)
		this.storage.set(`chats.${this.id}`, {
			sessionId: this.sessionId,
			chat: this.chat,
			// attachments: this.attachments.items,
			actions: this.actions,
			feedbacks: this.feedbacks,
			createdAt: this.createdAt,
			committedComparisons: this.comparisons.committedItems,
		});
	}

	public feedback(data: { request: FeedbackRequestModel; response: unknown }): void {
		const messageId = data.request.feedback.messageId;
		this.feedbacks.push({ messageId, rating: data.request.feedback.thumbs });
		this.save();
	}

	public request(request: ChatRequestModel): void {
		// clear the questions on new request
		this.actions = [];
		this.requestType = request.data.requestType;

		// remove any attachments that failed to upload
		const errorAttachments = this.attachments.items.filter((item) => item.state === 'error');
		errorAttachments.forEach((item) => this.attachments.items.splice(this.attachments.items.indexOf(item), 1));

		const attachments: string[] = [];
		if (request.data.requestType === 'productSearch') {
			const searchFilters = request.data.searchFilters;
			if (searchFilters.length > 0) {
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
		} else if (request.data.message) {
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
