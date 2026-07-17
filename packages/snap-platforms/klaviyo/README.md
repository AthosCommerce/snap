# Klaviyo Platform
This platform library gives you plugins to use with the Klaviyo marketing platform. The plugins can be used with both Snap and Snap Templates.

## Usage with Snap
To use the platform library with Snap, simply import what you wish to use from `@athoscommerce/snap-platforms/klaviyo`.

```tsx
import { pluginEvents } from '@athoscommerce/snap-platforms/klaviyo';
```

## Usage with Snap Templates
When using Snap Templates, no import is needed — the plugins are included in the templates library. Enable a plugin via the `plugins.klaviyo` configuration by setting `enabled` to `true`:

```tsx
plugins: {
	klaviyo: {
		events: {
			enabled: true,
		},
	},
},
```

The configuration can be set globally (top-level `plugins`) or per controller type (e.g. `search.plugins`, `autocomplete.plugins`).

## Plugins

### pluginEvents
Plugin to send Athos Commerce events to Klaviyo. The plugin attaches to the `track.product.clickThrough` controller event and pushes a corresponding `track` event to the Klaviyo `_learnq` object. Search and autocomplete controllers are supported; the plugin will do nothing when attached to other controller types.

> [!IMPORTANT]
> The Klaviyo script must be installed on the site so that the `_learnq` object is available on the window. If `_learnq` is not available, events will not be sent.

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|---------|----------|
| enabled | the plugin is opt-in and only runs when this is set to `true` | boolean | false | ✔️ |

> [!NOTE]
> The plugin is disabled by default. It must be explicitly enabled by setting `enabled: true` in the plugin configuration.

#### Snap
Attach the plugin to a controller via the controller `plugins` configuration, passing a configuration with `enabled: true`:

```tsx
import { Snap } from '@athoscommerce/snap-preact';
import { pluginEvents } from '@athoscommerce/snap-platforms/klaviyo';

const config = {
	// ...
	controllers: {
		search: [
			{
				config: {
					id: 'search',
					plugins: [[pluginEvents, { enabled: true }]],
				},
			},
		],
	},
};

new Snap(config);
```

#### Snap Templates
No import is needed. Enable the plugin via the `plugins.klaviyo.events` configuration by setting `enabled` to `true`:

```tsx
new SnapTemplates({
	// ...
	plugins: {
		klaviyo: {
			events: {
				enabled: true,
			},
		},
	},
});
```

#### Events
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
