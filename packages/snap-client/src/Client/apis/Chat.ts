import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { transformChatResponse } from '../transforms/chatResponse';
import { RawResult } from '../transforms/searchResponse';

export type ChatStatusRequestModel = {
	siteId: string;
};

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

export type ChatStatusResponse = {
	chatbot: {
		status: {
			enabled: boolean;
		};
		suggestedQuestions: string[];
		welcomeMessage: string;
	};
	features: {
		imageSearch: { enabled: boolean };
		similarProducts: { enabled: boolean };
	};
};

// DISCRIMINATOR: "requestType" === general, productQuery, productComparison, productSearch, inspiration, imageSearch, content
export type MoiRequestModel =
	| MoiRequestModelGeneral
	| MoiRequestModelProductQuery
	| MoiRequestModelProductSearch
	| MoiRequestModelProductComparison
	| MoiRequestModelImageSearch
	| MoiRequestModelProductSimilar
	| MoiRequestModelInspiration;

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

export type MoiRequestModelInspiration = {
	requestType: 'inspiration';
	message: string;
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
		| MoiResponseModelError
	)[];
};

type BaseResponseProperties = {
	id: string;
	collectFeedback: boolean;
};

export type MoiResponseModelSearchResult = {
	results: RawResult[];
	pagination: {
		totalResults: number;
	};
	facets: {
		field: string;
		label: string;
		type: string;
		multiple: string;
		values: {
			value: string;
			type: string;
			label: string;
			count: number;
			active: boolean;
		}[];
	}[];
	sorting: {
		options: {
			field: string;
			direction: string;
			label: string;
		}[];
	};
	filterSummary: {
		field: string;
		value: any;
		label: string;
		filterLabel: string;
		filterValue: string;
	}[];
};

export type MoiResponseModelText = BaseResponseProperties & {
	messageType: 'text';
	explanation: string;
};

export type MoiResponseModelContent = BaseResponseProperties & {
	messageType: 'content';
};

export type MoiResponseModelProductSearchResult = BaseResponseProperties & {
	messageType: 'productSearchResult';
	text: string;
	searchResult: MoiResponseModelSearchResult;
	note?: string;
};

export type MoiResponseModelInspirationResult = BaseResponseProperties & {
	messageType: 'inspirationResult';
	overallSummary: string;
	inspirationSections: {
		clusterTitle: string;
		clusterDescription: string;
		searchQueries: string[];
		products: RawResult[];
	}[];
	note?: string;
};

export type MoiResponseModelProductAnswer = BaseResponseProperties & {
	messageType: 'productAnswer';
	note: string;
	text: string;
	sourceProduct: RawResult;
};

export type MoiResponseModelSuggestedQuestions = BaseResponseProperties & {
	messageType: 'suggestedQuestions';
	// questions: string[];
};
export type MoiResponseModelProductComparison = BaseResponseProperties & {
	messageType: 'productComparison';

	searchResults: RawResult[];
	comparisonData: {
		features: {
			featureName: string;
			values: {
				[heading: string]: string;
			};
		}[];
		summary: string;
	};

	note?: string;
};

export type MoiResponseModelActions = BaseResponseProperties & {
	messageType: 'actions';
	// actions: {
	// 	message: string;
	// 	request: MoiRequestModelGeneral;
	// }[];
};

export type MoiResponseModelProductRecommendation = BaseResponseProperties & {
	messageType: 'productRecommendation';
	recommendationResult: {
		results: RawResult[];
		profile: {
			name: string;
			tag: string;
			type: string;
			limit: number;
		};
	}[];
	sourceProduct: RawResult;
	text: string;
	note?: string;
};

export type MoiResponseModelError = BaseResponseProperties & {
	messageType: 'error_response';
	errorMessage: string;
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

	async postStatus(queryParameters: ChatStatusRequestModel): Promise<ChatStatusResponse> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';
		headerParameters['x-site-id'] = queryParameters.siteId;

		const response = await this.request<ChatStatusResponse>(
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
