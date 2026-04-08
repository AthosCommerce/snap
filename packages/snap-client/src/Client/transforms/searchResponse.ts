import { unescapeHTML } from '@athoscommerce/snap-toolbox';

import {
	SearchRequestModel,
	SearchRequestModelFilterValue,
	SearchResponseModelResult,
	SearchResponseModelResultCoreMappings,
	SearchResponseModelPagination,
	SearchResponseModelSearchMatchTypeEnum,
	SearchResponseModelMerchandising,
	SearchResponseModelResultBadges,
	SearchResponseModelResultVariants,
	AutocompleteRequestModel,
	SearchResponseModel,
	SearchResponseModelFilter,
	SearchResponseModelFilterTypeEnum,
	SearchResponseModelFacet,
	SearchResponseModelFacetValueAllOfValues,
	SearchResponseModelFacetRangeBucketsAllOfValues,
	SearchResponseModelSorting,
	SearchResponseModelSortingDirectionEnum,
	SearchResponseModelSearch,
	SearchResponseModelTracking,
} from '@athoscommerce/snapi-types';

export const CORE_FIELDS = [
	'uid',
	'sku',
	'available',
	'name',
	'url',
	'addToCartUrl',
	'parentId',
	'parentImageUrl',
	'price',
	'msrp',
	'imageUrl',
	'secureImageUrl',
	'thumbnailImageUrl',
	'secureThumbnailImageUrl',
	'rating',
	'ratingCount',
	'description',
	'stockMessage',
	'brand',
	'popularity',
	'caption',
];

type SortingOption = {
	field: string;
	direction: string;
	label: string;
	active?: number;
};

export type RawResult = {
	available: string;
	badges?: SearchResponseModelResultBadges[];
	variants?: SearchResponseModelResultVariants;
	brand?: string;
	collection_handle?: string[];
	collection_id?: string[];
	handle?: string;
	id: string;
	imageUrl: string;
	intellisuggestData?: string;
	intellisuggestSignature?: string;
	msrp?: string;
	name: string;
	parentId: string;
	parentImageUrl: string;
	price: string;
	product_type?: string[];
	product_type_unigram?: string;
	sku: string;
	ss_available?: string;
	ss_best_selling?: string;
	ss_days_since_published?: string;
	ss_id?: string;
	ss_image_hover?: string;
	ss_images?: string[];
	ss_inventory_count?: string;
	ss_tags?: string[];
	thumbnailImageUrl?: string;
	uid?: string;
	url?: string;
	children?: [];
};

type FacetValue = {
	active: boolean;
	type: string;
	value: string;
	label: string;
	count: number;
	low?: string | number;
	high?: string | number;
};

type Facet = {
	hierarchyDelimiter?: string;
	multiple?: string;
	active?: any;
	count?: number;
	high?: string;
	low?: string;
	field: string;
	label: string;
	type: null | string;
	collapse: number;
	facet_active: number;
	values: FacetValue[];
	step?: number;
	filtered?: boolean;
	range?: string[];
};

type Breadcrumb = {
	field: string;
	label: string;
	filterLabel: string;
	filterValue: string;
	removeFilters: [];
	removeRefineQuery: [];
};

export type SearchResponseType = {
	responseId: string;
	pagination: {
		totalResults: number;
		begin: number;
		end: number;
		currentPage: number;
		totalPages: number;
		previousPage: number;
		nextPage: number;
		perPage: number;
		defaultPerPage: number;
	};
	sorting: {
		options: SortingOption[];
	};
	resultLayout?: string;
	results: RawResult[];
	facets: Facet[];
	breadcrumbs?: Breadcrumb[];
	filterSummary: {
		field: string;
		filterLabel: string;
		filterValue: string;
		label: string;
		value: { rangeHigh?: string | number; rangeLow?: string | number; low?: string | number; high?: string | number } | string;
	}[];
	merchandising: {
		redirect: string;
		is_elevated: string[];
		elevated: any[];
		removed: string[];
		content: object;
		facets: any[];
		facetsHide: any[];
		experiments?: any[];
		variants?: [];
		personalized?: boolean;
		triggeredCampaigns?: {
			id: string;
			title: string;
			type: string;
		}[];
	};
	didYouMean?: {
		query: string;
	};
	query?: {
		matchType?: SearchResponseModelSearchMatchTypeEnum;
		corrected?: string;
		original?: string;
	};
};

export class Result implements SearchResponseModelResult {
	constructor(result: SearchResponseModelResult & { responseId: string }) {
		Object.assign(this, result);
	}
}

export function transformSearchResponse(response: SearchResponseType, request: SearchRequestModel | AutocompleteRequestModel): SearchResponseModel {
	return {
		pagination: transformSearchResponse.pagination(response),
		results: transformSearchResponse.results(response),
		filters: transformSearchResponse.filters(response),
		facets: transformSearchResponse.facets(response, request),
		sorting: transformSearchResponse.sorting(response),
		merchandising: transformSearchResponse.merchandising(response),
		search: transformSearchResponse.search(response, request),
		tracking: transformSearchResponse.tracking(response),
	};
}

transformSearchResponse.pagination = (response: SearchResponseType): SearchResponseModelPagination => {
	const pagination = response?.pagination;

	return {
		totalResults: pagination?.totalResults,
		page: pagination?.currentPage,
		pageSize: pagination?.perPage,
		totalPages: pagination?.totalPages,
	};
};

transformSearchResponse.results = (response: SearchResponseType): SearchResponseModelResult[] => {
	const results = response?.results || [];

	return results.map((result) => {
		return transformSearchResponse.result(result, response);
	});
};

transformSearchResponse.result = (rawResult: RawResult, response: SearchResponseType): SearchResponseModelResult => {
	const coreFieldValues: SearchResponseModelResultCoreMappings = CORE_FIELDS.reduce((coreFields, key) => {
		if (typeof rawResult[key as keyof RawResult] != 'undefined') {
			return {
				...coreFields,
				[key]: decodeProperty(rawResult[key as keyof RawResult] || ''),
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
	const attributes = Object.keys(rawResult)
		.filter((k) => CORE_FIELDS.indexOf(k) == -1)
		// remove 'badges' from attributes - but only if it is an object
		.filter((k) => !(k == 'badges' && Array.isArray(rawResult[k]) && typeof rawResult[k]?.[0] == 'object'))
		.filter((k) => !(k == 'variants'))
		.reduce((attributes, key) => {
			return {
				...attributes,
				[key]: decodeProperty(rawResult[key as keyof RawResult] || ''),
			};
		}, {});

	return new Result({
		id: rawResult.uid,
		responseId: response.responseId,
		mappings: {
			core: coreFieldValues,
		},
		attributes,
		badges: Array.isArray(rawResult.badges) && typeof rawResult.badges[0] == 'object' ? rawResult.badges : [],
		variants: rawResult.variants,
	});
};

transformSearchResponse.filters = (response: SearchResponseType): SearchResponseModelFilter[] => {
	const filterSummary = response?.filterSummary || [];

	return filterSummary.map((filter) => {
		let value = filter.value;
		let type = 'value';

		if (typeof filter.value == 'object') {
			if (filter && filter.value && filter.value.rangeHigh != null && filter.value.rangeLow != null) {
				(type = 'range'),
					(value = {
						low: +filter.value.rangeLow,
						high: +filter.value.rangeHigh,
					});
			}
		}

		return {
			type: type as SearchResponseModelFilterTypeEnum,
			field: filter.field,
			label: filter.filterValue,
			value,
		};
	});
};

transformSearchResponse.facets = (
	response: SearchResponseType,
	request: SearchRequestModel | AutocompleteRequestModel = {}
): SearchResponseModelFacet[] => {
	const filters = request.filters || [];
	const facets = response?.facets || [];
	const limit = request?.facets?.limit;
	const valueLimit = request?.facets?.valueLimit;

	let transformedFacets = facets.map((facet) => {
		let transformedFacet: any = {
			field: facet.field,
			type: 'value',
			filtered: Boolean(facet.facet_active),
		};

		if (facet.step) {
			if (facet.range) {
				transformedFacet = {
					...transformedFacet,
					type: 'range',
					step: facet.step,
					range: {
						low: facet.range[0] == '*' ? undefined : +facet.range[0],
						high: facet.range[1] == '*' ? undefined : +facet.range[1],
					},
				};
			}
			if (facet.active && typeof facet.active != 'boolean' && facet.active.length > 1) {
				transformedFacet.active = {
					low: facet.active[0] == '*' ? undefined : +facet.active[0],
					high: facet.active[1] == '*' ? undefined : +facet.active[1],
				};
			}
		} else if (facet.values instanceof Array) {
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

				const filterSelected: SearchRequestModelFilterValue | undefined = filters.find((f: any) => f.field == facet.field);

				const newValues = [];
				if (filterSelected && !filterSelected.background) {
					const valueLevels = filterSelected.value?.split(facet.hierarchyDelimiter || '>');

					if (valueLevels) {
						for (let i = valueLevels.length - 1; i >= 0; i--) {
							const valueSplit = valueLevels.slice(0, i + 1);
							const value = valueSplit.join(facet.hierarchyDelimiter);
							newValues.unshift({
								value,
								filtered: value == (filterSelected as SearchRequestModelFilterValue).value,
								label: valueSplit[valueSplit.length - 1],
							});
						}
					}

					newValues.unshift({
						value: undefined,
						filtered: false,
						label: 'View All',
					});
				}

				transformedFacet.values = newValues.concat(transformedFacet.values);
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
			} else if (facet.values[0].type == 'range') {
				transformedFacet.type = 'range-buckets';
				transformedFacet.values = facet.values.map((value): SearchResponseModelFacetRangeBucketsAllOfValues => {
					return {
						filtered: value.active,
						low: value.low == '*' ? undefined : value.low != null ? +value.low : undefined,
						high: value.high == '*' ? undefined : value.high != null ? +value.high : undefined,
						label: value.label,
						count: value.count,
					};
				});
			}
		}

		return transformedFacet;
	});

	// limit facets based on request
	if (limit) {
		transformedFacets = transformedFacets.slice(0, limit);
	}

	// limit facet values based on request
	if (valueLimit) {
		transformedFacets = transformedFacets.map((facet) => {
			if (facet.values) {
				facet.values = facet.values.slice(0, valueLimit);
			}
			return facet;
		});
	}

	return transformedFacets;
};

transformSearchResponse.sorting = (response: SearchResponseType): SearchResponseModelSorting[] => {
	const sorts = response?.sorting?.options || [];
	return sorts
		.filter((sort) => sort.active)
		.map((sort) => {
			return {
				field: sort.field,
				direction: sort.direction as SearchResponseModelSortingDirectionEnum,
			};
		});
};

transformSearchResponse.merchandising = (response: SearchResponseType): SearchResponseModelMerchandising => {
	const merchandising = response?.merchandising;

	if (merchandising?.content && Array.isArray(merchandising.content) && !merchandising.content.length) {
		merchandising.content = {};
	}

	return {
		redirect: merchandising?.redirect || '',
		content: merchandising?.content || {},
		campaigns: merchandising?.triggeredCampaigns || [],
		personalized: merchandising?.personalized,
		experiments: merchandising?.experiments || [],
	};
};

transformSearchResponse.search = (
	response: SearchResponseType,
	request: SearchRequestModel | AutocompleteRequestModel
): SearchResponseModelSearch => {
	const searchObj: {
		query?: string;
		didYouMean?: string;
		matchType?: SearchResponseModelSearchMatchTypeEnum;
		originalQuery?: string;
	} = {
		query: request?.search?.query?.string,
		didYouMean: response?.didYouMean?.query,
		matchType: response?.query?.matchType,
	};

	if (response?.query?.corrected && response?.query.original) {
		// integrated spell correction is enabled
		searchObj.query = response?.query?.corrected;
		searchObj.originalQuery = response?.query?.original;
	}

	return searchObj;
};

transformSearchResponse.tracking = (response: SearchResponseType): SearchResponseModelTracking => {
	return {
		responseId: response.responseId,
	};
};

// used for HTML entities decoding
export function decodeProperty(encoded: string | string[] | SearchResponseModelResultBadges[] | SearchResponseModelResultVariants) {
	if (Array.isArray(encoded)) {
		return encoded.map((item) => {
			if (typeof item === 'string') {
				return unescapeHTML(String(item));
			}
			return item;
		});
	} else {
		if (typeof encoded === 'string') {
			return unescapeHTML(encoded);
		}
		return unescapeHTML(JSON.stringify(encoded));
	}
}
