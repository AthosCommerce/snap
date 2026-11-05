import 'whatwg-fetch';
import { addToCart } from './addToCart';
import { getUenc } from './getUenc';
import { Product } from '@athoscommerce/snap-store-mobx';
import { MockClient } from '@athoscommerce/snap-shared';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';

const ORIGIN = 'http://localhost';
const CART_ROUTE = '/checkout/cart/';

const wait = (time = 1) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
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

let results: any;
let controller: any;
let formKey = 'omnomnom';
let errMock: any;
let uenc = getUenc();
let root = `${ORIGIN}/checkout/cart/add/uenc/${uenc}`;

// @ts-ignore
const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve([]), ok: true, status: 200 }));

const controllerServices: any = {
	client: new MockClient(globals, {}),
	store: new SearchStore(searchConfig, services),
	urlManager,
	eventManager: new EventManager(),
	profiler: new Profiler(),
	logger: new Logger(),
	tracker: new Tracker(globals),
};

describe('Magento2', () => {
	beforeAll(async () => {
		searchConfig = { ...searchConfigDefault };
		controller = new SearchController(searchConfig, controllerServices);
		(controller.client as MockClient).mockData.updateConfig({ search: 'variants' });

		await controller.search();

		results = controller.store.results;

		errMock = jest.spyOn(console, 'error').mockImplementation(() => {});
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

		Object.defineProperty(window.document, 'cookie', {
			writable: true,
			value: `form_key=${formKey}`,
		});

		// reset variables
		uenc = getUenc();
		root = `${ORIGIN}/checkout/cart/add/uenc/${uenc}`;
	});

	describe('addToCart', () => {
		it('requires product(s) to be passed', () => {
			// @ts-ignore
			addToCart();

			expect(fetchMock).not.toHaveBeenCalled();
			expect(errMock).toHaveBeenCalledWith('magento2/addToCart: No products to add!');
		});

		it('adds data passed', () => {
			const item = results[0];
			addToCart([item]);

			expect(fetchMock).toHaveBeenCalled();

			const body = {
				product: item.mappings.core?.uid,
				form_key: formKey,
				uenc: uenc,
				qty: '1',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${root}/product/${item.id}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			fetchMock.mockClear();
		});

		it('can use a custom formKey and uenc', () => {
			const config = {
				formKey: 'nommmmmnomnom',
				uenc: 'totallyawesomeencodedurl',
			};

			const item = results[0];
			addToCart([item], config);

			expect(fetchMock).toHaveBeenCalled();

			const body = {
				product: item.mappings.core?.uid,
				form_key: config.formKey,
				uenc: config.uenc,
				qty: '1',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${ORIGIN}/checkout/cart/add/uenc/${config.uenc}/product/${item.id}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			fetchMock.mockClear();
		});

		it('can add multiple quantities', () => {
			const item = results[0];

			item.quantity = 4;

			addToCart([item]);

			expect(fetchMock).toHaveBeenCalled();

			const body = {
				product: item.mappings.core?.uid,
				form_key: formKey,
				uenc: uenc,
				qty: '4',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${root}/product/${item.id}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			fetchMock.mockClear();

			item.quantity = 1;
		});

		it('can use alternate id column', () => {
			const config = {
				idFieldName: 'mappings.core.url',
			};

			const item = results[0];

			addToCart([item], config);

			const body = {
				product: item.mappings.core?.url,
				form_key: formKey,
				uenc: uenc,
				qty: '1',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${root}/product/${item.mappings.core?.url}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			fetchMock.mockClear();
		});

		it('will redirect by default', async () => {
			jest.useFakeTimers();
			const item = results[0];

			addToCart([item]);

			const body = {
				product: item.mappings.core?.uid,
				form_key: formKey,
				uenc: uenc,
				qty: '1',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${root}/product/${item.id}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			// the redirect is a 0-delay setTimeout scheduled once the fetches settle
			await jest.runAllTimersAsync();

			expect(window.location.href).toEqual(CART_ROUTE);

			fetchMock.mockClear();
			jest.runOnlyPendingTimers();
			jest.useRealTimers();
		});

		it('will not redirect if config is false', async () => {
			jest.useFakeTimers();
			const item = results[0] as Product;
			const config = {
				redirect: false,
			};

			addToCart([item], config);

			const body = {
				product: item.mappings.core?.uid,
				form_key: formKey,
				uenc: uenc,
				qty: '1',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${root}/product/${item.id}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			// the redirect is a 0-delay setTimeout scheduled once the fetches settle
			await jest.runAllTimersAsync();

			expect(window.location.href).toEqual(ORIGIN);

			fetchMock.mockClear();
			jest.runOnlyPendingTimers();
			jest.useRealTimers();
		});

		it('can use a custom redirect', async () => {
			jest.useFakeTimers();
			const item = results[0] as Product;
			const config = {
				redirect: 'https://redirect.localhost',
			};

			addToCart([item], config);

			const body = {
				product: item.mappings.core?.uid,
				form_key: formKey,
				uenc: uenc,
				qty: '1',
			};

			expect(fetchMock).toHaveBeenCalledWith(
				`${root}/product/${item.id}/addon_product/1/`,
				expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
			);

			// @ts-ignore
			const fetchedFormData = Array.from(fetchMock.mock.calls[0][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

			expect(fetchedFormData).toMatchObject(body);

			// the redirect is a 0-delay setTimeout scheduled once the fetches settle
			await jest.runAllTimersAsync();

			expect(window.location.href).toEqual(config.redirect);

			fetchMock.mockClear();
			jest.runOnlyPendingTimers();
			jest.useRealTimers();
		});

		it('can add multiple items', async () => {
			const items = results.slice(0, 3) as Product[];

			addToCart(items);

			for (let i = 0; i < items.length; i++) {
				const obj = {
					product: items[i].mappings.core?.uid,
					form_key: formKey,
					uenc: uenc,
					qty: '1',
				};

				await wait(10);

				expect(fetchMock).toHaveBeenCalledWith(
					`${root}/product/${items[i].id}/addon_product/1/`,
					expect.objectContaining({ method: 'POST', body: expect.any(FormData) })
				);

				// @ts-ignore
				const fetchedFormData = Array.from(fetchMock.mock.calls[i][1].body.entries()).reduce((acc, f) => ({ ...acc, [f[0]]: f[1] }), {});

				expect(fetchedFormData).toMatchObject(obj);
			}

			fetchMock.mockClear();
		});
	});
});
