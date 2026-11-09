## Customizing Toolbar Layouts

The Search component (and `SearchCollapsible` and `SearchHorizontal`, which are built on it) renders three toolbars — **top**, **middle**, and **bottom** — that frame the result grid. Each toolbar accepts a `layout` prop: a 2-D array where each inner array defines a row, and the strings within a row are the module names to render left-to-right.

The `_` token is a flex spacer: each `_` grows to fill the free space in its row, and the free space is split equally between the `_` tokens in that row. So items before the first `_` sit at the left, items after the last `_` sit at the right, and `['_', 'pagination', '_']` centers `pagination`.

**Available modules:**

| Module | Description |
|---|---|
| `searchHeader` | Page title / search query heading |
| `filterSummary` | Active filter chips |
| `breadcrumbs` | Breadcrumb navigation |
| `layoutSelector` | Grid layout toggle (requires `layoutOptions`) |
| `perPage` | Results-per-page selector |
| `sortBy` | Sort order selector |
| `pagination` | Page number controls (a load-more button when infinite scroll is enabled) |
| `paginationInfo` | "X - Y of Z results" text ("Z results" when there is one page) |
| `button.sidebar-toggle` | Collapsible sidebar toggle button |
| `banner.header` | Header banner slot |
| `banner.banner` | Main content banner slot |
| `banner.footer` | Footer banner slot |
| `facetsHorizontal` | Horizontal facet bar (used by SearchHorizontal's default middle toolbar) |
| `tabSelection` | Tab selection for tabbed search |
| `searchInput` | Search input holding the current query - submitting searches the new query from page one without filters |
| `_` | Flex spacer / alignment separator |

Every module except the banners, `searchHeader`, `tabSelection`, `searchInput` and `_` renders only when the search has results.

Toolbar layouts are configured via `theme.overrides` breakpoint keys, for example `theme.overrides.default['toolbar.top']`, `theme.overrides.default['toolbar.middle']`, or `theme.overrides.default['toolbar.bottom']`. An unscoped selector such as `'toolbar.top'` applies to that toolbar in every search template (`Search`, `SearchCollapsible` and `SearchHorizontal`) and takes priority over the theme's own per-template toolbar layouts at every breakpoint. To target one template, start the selector with the template name: `'search toolbar.top'` targets only `Search`, `'searchHorizontal toolbar.top'` only `SearchHorizontal`.

You can also hide a toolbar entirely using the `hideTopToolbar`, `hideMiddleToolbar`, or `hideBottomToolbar` props on the Search templates.

### Example: Moving Sort & Per-Page to the Top Toolbar

```tsx
new SnapTemplates(validateTemplatesConfig({
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
						['button.sidebar-toggle', 'paginationInfo', '_'],
						['tabSelection'],
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
}));
```

The middle layout keeps `button.sidebar-toggle` and `tabSelection`: an unscoped toolbar override replaces every template's layout, and the sidebar toggle is how shoppers open the filters on `Search` below `mobileDisplayAt` and on `SearchCollapsible`, whose own toggle is in the top toolbar this example replaces.

### Example: Responsive Toolbar Adjustments

On mobile, move the sidebar toggle button into the middle toolbar beside the pagination info, give sort and per-page their own row, and move the main banner into the top toolbar:

```tsx
new SnapTemplates(validateTemplatesConfig({
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
}));
```


### Example: SearchHorizontal Toolbar should contain facetsHorizontal

The `searchHorizontal` template renders facets in a horizontal bar above the results rather than in a sidebar (its theme defaults show the sidebar instead on mobile). The `toolbar.middle` is the natural place for the facetsHorizontal component. Overrides under `default` apply at every breakpoint and take priority over the theme's own mobile toolbar layouts, so the `mobile` block below restates the theme's mobile layouts for the top and middle toolbars.

```tsx
new SnapTemplates(validateTemplatesConfig({
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
}));
```
