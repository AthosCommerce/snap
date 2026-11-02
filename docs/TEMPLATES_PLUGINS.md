## Templates Plugins

Plugins provide functionality to tie into various events within the Snap controllers by adding middleware on these events. The `plugins` object allows you to use and configure various plugins that are available within Snap Templates. Plugin configurations are grouped by the integration platform, `shopify`, `magento2`, `bigCommerce` and `common` (applies to all platforms, except `common.addToCart`), plus `custom` in unlocked mode. Platform groups only take effect when `config.platform` matches; a group for another platform is accepted by the types but ignored. Plugins listed as Enabled run without any configuration; set `enabled: false` in a plugin's configuration to turn it off (the Shopify `markets` plugin has no `enabled` option - it runs whenever `token` is set).

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins` | Platform-specific plugin configurations | Object | ➖ |
| `plugins.common` | Common/shared plugin configurations | Object | ➖ |
| `plugins.common.backgroundFilters` | Background filter configurations | Object | Enabled |
| `plugins.common.scrollToTop` | Configuration for scrolling to top after search (search controllers only) | Object | Enabled |
| `plugins.common.logger` | Logs the controller store at debug level after each store update | Object | Enabled |
| `plugins.common.klaviyoEvents` | Klaviyo events for search and autocomplete | Object | Disabled (set `enabled: true`) |
| `plugins.common.addToCart` | Configuration for add to cart function; only used when `config.platform` is `'other'`, and requires a `function` | Object | Enabled when `config.platform` is `'other'` (the default platform) |


> [!NOTE]
> See common plugins documentation under the [Packages > Platform](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/common) section.


### Shopify Plugins
When `config.platform` is `shopify`, the following plugins are available:

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.shopify.mutateResults` | Shopify Updating results configuration | Object | Enabled |
| `plugins.shopify.addToCart` | Shopify add to cart function configuration | Object | Enabled |
| `plugins.shopify.backgroundFilters` | Background filter configurations | Object | Enabled |
| `plugins.shopify.markets` | Shopify Markets localized pricing - see [Using the Shopify Markets Plugin](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_HOW_TO_SHOPIFY_MARKETS.md) | Object | Disabled (enabled when `token` is set) |
| `plugins.shopify.currency` | Applies the storefront's active currency locale - see [Using the Shopify Currency Plugin](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_HOW_TO_SHOPIFY_CURRENCY.md) | Object | Disabled (enabled automatically with `markets`, or with `enabled: true`) |


> [!NOTE]
> See Shopify-specific plugins documentation under the [Packages > Platform > Shopify](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/shopify) section.


### Magento2 Plugins
When `config.platform` is `magento2`, the following plugins are available:

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.magento2.base` | Magento2 base setup: tracks the logged-in shopper and adds form key, uenc and wishlist/compare/add to cart action data to `store.custom` and `result.custom` | Object | Enabled |
| `plugins.magento2.addToCart` | Magento2 add to cart function configuration | Object | Enabled |
| `plugins.magento2.backgroundFilters` | Background filter configurations | Object | Enabled |


> [!NOTE]
> See Magento specific plugins documentation under the [Packages > Platform > Magento2](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/magento2) section.


### BigCommerce Plugins
When `config.platform` is `bigCommerce`, the following plugins are available:

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.bigCommerce.addToCart` | BigCommerce add to cart function configuration | Object | Enabled |
| `plugins.bigCommerce.backgroundFilters` | Background filter configurations | Object | Enabled |


> [!NOTE]
> See BigCommerce specific plugins documentation under the [Packages > Platform > BigCommerce](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/bigcommerce) section.



### Custom Plugins (Unlocked Only)

When `unlocked: true`, you can define custom plugins under `plugins.custom` (the locked config types reject `custom`). Custom plugins allow you to hook into controller events and extend functionality beyond the built-in platform plugins. Plugins under the top-level `plugins.custom` run on every search, autocomplete and recommendation controller, so a plugin should check `controller.type` before assuming a controller type.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.custom` | Custom plugin definitions | Object | ➖ |
| `plugins.custom[pluginName]` | A custom plugin configuration | Object | ➖ |
| `plugins.custom[pluginName].function` | The plugin function | PluginFunction | Required |
| `plugins.custom[pluginName].args` | Arguments to pass to the plugin function | any[] | ➖ |

Each custom plugin requires a `function` property that receives the controller instance and can register event handlers. You can optionally pass additional arguments via the `args` array:

```tsx
import { SnapTemplates, validateTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';
import type { SearchController, AutocompleteController, RecommendationController } from '@athoscommerce/snap-controller';

declare const analytics: { track: (event: string, data: Record<string, unknown>) => void }; // your analytics library

const config = validateTemplatesConfigUnlocked({
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	plugins: {
		custom: {
			myLoggingPlugin: {
				function: (controller) => {
					controller.on('afterStore', async ({ controller }: { controller: SearchController | AutocompleteController | RecommendationController }, next) => {
						console.log('Search completed:', controller.store.results);
						await next();
					});
				},
			},
			myAnalyticsPlugin: {
				function: (controller) => {
					if (controller.type !== 'autocomplete') return;
					controller.on('afterSearch', async ({ controller }: { controller: AutocompleteController }, next) => {
						// Send analytics event
						analytics.track('search', { query: controller.store.search?.query?.string });
						await next();
					});
				},
			},
		},
	},
	theme: {
		extends: 'pike',
	},
	// ...
});

new SnapTemplates(config);
```

#### Passing Arguments to Custom Plugins

You can pass additional arguments to your plugin function using the `args` array. These arguments are spread after the controller when the plugin is invoked. The example below adds background filters to the search request (for static background filters, the built-in `backgroundFilters` plugin already does this):

```tsx
import { SnapTemplates, validateTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';
import type { AbstractController, BeforeSearchObj } from '@athoscommerce/snap-controller';

// Define a reusable plugin that accepts configuration
const createFilterPlugin = (controller: AbstractController, filterField: string, filterValues: string[]) => {
	if (controller.type !== 'search') return;
	controller.on('beforeSearch', async ({ request }: BeforeSearchObj, next) => {
		request.filters = (request.filters || []).concat(
			filterValues.map((value) => ({ type: 'value', field: filterField, value, background: true }))
		);
		await next();
	});
};

const config = validateTemplatesConfigUnlocked({
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	plugins: {
		custom: {
			categoryFilter: {
				function: createFilterPlugin,
				args: ['category', ['Electronics', 'Computers']],
			},
			brandFilter: {
				function: createFilterPlugin,
				args: ['brand', ['Apple', 'Samsung']],
			},
		},
	},
	theme: {
		extends: 'pike',
	},
});

new SnapTemplates(config);
```

Custom plugins can also be defined at the feature level (search, autocomplete, recommendation) to only apply to specific controllers. Feature-level plugins are added to the top-level ones. Avoid reusing a top-level plugin name at the feature level: the two entries are deep-merged, so the feature-level `function` wins but the `args` arrays are concatenated. When `search.tabs` or `autocomplete.tabs` are configured, a tab that sets its own `plugins` uses only those, not the top-level or feature-level plugins:

```tsx
import { SnapTemplates, validateTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfigUnlocked({
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	plugins: {
		custom: {
			globalPlugin: {
				function: (controller) => {
					// Applied to every search, autocomplete and recommendation controller
				},
			},
		},
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
		plugins: {
			custom: {
				searchOnlyPlugin: {
					function: (controller) => {
						// Only applied to search controller
					},
				},
			},
		},
	},
	theme: {
		extends: 'pike',
	},
	// ...
});

new SnapTemplates(config);
```

