import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { ChatRequestModel, FeedbackRequestModel, transformChatResponse } from '../transforms/chatResponse';

export type ChatInitRequestModel = {
	siteId: string;
	userId: string;
	languageCode: string;
	searchConfig: {
		sessionId: string;
		bgFilters?: {
			name: string;
			value: string;
		}[];
		landingPage?: string;
		tag?: string;
		includeFacets?: string;
		excludeFacets?: string;
		shopper?: string;
	};
};

export type ChatInitResponseModel = {
	chatSessionId: string;
};

export type UploadImageRequestModel = {
	context: {
		widgetId: string;
	};
	image: Blob;
};

export type UploadImageResponseModel = {
	success: boolean;
	message: string;
	error?: {
		errorCode: string;
		errorMessage: string;
		field: string;
		expectedValue: string;
		actualValue: string;
		httpStatus: number;
	};
	imageId: string;
	imageUrl: string;
	thumbnailUrl: string;
};

// DISCRIMINATOR: "requestType" === general, productQuery, productComparison, productSearch, inspiration, imageSearch, content
export type MoiRequestModel =
	| MoiRequestModelGeneral
	| MoiRequestModelProductQuery
	| MoiRequestModelProductSearch
	| MoiRequestModelProductComparison
	| MoiRequestModelImageSearch
	| MoiRequestModelProductSimilar;

export type MoiRequestModelGeneral = {
	requestType: 'general';
	message: string;
};

export type MoiRequestModelProductQuery = {
	requestType: 'productQuery';
	message: string;
	productId: string;
};

export type MoiRequestModelProductSearch = {
	requestType: 'productSearch';
	// message: string;
	searchFilters: {
		key: string;
		options: {
			key: string;
		}[];
	}[];
};

export type MoiRequestModelProductComparison = {
	requestType: 'productComparison';
	message: string;
	productIds: string[];
};

export type MoiRequestModelImageSearch = {
	requestType: 'imageSearch';
	message: string;
	attachedImageId: string;
};

export type MoiRequestModelProductSimilar = {
	requestType: 'productSimilar';
	message: string;
	productId: string;
};

// DISCRIMINATOR: "messageType" === text, productAnswer, productRecommendation, productComparison, productSearchResult, suggestedQuestions, content
export type MoiResponseModel = {
	context: {
		sessionId: string;
	};
	data: (
		| MoiResponseModelText
		| MoiResponseModelContent
		| MoiResponseModelProductSearchResult
		| MoiResponseModelInspirationResult
		| MoiResponseModelProductAnswer
		| MoiResponseModelSuggestedQuestions
		| MoiResponseModelProductComparison
		| MoiResponseModelActions
		| MoiResponseModelProductRecommendation
	)[];
};

export type MoiResponseModelText = {
	messageType: 'text';
	id: string;
	note: string;
	collectFeedback: true;
	text: string;
	explanation: string;
};

export type MoiResponseModelContent = {
	messageType: 'content';
	id: string;
	note: string;
	collectFeedback: true;
	text: string;
};

export type MoiResponseModelProductSearchResult = {
	messageType: 'productSearchResult';
	id: string;
	note: string;
	text: string;
	filtersApplied: unknown[]; // TODO: type this
	totalResultsFound: number;
	collectFeedback: boolean;
	facets: {
		key: string;
		label: string;
		options: {
			key: string;
			label: string;
			count: number;
		}[];
	}[];
	searchResult: MoiResponseModelSearchResult[];
};

export type MoiResponseModelInspirationResult = {
	messageType: 'inspirationResult';
	id: string;
	note: string;
	text: string;
	collectFeedback: boolean;
	topic: string;
	searchResult: MoiResponseModelSearchResult[];
};

export type MoiResponseModelProductAnswer = {
	messageType: 'productAnswer';
	id: string;
	note: string;
	text: string;
	collectFeedback: boolean;
	product: MoiResponseModelSearchResult;
};

export type MoiResponseModelSuggestedQuestions = {
	messageType: 'suggestedQuestions';
	questions: string[];
};
export type MoiResponseModelProductComparison = {
	messageType: 'productComparison';
	id: string;
	note: string;
	text: string;
	collectFeedback: boolean;
	searchResult: MoiResponseModelSearchResult[];
};

export type MoiResponseModelSearchResult = {
	[key: string]: any;
};

export type MoiResponseModelActions = {
	messageType: 'actions';
	id: string;
	actions: {
		message: string;
		request: MoiRequestModelGeneral;
	}[];
};

export type MoiResponseModelProductRecommendation = {
	messageType: 'productRecommendation';
	id: string;
	note: string;
	text: string;
	collectFeedback: boolean;
	product: MoiResponseModelSearchResult;
	products: MoiResponseModelSearchResult[];
};

export class ChatAPI extends API<any> {
	async postMessage(requestParameters: ChatRequestModel): Promise<any> {
		const headerParameters: HTTPHeaders = {
			'Content-Type': 'application/json',
			'x-visitor-id': requestParameters.personalization?.shopper || requestParameters.tracking.userId,
			'x-pqa-widget-id': requestParameters.context.widgetId,
		};

		if (requestParameters.context.sessionId) {
			headerParameters['x-session-id'] = requestParameters.context.sessionId;
		}

		const response = await this.request<MoiResponseModel>({
			path: '/chat/v2/send',
			method: 'POST',
			headers: headerParameters,
			body: requestParameters.data,
		});

		// transfrorm respose to Snapi types
		return transformChatResponse(response);
	}

	async postStatus(queryParameters: any): Promise<any> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<any>(
			{
				path: '/chat/status',
				method: 'GET',
				headers: headerParameters,
				query: queryParameters,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}

	async chatInit(queryParameters: ChatInitRequestModel): Promise<ChatInitResponseModel> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';
		headerParameters['x-site-id'] = queryParameters.siteId;

		const response = await this.request<ChatInitResponseModel>({
			path: '/chat/init',
			method: 'POST',
			headers: headerParameters,
			body: queryParameters,
		});

		return response;
	}

	async postFeedback(requestParameters: FeedbackRequestModel): Promise<any> {
		const headerParameters: HTTPHeaders = {
			'Content-Type': 'application/json',
		};

		const response = await this.request<MoiResponseModel>({
			path: '/chat/feedback',
			method: 'POST',
			headers: headerParameters,
			body: requestParameters,
		});
		return response;
	}

	async postUploadImage(requestParameters: UploadImageRequestModel): Promise<UploadImageResponseModel> {
		const headerParameters: HTTPHeaders = {
			'X-Widget-Id': requestParameters.context.widgetId,
		};
		const formData = new FormData();
		formData.append('file', requestParameters.image, 'image.jpg');

		const response = await this.request<UploadImageResponseModel>(
			{
				path: '/visual-search/upload-image',
				method: 'POST',
				headers: headerParameters,
				body: formData,
			}
			// TODO: cache?
		);

		return response;
	}
}
