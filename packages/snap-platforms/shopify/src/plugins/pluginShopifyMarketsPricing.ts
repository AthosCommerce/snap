import { AbstractController, AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import { Product, SearchResultStore } from '@athoscommerce/snap-store-mobx';
import { AbstractPluginConfig } from '../../../common/src/types';

export type PluginShopifyMarketsPricingConfig = Omit<AbstractPluginConfig, 'enabled'> & ShopifyMarketsPricingConfig;

export const SHOPIFY_GRAPHQL_API_PATH = '/api/2025-04/graphql.json';

export type ShopifyMarketsPricingConfig = {
	token: string;
	baseUrl?: string;
	path?: string;
	baseCurrency?: string;
	idFieldName?: string;
};

type ShopifyMarketsVariantNode = {
	id: string;
	price: {
		amount: string;
	};
	compareAtPrice: {
		amount: string;
	} | null;
};

type ShopifyMarketsProductNode = {
	id: string;
	priceRange: {
		minVariantPrice: {
			amount: string;
		};
	};
	compareAtPriceRange: {
		maxVariantPrice: {
			amount: string;
		};
	};
	variants?: {
		nodes?: ShopifyMarketsVariantNode[];
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

type GraphQLVariantPriceCacheEntry = {
	price?: number;
	msrp?: number;
};

type GraphQLPriceCacheEntry = {
	price?: number;
	msrp?: number;
	variants?: Record<string, GraphQLVariantPriceCacheEntry>;
	[key: string]: unknown;
};

type GraphQLPriceCache = Record<string, GraphQLPriceCacheEntry>;

type StoreStateData = {
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

const markResultsAsPriceFetched = (results: Product[] | SearchResultStore) => {
	results.forEach((result) => {
		if (result.type !== 'banner') {
			result.state = {
				...result.state,
				priceFetched: true,
			};
		}
	});
};

export const pluginShopifyMarketsPricing = (cntrlr: AbstractController, config: PluginShopifyMarketsPricingConfig) => {
	if (!config?.token) {
		cntrlr.log?.warn?.('[shopifyMarkets] Missing required `token` in plugin config.');
		return;
	} else {
		cntrlr.setConfig({
			...cntrlr.config,
			asyncState: { ...cntrlr.config.asyncState, product: { ...cntrlr.config.asyncState?.product, price: true } },
		});
	}

	const shopify = window?.Shopify as ShopifyObj;
	const { token, baseCurrency = 'USD', idFieldName = 'mappings.core.uid' } = config;

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
						variants(first: 250) {
							nodes {
								id
								price { amount }
								compareAtPrice { amount }
							}
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
				const entry: GraphQLPriceCacheEntry = {
					price: Number.isFinite(price) ? price : 0,
					msrp: Number.isFinite(msrp) ? msrp : 0,
				};

				// Extract variant-level pricing
				if (currentProduct.variants?.nodes?.length) {
					entry.variants = {};
					for (const variantNode of currentProduct.variants.nodes) {
						const variantId = variantNode.id.replace('gid://shopify/ProductVariant/', '');
						const variantPrice = Number(variantNode.price.amount);
						const variantMsrp = variantNode.compareAtPrice ? Number(variantNode.compareAtPrice.amount) : 0;

						entry.variants[variantId] = {
							price: Number.isFinite(variantPrice) ? variantPrice : 0,
							msrp: Number.isFinite(variantMsrp) ? variantMsrp : 0,
						};
					}
				}

				formattedData[id] = entry;
			}

			return formattedData;
		}, {});
	};

	// Configures typed graphQL cache object that we can reference throughout file
	const getTypedStateStore = (currentController: AbstractController): StoreStateData => {
		const stateStore = (currentController.store.derivedState || {}) as StoreStateData;
		if (!stateStore.graphQLData) {
			stateStore.graphQLData = { priceCache: {} };
		} else if (!stateStore.graphQLData.priceCache) {
			stateStore.graphQLData.priceCache = {};
		}

		const initializedStateStore = stateStore as StoreStateData;
		currentController.store.derivedState = initializedStateStore;
		return initializedStateStore;
	};

	// Set up graphQL cache object in store.derivedState
	getTypedStateStore(cntrlr);

	cntrlr.on('afterStore', async ({ controller }: { controller: SearchController | AutocompleteController | RecommendationController }, next) => {
		try {
			const { results } = controller.store;
			const stateStore = getTypedStateStore(controller);
			const existingPriceCache = stateStore.graphQLData?.priceCache;
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
						const uncachedIds = productIds.filter((productId) => !existingPriceCache?.[String(productId)] && productId !== null) as string[];
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
						if (stateStore.graphQLData) {
							stateStore.graphQLData.priceCache = mergedPriceCache;
						}

						// Update prices displayed for products
						products.forEach((result) => {
							const parentId = result.mappings.core?.parentId;
							if (!parentId) return;

							const cachedData = stateStore.graphQLData?.priceCache[parentId];

							if (cachedData) {
								const { price, msrp } = cachedData;

								if (typeof price === 'number') {
									if (result.mappings.core) {
										result.mappings.core.price = price;
									}
								}

								if (typeof msrp === 'number') {
									if (result.mappings.core) {
										result.mappings.core.msrp = msrp;
									}
								}

								// Update variant prices
								if (cachedData.variants && result.variants?.data?.length) {
									for (const variant of result.variants.data) {
										let variantUid: string | undefined;
										let level: any = variant;
										for (const field of idFieldName.split('.')) {
											level = level?.[field];
										}
										if (level != null) {
											variantUid = String(level);
										}
										if (!variantUid) continue;

										const variantCachedData = cachedData.variants[variantUid];
										if (variantCachedData) {
											if (typeof variantCachedData.price === 'number' && variant.mappings.core) {
												variant.mappings.core.price = variantCachedData.price;
											}
											if ((variantCachedData.msrp || variantCachedData.msrp === 0) && variant.mappings.core) {
												variant.mappings.core.msrp = variantCachedData.msrp;
											}
										}
									}
								}
							}

							// Update flag to signal prices have been retrieved and are ready for display
							result.state = {
								...result.state,
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
