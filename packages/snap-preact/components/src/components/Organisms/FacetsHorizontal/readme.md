# FacetsHorizontal

Renders all facets in a horizontal display.

## Sub-components
- Facet
- Dropdown
- Icon
- Button
- Slideout
- Sidebar

## Usage

### controller
The `controller` prop specifies a reference to the search controller.

```tsx
<FacetsHorizontal controller={controller} />
```

### facets
The optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. 

```tsx
<FacetsHorizontal facets={facets} />
```

### iconExpand
The `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.

```tsx
<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />
```

### iconCollapse
The `iconCollapse` prop is the name of the icon to render when the facet is in its open state.

```tsx
<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />
```

### limit
The `limit` prop will limit the maximum number of facets to display before displaying the overflow button and sidebar slideout.

```tsx
<FacetsHorizontal controller={controller} limit={6}/>
```

### showSelectedCount
The `showSelectedCount` prop shows the number of selected options within the facet header.

```tsx
<FacetsHorizontal controller={controller} showSelectedCount={true} />
```

### hideSelectedCountParenthesis
The `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.

```tsx
<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />
```

### alwaysShowToggleSidebarButton
The `alwaysShowToggleSidebarButton` prop will always render the sidebar-toggle button, not just when facets are overflowing.

```tsx
<FacetsHorizontal controller={controller} alwaysShowToggleSidebarButton={true} />
```

### showClearAllText
The `showClearAllText` prop specifies if the clear all text should render.

```tsx
<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />
```


### clearAllText
The `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'

```tsx
<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />
```


### clearAllIcon
The `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.

```tsx
<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />
```

### hideToggleSidebarButton
The `hideToggleSidebarButton` prop specifies whether the toggle sidebar button should be rendered or not. If not hidden, the button will render when there are more filters to show than the limit prop allows (unless the `alwaysShowToggleSidebarButton` prop is passed, which will ignore the limit). 

```tsx
<FacetsHorizontal controller={controller} hideToggleSidebarButton={true}/>
```

### toggleSidebarButtonText
The `toggleSidebarButtonText` prop specifies the text displayed in the toggle sidebar button. Defaults to 'Filters'.

```tsx
<FacetsHorizontal controller={controller} toggleSidebarButtonText={'Filters'}/>
```


### onFacetOptionClick
The `onFacetOptionClick` callback function for when a facet option is clicked. 

```tsx
<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>
```
## Lang

The `lang` prop allows you to override translatable text strings used by the FacetsHorizontal component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `dropdownButton` | Facet dropdown button text/attributes | `selectedFacet` (IndividualFacetType), `facet` (IndividualFacetType) |
| `toggleSidebarButtonText` | Sidebar toggle button text | `facets` (IndividualFacetType[]), `sidebarOpenState` (boolean) |

### Example

```tsx
<FacetsHorizontal
	controller={controller}
	lang={{
		toggleSidebarButtonText: {
			value: (data) => data.sidebarOpenState ? 'Hide Filters' : 'Show Filters',
		},
	}}
/>
```
