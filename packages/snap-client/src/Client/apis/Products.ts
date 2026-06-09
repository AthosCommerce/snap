import { API } from '.';
import { NetworkCache } from '../NetworkCache/NetworkCache';
import { ProductsRequestModel, ProductsResponseModel, ProductsRequesterPaths } from '../../types';

export class ProductsAPI extends API<ProductsRequesterPaths> {
	// shared in-memory cache so repeated lookups are deduped across calls — products responses must not persist to sessionStorage.
	private productsCache = new NetworkCache({ ...this.configuration.cache, type: 'memory' });

	public async getProducts(queryParameters: ProductsRequestModel & { siteId: string }): Promise<ProductsResponseModel> {
		const basePath = this.configuration.paths.products || '/v1/products';
		const path = `${basePath}/${queryParameters.parentId}`;

		const cacheKey = JSON.stringify({ parentId: queryParameters.parentId, siteId: queryParameters.siteId });

		const response = await this.request<ProductsResponseModel>(
			{
				origin: `https://${queryParameters.siteId}.a.athoscommerce.net`,
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
