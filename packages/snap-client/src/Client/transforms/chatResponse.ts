import { SearchResponseModelResult } from '@athoscommerce/snapi-types';
import type {
	ChatResponseModel,
	ChatResponseTextData,
	ChatResponseContentData,
	ChatResponseTopicDriftData,
	ChatResponseProductSearchResultData,
	ChatResponseInspirationResultData,
	ChatResponseProductAnswerData,
	ChatResponseProductComparisonData,
	ChatResponseProductRecommendationData,
	ChatResponseErrorData,
	MoiResponseModel,
	MoiResponseModelContent,
	MoiResponseModelInspirationResult,
	MoiResponseModelProductAnswer,
	MoiResponseModelProductComparison,
	MoiResponseModelProductRecommendation,
	MoiResponseModelProductSearchResult,
	MoiResponseModelText,
	MoiResponseModelError,
	MoiResponseModelTopicDrift,
	RawResult,
} from '../../types';
import { SearchResponseType, transformSearchResponse } from './searchResponse';

export function transformChatResponse(response: MoiResponseModel): ChatResponseModel {
	const responseId = response.responseId || '';

	const transformedData = (response.data || [])
		.map((data) => {
			if (data.messageType === 'text') {
				return transformChatResponse.text(data);
			} else if (data.messageType === 'content') {
				return transformChatResponse.content(data);
			} else if (data.messageType === 'productSearchResult') {
				return transformChatResponse.productData(data, responseId);
			} else if (data.messageType === 'inspirationResult') {
				return transformChatResponse.inspirationResult(data, responseId);
			} else if (data.messageType === 'productAnswer') {
				return transformChatResponse.productAnswer(data, responseId);
			} else if (data.messageType === 'productComparison') {
				return transformChatResponse.productComparison(data, responseId);
			} else if (data.messageType === 'productRecommendation') {
				return transformChatResponse.productRecommendation(data, responseId);
			} else if (data.messageType === 'errorResponse') {
				return transformChatResponse.error(data);
			} else if (data.messageType === 'topicDrift') {
				return transformChatResponse.topicDrift(data);
			} else {
				// drop unknown messageTypes (forward compatibility)
				return undefined;
			}
		})
		.filter((data): data is ChatResponseModel['data'][number] => data !== undefined);

	// checked after the filter so a response with only dropped messageTypes still gets a reply
	if (transformedData.length === 0) {
		const unknownError: ChatResponseErrorData = {
			messageType: 'errorResponse',
			id: '',
			errorMessage: 'Something went wrong. Please try again.',
		};

		return {
			data: [unknownError],
			context: response.context,
		};
	}

	return {
		data: transformedData,
		context: response.context,
	};
}

transformChatResponse.text = (data: MoiResponseModelText): ChatResponseTextData => {
	return {
		messageType: data.messageType,
		id: data.id,
		text: data.text,
	};
};

transformChatResponse.content = (data: MoiResponseModelContent): ChatResponseContentData => {
	return {
		messageType: data.messageType,
		id: data.id,
		text: data.text,
	};
};

transformChatResponse.topicDrift = (data: MoiResponseModelTopicDrift): ChatResponseTopicDriftData => {
	return {
		messageType: data.messageType,
		id: data.id,
		driftType: data.driftType,
		messageForDrift: data.messageForDrift,
		recommendedAction: data.recommendedAction,
	};
};

transformChatResponse.productData = (data: MoiResponseModelProductSearchResult, responseId: string): ChatResponseProductSearchResultData => {
	return {
		// base
		messageType: data.messageType,
		id: data.id,

		// specific
		text: data.text,
		results: data.searchResult?.results?.map((product) => mapProductToSearchResultProduct(product, responseId)) || [],
		filterSummary: data.searchResult?.filterSummary || [],
	};
};

transformChatResponse.inspirationResult = (data: MoiResponseModelInspirationResult, responseId: string): ChatResponseInspirationResultData => {
	return {
		// base
		messageType: data.messageType,
		id: data.id,

		// specific
		overallSummary: data.overallSummary,
		inspirationSections: data.inspirationSections?.map((section) => ({
			filterSummary: section.filterSummary || [],
			clusterDescription: section.clusterDescription,
			clusterTitle: section.clusterTitle,
			products: section.products?.map((product) => mapProductToSearchResultProduct(product, responseId)) || [],
			searchQueries: section.searchQueries,
		})),
	};
};

transformChatResponse.productAnswer = (data: MoiResponseModelProductAnswer, responseId: string): ChatResponseProductAnswerData => {
	return {
		messageType: data.messageType,
		id: data.id,

		text: data.text,
		sourceProduct: mapProductToSearchResultProduct(data.sourceProduct, responseId),
	};
};

transformChatResponse.productComparison = (data: MoiResponseModelProductComparison, responseId: string): ChatResponseProductComparisonData => {
	const rawSearchResults = Array.isArray(data.searchResults) ? data.searchResults : [data.searchResults];

	// The backend keys comparisonData.values by the raw product `id`, but
	// mapProductToSearchResultProduct sets Result.id = product.uid. Remap the
	// keys to uid so the component's `feature.values[result.id]` lookup matches.
	const idToUid: Record<string, string> = {};
	rawSearchResults.forEach((product: any) => {
		if (product?.id && product?.uid) idToUid[product.id] = product.uid;
	});

	const comparisonData = {
		...data.comparisonData,
		features: data.comparisonData?.features?.map((feature) => ({
			...feature,
			values: Object.fromEntries(Object.entries(feature.values || {}).map(([key, value]) => [idToUid[key] ?? key, value])),
		})),
	};

	return {
		messageType: data.messageType,
		id: data.id,

		searchResults: rawSearchResults.map((product) => mapProductToSearchResultProduct(product, responseId)),
		comparisonData,
	};
};

transformChatResponse.productRecommendation = (
	data: MoiResponseModelProductRecommendation,
	responseId: string
): ChatResponseProductRecommendationData => {
	return {
		messageType: data.messageType,
		id: data.id,

		// already in result shape from the recommend API
		recommendationResult: data.recommendationResult?.map((rec) => ({
			...rec,
			results: rec.results?.map((product) => ({ ...product, responseId })) || [],
		})),
		sourceProduct: mapProductToSearchResultProduct(data.sourceProduct, responseId),
		text: data.text,
	};
};

transformChatResponse.error = (data: MoiResponseModelError): ChatResponseErrorData => {
	return {
		messageType: data.messageType,
		id: data.id,

		errorMessage: data.errorMessage,
	};
};

const mapProductToSearchResultProduct = (product: RawResult, responseId: string): SearchResponseModelResult => {
	return transformSearchResponse.result(product, { responseId } as SearchResponseType);
};
