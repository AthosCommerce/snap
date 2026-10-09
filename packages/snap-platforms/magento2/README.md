# Magento2 Platform
This platform library gives you helper functions and plugins to use with the Magento2 platform. 

## Functions

### addToCart
The `addToCart` function will automatically add products to the cart and then redirect to the cart page (`/checkout/cart/`). The function is async, and takes an array of products (Result Store References) to add, and an optional config. The optional config can take several optional properties, `redirect`, `idFieldName`, `formKey`, and `uenc`. Snap variants must be enabled for full functionality.

The `redirect` property can be set to `false` or supplied with an alternate redirect URL instead of the default (`/checkout/cart/`). 

The `idFieldName` property takes a stringified path in the result reference, to look for the product id to add. `display.mappings.core.sku` for example. By default it will use `display.mappings.core.uid`.

The `formKey` property allows you to pass a custom form key to use in the add to cart call. 

The `uenc` property allows you to pass a custom `uenc` code to use in the add to cart call. 

```tsx
import { addToCart } from '@athoscommerce/snap-platforms/magento2';

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

### getFormKey
The `getFormKey` function will return the form key from the `form_key` cookie.

### getUenc
The `getUenc` function will return the uenc code from the current url (window.location.href) using the `btoa` function.

## Plugins

### pluginAddToCart
Plugin to attach a custom function to the addToCart controller event.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | configuration to allow for disabling the plugin | boolean | true | ➖ |
| redirect | set to `false` or provide alternate redirect URL | boolean \| string | '/checkout/cart/' | ➖ |
| idFieldName | field name to use for the product identifier to use when adding product | string | 'display.mappings.core.uid' | ➖ |
| formKey | formKey to use when adding to cart, this will be grabbed from the 'form_key' cookie by default | string | ➖ | ➖ |
| uenc | uenc to use when adding to the cart, this will use the current url by default | string | ➖ | ➖ |


```tsx
const addToCartConfig = {
	redirect: '/cart',
	idFieldName: 'display.mappings.core.sku'
}
```

### pluginSwymWishlist

The Magento 2 **Swym Wishlist plugin** is the [common Swym Wishlist plugin](https://athoscommerce.github.io/snap/package-platforms-common#pluginswymwishlist) for Magento 2 stores. It connects Swym Wishlist Plus to Snap results: after each search the results are registered in Swym's product data and the wishlist buttons rendered in the result component are initialized through the Swym SDK, so they add, remove and show the added state exactly as the theme's own buttons do. See the common plugin for how it works and the available configuration; the plugin is opt-in and only runs when `enabled` is `true`.

> [!IMPORTANT]
> Swym does not publish a Magento 2 storefront SDK. This plugin expects a Swym build that exposes the same SDK as the Shopify and BigCommerce ones: a `window.SwymCallbacks` queue and `swat.initializeActionButtons`, binding `[data-swaction="addToWishlist"][data-with-epi]` buttons. Confirm with Swym that the store's integration provides it; without the SDK on the page the plugin waits for it and does nothing.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | the plugin is opt-in and only runs when this is set to `true` | boolean | false | ✔️ |
| resolver | how results map to Swym's identifiers | SwymWishlistResolver | `swymWishlistResolver` (core mappings) | ➖ |

In SnapTemplates the plugin is configured under `plugins.magento2.swymWishlist`. With Snap it is attached to a controller through the controller `plugins` configuration:

```tsx
import { pluginSwymWishlist } from '@athoscommerce/snap-platforms/magento2';

...
	{
		config: {
			id: 'search',
			plugins: [[pluginSwymWishlist, { enabled: true }]],
			...
		},
		targeters: [...],
	}
...
```

Render the wishlist button in the result component with `swymWishlistButtonProps` from the same package; see the [common plugin](https://athoscommerce.github.io/snap/package-platforms-common#pluginswymwishlist) for a complete result component.

```tsx
import { swymWishlistButtonProps } from '@athoscommerce/snap-platforms/magento2';

const wishlistButton = swymWishlistButtonProps(result);
```

#### Product Identifiers

The plugin resolves Swym's identifiers with the core mappings resolver, where Magento 2 feeds carry the product entity id and the storefront URL:

| Swym field | Button attribute | Resolved from |
|------------|------------------|---------------|
| `empi` (product id) | `data-product-id` | the product entity id: `mappings.core.parentId`, or `mappings.core.uid` when the feed has no `parentId` |
| `epi` (variant id) | `data-variant-id` | the active (selected) child product's `mappings.core.uid` when [Snap variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md) are in use; otherwise the product entity id stands in for it |
| `du` (product URL) | `data-product-url` | `mappings.core.url` without its query string, made absolute with `window.location.origin` |

A feed shaped differently (a SKU in `uid`, for example) can be mapped with a custom `resolver` in the config, see the [common plugin](https://athoscommerce.github.io/snap/package-platforms-common#pluginswymwishlist).

### pluginBackgroundFilters
Plugin to set up background filters for Magento2. Script context is used to automatically apply best practice Magento2 background filtering. Product visibility is handled by default using the `visibility` field with a value of `Search` on search requests, and `Catalog` when displaying category data. Background filtering in this plugin applies to search (category and visibility) and autocomplete (visibility only) controllers.

> [!NOTE]
> If you need to customize background filters beyond what is available in the configuration, you will need to utilize the the common backgroundFilters plugin.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | configuration to allow for disabling the plugin | boolean | true | ➖ |
| fieldNames | object used to set custom field names for background filtering | object | ➖ | ➖ |
| fieldNames.category | name of the field use for brand background filter | string | 'categories_hierarchy' | ➖ |
| fieldNames.visibility | name of the field use for visibility background filter | string | 'visibility' | ➖ |

This plugin relies on specific Magento2 script context variables for creating background filters via the integration script context. Category and visibility background filtering are supported, and special characters will be automatically handled. See the examples below:

```html
<script id="athos-context" src="bundle.js">
	category = {
		path : "Kitchen>Sinks",
	};
</script>
```