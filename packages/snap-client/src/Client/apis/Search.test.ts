import 'whatwg-fetch';
import { ApiConfiguration } from './Abstract';
import { SearchAPI } from './Search';
import { version } from '@athoscommerce/snap-toolbox';
import { SearchRequestModelFilterTypeEnum, SearchRequestModelFilterValue } from '@athoscommerce/snapi-types';

describe('Search Api', () => {
	beforeAll(() => {
		// mock performance to prevent warning in test
		Object.defineProperty(window, 'performance', {
			value: {
				getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]),
			},
		});
	});

	beforeEach(() => {
		window.sessionStorage.clear();
	});

	it('has expected default functions', () => {
		const api = new SearchAPI(new ApiConfiguration({}));

		// @ts-ignore
		expect(api?.getEndpoint).toBeDefined();

		expect(api?.getSearch).toBeDefined();
		expect(api?.getCategory).toBeDefined();
		expect(api?.getAutocomplete).toBeDefined();
		expect(api?.getFinder).toBeDefined();
		expect(api?.getProducts).toBeDefined();
	});

	it('can call getSearch', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/search?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getSearch({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getCategory', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/category?siteId=8uyt2m&bgfilter.categoryId=12345&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getCategory({
			siteId: '8uyt2m',
			filters: [
				{
					field: 'categoryId',
					value: '12345',
					type: 'value',
					background: true,
				} as SearchRequestModelFilterValue,
			],
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getAutocomplete', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/autocomplete?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getAutocomplete({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('can call getFinder', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/finder?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		await api.getFinder({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('uses configured paths', async () => {
		const api = new SearchAPI(
			new ApiConfiguration({
				paths: {
					autocomplete: '/custom/autocomplete',
					search: '/custom/search',
					category: '/custom/category',
					finder: '/custom/finder',
				},
			})
		);
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		const params = {
			headers: {},
			method: 'GET',
		};

		await api.getSearch({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenNthCalledWith(
			1,
			`https://8uyt2m.a.athoscommerce.net/custom/search?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`,
			params
		);

		await api.getCategory({
			siteId: '8uyt2m',
			filters: [
				{
					field: 'categoryId',
					value: '12345',
					type: 'value',
					background: true,
				} as SearchRequestModelFilterValue,
			],
		});

		expect(requestMock).toHaveBeenNthCalledWith(
			2,
			`https://8uyt2m.a.athoscommerce.net/custom/category?siteId=8uyt2m&bgfilter.categoryId=12345&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`,
			params
		);

		await api.getAutocomplete({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenNthCalledWith(
			3,
			`https://8uyt2m.a.athoscommerce.net/custom/autocomplete?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`,
			params
		);

		await api.getFinder({
			siteId: '8uyt2m',
			search: { query: { string: 'dress' } },
		});

		expect(requestMock).toHaveBeenNthCalledWith(
			4,
			`https://8uyt2m.a.athoscommerce.net/custom/finder?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`,
			params
		);

		requestMock.mockReset();
	});

	it('can call getEndpoint', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));

		let requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		const params = {
			body: undefined,
			headers: {},
			method: 'GET',
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/search?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`;

		//@ts-ignore
		await api.getEndpoint(
			{
				siteId: '8uyt2m',
				search: { query: { string: 'dress' } },
			},
			'/v1/search'
		);
		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();

		requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		//can get endpoint with custom path
		//@ts-ignore
		await api.getEndpoint(
			{
				siteId: '8uyt2m',
				search: { query: { string: 'dress' } },
			},
			'mycustompath'
		);

		expect(requestMock).toHaveBeenCalledWith(
			`https://8uyt2m.a.athoscommerce.net/mycustompath?siteId=8uyt2m&q=dress&ajaxCatalog=snap%2Fclient%2F${version}&resultsFormat=native`,
			{
				...params,
			}
		);

		requestMock.mockReset();
	});

	it('can call getProducts', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const mockResponse = {
			mappings: { core: { name: 'Test Product', description: 'A test product' } },
			variants: {
				optionConfig: { color: { count: 2, type: 'color' } },
				data: [
					{
						attributes: {},
						badges: [],
						mappings: { core: { uid: 'v1', name: 'Variant 1', price: 19.99, imageUrl: 'https://example.com/v1.jpg' } },
						options: { color: { value: 'red' } },
					},
				],
			},
		};

		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockResponse), headers: new Headers() } as Response));

		const result = await api.getProducts({
			parentId: 'abc123',
			siteId: '8uyt2m',
		});

		const expectedUrl = 'https://8uyt2m.a.athoscommerce.net/v1/products/abc123';
		const expectedParams = {
			body: undefined,
			headers: {},
			method: 'GET',
		};

		expect(requestMock).toHaveBeenCalledWith(expectedUrl, expectedParams);
		expect(result).toEqual(mockResponse);

		requestMock.mockReset();
	});

	it('caches getProducts in memoryCache only (not sessionStorage)', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const mockResponse = { mappings: { core: { name: 'Cached Product' } } };

		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockResponse), headers: new Headers() } as Response));

		// First call hits the network and primes the cache.
		await api.getProducts({ parentId: 'memcache-1', siteId: '8uyt2m' });
		expect(requestMock).toHaveBeenCalledTimes(1);

		// Entry should live in memoryCache, not the sessionStorage-backed cache.
		const cacheKey = `/v1/products/memcache-1/${JSON.stringify({ parentId: 'memcache-1', siteId: '8uyt2m' })}`;
		expect(api.memoryCache.get(cacheKey)).toEqual(mockResponse);
		expect(api.cache.get(cacheKey)).toBeUndefined();
		const persistedCache = JSON.parse(window.sessionStorage.getItem('athos-networkcache') || '{}');
		expect(persistedCache[cacheKey]).toBeUndefined();

		// Second call is served from memoryCache without a new fetch.
		const result = await api.getProducts({ parentId: 'memcache-1', siteId: '8uyt2m' });
		expect(result).toEqual(mockResponse);
		expect(requestMock).toHaveBeenCalledTimes(1);

		requestMock.mockReset();
	});

	it('uses configured paths for getProducts', async () => {
		const api = new SearchAPI(
			new ApiConfiguration({
				paths: {
					products: '/custom/products',
				},
			})
		);

		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response));

		await api.getProducts({
			parentId: 'xyz789',
			siteId: '8uyt2m',
		});

		const expectedUrl = 'https://8uyt2m.a.athoscommerce.net/custom/products/xyz789';
		expect(requestMock).toHaveBeenCalledWith(expectedUrl, { body: undefined, headers: {}, method: 'GET' });

		requestMock.mockReset();
	});
});
