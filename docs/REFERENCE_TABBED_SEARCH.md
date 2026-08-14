## Tabbed Search

> [!IMPORTANT]
> Tabbed search is currently available in **Snap Templates only**. It is driven entirely by Snap Templates configuration and is not available to standard Snap integrations.

Tabs let a single search or autocomplete experience span multiple catalogs. Each tab is backed by its own controller scoped to its own `siteId`, and shoppers switch between them with the `tabSelection` component.

This is useful when a site has more than one Athos catalog - a main product catalog alongside a blog, a second brand, or a separate parts catalog - and you want one search box to cover all of them.

For the full list of configuration options see [Tabs](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#tabs) in the Templates Config documentation.

### Defining Tabs

Add a `tabs` array to `search` and/or `autocomplete`. Each tab needs an `id` and the `siteId` it queries.

```tsx
new SnapTemplates({
	config: {
		siteId: '8uyt2m',
	},
	theme: {
		extends: 'pike',
	},
	search: {
		tabs: [
			{
				id: 'Products',
				siteId: '8uyt2m',
				label: 'Products',
				default: true,
			},
			{
				id: 'Blog',
				siteId: 'atkzs2',
				label: 'Blog',
			},
		],
		targets: [
			{
				selector: '#athos-templates',
				component: 'Search',
			},
		],
	},
});
```

Two or more tabs are required - the `tabSelection` component does not render for a single tab.

The tab `label` is what shoppers see. When no `label` is set the tab `id` is displayed instead.

`default` selects which tab is active on first load. Without it, the first tab in the array is used.

> [!IMPORTANT]
> Tab `id` values **must be unique across the entire configuration**, including between search tabs and autocomplete tabs. The `id` becomes the controller id, and controllers share a single registry - a duplicate id is silently skipped, so the affected tab simply never renders.

### Rendering the Tabs

The `tabSelection` module is already present in the default layouts, so no theme changes are needed to make the tabs appear. On the Search template it sits in the middle toolbar, and in `AutocompleteLayout` it sits above the content column.

To move it, include `'tabSelection'` in a different toolbar or column `layout` array:

```tsx
theme: {
	extends: 'pike',
	overrides: {
		default: {
			'toolbar.top': {
				layout: [['banner.header'], ['tabSelection'], ['searchHeader', '_', 'sortBy']],
			},
		},
	},
}
```

### Catalog URL Configuration

Without further configuration the tab `id` is written to the URL, and every tab shares the same filter and sort parameters. Adding `tabsConfig` gives each catalog its own URL identity:

```tsx
new SnapTemplates({
	...
	tabsConfig: {
		tabParam: 'tab',
		catalogs: {
			'8uyt2m': {
				param: 'prod',
			},
			'atkzs2': {
				param: 'blog',
			},
		},
	},
	...
});
```

`tabParam` is the URL parameter that holds the active tab. It defaults to `view`.

`catalogs[siteId].param` does two things: it is the value written to `tabParam`, and it namespaces that catalog's parameters so two tabs can hold different refinements at the same time.

With the above, browsing the blog tab with a colour refinement produces:

```
/search.html?q=winter&tab=blog#/blogfilter:color:Black
```

The `query` parameter stays unprefixed and is shared across every tab - a shopper searches once and every tab searches the same term. The `filter`, `sort`, `pageSize`, `rq`, and `page` parameters are namespaced per catalog, so each tab keeps its own refinements and pagination position while you switch between them.

When a catalog has no `catalogs` entry, the tab `id` is used as its URL value and none of its parameters are namespaced.

### Matching Autocomplete Tabs to Search Tabs

A shopper who searches from the blog tab of a tabbed autocomplete should land on the blog tab of the results page. This works because `catalogs` is keyed by `siteId` rather than by tab id - a search tab and an autocomplete tab for the same catalog resolve to the same identifier.

To wire it up, define tabs for both features against the same `siteId` values. The tab `id` values must still be unique; prefixing the autocomplete ids, as below, is a simple way to keep them distinct.

```tsx
new SnapTemplates({
	...
	tabsConfig: {
		tabParam: 'tab',
		catalogs: {
			'8uyt2m': { param: 'prod' },
			'atkzs2': { param: 'blog' },
		},
	},
	search: {
		tabs: [
			{ id: 'Products', siteId: '8uyt2m', label: 'Products', default: true },
			{ id: 'Blog', siteId: 'atkzs2', label: 'Blog' },
		],
		targets: [{ selector: '#athos-templates', component: 'Search' }],
	},
	autocomplete: {
		tabs: [
			{ id: 'ACProducts', siteId: '8uyt2m', label: 'Products', default: true },
			{ id: 'ACBlog', siteId: 'atkzs2', label: 'Blog' },
		],
		targets: [{ inputSelector: 'input#search-input', component: 'AutocompleteModal' }],
	},
});
```

Submitting from the `ACBlog` tab writes `tab=blog` and the results page opens on the `Blog` tab.

### Deferring Requests with prefetch

By default every search tab issues its request on page load so that each tab can display a result count immediately. On sites with many tabs this can be more requests than you want.

Setting `prefetch: false` defers a tab's request until it is selected. That tab shows no result count until then, and is never treated as empty.

```tsx
search: {
	tabs: [
		{ id: 'Products', siteId: '8uyt2m', label: 'Products', default: true },
		{ id: 'Blog', siteId: 'atkzs2', label: 'Blog', prefetch: false },
	],
	...
}
```

`prefetch` applies to search tabs only - autocomplete has nothing to fetch until the shopper types.

Be aware that this also changes what reporting sees for that tab's `siteId`. A deferred tab only records a search when a shopper actually selects it, so its search volume will be far lower than a prefetched tab's, and its impression and click-through rates will be correspondingly higher. Metrics are not comparable across the default tab's `siteId` and a `prefetch: false` tab's `siteId`.

### Per-Tab Globals, Settings and Plugins

Each tab accepts `globals`, `settings` and `plugins` that apply to that tab alone. This is how you give one catalog a background filter, a different page size, or its own plugin set. `settings` and `globals` are merged over the feature level values; `plugins` apply to the tab only.

```tsx
search: {
	plugins: {
		common: {
			myPlugin: { function: myPluginFunction },
		},
	},
	tabs: [
		{
			id: 'Products',
			siteId: '8uyt2m',
			label: 'Products',
			default: true,
			globals: {
				filters: [
					{
						field: 'color',
						value: 'Black',
						type: 'value',
						background: true,
					},
				],
			},
		},
		{
			id: 'Blog',
			siteId: 'atkzs2',
			label: 'Blog',
			// no plugins run for this tab
			plugins: {},
		},
	],
	...
}
```

> [!IMPORTANT]
> `tabs[].plugins` **replaces** the feature level `plugins` for that tab rather than merging with them. A tab without a `plugins` key inherits the feature level plugins; a tab with an empty `plugins` object runs none.

### Tab-Specific Theme Overrides

The active tab's `id` is applied to the rendered template as its component `name`, which makes it available as a named theme override selector. This allows a tab to be themed differently from its siblings - a different result component, a different grid, different toolbar layouts.

The selector takes the form `<template>.<tab id>`, and **the tab id is lowercased**:

```tsx
search: {
	tabs: [
		{ id: 'Products', siteId: '8uyt2m', default: true },
		{ id: 'Blog', siteId: 'atkzs2' },
	],
	...
},
theme: {
	extends: 'pike',
	overrides: {
		default: {
			'search.products': {
				resultComponent: 'CustomResult',
			},
			'search.blog': {
				resultComponent: 'OverlayResult',
			},
		},
	},
}
```

Descendants inherit the named path, so sub-components of a single tab can be targeted too:

```tsx
'search.blog results': {
	columns: 2,
},
```

The same applies to autocomplete templates, using the autocomplete tab ids - for example `autocompleteModal.acproducts`.

See [Theme `overrides` with Cascading Component Props](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md#theme-overrides-with-cascading-component-props) for the general behaviour of named selectors.

> [!NOTE]
> Only the active tab's template is rendered, so a `<template>.<tab id>` override applies while that tab is selected.

Two constraints are worth knowing:

- A tab id only becomes a selector if it consists of letters, numbers and dashes. An id containing spaces, underscores or dots produces no named selector, and the override is silently ignored.

### Customizing the TabSelection Component

`tabSelection` is themed like any other component. Common options are a heading above the tabs, hiding result counts, and keeping empty tabs selectable.

```tsx
theme: {
	extends: 'pike',
	overrides: {
		default: {
			tabSelection: {
				titleText: 'Search In',
				showResultCount: false,
				enableEmptyTabs: true,
			},
		},
	},
}
```

By default a tab whose controller returned zero results is rendered disabled, so shoppers are not sent to an empty result set. The currently active tab is never disabled, and tabs that have not loaded yet are not treated as empty.

Tab text and accessibility attributes are customizable through `lang`:

```tsx
theme: {
	extends: 'pike',
	overrides: {
		default: {
			tabSelection: {
				lang: {
					tabButton: {
						attributes: {
							'aria-label': (data) => `${data.tab.label || data.tab.id}, ${data.resultCount} results`,
						},
					},
				},
			},
		},
	},
}
```

See the [TabSelection component documentation](https://github.com/athoscommerce/snap/tree/main/packages/snap-preact/components/src/components/Molecules/TabSelection) for the full prop and lang reference.
