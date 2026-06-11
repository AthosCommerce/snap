import 'whatwg-fetch';
import { Client } from './Client';
import type { ClientConfig } from '../types';
import { MockData } from '@athoscommerce/snap-shared';
import { AppMode, version } from '@athoscommerce/snap-toolbox';

const mockData = new MockData();

describe('Snap Client', () => {
	beforeAll(() => {
		// mock performance to prevent warning in test
		Object.defineProperty(window, 'performance', {
			value: {
				getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]),
			},
		});
	});

	it('requires a siteId during construction', () => {
		expect(() => {
			// @ts-ignore
			new Client();
		}).toThrow();

		expect(() => {
			// @ts-ignore
			new Client({});
		}).toThrow();

		expect(() => {
			new Client({ siteId: '' });
		}).toThrow();

		expect(() => {
			new Client({ siteId: '8uyt2m' });
		}).not.toThrow();
	});

	it('instantiates with a default config', () => {
		const client = new Client({ siteId: '8uyt2m' });

		// @ts-ignore - verifying private property
		expect(client.config.mode).toBe(AppMode.production);
		// @ts-ignore - verifying private property
		expect(client.config.meta!.cache!.purgeable!).toBe(false);
		// @ts-ignore - verifying private property
		expect(client.mode).toBe(AppMode.production);

		// checking requesters mode
		// @ts-ignore - verifying private property
		for (const [name, requester] of Object.entries(client.requesters)) {
			expect(name).toBe(name);
			// @ts-ignore - verifying private property
			expect(requester.mode).toBe(AppMode.production);
			if (name === 'chat') {
				// @ts-ignore - verifying private property
				expect(requester.cache.config.enabled).toBe(false);
			} else {
				// @ts-ignore - verifying private property
				expect(requester.cache.config.enabled).toBe(true);
			}
		}
	});

	it('can pass in a client config', () => {
		const config: ClientConfig = {
			meta: {
				origin: 'https://snapi.kube.athoscommerce.net/meta',
			},
			search: {
				origin: 'https://snapi.kube.athoscommerce.net/search',
			},
			recommend: {
				origin: 'https://snapi.kube.athoscommerce.net/recommend',
			},
			suggest: {
				origin: 'https://snapi.kube.athoscommerce.net/suggest',
			},
		};

		const client = new Client({ siteId: '8uyt2m' }, config);

		expect(client.meta).toBeDefined();
		// @ts-ignore
		const clientConfig = client.config;

		expect(clientConfig?.meta?.origin).toBe(config?.meta?.origin);

		// check it merged with the default config
		expect(clientConfig?.meta?.cache?.purgeable).toBe(false);
		expect(clientConfig?.search?.origin).toBe(config?.search?.origin);
		expect(clientConfig?.recommend?.origin).toBe(config?.recommend?.origin);
		expect(clientConfig?.suggest?.origin).toBe(config?.suggest?.origin);
	});

	it('can set mode via client config', () => {
		const config: ClientConfig = {
			mode: 'development',
		};

		const client = new Client({ siteId: '8uyt2m' }, config);

		// @ts-ignore - verifying private property
		expect(client.config.mode).toBe(AppMode.development);

		// @ts-ignore - verifying private property
		expect(client.mode).toBe(AppMode.development);

		// checking requesters mode
		// @ts-ignore - verifying private property
		for (const [name, requester] of Object.entries(client.requesters)) {
			expect(name).toBe(name);

			// @ts-ignore - verifying private property
			expect(requester.mode).toBe(AppMode.development);
			// @ts-ignore - verifying private property
			expect(requester.cache.config.enabled).toBe(false);
		}
	});

	it('has all the fetch functions defined', () => {
		const client = new Client({ siteId: '8uyt2m' });

		expect(client.search).toBeDefined();
		expect(client.autocomplete).toBeDefined();
		expect(client.trending).toBeDefined();
		expect(client.recommend).toBeDefined();
		expect(client.meta).toBeDefined();
		expect(client.products).toBeDefined();
	});

	describe('each fetch method uses the expected requester', () => {
		beforeEach(() => {
			jest.useFakeTimers({ doNotFake: ['performance'] });
			jest.clearAllMocks();
		});

		afterEach(() => {
			jest.useRealTimers();
		});

		it('Autocomplete method', async () => {
			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockData.autocomplete()) } as Response));

			const client = new Client({ siteId: '8uyt2m' }, { mode: 'development' });

			//@ts-ignore
			const searchRequester = client.requesters.search;
			//@ts-ignore
			const suggestRequester = client.requesters.suggest;
			//@ts-ignore
			const metaRequester = client.requesters.meta;

			const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);
			const suggestRequesterSpy = jest.spyOn(suggestRequester, 'request' as never);
			const searchRequesterSpy = jest.spyOn(searchRequester, 'request' as never);

			const acparams = {
				search: {
					query: {
						string: 'hello',
					},
				},
			};

			await client.autocomplete(acparams);

			const metaRequest = {
				headers: {},
				method: 'GET',
				path: '/v1/meta',
				query: {
					siteId: '8uyt2m',
				},
			};

			const metaCacheKey = '{"siteId":"8uyt2m"}';

			expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
			expect(metaRequesterSpy.mock.calls).toEqual([
				[metaRequest, metaCacheKey], // first call
			]);
			const suggestRequest = {
				headers: {},
				method: 'GET',
				path: '/v1/suggest',
				query: {
					language: 'en',
					query: 'hello',
					siteId: '8uyt2m',
					suggestionCount: 5,
				},
			};
			const suggestCacheKey = '{"siteId":"8uyt2m","language":"en","query":"hello","suggestionCount":5}';

			expect(suggestRequesterSpy).toHaveBeenCalledTimes(1);
			expect(suggestRequesterSpy.mock.calls).toEqual([
				[suggestRequest, suggestCacheKey], // first call
			]);

			const acRequest = {
				headers: {},
				method: 'GET',
				path: '/v1/autocomplete',
				query: {
					q: 'hello',
					redirectResponse: 'full',
					resultsFormat: 'native',
					siteId: '8uyt2m',
					test: true,
				},
			};
			const acCacheKey = `{"siteId":"8uyt2m",\"q\":\"hello\","ajaxCatalog":"snap/client/${version}\","resultsFormat":"native","test":true}`;

			expect(searchRequesterSpy).toHaveBeenCalledTimes(1);
			expect(searchRequesterSpy.mock.calls).toEqual([
				[{ ...acRequest, query: { ajaxCatalog: `snap/client/${version}`, ...acRequest.query } }, acCacheKey], // first call
			]);

			expect(fetchApiMock).toHaveBeenCalledTimes(3);

			fetchApiMock.mockReset();
		});

		it('Meta method', async () => {
			const client = new Client({ siteId: '8uyt2m' }, { mode: 'development' });

			//@ts-ignore
			const metaRequester = client.requesters.meta;

			const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

			const metaprops = { siteId: '8uyt2m' };

			await client.meta(metaprops);

			const metaRequest = {
				headers: {},
				method: 'GET',
				path: '/v1/meta',
				query: {
					siteId: '8uyt2m',
				},
			};

			const metaCacheKey = '{"siteId":"8uyt2m"}';

			expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
			expect(metaRequesterSpy.mock.calls).toEqual([[metaRequest, metaCacheKey]]);

			expect(fetchApiMock).toHaveBeenCalledTimes(1);

			fetchApiMock.mockReset();
		});

		it('Search method', async () => {
			const client = new Client({ siteId: '8uyt2m' }, { mode: 'development' });

			//@ts-ignore
			const searchRequester = client.requesters.search;

			const searchRequesterSpy = jest.spyOn(searchRequester, 'request' as never);

			//@ts-ignore
			const metaRequester = client.requesters.meta;

			const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockData.search()) } as Response));

			const searchprops = { siteId: '8uyt2m' };

			await client.search(searchprops);

			const searchparams = {
				headers: {},
				method: 'GET',
				path: '/v1/search',
				query: { resultsFormat: 'native', siteId: '8uyt2m', test: true, ajaxCatalog: `snap/client/${version}` },
			};

			const searchcacheKey = `{"siteId":"8uyt2m","ajaxCatalog":"snap/client/${version}\","resultsFormat":"native","test":true}`;

			expect(searchRequesterSpy).toHaveBeenCalledTimes(1);
			expect(searchRequesterSpy.mock.calls).toEqual([[searchparams, searchcacheKey]]);

			const metaRequest = {
				headers: {},
				method: 'GET',
				path: '/v1/meta',
				query: {
					siteId: '8uyt2m',
				},
			};

			const metaCacheKey = '{"siteId":"8uyt2m"}';

			expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
			expect(metaRequesterSpy.mock.calls).toEqual([[metaRequest, metaCacheKey]]);

			expect(fetchApiMock).toHaveBeenCalledTimes(2);
			fetchApiMock.mockReset();
		});

		it('Trending method', async () => {
			const client = new Client({ siteId: '8uyt2m' }, { mode: 'development' });

			//@ts-ignore
			const suggestRequester = client.requesters.suggest;

			const suggestRequesterSpy = jest.spyOn(suggestRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

			const trendingprops = { siteId: '8uyt2m' };

			await client.trending(trendingprops);

			const trendingparams = { headers: {}, method: 'GET', path: '/v1/trending', query: { siteId: '8uyt2m' } };

			const trendingcacheKey = '{"siteId":"8uyt2m"}';

			expect(suggestRequesterSpy).toHaveBeenCalledTimes(1);
			expect(suggestRequesterSpy.mock.calls).toEqual([[trendingparams, trendingcacheKey]]);
			expect(fetchApiMock).toHaveBeenCalledTimes(1);
			fetchApiMock.mockReset();
		});

		it('Products method', async () => {
			const mockResponse = {
				mappings: { core: { name: 'Test Product' } },
				variants: { optionConfig: {}, data: [] },
			};

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockResponse) } as Response));

			const client = new Client({ siteId: '8uyt2m' });

			//@ts-ignore
			const searchRequester = client.requesters.search;

			const searchRequesterSpy = jest.spyOn(searchRequester, 'request' as never);

			await client.products({ parentId: 'abc123' });

			const productsRequest = {
				origin: 'https://8uyt2m.a.athoscommerce.net',
				headers: {},
				method: 'GET',
				path: '/v1/products/abc123',
			};

			const productsCacheKey = '{"parentId":"abc123","siteId":"8uyt2m"}';

			expect(searchRequesterSpy).toHaveBeenCalledTimes(1);
			// getProducts routes through the memory-only cache so /v1/products responses don't persist to sessionStorage.
			expect(searchRequesterSpy).toHaveBeenCalledWith(productsRequest, productsCacheKey, searchRequester.memoryCache);

			expect(fetchApiMock).toHaveBeenCalledTimes(1);
			fetchApiMock.mockReset();
		});

		it('Recommend method', async () => {
			const client = new Client({ siteId: '8uyt2m' }, { mode: 'development' });

			//@ts-ignore
			const recommendRequester = client.requesters.recommend;

			const recommendRequesterSpy = jest.spyOn(recommendRequester, 'request' as never);

			const fetchApiMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve([mockData.recommend()]) } as Response));

			const recommendprops = { siteId: '8uyt2m', tag: 'dress' };

			const recommendPromise = client.recommend(recommendprops);

			await jest.runAllTimersAsync();

			await recommendPromise;

			const profileParams = {
				headers: {},
				method: 'GET',
				path: '/v1/profile',
				query: {
					siteId: '8uyt2m',
					tag: 'dress',
				},
			};

			const profileCacheKey = '{"tag":"dress","siteId":"8uyt2m"}';

			const recommendParams = {
				headers: {
					'Content-Type': 'text/plain',
				},
				method: 'POST',
				path: '/v1/recommend',
				subDomain: 'p13n',
				body: {
					profiles: [
						{
							tag: 'dress',
						},
					],
					test: true,
					siteId: '8uyt2m',
				},
			};

			const recommendCacheKey = `{"profiles":[{"tag":"dress"}],"siteId":"8uyt2m","test":true}`;

			expect(recommendRequesterSpy).toHaveBeenCalledTimes(2);
			expect(recommendRequesterSpy.mock.calls).toEqual([
				[profileParams, profileCacheKey],
				[recommendParams, recommendCacheKey],
			]);

			expect(fetchApiMock).toHaveBeenCalledTimes(3);
			fetchApiMock.mockReset();
		});

		describe('with custom fetchApi', () => {
			it('Autocomplete method', async () => {
				const fetchApiMock = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));
				const client = new Client({ siteId: '8uyt2m' }, { mode: 'development', fetchApi: fetchApiMock });

				//@ts-ignore
				const searchRequester = client.requesters.search;
				//@ts-ignore
				const suggestRequester = client.requesters.suggest;
				//@ts-ignore
				const metaRequester = client.requesters.meta;

				const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);
				const suggestRequesterSpy = jest.spyOn(suggestRequester, 'request' as never);
				const searchRequesterSpy = jest.spyOn(searchRequester, 'request' as never);

				const acparams = {
					search: {
						query: {
							string: 'hello',
						},
					},
				};

				await client.autocomplete(acparams);

				const metaRequest = {
					headers: {},
					method: 'GET',
					path: '/v1/meta',
					query: {
						siteId: '8uyt2m',
					},
				};

				const metaCacheKey = '{"siteId":"8uyt2m"}';

				expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
				expect(metaRequesterSpy.mock.calls).toEqual([
					[metaRequest, metaCacheKey], // first call
				]);
				const suggestRequest = {
					headers: {},
					method: 'GET',
					path: '/v1/suggest',
					query: {
						language: 'en',
						query: 'hello',
						siteId: '8uyt2m',
						suggestionCount: 5,
					},
				};
				const suggestCacheKey = '{"siteId":"8uyt2m","language":"en","query":"hello","suggestionCount":5}';

				expect(suggestRequesterSpy).toHaveBeenCalledTimes(1);
				expect(suggestRequesterSpy.mock.calls).toEqual([
					[suggestRequest, suggestCacheKey], // first call
				]);

				const acRequest = {
					headers: {},
					method: 'GET',
					path: '/v1/autocomplete',
					query: {
						q: 'hello',
						redirectResponse: 'full',
						resultsFormat: 'native',
						siteId: '8uyt2m',
						test: true,
					},
				};
				const acCacheKey = `{"siteId":"8uyt2m",\"q\":\"hello\","ajaxCatalog":"snap/client/${version}\","resultsFormat":"native","test":true}`;

				expect(searchRequesterSpy).toHaveBeenCalledTimes(1);
				expect(searchRequesterSpy.mock.calls).toEqual([
					[{ ...acRequest, query: { ajaxCatalog: `snap/client/${version}`, ...acRequest.query } }, acCacheKey], // first call
				]);

				expect(fetchApiMock).toHaveBeenCalledTimes(3);

				fetchApiMock.mockReset();
			});

			it('Meta method with custom fetchApi', async () => {
				const fetchApiMock = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

				const client = new Client({ siteId: '8uyt2m' }, { mode: 'development', fetchApi: fetchApiMock });

				//@ts-ignore
				const metaRequester = client.requesters.meta;

				const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);

				const metaprops = { siteId: '8uyt2m' };

				await client.meta(metaprops);

				const metaRequest = {
					headers: {},
					method: 'GET',
					path: '/v1/meta',
					query: {
						siteId: '8uyt2m',
					},
				};

				const metaCacheKey = '{"siteId":"8uyt2m"}';

				expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
				expect(metaRequesterSpy.mock.calls).toEqual([[metaRequest, metaCacheKey]]);

				expect(fetchApiMock).toHaveBeenCalledTimes(1);
				fetchApiMock.mockReset();
			});

			it('Search method with custom fetchApi', async () => {
				const fetchApiMock = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

				const client = new Client({ siteId: '8uyt2m' }, { mode: 'development', fetchApi: fetchApiMock });

				//@ts-ignore
				const searchRequester = client.requesters.search;

				const searchRequesterSpy = jest.spyOn(searchRequester, 'request' as never);

				//@ts-ignore
				const metaRequester = client.requesters.meta;

				const metaRequesterSpy = jest.spyOn(metaRequester, 'request' as never);

				const searchprops = { siteId: '8uyt2m' };

				await client.search(searchprops);

				const searchparams = {
					headers: {},
					method: 'GET',
					path: '/v1/search',
					query: { resultsFormat: 'native', siteId: '8uyt2m', test: true, ajaxCatalog: `snap/client/${version}` },
				};

				const searchcacheKey = `{"siteId":"8uyt2m","ajaxCatalog":"snap/client/${version}\","resultsFormat":"native","test":true}`;

				expect(searchRequesterSpy).toHaveBeenCalledTimes(1);
				expect(searchRequesterSpy.mock.calls).toEqual([[searchparams, searchcacheKey]]);

				const metaRequest = {
					headers: {},
					method: 'GET',
					path: '/v1/meta',
					query: {
						siteId: '8uyt2m',
					},
				};

				const metaCacheKey = '{"siteId":"8uyt2m"}';

				expect(metaRequesterSpy).toHaveBeenCalledTimes(1);
				expect(metaRequesterSpy.mock.calls).toEqual([[metaRequest, metaCacheKey]]);

				expect(fetchApiMock).toHaveBeenCalledTimes(2);
				fetchApiMock.mockReset();
			});

			it('Trending method with custom fetchApi', async () => {
				const fetchApiMock = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

				const client = new Client({ siteId: '8uyt2m' }, { mode: 'development', fetchApi: fetchApiMock });

				//@ts-ignore
				const suggestRequester = client.requesters.suggest;

				const suggestRequesterSpy = jest.spyOn(suggestRequester, 'request' as never);

				const trendingprops = { siteId: '8uyt2m' };

				await client.trending(trendingprops);

				const trendingparams = { headers: {}, method: 'GET', path: '/v1/trending', query: { siteId: '8uyt2m' } };

				const trendingcacheKey = '{"siteId":"8uyt2m"}';

				expect(suggestRequesterSpy).toHaveBeenCalledTimes(1);
				expect(suggestRequesterSpy.mock.calls).toEqual([[trendingparams, trendingcacheKey]]);
				expect(fetchApiMock).toHaveBeenCalledTimes(1);
				fetchApiMock.mockReset();
			});

			it('Recommend method with custom fetchApi', async () => {
				const fetchApiMock = jest.fn(() => Promise.resolve({ status: 200, json: () => Promise.resolve([{}]) } as Response));

				const client = new Client({ siteId: '8uyt2m' }, { mode: 'development', fetchApi: fetchApiMock });

				//@ts-ignore
				const recommendRequester = client.requesters.recommend;

				const recommendRequesterSpy = jest.spyOn(recommendRequester, 'request' as never);

				const recommendprops = { siteId: '8uyt2m', tag: 'dress' };

				const recommendPromise = client.recommend(recommendprops);

				await jest.runAllTimersAsync();

				await recommendPromise;

				const profileParams = {
					headers: {},
					method: 'GET',
					path: '/v1/profile',
					query: {
						siteId: '8uyt2m',
						tag: 'dress',
					},
				};

				const profileCacheKey = '{"tag":"dress","siteId":"8uyt2m"}';

				const recommendParams = {
					headers: {
						'Content-Type': 'text/plain',
					},
					method: 'POST',
					path: '/v1/recommend',
					subDomain: 'p13n',
					body: {
						profiles: [
							{
								tag: 'dress',
							},
						],
						test: true,
						siteId: '8uyt2m',
					},
				};

				const recommendCacheKey = `{"profiles":[{"tag":"dress"}],"siteId":"8uyt2m","test":true}`;

				expect(recommendRequesterSpy).toHaveBeenCalledTimes(2);
				expect(recommendRequesterSpy.mock.calls).toEqual([
					[profileParams, profileCacheKey],
					[recommendParams, recommendCacheKey],
				]);

				expect(fetchApiMock).toHaveBeenCalledTimes(3);
				fetchApiMock.mockReset();
			});
		});
	});
});
