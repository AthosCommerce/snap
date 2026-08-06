import { AppMode } from '@athoscommerce/snap-toolbox';
import type {
	MetaRequestModel,
	SearchResponseModelResult,
	SearchRequestModel,
	MetaResponseModel,
	SearchResponseModelResultCoreMappings,
	SearchResponseModelResultVariants,
	SearchResponseModelResultBadges,
	SearchResponseModelFacet,
} from '@athoscommerce/snapi-types';

export type HTTPHeaders = { [key: string]: string };

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

export type SearchRequesterPaths = {
	autocomplete?: string;
	search?: string;
	category?: string;
	finder?: string;
	products?: string;
};

export type ProductsRequestModel = {
	parentId: string;
	siteId?: string;
};

export type ProductsResponseModel = {
	mappings: {
		core: SearchResponseModelResultCoreMappings;
	};
	variants: SearchResponseModelResultVariants;
};

export type MetaRequesterPaths = {
	meta?: string;
};

export type SuggestRequesterPaths = {
	suggest?: string;
	trending?: string;
};

export type RecommendRequesterPaths = {
	recommend?: string;
	profile?: string;
};

export type ChatRequesterPaths = {
	send?: string;
	status?: string;
	init?: string;
	uploadImage?: string;
};

type RequesterConfig<RequestType, PathConfigurationType> = {
	origin?: string;
	headers?: HTTPHeaders;
	cache?: CacheConfig;
	globals?: Partial<RequestType>;
	paths?: Partial<PathConfigurationType>;
};

export type ClientConfig = {
	mode?: keyof typeof AppMode | AppMode;
	initiator?: string;
	fetchApi?: WindowOrWorkerGlobalScope['fetch'];
	chat?: RequesterConfig<ChatRequestModel, ChatRequesterPaths>;
	meta?: RequesterConfig<MetaRequestModel, MetaRequesterPaths>;
	search?: RequesterConfig<SearchRequestModel, SearchRequesterPaths>;
	recommend?: RequesterConfig<RecommendRequestModel, RecommendRequesterPaths>;
	suggest?: RequesterConfig<SuggestRequestModel, SuggestRequesterPaths>;
};

export type CacheConfig = Partial<DefaultCacheConfig>;

export type DefaultCacheConfig = {
	enabled: boolean;
	ttl: number;
	maxSize: number;
	type: 'memory' | 'sessionStorage';
	purgeable: boolean;
	entries?: { [key: string]: Response };
};
export type CacheEntry = {
	value: Response;
	expires: number;
	purgeable?: boolean;
};

export type Cache = {
	[key: string]: CacheEntry;
};

export type GenericGlobals = {
	[configurationPath: string]: any;
};

export type ClientGlobals = GenericGlobals & {
	siteId: string;
};

export type SuggestRequestModel = {
	siteId: string;
	query: string;
	language?: string;
	suggestionCount?: number;
	productCount?: number;
	disableSpellCorrect?: boolean;
};

export type SuggestResponseModelSuggestion = {
	text: string;
	type?: string;
	source?: string;
	popularity?: number;
	completed?: {
		token: string;
		query: string;
		type: string;
	}[];
};

export type SuggestResponseModel = {
	query: string;
	'corrected-query'?: string;
	suggested?: SuggestResponseModelSuggestion;
	alternatives?: SuggestResponseModelSuggestion[];
};

export type TrendingRequestModel = {
	siteId: string;
	limit?: number;
};

export type TrendingResponseModel = {
	trending: {
		queries: {
			popularity: number;
			searchQuery: string;
		}[];
	};
};

export type RecommendRequestModel = RecommendRequestGlobalsModel &
	RecommendRequestOptionsModel & {
		tag: string;
		profile?: RecommendRequestOptionsModel;
	};

export type RecommendRequestGlobalsModel = {
	product?: string;
	products?: string[];
	cart?: string[];
	lastViewed?: string[];
	shopper?: string;
	filters?: RecommendationRequestFilterModel[];
	blockedItems?: string[];
	batchId?: number;
	test?: boolean;
	withRecInfo?: boolean;
};

export type RecommendRequestOptionsModel = {
	siteId?: string;
	categories?: string[];
	brands?: string[];
	branch?: string;
	filters?: RecommendationRequestFilterModel[];
	blockedItems?: string[];
	batched?: boolean;
	limit?: number;
	order?: number;
	query?: string;
	dedupe?: boolean;
};

//TODO: move to snapi
export type RecommendPostRequestModel = {
	siteId: string;
	profiles: RecommendPostRequestProfileModel[];
	product?: string;
	products?: string[];
	shopper?: string;
	cart?: string[];
	lastViewed?: string[];
	test?: boolean;
	withRecInfo?: boolean;
	blockedItems?: string[];
	filters?: RecommendPostRequestFiltersModel[];
};

export type RecommendPostRequestProfileModel = {
	tag: string;
	categories?: string[];
	brands?: string[];
	blockedItems?: string[];
	limit?: number;
	dedupe?: boolean;
	searchTerm?: string;
	filters?: RecommendPostRequestFiltersModel[];
};

export type RecommendPostRequestFiltersModel = {
	field: string;
	type: '=' | '==' | '===' | '!=' | '!==' | '>' | '<' | '>=' | '<=';
	values: (string | number)[];
};

export type RecommendResponseModel = {
	profile: {
		tag: string;
	};
	results: SearchResponseModelResult[];
	responseId: string;
};

export type ProfileRequestModel = {
	siteId: string;
	tag: string;
	branch?: string;
};

export type ProfileResponseModel = {
	profile: {
		tag: string;
		placement: string;
		isBundle?: boolean;
		display: {
			threshold: number;
			template: {
				name: string;
				uuid: string;
				markup?: string;
				styles?: string;
				component?: string;
				branch?: string;
				group?: string;
				type?: string;
			};
			templateParameters: {
				[any: string]: unknown;
			};
		};
	};
};

export type RecommendationRequestFilterModel = RecommendationRequestRangeFilterModel | RecommendationRequestValueFilterModel;

type RecommendationRequestRangeFilterModel = {
	type: 'range';
	field: string;
	value: { low?: number; high?: number };
};

type RecommendationRequestValueFilterModel = {
	type: 'value';
	field: string;
	value: string | number;
};

export type RecommendCombinedResponseModel = ProfileResponseModel & { results: SearchResponseModelResult[] } & { meta: MetaResponseModel } & {
	responseId: string;
};

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
	siteId?: string;
	tracking: ChatTrackingContext;
};

export type ChatInitRequestModel = {
	siteId?: string;
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

export type ChatStatusResponseModel = {
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
	message?: string;
	productIds: string[];
};

export type MoiRequestModelImageSearch = {
	requestType: 'imageSearch';
	message: string;
	attachedImageId: string;
};

export type MoiRequestModelProductSimilar = {
	requestType: 'productSimilar';
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

// DISCRIMINATOR: "messageType" === text, productAnswer, productRecommendation, productComparison, productSearchResult, inspirationResult, content, errorResponse, topicDrift, actions
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

export type ChatFilterSummaryEntry = {
	field: string;
	value: string | { low?: string | number; high?: string | number };
	label?: string;
	filterLabel?: string;
	filterValue?: string;
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
	filterSummary: ChatFilterSummaryEntry[];
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
		filterSummary?: MoiResponseModelSearchResult['filterSummary'];
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

export type MoiResponseModelTopicDrift = BaseResponseProperties & {
	messageType: 'topicDrift';
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

export type ChatBadRequestResponseModel = {
	errors: string[];
	errorMessage: string;
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
		| ChatResponseTopicDriftData
		| ChatResponseErrorData
	)[];
	context: {
		sessionId: string;
	};
};

export type ChatResponseTextData = BaseResponseProperties & {
	messageType: 'text';
	text: string;
};

export type ChatResponseContentData = BaseResponseProperties & {
	messageType: 'content';
	text: string;
};

export type ChatResponseTopicDriftData = BaseResponseProperties & {
	messageType: 'topicDrift';
	driftType: 'SCOPE_DRIFT' | 'CATEGORY_DRIFT' | 'NO_DRIFT';
	messageForDrift: string;
	recommendedAction: 'SCOPE_REDIRECT' | 'CATEGORY_SWITCH_CONFIRM' | 'CONTINUE';
};

export type ChatResponseActionsData = {
	messageType: 'actions';
	actions: MoiResponseModelActions['actions']; // no change
};

export type ChatResponseProductSearchResultData = BaseResponseProperties & {
	messageType: 'productSearchResult';
	text: string;
	results: SearchResponseModelResult[];
	facets: SearchResponseModelFacet[];
	filterSummary: ChatFilterSummaryEntry[];
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

export type ChatResponseProductAnswerData = BaseResponseProperties & {
	messageType: 'productAnswer';
	text: string;
	sourceProduct: SearchResponseModelResult;
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

export type ChatResponseErrorData = BaseResponseProperties & {
	messageType: 'errorResponse';
	errorMessage: string;
};
