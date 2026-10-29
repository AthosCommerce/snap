# BigCommerce Platform
This platform library gives you helper functions and plugins to use with the BigCommerce platform. 

## Functions

### addToCart
The `addToCart` function will automatically add products to the cart and then redirect to the cart page (`/cart.php`). The function is async, and takes an array of products (Result Store References) to add, and an optional config. The optional config can take two optional properties, `redirect` and `idFieldName`. Snap variants must be enabled for full functionality.

The `redirect` property can be set to `false` or supplied with an alternate redirect URL instead of the default (`/cart.php`). 

The `idFieldName` property takes a stringified path in the result reference, to look for the product id to add. `display.mappings.core.sku` for example. By default it will use `display.mappings.core.uid`.

Each product is added through the BigCommerce Storefront Cart API as follows:

- A uid in the Athos `{parentId}_{variantId}` form (a product with options) is added as product `parentId` with variant `variantId`, using [`getVariantId`](#getvariantid). This covers the selected variant when Snap variants are in use.
- Any other uid is added as that product id. When Snap variants are in use, the selected variant's option selections (`optionId` and `optionValue`) are sent with it, for feeds whose variants carry the product id as their uid.
- With `idFieldName` set, the value at that path is always added as the product id.

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

### getVariantId
The `getVariantId` function returns the BigCommerce variant id of a result. Athos BigCommerce feeds identify a product with options as `{parentId}_{variantId}` in `mappings.core.uid`, with the product id in `mappings.core.parentId`; when the uid starts with the parentId followed by an underscore, the numeric id after the underscore is the variant id. It takes the `uid` and `parentId` and returns the variant id as a string, or `undefined` when the uid is in any other form. A product without options has a uid equal to its parentId and returns `undefined`: its feed carries no variant id, and the product id identifies it on its own wherever BigCommerce accepts one, such as the cart.

```tsx
import { getVariantId } from '@athoscommerce/snap-platforms/bigcommerce';

const core = result.display.mappings.core;

getVariantId({ uid: core?.uid, parentId: core?.parentId }); // '20252' for uid '19936_20252' and parentId '19936'
```

Pass `result.display.mappings.core` to get the selected variant's id when [Snap variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md) are in use.

## Plugins

### pluginAddToCart
Plugin to attach a custom function to the addToCart controller event.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | configuration to allow for disabling the plugin | boolean | true | ➖ |
| redirect | set to `false` or provide alternate redirect URL | boolean \| string | '/cart.php' | ➖ |
| idFieldName | field name to use for the product identifier to use when adding product; when set, the value is always added as the product id (see [addToCart](#addtocart)) | string | 'display.mappings.core.uid' | ➖ |


```tsx
const addToCartConfig = {
	redirect: '/cart',
	idFieldName: 'display.mappings.core.sku'
}
```

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