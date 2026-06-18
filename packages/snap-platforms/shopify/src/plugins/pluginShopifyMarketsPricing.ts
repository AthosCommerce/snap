import { AbstractController, AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import { Product } from '@athoscommerce/snap-store-mobx';
import { AbstractPluginConfig } from '../../../common/src/types';

export type PluginShopifyMarketsPricingConfig = AbstractPluginConfig & ShopifyMarketsPricingConfig;

export const SHOPIFY_GRAPHQL_API_PATH = '/api/2025-04/graphql.json';

export type ShopifyMarketsPricingConfig = {
	token: string;
	baseUrl?: string;
	path?: string;
	baseCurrency?: string;
};

type ShopifyMarketsPrice = {
	amount: string;
};

type ShopifyMarketsProductNode = {
	id: string;
	priceRange: {
		minVariantPrice: ShopifyMarketsPrice;
	};
	compareAtPriceRange: {
		maxVariantPrice: ShopifyMarketsPrice;
	};
	[key: string]: unknown;
};

type ShopifyMarketsGraphQLResponse = {
	data?: {
		search?: {
			nodes?: ShopifyMarketsProductNode[];
		};
	};
	errors?: Array<{ message: string; [key: string]: unknown }>;
	[key: string]: unknown;
};

type GraphQLPriceCacheEntry = {
	price?: number;
	msrp?: number;
	[key: string]: unknown;
};

type GraphQLPriceCache = Record<string, GraphQLPriceCacheEntry>;

// TODO: Can this be typed better to maintain the existing type of controller.store.custom and be extended to include graphQLData?
type StoreCustomData = {
	graphQLData?: {
		priceCache: GraphQLPriceCache;
	};
	[key: string]: unknown;
};

type ShopifyObj = {
	shop: string;
	country?: string;
	currency?: {
		active?: string;
	};
	[key: string]: unknown;
};

const markResultsAsPriceFetched = (results: Array<{ type: string; custom?: Record<string, unknown> }>) => {
	results.forEach((result) => {
		if (result.type !== 'banner') {
			result.custom = {
				...result.custom,
				priceFetched: true,
			};
		}
	});
};

export const pluginShopifyMarketsPricing = (cntrlr: AbstractController, config: PluginShopifyMarketsPricingConfig) => {
	const controller = cntrlr;
	const shopify = window?.Shopify as ShopifyObj;
	const { token, baseCurrency = 'USD' } = config;

	const baseUrl = config.baseUrl || shopify?.shop || window?.location?.host;
	const path = config.path || SHOPIFY_GRAPHQL_API_PATH;

	const hasProtocol = /^https?:\/\//i.test(baseUrl);
	const normalizedBaseUrl = hasProtocol ? baseUrl : `https://${baseUrl}`;

	const endpoint = `${normalizedBaseUrl}${path}`;

	// Dynamically build query in context of currently selected region/country
	const buildQuery = (): string => {
		const country = shopify?.country || 'US';

		return `query ($query: String!) @inContext(country: ${country}) {
			search (first: 250, query: $query) {
				nodes {
					... on Product {
						id
						priceRange {
							maxVariantPrice { amount }
							minVariantPrice { amount }
						}
						compareAtPriceRange {
							maxVariantPrice { amount }
							minVariantPrice { amount }
						}
					} 
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
		}`;
	};

	// Build query of products data we would like to retrieve
	const buildProductIdQuery = (productIds: Array<string | number>): string => {
		return productIds.map((productId) => `id:${productId}`).join(' OR ');
	};

	// Make a request to the storefront API to retrieve product data
	const fetchMarketsData = async (productIds: Array<string | number>): Promise<ShopifyMarketsGraphQLResponse | null> => {
		if (productIds.length === 0) {
			return null;
		}

		const requestBody = {
			query: buildQuery(),
			variables: {
				query: buildProductIdQuery(productIds),
			},
		};

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': token,
			},
			body: JSON.stringify(requestBody),
		});

		if (!response.ok) {
			const responseText = await response.text();
			throw new Error(`Shopify GraphQL HTTP ${response.status}: ${responseText}`);
		}

		const json = (await response.json()) as ShopifyMarketsGraphQLResponse;

		if (json?.errors?.length) {
			throw new Error(`query errors: ${JSON.stringify(json.errors)}`);
		}

		return json;
	};

	// Re-format data from Storefront API response into a more manageable format
	const formatMarketsData = (productData: ShopifyMarketsProductNode[]): GraphQLPriceCache => {
		return productData.reduce((formattedData: GraphQLPriceCache, currentProduct) => {
			const id = currentProduct.id.replace('gid://shopify/Product/', '');
			const msrp = Number(currentProduct.compareAtPriceRange.maxVariantPrice.amount);
			const price = Number(currentProduct.priceRange.minVariantPrice.amount);

			if (!formattedData[id]) {
				formattedData[id] = {
					price: Number.isFinite(price) ? price : 0,
					msrp: Number.isFinite(msrp) ? msrp : 0,
				};
			}

			return formattedData;
		}, {});
	};

	type InitializedStoreCustomData = StoreCustomData & {
		graphQLData: {
			priceCache: GraphQLPriceCache;
		};
	};

	// Configures typed graphQL cache object that we can reference throughout file
	// TODO: How to specify types for properties added in store.custom in cleaner way?
	const getTypedCustomStore = (currentController: AbstractController): InitializedStoreCustomData => {
		const customStore = (currentController.store.custom || {}) as StoreCustomData;
		if (!customStore.graphQLData) {
			customStore.graphQLData = { priceCache: {} };
		} else if (!customStore.graphQLData.priceCache) {
			customStore.graphQLData.priceCache = {};
		}

		const initializedCustomStore = customStore as InitializedStoreCustomData;
		currentController.store.custom = initializedCustomStore;
		return initializedCustomStore;
	};

	// Set up graphQL cache object in store.custom
	getTypedCustomStore(controller);

	controller.on('afterStore', async ({ controller }: { controller: SearchController | AutocompleteController | RecommendationController }, next) => {
		try {
			const { results } = controller.store;
			const customStore = getTypedCustomStore(controller);
			const existingPriceCache = customStore.graphQLData.priceCache;
			const activeCurrency = shopify?.currency?.active?.toUpperCase();
			const normalizedBaseCurrency = baseCurrency.toUpperCase();
			const shouldFetchPrices = !!activeCurrency && activeCurrency !== normalizedBaseCurrency;
			const products: Product[] = results.filter((result) => result.type !== 'banner') as Product[];

			if (products.length > 0) {
				if (shouldFetchPrices) {
					// Grab productIds of products we need pricing data for
					const productIds = Array.from(
						new Set(
							products.map((result) => {
								const parentId = result?.mappings?.core?.parentId;

								if (parentId !== null && typeof parentId !== 'undefined' && parentId !== '') {
									return parentId;
								}

								return null;
							})
						)
					);

					if (productIds.length > 0) {
						// Determine products without cached pricing data
						const uncachedIds = productIds.filter((productId) => !existingPriceCache[String(productId)] && productId !== null) as string[];
						let mergedPriceCache: GraphQLPriceCache = { ...existingPriceCache };

						// Fetch prices and update cache to reflect latest data
						if (uncachedIds.length > 0) {
							const productData = await fetchMarketsData(uncachedIds);

							if (productData?.data?.search?.nodes?.length) {
								const formattedProductData = formatMarketsData(productData.data.search.nodes);
								mergedPriceCache = {
									...mergedPriceCache,
									...formattedProductData,
								};
							}
						}

						// Update store with new cache
						customStore.graphQLData.priceCache = mergedPriceCache;

						// Update prices displayed for products
						products.forEach((result) => {
							const parentId = result.mappings.core?.parentId;
							if (!parentId) return;

							const cachedData = customStore.graphQLData.priceCache[parentId];

							if (cachedData) {
								const { price, msrp } = cachedData;

								if (typeof price === 'number') {
									if (result.mappings.core) {
										result.mappings.core.price = price;
									}
								}

								if (msrp || msrp === 0) {
									if (result.mappings.core) {
										result.mappings.core.msrp = msrp;
									}
								}
							}

							// Update flag to signal prices have been retrieved and are ready for display
							result.custom = {
								...result.custom,
								priceFetched: true,
							};
						});
					} else {
						controller.log.warn('[shopifyMarkets] No product IDs found in results.');
						markResultsAsPriceFetched(results);
					}
				} else {
					// Update flag to signal that prices can be displayed immediately when no fetching required
					markResultsAsPriceFetched(results);
				}
			}
		} catch (error) {
			controller.log.warn('[shopifyMarkets] Request failed:', error);
			markResultsAsPriceFetched(controller.store.results);
		}

		await next();
	});
};
