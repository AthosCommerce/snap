## Templates Config

Snap templates is configuration based. The configuration defines which features are enabled and which template and theme they utilize. A configuration will consist of several top level groups that together define the template.

| Configuration Key | Description |
|----|-----------------------|
| `unlocked` | Enable advanced configuration options (default: `false`) |
| `config` | Global configuration options |
| `plugins` | Plugins configuration options |
| `components` | Custom component registration |
| `translations` | Custom language translations |
| `url` | URL translator configuration |
| `theme` | Theme configuration |
| `search` | Search feature target declarations |
| `autocomplete` | Autocomplete feature target declarations |
| `recommendation` | Recommendation feature target declarations |

Here is a minimal example starting configuration to enable search and autocomplete using the `pike` theme.

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const templatesConfig = validateTemplatesConfig({
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
| `config.platform` | Shopping platform for the integration | String | 'other' | ➖ |
| `config.siteId` | Athos Site ID | String | ➖ | ➖ |
| `config.language` | Language code for localization - supports ISO 639 codes, case-insensitive (eg: 'EN', 'FR', 'DE') - see [Supported Languages](TEMPLATES_LOCALIZATION.md#supported-languages) | String | 'en' | ➖ |
| `config.currency` | Currency code for pricing - supports ISO 4217 codes, case-insensitive (eg: 'USD', 'EUR', 'JPY') - see [Supported Currencies](TEMPLATES_LOCALIZATION.md#supported-currencies) | String | 'usd' | ➖ |

The `config` object defines the integration platform, Athos siteId and current localization to be used.

If a `siteId` is not provided, the siteId found on the `bundle.js` url path will be used. For example `8uyt2m` will be used if the page contains the following script:

```
<script src="https://snapui.athoscommerce.io/8uyt2m/bundle.js" id="athos-context"></script>
```

It is possible to switch language and currency at run-time using methods on the TemplateStore that are exposed to the window: 
- `window.athos.templates.setCurrency('eur')`
- `window.athos.templates.setLanguage('fr')`


### Unlocked Configuration

By default, Snap Templates operates in "locked" mode, which provides a curated set of configuration options suitable for most integrations. When you need advanced customization capabilities, you can enable "unlocked" mode by wrapping your config in `validateTemplatesConfigUnlocked` and setting the `unlocked` setting to `true`.

#### Locked Mode (Default)

In locked mode, no `unlocked` flag is required — just wrap your config in `validateTemplatesConfig`. This mode is recommended for most integrations as it provides type safety, prevents configuration errors, and ensures compatibility with future updates.

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

1. **Custom Component Prop in Theme Overrides for all components** - Ability to use the `customComponent` prop when customizing theme overrides, to completely replace what renders for a specific component.

2. **Custom Plugins** - Ability to define and register custom plugin functions that integrate with the controller lifecycle.

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

### Language Translations

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `translations` | Translation overrides | Object | ➖ |
| `translations[languageCode]` | Translation overrides for specific language code | Object | ➖ |
| `translations[languageCode][componentName]` | Translations for a specific component | Component Lang Object | ➖ |

When defining a supported `config.language`, text translations are applied accross components in each template. It is possible to override these default text translations by using `config.translations`

See [Supported Languages](TEMPLATES_LOCALIZATION.md#supported-languages) for the full list of available language codes.

Translations overrides can be provided in two ways:

1. Simple translations: Use a string value for straightforward text replacements.
2. Complex translations: Utilize functions to access component props and apply logic for dynamic text generation.

When using a function, Snap Templates provides an `activeBreakpoint` value on the `data` argument (`'default' | 'desktop' | 'tablet' | 'mobile'`), so translations can vary by screen size — see [Responsive Translations](TEMPLATES_HOW_TO.md#responsive-translations) for an example.

The example below demonstrates both approaches for French language translations:
- The `FilterSummary` component uses a simple string translation.
- The `SearchHeader` component employs a function to generate dynamic text based on search parameters and also applies translations to the "aria-label" attribute.



```tsx
new SnapTemplates(validateTemplatesConfig({
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
}));
```


### Registering additional components
Snap Templates was built to intentionally not support custom Preact components composing the search experience and layouts. Snap Templates supports customization of the Result component and support for custom badge components. Custom result and badge components must first be registered via `config.components` before they can be applied to a feature target. Component registration can be defined as synchronously or asynchronously function imports.

`resultComponent` and `customComponent` do not resolve names the same way:

- `resultComponent` accepts built-in result component names (`Result`, `OverlayResult`) and any names registered in `components.result`.
- `customComponent` requires explicit component registration in `components` for the component section being overridden. Built-in fallback names are not used for `customComponent`.

`globalResultComponent` utilizes `resultComponent` name resolution for result rendering and applies that selection globally across templates.



| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `components` | Custom component definitions | Object | ➖ |
| `components.badge[name]` | Custom badge component definition | Function (component) | ➖ |
| `components.result[name]` | Custom result component definition | Function (component) | ➖ |

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

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `search` | Search configuration | Object | ➖ |
| `search.globals` | Search request globals | Object | ➖ |
| `search.plugins` | Search specific plugins configurations | Object | ➖ |
| `search.tabs` | Search tab configurations - see [Tabs](#tabs) | Array | ➖ |
| `search.targets` | Search target configurations | Array | Required |
| `search.targets[].selector` | CSS selector for search target | String | Required |
| `search.targets[].component` | Component to use for search | String | Required |

#### Autocomplete

In addition to the common target properties, the following properties apply to the autocomplete target(s):

`inputSelector` - The DOM selector of the `<input>` element(s) autocomplete should bind to. This is required for each autocomplete target.

`selector` - DOM selector where this target will inject into. If not provided, `inputSelector` is used as the selector, and the component is injected after the matched input element unless configured otherwise.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `autocomplete` | Autocomplete configuration | Object | ➖ |
| `autocomplete.action` | URL to navigate to on form submission (required if input is not inside a `<form>`) | String | ➖ |
| `autocomplete.globals` | Autocomplete request globals | Object | ➖ |
| `autocomplete.plugins` | Autocomplete specific plugins configurations | Object | ➖ |
| `autocomplete.tabs` | Autocomplete tab configurations - see [Tabs](#tabs) | Array | ➖ |
| `autocomplete.targets` | Autocomplete target configurations | Array | Required |
| `autocomplete.targets[].inputSelector` | DOM selector for the autocomplete `<input>` element | String | Required |
| `autocomplete.targets[].selector` | DOM selector where the component injects; defaults to `inputSelector` | String | ➖ |
| `autocomplete.targets[].component` | Component to use for autocomplete | String | 'AutocompleteFixed' |

#### Tabs

Tabs allow a single search or autocomplete experience to span multiple catalogs. Each tab is backed by its own controller, scoped to its own `siteId`, and shoppers switch between them with the `tabSelection` component.

Tabs are supported for the `search` and `autocomplete` features. A minimum of two tabs is required for the `tabSelection` component to render.

See [Tabbed Search](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_TABBED_SEARCH.md) for a complete walkthrough.

##### Tab configuration

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `tabs[].id` | Unique tab identifier, also used as the controller id | String | Required |
| `tabs[].siteId` | Athos Site ID the tab queries | String | Required |
| `tabs[].param` | URL identifier for the tab's catalog | String | Required |
| `tabs[].label` | Display label for the tab | String | `tabs[].id` |
| `tabs[].default` | Selects this tab on initial load | Boolean | first tab |
| `tabs[].globals` | Request globals for this tab only | Object | ➖ |
| `tabs[].settings` | Store settings for this tab only, merged over the feature level settings | Object | ➖ |
| `tabs[].plugins` | Plugins for this tab only, replacing the feature level plugins | Object | ➖ |
| `search.tabs[].prefetch` | Search this tab before it is selected | Boolean | true |

`tabs[].id` must be unique across the entire configuration, including between search tabs and autocomplete tabs. The id becomes the controller id, and controllers share a single registry - a duplicate id is silently skipped and the affected tab never renders.

`tabs[].param` does two things. It is the value written to the URL when the tab is selected, and it namespaces that tab's `filter`, `sort`, `pageSize`, `rq`, and `page` parameters so two tabs can hold different refinements and pagination positions at the same time.

The URL parameter holding the active tab is always `tab` - it is registered as a custom query parameter on every tab controller and is not configurable.

The `query` parameter is deliberately **not** namespaced - a single query applies across every tab.

> [!IMPORTANT]
> When tabs are used in both `search` and `autocomplete`, a tab for a given catalog **must be configured with the same `siteId` and the same `param` in both features**. Unlike `id`, which must be unique across the entire configuration, `param` is meant to be shared between the two. This pairing is what allows a shopper to submit from a tabbed autocomplete and land on the matching tab of the search results page - an autocomplete tab whose `param` matches no search tab drops the shopper on the default tab.

`tabs[].plugins` **replaces** the feature level `plugins` for that tab rather than merging with them. Supplying an empty object runs no plugins for that tab.

`prefetch` applies to search tabs only - autocomplete has nothing to fetch until the shopper types. Setting it to `false` defers a tab's request until it is selected, at the cost of showing no result count on that tab beforehand.

Targets are attached to the default tab's controller, so adding tabs does not produce an additional request for the untabbed controller.

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


#### Bundle Recommendations

Product recommendations that require and include a seed product sku.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.bundle` | Bundle recommendation configurations | Object | ➖ |
| `recommendation.bundle[profileComponentName]` | Configuration for a specific bundle recommendation profile | Object | ➖ |
| `recommendation.bundle[profileComponentName].component` | Component to use for bundle recommendation | String | 'RecommendationBundle' |


#### Email Recommendations

Product recommendations for external email campaigns. Email recommendations are not directly rendered via Snap on a storefront or within emails. Instead, email campaigns provide product recommendations by displaying images.

| Configuration Option | Description | Type | Default |
|----------------------|-------------|------|---------|
| `recommendation.email` | Email recommendation configurations | Object | ➖ |
| `recommendation.email[profileComponentName]` | Configuration for a specific email recommendation profile | Object | ➖ |
| `recommendation.email[profileComponentName].component` | Component to use for email recommendation | String | 'RecommendationEmail' |