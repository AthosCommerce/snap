# SearchCollapsible Template

Renders a Search Results Page with the facets collapsed behind a sidebar toggle button.

`SearchCollapsible` is a thin wrapper around the `Search` template. It renders `Search` with an internal `alias` of `searchCollapsible`, which resolves the `searchCollapsible` theme component defaults in place of the `search` defaults. It accepts the same props as `Search` — only the theme defaults differ, so the sidebar starts closed and the toggle button is placed in the toolbar layout.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required `controller` prop specifies a reference to the search controller.

```tsx
<SearchCollapsible controller={controller} />
```

### toggleSidebarButtonText
The `toggleSidebarButtonText` prop specifies the inner text of the Sidebar toggle button. It defaults to `"Filters"`, so a toggle button renders once the store has loaded. No button renders if the text resolves to an empty value, or if `hideToggleSidebarButton` is `true`.

Because this template starts with the sidebar closed, the toggle button is how the sidebar is reached — this template's theme places it in the toolbar layout as the `button.sidebar-toggle` module.

```tsx
<SearchCollapsible controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
```

### toggleSidebarStartClosed
The `toggleSidebarStartClosed` prop specifies if the sidebar toggle should start closed. This template's theme sets it to `true` by default, unlike the `Search` template. Pass `false` to have the sidebar start open.

```tsx
<SearchCollapsible controller={controller} toggleSidebarStartClosed={false} />
```

### hideToggleSidebarButton
The `hideToggleSidebarButton` prop hides the Sidebar toggle button.

```tsx
<SearchCollapsible controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
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

<SearchCollapsible controller={controller} resultComponent={CustomResult} />
```

### mobileDisplayAt
The `mobileDisplayAt` prop defines a CSS media query that determines when the Sidebar component switches to mobile view with a slideout. It defaults to the theme's `tablet` breakpoint, falling back to `"991px"` when the theme does not define one. You can also pass a boolean value to enable or disable mobile view regardless of screen size — `true` always renders the mobile view, `false` never does.

```tsx
<SearchCollapsible controller={controller} mobileDisplayAt={'400px'} />
```

or 

```tsx
<SearchCollapsible controller={controller} mobileDisplayAt={true} />
```

### sidebarWidth
The `sidebarWidth` prop specifies the CSS width of the Sidebar component. By default, the sidebar width is `"270px"`.

```tsx
<SearchCollapsible controller={controller} sidebarWidth={'300px'} />
```

### hideSidebar
The `hideSidebar` prop specifies if the Sidebar component should be rendered.  

```tsx
<SearchCollapsible controller={controller} hideSidebar={true} />
```

### hideTopToolbar
The `hideTopToolbar` prop specifies if the top ToolBar component should be rendered.  

```tsx
<SearchCollapsible controller={controller} hideTopToolbar={true} />
```

### hideMiddleToolbar
The `hideMiddleToolbar` prop specifies if the middle ToolBar component should be rendered. This template's theme leaves the middle toolbar empty at desktop widths.  

```tsx
<SearchCollapsible controller={controller} hideMiddleToolbar={true} />
```

### hideBottomToolbar
The `hideBottomToolbar` prop specifies if the bottom ToolBar component should be rendered.  

```tsx
<SearchCollapsible controller={controller} hideBottomToolbar={true} />
```

### layoutOptions
The `layoutOptions` prop allows you to customize the layout of the SearchCollapsible component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




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
				'searchCollapsible results': {
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
				'searchCollapsible results': {
					columns: 2,
				},
			},
		},
	},
]

<SearchCollapsible controller={controller} layoutOptions={layoutOptions} />
```

## Theme Defaults

Theme overrides for this template are keyed off the `searchCollapsible` selector rather than `search`. The defaults applied by the theme are:

| Selector | Default |
|---|---|
| `searchCollapsible` | `toggleSidebarStartClosed: true`, `hideToggleSidebarButton: false` |
| `searchCollapsible button.sidebar-toggle` | `icon: 'filters'` |
| `searchCollapsible toolbar.top` | `[['banner.header'], ['searchHeader'], ['banner.banner'], ['button.sidebar-toggle', 'paginationInfo', '_', 'perPage', 'sortBy']]` |
| `searchCollapsible toolbar.middle` | `[]` — empty at desktop widths |
| `searchCollapsible toolbar.bottom` | `[['banner.footer'], ['_', 'pagination', '_']]` |
| `searchCollapsible results` | `columns: 4` (3 on tablet, 2 on mobile) |

At mobile and tablet widths the toolbars are rearranged so the sidebar toggle and sort controls move into the middle toolbar:

```tsx
'searchCollapsible toolbar.top': {
	layout: [['banner.header'], ['searchHeader', '_']],
},
'searchCollapsible toolbar.middle': {
	layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']],
},
```

To override a sub-component of this template, prefix the selector with `searchCollapsible`:

```tsx
const theme = {
	components: {
		'searchCollapsible results': {
			columns: 6,
		},
	},
};
```

## Lang

The `lang` prop allows you to override translatable text strings used by the SearchCollapsible component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `toggleSidebarButtonText` | Sidebar toggle button text | `filters` (SearchFilterStore), `sidebarOpenState` (boolean) |

### Example

```tsx
<SearchCollapsible
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
