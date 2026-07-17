## Templates How Tos

This page covers common how-to examples and patterns you might encounter when building a Snap Templates integration.

---

### Layout Options & Layout Selector

The `layoutOptions` prop on the Search component lets users switch between pre-defined result grid configurations at runtime. A `layoutSelector` widget in a toolbar renders the toggle UI. When a user selects an option, its `overrides` are applied to the component tree automatically.

#### Basic Setup

Each option defines a `value`, `label`, display `icon`, an optional `default` flag, and an `overrides` block that is applied when that option is active. The `layoutSelector` module **must** be present somewhere in one of the toolbar layouts for the overrides to take effect.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				search: {
					layoutOptions: [
						{
							value: 1,
							label: '4 Wide',
							icon: 'layout-grid-4',
							default: true,
							overrides: {
								components: {
									'search results': {
										columns: 4,
									},
								},
							},
						},
						{
							value: 2,
							label: '3 Wide',
							icon: 'layout-grid-3',
							overrides: {
								components: {
									'search results': {
										columns: 3,
									},
								},
							},
						},
						{
							value: 3,
							label: '2 Wide',
							icon: 'layout-grid-2',
							overrides: {
								components: {
									'search results': {
										columns: 2,
									},
								},
							},
						},
					],
				},

				// Place the layoutSelector widget in the top toolbar
				'search toolbar.top': {
					layout: [
						['banner.header'],
						['searchHeader', '_', 'perPage', 'sortBy', 'layoutSelector'],
					],
				},

				// Optional: configure the selector appearance
				'search layoutSelector': {
					type: 'list',
					hideLabel: true,
					hideOptionLabels: true,
				},
			},
		},
	},
	...
});
```

#### Responsive Layout Options

You can provide a different set of `layoutOptions` at each breakpoint. This is useful for limiting the available choices on smaller screens (e.g. only 1- or 2-column grids on mobile).

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				search: {
					layoutOptions: [
						{
							value: 1,
							label: '4 Wide',
							icon: 'layout-grid-4',
							default: true,
							overrides: {
								components: { 'search results': { columns: 4 } },
							},
						},
						{
							value: 2,
							label: '3 Wide',
							icon: 'layout-grid-3',
							overrides: {
								components: { 'search results': { columns: 3 } },
							},
						},
					],
				},
				'search toolbar.top': {
					layout: [['searchHeader', '_', 'sortBy', 'perPage', 'layoutSelector']],
				},
			},
			mobile: {
				search: {
					layoutOptions: [
						{
							value: 3,
							label: '2 Wide',
							icon: 'layout-grid-2',
							default: true,
							overrides: {
								components: { 'search results': { columns: 2 } },
							},
						},
						{
							value: 4,
							label: '1 Wide',
							icon: 'layout-grid-1',
							overrides: {
								components: { 'search results': { columns: 1 } },
							},
						},
					],
				},
			},
		},
	},
	...
});
```

> [!NOTE]
> The user's selected layout option is persisted in controller storage, so their preference is remembered across page navigations within the same session.

---

### Using Theme Variables in Styles

Theme breakpoint values (set in `theme.variables.breakpoints`) are available inside both the global `theme.style` function and component-level style scripts. Using them ensures your media queries always stay in sync with the responsive overrides defined in your theme configuration.

#### Global Styles with Breakpoints

The `theme.style` function receives the full theme object, giving you access to `variables.breakpoints`. Use template literals to build Emotion-compatible media query keys.

```tsx
export const globalStyles: StyleScript = (theme: { name?: string; variables: ThemeVariables }) => {
	const { variables } = theme;

	return {
		// Base styles — apply at all sizes
		'.ss__result__details__title': {
			fontSize: '14px',
		},

		// Tablet and below
		[`@media (max-width: ${variables.breakpoints.tablet}px)`]: {
			'.ss__result__details__title': {
				fontSize: '13px',
			},
			'.ss__search__sidebar': {
				width: '220px',
			},
		},

		// Mobile and below
		[`@media (max-width: ${variables.breakpoints.mobile}px)`]: {
			'.ss__result__details__title': {
				fontSize: '12px',
			},
		},
	};
};

new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		variables: {
			breakpoints: { 
				mobile: 768, 
				tablet: 1024, 
				desktop: 1280 
			},
		},
		style: globalStyles,
	},
	...
});
```

---

### Customizing Toolbar Layouts

The Search component renders three toolbars — **top**, **middle**, and **bottom** — that frame the result grid. Each toolbar accepts a `layout` prop: a 2-D array where each inner array defines a row, and the strings within a row are the module names to render left-to-right.

The `_` token is a flex spacer. Items to the left of `_` are left-aligned, items between two `_` tokens are centered, and items to the right of `_` are right-aligned.

**Available modules:**

| Module | Description |
|---|---|
| `searchHeader` | Page title / search query heading |
| `filterSummary` | Active filter chips |
| `breadcrumbs` | Breadcrumb navigation |
| `layoutSelector` | Grid layout toggle (requires `layoutOptions`) |
| `perPage` | Results-per-page selector |
| `sortBy` | Sort order selector |
| `pagination` | Page number controls |
| `paginationInfo` | "Showing X–Y of Z results" text |
| `button.sidebar-toggle` | Collapsible sidebar toggle button |
| `banner.header` | Header banner slot |
| `banner.banner` | Main content banner slot |
| `banner.footer` | Footer banner slot |
| `facetsHorizontal` | Horizontal facet bar (SearchHorizontal) |
| `_` | Flex spacer / alignment separator |

Toolbar layouts are configured via `theme.overrides` breakpoint keys, for example `theme.overrides.default['toolbar.top']`, `theme.overrides.default['toolbar.middle']`, or `theme.overrides.default['toolbar.bottom']`.

You can also hide a toolbar entirely using the `hideTopToolbar`, `hideMiddleToolbar`, or `hideBottomToolbar` props on the Search templates.

#### Example: Moving Sort & Per-Page to the Top Toolbar

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				'toolbar.top': {
					layout: [
						['banner.header'],
						['searchHeader', '_', 'sortBy', 'perPage', 'layoutSelector'],
					],
				},
				'toolbar.middle': {
					layout: [
						['filterSummary'],
						['paginationInfo', '_'],
						['banner.banner'],
					],
				},
				'toolbar.bottom': {
					layout: [
						['banner.footer'],
						['_', 'pagination', '_'],
					],
				},
			},
		},
	},
	...
});
```

#### Example: Responsive Toolbar Adjustments

On mobile, surface the sidebar toggle button and drop the desktop sort/paging row into its own row:

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				'toolbar.top': {
					layout: [
						['banner.header'],
						['searchHeader', '_', 'button.sidebar-toggle'],
					],
				},
				'toolbar.middle': {
					layout: [
						['sortBy', 'perPage', '_', 'paginationInfo'],
						['banner.banner'],
					],
				},
			},
			mobile: {
				'toolbar.top': {
					layout: [
						['banner.header'],
						['_', 'searchHeader', '_'],
						['banner.banner'],
					],
				},
				'toolbar.middle': {
					layout: [
						['button.sidebar-toggle', '_', 'paginationInfo'],
						['sortBy', 'perPage'],
					],
				},
			},
		},
	},
	...
});
```


#### Example: SearchHorizontal Toolbar should contain facetsHorizontal

The `searchHorizontal` template renders facets inline above the results rather than in a sidebar. The `toolbar.middle` is the natural place for the facetsHorizontal component.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				'searchHorizontal toolbar.top': {
					layout: [
						['searchHeader'],
						['banner.header'],
					],
				},
				'searchHorizontal toolbar.middle': {
					layout: [
						['filterSummary'],
						['facetsHorizontal'],
						['paginationInfo', '_', 'sortBy', 'perPage'],
						['banner.banner'],
					],
				},
				'searchHorizontal toolbar.bottom': {
					layout: [
						['banner.footer'],
						['_', 'pagination', '_'],
					],
				},
			},
			mobile: {
				'searchHorizontal toolbar.top': {
					layout: [['banner.header'], ['searchHeader', '_']],
				},
				'searchHorizontal toolbar.middle': {
					layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']],
				},
			},
		},
	},
	...
});
```

---

### Customizing Autocomplete Layouts

Snap Templates ships three autocomplete variants — `AutocompleteFixed`, `AutocompleteModal`, and `AutocompleteSlideout`. All of them use the `AutocompleteLayout` component under the hood, whose `layout` prop controls which sections appear and how they are arranged. The `results` sub-component exposes `columns` and `rows` to control the product grid inside the dropdown.

#### How the `layout` Prop Works

The `layout` prop on an autocomplete template component accepts either a **2-D array of module names** (same row/column semantics as the Search toolbar) or a **prebuilt layout string**.

##### Prebuilt Layouts

Instead of constructing a custom module array, you can pass one of the following string values:

| Prebuilt | Expands To | Description |
|---|---|---|
| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only — no product results grid |
| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |
| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |
| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |

```tsx
// Use a prebuilt layout as a simple string
autocompleteFixed: {
    layout: 'terms',
}
```

> **Note:** Prebuilt layout strings are only valid as the top-level `layout` value. They cannot be used inside a layout array (e.g., `['terms']` is **not** valid — use `layout: 'terms'` instead).

##### Custom Layout Arrays

For full control, pass a 2-D array of module names. The special column tokens `c1`–`c4` represent flexible flex columns that each have their own inner `layout` array (configurable via `column1`–`column4` props). Use them to group sections side-by-side.

**Available modules:**

| Module | Description |
|---|---|
| `c1` | Flex column 1 (default: terms list) |
| `c2` | Flex column 2 (default: facets) |
| `c3` | Flex column 3 (default: results + see more) |
| `c4` | Flex column 4 (default: results + see more) |
| `termsList` | Combined history, trending & suggestion terms |
| `terms.suggestions` | Suggestion terms only |
| `terms.trending` | Trending terms only |
| `terms.history` | History terms only |
| `facets` | Facet list |
| `facetsHorizontal` | Horizontal facet bar |
| `content` | Product results |
| `no-results` | No-results message |
| `button.see-more` | "See N results" CTA |
| `banner.header` | Header banner |
| `banner.banner` | Main banner |
| `banner.footer` | Footer banner |
| `banner.left` | Left banner |
| `_` | Flex spacer |

#### Understanding `columns` and `rows` on the Results Sub-Component

Inside the autocomplete dropdown, product results are rendered by the `Results` component. Two props cap the visible result count:

- **`columns`** — how many result cards appear per row
- **`rows`** — how many rows of results to show

The total number of visible products is `columns × rows`. For example, `columns: 2, rows: 2` shows a 2×2 grid of 4 products. Set these props on the `results` sub-component for the specific autocomplete component you are configuring: use the matching template variant selector such as `'autocompleteFixed results'` or `'autocompleteModal results'` when configuring those templates.

```
columns: 2, rows: 2  →  [ result ][ result ]
                         [ result ][ result ]   (4 products total)

columns: 4, rows: 1  →  [ result ][ result ][ result ][ result ]   (4 products total)
```

#### Example: Standard Three-Column Layout

The most common desktop layout places terms in the left column, facets in the middle, and results with a see-more link on the right.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				// Three-column layout: c1 contains terms | c2 contains facets | c3 contains results and see more button. 
				autocompleteFixed: {
					layout: [['c1', 'c2', 'c3']],
				},
				// 3x2 result grid
				'autocompleteFixed results': {
					columns: 3,
					rows: 2,
				},
			},
			mobile: {
				// Collapse to a compact terms-only dropdown on mobile
				autocompleteFixed: {
					layout: 'mobile',
				},
			},
			tablet: {
				// Two-column layout on tablet: terms | results (no facets)
				autocompleteFixed: {
					layout: [['c1', 'c3']],
				},
				// 1x3 result grid
				'autocompleteFixed results': {
					columns: 3,
					rows: 1,
				},
			},
		},
	},
	...
});
```

#### Example: Customizing Column Widths & Inner Layouts

Each `c1`–`c4` column accepts a `width` (fixed px string or `'auto'`) and a `layout` array of inner modules. Override them via the cascading prop path on the autocomplete component.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				autocompleteFixed: {
					layout: [['c1', 'c2', 'c3']],

					// Narrow terms column with history above trending
					column1: {
						width: '160px',
						layout: ['terms.history', 'terms.trending', 'terms.suggestions'],
					},

					// Medium facets column
					column2: {
						width: '180px',
						layout: ['facets'],
					},

					// Remaining space for results + CTA
					column3: {
						width: 'auto',
						layout: [['content'], ['_', 'button.see-more']],
					},
				},

				// 2 columns × 3 rows = 6 products visible
				'autocompleteFixed results': {
					columns: 2,
					rows: 3,
				},
			},
		},
	},
	...
});
```

---

### Custom Component Overrides

The `customComponent` prop lets you completely replace a component in the tree with your own implementation. It works by referencing the name of a component you've registered in the `components` section of your configuration. This is only available in an **unlocked** configuration.

#### Setup

You need three things:

1. Use `SnapTemplatesConfigUnlocked` as your config type and set `unlocked: true`
2. Register your custom component in `components` under the correct component type key
3. Set `customComponent: 'YourRegisteredName'` in the appropriate theme override path

#### Example: Replacing `perPage` with a Custom Component

First, write the custom component. It receives the full `PerPageProps` from the library — the same props the built-in component would get, including the `controller` reference.

```tsx
// components/MyPerPage.tsx
import type { PerPageProps } from '@athoscommerce/snap-preact/components';

export const MyPerPage = ({ controller }: PerPageProps) => {
	const store = controller.store;
	const { pagination } = store;
	
	return (
		<div className="my-per-page">
			<label>Show:</label>
			{pagination.pageSizeOptions.map((option) => (
				<button
					key={option.value}
					className={option.active ? 'active' : ''}
					onClick={() => pagination.setPageSize(option.value)}
				>
					{option.label}
				</button>
			))}
		</div>
	);
};
```

Then register it and wire it in via `customComponent`. Because `customComponent` lives inside a theme override, the same cascading path syntax applies. You can also target a specific instance rather than replacing every `perPage` globally.

> [!NOTE]
> Async imports (`async () => (await import(...)).MyComponent`) are recommended for custom components so they are code-split and only loaded when the template first renders.

```tsx
import { SnapTemplates } from '@athoscommerce/snap-preact';
import type { SnapTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config: SnapTemplatesConfigUnlocked = {
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	components: {
		// Register under the 'perPage' component type
		perPage: {
			MyPerPage: async () => (await import('./components/MyPerPage')).MyPerPage,
		},
	},
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				// Replace every perPage in the theme with MyPerPage
				perPage: {
					customComponent: 'MyPerPage',
				},
				//or
				//Replace only specific perPage components based on the treePath. 
				'toolbar.top perPage': {
					customComponent: 'MyPerPage',
				}
			},
		},
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
};

new SnapTemplates(config);
```

---

### Using the Shopify Markets Plugin

The **Shopify Markets plugin** automatically fetches and displays region-specific product pricing from the Shopify Storefront API for multi-currency storefronts using Shopify Markets.
When this plugin is configured on Shopify, SnapTemplates also automatically applies the `price.format` override using `shopifyMarketsPriceFormat` (unless you already set a custom `price.format`).
The formatter reads script context with `getContext(['format'])`.

Register the plugin in your SnapTemplates configuration:

```tsx
const config = {
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
	},
	plugins: {
		shopify: {
			markets: {
				token: 'your-storefront-access-token',
			},
		},
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
};

new SnapTemplates(config);
```

Optional script context variables used by `shopifyMarketsPriceFormat`:

```html
<script id="athos-context" src="bundle.js">
	format = '${{amount}}';
</script>
```

In your result component, check the `priceFetched` flag before rendering prices.
You do not need to manually import or pass `shopifyMarketsPriceFormat` when using the snap `Price` component.

```tsx
import { observer } from 'mobx-react-lite';
import { Price } from '@athoscommerce/snap-preact/components';

export const CustomResult = observer(({ result, treePath }: ResultProps) => {
	const core = result.display.mappings.core;
	const { priceFetched } = result.state;
	return (
		<article>
			<h2>{core?.name}</h2>
			{priceFetched && (
				<Price value={core?.price} treePath={treePath} />
			)}
		</article>
	);
});
```

If you need a custom formatter, you can still explicitly set `theme.overrides.default.price.format` in your template config.
												
For detailed configuration options, troubleshooting, and advanced usage, see the [Shopify Markets plugin documentation](https://athoscommerce.github.io/snap/reference-platforms-shopify#pluginshopifymarkets).
