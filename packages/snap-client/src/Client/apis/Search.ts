import { AutocompleteRequestModel, AutocompleteResponseModel, SearchRequestModel, SearchResponseModel } from '@athoscommerce/snapi-types';

import { API } from '.';
import { SearchRequesterPaths } from '../../types';
import { AppMode } from '@athoscommerce/snap-toolbox';
import { SearchResponseType, transformSearchResponse } from '../transforms/searchResponse';
import { transformSearchRequest } from '../transforms';

export const DEVELOPMENT_MODE_PARAM = 'test';

export class SearchAPI extends API<SearchRequesterPaths> {
	private async getEndpoint(requestParameters: SearchRequestModel | AutocompleteRequestModel, path: string) {
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
			},
			JSON.stringify(cacheParameters)
		);

		return transformSearchResponse(searchResponse, requestParameters);
	}

	public async getAutocomplete(queryParameters: AutocompleteRequestModel): Promise<AutocompleteResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.autocomplete || '/v1/autocomplete');
	}

	public async getSearch(queryParameters: SearchRequestModel): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.search || '/v1/search');
	}

	public async getCategory(queryParameters: SearchRequestModel): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.category || '/v1/category');
	}

	public async getFinder(queryParameters: SearchRequestModel): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, this.configuration.paths.finder || '/v1/finder');
	}
}
