import 'whatwg-fetch';
import { v4 as uuidv4 } from 'uuid';
import { Client, ClientConfig } from '@athoscommerce/snap-client';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController, SearchControllerConfig } from '@athoscommerce/snap-controller';

// Minimal legacy-format search response expected by transformSearchResponse
const mockLegacySearchResponse = {
	responseId: 'test-response-id',
	pagination: {
		totalResults: 3,
		begin: 1,
		end: 3,
		currentPage: 1,
		totalPages: 1,
		previousPage: 0,
		nextPage: 0,
		perPage: 30,
		defaultPerPage: 30,
	},
	sorting: { options: [] },
	results: [
		{ uid: 'product-1', name: 'Test Product 1', sku: 'SKU-1', price: '10.00', available: 'true' },
		{ uid: 'product-2', name: 'Test Product 2', sku: 'SKU-2', price: '20.00', available: 'true' },
		{ uid: 'product-3', name: 'Test Product 3', sku: 'SKU-3', price: '30.00', available: 'true' },
	],
	facets: [],
	filterSummary: [],
	merchandising: {
		redirect: '',
		is_elevated: [],
		elevated: [],
		removed: [],
		content: {},
		facets: [],
		facetsHide: [],
	},
};

describe('Snap Client Integration Tests', () => {
	describe('NetworkCache integration tests', () => {
		const globals = { siteId: '8uyt2m' };
		const CACHE_STORAGE_KEY = 'athos-networkcache';

		const searchConfig: SearchControllerConfig = {
			id: 'search',
			globals: {
				filters: [],
			},
			settings: {
				redirects: {
					merchandising: false,
				},
			},
		};

		const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
		const services = { urlManager };

		let mockStorage: {
			[key: string]: string;
		} = {};

		beforeAll(() => {
			// mock performance to prevent warnings from tracker
			Object.defineProperty(window, 'performance', {
				writable: true,
				value: { now: jest.fn(() => Date.now()), getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]) },
			});

			global.Storage.prototype.setItem = jest.fn((key, value) => {
				mockStorage[key] = value;
			});
			global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key]);
		});

		beforeEach(() => {
			// make sure the storage starts out empty for each test
			mockStorage = {};
			jest.clearAllMocks();
			searchConfig.id = uuidv4().split('-').join('');
		});

		afterAll(() => {
			// return our mocks to their original values
			// 🚨 THIS IS VERY IMPORTANT to avoid polluting future tests!
			// @ts-ignore
			global.Storage.prototype.setItem.mockRestore();
			// @ts-ignore
			global.Storage.prototype.getItem.mockRestore();
		});

		// Helper to get the number of entries stored in the NetworkCache
		const cacheEntryCount = () => Object.keys(JSON.parse(mockStorage[CACHE_STORAGE_KEY] || '{}')).length;

		it('Caches search responses and uses them', async () => {
			// mock fetch - return legacy-format data for search, empty for meta and beacon calls
			const fetchfn = jest.spyOn(global.window, 'fetch').mockImplementation((url: any) => {
				const urlStr = typeof url === 'string' ? url : url.toString();
				if (urlStr.includes('/v1/search')) {
					return Promise.resolve({ status: 200, json: () => Promise.resolve(mockLegacySearchResponse), headers: new Headers() } as Response);
				}
				// meta calls (/v1/meta) and beacon/tracker calls all return empty objects
				return Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response);
			});

			const controller = new SearchController(searchConfig, {
				client: new Client(globals),
				store: new SearchStore(searchConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
			// no cache entries initially (NetworkCache writes "{}" to storage on construction via purgeExpired)
			expect(cacheEntryCount()).toBe(0);

			// make a search
			await controller.search();
			// wait beacon.js REQUEST_GROUPING_TIMEOUT (300ms) + buffer for render event to fire
			await new Promise((resolve) => setTimeout(resolve, 500));

			// expect meta, search, and beacon render calls to fire
			expect(fetchfn).toHaveBeenCalledTimes(3);

			// now we have cache entries (meta + search responses stored)
			expect(cacheEntryCount()).toBeGreaterThan(0);

			// we used the cache
			expect(global.Storage.prototype.getItem).toHaveBeenCalled();

			controller.urlManager.set('query', 'dress').go();
			// wait for the async search triggered by URL change + beacon render event
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// cache was updated with new entries
			expect(cacheEntryCount()).toBeGreaterThan(0);

			// it did make additional calls because the params changed (search + beacon render; meta is cached)
			expect(fetchfn).toHaveBeenCalledTimes(5);

			// check that there are results in the store
			expect(controller.store.results.length).toBeGreaterThan(0);

			controller.urlManager.reset().set('query', '').go();
			// wait for beacon render event (search and meta are both cached)
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// only the beacon render event fired - search and meta came from cache
			expect(fetchfn).toHaveBeenCalledTimes(6);

			fetchfn.mockReset();
		});

		it('Cache can be disabled via requester configs', async () => {
			// mock fetch - all responses return empty objects
			const fetchfn = jest.spyOn(global.window, 'fetch').mockImplementation(() => {
				return Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response);
			});

			// Directly test the Client (not the full SearchController stack) to verify that
			// cache-disabled config results in fresh API calls for every request.
			// The SearchController has an early-return optimization that skips re-searching
			// when params haven't changed, which would mask the cache behavior.
			const clientConfig = {
				search: {
					cache: {
						enabled: false,
					},
				},
				meta: {
					cache: {
						enabled: false,
					},
				},
			};

			const client = new Client(globals, clientConfig);

			// no cache entries initially
			expect(cacheEntryCount()).toBe(0);

			// make a search
			await client.search();

			// expect meta and search calls to fire
			expect(fetchfn).toHaveBeenCalledTimes(2);

			// still no cache entries since it is disabled
			expect(cacheEntryCount()).toBe(0);

			// make another call - should make fresh API calls since cache is disabled
			await client.search();

			// cache is still empty since disabled
			expect(cacheEntryCount()).toBe(0);

			// it made additional calls because cache is disabled
			expect(fetchfn).toHaveBeenCalledTimes(4);

			fetchfn.mockReset();
		});

		it('Cache can be disabled via client mode', async () => {
			// mock fetch - all responses return empty objects
			const fetchfn = jest.spyOn(global.window, 'fetch').mockImplementation(() => {
				return Promise.resolve({ status: 200, json: () => Promise.resolve({}), headers: new Headers() } as Response);
			});

			// Directly test the Client (not the full SearchController stack) to verify that
			// development mode disables caching and results in fresh API calls every time.
			// The SearchController has an early-return optimization that skips re-searching
			// when params haven't changed, which would mask the cache behavior.
			const clientConfig: ClientConfig = {
				mode: 'development',
			};

			const client = new Client(globals, clientConfig);

			// no cache entries initially
			expect(cacheEntryCount()).toBe(0);

			// make a search
			await client.search();

			// expect meta and search calls to fire
			expect(fetchfn).toHaveBeenCalledTimes(2);

			// still no cache entries since development mode disables caching
			expect(cacheEntryCount()).toBe(0);

			// make another call - should make fresh API calls since cache is disabled
			await client.search();

			// cache is still empty since development mode disables it
			expect(cacheEntryCount()).toBe(0);

			// it made additional calls because development mode disables cache
			expect(fetchfn).toHaveBeenCalledTimes(4);

			fetchfn.mockReset();
		});
	});
});
