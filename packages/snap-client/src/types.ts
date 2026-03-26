import { AppMode } from '@athoscommerce/snap-toolbox';
import type { MetaRequestModel, SearchResponseModelResult, SearchRequestModel, MetaResponseModel } from '@athoscommerce/snapi-types';

export type HTTPHeaders = { [key: string]: string };

export type SearchRequesterPaths = {
	autocomplete?: string;
	search?: string;
	category?: string;
	finder?: string;
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
