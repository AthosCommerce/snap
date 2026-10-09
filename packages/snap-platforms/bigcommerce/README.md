# BigCommerce Platform
This platform library gives you helper functions and plugins to use with the BigCommerce platform. 

## Functions

### addToCart
The `addToCart` function will automatically add products to the cart and then redirect to the cart page (`/cart.php`). The function is async, and takes an array of products (Result Store References) to add, and an optional config. The optional config can take two optional properties, `redirect` and `idFieldName`. Snap variants must be enabled for full functionality.

The `redirect` property can be set to `false` or supplied with an alternate redirect URL instead of the default (`/cart.php`). 

The `idFieldName` property takes a stringified path in the result reference, to look for the product id to add. `display.mappings.core.sku` for example. By default it will use `display.mappings.core.uid`.

```tsx
import { addToCart } from '@athoscommerce/snap-platforms/bigcommerce';

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
| redirect | set to `false` or provide alternate redirect URL | boolean \| string | '/cart.php' | ➖ |
| idFieldName | field name to use for the product identifier to use when adding product | string | 'display.mappings.core.uid' | ➖ |


```tsx
const addToCartConfig = {
	redirect: '/cart',
	idFieldName: 'display.mappings.core.sku'
}
```

### pluginSwymWishlist

The BigCommerce **Swym Wishlist plugin** is the [common Swym Wishlist plugin](https://athoscommerce.github.io/snap/package-platforms-common#pluginswymwishlist) for BigCommerce stores. It connects the [Swym Wishlist Plus](https://www.bigcommerce.com/apps/wishlist-plus/) app to Snap results: after each search the results are registered in Swym's product data and the wishlist buttons rendered in the result component are initialized through the Swym SDK, so they add, remove and show the added state exactly as the theme's own buttons do. See the common plugin for how it works and the available configuration; the plugin is opt-in and only runs when `enabled` is `true`.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | the plugin is opt-in and only runs when this is set to `true` | boolean | false | ✔️ |
| resolver | how results map to Swym's identifiers | SwymWishlistResolver | `swymWishlistResolver` (core mappings) | ➖ |

In SnapTemplates the plugin is configured under `plugins.bigCommerce.swymWishlist`. With Snap it is attached to a controller through the controller `plugins` configuration:

```tsx
import { pluginSwymWishlist } from '@athoscommerce/snap-platforms/bigcommerce';

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
import { swymWishlistButtonProps } from '@athoscommerce/snap-platforms/bigcommerce';

const wishlistButton = swymWishlistButtonProps(result);
```

#### Product Identifiers

Swym's BigCommerce SDK identifies products and variants by their BigCommerce entity ids, which the feed carries in the core mappings, so the plugin resolves them with the core mappings resolver:

| Swym field | Button attribute | Resolved from |
|------------|------------------|---------------|
| `empi` (product id) | `data-product-id` | the product entity id: `mappings.core.parentId`, or `mappings.core.uid` when the feed has no `parentId` |
| `epi` (variant id) | `data-variant-id` | the variant entity id: the active (selected) variant's `mappings.core.uid` when [Snap variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md) are in use; otherwise the product entity id stands in for it |
| `du` (product URL) | `data-product-url` | `mappings.core.url` without its query string, made absolute with `window.location.origin` |

A feed shaped differently can be mapped with a custom `resolver` in the config, see the [common plugin](https://athoscommerce.github.io/snap/package-platforms-common#pluginswymwishlist).

#### Notes

- Swym's storefront SDK is available on Stencil themes.
- Configure Snap variants so the wishlisted item carries the variant entity id; without them the product entity id is sent for both.
- On a product page, Swym's BigCommerce SDK binds every button to the variant selected on that page instead of the button's own `data-variant-id`. Results rendered on product pages (recommendations, for example) are therefore wishlisted with the page's variant.

### pluginBackgroundFilters
Plugin to set up background filters for BigCommerce. Script context is used to automatically apply best practice BigCommerce background filtering. Background filtering in this plugin only applies to search controllers.

> [!NOTE]
> If you need to customize background filters beyond what is available in the configuration, you will need to utilize the the common backgroundFilters plugin.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | configuration to allow for disabling the plugin | boolean | true | ➖ |
| fieldNames | object used to set custom field names for background filtering | object | ➖ | ➖ |
| fieldNames.brand | Name of the field use for brand background filter | string | 'brand' | ➖ |
| fieldNames.category | Name of the field use for brand background filter | string | 'categories_hierarchy' | ➖ |

This plugin relies on specific BigCommerce script context variables for creating background filters via the integration script context. Both category and brand background filter are supported, and special characters will be automatically handled. See the examples below:

```html
<script id="athos-context" src="bundle.js">
	category = {
		id : "185",
		name : "Sinks",
		path : "Kitchen>Sinks",
	};
</script>
```

```html
<script id="athos-context" src="bundle.js">
	brand = {
		name: "My Favorite Brand",
	};
</script>
```