import {
	SearchResponseModelResult,
	SearchResponseModelFacet,
	SearchResponseModelResultCoreMappings,
	SearchResponseModelFacetValueAllOfValues,
} from '@athoscommerce/snapi-types';
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
	MoiResponseModelError,
} from '../apis/Chat';
import { CORE_FIELDS, decodeProperty, RawResult, Result } from './searchResponse';

type BaseResponseProperties = {
	id: string;
	collectFeedback: boolean;
};

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
		| ChatResponseErrorData
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
	// actions: MoiResponseModelActions['actions'];
	actions: any;
};

export type ChatResponseActionsData = {
	messageType: 'actions';
	// actions: MoiResponseModelActions['actions'];
	actions: any;
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
			} else if (data.messageType === 'error_response') {
				return transformChatResponse.error(data);
			}
		})
		.filter((data) => data !== undefined);

	return {
		data: (transformedData || []) as ChatResponseModel['data'],
		context: response.context,
	};
}

// transformChatResponse.text = (data: MoiResponseModelText): ChatResponseTextData => {
transformChatResponse.text = (data: MoiResponseModelText): any => {
	// nothing to transform here yet
	return data;
};

// transformChatResponse.content = (data: MoiResponseModelContent): ChatResponseContentData => {
transformChatResponse.content = (data: MoiResponseModelContent): any => {
	// nothing to transform here yet
	return data;
};

export type ChatResponseProductSearchResultData = BaseResponseProperties & {
	messageType: 'productSearchResult';

	note?: string;

	text: string;
	results: SearchResponseModelResult[];
	facets: SearchResponseModelFacet[];
};
transformChatResponse.productData = (data: MoiResponseModelProductSearchResult): ChatResponseProductSearchResultData => {
	return {
		// base
		messageType: data.messageType,
		id: data.id,
		collectFeedback: data.collectFeedback,

		// optional
		note: data.note,

		// specific
		text: data.text,
		results: data.searchResult.results.map(mapProductToSearchResultProduct),
		facets: mapFacetToSearchResultFacets(data.searchResult),
	};
};

export type ChatResponseInspirationResultData = BaseResponseProperties & {
	messageType: 'inspirationResult';

	note?: string;

	overallSummary: string;
	inspirationSections: {
		clusterDescription: string;
		clusterTitle: string;
		products: SearchResponseModelResult[];
		searchQueries: string[];
	}[];
};
transformChatResponse.inspirationResult = (data: MoiResponseModelInspirationResult): ChatResponseInspirationResultData => {
	return {
		// base
		messageType: data.messageType,
		id: data.id,
		collectFeedback: data.collectFeedback,

		// optional
		note: data.note,

		// specific
		overallSummary: data.overallSummary,
		inspirationSections: data.inspirationSections?.map((section) => ({
			clusterDescription: section.clusterDescription,
			clusterTitle: section.clusterTitle,
			products: section.products.map(mapProductToSearchResultProduct),
			searchQueries: section.searchQueries,
		})),
	};
};

// transformChatResponse.productAnswer = (data: MoiResponseModelProductAnswer): ChatResponseProductAnswerData => {
transformChatResponse.productAnswer = (data: MoiResponseModelProductAnswer): any => {
	return data;
};

// transformChatResponse.suggestedQuestions = (data: MoiResponseModelSuggestedQuestions): ChatResponseSuggestedQuestionsData => {
transformChatResponse.suggestedQuestions = (data: MoiResponseModelSuggestedQuestions): any => {
	return data;
	// {
	// 	messageType: 'actions',
	// 	actions: data.questions.map((question) => ({
	// 		message: question,
	// 		request: {
	// 			requestType: 'general',
	// 			message: question,
	// 		},
	// 	})),
	// };
};

export type ChatResponseProductComparisonData = BaseResponseProperties & {
	messageType: 'productComparison';

	note?: string;

	searchResults: SearchResponseModelResult[];
	comparisonData: {
		features: {
			featureName: string;
			values: {
				[heading: string]: string;
			};
		}[];
		summary: string;
	};
};

transformChatResponse.productComparison = (data: MoiResponseModelProductComparison): ChatResponseProductComparisonData => {
	return {
		messageType: data.messageType,
		id: data.id,
		collectFeedback: data.collectFeedback,

		note: data.note,

		searchResults: (Array.isArray(data.searchResults) ? data.searchResults : [data.searchResults]).map(mapProductToSearchResultProduct),
		comparisonData: data.comparisonData,
	};
};

// transformChatResponse.actions = (data: MoiResponseModelActions): ChatResponseActionsData => {
transformChatResponse.actions = (data: MoiResponseModelActions): any => {
	return data;
	// {
	// 	messageType: data.messageType,
	// 	actions: data.actions,
	// };
};

export type ChatResponseProductRecommendationData = BaseResponseProperties & {
	messageType: 'productRecommendation';

	note?: string;

	recommendationResult: {
		results: SearchResponseModelResult[];
		profile: {
			name: string;
			tag: string;
			type: string;
			limit: number;
		};
	}[];
	sourceProduct: SearchResponseModelResult;
	text: string;
};

transformChatResponse.productRecommendation = (data: MoiResponseModelProductRecommendation): ChatResponseProductRecommendationData => {
	return {
		messageType: data.messageType,
		id: data.id,
		collectFeedback: data.collectFeedback,

		note: data.note,

		recommendationResult: data.recommendationResult,
		sourceProduct: mapProductToSearchResultProduct(data.sourceProduct),
		text: data.text,
	};
};

export type ChatResponseErrorData = BaseResponseProperties & {
	messageType: 'error_response';
	errorMessage: string;
};

transformChatResponse.error = (data: MoiResponseModelError): ChatResponseErrorData => {
	return {
		messageType: data.messageType,
		collectFeedback: data.collectFeedback ?? false,
		id: data.id,

		errorMessage: data.errorMessage,
	};
};

const mapProductToSearchResultProduct = (product: RawResult): SearchResponseModelResult => {
	const coreFieldValues: SearchResponseModelResultCoreMappings = CORE_FIELDS.reduce((coreFields, key) => {
		if (typeof product[key as keyof RawResult] != 'undefined') {
			return {
				...coreFields,
				[key]: decodeProperty(product[key as keyof RawResult] || ''),
			};
		}
		return coreFields;
	}, {});

	if (coreFieldValues.price) coreFieldValues.price = +coreFieldValues.price;
	if (coreFieldValues.msrp) coreFieldValues.msrp = +coreFieldValues.msrp;
	if (coreFieldValues.available?.toString() === 'true') {
		coreFieldValues.available = true;
	} else if (coreFieldValues.available?.toString() === 'false') {
		coreFieldValues.available = false;
	}
	const attributes = Object.keys(product)
		.filter((k) => CORE_FIELDS.indexOf(k) == -1)
		// remove 'badges' from attributes - but only if it is an object
		.filter((k) => !(k == 'badges' && Array.isArray(product[k]) && typeof product[k]?.[0] == 'object'))
		.filter((k) => !(k == 'variants'))
		.reduce((attributes, key) => {
			return {
				...attributes,
				[key]: decodeProperty(product[key as keyof RawResult] || ''),
			};
		}, {});

	return new Result({
		id: product.uid,
		responseId: '',
		mappings: {
			core: coreFieldValues,
		},
		attributes,
		// badges: Array.isArray(product.badges) && typeof product.badges[0] == 'object' ? product.badges : [],
		// variants: product.variants,
	});
};

const mapFacetToSearchResultFacets = (searchResult: MoiResponseModelSearchResult): SearchResponseModelFacet[] => {
	const facets = searchResult?.facets || [];
	const transformedFacets = facets.map((facet) => {
		const transformedFacet: any = {
			field: facet.field,
			type: 'value',
		};

		if (facet.values instanceof Array) {
			if (facet.type == 'hierarchy') {
				transformedFacet.type = 'value';
				transformedFacet.values = (facet.values || []).map((value): SearchResponseModelFacetValueAllOfValues => {
					return {
						filtered: Boolean(value.active),
						value: value.value,
						label: value.label,
						count: value.count,
					};
				});
			} else if (facet.values[0].type == 'value') {
				transformedFacet.type = 'value';
				transformedFacet.values = facet.values.map((value): SearchResponseModelFacetValueAllOfValues => {
					return {
						filtered: value.active,
						value: value.value,
						label: value.label,
						count: value.count,
					};
				});
			}
		}
		return transformedFacet;
	});
	return transformedFacets;
};
