# Filter Summary

Renders all selected filters including a wrapper with a title and a 'clear all' button. 

## Components Used
- Filter
## Usage
```tsx
import { FilterSummary } from '@athoscommerce/snap-preact/components';
```

### controller
The `controller` prop specifies a reference to the search controller.

```tsx
<FilterSummary controller={controller} />
```

### filters
The `filters` prop specifies a reference to the filters store array. If no filters prop is passed in, the component will default to using the filters in controller.store. 

```tsx
<FilterSummary filters={controller.store.filters} />
```

### title
The `title` prop specifies the title of the filter summary wrapper. The default is `'Current Filters'`.

```tsx
<FilterSummary filters={controller.store.filters} title={'Current Filters'} />
```

### hideTitle
The `hideTitle` prop will hide the title element.

```tsx
<FilterSummary filters={controller.store.filters} title={'Current Filters'} hideTitle={true}/>
```
### filterIcon
 The `filterIcon` prop specifies the icon to render for each filter. It can be an icon name string, a `Partial<IconProps>` object to override icon props such as `size` and `color`, or `false` to disable the icon.

```tsx
<FilterSummary filters={controller.store.filters} filterIcon={'close-thin'} />
```
or 
```tsx
<FilterSummary filters={controller.store.filters} filterIcon={{ icon: 'close-thin', size: 14, color: '#eee' }} />
```


### clearAllIcon
The `clearAllIcon` prop specifies the icon for the 'clear all' button. It can be a string icon name, a `Partial<IconProps>` object to override icon props, or `false` to disable the icon. 

```tsx
<FilterSummary filters={controller.store.filters} clearAllIcon={'close-thin'} />
```
or
```tsx
<FilterSummary filters={controller.store.filters} clearAllIcon={{ icon: 'close-thin', size: 14, color: '#eee' }} />
```

### separator
The `separator` prop will specify the separator character between `facetLabel` and `valueLabel` of the `<Filter />` sub-component.

```tsx
<FilterSummary filters={controller.store.filters} separator={': '} />
```

### hideFacetLabel
The `hideFacetLabel` prop prevents the filter label (selected facet name) from displaying. Only the value selected will be displayed. Use of this prop will nullify the `separator` prop.

```tsx
<FilterSummary filters={controller.store.filters} hideFacetLabel={true} />
```

### clearAllLabel
The `clearAllLabel` prop is the 'clear all' button text. This is passed to the `<Filter />` sub-component `valueLabel` prop. The default value is `'Clear All'`.

```tsx
<FilterSummary filters={controller.store.filters} clearAllLabel={'Clear All'} />
```

### hideClearAll
The `hideClearAll` prop prevents the 'clear all' button from rendering.

```tsx
<FilterSummary filters={controller.store.filters} hideClearAll={true} />
```

### type
The `type` prop determines what layout the filters should be rendered as. Options are `list` or `inline`. `inline` is default.

```tsx
<FilterSummary filters={controller.store.filters} type={'list'} />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function for when any of the selected filters are clicked.

```tsx
<FilterSummary filters={controller.store.filters} onClick={(e, filter) => {console.log(e, filter)}} />
```

#### onClearAllClick
The `onClearAllClick` prop allows for a custom callback function for when the 'clear all' button is clicked.

```tsx
<FilterSummary filters={controller.store.filters} onClearAllClick={(e) => {console.log(e)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the FilterSummary component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `title` | Filter summary section title | `filters` (FilterType[]) |
| `clearAllLabel` | Clear all filters button text | `label` (string), `value` (string) |

### Example

```tsx
<FilterSummary
	filters={controller.store.filters}
	lang={{
		title: {
			value: 'Active Filters',
		},
		clearAllLabel: {
			value: 'Clear All Filters',
		},
	}}
/>
```
