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

### pluginShopifyMarketsPricing

The **Markets Pricing plugin** automatically fetches and displays region-specific product pricing from the Shopify Storefront API. It's designed for multi-currency storefronts that use Shopify Markets. When a customer's active currency differs from the store's base currency, the plugin queries the GraphQL API to fetch localized prices and MSRPs, then updates search results dynamically.

When used through `SnapTemplates` on Shopify, enabling `marketsPricing` also automatically applies `theme.overrides.default.price.format = shopifyMarketsPriceFormat` unless you already provide a custom `price.format` override.

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
import { SnapTemplates } from '@athoscommerce/snap-preact';

const config = {
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
	},
	plugins: {
		shopify: {
			marketsPricing: {
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
};

new SnapTemplates(config);
```

#### How It Works

1. After search results load, the plugin detects if the active currency (`Shopify.currency.active`) differs from `baseCurrency`
2. For uncached products, it fetches localized `priceRange` and `compareAtPriceRange` from Shopify GraphQL
3. Updates `result.mappings.core.price` and `result.mappings.core.msrp` (which in turn updates `result.display`)
4. Sets `result.state.priceFetched = true` when pricing is ready to display
5. Caches results in `controller.store.derivedState.graphQLData.priceCache` to avoid redundant API calls

When formatting prices, `shopifyMarketsPriceFormat` reads script context variables via `getContext(['format', 'iso'])`:

- `format`: Shopify money format template (for example, `${{amount}}`)
- `iso`: optional ISO currency code prefix to prepend to the formatted amount (for example, `USD `)

Example script context:

```html
<script id="athos-context" src="bundle.js">
	format = '${{amount}}';
	iso = 'USD ';
</script>
```

#### Using in Your Result Component

Always check the `priceFetched` flag before rendering prices to ensure data has been fetched.
When using `SnapTemplates`, you do not need to import `shopifyMarketsPriceFormat` or pass a `format` prop for the templated `Price` component.

```tsx
import { h, Fragment } from 'preact';
import { observer } from 'mobx-react-lite';
import { Price } from '@athoscommerce/snap-preact/components';

export const CustomResult = observer(({ result, treePath }: ResultProps) => {
	const core = result.display.mappings.core;
	const { priceFetched } = result.custom;

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

If you are not using `SnapTemplates`, or want custom formatting behavior, you can still explicitly import and pass `shopifyMarketsPriceFormat` (or your own formatter).