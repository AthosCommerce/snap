import { API } from '.';
import { NetworkCache } from '../NetworkCache/NetworkCache';
import { ProductsRequestModel, ProductsResponseModel, ProductsRequesterPaths } from '../../types';

export class ProductsAPI extends API<ProductsRequesterPaths> {
	// shared in-memory cache so repeated lookups are deduped across calls — products responses must not persist to sessionStorage.
	private productsCache = new NetworkCache({ ...this.configuration.cache, type: 'memory' });

	public async getProducts(queryParameters: ProductsRequestModel & { siteId: string }): Promise<ProductsResponseModel> {
		if (!queryParameters.siteId && !this.configuration.origin) {
			throw new Error(`Request failed. Missing "siteId" parameter.`);
		}

		const basePath = this.configuration.paths.products || '/v1/products';
		const path = `${basePath}/${encodeURIComponent(queryParameters.parentId)}`;

		const cacheKey = JSON.stringify({ parentId: queryParameters.parentId, siteId: queryParameters.siteId });

		const response = await this.request<ProductsResponseModel>(
			{
				origin: this.configuration.origin || `https://${queryParameters.siteId}.a.athoscommerce.net`,
				path,
				method: 'GET',
				headers: {},
			},
			cacheKey,
			this.productsCache
		);

		return response;
	}
}
