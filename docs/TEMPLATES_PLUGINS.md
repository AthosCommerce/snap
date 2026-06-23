## Templates Plugins

Plugins provide functionality to tie into various events within the Snap controllers by adding middleware on these events. The `plugins` object allows you to use and configure various plugins that are available within Snap Templates. Plugin configurations are grouped by the integration platform, `shopify`, `magento2`, `bigCommerce` and `common` (applies to all platforms).

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins` | Platform-specific plugin configurations | Object | ➖ |
| `plugins.common` | Common/shared plugin configurations | Object | ➖ |
| `plugins.common.backgroundFilters` | Background filter configurations | Object | Enabled |
| `plugins.common.scrollToTop` | Configuration for scrolling to top after search | Object | Enabled |
| `plugins.common.addToCart` | Configuration for add to cart function | Object | Disabled |


> [!NOTE]
> See common plugins documentation under the [Packages > Platform](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/common) section.


### Shopify Plugins
When `config.platform` is `shopify`, the following plugins are available:

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.shopify.mutateResults` | Shopify Updating results configuration | Object | Enabled |
| `plugins.shopify.addToCart` | Shopify add to cart function configuration | Object | Enabled |
| `plugins.shopify.backgroundFilters` | Background filter configurations | Object | Enabled |


> [!NOTE]
> See Shopify-specific plugins documentation under the [Packages > Platform > Shopify](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/shopify) section.


### Magento2 Plugins
When `config.platform` is `magento2`, the following plugins are available:

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
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

When `unlocked: true`, you can define custom plugins under `plugins.custom`. Custom plugins allow you to hook into controller events and extend functionality beyond the built-in platform plugins.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.custom` | Custom plugin definitions | Object | ➖ |
| `plugins.custom[pluginName]` | A custom plugin configuration | Object | ➖ |
| `plugins.custom[pluginName].function` | The plugin function | PluginFunction | Required |
| `plugins.custom[pluginName].args` | Arguments to pass to the plugin function | any[] | ➖ |

Each custom plugin requires a `function` property that receives the controller instance and can register event handlers. You can optionally pass additional arguments via the `args` array:

```tsx
import { SnapTemplates } from '@athoscommerce/snap-preact';
import type { SnapTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config: SnapTemplatesConfigUnlocked = {
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	plugins: {
		custom: {
			myLoggingPlugin: {
				function: (controller) => {
					controller.on('afterStore', async ({ controller }: { controller: SearchController }, next) => {
						console.log('Search completed:', controller.store.results);
						await next();
					});
				},
			},
			myAnalyticsPlugin: {
				function: (controller) => {
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
};

new SnapTemplates(config);
```

#### Passing Arguments to Custom Plugins

You can pass additional arguments to your plugin function using the `args` array. These arguments are spread after the controller when the plugin is invoked:

```tsx
// Define a reusable plugin factory that accepts configuration
const createFilterPlugin = (controller, filterField, filterValues) => {
	controller.on('beforeSearch', async ({ controller }, next) => {
		controller.store.filters.push({
			field: filterField,
			values: filterValues,
		});
		await next();
	});
};

import { SnapTemplates } from '@athoscommerce/snap-preact';
import type { SnapTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config: SnapTemplatesConfigUnlocked = {
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
};

new SnapTemplates(config);
```

Custom plugins can also be defined at the feature level (search, autocomplete, recommendation) to only apply to specific controllers:

```tsx
import { SnapTemplates } from '@athoscommerce/snap-preact';
import type { SnapTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config: SnapTemplatesConfigUnlocked = {
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	plugins: {
		custom: {
			globalPlugin: {
				function: (controller) => {
					// Applied to all controllers
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
	// ...
};

new SnapTemplates(config);
```

