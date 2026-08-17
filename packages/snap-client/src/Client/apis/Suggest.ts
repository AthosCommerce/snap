import { API } from './Abstract';
import {
	ClientRequestOptions,
	HTTPHeaders,
	SuggestRequesterPaths,
	SuggestRequestModel,
	SuggestResponseModel,
	TrendingRequestModel,
	TrendingResponseModel,
} from '../../types';

export class SuggestAPI extends API<SuggestRequesterPaths> {
	async getSuggest(queryParameters: SuggestRequestModel, options?: ClientRequestOptions): Promise<SuggestResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const response = await this.request<SuggestResponseModel>(
			{
				path: this.configuration.paths.suggest || '/v1/suggest',
				method: 'GET',
				headers: headerParameters,
				query: queryParameters,
				signal: options?.signal,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}

	async postSuggest(requestParameters: SuggestRequestModel): Promise<SuggestResponseModel> {
		const headerParameters: HTTPHeaders = {};
		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<SuggestResponseModel>(
			{
				path: this.configuration.paths.suggest || '/v1/suggest',
				method: 'POST',
				headers: headerParameters,
				body: requestParameters,
			},
			JSON.stringify(requestParameters)
		);

		return response;
	}

	async getTrending(queryParameters: TrendingRequestModel): Promise<TrendingResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const response = await this.request<TrendingResponseModel>(
			{
				path: this.configuration.paths.trending || '/v1/trending',
				method: 'GET',
				headers: headerParameters,
				query: queryParameters,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}

	async postTrending(requestParameters: TrendingRequestModel): Promise<TrendingResponseModel> {
		const headerParameters: HTTPHeaders = {};
		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<TrendingResponseModel>(
			{
				path: this.configuration.paths.trending || '/v1/trending',
				method: 'POST',
				headers: headerParameters,
				body: requestParameters,
			},
			JSON.stringify(requestParameters)
		);

		return response;
	}
}
