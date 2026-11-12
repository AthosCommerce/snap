# Toolbar

Renders a search results toolbar.

## Sub-components

- SearchHeader
- FilterSummary
- LayoutSelector
- PerPage
- SortBy
- Pagination
- PaginationInfo
- Button
- Banner
- FacetsHorizontal
- TabSelection
- SearchInput


## Usage

### controller
The required `controller` prop specifies a reference to the search controller.

```tsx
<Toolbar controller={controller} />
```

### layout
The `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.

The `_` module is used a seperator module to center,left,right justify the other elements in the layout.

available modules to use in the layout are 

`searchHeader`, `filterSummary`,  `breadcrumbs`, `layoutSelector`, `perPage`, `sortBy`, `pagination`, `paginationInfo`, `tabSelection`, `searchInput`, `_`, `button.sidebar-toggle`, `banner.header`, `banner.banner`, `banner.footer`, `facetsHorizontal`;


```tsx
<Toolbar controller={controller} layout={['filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']}/>
```

### toggleSideBarButton
The `toggleSideBarButton` prop specifies `Button` props for the sidebar toggle button. This button renders in the layout as `button.sidebar-toggle` (included in the default layout). The button only renders when both the `toggleSideBarButton` prop is provided and `button.sidebar-toggle` is present in the layout.

```tsx
<Toolbar controller={controller} toggleSideBarButton={{ content: 'Toggle Sidebar' }} layout={['button.sidebar-toggle']}/>
```


