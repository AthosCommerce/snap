# Common Platform
The common platform library gives you helper functions and plugins to use for all integrations regardless of the platform. 

## Plugins Usage

### Snap Config
To use the platform library in Snap, simply import what you wish to use from `@athoscommerce/snap-platforms/common` and connect it to the controller `config.plugins`.

```tsx
import { pluginScrollToTop } from '@athoscommerce/snap-platforms/common';

const scrollToTopConfig = {
	enabled: true,
	selector: '#athos-layout',
};

...
	{
		config: {
			id: 'search',
			plugins: [[pluginScrollToTop, scrollToTopConfig]],
			...
		},
		targeters: [...],
	}
...
```

### Snap Templates
To use a common plugin in [SnapTemplates](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_ABOUT.md), it can be defined and configured in the `config.plugins.common` section (no import necessary).

```tsx
const scrollToTopConfig = {
	enabled: true,
	selector: '#athos-layout',
}
...
	plugins: {
		common: {
			scrollToTop: scrollToTopConfig
		}
	}
...
```

### Snap Controller 
To use the platform library with a controller, simply import what you wish to use from `@athoscommerce/snap-platforms/common`.

```tsx
import { pluginScrollToTop } from '@athoscommerce/snap-platforms/common';
const scrollToTopConfig = {
	enabled: true,
	selector: '#athos-layout',
}
controller.plugin(pluginScrollToTop, scrollToTopConfig);
```

## Plugins

### pluginAddToCart
Plugin to attach a custom function to the addToCart controller event.

> [!NOTE]
> The common addToCart plugin provides a way to handle addToCart events for custom situations. If you are using a supported platform (Shopify, Magento2 or BigCommerce), you should use the plugin specific to your platform.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | Configuration to allow for disabling the plugin | boolean | true | ➖ |
| function | Function to invoke with product and/or controller when and addToCart event occurs | (products, controller) => void \| Promise\<void\> | ➖ | ✔️ |

```tsx
const addToCartConfig = {
	function: (products, controller) => {
		controller.log.debug('adding products to the cart', products);
		// do some custom thing...
	}
}
```

### pluginBackgroundFilters
Plugin to set up background filters. You can configure background filters for tags, collections, or any other available field. Background filters can be provided via the plugin config, or through script context. Field names and values must align with data setup in the Athos Search & Product Discovery Console.

> [!NOTE]
> The common backgroundFilters plugin provides a generic way for setting background filters. If you are using a supported platform (Shopify, Magento2 or BigCommerce), you should use the plugin specific to your platform.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | Configuration to allow for disabling the plugin | boolean | true | ➖ |
| filters[] | Background filter definitions | array | ➖ | ➖ |
| filters[].type | Defines if filter should be 'value' or 'range' type | 'value' \| 'range' | ➖ | ✔️ |
| filters[].field | Defines filter field name | string | ➖ | ✔️ |
| filters[].value | Defines filter value. If `type` is 'value', this must be a string, otherwise if `type` is 'range', this must be an object with `low` and `high` properties | string \| { low: number, high: number } | ➖ | ✔️ |
| filters[].controllerIds | Defines which controllers the filter should apply to | (string \| regexp)[]  | ➖ | ➖ |
| filters[].controllerTypes | Defines which controller types the filter should apply to | (string)[] | ➖ | ➖ |

```tsx
const backgroundFiltersConfig = {
	filters: [
		{
			type: 'value',
			field: 'collection',
			value: 'mens'
		},
		{
			type: 'value',
			field: 'shopper_login',
			value: '1',
		},
		{
			type: 'range',
			field: 'price',
			value: { low: 10, high: 20 },
		}
	],
}
```

The above example shows a config that can be applied to the plugin directly. This plugin also supports setting background filters via the integration script context, which allows for more dynamic background filters set within the store platform templates. The example below shows a background filter for `collection=mens` being set via the integration script context variable `backgroundFilters`.

```html
<script id="athos-context" src="bundle.js">
	backgroundFilters = [
		{
			type: 'value',
			field: 'collection',
			value: 'mens'
		},
	];
</script>
```

Additionaly, if not all controllers should have a specific background filter applied, there is support to apply each filter to specific controllers via `controllerIds` and `controllerTypes` configurations. When using `controllerIds` specific controller ids can be supplied or regex can be used to match on multiple controllers. The `controllerTypes` uses the `controller.type` property to filter out controllers; valid types are `search`, `autocomplete`, `recommendation`, and `finder`. The example bellow will apply the background filter to any controllers that are of type `search`.

```html
<script id="athos-context" src="bundle.js">
	backgroundFilters = [
		{
			type: 'value',
			field: 'collection',
			value: 'womens',
			controllerTypes: ['search'],
		},
	];
</script>
```

### pluginKlaviyoEvents
Plugin to send Athos Commerce events to the Klaviyo marketing platform. The plugin attaches to the `track.product.clickThrough` controller event and pushes a corresponding `track` event to the Klaviyo `_learnq` object. Search and autocomplete controllers are supported; the plugin will do nothing when attached to other controller types.

> [!IMPORTANT]
> The Klaviyo script must be installed on the site so that the `_learnq` object is available on the window. If `_learnq` is not available, events will not be sent.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | the plugin is opt-in and only runs when this is set to `true` | boolean | false | ✔️ |

> [!NOTE]
> Unlike other common plugins, this plugin is disabled by default. It must be explicitly enabled by setting `enabled: true` in the plugin configuration.

Usage with Snap (attach to a controller via the controller `plugins` configuration):

```tsx
import { pluginKlaviyoEvents } from '@athoscommerce/snap-platforms/common';

...
	{
		config: {
			id: 'search',
			plugins: [[pluginKlaviyoEvents, { enabled: true }]],
			...
		},
		targeters: [...],
	}
...
```

Usage with Snap Templates (no import necessary):

```tsx
...
	plugins: {
		common: {
			klaviyoEvents: {
				enabled: true,
			},
		},
	},
...
```

When a product clickthrough occurs, the plugin pushes a Klaviyo `track` event named `Athos Commerce search click` or `Athos Commerce autocomplete click` (depending on the controller type) with the following payload:

| Property | Description |
|----------|-------------|
| query | the current search query |
| subject | the current search subject |
| totalResults | total number of results for the query |
| product | details of the clicked product |
| results | details of the other products in the results (clicked product excluded) |

Product details (for both `product` and entries in `results`) contain the following properties from the product core mappings: `id`, `name`, `url`, `thumbnailImageUrl`, `imageUrl`, `price` and `msrp`.

```json
{
	"query": "dress",
	"subject": "",
	"totalResults": 42,
	"product": {
		"id": "182146",
		"name": "Stripe Out White Off-The-Shoulder Dress",
		"url": "/product/C-AD-W1-1869P",
		"thumbnailImageUrl": "https://cdn.example.com/images/thumb/182146.jpg",
		"imageUrl": "https://cdn.example.com/images/182146.jpg",
		"price": 48,
		"msrp": 50
	},
	"results": [
		{
			"id": "182147",
			"name": "Another Dress",
			"url": "/product/C-AD-W1-1870P",
			"thumbnailImageUrl": "https://cdn.example.com/images/thumb/182147.jpg",
			"imageUrl": "https://cdn.example.com/images/182147.jpg",
			"price": 30,
			"msrp": 35
		}
	]
}
```

### pluginLogger
Adds some controller logging. Currently logs the store after every search.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | Configuration to allow for disabling the plugin | boolean | true | ➖ |

```tsx
const loggerConfig = {
	enabled: false,
}
```

### pluginSwymWishlist
Connects the [Swym Wishlist Plus](https://developers.getswym.com/docs/list-api) app to Snap results, so a wishlist button on a result card behaves like the ones in the rest of the theme: adding and removing, the added state, popups, notifications, multiple lists and login prompts all follow the settings in the Swym admin. The plugin is opt-in and only runs when `enabled` is `true`. Search, autocomplete and recommendation controllers are supported; the plugin does nothing when attached to other controller types.

> [!NOTE]
> The common plugin resolves Swym's product identifiers from the core mappings. On a supported platform use the plugin from that platform's package instead, which resolves them the way the platform's feed and Swym's own snippets do: [Shopify](https://athoscommerce.github.io/snap/reference-platforms-shopify#pluginshopifyswymwishlist), [BigCommerce](https://athoscommerce.github.io/snap/reference-platforms-bigcommerce#pluginswymwishlist) or [Magento 2](https://athoscommerce.github.io/snap/reference-platforms-magento2#pluginswymwishlist).

After each search the plugin does two things:

1. registers every product in the results in Swym's product data (`SwymViewProducts`, `SwymProductVariants` and `SwymWatchProducts`) — the same objects Swym's theme snippets populate — so Swym has the title, image, price and availability it needs for popups, notifications and back in stock alerts
2. initializes the wishlist buttons rendered for the results through the Swym SDK (`swat.initializeActionButtons`), looking for them only inside the elements the controller renders into, so the theme's own buttons and other controllers' buttons for the same products are left alone

> [!IMPORTANT]
> The Swym Wishlist Plus app must be installed on the store so that the Swym SDK loads on the page. The plugin waits for the SDK through `window.SwymCallbacks`, so it does not matter whether Swym or Snap loads first.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | the plugin is opt-in and only runs when this is set to `true` | boolean | false | ✔️ |
| resolver | how results map to Swym's identifiers (see [Product Identifiers](#product-identifiers)) | SwymWishlistResolver | `swymWishlistResolver` | ➖ |

#### Setup

1. Enable the plugin. In SnapTemplates it is configured under `plugins.common.swymWishlist` (applied when `config.platform` is `other`), with Snap it is attached to a controller through the controller `plugins` configuration:

```tsx
import { pluginSwymWishlist } from '@athoscommerce/snap-platforms/common';

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

2. Render a wishlist button in your result component. `swymWishlistButtonProps` builds the attributes Swym expects on a grid button from a result: the Swym classnames, `data-product-id`, `data-variant-id` and `data-product-url`. It returns `undefined` when a product id or product URL cannot be resolved for the result, in which case no button should be rendered.

```tsx
import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { swymWishlistButtonProps } from '@athoscommerce/snap-platforms/common';
import type { ResultProps } from '@athoscommerce/snap-preact/components';

export const WishlistResult = observer(({ result }: ResultProps) => {
	const core = result.display.mappings.core;
	const wishlistButton = swymWishlistButtonProps(result);

	return (
		<article className="ss__result">
			<a href={core?.url}>
				<img src={core?.imageUrl} alt={core?.name} />
				<h2>{core?.name}</h2>
			</a>
			{wishlistButton && <button type="button" aria-label="Add to Wishlist" {...wishlistButton} />}
		</article>
	);
});
```

#### Product Identifiers

Swym identifies a wishlisted item by its product id (`empi`), variant id (`epi`) and product URL (`du`). A resolver maps a result to them; `swymWishlistButtonProps` and the registered product data use the same resolver, so the two always agree. The default resolver, `swymWishlistResolver`, reads the core mappings:

| Swym field | Button attribute | Resolved from |
|------------|------------------|---------------|
| `empi` (product id) | `data-product-id` | `mappings.core.parentId`, or `mappings.core.uid` when the feed has no `parentId` |
| `epi` (variant id) | `data-variant-id` | the active (selected) variant's `mappings.core.uid` when [Snap variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md) are in use; otherwise `mappings.core.uid` |
| `du` (product URL) | `data-product-url` | `mappings.core.url` without its query string, made absolute with `window.location.origin` |

A feed shaped differently can be mapped with a custom resolver. Its `product` function returns the `productId`, `variantId` and `url` of a result (or `undefined` when they cannot be resolved) and optionally `keys`, extra keys the product data is registered under. The optional `variantUrl` function gives the URL registered for each of the product's variants; by default it is the variant's own core url, or the product URL. Render the buttons with the same resolver:

```tsx
import { pluginSwymWishlist, swymWishlistButtonProps, swymWishlistResolver } from '@athoscommerce/snap-platforms/common';
import type { SwymWishlistResolver } from '@athoscommerce/snap-platforms/common';

const resolver: SwymWishlistResolver = {
	product: (product) => {
		const resolved = swymWishlistResolver.product(product);
		return resolved && { ...resolved, productId: String(product.attributes.product_id) };
	},
	variantUrl: (variant, { variantId, product }) => `${product.url}?variant=${variantId}`,
};

controller.plugin(pluginSwymWishlist, { enabled: true, resolver });

// in the result component
const wishlistButton = swymWishlistButtonProps(result, resolver);
```

#### How It Works

1. On controller creation the plugin registers a callback with `window.SwymCallbacks`, which the Swym SDK invokes once it has loaded (immediately, when it has already loaded)
2. After each search, every product in the results is merged into `window.SwymViewProducts` (keyed by product id and the resolver's extra keys), `window.SwymProductVariants` (keyed by variant id) and `window.SwymWatchProducts`; entries the theme registered are kept
3. Once the results have rendered, the plugin finds the wishlist buttons rendered for them — `[data-swaction="addToWishlist"]` elements inside the controller's targets whose `data-product-id` belongs to a product in the results — tags the closest element containing all of them with `data-ss-swym-wishlist="<controller id>"` and calls `swat.initializeActionButtons` with that container selector. Swym then binds each button: click to add or remove, the `swym-added` state, popups and notifications. A controller without targets (results rendered by hand) is searched across the whole page
4. The Swym SDK reads `data-variant-id` when it binds a button, so when a button's variant changes (a result's variant selection changed and the button re-rendered) the container is initialized again
5. If no buttons have rendered for the results within a few seconds, the plugin logs a warning once per controller

#### Notes

- Buttons written by hand without `data-with-epi` are supported as well. Swym then takes the product and variant from the registered product data instead of the button's attributes, so `data-product-id` must be the product id and the variant is the one active when the results loaded.
- Keep the button's `className` stable between renders. Swym adds its own state classnames (`swym-added`, `swym-loaded`) to the element, and a `className` that changes with component state would overwrite them. Additional classnames can be appended to the ones `swymWishlistButtonProps` returns.

### scrollToTop
Configures the behavior of scrolling to the top of the page after a search has occurred.

> [!IMPORTANT]
> This plugin only applies to search and category pages (controllers of type `search`).

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | Configuration to allow for disabling the plugin | boolean | true | ➖ |
| selector | Query selector to scroll to | string | 'body' | ➖ |
| options | [`window.scroll` options configuration](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll#options) | Object | { top: 0, left: 0, behavior: 'smooth' } | ➖ |

```tsx
const scrollToTopConfig = {
	enabled: true,
	selector: '#athos-layout',
	options: {
		top: 0,
		left: 0,
		behavior: "auto" | "instant" | "smooth"
	}
}
```