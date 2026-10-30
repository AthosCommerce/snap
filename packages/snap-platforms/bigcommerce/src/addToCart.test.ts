import 'whatwg-fetch';
import { addToCart } from './addToCart';
import { MockClient } from '@athoscommerce/snap-shared';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';

import type { Product, SearchResultStore, SearchStoreConfig } from '@athoscommerce/snap-store-mobx';

const HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json' };
const MOCK_CART_ID = '123456789';
const ORIGIN = 'http://localhost';
const CART_ROUTE = '/api/storefront/carts';
const CART_EXISTS_ROUTE = `/api/storefront/carts/${MOCK_CART_ID}/items`;
const REDIRECT_ROUTE = '/cart.php';
const MOCK_ADDED_RESPONSE = { id: MOCK_CART_ID };

// the Storefront Cart API takes integer ids
const toId = (value: unknown) => (/^\d+$/.test(String(value)) ? Number(value) : value);

const wait = (time = 1) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services: any = {
	urlManager: urlManager,
};
let searchConfig = {
	id: 'search',
};

const globals = { siteId: '8uyt2m' };
const searchConfigDefault = {
	id: 'search',
	globals: {
		filters: [],
	},
	settings: {},
};

let results: SearchResultStore;
let controller: SearchController;
let errMock: any;
let fetchMock: any;

const client = new MockClient(globals, {});
// TODO: need to use variant data from BigCommerce

const controllerServices: any = {
	client,
	store: new SearchStore(searchConfig, services),
	urlManager,
	eventManager: new EventManager(),
	profiler: new Profiler(),
	logger: new Logger(),
	tracker: new Tracker(globals),
};

describe('addToCart', () => {
	beforeAll(async () => {
		searchConfig = { ...searchConfigDefault };
		controller = new SearchController(searchConfig, controllerServices);
		(controller.client as MockClient).mockData.updateConfig({ search: 'variants' });

		await controller.search();

		results = controller.store.results;

		errMock = jest.spyOn(console, 'error').mockImplementation(() => {});

		// @ts-ignore
		fetchMock = jest.spyOn(global, 'fetch').mockImplementation((url) => {
			let response: any = [];
			if (url == CART_ROUTE) {
				response = [{ id: MOCK_CART_ID }];
			} else if (url == CART_EXISTS_ROUTE) {
				response = MOCK_ADDED_RESPONSE;
			}

			return Promise.resolve({ json: () => Promise.resolve(response), ok: true, status: 200 });
		});
	});

	beforeEach(() => {
		global.window = Object.create(window);
		Object.defineProperty(window, 'location', {
			value: {
				origin: ORIGIN,
				href: ORIGIN,
			},
			writable: true,
		});
	});

	afterEach(() => {
		errMock.mockClear();
	});

	it('requires product(s) to be passed', () => {
		// @ts-ignore - adding with no params
		addToCart();

		expect(fetchMock).not.toHaveBeenCalled();
		expect(errMock).toHaveBeenCalledWith('bigcommerce/addToCart: No products to add!');
	});

	it('will log an error when it cannot find a custom id', async () => {
		const config = {
			idFieldName: 'mappings.dne.nope',
		};

		const item = results[0] as Product;

		await addToCart([item], config);

		expect(errMock).toHaveBeenCalledWith(`bigcommerce/addToCart: Could not find column in item data. Please verify 'idFieldName' in the config.`);
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('will redirect by default', async () => {
		const item = results[0] as Product;

		await addToCart([item]);
		await wait(10);

		expect(window.location.href).toEqual(REDIRECT_ROUTE);

		fetchMock.mockClear();
	});

	it('will not redirect if config is false', async () => {
		const item = results[0] as Product;
		const config = {
			redirect: false,
		};

		await addToCart([item], config);
		await wait(10);

		expect(window.location.href).toEqual(ORIGIN);

		fetchMock.mockClear();
	});

	it('can use a custom redirect', async () => {
		const config = {
			redirect: 'https://redirect.localhost',
		};

		const item = results[0] as Product;

		await addToCart([item], config);
		await wait(10);

		expect(window.location.href).toEqual(config.redirect);

		fetchMock.mockClear();
	});

	it('will return the API response after adding', async () => {
		const item = results[0] as Product;

		const response = await addToCart([item]);

		expect(response).toStrictEqual(MOCK_ADDED_RESPONSE);

		fetchMock.mockClear();
	});

	describe('when a cart exists', () => {
		it('can add a single simple product', async () => {
			const item = results[0] as Product;

			await addToCart([item]);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: [
					{
						productId: toId(item.id),
						quantity: item.quantity,
					},
				],
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});

		it('can add a single product with options', async () => {
			client.mockData.updateConfig({ siteId: 'tfdz6e', search: 'variants' });
			const optionSearchConfig: SearchStoreConfig = {
				...searchConfig,
				id: 'searchVariants',
				settings: {
					redirects: {
						singleResult: false,
					},
					variants: {
						autoSelect: true,
					},
				},
			};
			const optionController = new SearchController(optionSearchConfig, controllerServices);

			await optionController.search();

			const results = optionController.store.results;

			const item = results[0] as Product;

			await addToCart([item]);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: [
					{
						productId: toId(item.display.mappings.core?.uid),
						quantity: item.quantity,
						optionSelections: [
							{
								optionId: 570,
								optionValue: 2900,
							},
						],
					},
				],
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});

		it('can add multiple items', async () => {
			const items = results.slice(0, 3) as Product[];
			items.forEach((item) => item.quantity++);

			await addToCart(items);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: items.map((item) => ({
					productId: toId(item.id),
					quantity: item.quantity,
				})),
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});

		it('can use alternate id column', async () => {
			const config = {
				idFieldName: 'mappings.core.sku',
			};

			const item = results[0] as Product;

			await addToCart([item], config);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: [
					{
						productId: toId(item.mappings.core?.sku),
						quantity: item.quantity,
					},
				],
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});
	});

	describe('with Athos {parentId}_{variantId} uids', () => {
		const cartPost = (lineItems: unknown[]) => ({ headers: HEADERS, method: 'POST', body: JSON.stringify({ lineItems }) });
		const athosProduct = (core: Record<string, unknown>, extra: Record<string, unknown> = {}) =>
			({ type: 'product', quantity: 1, mappings: { core }, display: { mappings: { core } }, attributes: {}, ...extra } as unknown as Product);

		beforeEach(() => fetchMock.mockClear());
		afterAll(() => fetchMock.mockClear());

		it('sends the parentId as the product and the id after the underscore as the variant', async () => {
			const item = athosProduct({ uid: '19936_20252', parentId: '19936' });

			await addToCart([item], { redirect: false });

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, cartPost([{ productId: 19936, quantity: 1, variantId: 20252 }]));
		});

		it('sends the variant instead of option selections when Snap variants are in use', async () => {
			const item = athosProduct(
				{ uid: '19936_20252', parentId: '19936' },
				{ variants: { active: { options: { color: { value: 'Black', optionId: '570', optionValue: '2900' } } } } }
			);

			await addToCart([item], { redirect: false });

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, cartPost([{ productId: 19936, quantity: 1, variantId: 20252 }]));
		});

		it('sends only the product for a product without options, whose uid is its parentId', async () => {
			const item = athosProduct({ uid: '22585', parentId: '22585' });

			await addToCart([item], { redirect: false });

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, cartPost([{ productId: 22585, quantity: 1 }]));
		});

		it('keeps a custom idFieldName as the product id', async () => {
			const item = athosProduct({ uid: '19936_20252', parentId: '19936', sku: '777' });

			await addToCart([item], { redirect: false, idFieldName: 'display.mappings.core.sku' });

			expect(fetchMock).toHaveBeenLastCalledWith(CART_EXISTS_ROUTE, cartPost([{ productId: 777, quantity: 1 }]));
		});

		it('adds composite and plain items in one request', async () => {
			const items = [athosProduct({ uid: '19936_20252', parentId: '19936' }), athosProduct({ uid: '22585', parentId: '22585' }, { quantity: 3 })];

			await addToCart(items, { redirect: false });

			expect(fetchMock).toHaveBeenLastCalledWith(
				CART_EXISTS_ROUTE,
				cartPost([
					{ productId: 19936, quantity: 1, variantId: 20252 },
					{ productId: 22585, quantity: 3 },
				])
			);
		});
	});

	describe('when NO cart exists', () => {
		beforeAll(() => {
			// @ts-ignore
			fetchMock = jest.spyOn(global, 'fetch').mockImplementation((url) => {
				let response: any = [];
				if (url == CART_EXISTS_ROUTE) {
					response = MOCK_ADDED_RESPONSE;
				}

				return Promise.resolve({ json: () => Promise.resolve(response), ok: true, status: 200 });
			});
		});

		it('can add a single simple product', async () => {
			const item = results[0] as Product;

			await addToCart([item]);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: [
					{
						productId: toId(item.id),
						quantity: item.quantity,
					},
				],
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});

		it('can add a single product with options', async () => {
			client.mockData.updateConfig({ siteId: 'tfdz6e', search: 'variants' });
			const optionSearchConfig: SearchStoreConfig = {
				...searchConfig,
				settings: {
					redirects: {
						singleResult: false,
					},
					variants: {
						autoSelect: true,
					},
				},
			};
			const optionController = new SearchController(optionSearchConfig, controllerServices);

			await optionController.search();

			const results = optionController.store.results;

			const item = results[0] as Product;

			await addToCart([item]);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: [
					{
						productId: toId(item.display.mappings.core?.uid),
						quantity: item.quantity,
						optionSelections: [
							{
								optionId: 570,
								optionValue: 2900,
							},
						],
					},
				],
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});

		it('can add multiple items', async () => {
			const items = results.slice(0, 3) as Product[];
			await addToCart(items);

			const getParams = {
				headers: HEADERS,
				method: 'GET',
			};

			expect(fetchMock).toHaveBeenCalledWith(CART_ROUTE, getParams);

			const postBody = {
				lineItems: items.map((item) => ({
					productId: toId(item.id),
					quantity: item.quantity,
				})),
			};

			const postParams = {
				headers: HEADERS,
				method: 'POST',
				body: JSON.stringify(postBody),
			};

			expect(fetchMock).toHaveBeenLastCalledWith(CART_ROUTE, postParams);
			expect(fetchMock).toHaveBeenCalledTimes(2);

			fetchMock.mockClear();
		});
	});
});
