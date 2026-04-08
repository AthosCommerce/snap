## Templates Config

Snap templates is entirely configuration based. The configuration defines which features are enabled and which template and theme they utilize. A configuration will consist of several top level groups that together define the template.

| Configuration Key | Description |
|----|-----------------------|
| `unlocked` | Enable advanced configuration options (default: `false`) |
| `config` | Global configuration options |
| `plugins` | Plugins configuration options |
| `components` | Custom component registration |
| `translations` | Custom language translations |
| `url` | URL translator configuration |
| `features` | Integration feature configuration |
| `themes` | Theme configuration |
| `search` | Search feature target declarations |
| `autocomplete` | Autocomplete feature target declarations |
| `recommendation` | Recommendation feature target declarations |

Here is a minimal example starting configuration to enable search and autocomplete using the `pike` theme.

```jsx
import { SnapTemplates } from '@athoscommerce/snap-preact';

new SnapTemplates({
	config: {
		siteId: '8uyt2m',
		language: 'en',
		currency: 'usd',
	},
	theme: {
		extends: 'pike',
	},
	search: {
		targets: [
			{
				selector: '#athos-templates',
				component: 'Search',
			},
		],
	},
	autocomplete: {
		inputSelector: 'input#search-input',
		targets: [
			{
				selector: 'input#search-input',
				component: 'Autocomplete',
			},
		],
	},
});
```


### Templates Config

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|:---------:|:---------:|
| `config` | Global configuration options | Object | ➖ | ✔️ |
| `config.platform` | Shopping platform for the integration | String | 'other' | ✔️ |
| `config.siteId` | Athos Site ID | String | ➖ | ➖ |
| `config.language` | Language code for localization | String | 'en' | ➖ |
| `config.currency` | Currency code for pricing | String | 'usd' | ➖ |

The `config` object defines the integration platform, Athos siteId and current localization to be used.

If a `siteId` is not provided, the siteId found on the `bundle.js` url path will be used. For example `8uyt2m` will be used if the page contains the following script:

```
<script src="https://snapui.athoscommerce.io/8uyt2m/bundle.js" id="athos-context"></script>
```

It is possible to switch language and currency at run-time using methods on the TemplateStore that are exposed to the window: 
- `window.athos.templates.setCurrency('eud')`
- `window.athos.templates.setLanguage('fr')`


### Unlocked Configuration

The `unlocked` property controls the level of customization available in your Snap Templates configuration. By default, Snap Templates operates in "locked" mode (`unlocked: false`), which provides a curated set of configuration options suitable for most integrations. When you need advanced customization capabilities, you can enable "unlocked" mode.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `unlocked` | Enable advanced configuration options | Boolean | `false` |

#### Locked Mode (Default)


In locked mode, the configuration is restricted to a curated set of standard options. This mode is recommended for most integrations as it provides type safety, prevents configuration errors, and ensures compatibility with future updates across all components.

```jsx
new SnapTemplates({
	unlocked: false,
	config: {
		siteId: '8uyt2m',
		platform: 'shopify',
	},
	theme: {
		extends: 'pike',
	},
	// ... standard configuration options
});
```

#### Unlocked Mode

When `unlocked: true`, additional configuration capabilities become available:

1. **Custom Component Prop in Theme Overrides for all components** - Ability to use the customComponent prop when customizing theme overrides, to completly replace what renders for a specific component.

2. **Custom Plugins** - Ability to define and register custom plugin functions that integrate with the controller lifecycle.

```jsx
new SnapTemplates({
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	theme: {
		extends: 'pike',
	},
	// ... configuration with advanced options
});
```


### Custom Plugins (Unlocked Only)

When `unlocked: true`, you can define custom plugins under `plugins.custom`. Custom plugins allow you to hook into controller events and extend functionality beyond the built-in platform plugins.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins.custom` | Custom plugin definitions | Object | ➖ |
| `plugins.custom[pluginName]` | A custom plugin configuration | Object | ➖ |
| `plugins.custom[pluginName].function` | The plugin function | PluginFunction | Required |
| `plugins.custom[pluginName].args` | Arguments to pass to the plugin function | any[] | ➖ |

Each custom plugin requires a `function` property that receives the controller instance and can register event handlers. You can optionally pass additional arguments via the `args` array:

```jsx
new SnapTemplates({
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
});
```

#### Passing Arguments to Custom Plugins

You can pass additional arguments to your plugin function using the `args` array. These arguments are spread after the controller when the plugin is invoked:

```jsx
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

new SnapTemplates({
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
```

Custom plugins can also be defined at the feature level (search, autocomplete, recommendation) to only apply to specific controllers:

```jsx
new SnapTemplates({
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
});
```


### Plugins
Plugins provide functionality to tie into various events within the Snap controllers by adding middleware on these events. The `plugins` object allows you to use and configure various plugins that are available within Snap Templates. Plugin configuration are grouped by the integration platform, `shopify`, `magento2`, `bigCommerce` and `common` (applies to all platforms)

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `plugins` | Platform-specific plugin configurations | Object | ➖ |
| `plugins.common` | Platform-specific configurations | Object | ➖ |
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
> See shopify specific plugins documentation under the [Packages > Platform > Shopify](https://github.com/athoscommerce/snap/tree/main/packages/snap-platforms/shopify) section.


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


### Language Translations

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `translations` | Translation overrides | Object | ➖ |
| `translations[languageCode]` | Translation overrides for specific language code | Object | ➖ |
| `translations[languageCode][componentName]` | Translations for a specific component | Component Lang Object | ➖ |

When defining a supported `config.language`, text translations are applied accross components in each template. It is possible to override these default text translations by using `config.translations`

Translations overrides can be provided in two ways:

1. Simple translations: Use a string value for straightforward text replacements.
2. Complex translations: Utilize functions to access component props and apply logic for dynamic text generation.

The example below demonstrates both approaches for French language translations:
- The `FilterSummary` component uses a simple string translation.
- The `SearchHeader` component employs a function to generate dynamic text based on search parameters and also applies translations to the "aria-label" attribute.



```jsx
new SnapTemplates({
	...
	translations: {
		fr: {
			filterSummary: {
				title: {
					value: 'Filtres actuels'
				}
			},
			searchHeader: {
				noResultsText: {
					value: ({ pagination, search }) => {
						return `<span>${search?.query ? 'Aucun résultat trouvé pour' + search.query.string : 'Aucun résultat trouvé' }</span>`
					},
					attributes: {
						'aria-label': `Aucun résultat trouvé pour ${search?.query?.string}`,
					},
				}
			},
		}
	},
	...
```


### Registering additional components
Snap Templates was built to intentionally not support custom Preact components composing the search experience and layouts. Snap Templates supports customization of the Result component and support for custom badge components. Custom result and badge components must first be registered via `config.components` before they can be applied to a feature target. Component registration can be defined as synchronously or asynchronously function imports.



| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `components` | Custom component definitions | Object | ➖ |
| `components.badge[name]` | Custom badge component definition | Function (component) | ➖ |
| `components.result[name]` | Custom result component definition | Function (component) | ➖ |

```jsx
import { SychronousCustomResult } from './components/Result';

new SnapTemplates({
	...
	components: {
		result: {
			SychronousCustomResult: () => SychronousCustomResult,
			DynamicCustomResult: async () => (await import('./components/Result')).DynamicCustomResult,
		},
		badge: {
			CustomPill: async () => (await import('./components/Badges')).CustomPill,
		},
	},
	...
```

### URL Translator Configuration

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `url` | UrlTranslator configuration | UrlTranslatorConfig Object | ➖ |

See [UrlTranslator configuration](https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager/src/Translators/Url) for more documentation


### Templates Theming
Theming in Snap Templates is the primary method of customizing a template. 

See [Theming](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md) for more extensive documentation.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `theme` | Theme configurations | Object | Required |


### Templates Legal Props

When customizing components via theme overrides, not all component props are available. Each component defines a subset of its props as "templates legal" — these are the props that are safe and supported for use within theme configuration. Props that are not templates legal are restricted to internal use and cannot be configured through the theme.

This distinction exists to provide a stable, supported API surface for template customization while preventing access to internal props that could lead to unexpected behavior or break compatibility with future updates.

To see the full list of templates legal props for each component, refer to the **Storybook component library**. Each component's documentation in Storybook will indicate which props are available for use in theme overrides.


### Feature Targets

Feature targets are used to enable and configure various Athos features in a Snap Templates integration. Each feature target specifies where and how a component should be rendered on the page, along with any custom configurations or themes.

Each of these feature targets has its own configuration options, allowing you to tailor the behavior and appearance of the components to your specific needs.

Each target across all features contains the following common properties:

`component` - The template component name to render in the target selector

`resultComponent` - The result component name that will be rendered within the target template component if that template utilizes a result component. Components from the library as well as any components registered via the config can be utilized here.


#### Search

In addition to the common target properties, the following properties apply to the search target(s):

`selector` - DOM selector where this target will inject into

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `search` | Search configuration | Object | ➖ |
| `search.plugins` | Search specific plugins configurations | Object | ➖ |
| `search.targets` | Search target configurations | Array | Required |
| `search.targets[].selector` | CSS selector for search target | String | Required |
| `search.targets[].component` | Component to use for search | String | Required |
| `search.targets[].resultComponent` | Custom result component | String | 'Result' |

#### Autocomplete

In addition to the common target properties, the following properties apply to the autocomplete target(s):

`selector` - DOM selector where this target will inject into

`inputSelector` - The DOM selector of the `<input>` element(s) autocomplete should bind to. Typically this will match the target `selector` value however defining an alternative value in `selector` allows the `component` to inject into a separate DOM node.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `autocomplete` | Autocomplete configuration | Object | ➖ |
| `autocomplete.plugins` | Autocomplete specific plugins configurations | Object | ➖ |
| `autocomplete.inputSelector` | CSS selector for autocomplete input | String | ➖ |
| `autocomplete.targets` | Autocomplete target configurations | Array | Required |
| `autocomplete.targets[].selector` | CSS selector for autocomplete target | String | Required |
| `autocomplete.targets[].component` | Component to use for autocomplete | String | 'Autocomplete' |
| `autocomplete.targets[].resultComponent` | Custom result component for autocomplete | String | 'Result' |

#### Recommendation
In addition to the defining recommendation targets, the recommendation configuration also contains the following following properties:

`settings` - Recommendation Instantiator config settings. 

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation` | Recommendation configuration | Object | ➖ |
| `recommendation.plugins` | Recommendation specific plugins configurations | Object | ➖ |
| `recommendation.settings` | Recommendation Instantiator Config Settings | RecommendationInstantiatorConfigSettings | ➖ |


There are three types of recommendations:

1. default
2. bundle
3. email


#### Default Recommendations

Standard product recommendation typically rendered in a carousel

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.default` | Default recommendation configurations | Object | ➖ |
| `recommendation.default[profileComponentName]` | Configuration for a specific default recommendation profile | Object | ➖ |
| `recommendation.default[profileComponentName].component` | Component to use for default recommendation | String | 'Recommendation' |
| `recommendation.default[profileComponentName].resultComponent` | Custom result component for default recommendation | String | 'Result' |


#### Bundle Recommendations

Product recommendations that require and include a seed product sku.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.bundle` | Bundle recommendation configurations | Object | ➖ |
| `recommendation.bundle[profileComponentName]` | Configuration for a specific bundle recommendation profile | Object | ➖ |
| `recommendation.bundle[profileComponentName].component` | Component to use for bundle recommendation | String | 'RecommendationBundle' |
| `recommendation.bundle[profileComponentName].resultComponent` | Custom result component for bundle recommendation | String | 'Result' |


#### Email Recommendations

Product recommendations for external email campaigns. Email recommendations are not directly rendered via Snap on a storefront or within emails. Instead, email campaigns provide product recommendations by displaying images. Athos' email image generation service utilizes the `resultComponent` from the Snap integration to create email recommendations.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.email` | Email recommendation configurations | Object | ➖ |
| `recommendation.email[profileComponentName]` | Configuration for a specific email recommendation profile | Object | ➖ |
| `recommendation.email[profileComponentName].component` | Component to use for email recommendation | String | 'RecommendationEmail' |
| `recommendation.email[profileComponentName].resultComponent` | Custom result component for email recommendation | String | 'Result' |