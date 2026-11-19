# AutocompleteLayout

Renders an autocomplete popup that binds to an `<input>` element.

The AutocompleteLayout component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteLayout components layout is determined by the layout prop, which specifies what child components render and where.

## Components Used
- Banner
- Results
- Icon
- TermsList
- Terms
- Button
- Facets
- FacetsHorizontal

## Usage

### input
The required `input` prop expects either:

- a string CSS selector that targets `<input>` element(s) to bind to

- an `<input>` element to bind to

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} />
```

### controller
The required `controller` prop specifies a reference to the autocomplete controller.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} />
```

### layout
The `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.

#### Prebuilt Layouts

Instead of constructing a custom module array, you can pass one of the following string values:

| Prebuilt | Expands To | Description |
|---|---|---|
| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only — no product results grid |
| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |
| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |
| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} layout={'terms'} />
```

#### Custom Layout Arrays

For full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.

There are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_`

All of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. 

The `_` module is used a seperator module to center|left|right justify the other elements in the layout.

available modules to use in the layout are 

`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `no-results`, `tabSelection`, `searchInput`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`

The `searchInput` module renders the element provided via the `searchInputSlot` prop (see below) and renders nothing without it.


```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>
```

### column1
The `column1` prop specifies the layout to render in the `c1` module. Takes an object with the following properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will share the available space equally with any other auto columns. 

`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

`alignContent` (optional) which sets the column's `align-content` - `'center'`, `'flex-start'`, `'flex-end'` or `'space-between'`.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} column1={{
    width: '150px',
    layout: ['terms.history', 'terms.trending']
}}/>
```

### column2
The `column2` prop specifies a layout array to render in the `c2` module. Takes an object with the following properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will share the available space equally with any other auto columns. 

`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

`alignContent` (optional) which sets the column's `align-content` - `'center'`, `'flex-start'`, `'flex-end'` or `'space-between'`.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} column2={{
    width: '150px',
    layout: ['facets']
}}/>
```

### column3
The `column3` prop specifies a layout array to render in the `c3` module. Takes an object with the following properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will share the available space equally with any other auto columns. 

`layout` which specifies an array of modules to render in the column. Defaults to `[['tabSelection'], ['content'], ['_', 'button.see-more']]` with a `width` of `auto`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

`alignContent` (optional) which sets the column's `align-content` - `'center'`, `'flex-start'`, `'flex-end'` or `'space-between'`. Defaults to `'space-between'`.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} column3={{
    width: '150px',
    layout: [['content', ['_', 'button.see-more', '_']]]
}}/>
```

### column4
The `column4` prop specifies a layout array to render in the `c4` module. Takes an object with the following properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will share the available space equally with any other auto columns. 

`layout` which specifies an array of modules to render in the column. There is no default `column4`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

`alignContent` (optional) which sets the column's `align-content` - `'center'`, `'flex-start'`, `'flex-end'` or `'space-between'`.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} column4={{
width: '150px',
layout: ['facets']
}}/>
```

### searchInputSlot
The `searchInputSlot` prop provides an element (typically a `SearchInput`) for the `searchInput` layout module. The autocomplete templates (`AutocompleteModal`, `AutocompleteFixed` and `AutocompleteSlideout`) pass their rendered search input through this prop whenever their layout contains a `searchInput` module.

While a slot is provided the layout stays rendered regardless of input focus and content, so the slot element is never unmounted - the parent component is responsible for showing and hiding the layout. The other modules still only render while the bound input is focused and there are terms or results to show. The slot renders at the first `searchInput` module in the layout.

```tsx
<AutocompleteLayout
	controller={controller}
	input={'#searchInput'}
	layout={[['c1', 'c3']]}
	column1={{ width: '300px', layout: [['searchInput'], ['terms.history', 'terms.trending']] }}
	searchInputSlot={<SearchInput placeholderText={'Search'} />}
/>
```

### width
The `width` prop specifies a width for the overall component. The default value is '100%'.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} width="800px" />
```

### excludeBanners
The `excludeBanners` prop specifies if the Autocomplete should automatically include banners. 

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} excludeBanners={true} />
```

### facetsTitle
The `facetsTitle` prop will display the given text above the facets area.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />
```

### contentTitle
The `contentTitle` prop will display the given text above the content area.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />
```

### viewportMaxHeight
The `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. 

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} viewportMaxHeight={true} />
```

### resultComponent
The `resultComponent` prop specifies a custom result component to render in the `content` module results.

```tsx
const CustomResult = ({ controller, result, theme }) => {
	return <div>{result.mappings.core?.name}</div>
}

<AutocompleteLayout controller={controller} input={'#searchInput'} resultComponent={CustomResult} />
```

### templates
The `templates` prop configures the recommendations rendered when a search has no results. Recommendations are enabled by default (`{ recommendation: { enabled: true } }`) and are disabled when `layout` is `'terms'`. The `recommendation` object also accepts optional `component`, `resultComponent` and `config` keys.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} templates={{ recommendation: { enabled: false } }} />
```

### onReset
The `onReset` prop specifies a callback function invoked when the autocomplete is closed via its close button or the escape key.

```tsx
<AutocompleteLayout controller={controller} input={'#searchInput'} onReset={() => controller.setFocused()} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the AutocompleteLayout component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `facetsTitle` | Facets section title | `controller` (AutocompleteController) |
| `contentTitle` | Content/results section title | `controller` (AutocompleteController) |
| `closeButton` | Close button text | `controller` (AutocompleteController) |
| `noResultsText` | No results message | `controller` (AutocompleteController) |
| `seeMoreButton` | See more results button text | `controller` (AutocompleteController) |

### Example

```tsx
<AutocompleteLayout
	controller={controller}
	input={'#searchInput'}
	lang={{
		facetsTitle: {
			value: 'Filter By',
		},
		contentTitle: {
			value: 'Products',
		},
		closeButton: {
			value: 'Close',
			attributes: {
				'aria-label': 'close autocomplete',
			},
		},
		noResultsText: {
			value: (data) => `<p>No results found for "${data.controller?.store?.search?.query?.string}".</p>`,
		},
		seeMoreButton: {
			value: (data) => `View all ${data.controller?.store?.pagination.totalResults} results`,
		},
	}}
/>
```
