# SearchHorizontal Template

Renders a Search Results Page with facets displayed horizontally above the results instead of in a sidebar.

`SearchHorizontal` is a thin wrapper around the `Search` template. It renders `Search` with an internal `alias` of `searchHorizontal`, which resolves the `searchHorizontal` theme component defaults in place of the `search` defaults, and an internal class name of `ss__search-horizontal`. It accepts the same props as `Search` — only the theme defaults differ, so the sidebar is hidden and a FacetsHorizontal component is placed in the middle toolbar.

At mobile widths the theme re-enables the sidebar so facets remain reachable through the slideout toggle.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar
- FacetsHorizontal
- FilterSummary

## Usage

### controller
The required `controller` prop specifies a reference to the search controller.

```tsx
<SearchHorizontal controller={controller} />
```

### hideSidebar
The `hideSidebar` prop specifies if the Sidebar component should be rendered. This template's theme sets it to `true` by default at desktop widths, and back to `false` at mobile widths so facets stay reachable in the slideout. Pass `false` to render the sidebar alongside the horizontal facets.

```tsx
<SearchHorizontal controller={controller} hideSidebar={false} />
```

### hideMiddleToolbar
The `hideMiddleToolbar` prop specifies if the middle ToolBar component should be rendered. This template renders its horizontal facets in the middle toolbar, so hiding it also removes the FacetsHorizontal and FilterSummary components.  

```tsx
<SearchHorizontal controller={controller} hideMiddleToolbar={true} />
```

### hideTopToolbar
The `hideTopToolbar` prop specifies if the top ToolBar component should be rendered.  

```tsx
<SearchHorizontal controller={controller} hideTopToolbar={true} />
```

### hideBottomToolbar
The `hideBottomToolbar` prop specifies if the bottom ToolBar component should be rendered.  

```tsx
<SearchHorizontal controller={controller} hideBottomToolbar={true} />
```

### resultComponent
The `resultComponent` prop specifies a custom result component to render.

```tsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<SearchHorizontal controller={controller} resultComponent={CustomResult} />
```

### mobileDisplayAt
The `mobileDisplayAt` prop defines a CSS media query that determines when the Sidebar component switches to mobile view with a slideout. It defaults to the theme's `tablet` breakpoint, falling back to `"991px"` when the theme does not define one. You can also pass a boolean value to enable or disable mobile view regardless of screen size — `true` always renders the mobile view, `false` never does.

```tsx
<SearchHorizontal controller={controller} mobileDisplayAt={'400px'} />
```

or 

```tsx
<SearchHorizontal controller={controller} mobileDisplayAt={true} />
```

### sidebarWidth
The `sidebarWidth` prop specifies the CSS width of the Sidebar component, where the sidebar renders. By default, the sidebar width is `"270px"`.

```tsx
<SearchHorizontal controller={controller} hideSidebar={false} sidebarWidth={'300px'} />
```

### toggleSidebarButtonText
The `toggleSidebarButtonText` prop specifies the inner text of the Sidebar toggle button. It defaults to `"Filters"`, so a toggle button renders once the store has loaded, wherever the theme's toolbar layout includes the `button.sidebar-toggle` module. No button renders if the text resolves to an empty value, or if `hideToggleSidebarButton` is `true`.

```tsx
<SearchHorizontal controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
```

### toggleSidebarStartClosed
The `toggleSidebarStartClosed` prop specifies if the sidebar toggle should start closed.

```tsx
<SearchHorizontal controller={controller} toggleSidebarStartClosed={true} />
```

### hideToggleSidebarButton
The `hideToggleSidebarButton` prop hides the Sidebar toggle button.

```tsx
<SearchHorizontal controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
```

### layoutOptions
The `layoutOptions` prop allows you to customize the layout of the SearchHorizontal component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




```tsx

type ListOption = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    default?: boolean;
    icon?: IconType | Partial<IconProps>;
    overrides?: ThemeMinimal;
    url?: UrlManager;
    available?: boolean;
}

const layoutOptions: ListOption[] = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'searchHorizontal results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'searchHorizontal results': {
					columns: 2,
				},
			},
		},
	},
]

<SearchHorizontal controller={controller} layoutOptions={layoutOptions} />
```

## Theme Defaults

Theme overrides for this template are keyed off the `searchHorizontal` selector rather than `search`. The defaults applied by the theme are:

| Selector | Default |
|---|---|
| `searchHorizontal` | `hideSidebar: true` (`false` on mobile) |
| `searchHorizontal toolbar.top` | `[['_', 'searchHeader', '_'], ['banner.header']]` |
| `searchHorizontal toolbar.middle` | `[['filterSummary'], ['facetsHorizontal', '_', 'sortBy'], ['banner.banner'], ['paginationInfo', '_']]` |
| `searchHorizontal toolbar.bottom` | `[['banner.footer'], ['_', 'pagination', '_']]` |
| `searchHorizontal facetsHorizontal` | `limit: 9` (7 on desktop, 5 on tablet) |
| `searchHorizontal sidebar` | `layout: ['filterSummary', 'facets', 'banner.left']` |
| `searchHorizontal results` | `columns: 3` on tablet, `2` on mobile |

At mobile widths the sidebar is re-enabled and the toolbars are rearranged so the sidebar toggle and sort controls move into the middle toolbar:

```tsx
searchHorizontal: {
	hideSidebar: false,
},
'searchHorizontal toolbar.top': {
	layout: [['banner.header'], ['searchHeader', '_']],
},
'searchHorizontal toolbar.middle': {
	layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']],
},
```

To override a sub-component of this template, prefix the selector with `searchHorizontal`:

```tsx
const theme = {
	components: {
		'searchHorizontal facetsHorizontal': {
			limit: 4,
		},
	},
};
```

## Lang

The `lang` prop allows you to override translatable text strings used by the SearchHorizontal component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `toggleSidebarButtonText` | Sidebar toggle button text | `filters` (SearchFilterStore), `sidebarOpenState` (boolean) |

### Example

```tsx
<SearchHorizontal
	controller={controller}
	lang={{
		toggleSidebarButtonText: {
			value: (data) => {
				if (data.sidebarOpenState) {
					return 'Close Sidebar';
				}
				return 'Open Sidebar';
			},
		},
	}}
/>
```
