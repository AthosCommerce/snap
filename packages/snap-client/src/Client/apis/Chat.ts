import { API } from './Abstract';
import { ClientGlobals, HTTPHeaders } from '../../types';
import { transformChatResponse } from '../transforms/chatResponse';
import { RawResult } from '../transforms/searchResponse';

/** Tracking values sent as query params on every chat backend request.
 * `sessionId` here is the tracker/browser session, not the chat session. */
export type ChatTrackingContext = {
	pageUrl: string;
	sessionId: string;
	pageLoadId: string;
	shopperId?: string;
	currency?: string;
};

export type ChatStatusRequestModel = {
	siteId: string;
	tracking: ChatTrackingContext;
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
	tracking: ChatTrackingContext;
};

export type ChatInitResponseModel = {
	chatSessionId: string;
	sessionEndTime: string;
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
	tracking: ChatTrackingContext & {
		userId: string;
	};
	personalization?: {
		shopper: string;
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
		options: ({ key: string } | { low: string; high: string })[];
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

// DISCRIMINATOR: "messageType" === text, productAnswer, productRecommendation, productComparison, productSearchResult, content, errorResponse, topicDrift, actions
export type MoiResponseModel = {
	responseId: string;
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
	messageType: 'topicDrift';
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

const trackingQuery = (t: ChatTrackingContext): Record<string, string> => {
	const q: Record<string, string> = {
		pageUrl: t.pageUrl,
		sessionId: t.sessionId,
		pageLoadId: t.pageLoadId,
	};
	if (t.shopperId) q.shopperId = t.shopperId;
	if (t.currency) q.currency = t.currency;
	return q;
};

export class ChatAPI extends API<any> {
	private handleError(err: any): never {
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
		const userId = requestParameters.personalization?.shopper || requestParameters.tracking.userId;

		try {
			const response = await this.request<MoiResponseModel>({
				path: '/v1/chat/send',
				method: 'POST',
				headers: JSON_HEADERS,
				query: {
					siteId: requestParameters.siteId,
					chatSessionId: requestParameters.context.sessionId || '',
					...(userId ? { userId } : {}),
					...trackingQuery(requestParameters.tracking),
				},
				body: requestParameters.data,
			});

			// some error conditions (e.g. session limit CS_003) are returned as a
			// 200 response with an errorCode body — surface as a thrown error so
			// the controller's existing error handling can react
			const errorBody = response as unknown as ChatBadRequestResponse & { errorCode?: string };
			if (errorBody?.errorCode) {
				throw {
					err: new Error(errorBody.errorMessage || 'Bad Request'),
					fetchDetails: { status: 200, message: 'OK' },
					responseBody: errorBody,
				};
			}

			return transformChatResponse(response);
		} catch (err: any) {
			this.handleError(err);
		}
	}

	async postStatus(queryParameters: ChatStatusRequestModel): Promise<ChatStatusResponse> {
		try {
			const response = await this.request<ChatStatusResponse>({
				path: '/v1/chat/status',
				method: 'GET',
				headers: { ...JSON_HEADERS },
				query: {
					siteId: queryParameters.siteId,
					...trackingQuery(queryParameters.tracking),
				},
			});

			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}

	async chatInit(queryParameters: ChatInitRequestModel): Promise<ChatInitResponseModel> {
		try {
			const response = await this.request<ChatInitResponseModel>({
				path: '/v1/chat/init',
				method: 'POST',
				headers: JSON_HEADERS,
				query: {
					siteId: queryParameters.siteId,
					...trackingQuery(queryParameters.tracking),
				},
				body: queryParameters,
			});

			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}

	async postUploadImage(requestParameters: UploadImageRequestModel & ClientGlobals): Promise<UploadImageResponseModel> {
		const extension = (requestParameters.image.type.split('/')[1] || 'jpg').split('+')[0];
		const formData = new FormData();
		formData.append('file', requestParameters.image, `image.${extension}`);

		try {
			const response = await this.request<UploadImageResponseModel>({
				path: '/v1/chat/upload-image',
				method: 'POST',
				headers: {},
				query: { siteId: requestParameters.siteId },
				body: formData,
			});
			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}
}
