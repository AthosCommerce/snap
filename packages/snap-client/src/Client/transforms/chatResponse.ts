import { SearchResponseModelResult } from '@athoscommerce/snapi-types';
import type {
	MoiRequestModel,
	MoiResponseModel,
	MoiResponseModelActions,
	MoiResponseModelContent,
	MoiResponseModelInspirationResult,
	MoiResponseModelSearchResult,
	MoiResponseModelProductAnswer,
	MoiResponseModelProductComparison,
	MoiResponseModelProductRecommendation,
	MoiResponseModelProductSearchResult,
	MoiResponseModelSuggestedQuestions,
	MoiResponseModelText,
} from '../apis/Chat';

export type ChatResponseModel = {
	data: (
		| ChatResponseTextData
		| ChatResponseContentData
		| ChatResponseProductSearchResultData
		| ChatResponseInspirationResultData
		| ChatResponseProductAnswerData
		| ChatResponseSuggestedQuestionsData
		| ChatResponseActionsData
		| ChatResponseProductComparisonData
		| ChatResponseProductRecommendationData
	)[];
	context: {
		sessionId: string;
	};
};

export type ChatResponseTextData = {
	messageType: 'text';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
	explanation: string;
};

export type ChatResponseContentData = {
	messageType: 'content';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
};

export type ChatResponseProductSearchResultData = {
	messageType: 'productSearchResult';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
	products: SearchResponseModelResult[];
	facets: MoiResponseModelProductSearchResult['facets'];
	filtersApplied: unknown[]; // TODO: type this
	totalResultsFound: number;
};

export type ChatResponseInspirationResultData = {
	messageType: 'inspirationResult';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
	topic: string;
	products: SearchResponseModelResult[];
};

export type ChatResponseProductAnswerData = {
	messageType: 'productAnswer';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
	product: SearchResponseModelResult;
};

export type ChatResponseSuggestedQuestionsData = {
	messageType: 'actions';
	actions: MoiResponseModelActions['actions'];
};

export type ChatResponseProductComparisonData = {
	messageType: 'productComparison';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
	products: SearchResponseModelResult[];
};

export type ChatResponseActionsData = {
	messageType: 'actions';
	actions: MoiResponseModelActions['actions'];
};

export type ChatResponseProductRecommendationData = {
	messageType: 'productRecommendation';
	id: string;
	note: string;
	collectFeedback: boolean;
	text: string;
	product: SearchResponseModelResult;
	products: SearchResponseModelResult[];
};

export type ChatRequestModel = {
	context: {
		sessionId?: string;
		widgetId: string;
	};
	data: MoiRequestModel;
	tracking: {
		userId: string;
		domain: string;
		sessionId?: string;
		pageLoadId?: string;
	};
	personalization?: {
		shopper: string;
	};
};

export type FeedbackRequestModel = {
	context: {
		pqaWidgetId: string;
		sessionId?: string;
		visitorId: string;
	};
	feedback: {
		messageId: string;
		thumbs: 'UP' | 'DOWN';
		reason?: string;
	};
};

export function transformChatResponse(response: MoiResponseModel): ChatResponseModel {
	const transformedData = response.data
		.map((data) => {
			if (data.messageType === 'text') {
				return transformChatResponse.text(data);
			} else if (data.messageType === 'content') {
				return transformChatResponse.content(data);
			} else if (data.messageType === 'productSearchResult') {
				return transformChatResponse.productData(data);
			} else if (data.messageType === 'inspirationResult') {
				return transformChatResponse.inspirationResult(data);
			} else if (data.messageType === 'productAnswer') {
				return transformChatResponse.productAnswer(data);
			} else if (data.messageType === 'suggestedQuestions') {
				return transformChatResponse.suggestedQuestions(data);
			} else if (data.messageType === 'productComparison') {
				return transformChatResponse.productComparison(data);
			} else if (data.messageType === 'actions') {
				return transformChatResponse.actions(data);
			} else if (data.messageType === 'productRecommendation') {
				return transformChatResponse.productRecommendation(data);
			}
		})
		.filter((data) => data !== undefined);

	return {
		data: (transformedData || []) as ChatResponseModel['data'],
		context: response.context,
	};
}

transformChatResponse.text = (data: MoiResponseModelText): ChatResponseTextData => {
	// nothing to transform here yet
	return data;
};

transformChatResponse.content = (data: MoiResponseModelContent): ChatResponseContentData => {
	// nothing to transform here yet
	return data;
};

transformChatResponse.productData = (data: MoiResponseModelProductSearchResult): ChatResponseProductSearchResultData => {
	return {
		messageType: data.messageType,
		id: data.id,
		note: data.note,
		collectFeedback: data.collectFeedback,
		text: data.text,
		facets: data.facets,
		filtersApplied: data.filtersApplied || [],
		totalResultsFound: data.totalResultsFound,
		products: (Array.isArray(data.searchResult) ? data.searchResult : [data.searchResult]).map(mapProductToSearchResultProduct),
	};
};

transformChatResponse.inspirationResult = (data: MoiResponseModelInspirationResult): ChatResponseInspirationResultData => {
	return {
		messageType: data.messageType,
		id: data.id,
		note: data.note,
		collectFeedback: data.collectFeedback,
		text: data.text,
		topic: data.topic,
		products: (Array.isArray(data.searchResult) ? data.searchResult : [data.searchResult]).map(mapProductToSearchResultProduct),
	};
};

transformChatResponse.productAnswer = (data: MoiResponseModelProductAnswer): ChatResponseProductAnswerData => {
	return {
		messageType: data.messageType,
		id: data.id,
		note: data.note,
		collectFeedback: data.collectFeedback,
		text: data.text,
		product: mapProductToSearchResultProduct(data.product),
	};
};

transformChatResponse.suggestedQuestions = (data: MoiResponseModelSuggestedQuestions): ChatResponseSuggestedQuestionsData => {
	return {
		messageType: 'actions',
		actions: data.questions.map((question) => ({
			message: question,
			request: {
				requestType: 'general',
				message: question,
			},
		})),
	};
};

transformChatResponse.productComparison = (data: MoiResponseModelProductComparison): ChatResponseProductComparisonData => {
	return {
		messageType: data.messageType,
		id: data.id,
		note: data.note,
		collectFeedback: data.collectFeedback,
		text: data.text,
		products: (Array.isArray(data.searchResult) ? data.searchResult : [data.searchResult]).map(mapProductToSearchResultProduct),
	};
};

transformChatResponse.actions = (data: MoiResponseModelActions): ChatResponseActionsData => {
	return {
		messageType: data.messageType,
		actions: data.actions,
	};
};

transformChatResponse.productRecommendation = (data: MoiResponseModelProductRecommendation): ChatResponseProductRecommendationData => {
	return {
		messageType: data.messageType,
		id: data.id,
		collectFeedback: data.collectFeedback,
		text: data.text,
		note: data.note,
		product: mapProductToSearchResultProduct(data.product),
		products: data.products.map(mapProductToSearchResultProduct),
	};
};

const mapProductToSearchResultProduct = (product: MoiResponseModelSearchResult): SearchResponseModelResult => ({
	...product,
	mappings: {
		core: {
			uid: product.id,
			name: product.name,
			url: product.url,
			imageUrl: product.imageUrl,
			price: typeof product.price !== 'undefined' ? +product.price : undefined,
			msrp: typeof product.salePrice !== 'undefined' ? +product.salePrice : undefined,
			description: product.description,
		},
	},
	attributes: {
		currency: product.currency as any,
	},
});
