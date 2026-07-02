import {
	SearchResponseModelResult,
	SearchResponseModelFacet,
	SearchResponseModelResultCoreMappings,
	SearchResponseModelFacetValueAllOfValues,
	SearchResponseModelFacetRangeBucketsAllOfValues,
	SearchRequestModelFilterRangeAllOfValue,
} from '@athoscommerce/snapi-types';
import type {
	MoiResponseModel,
	MoiResponseModelActions,
	MoiResponseModelContent,
	MoiResponseModelInspirationResult,
	MoiResponseModelSearchResult,
	MoiResponseModelProductAnswer,
	MoiResponseModelProductComparison,
	MoiResponseModelProductRecommendation,
	MoiResponseModelProductSearchResult,
	MoiResponseModelText,
	MoiResponseModelError,
	MoiResponseModelTopicDrift,
} from '../apis/Chat';
import { CORE_FIELDS, decodeProperty, RawResult, Result } from './searchResponse';

type BaseResponseProperties = {
	id: string;
};

export type ChatResponseModel = {
	data: (
		| ChatResponseTextData
		| ChatResponseContentData
		| ChatResponseActionsData
		| ChatResponseProductSearchResultData
		| ChatResponseInspirationResultData
		| ChatResponseProductAnswerData
		| ChatResponseProductComparisonData
		| ChatResponseProductRecommendationData
		| ChatResponseErrorData
	)[];
	context: {
		sessionId: string;
	};
};

export function transformChatResponse(response: MoiResponseModel): ChatResponseModel {
	const unknownError: ChatResponseErrorData = {
		messageType: 'errorResponse',
		id: '',
		errorMessage: 'An unknown error has occurred',
	};

	if (!response.data || response.data.length === 0) {
		return {
			data: [unknownError],
			context: response.context,
		};
	}

	const responseId = response.responseId || '';

	const transformedData = response.data
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
			} else if (data.messageType === 'actions') {
				return transformChatResponse.actions(data);
			} else if (data.messageType === 'productRecommendation') {
				return transformChatResponse.productRecommendation(data, responseId);
			} else if (data.messageType === 'errorResponse') {
				return transformChatResponse.error(data);
			} else if (data.messageType === 'topicDrift') {
				return transformChatResponse.topicDrift(data);
			} else {
				// unknown messageTypes
				return unknownError;
			}
		})
		.filter((data) => data !== undefined);

	return {
		data: (transformedData || []) as ChatResponseModel['data'],
		context: response.context,
	};
}

export type ChatResponseTextData = {
	messageType: 'text';
	id: string;
	text: string;
};

transformChatResponse.text = (data: MoiResponseModelText): ChatResponseTextData => {
	return data;
};

export type ChatResponseContentData = {
	messageType: 'content';
	id: string;
	text: string;
};

transformChatResponse.content = (data: MoiResponseModelContent): ChatResponseContentData => {
	return data;
};

export type ChatResponseTopicDriftData = {
	messageType: 'topicDrift';
	id: string;
	driftType: 'SCOPE_DRIFT' | 'CATEGORY_DRIFT' | 'NO_DRIFT';
	messageForDrift: string;
	recommendedAction: 'SCOPE_REDIRECT' | 'CATEGORY_SWITCH_CONFIRM' | 'CONTINUE';
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

export type ChatResponseActionsData = {
	messageType: 'actions';
	actions: MoiResponseModelActions['actions']; // no change
};
transformChatResponse.actions = (data: MoiResponseModelActions): ChatResponseActionsData => {
	return {
		messageType: data.messageType,
		actions: data.actions,
	};
};

export type ChatResponseProductSearchResultData = BaseResponseProperties & {
	messageType: 'productSearchResult';
	text: string;
	results: SearchResponseModelResult[];
	facets: SearchResponseModelFacet[];
	filterSummary: { field: string; value: string; label?: string; filterLabel?: string; filterValue?: string }[];
};
transformChatResponse.productData = (data: MoiResponseModelProductSearchResult, responseId: string): ChatResponseProductSearchResultData => {
	return {
		// base
		messageType: data.messageType,
		id: data.id,

		// specific
		text: data.text,
		results: data.searchResult?.results?.map((product) => mapProductToSearchResultProduct(product, responseId)) || [],
		facets: mapFacetToSearchResultFacets(data.searchResult),
		filterSummary: ((data.searchResult as any)?.filterSummary || []) as ChatResponseProductSearchResultData['filterSummary'],
	};
};

export type ChatResponseInspirationResultData = BaseResponseProperties & {
	messageType: 'inspirationResult';
	overallSummary: string;
	inspirationSections: {
		filterSummary: ChatResponseProductSearchResultData['filterSummary'];
		clusterDescription: string;
		clusterTitle: string;
		products: SearchResponseModelResult[];
		searchQueries: string[];
	}[];
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

export type ChatResponseProductAnswerData = BaseResponseProperties & {
	messageType: 'productAnswer';
	text: string;
	sourceProduct: SearchResponseModelResult;
};
transformChatResponse.productAnswer = (data: MoiResponseModelProductAnswer, responseId: string): ChatResponseProductAnswerData => {
	return {
		messageType: data.messageType,
		id: data.id,

		text: data.text,
		sourceProduct: mapProductToSearchResultProduct(data.sourceProduct, responseId),
	};
};

export type ChatResponseProductComparisonData = BaseResponseProperties & {
	messageType: 'productComparison';
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

export type ChatResponseProductRecommendationData = BaseResponseProperties & {
	messageType: 'productRecommendation';
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
transformChatResponse.productRecommendation = (
	data: MoiResponseModelProductRecommendation,
	responseId: string
): ChatResponseProductRecommendationData => {
	return {
		messageType: data.messageType,
		id: data.id,

		recommendationResult: data.recommendationResult?.map((rec) => ({
			...rec,
			results: rec.results?.map((result) => ({ ...result, responseId })) as SearchResponseModelResult[],
		})),
		sourceProduct: mapProductToSearchResultProduct(data.sourceProduct, responseId),
		text: data.text,
	};
};

export type ChatResponseErrorData = BaseResponseProperties & {
	messageType: 'errorResponse';
	errorMessage: string;
};
transformChatResponse.error = (data: MoiResponseModelError): ChatResponseErrorData => {
	return {
		messageType: data.messageType,
		id: data.id,

		errorMessage: data.errorMessage,
	};
};

const mapProductToSearchResultProduct = (product: RawResult, responseId: string): SearchResponseModelResult => {
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
		responseId,
		mappings: {
			core: coreFieldValues,
		},
		attributes,
		badges: Array.isArray(product.badges) && typeof product.badges[0] == 'object' ? product.badges : [],
		variants: product.variants,
	});
};

/** Derive overall low/high bounds from a list of range buckets. Treats `*` and missing
 * values as open ends — used to seed slider range/active from bucket data. */
const bucketBounds = (values: any[]): { low: number | undefined; high: number | undefined } => {
	let low: number | undefined;
	let high: number | undefined;
	values.forEach((v) => {
		if (v.low != null && v.low !== '*') {
			const n = +v.low;
			if (!Number.isNaN(n)) low = low === undefined ? n : Math.min(low, n);
		}
		if (v.high != null && v.high !== '*') {
			const n = +v.high;
			if (!Number.isNaN(n)) high = high === undefined ? n : Math.max(high, n);
		}
	});
	return { low, high };
};

/** Parse a slider's range/active payload — the upstream sends arrays `[low, high]`
 * (sometimes nullable) but other shapes appear elsewhere as `{ low, high }`. */
const parseRangeBounds = (value: any): { low: number | undefined; high: number | undefined } | null => {
	if (value == null) return null;
	const toNum = (v: any): number | undefined => {
		if (v == null || v === '*') return undefined;
		const n = Number(v);
		return Number.isNaN(n) ? undefined : n;
	};
	if (Array.isArray(value)) {
		return { low: toNum(value[0]), high: toNum(value[1]) };
	}
	if (typeof value === 'object') {
		return { low: toNum(value.low), high: toNum(value.high) };
	}
	return null;
};

const mapFacetToSearchResultFacets = (searchResult: MoiResponseModelSearchResult): SearchResponseModelFacet[] => {
	const facets = searchResult?.facets || [];
	const transformedFacets = facets.map((facet) => {
		const transformedFacet: any = {
			field: facet.field,
			label: facet.label,
			type: 'value',
		};

		// Continuous slider (e.g. price) — upstream sends `type: 'slider'` with
		// `range`/`active` as `[low, high]` tuples and an empty `values` array.
		if (facet.type === 'slider' || facet.type === 'range') {
			const range = parseRangeBounds((facet as any).range);
			const active = parseRangeBounds((facet as any).active) || range;
			const rangeLow = range?.low;
			const rangeHigh = range?.high;
			// Only emit a slider when bounds are usable — otherwise fall through
			// so empty/degenerate sliders don't produce empty dropdowns.
			if (rangeLow != null && rangeHigh != null) {
				transformedFacet.type = 'range';
				const rangeOut: SearchRequestModelFilterRangeAllOfValue = { low: rangeLow, high: rangeHigh };
				const activeOut: SearchRequestModelFilterRangeAllOfValue = {
					low: active?.low ?? rangeLow,
					high: active?.high ?? rangeHigh,
				};
				transformedFacet.range = rangeOut;
				transformedFacet.active = activeOut;
				transformedFacet.step = (facet as any).step ?? 1;
				transformedFacet.filtered = activeOut.low !== rangeOut.low || activeOut.high !== rangeOut.high;
				return transformedFacet;
			}
		}

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
			} else if (facet.values.length && facet.values[0].type == 'range') {
				// Discrete range buckets — when no slider data was provided upstream,
				// `price` synthesizes a slider from the bucket bounds; everything else
				// renders as range-buckets.
				if (facet.field === 'price') {
					transformedFacet.type = 'range';
					const { low: rangeLow, high: rangeHigh } = bucketBounds(facet.values);
					const activeBuckets = facet.values.filter((v: any) => v.active);
					const { low: activeLow, high: activeHigh } = activeBuckets.length ? bucketBounds(activeBuckets) : { low: rangeLow, high: rangeHigh };
					const range: SearchRequestModelFilterRangeAllOfValue = { low: rangeLow, high: rangeHigh };
					const active: SearchRequestModelFilterRangeAllOfValue = { low: activeLow, high: activeHigh };
					transformedFacet.range = range;
					transformedFacet.active = active;
					transformedFacet.step = 1;
					transformedFacet.filtered = activeBuckets.length > 0;
				} else {
					transformedFacet.type = 'range-buckets';
					transformedFacet.values = facet.values.map((value: any): SearchResponseModelFacetRangeBucketsAllOfValues => {
						return {
							filtered: value.active,
							low: value.low == '*' ? undefined : value.low != null ? +value.low : undefined,
							high: value.high == '*' ? undefined : value.high != null ? +value.high : undefined,
							label: value.label,
							count: value.count,
						};
					});
				}
			} else if (facet.values.length) {
				// Default to value rendering for `list`, `palette`, and any other
				// type whose values are individual selectable options.
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
