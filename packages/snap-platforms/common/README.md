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

After each search the plugin does two things:

1. registers every product in the results in Swym's product data (`SwymViewProducts`, `SwymProductVariants` and `SwymWatchProducts`) — the same objects Swym's theme snippets populate — so Swym has the title, image, price and availability it needs for popups, notifications and back in stock alerts
2. initializes the wishlist buttons rendered for the results through the Swym SDK (`swat.initializeActionButtons`), looking for them only inside the elements the controller renders into, so the theme's own buttons and other controllers' buttons for the same products are left alone

> [!IMPORTANT]
> The Swym Wishlist Plus app must be installed on the store so that the Swym SDK loads on the page. The plugin waits for the SDK through `window.SwymCallbacks`, so it does not matter whether Swym or Snap loads first.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | the plugin is opt-in and only runs when this is set to `true` | boolean | false | ✔️ |
| bigCommerce.token | BigCommerce Storefront API token used to look up the variant ids of products without options, which BigCommerce feeds do not carry (see the platform notes) | string | the token Swym's BigCommerce embed places on the page | ➖ |

#### Setup

1. Enable the plugin. In SnapTemplates it is configured under `plugins.common.swymWishlist` on every platform:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
	},
	plugins: {
		common: {
			swymWishlist: {
				enabled: true,
			},
		},
	},
	components: {
		result: {
			WishlistResult: async () => (await import('./components/WishlistResult')).WishlistResult,
		},
	},
	theme: {
		extends: 'pike',
		globalResultComponent: 'WishlistResult',
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
});

new SnapTemplates(config);
```

With Snap it is attached to a controller through the controller `plugins` configuration:

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

2. Render a wishlist button in your result component. `swymWishlistButtonProps` builds the attributes Swym expects on a grid button from a result: the Swym classnames, `data-product-id`, `data-variant-id` and `data-product-url`. It returns `undefined` when an id or the product URL cannot be resolved for the result, in which case no button should be rendered. Render the button's label inside a child element with the `swym-wishlist-cta` classname. Swym writes its own "Add to Wishlist" and "Added to Wishlist" text into that element when it is present. The element is required on BigCommerce, where Swym's SDK fails to bind a button without one, and recommended elsewhere; an icon-only button can include it visually hidden.

```tsx
import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { Price } from '@athoscommerce/snap-preact/components';
import { swymWishlistButtonProps } from '@athoscommerce/snap-platforms/common';
import type { ResultProps } from '@athoscommerce/snap-preact/components';

export const WishlistResult = observer(({ result, treePath }: ResultProps) => {
	const core = result.display.mappings.core;
	const wishlistButton = swymWishlistButtonProps(result);

	return (
		<article className="ss__result">
			<a href={core?.url}>
				<img src={core?.imageUrl} alt={core?.name} />
				<h2>{core?.name}</h2>
			</a>
			<Price value={core?.price} treePath={treePath} />
			{wishlistButton && (
				<button type="button" {...wishlistButton}>
					<span className="swym-wishlist-cta">Add to Wishlist</span>
				</button>
			)}
		</article>
	);
});
```

#### Product Identifiers

Swym identifies a wishlisted item by its product id (`empi`), variant id (`epi`) and product URL (`du`). Every result is a variant, so all three come from the core mappings, on every platform. `swymWishlistButtonProps` and the registered product data resolve them the same way, so the two always agree:

| Swym field | Button attribute | Resolved from |
|------------|------------------|---------------|
| `empi` (product id) | `data-product-id` | `mappings.core.parentId`, or `mappings.core.uid` when the result has no parent |
| `epi` (variant id) | `data-variant-id` | `display.mappings.core.uid` — the result's `uid`, or the selected variant's when [Snap variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md) are in use; a BigCommerce `{productId}_{variantId}` uid contributes the part after the underscore, and a BigCommerce product without options uses its looked up base variant |
| `du` (product URL) | `data-product-url` | `display.mappings.core.url`, made absolute with `window.location.origin` |

#### How It Works

1. On controller creation the plugin registers a callback with `window.SwymCallbacks`, which the Swym SDK invokes once it has loaded (immediately, when it has already loaded)
2. After each search, every product in the results is merged into `window.SwymViewProducts` (keyed by product id), `window.SwymProductVariants` (keyed by variant id) and `window.SwymWatchProducts`; entries the theme registered are kept
3. Once the results have rendered, the plugin finds the wishlist buttons rendered for them — `[data-swaction="addToWishlist"]` elements inside the controller's targets whose `data-product-id` belongs to a product in the results — and, for each element the controller renders into, tags the closest element containing that target's buttons with `data-ss-swym-wishlist` and calls `swat.initializeActionButtons` with that container's selector. The first container is tagged with the controller id, and any further ones with `<controller id>__<n>`, since Swym only binds the first element matching a selector; binding each target separately keeps buttons between the targets, such as the theme's own, out of reach. Swym then binds each button: click to add or remove, the `swym-added` state, popups and notifications. A controller without targets (results rendered by hand) is searched across the whole page
4. The Swym SDK reads `data-variant-id` when it binds a button, so when a button's variant changes (a result's variant selection changed and the button re-rendered) the product data is registered again and the container is initialized again
5. If no buttons have rendered for the results within a few seconds, the plugin logs a warning once per controller

#### Platform Notes

- **Shopify:** Swym's own *Add to Wishlist button on collection pages* setting injects a button into every product tile matching the theme's tile selector. When a result component reuses the theme's tile markup this can add a second button to Snap's results; scope that selector to the theme's own grid, or turn the setting off.
- **BigCommerce:** Swym's storefront SDK is available on Stencil themes. It requires the `swym-wishlist-cta` element inside every button and throws while binding a button without one, which leaves that button unbound; when the BigCommerce SDK is loaded the plugin warns once per controller about such buttons. Its `data-with-epi` binding sends the Swym API only the ids, without the product URL the API requires, so on BigCommerce the plugin removes `data-with-epi` from the buttons before binding them and Swym binds them through the product data the plugin registers, product URL included; the plugin recognises the BigCommerce SDK by its `initSwymBC` global. BigCommerce feeds identify a product with options as `{productId}_{variantId}` in `uid`, with the product id in `parentId`, and the plugin takes the variant id from the part after the underscore with [`getVariantId`](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/bigcommerce#getvariantid); Swym rejects an item whose variant id is not a real variant (`Unknown product`). A product without options carries only its product id, and Swym rejects that as a variant id, so the plugin looks up those products' base variant ids through the Storefront GraphQL API (`/graphql` on the storefront origin, 50 products per request, once per product per page load) before registering and binding, the same way Swym's own SDK fetches products. The token comes from `bigCommerce.token`, or from the one Swym's embed places on the page; without one the plugin warns once and adds of those products fail. The looked up variant id also flows into `swymWishlistButtonProps` on later renders. On a product page it binds every button to the variant selected on that page instead of the button's own `data-variant-id`, so results rendered on product pages (recommendations, for example) are wishlisted with the page's variant.
- **Magento 2:** Swym does not publish a Magento 2 storefront SDK. The plugin expects a Swym build that exposes the same SDK as the Shopify and BigCommerce ones (`window.SwymCallbacks` and `swat.initializeActionButtons`, binding `[data-swaction="addToWishlist"][data-with-epi]` buttons); without the SDK on the page it waits for it and does nothing.

#### Notes

- Buttons written by hand without `data-with-epi` are supported as well. Swym then takes the product and variant from the registered product data instead of the button's attributes, so `data-product-id` must be the product id and the variant is the one active when the results loaded.
- Swym replaces the content of the `swym-wishlist-cta` element with its own label, so render only the static label text in it and keep any icon or other markup outside of it.
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