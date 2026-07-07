import { pluginShopifyMarketsPricing } from './pluginShopifyMarketsPricing';

type MockVariant = {
	mappings: {
		core: {
			uid?: string;
			price?: number;
			msrp?: number;
		};
	};
};

type MockResult = {
	type: string;
	mappings: {
		core: {
			parentId?: string;
			price?: number;
			msrp?: number;
		};
	};
	variants?: {
		data: MockVariant[];
	};
	state: Record<string, unknown>;
};

type MockController = {
	config: Record<string, unknown>;
	setConfig: (newConfig: Record<string, unknown>) => void;
	store: {
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
		config: {},
		setConfig(newConfig: Record<string, unknown>) {
			this.config = newConfig;
		},
		store: {
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

const makeFetchResponse = (
	nodes: Array<{ id: string; price: number; msrp: number; variants?: Array<{ id: string; price: number; msrp: number }> }>
) => {
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
						...(node.variants
							? {
									variants: {
										nodes: node.variants.map((v) => ({
											id: `gid://shopify/ProductVariant/${v.id}`,
											price: { amount: String(v.price) },
											compareAtPrice: v.msrp ? { amount: String(v.msrp) } : null,
										})),
									},
							  }
							: {}),
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
			state: {},
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
		expect(productResult.state.priceFetched).toBe(true);
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
			state: {},
		};

		const bannerResult: MockResult = {
			type: 'banner',
			mappings: { core: {} },
			state: {},
		};

		const controller = createController([productResult, bannerResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		expect(fetchMock).not.toHaveBeenCalled();
		expect(productResult.state.priceFetched).toBe(true);
		expect(bannerResult.state.priceFetched).toBeUndefined();
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
			state: {},
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
		expect(productResult.state.priceFetched).toBe(true);
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
			state: {},
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

	it('fetches and applies variant-level pricing', async () => {
		const fetchMock = jest.fn().mockResolvedValue(
			makeFetchResponse([
				{
					id: '123',
					price: 12,
					msrp: 20,
					variants: [
						{ id: '1001', price: 12, msrp: 20 },
						{ id: '1002', price: 15, msrp: 25 },
					],
				},
			])
		);
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
			variants: {
				data: [{ mappings: { core: { uid: '1001', price: 5, msrp: 10 } } }, { mappings: { core: { uid: '1002', price: 7, msrp: 14 } } }],
			},
			state: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		expect(productResult.mappings.core.price).toBe(12);
		expect(productResult.mappings.core.msrp).toBe(20);
		expect(productResult.variants!.data[0].mappings.core.price).toBe(12);
		expect(productResult.variants!.data[0].mappings.core.msrp).toBe(20);
		expect(productResult.variants!.data[1].mappings.core.price).toBe(15);
		expect(productResult.variants!.data[1].mappings.core.msrp).toBe(25);
		expect(productResult.state.priceFetched).toBe(true);
	});

	it('handles variants with null compareAtPrice', async () => {
		const fetchMock = jest.fn().mockResolvedValue(
			makeFetchResponse([
				{
					id: '456',
					price: 30,
					msrp: 0,
					variants: [{ id: '2001', price: 30, msrp: 0 }],
				},
			])
		);
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '456',
					price: 20,
				},
			},
			variants: {
				data: [{ mappings: { core: { uid: '2001', price: 20, msrp: 0 } } }],
			},
			state: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		expect(productResult.variants!.data[0].mappings.core.price).toBe(30);
		expect(productResult.variants!.data[0].mappings.core.msrp).toBe(0);
	});

	it('skips variants without a uid', async () => {
		const fetchMock = jest.fn().mockResolvedValue(
			makeFetchResponse([
				{
					id: '789',
					price: 10,
					msrp: 15,
					variants: [{ id: '3001', price: 10, msrp: 15 }],
				},
			])
		);
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '789',
					price: 5,
				},
			},
			variants: {
				data: [{ mappings: { core: { price: 5, msrp: 8 } } }],
			},
			state: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		// Product price should update but variant without uid should be unchanged
		expect(productResult.mappings.core.price).toBe(10);
		expect(productResult.variants!.data[0].mappings.core.price).toBe(5);
	});

	it('uses idFieldName to resolve variant ID from a custom field path', async () => {
		const fetchMock = jest.fn().mockResolvedValue(
			makeFetchResponse([
				{
					id: '123',
					price: 12,
					msrp: 20,
					variants: [
						{ id: '5001', price: 18, msrp: 30 },
						{ id: '5002', price: 22, msrp: 35 },
					],
				},
			])
		);
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
			variants: {
				data: [
					{ mappings: { core: { uid: 'wrong-id', price: 5, msrp: 10 } }, attributes: { shopifyVariantId: '5001' } } as any,
					{ mappings: { core: { uid: 'wrong-id-2', price: 7, msrp: 14 } }, attributes: { shopifyVariantId: '5002' } } as any,
				],
			},
			state: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
			idFieldName: 'attributes.shopifyVariantId',
		});

		await (controller as any).runAfterStore();

		// Should match using the custom field path instead of mappings.core.uid
		expect(productResult.variants!.data[0].mappings.core.price).toBe(18);
		expect(productResult.variants!.data[0].mappings.core.msrp).toBe(30);
		expect(productResult.variants!.data[1].mappings.core.price).toBe(22);
		expect(productResult.variants!.data[1].mappings.core.msrp).toBe(35);
	});

	it('falls back to default mappings.core.uid when idFieldName is not provided', async () => {
		const fetchMock = jest.fn().mockResolvedValue(
			makeFetchResponse([
				{
					id: '123',
					price: 12,
					msrp: 20,
					variants: [{ id: '9001', price: 50, msrp: 60 }],
				},
			])
		);
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
			variants: {
				data: [{ mappings: { core: { uid: '9001', price: 5, msrp: 10 } } }],
			},
			state: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
			// no idFieldName — should default to mappings.core.uid
		});

		await (controller as any).runAfterStore();

		expect(productResult.variants!.data[0].mappings.core.price).toBe(50);
		expect(productResult.variants!.data[0].mappings.core.msrp).toBe(60);
	});

	it('paginates variants when product has more than one page', async () => {
		const firstPageVariants = [
			{ id: '1001', price: 10, msrp: 20 },
			{ id: '1002', price: 11, msrp: 21 },
		];
		const secondPageVariants = [
			{
				id: `gid://shopify/ProductVariant/1003`,
				price: { amount: '12' },
				compareAtPrice: { amount: '22' },
			},
			{
				id: `gid://shopify/ProductVariant/1004`,
				price: { amount: '13' },
				compareAtPrice: { amount: '23' },
			},
		];

		// First call: search response with hasNextPage on variants
		const searchResponse = {
			ok: true,
			json: async () => ({
				data: {
					search: {
						nodes: [
							{
								id: 'gid://shopify/Product/500',
								priceRange: { minVariantPrice: { amount: '10' } },
								compareAtPriceRange: { maxVariantPrice: { amount: '20' } },
								variants: {
									nodes: firstPageVariants.map((v) => ({
										id: `gid://shopify/ProductVariant/${v.id}`,
										price: { amount: String(v.price) },
										compareAtPrice: { amount: String(v.msrp) },
									})),
									pageInfo: {
										hasNextPage: true,
										endCursor: 'cursor-abc',
									},
								},
							},
						],
					},
				},
			}),
		} as Response;

		// Second call: variant pagination response
		const variantPaginationResponse = {
			ok: true,
			json: async () => ({
				data: {
					product: {
						variants: {
							nodes: secondPageVariants,
							pageInfo: {
								hasNextPage: false,
								endCursor: null,
							},
						},
					},
				},
			}),
		} as Response;

		const fetchMock = jest.fn().mockResolvedValueOnce(searchResponse).mockResolvedValueOnce(variantPaginationResponse);
		(global as any).fetch = fetchMock;

		const productResult: MockResult = {
			type: 'product',
			mappings: {
				core: {
					parentId: '500',
					price: 5,
					msrp: 10,
				},
			},
			variants: {
				data: [
					{ mappings: { core: { uid: '1001', price: 5, msrp: 10 } } },
					{ mappings: { core: { uid: '1002', price: 5, msrp: 10 } } },
					{ mappings: { core: { uid: '1003', price: 5, msrp: 10 } } },
					{ mappings: { core: { uid: '1004', price: 5, msrp: 10 } } },
				],
			},
			state: {},
		};

		const controller = createController([productResult]);

		pluginShopifyMarketsPricing(controller as any, {
			token: 'token',
			baseCurrency: 'USD',
		});

		await (controller as any).runAfterStore();

		expect(fetchMock).toHaveBeenCalledTimes(2);

		// Product-level prices updated
		expect(productResult.mappings.core.price).toBe(10);
		expect(productResult.mappings.core.msrp).toBe(20);

		// First page variants updated
		expect(productResult.variants!.data[0].mappings.core.price).toBe(10);
		expect(productResult.variants!.data[0].mappings.core.msrp).toBe(20);
		expect(productResult.variants!.data[1].mappings.core.price).toBe(11);
		expect(productResult.variants!.data[1].mappings.core.msrp).toBe(21);

		// Second page (paginated) variants updated
		expect(productResult.variants!.data[2].mappings.core.price).toBe(12);
		expect(productResult.variants!.data[2].mappings.core.msrp).toBe(22);
		expect(productResult.variants!.data[3].mappings.core.price).toBe(13);
		expect(productResult.variants!.data[3].mappings.core.msrp).toBe(23);

		expect(productResult.state.priceFetched).toBe(true);
	});
});
