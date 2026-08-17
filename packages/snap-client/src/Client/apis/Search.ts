import { AutocompleteRequestModel, AutocompleteResponseModel, SearchRequestModel, SearchResponseModel } from '@athoscommerce/snapi-types';

import { API } from '.';
import { ClientRequestOptions, SearchRequesterPaths } from '../../types';
import { AppMode } from '@athoscommerce/snap-toolbox';
import { SearchResponseType, transformSearchResponse } from '../transforms/searchResponse';
import { transformSearchRequest } from '../transforms';

export const DEVELOPMENT_MODE_PARAM = 'test';

export class SearchAPI extends API<SearchRequesterPaths> {
	private async getEndpoint(requestParameters: SearchRequestModel | AutocompleteRequestModel, path: string, options?: ClientRequestOptions) {
		const searchRequestParameters = transformSearchRequest(requestParameters);
		searchRequestParameters.ajaxCatalog = this.configuration.initiator;
		searchRequestParameters.resultsFormat = 'native';

		if (this.configuration.mode == AppMode.development) {
			searchRequestParameters[DEVELOPMENT_MODE_PARAM] = true;
		}

		// remove pageLoadId from cache key query params
		const cacheParameters = { ...searchRequestParameters };
		delete cacheParameters.pageLoadId;
		delete cacheParameters.domain;
		// autocomplete only params
		delete cacheParameters.input;
		delete cacheParameters.redirectResponse;

		const searchResponse = await this.request<SearchResponseType>(
			{
				path,
				method: 'GET',
				headers: {},
				query: searchRequestParameters,
				signal: options?.signal,
			},
			JSON.stringify(cacheParameters)
		);

		return transformSearchResponse(searchResponse, requestParameters);
	}

	public async getAutocomplete(queryParameters: AutocompleteRequestModel, options?: ClientRequestOptions): Promise<AutocompleteResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.autocomplete || '/v1/autocomplete', options);
	}

	public async getSearch(queryParameters: SearchRequestModel, options?: ClientRequestOptions): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.search || '/v1/search', options);
	}

	public async getCategory(queryParameters: SearchRequestModel, options?: ClientRequestOptions): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.category || '/v1/category', options);
	}

	public async getFinder(queryParameters: SearchRequestModel, options?: ClientRequestOptions): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.finder || '/v1/finder', options);
	}
}
