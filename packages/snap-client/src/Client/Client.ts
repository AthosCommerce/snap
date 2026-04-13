import { AppMode } from '@athoscommerce/snap-toolbox';
import { SuggestAPI, RecommendAPI, ApiConfiguration, SearchAPI, MetaAPI } from './apis';

import type {
	ClientGlobals,
	ClientConfig,
	TrendingRequestModel,
	TrendingResponseModel,
	ProfileRequestModel,
	RecommendRequestModel,
	RecommendCombinedResponseModel,
	SuggestRequestModel,
} from '../types';

import type {
	MetaRequestModel,
	MetaResponseModel,
	SearchRequestModel,
	SearchResponseModel,
	AutocompleteRequestModel,
	AutocompleteResponseModel,
	AutocompleteRequestModelSearchRedirectResponseEnum,
} from '@athoscommerce/snapi-types';

import deepmerge from 'deepmerge';

import {
	ChatAPI,
	ChatInitRequestModel,
	ChatInitResponseModel,
	ChatStatusRequestModel,
	UploadImageRequestModel,
	UploadImageResponseModel,
	ChatRequestModel,
	FeedbackRequestModel,
	ChatStatusResponse,
} from './apis/Chat';

import { ChatResponseModel, transformSuggestResponse } from './transforms';

const defaultConfig: ClientConfig = {
	mode: AppMode.production,
	meta: {
		cache: {
			purgeable: false,
		},
	},
};

export class Client {
	private mode = AppMode.production;
	private globals: ClientGlobals;
	private config: ClientConfig;
	private requesters: {
		meta: MetaAPI;
		search: SearchAPI;
		recommend: RecommendAPI;
		suggest: SuggestAPI;
		chat: ChatAPI;
	};

	constructor(globals: ClientGlobals, config: ClientConfig = {}) {
		if (!globals?.siteId) {
			throw 'no siteId specified!';
		}

		this.globals = globals;
		this.config = deepmerge(defaultConfig, config);

		if (Object.values(AppMode).includes(this.config.mode as AppMode)) {
			this.mode = this.config.mode! as AppMode;
		}

		this.requesters = {
			meta: new MetaAPI(
				new ApiConfiguration({
					fetchApi: this.config.fetchApi,
					initiator: this.config.initiator,
					mode: this.mode,
					origin: this.config.meta?.origin,
					headers: this.config.meta?.headers,
					cache: this.config.meta?.cache,
					globals: this.config.meta?.globals,
					paths: this.config.meta?.paths,
				})
			),
			recommend: new RecommendAPI(
				new ApiConfiguration({
					fetchApi: this.config.fetchApi,
					initiator: this.config.initiator,
					mode: this.mode,
					origin: this.config.recommend?.origin,
					headers: this.config.recommend?.headers,
					cache: this.config.recommend?.cache,
					globals: this.config.recommend?.globals,
					paths: this.config.recommend?.paths,
				})
			),
			search: new SearchAPI(
				new ApiConfiguration({
					fetchApi: this.config.fetchApi,
					initiator: this.config.initiator,
					mode: this.mode,
					origin: this.config.search?.origin,
					headers: this.config.search?.headers,
					cache: this.config.search?.cache,
					globals: this.config.search?.globals,
					paths: this.config.search?.paths,
				})
			),
			suggest: new SuggestAPI(
				new ApiConfiguration({
					fetchApi: this.config.fetchApi,
					initiator: this.config.initiator,
					mode: this.mode,
					origin: this.config.suggest?.origin,
					headers: this.config.suggest?.headers,
					cache: this.config.suggest?.cache,
					globals: this.config.suggest?.globals,
					paths: this.config.suggest?.paths,
				})
			),
			chat: new ChatAPI(
				new ApiConfiguration({
					fetchApi: this.config.fetchApi,
					initiator: this.config.initiator,
					mode: this.mode,
					origin: this.config.chat?.origin,
					headers: this.config.chat?.headers,
					cache: this.config.chat?.cache,
					globals: this.config.chat?.globals,
				})
			),
		};
	}

	async meta(params?: MetaRequestModel): Promise<MetaResponseModel> {
		const defaultParams: MetaRequestModel = { siteId: this.globals.siteId };
		params = deepmerge(defaultParams, params || {});

		return this.requesters.meta.getMeta(params);
	}

	async autocomplete(params: AutocompleteRequestModel = {}): Promise<{ meta: MetaResponseModel; search: AutocompleteResponseModel }> {
		if (!params.search?.query?.string) {
			throw 'query string parameter is required';
		}

		params = deepmerge(this.globals, params);

		// start meta request immediately so it runs in parallel with suggest/search
		const metaPromise = this.meta({ siteId: params.siteId || '' });

		const suggestParams: SuggestRequestModel = {
			siteId: params.siteId || '',
			language: 'en',
			query: params.search?.query?.string || '',
			suggestionCount: (params.suggestions || {}).count || 5,
		};

		if (params.search?.query?.spellCorrection === false) {
			suggestParams.disableSpellCorrect = true;
		}

		const suggestResults = await this.requesters.suggest.getSuggest(suggestParams);
		const transformedSuggestResults = transformSuggestResponse(suggestResults);

		// determine the query to use for the search request
		// suggested text → original query → correctedQuery
		const q = (transformedSuggestResults.suggested || {}).text || transformedSuggestResults.query || transformedSuggestResults.correctedQuery;

		params.search = params.search || {};
		params.search.redirectResponse = 'full' as AutocompleteRequestModelSearchRedirectResponseEnum;

		// set the query to the most relevant suggestion
		// params.search.query = params.search.query || {};
		if (q && params.search?.query?.string) {
			params.search.query.string = q;
		}

		const searchResults = await this.requesters.search.getAutocomplete(params);

		const autocompleteResponse = {
			...searchResults,
			autocomplete: transformedSuggestResults,
		};

		const [meta, search] = await Promise.all([metaPromise, autocompleteResponse]);
		return { meta, search };
	}

	async search(params: SearchRequestModel = {}): Promise<{ meta: MetaResponseModel; search: SearchResponseModel }> {
		params = deepmerge(this.globals, params);

		const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.search.getSearch(params)]);
		return { meta, search };
	}

	async uploadImage(params: UploadImageRequestModel): Promise<UploadImageResponseModel> {
		const mergedParams = { ...this.globals, ...params };
		return this.requesters.chat.postUploadImage(mergedParams);
	}

	async chatStatus(params: ChatStatusRequestModel): Promise<ChatStatusResponse> {
		return this.requesters.chat.postStatus(params);
	}

	async chatInit(params: ChatInitRequestModel): Promise<ChatInitResponseModel> {
		return this.requesters.chat.chatInit(params);
	}

	async chat(params: ChatRequestModel): Promise<{ meta: MetaResponseModel; chat: ChatResponseModel }> {
		const mergedParams = deepmerge<ChatRequestModel & ClientGlobals>(this.globals, params);

		const [meta, chat] = await Promise.all([this.meta({ siteId: this.globals.siteId || '' }), this.requesters.chat.postMessage(mergedParams)]);
		return { meta, chat };
	}

	async chatFeedback(params: FeedbackRequestModel): Promise<void> {
		return this.requesters.chat.postFeedback(params);
	}

	async category(params: SearchRequestModel = {}): Promise<{ meta: MetaResponseModel; search: SearchResponseModel }> {
		params = deepmerge(this.globals, params);

		const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.search.getCategory(params)]);
		return { meta, search };
	}

	async finder(params: SearchRequestModel = {}): Promise<{ meta: MetaResponseModel; search: SearchResponseModel }> {
		params = deepmerge(this.globals, params);

		const [meta, search] = await Promise.all([this.meta({ siteId: params.siteId || '' }), this.requesters.search.getFinder(params)]);
		return { meta, search };
	}

	async trending(params: Partial<TrendingRequestModel>): Promise<TrendingResponseModel> {
		params = deepmerge({ siteId: this.globals.siteId }, params || {});

		return this.requesters.suggest.getTrending(params as TrendingRequestModel);
	}

	async recommend(params: RecommendRequestModel): Promise<RecommendCombinedResponseModel> {
		const { tag, ...otherParams } = params;
		if (!tag) {
			throw 'tag parameter is required';
		}

		const profileParams: ProfileRequestModel = {
			tag,
			siteId: params.siteId || this.globals.siteId,
		};

		if (otherParams.branch) {
			profileParams.branch = otherParams.branch;
			delete otherParams.branch;
		}

		const recommendParams = {
			tag: tag,
			...otherParams,
			siteId: params.siteId || this.globals.siteId,
		};

		const [meta, profile, recommendations] = await Promise.all([
			this.meta(params.siteId ? { siteId: params.siteId } : undefined),
			this.requesters.recommend.getProfile(profileParams),
			this.requesters.recommend.batchRecommendations(recommendParams),
		]);

		return {
			...profile,
			meta,
			results: recommendations && recommendations.results,
			responseId: recommendations ? recommendations.responseId : '',
		};
	}
}
