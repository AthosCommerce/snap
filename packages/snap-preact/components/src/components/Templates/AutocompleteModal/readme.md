# AutocompleteModal

Renders an autocomplete modal that binds to an `<input>` element.

The AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.

## Components Used
- autocompleteLayout
- SearchInput
- Modal

## Usage

### input
The required `input` prop expects either:

- a string CSS selector that targets `<input>` element(s) to bind to

- an `<input>` element to bind to

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} />
```

### controller
The required `controller` prop specifies a reference to the autocomplete controller.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} />
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
<AutocompleteModal controller={controller} input={'#searchInput'} layout={'terms'} />
```

#### Custom Layout Arrays

For full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.

There are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` 

All of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. 

The `_` module is used a seperator module to center|left|right justify the other elements in the layout.

available modules to use in the layout are 

`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `no-results`, `tabSelection`, `searchInput`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`

The `searchInput` module positions the rendered search input (see `renderInput` below).

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>
```

### column1
The `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} column1={{
    width: '150px',
    layout: ['terms.history', 'terms.trending']
}}/>
```

### column2
The `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} column2={{
    width: '150px',
    layout: ['facets']
}}/>
```

### column3
The `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. Defaults to `[['tabSelection'], ['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} column3={{
    width: '150px',
    layout: [['content'], ['_', 'button.see-more', '_']]
}}/>
```

### column4
The `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, 

`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. 

`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} column4={{
width: '150px',
layout: ['facets']
}}/>
```

### buttonSelector
The `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={".openSearchButton"} />
```

### renderInput
The `renderInput` prop specifies whether the Search Input should be rendered. 

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />
```

#### Positioning the search input
By default the rendered search input sits above the layout. Add the `searchInput` module to the `layout` prop (or to one of the column layouts) to render the input at that position instead. The layout stays rendered while the component is open so the input is never lost, while the other modules still only render once the input is focused and there are terms or results to show. `renderInput={false}` disables the rendered input in both cases.

```tsx
<AutocompleteModal
	controller={controller}
	input={'#searchInput'}
	layout={[['c1', 'c3']]}
	column1={{ width: '40%', layout: [['searchInput'], ['terms.history', 'terms.trending']] }}
	column3={{ width: 'auto', layout: ['content'] }}
/>
```

### width
The `width` prop specifies a width for the overall component. The default value is '100%'.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} width="800px" />
```

### excludeBanners
The `excludeBanners` prop specifies if the Autocomplete should automatically include banners. 

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />
```

### facetsTitle
The `facetsTitle` prop will display the given text above the facets area.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />
```

### contentTitle
The `contentTitle` prop will display the given text above the content area.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />
```

### overlayColor 
The `overlayColor` prop specifies the color of the overlay.

```tsx
<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />
```
