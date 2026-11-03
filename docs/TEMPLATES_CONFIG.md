## Templates Config

Snap templates is configuration based. The configuration defines which features are enabled and which template and theme they utilize. A configuration will consist of several top level groups that together define the template.

| Configuration Key | Description |
|----|-----------------------|
| `unlocked` | Set to `true` (together with `validateTemplatesConfigUnlocked`) to enable advanced configuration options. Omit it for locked mode - `unlocked: false` is not accepted |
| `config` | Global configuration options |
| `plugins` | Plugins configuration options |
| `components` | Custom component registration |
| `translations` | Custom language translations |
| `currencies` | Per currency component overrides |
| `url` | URL translator configuration |
| `theme` | Theme configuration |
| `search` | Search feature target declarations |
| `autocomplete` | Autocomplete feature target declarations |
| `recommendation` | Recommendation feature target declarations |
| `quickview` | Quickview feature target declarations - see [Quickview](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_QUICKVIEW.md) |

Here is a minimal example starting configuration to enable search and autocomplete using the `pike` theme.

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const templatesConfig = validateTemplatesConfig({
	config: {
		siteId: '8uyt2m',
		language: 'EN',
		currency: 'USD',
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
		targets: [
			{
				inputSelector: 'input#search-input',
				component: 'AutocompleteFixed',
			},
		],
	},
});

new SnapTemplates(templatesConfig);
```


### Templates Config

| Configuration Option | Description | Type | Default | Required |
|----------------------|-------------|------|:---------:|:---------:|
| `config` | Global configuration options | Object | ➖ | ➖ |
| `config.platform` | Shopping platform for the integration - `'shopify'`, `'bigCommerce'`, `'magento2'` or `'other'` | String | 'other' | ➖ |
| `config.siteId` | Athos Site ID | String | ➖ | ➖ |
| `config.client` | Configuration passed to the Athos API client | ClientConfig Object | ➖ | ➖ |
| `config.language` | Language code for localization - one of the supported ISO 639 codes, uppercase or lowercase (eg: 'EN', 'FR', 'DE') - see [Supported Languages](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#supported-languages) | String | 'en' | ➖ |
| `config.currency` | Currency code for pricing - one of the supported ISO 4217 codes, uppercase or lowercase (eg: 'USD', 'EUR', 'JPY') - see [Supported Currencies](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#supported-currencies) | String | 'usd' | ➖ |

The `config` object defines the integration platform, Athos siteId and current localization to be used.

If a `siteId` is not provided, the siteId found on the `bundle.js` url path will be used. For example `8uyt2m` will be used if the page contains the following script:

```
<script src="https://snapui.athoscommerce.io/8uyt2m/bundle.js" id="athos-context"></script>
```

A `siteId` variable set inside that context script takes precedence over the url path. If no siteId is found in any of these places, `new SnapTemplates` throws `SnapTemplates: config provided must contain a valid config.siteId value`.

It is possible to switch language and currency at run-time using methods on the TemplateStore that are exposed to the window: 
- `window.athos.templates.setCurrency('eur')`
- `window.athos.templates.setLanguage('fr')`


### Unlocked Configuration

By default, Snap Templates operates in "locked" mode, which provides a curated set of configuration options suitable for most integrations. When you need advanced customization capabilities, you can enable "unlocked" mode by wrapping your config in `validateTemplatesConfigUnlocked` and setting the `unlocked` setting to `true`.

#### Locked Mode (Default)

In locked mode, no `unlocked` flag is used — just wrap your config in `validateTemplatesConfig`. This mode is recommended for most integrations as it limits the configuration to the curated set of options.

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: '8uyt2m',
		platform: 'shopify',
	},
	theme: {
		extends: 'pike',
	},
	// ... standard configuration options
});

new SnapTemplates(config);
```

#### Unlocked Mode

To enable unlocked mode you must:

1. Wrap your config in `validateTemplatesConfigUnlocked` instead of `validateTemplatesConfig`
2. Set `unlocked: true` in the config object

This makes additional configuration capabilities available:

1. **Custom Component Prop in Theme Overrides for almost all components** - Ability to use the `customComponent` prop when customizing theme overrides, to completely replace what renders for a specific component. The one exception is `result`, which never supports `customComponent` (locked or unlocked) — use `resultComponent` or `globalResultComponent` to customize result rendering instead. A component used as a `customComponent` must be registered under `components.<componentType>` (see [Registering additional components](#registering-additional-components)).

2. **Custom Plugins** - Ability to define and register custom plugin functions (under `plugins.custom`) that integrate with the controller lifecycle.

```tsx
import { SnapTemplates, validateTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfigUnlocked({
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

new SnapTemplates(config);
```

### Configuration Validation

Wrapping the config in `validateTemplatesConfig` (or `validateTemplatesConfigUnlocked`) makes TypeScript check the configuration: unknown keys, wrong value types, and invalid theme override selectors and props. Write the config object inside the `validateTemplatesConfig(...)` call - the result can then be passed straight to `new SnapTemplates(...)` or assigned to a variable first. Some mistakes are flagged on the line where you make them; mistakes inside `theme.overrides` that your IDE cannot see while you type are reported where the config is passed to `new SnapTemplates(...)`, as an `InvalidThemeOverrides<...>` error. A few values are not checked at all.

> [!IMPORTANT]
> Enable the Snap config ESLint rules with typed linting (both prewired in snapfu-scaffolded projects) — they mark configuration mistakes on the exact line, and many of their messages list the valid options. See [Config Validation & Linting](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_CONFIG_VALIDATION.md) for which mistake is reported where, the exact error messages, the checking limitations, and the linter setup.

### Per Currency Overrides

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `currencies` | Per currency component overrides | Object | ➖ |
| `currencies[currencyCode]` | Overrides applied only while that currency is active | Object | ➖ |
| `currencies[currencyCode][componentName]` | Props for a specific component | Component Props Object | ➖ |

Where a currency has more than one accepted presentation (`$` or `USD`, symbol leading or trailing), the top-level `currencies` key overrides component props for that one currency, layered on top of its built-in locale. The value accepts the same selectors and props as `theme.overrides.default` (props under open-named selectors such as `facet.<field>` are not type-checked here).

```tsx
currencies: {
	AED: {
		price: {
			symbol: ' د.إ', // leading non-breaking space - a symbol placed after the value gets no space of its own
			symbolAfter: true,
		},
	},
},
```

The overrides follow the active currency, including when it changes at run-time via `setCurrency()`. See [Per Currency Overrides](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#per-currency-overrides) for the full layer order.

### Language Translations

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `translations` | Translation overrides | Object | ➖ |
| `translations[languageCode]` | Translation overrides for specific language code | Object | ➖ |
| `translations[languageCode][componentName]` | Translations for a specific component | Component Lang Object | ➖ |

When defining a supported `config.language`, text translations are applied accross components in each template. It is possible to override these default text translations by using the top-level `translations` key. Only the overrides for the active language are applied.

See [Supported Languages](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#supported-languages) for the full list of available language codes.

Translations overrides can be provided in two ways:

1. Simple translations: Use a string value for straightforward text replacements.
2. Complex translations: Utilize functions to access component props and apply logic for dynamic text generation.

When using a function, Snap Templates provides an `activeBreakpoint` value on the `data` argument (`'default' | 'desktop' | 'tablet' | 'mobile'`), so translations can vary by screen size — see [Responsive Translations](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_HOW_TO_TRANSLATIONS.md#responsive-translations) for an example.

The example below demonstrates both approaches for French language translations:
- The `FilterSummary` component uses a simple string translation.
- The `SearchHeader` component employs a function to generate dynamic text based on search parameters and also applies translations to the "aria-label" attribute.



```tsx
new SnapTemplates(validateTemplatesConfig({
	...
	translations: {
		FR: {
			filterSummary: {
				title: {
					value: 'Filtres actuels'
				}
			},
			searchHeader: {
				noResultsText: {
					value: ({ pagination, search }) => {
						return `<span>${search?.query ? 'Aucun résultat trouvé pour ' + search.query.string : 'Aucun résultat trouvé' }</span>`
					},
					attributes: {
						'aria-label': ({ search }) => `Aucun résultat trouvé pour ${search?.query?.string}`,
					},
				}
			},
		}
	},
	...
}));
```


### Registering additional components
Snap Templates was built to intentionally not support custom Preact components composing the search experience and layouts. Snap Templates supports customization of the Result component and support for custom badge components. Custom result and badge components must first be registered via the top-level `components` key before they can be applied to a feature target. In an [unlocked configuration](#unlocked-mode), `components` also accepts other component types, which can then be used with the `customComponent` override prop. Component registration can be defined as synchronously or asynchronously function imports.

`resultComponent` and `customComponent` do not resolve names the same way:

- `resultComponent` accepts built-in result component names (`Result`, `OverlayResult`) and any names registered in `components.result`.
- `customComponent` requires explicit component registration in `components` for the component section being overridden. Built-in fallback names are not used for `customComponent`.

`globalResultComponent` utilizes `resultComponent` name resolution for result rendering and applies that selection globally across templates.

> [!IMPORTANT]
> `result` does not support the `customComponent` override prop, even in an unlocked configuration. Use `resultComponent` (on `search`, `autocompleteFixed`, a recommendation template, etc.) or `globalResultComponent` to customize result rendering instead.



| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `components` | Custom component definitions | Object | ➖ |
| `components.badge[name]` | Custom badge component definition | Function (component) | ➖ |
| `components.result[name]` | Custom result component definition | Function (component) | ➖ |
| `components[componentType][name]` | Unlocked only - custom component for `customComponent` overrides of other component types (e.g. `button`) | Function (component) | ➖ |

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import { SychronousCustomResult } from './components/Result';

new SnapTemplates(validateTemplatesConfig({
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
}));
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


### Feature Targets

Feature targets are used to enable and configure various Athos features in a Snap Templates integration. Each feature target specifies where and how a component should be rendered on the page, along with any custom configurations or themes.

Each of these feature targets has its own configuration options, allowing you to tailor the behavior and appearance of the components to your specific needs.

Each target across all features contains the following common properties:

`component` - The template component name to render in the target selector

#### Search

In addition to the common target properties, the following properties apply to the search target(s):

`selector` - DOM selector where this target will inject into

`emptyTarget` - Whether to remove the existing content of the `selector` element as soon as it is found. Defaults to `true`. Set it to `false` to keep content such as a loading skeleton in place until the search components are ready - see [Keeping a loading skeleton](#keeping-a-loading-skeleton).

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `search` | Search configuration | Object | ➖ |
| `search.globals` | Search request globals | Object | ➖ |
| `search.settings` | Search store settings | SearchStoreConfigSettings Object | ➖ |
| `search.plugins` | Search specific plugins configurations | Object | ➖ |
| `search.tabs` | Search tab configurations - see [Tabs](#tabs) | Array | ➖ |
| `search.targets` | Search target configurations | Array | Required |
| `search.targets[].selector` | CSS selector for search target | String | Required |
| `search.targets[].component` | Component to use for search - `'Search'`, `'SearchCollapsible'` or `'SearchHorizontal'` | String | Required |
| `search.targets[].emptyTarget` | Remove the target's existing content when it is found; set to `false` to keep it until the search components render | Boolean | true |

##### Keeping a loading skeleton

By default the content of a search target is removed as soon as the target is found, which leaves the element empty while the search request, theme and components load. To show a loading skeleton for that time instead, place the skeleton markup inside the target element and set `emptyTarget: false`:

```html
<div id="athos-templates">
	<!-- placeholder skeleton markup - shown until the search components render -->
	<div class="skeleton-toolbar"></div>
	<div class="skeleton-results"></div>
</div>
```

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const templatesConfig = validateTemplatesConfig({
	config: {
		siteId: 'REPLACE_WITH_YOUR_SITE_ID',
	},
	theme: {
		extends: 'pike',
	},
	search: {
		targets: [
			{
				selector: '#athos-templates',
				component: 'Search',
				emptyTarget: false,
			},
		],
	},
});

new SnapTemplates(templatesConfig);
```

With `emptyTarget: false` the target renders once the search response has returned and the theme has loaded, and the existing content is then replaced in full - nothing inside the target is kept alongside the search components. An inline `min-height` on the target is still removed as soon as the target is found, so give the skeleton itself the height you want to reserve.

#### Autocomplete

In addition to the common target properties, the following properties apply to the autocomplete target(s):

`inputSelector` - The DOM selector of the `<input>` element(s) autocomplete should bind to. This is required for each autocomplete target.

`selector` - DOM selector of the element the component is injected after. If not provided, `inputSelector` is used as the selector. In both cases the component renders in a new element inserted directly after the matched element.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `autocomplete` | Autocomplete configuration | Object | ➖ |
| `autocomplete.action` | URL to navigate to when the shopper presses Enter in the input (required if input is not inside a `<form>`; when set, it is used instead of the form's `action`). It is also the root of the links autocomplete renders, such as terms and 'see more' | String | ➖ |
| `autocomplete.globals` | Autocomplete request globals | Object | ➖ |
| `autocomplete.settings` | Autocomplete store settings, merged over the default `{ trending: { limit: 5 } }` | AutocompleteStoreConfigSettings Object | ➖ |
| `autocomplete.plugins` | Autocomplete specific plugins configurations | Object | ➖ |
| `autocomplete.tabs` | Autocomplete tab configurations - see [Tabs](#tabs) | Array | ➖ |
| `autocomplete.targets` | Autocomplete target configurations | Array | Required |
| `autocomplete.targets[].inputSelector` | DOM selector for the autocomplete `<input>` element | String | Required |
| `autocomplete.targets[].selector` | DOM selector of the element the component is injected after; defaults to `inputSelector` | String | ➖ |
| `autocomplete.targets[].component` | Component to use for autocomplete - `'AutocompleteFixed'`, `'AutocompleteModal'` or `'AutocompleteSlideout'` | String | Required |

#### Tabs

Tabs allow a single search or autocomplete experience to span multiple catalogs. Each tab is backed by its own controller, scoped to its own `siteId`, and shoppers switch between them with the `tabSelection` component.

Tabs are supported for the `search` and `autocomplete` features. A minimum of two tabs is required for the `tabSelection` component to render.

See [Tabbed Search](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_TABBED_SEARCH.md) for a complete walkthrough.

##### Tab configuration

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `tabs[].id` | Unique tab identifier, also used as the controller id | String | Required |
| `tabs[].siteId` | Athos Site ID the tab queries, unique within the feature | String | Required |
| `tabs[].param` | URL identifier for the tab's catalog, unique within the feature | String | Required |
| `tabs[].label` | Display label for the tab | String | `tabs[].id` |
| `tabs[].default` | Selects this tab on initial load | Boolean | first tab |
| `tabs[].globals` | Request globals for this tab only, merged over the feature level globals (not type-checked) | Object | ➖ |
| `tabs[].settings` | Store settings for this tab only, merged over the feature level settings | Object | ➖ |
| `tabs[].plugins` | Plugins for this tab only, replacing the top-level and feature level plugins - including the built-in plugins that are otherwise enabled by default | Object | ➖ |
| `search.tabs[].prefetch` | Search this tab before it is selected | Boolean | true |

Every tab `id` must be unique across the entire configuration, including between search tabs and autocomplete tabs. Within a feature, every tab must also have its own `siteId` and its own `param`.

> [!IMPORTANT]
> When tabs are used in both `search` and `autocomplete`, a tab for a given catalog **must be configured with the same `siteId` and the same `param` in both features**. Unlike `id`, which must be unique across the entire configuration, `param` is meant to be shared between the two. This pairing is what allows a shopper to submit from a tabbed autocomplete and land on the matching tab of the search results page - an autocomplete tab whose `param` matches no search tab drops the shopper on the default tab.

> [!NOTE]
> For how tabs work - what happens to a duplicate `id`, how `param` namespaces the URL, how `plugins` replacement and `prefetch` behave, and which controller the targets attach to - see [Tabbed Search](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_TABBED_SEARCH.md).

#### Recommendation
In addition to the recommendation targets, the recommendation configuration also contains the following properties:

`settings` - Recommendation Instantiator config settings. 

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation` | Recommendation configuration | Object | ➖ |
| `recommendation.plugins` | Recommendation specific plugins configurations | Object | ➖ |
| `recommendation.settings` | Recommendation Instantiator Config Settings. `branch` defaults to `'production'` | RecommendationInstantiatorConfigSettings (without `settings`) | `{ branch: 'production' }` |


There are three types of recommendations:

1. default
2. bundle
3. email

Each `[profileComponentName]` key is matched against the template component name set on the recommendation profile. Snap Templates also registers these built-in profile names, and your entries are merged with them:

- default: `SnapTemplatesRecommendationCarousel` (`Recommendation`), `SnapTemplatesRecommendationGrid` (`RecommendationGrid`)
- bundle: `SnapTemplatesBundleDefault` (`RecommendationBundle`), `SnapTemplatesBundleEasyAdd` (`RecommendationBundleEasyAdd`), `SnapTemplatesBundleList` (`RecommendationBundleList`), `SnapTemplatesBundleVertical` (`RecommendationBundleVertical`)
- email: `SnapTemplatesEmailDefault` (`RecommendationEmail`)


#### Default Recommendations

Standard product recommendation typically rendered in a carousel

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.default` | Default recommendation configurations | Object | ➖ |
| `recommendation.default[profileComponentName]` | Configuration for a specific default recommendation profile | Object | ➖ |
| `recommendation.default[profileComponentName].component` | Component to use for default recommendation - `'Recommendation'` or `'RecommendationGrid'` | String | Required |


#### Bundle Recommendations

Product recommendations that require and include a seed product sku.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.bundle` | Bundle recommendation configurations | Object | ➖ |
| `recommendation.bundle[profileComponentName]` | Configuration for a specific bundle recommendation profile | Object | ➖ |
| `recommendation.bundle[profileComponentName].component` | Component to use for bundle recommendation - `'RecommendationBundle'`, `'RecommendationBundleEasyAdd'`, `'RecommendationBundleList'` or `'RecommendationBundleVertical'` | String | Required |


#### Email Recommendations

Product recommendations for external email campaigns. Email recommendations are not directly rendered via Snap on a storefront or within emails. Instead, email campaigns provide product recommendations by displaying images.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.email` | Email recommendation configurations | Object | ➖ |
| `recommendation.email[profileComponentName]` | Configuration for a specific email recommendation profile | Object | ➖ |
| `recommendation.email[profileComponentName].component` | Component to use for email recommendation - `'RecommendationEmail'` | String | Required |