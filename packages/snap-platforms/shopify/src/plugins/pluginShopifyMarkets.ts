import { AbstractController, AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import { Product, SearchResultStore } from '@athoscommerce/snap-store-mobx';

import type { QuickviewObj } from '@athoscommerce/snap-controller';
import { AbstractPluginConfig } from '../../../common/src/types';

export type PluginShopifyMarketsConfig = Omit<AbstractPluginConfig, 'enabled'> & ShopifyMarketsConfig;

export const SHOPIFY_GRAPHQL_API_PATH = '/api/2026-07/graphql.json';

export type ShopifyMarketsConfig = {
	token: string;
	baseUrl?: string;
	path?: string;
	baseCountry?: ShopifyCountryCode;
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
		pageInfo?: {
			hasNextPage: boolean;
			endCursor: string | null;
		};
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
			(result as Product).state.priceFetched = true;
		}
	});
};

export const pluginShopifyMarkets = (cntrlr: AbstractController, config: PluginShopifyMarketsConfig) => {
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
	const { token, baseCountry = 'US', idFieldName = 'mappings.core.uid' } = config;

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
							pageInfo {
								hasNextPage
								endCursor
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

	// Fetch remaining variant pages for a product that has more than 250 variants
	const fetchRemainingVariants = async (productGid: string, initialCursor: string): Promise<ShopifyMarketsVariantNode[]> => {
		const allVariants: ShopifyMarketsVariantNode[] = [];
		let cursor: string | null = initialCursor;

		while (cursor) {
			const country = shopify?.country || 'US';
			const response: Response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Shopify-Storefront-Access-Token': token,
				},
				body: JSON.stringify({
					query: `query @inContext(country: ${country}) {
						product(id: "${productGid}") {
							variants(first: 250, after: "${cursor}") {
								nodes {
									id
									price { amount }
									compareAtPrice { amount }
								}
								pageInfo {
									hasNextPage
									endCursor
								}
							}
						}
					}`,
				}),
			});

			if (!response.ok) break;

			const json = await response.json();
			const variants = json?.data?.product?.variants;

			if (variants?.nodes?.length) {
				allVariants.push(...variants.nodes);
			}

			cursor = variants?.pageInfo?.hasNextPage ? variants.pageInfo.endCursor : null;
		}

		return allVariants;
	};

	// Re-format data from Storefront API response into a more manageable format, paginating variants as needed
	const formatMarketsData = async (productData: ShopifyMarketsProductNode[]): Promise<GraphQLPriceCache> => {
		const formattedData: GraphQLPriceCache = Object.create(null);

		for (const currentProduct of productData) {
			const id = currentProduct.id.replace('gid://shopify/Product/', '');
			if (formattedData[id]) continue;

			const msrp = Number(currentProduct.compareAtPriceRange.maxVariantPrice.amount);
			const price = Number(currentProduct.priceRange.minVariantPrice.amount);

			const entry: GraphQLPriceCacheEntry = {
				price: Number.isFinite(price) ? price : 0,
				msrp: Number.isFinite(msrp) ? msrp : 0,
			};

			// Collect all variant nodes, paginating if the product has more than 250
			let allVariantNodes = currentProduct.variants?.nodes || [];

			if (currentProduct.variants?.pageInfo?.hasNextPage && currentProduct.variants.pageInfo.endCursor) {
				const remaining = await fetchRemainingVariants(currentProduct.id, currentProduct.variants.pageInfo.endCursor);
				allVariantNodes = [...allVariantNodes, ...remaining];
			}

			// Extract variant-level pricing
			if (allVariantNodes.length) {
				entry.variants = {};
				for (const variantNode of allVariantNodes) {
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
	};

	// In-memory cache for GraphQL pricing data, scoped to this plugin instance and segmented per country,
	// — two countries can share a currency while still pricing products differently
	const priceCachesByCountry: Record<string, GraphQLPriceCache> = Object.create(null);

	const getActiveCache = (): GraphQLPriceCache => {
		const country = (shopify?.country || baseCountry).toUpperCase();
		if (!priceCachesByCountry[country]) {
			priceCachesByCountry[country] = Object.create(null);
		}
		return priceCachesByCountry[country];
	};

	// Prices only need fetching when the shopper's country differs from the base country
	const shouldFetchPrices = (): boolean => {
		const activeCountry = shopify?.country?.toUpperCase();
		return !!activeCountry && activeCountry !== baseCountry.toUpperCase();
	};

	const getParentId = (result: Product): string | undefined => {
		const parentId = result?.mappings?.core?.parentId;

		if (parentId !== null && typeof parentId !== 'undefined' && parentId !== '') {
			return parentId;
		}

		return undefined;
	};

	// Fetch pricing data for any parentIds missing from the active market's cache and merge it in
	const ensurePricesCached = async (parentIds: string[]): Promise<void> => {
		const cache = getActiveCache();
		const uncachedIds = parentIds.filter((parentId) => !cache[parentId]);

		if (uncachedIds.length > 0) {
			const productData = await fetchMarketsData(uncachedIds);

			if (productData?.data?.search?.nodes?.length) {
				const formattedProductData = await formatMarketsData(productData.data.search.nodes);
				Object.assign(cache, formattedProductData);
			}
		}
	};

	// Apply cached product and variant level pricing, then flag the product as ready for display
	const applyCachedPrices = (result: Product): void => {
		const parentId = getParentId(result);
		if (!parentId) return;

		const cachedData = getActiveCache()[parentId];

		if (cachedData) {
			const { price, msrp } = cachedData;

			if (typeof price === 'number' && result.mappings.core) {
				result.mappings.core.price = price;
			}

			if (typeof msrp === 'number' && result.mappings.core) {
				result.mappings.core.msrp = msrp;
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
		result.state.priceFetched = true;
	};

	// Fetch (as needed) and apply localized pricing for the given products
	const updateProductPricing = async (
		products: Product[],
		controller: SearchController | AutocompleteController | RecommendationController
	): Promise<void> => {
		if (products.length === 0) return;

		if (!shouldFetchPrices()) {
			// Update flag to signal that prices can be displayed immediately when no fetching required
			markResultsAsPriceFetched(products);
			return;
		}

		// Grab productIds of products we need pricing data for
		const productIds = Array.from(new Set(products.map(getParentId).filter((id): id is string => !!id)));

		if (productIds.length === 0) {
			controller.log.warn('[shopifyMarkets] No product IDs found in results.');
			markResultsAsPriceFetched(products);
			return;
		}

		await ensurePricesCached(productIds);

		products.forEach(applyCachedPrices);
	};

	cntrlr.on('afterStore', async ({ controller }: { controller: SearchController | AutocompleteController | RecommendationController }, next) => {
		try {
			const { results } = controller.store;
			const products: Product[] = results.filter((result) => result.type !== 'banner') as Product[];

			await updateProductPricing(products, controller);
		} catch (error) {
			controller.log.warn('[shopifyMarkets] Request failed:', error);
			markResultsAsPriceFetched(controller.store.results);
		}

		await next();
	});

	cntrlr.on('quickview', async ({ controller }: QuickviewObj, next) => {
		// The quickview modal displays the manager's (cloned) product, whose variants were just
		// repopulated from /v1/products in base currency — so pricing must be re-applied to it
		const product = controller.quickviewManager?.store?.product;
		if (product) {
			try {
				await updateProductPricing([product], controller);
			} catch (error) {
				controller.log.warn('[shopifyMarkets] Quickview request failed:', error);
				markResultsAsPriceFetched([product]);
			}
		}
		await next();
	});
};

// Shopify's CountryCode enum (shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode) — mostly ISO 3166-1
// alpha-2, but with Shopify-specific additions ('XK' Kosovo, 'AN' Netherlands Antilles, 'AC'/'TA', 'ZZ' Rest of World)
// and some ISO codes omitted where Shopify has no corresponding market
export type ShopifyCountryCode =
	| 'AC'
	| 'AD'
	| 'AE'
	| 'AF'
	| 'AG'
	| 'AI'
	| 'AL'
	| 'AM'
	| 'AN'
	| 'AO'
	| 'AR'
	| 'AT'
	| 'AU'
	| 'AW'
	| 'AX'
	| 'AZ'
	| 'BA'
	| 'BB'
	| 'BD'
	| 'BE'
	| 'BF'
	| 'BG'
	| 'BH'
	| 'BI'
	| 'BJ'
	| 'BL'
	| 'BM'
	| 'BN'
	| 'BO'
	| 'BQ'
	| 'BR'
	| 'BS'
	| 'BT'
	| 'BV'
	| 'BW'
	| 'BY'
	| 'BZ'
	| 'CA'
	| 'CC'
	| 'CD'
	| 'CF'
	| 'CG'
	| 'CH'
	| 'CI'
	| 'CK'
	| 'CL'
	| 'CM'
	| 'CN'
	| 'CO'
	| 'CR'
	| 'CU'
	| 'CV'
	| 'CW'
	| 'CX'
	| 'CY'
	| 'CZ'
	| 'DE'
	| 'DJ'
	| 'DK'
	| 'DM'
	| 'DO'
	| 'DZ'
	| 'EC'
	| 'EE'
	| 'EG'
	| 'EH'
	| 'ER'
	| 'ES'
	| 'ET'
	| 'FI'
	| 'FJ'
	| 'FK'
	| 'FO'
	| 'FR'
	| 'GA'
	| 'GB'
	| 'GD'
	| 'GE'
	| 'GF'
	| 'GG'
	| 'GH'
	| 'GI'
	| 'GL'
	| 'GM'
	| 'GN'
	| 'GP'
	| 'GQ'
	| 'GR'
	| 'GS'
	| 'GT'
	| 'GW'
	| 'GY'
	| 'HK'
	| 'HM'
	| 'HN'
	| 'HR'
	| 'HT'
	| 'HU'
	| 'ID'
	| 'IE'
	| 'IL'
	| 'IM'
	| 'IN'
	| 'IO'
	| 'IQ'
	| 'IR'
	| 'IS'
	| 'IT'
	| 'JE'
	| 'JM'
	| 'JO'
	| 'JP'
	| 'KE'
	| 'KG'
	| 'KH'
	| 'KI'
	| 'KM'
	| 'KN'
	| 'KP'
	| 'KR'
	| 'KW'
	| 'KY'
	| 'KZ'
	| 'LA'
	| 'LB'
	| 'LC'
	| 'LI'
	| 'LK'
	| 'LR'
	| 'LS'
	| 'LT'
	| 'LU'
	| 'LV'
	| 'LY'
	| 'MA'
	| 'MC'
	| 'MD'
	| 'ME'
	| 'MF'
	| 'MG'
	| 'MK'
	| 'ML'
	| 'MM'
	| 'MN'
	| 'MO'
	| 'MQ'
	| 'MR'
	| 'MS'
	| 'MT'
	| 'MU'
	| 'MV'
	| 'MW'
	| 'MX'
	| 'MY'
	| 'MZ'
	| 'NA'
	| 'NC'
	| 'NE'
	| 'NF'
	| 'NG'
	| 'NI'
	| 'NL'
	| 'NO'
	| 'NP'
	| 'NR'
	| 'NU'
	| 'NZ'
	| 'OM'
	| 'PA'
	| 'PE'
	| 'PF'
	| 'PG'
	| 'PH'
	| 'PK'
	| 'PL'
	| 'PM'
	| 'PN'
	| 'PS'
	| 'PT'
	| 'PY'
	| 'QA'
	| 'RE'
	| 'RO'
	| 'RS'
	| 'RU'
	| 'RW'
	| 'SA'
	| 'SB'
	| 'SC'
	| 'SD'
	| 'SE'
	| 'SG'
	| 'SH'
	| 'SI'
	| 'SJ'
	| 'SK'
	| 'SL'
	| 'SM'
	| 'SN'
	| 'SO'
	| 'SR'
	| 'SS'
	| 'ST'
	| 'SV'
	| 'SX'
	| 'SY'
	| 'SZ'
	| 'TA'
	| 'TC'
	| 'TD'
	| 'TF'
	| 'TG'
	| 'TH'
	| 'TJ'
	| 'TK'
	| 'TL'
	| 'TM'
	| 'TN'
	| 'TO'
	| 'TR'
	| 'TT'
	| 'TV'
	| 'TW'
	| 'TZ'
	| 'UA'
	| 'UG'
	| 'UM'
	| 'US'
	| 'UY'
	| 'UZ'
	| 'VA'
	| 'VC'
	| 'VE'
	| 'VG'
	| 'VN'
	| 'VU'
	| 'WF'
	| 'WS'
	| 'XK'
	| 'YE'
	| 'YT'
	| 'ZA'
	| 'ZM'
	| 'ZW'
	| 'ZZ';
