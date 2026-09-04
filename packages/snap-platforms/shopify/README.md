# Shopify Platform
This platform library gives you helper functions and plugins to use with the Shopify platform. 

## Functions

## Usage 
To use the platform library, simply import what you wish to use from `@athoscommerce/snap-platforms/shopify`.

```tsx
import { addToCart } from '@athoscommerce/snap-platforms/shopify';

export const AddToCart = (props) => {
    const { result } = props;
    const config = {
        idFieldName: `display.mappings.core.sku`,
    }

    return (
        <div onClick={() => addToCart([result], config)}>Add To Cart</div>
    )
};
```

## addToCart
The `addToCart` function will automatically add products to the cart and then redirect to the cart page (`/cart`). The function is async, and takes an array of products (Result Store References) to add, and an optional config. The optional config can take two optional properties, `redirect` and `idFieldName`. Snap variants must be enabled for full functionality.

The `redirect` property can be set to `false` or supplied with an alternate redirect URL instead of the default (`/cart`). 

The `idFieldName` property takes a stringified path in the result reference, to look for the product id to add. `display.mappings.core.sku` for example. By default it will use `display.mappings.core.uid`.

> [!IMPORTANT]
> The `Shopify` object needs to be available on the window.

```tsx
import { addToCart } from '@athoscommerce/snap-platforms/shopify';

export const AddToCart = (props) => {
	const { result } = props;
	const config = {
		idFieldName: `display.mappings.core.sku`,
	}

	return (
		<div onClick={() => addToCart([result], config)}>Add To Cart</div>
	)
};
```

## Plugins

### pluginAddToCart
Plugin to attach a custom function to the addToCart controller event.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | configuration to allow for disabling the plugin | boolean | true | ➖ |
| redirect | set to `false` or provide alternate redirect URL | boolean \| string | '/cart' | ➖ |
| idFieldName | field name to use for the product identifier to use when adding product | string | 'display.mappings.core.uid' | ➖ |


```tsx
const addToCartConfig = {
	redirect: false,
	idFieldName: 'display.mappings.core.sku'
}
```

### pluginBackgroundFilters
Plugin to set up background filters for Shopify. Script context is used to automatically apply best practice Shopify background filtering. Background filtering in this plugin only applies to search controllers.

> [!NOTE]
> If you need to customize background filters beyond what is available in the configuration, you will need to utilize the the common backgroundFilters plugin.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | configuration to allow for disabling the plugin | boolean | true | ➖ |
| fieldNames | object used to set custom field names for background filtering | object | ➖ | ➖ |
| fieldNames.collection | name of the field use for collection background filter | string | 'collection_handle' | ➖ |
| fieldNames.tags | name of the field use for tags background filter | string | 'tags' | ➖ |
| fieldNames.vendor | name of the field use for vendor background filter | string | 'vendor' | ➖ |
| fieldNames.type | name of the field use for product type background filter | string | 'product_type' | ➖ |

This plugin relies on specific Shopify script context variables for creating background filters via the integration script context. Collection, types and vendor background filters are supported, in addition to tags (used for additional filtering); special characters will be automatically handled. See the examples below:

Collection Page:
```html
<script id="athos-context" src="bundle.js">
	collection = {
		name : "Test Collection",
		handle : "test-collection",
	};
</script>
```

Collection Page with Tags:
```html
<script id="athos-context" src="bundle.js">
	collection = {
		name : "Test Collection",
		handle : "test-collection",
	};

	tags = ["test", "color:green"];
</script>
```

### pluginMutateResults
Enables updating the URL for products within search results; product URLs will be prefixed with their category route. The platform specific context variable `collection.handle` must be provided for this functionality.

> [!IMPORTANT]
> Requires that the `Shopify` object is available on the window.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| mutations | Shopify results mutations configuration object | object | ➖ | ➖ |
| mutations.collectionInUrl | collection in URL Mutation configuration object | object | ➖ | ➖ |
| mutations.collectionInUrl.enabled | configuration to allow for disabling of the mutation | object | true | ➖ |

```tsx
const mutateResultsConfig = {
	collectionInUrl: {
		enabled: true,
	}
}
...
plugins: {
	shopify: {
		mutateResults: mutateResultsConfig
	}
}
```

### pluginShopifyMarkets

The **Markets plugin** automatically fetches and displays region-specific product pricing from the Shopify Storefront API. It's designed for multi-currency storefronts that use Shopify Markets. When a customer's active currency differs from the store's base currency, the plugin queries the GraphQL API to fetch localized prices and MSRPs, then updates search results dynamically.

The Markets plugin localizes the price *values*. Displaying them correctly also needs the matching currency locale, so configuring `markets` automatically enables [`pluginShopifyCurrency`](#pluginshopifycurrency) — no separate opt in is required. Set `currency.enabled: false` to suppress that if you are formatting prices some other way.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| token | Shopify Storefront Access Token | string | — | ✅ |
| baseCurrency | Your store's base/catalog currency | string | `'USD'` | ➖ |
| baseUrl | Optional override for store URL | string | — | ➖ |
| path | Optional override for GraphQL API path | string | `'/api/2025-04/graphql.json'` | ➖ |
| idFieldName | Dot-notation path on the variant object used to match against Shopify variant IDs | string | `'mappings.core.uid'` | ➖ |

#### Setup

1. Register the plugin in your SnapTemplates config:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
	},
	plugins: {
		shopify: {
			markets: {
				token: 'your-storefront-access-token',
				baseCurrency: 'USD',  // e.g., 'USD', 'EUR', 'GBP'
				idFieldName: 'mappings.core.uid', // optional; use a custom field if variant UIDs don't match Shopify variant IDs
				// baseUrl and path are optional; defaults work for standard Shopify stores
			},
		},
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
});

new SnapTemplates(config);
```

#### How It Works

1. After search results load, the plugin detects if the active currency (`Shopify.currency.active`) differs from `baseCurrency`
2. For uncached products, it fetches localized `priceRange` and `compareAtPriceRange` from Shopify GraphQL
3. Updates `result.mappings.core.price` and `result.mappings.core.msrp` (which in turn updates `result.display`)
4. Sets `result.state.priceFetched = true` when pricing is ready to display
5. Caches results in an in-memory price cache local to the plugin instance to avoid redundant API calls
6. When a quickview is opened, the same localized pricing (product and variant level) is applied to the quickview product — its variants are repopulated from `/v1/products` in the base currency, so the plugin re-applies cached prices (fetching them first if not already cached)

Price *formatting* is not handled by this plugin. Use [`pluginShopifyCurrency`](#pluginshopifycurrency) instead, which applies the correct locale for the active currency. The `format` prop and `theme.overrides.default.price.format` are still supported for bespoke formatting.

#### Using in Your Result Component

Always check the `priceFetched` flag before rendering prices to ensure data has been fetched.

```tsx
import { h, Fragment } from 'preact';
import { observer } from 'mobx-react-lite';
import { Price } from '@athoscommerce/snap-preact/components';

export const CustomResult = observer(({ result, treePath }: ResultProps) => {
	const core = result.display.mappings.core;
	const { priceFetched } = result.state;
	return (
		<article className="product-result">
			<h2>{core?.name}</h2>

			{/* Only render pricing after priceFetched is true */}
			{priceFetched && (
				<div className="pricing">
					{core?.price && core?.msrp && core.price < core.msrp ? (
						<Fragment>
							{/* Show strikethrough MSRP */}
							<Price
								value={core.msrp}
								lineThrough={true}
								treePath={treePath}
							/>
							{/* Show sale price */}
							<Price
								value={core.price}
								treePath={treePath}
								className="sale-price"
							/>
						</Fragment>
					) : (
						<Price
							value={core?.price}
							treePath={treePath}
						/>
					)}
				</div>
			)}
		</article>
	);
});
```

If you want custom formatting behavior, pass your own `format` function to `Price`, or set `theme.overrides.default.price.format` in your template config.
### pluginShopifyCurrency

The **Currency plugin** reads the storefront's active currency from `Shopify.currency.active` and applies it to the Snap Templates currency locale, so the `Price` component's symbol, decimal places and separators follow the market the shopper is browsing in. It pairs with [`pluginShopifyMarkets`](#pluginshopifymarkets), which localizes the price *values* — this plugin localizes how those values are *displayed*.

The currency locales ship with Snap Templates (`Uppercase<CurrencyCodes>`, the ISO 4217 list Shopify supports), so no currency table needs to be defined per site. Each locale carries the `symbol`, `decimalPlaces`, `thousandsSeparator`, `decimalSeparator` and `symbolAfter` for that currency, and the plugin also supplies the ISO code to the `Price` component's `code` prop. Per-site adjustments are made through `theme.overrides.default.price`.

To show the currency code alongside the amount — the equivalent of Shopify's `money_with_currency_format`, useful when several markets share a symbol — enable `showCode`:

```tsx
theme: {
	extends: 'bocachica',
	overrides: {
		default: {
			price: {
				showCode: true, // $1,099.99 USD
			},
		},
	},
}
```

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | Registers the plugin. Required when used on its own, since the plugin overrides `config.currency` — but the [Markets plugin](#pluginshopifymarkets) enables it automatically, and `false` opts back out | boolean | `false` | ➖ |

#### Setup

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
		currency: 'USD', // applied until the plugin resolves the storefront currency, and kept if it can't
	},
	plugins: {
		shopify: {
			currency: {
				enabled: true,
			},
		},
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
});

new SnapTemplates(config);
```

#### How It Works

1. On controller creation, the plugin reads `Shopify.currency.active`
2. If that code is missing or is not one of the supported currencies, the plugin leaves `config.currency` in place and logs a warning
3. `templates.setCurrency(code)` imports the currency locale and applies it to every theme, updating the `Price` component's `symbol`, `decimalPlaces`, `thousandsSeparator` and `decimalSeparator`
4. The currency is only applied once per page load, even though the plugin is attached to every controller

This plugin is the single source of price formatting. A `format` function — passed to `Price` directly or set via `theme.overrides.default.price.format` — still takes precedence over all of it, since the function produces the entire string itself.

#### Pairing with the Markets plugin

The two plugins are halves of one feature, and the dependency runs both ways:

| | Price values | Price display |
|---|---|---|
| Both (recommended) | converted by Markets | matches the converted values |
| Markets only | converted | symbol and separators of `config.currency` — wrong currency shown |
| Currency only | **not** converted, still base currency | symbol of the shopper's market — wrong currency shown |

Because of that, configuring `markets` turns this plugin on for you. Enabling this plugin *without* Markets is only correct when something else is converting the price values — on a multi-currency storefront with no conversion it will label base-currency amounts with the shopper's market symbol.

The plugin reads the currency at load time. Shopify's currency and market selectors reload the page, so the new currency is picked up on the next load.
