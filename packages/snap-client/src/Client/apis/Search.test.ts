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
	});

	it('can call getSearch', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

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

	it('threads an abort signal through every search endpoint', async () => {
		const api = new SearchAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const controller = new AbortController();
		const params = { siteId: '8uyt2m', search: { query: { string: 'dress' } } };

		await api.getSearch(params, { signal: controller.signal });
		await api.getCategory(params, { signal: controller.signal });
		await api.getFinder(params, { signal: controller.signal });
		await api.getAutocomplete(params, { signal: controller.signal });

		expect(requestMock).toHaveBeenCalledTimes(4);
		requestMock.mock.calls.forEach(([, init]) => {
			expect((init as RequestInit).signal).toBe(controller.signal);
		});

		// without options the init carries no signal key at all
		requestMock.mockClear();
		await api.getSearch({ siteId: '8uyt2m', search: { query: { string: 'other' } } });
		expect('signal' in ((requestMock.mock.calls[0][1] as RequestInit) || {})).toBe(false);

		requestMock.mockReset();
	});
});
