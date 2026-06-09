import 'whatwg-fetch';
import { ApiConfiguration } from './Abstract';
import { ProductsAPI } from './Products';

describe('Products Api', () => {
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
		const api = new ProductsAPI(new ApiConfiguration({}));
		expect(api?.getProducts).toBeDefined();
	});

	it('can call getProducts with a clean URL (no siteId query param)', async () => {
		const api = new ProductsAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			headers: {},
			method: 'GET',
			body: undefined,
		};
		const requestUrl = `https://8uyt2m.a.athoscommerce.net/v1/products/12345`;

		await api.getProducts({ parentId: '12345', siteId: '8uyt2m' });

		expect(requestMock).toHaveBeenCalledWith(requestUrl, params);

		requestMock.mockReset();
	});

	it('uses configured paths', async () => {
		const api = new ProductsAPI(new ApiConfiguration({ paths: { products: '/custom/products' } }));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

		const params = {
			headers: {},
			method: 'GET',
			body: undefined,
		};

		await api.getProducts({ parentId: '12345', siteId: '8uyt2m' });

		expect(requestMock).toHaveBeenCalledWith('https://8uyt2m.a.athoscommerce.net/custom/products/12345', params);

		requestMock.mockReset();
	});

	it('does not persist products responses to sessionStorage', async () => {
		const api = new ProductsAPI(new ApiConfiguration({}));
		window.sessionStorage.clear();

		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({ ok: true }) } as Response));

		await api.getProducts({ parentId: '12345', siteId: '8uyt2m' });

		expect(window.sessionStorage.length).toBe(0);

		requestMock.mockReset();
	});

	it('dedupes repeated products requests via the in-memory cache', async () => {
		const api = new ProductsAPI(new ApiConfiguration({}));
		const requestMock = jest
			.spyOn(global.window, 'fetch')
			.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({ ok: true }) } as Response));

		const first = await api.getProducts({ parentId: '12345', siteId: '8uyt2m' });
		const second = await api.getProducts({ parentId: '12345', siteId: '8uyt2m' });

		expect(requestMock).toHaveBeenCalledTimes(1);
		expect(second).toEqual(first);

		requestMock.mockReset();
	});
});
