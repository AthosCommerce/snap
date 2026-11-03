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
- FacetsHorizontal;


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

`searchHeader`, `filterSummary`,  `breadcrumbs`, `layoutSelector`, `perPage`, `sortBy`, `pagination`, `paginationInfo`, `tabSelection`, `_`, `button.sidebar-toggle`, `banner.header`, `banner.banner`, `banner.footer`, `facetsHorizontal`;


```tsx
<Toolbar controller={controller} layout={['filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']}/>
```

### toggleSideBarButton
The `toggleSideBarButton` prop specifies `Button` props for the sidebar toggle button. This button will render in the layout as `button.sidebar-toggle`. If it is not provided in the layout, the button will not render.

```tsx
<Toolbar controller={controller} toggleSideBarButton={{ content: 'Toggle Sidebar' }} layout={['button.sidebar-toggle']}/>
```


