import { pluginShopifyMarketsPricing } from './pluginShopifyMarketsPricing';

type MockResult = {
	type: string;
	mappings: {
		core: {
			parentId?: string;
			price?: number;
			msrp?: number;
		};
	};
	custom: Record<string, unknown>;
};

type MockController = {
	store: {
		custom: Record<string, unknown>;
		results: MockResult[];
	};
	log: {
		warn: jest.Mock;
	};
	on: jest.Mock;
};

const createController = (results: MockResult[]): MockController => {
	let afterStoreHandler: ((payload: { controller: MockController }, next: () => Promise<void>) => Promise<void>) | undefined;

	const controller: MockController = {
		store: {
			custom: {},
			results,
		},
		log: {
			warn: jest.fn(),
		},
		on: jest.fn((event: string, handler: typeof afterStoreHandler) => {
			if (event === 'afterStore') {
				afterStoreHandler = handler;
			}
		}),
	};

	const runAfterStore = async () => {
		if (!afterStoreHandler) {
			throw new Error('afterStore handler was not registered');
		}

		await afterStoreHandler({ controller }, async () => Promise.resolve());
	};

	return Object.assign(controller, { runAfterStore });
};

const makeFetchResponse = (nodes: Array<{ id: string; price: number; msrp: number }>) => {
	return {
		ok: true,
		json: async () => ({
			data: {
				search: {
					nodes: nodes.map((node) => ({
						id: `gid://shopify/Product/${node.id}`,
						priceRange: {
							minVariantPrice: { amount: String(node.price) },
						},
						compareAtPriceRange: {
							maxVariantPrice: { amount: String(node.msrp) },
						},
					})),
				},
			},
		}),
	} as Response;
};

describe('shopify/pluginShopifyMarketsPricing', () => {
	beforeEach(() => {
		jest.resetAllMocks();

		// @ts-ignore
		window.Shopify = {
			shop: 'unit-test-shop.myshopify.com',
			country: 'US',
			currency: {
				active: 'CAD',
			},
		};
	});

	it('fetches localized prices, updates mappings.core values, and sets priceFetched', async () => {
		const fetchMock = jest.fn().mockResolvedValue(makeFetchResponse([{ id: '123', price: 12, msrp: 20 }]));
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '123',
					price: 5,
					msrp: 10,
				},
			},
			custom: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(productResult.mappings.core.price).toBe(12);
		expect(productResult.mappings.core.msrp).toBe(20);
		expect(productResult.custom.priceFetched).toBe(true);

		const customStore = controller.store.custom as any;
		expect(customStore.graphQLData.priceCache['123']).toEqual({
			price: 12,
			msrp: 20,
		});
	});

	it('does not fetch when active currency matches base currency and still sets priceFetched', async () => {
		// @ts-ignore
		window.Shopify.currency.active = 'USD';

		const fetchMock = jest.fn();
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '999',
					price: 30,
				},
			},
			custom: {},
		};

		const bannerResult: MockResult = {
			type: 'banner',
			mappings: { core: {} },
			custom: {},
		};

		const controller = createController([productResult, bannerResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		expect(fetchMock).not.toHaveBeenCalled();
		expect(productResult.custom.priceFetched).toBe(true);
		expect(bannerResult.custom.priceFetched).toBeUndefined();
	});

	it('reuses cached prices on subsequent afterStore runs', async () => {
		const fetchMock = jest.fn().mockResolvedValue(makeFetchResponse([{ id: '456', price: 22, msrp: 40 }]));
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '456',
					price: 9,
				},
			},
			custom: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();
		await (controller as any).runAfterStore();

		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(productResult.mappings.core.price).toBe(22);
		expect(productResult.mappings.core.msrp).toBe(40);
		expect(productResult.custom.priceFetched).toBe(true);
	});

	it('does not prepend https when baseUrl already includes protocol', async () => {
		const fetchMock = jest.fn().mockResolvedValue(makeFetchResponse([{ id: '123', price: 12, msrp: 20 }]));
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '123',
					price: 5,
				},
			},
			custom: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
			baseUrl: 'https://custom-shop.myshopify.com',
			path: '/api/2025-04/graphql.json',
		});

		await (controller as any).runAfterStore();

		expect(fetchMock).toHaveBeenCalledWith('https://custom-shop.myshopify.com/api/2025-04/graphql.json', expect.any(Object));
	});
});
