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

export type ChatSystemMessage =
	| ChatResponseTextData
	| ChatResponseContentData
	| ChatResponseProductSearchResultData
	| ChatResponseInspirationResultData
	| ChatResponseProductAnswerData
	| ChatResponseProductComparisonData
	| ChatResponseProductRecommendationData
	| ChatResponseErrorData;

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

	constructor(params: ChatSessionStoreConfig) {
		const { id, sessionId, chat, attachments, actions, feedbacks, createdAt } = params.data || {};
		const { stores } = params;
		this.id = id || uuidv4();
		this.sessionId = sessionId;
		this.storage = stores.storage;
		this.actions = actions || [];
		this.createdAt = createdAt ? new Date(createdAt) : new Date();
		this.feedbacks = feedbacks || [];

		// if chat and attachments are passed, load them
		if (chat && chat.length > 0) {
			this.chat = chat;
		}
		if (attachments && attachments.length > 0) {
			attachments.forEach((attachment) => {
				this.attachments.add(attachment);
			});
		}

		makeObservable(this, {
			chat: observable,
			actions: observable,
			attachments: observable,
			feedbacks: observable,
		});
	}

	get isExpired(): boolean {
		const ONE_DAY = 24 * 60 * 60 * 1000;
		const now = new Date();
		const diff = now.getTime() - this.createdAt.getTime();
		return diff > ONE_DAY;
	}

	public reset(): void {
		this.attachments.reset();
		this.chat = [];
		this.feedbacks = [];
	}

	public save(): void {
		// TODO: save chat state to storage store (local)
		this.storage.set(`chats.${this.id}`, {
			sessionId: this.sessionId,
			chat: this.chat,
			attachments: this.attachments.items,
			actions: this.actions,
			feedbacks: this.feedbacks,
			createdAt: this.createdAt,
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
