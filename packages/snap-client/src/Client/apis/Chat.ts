import { API } from './Abstract';
import { ClientGlobals, HTTPHeaders } from '../../types';
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
		bgFilters?: Record<string, string>;
		landingPage?: string;
		tag?: string;
		includedFacets?: string;
		excludedFacets?: string;
		shopper?: string;
	};
};

export type ChatInitResponseModel = {
	chatSessionId: string;
};

export type UploadImageRequestModel = {
	image: Blob;
};

export type UploadImageResponseModel = {
	imageId: string;
	imageUrl: string;
	thumbnailUrl: string;
};

export type ChatRequestModel = {
	context: {
		sessionId?: string;
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
			disableReason?: {
				code: number;
				message: string;
			};
		};
		suggestedQuestions: string[];
		welcomeMessage: string;
	};
	features: {
		imageSearch: { enabled: boolean };
		similarProducts: { enabled: boolean };
	};
};

// DISCRIMINATOR: "requestType" === general, productQuery, productComparison, productSearch, inspiration, imageSearch, content, productSimilar
export type MoiRequestModel =
	| MoiRequestModelGeneral
	| MoiRequestModelProductQuery
	| MoiRequestModelProductSearch
	| MoiRequestModelProductComparison
	| MoiRequestModelImageSearch
	| MoiRequestModelProductSimilar
	| MoiRequestModelInspiration
	| MoiRequestModelContent;

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
	message?: string;
	searchTerm?: string;
	searchFilters?: {
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

export type MoiRequestModelContent = {
	requestType: 'content';
	message: string;
};

// DISCRIMINATOR: "messageType" === text, productAnswer, productRecommendation, productComparison, productSearchResult, content, errorResponse, topic_drift, actions
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
		| MoiResponseModelProductComparison
		| MoiResponseModelActions
		| MoiResponseModelProductRecommendation
		| MoiResponseModelTopicDrift
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
	text: string;
};

export type MoiResponseModelContent = BaseResponseProperties & {
	messageType: 'content';
	text: string;
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

export type MoiResponseModelTopicDrift = {
	messageType: 'topic_drift';
	id: string;
	driftType: 'SCOPE_DRIFT' | 'CATEGORY_DRIFT' | 'NO_DRIFT';
	messageForDrift: string;
	recommendedAction: 'SCOPE_REDIRECT' | 'CATEGORY_SWITCH_CONFIRM' | 'CONTINUE';
};

export type MoiResponseModelActions = {
	messageType: 'actions';
	actions: {
		message: string;
		request: MoiRequestModel;
	}[];
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
	messageType: 'errorResponse';
	errorMessage: string;
};

export type ChatBadRequestResponse = {
	errors: string[];
	errorMessage: string;
};

const JSON_HEADERS: HTTPHeaders = { 'Content-Type': 'application/json' };

export class ChatAPI extends API<any> {
	private handle400Error(err: any): never {
		if (err?.fetchDetails?.status === 400) {
			const body = err?.responseBody as ChatBadRequestResponse;
			throw {
				err: new Error(body?.errorMessage || 'Bad Request'),
				fetchDetails: err.fetchDetails,
				responseBody: err.responseBody,
			};
		}
		throw err;
	}

	async postMessage(requestParameters: ChatRequestModel & ClientGlobals): Promise<any> {
		if (requestParameters.siteId == 'ck4bj7') {
			// TODO: temporary - remove
			requestParameters.siteId = 'test-mattel-demo';
		}

		const userId = requestParameters.personalization?.shopper || requestParameters.tracking.userId;

		try {
			const response = await this.request<MoiResponseModel>({
				path: '/chat/send',
				method: 'POST',
				headers: JSON_HEADERS,
				query: {
					siteId: requestParameters.siteId,
					chatSessionId: requestParameters.context.sessionId || '',
					...(userId ? { userId } : {}),
				},
				body: requestParameters.data,
			});

			return transformChatResponse(response);
		} catch (err: any) {
			this.handle400Error(err);
		}
	}

	async postStatus(queryParameters: ChatStatusRequestModel): Promise<ChatStatusResponse> {
		try {
			const response = await this.request<ChatStatusResponse>(
				{
					path: '/chat/status',
					method: 'GET',
					headers: { ...JSON_HEADERS, 'x-site-id': queryParameters.siteId },
					query: queryParameters,
				},
				JSON.stringify(queryParameters)
			);

			return response;
		} catch (err: any) {
			this.handle400Error(err);
		}
	}

	async chatInit(queryParameters: ChatInitRequestModel): Promise<ChatInitResponseModel> {
		try {
			const response = await this.request<ChatInitResponseModel>({
				path: '/chat/init',
				method: 'POST',
				headers: JSON_HEADERS,
				query: { siteId: queryParameters.siteId },
				body: queryParameters,
			});

			return response;
		} catch (err: any) {
			this.handle400Error(err);
		}
	}

	async postFeedback(requestParameters: FeedbackRequestModel): Promise<any> {
		const response = await this.request<MoiResponseModel>({
			path: '/chat/feedback',
			method: 'POST',
			headers: JSON_HEADERS,
			body: requestParameters,
		});
		return response;
	}

	async postUploadImage(requestParameters: UploadImageRequestModel & ClientGlobals): Promise<UploadImageResponseModel> {
		const formData = new FormData();
		formData.append('file', requestParameters.image, 'image.jpg');

		if (requestParameters.siteId == 'ck4bj7') {
			// TODO: temporary - remove
			requestParameters.siteId = 'test-mattel-demo';
		}

		const response = await this.request<UploadImageResponseModel>({
			path: '/visual-search/upload-image',
			method: 'POST',
			headers: {},
			query: { siteId: requestParameters.siteId },
			body: formData,
		});

		return response;
	}
}
