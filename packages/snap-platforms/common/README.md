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