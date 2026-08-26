# Filter

Renders a facet filter.

## Sub-components
- Icon
- Button

## Usage
```tsx
import { Filter } from '@athoscommerce/snap-preact/components';
```

### facetLabel
The `facetLabel` prop specifies the filter label. Typically set to the facet label.

```tsx
<Filter facetLabel={'Brand'} />
```

### valueLabel
The `valueLabel` prop specifies the filter value. Typically set to the facet value label.

```tsx
<Filter valueLabel={'Nike'} />
```

### url
The `url` prop specifies a link to clear the filter selection.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} url={filter.url} />
```

### hideFacetLabel
The `hideFacetLabel` prop will disable the filter facet label.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} hideFacetLabel={true} />
```
### separator
The `separator` prop will specify the separator character between `facetLabel` and `valueLabel`.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} separator={': '} />
```

### icon
The `icon` prop specifies the icon to render alongside the filter label/value. It can be an icon path/name string from the `Icon` component paths (see Icon Gallery), a `Partial<IconProps>` object to override `Icon` props such as `path`, `size`, and `color`, or `false` to disable the icon.

```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} icon={'close-thin'} />
```
or 
```tsx
<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} icon={{icon: 'close-thin', size: 12, color: '#eee'}} />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function for when a filter is clicked.

```tsx
<Filter onClick={(e)=>{console.log(e)}}/>
```

## Lang

The `lang` prop allows you to override translatable text strings used by the Filter component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `filter` | Filter element text/attributes | `label` (string), `value` (string) |

### Example

```tsx
<Filter
	lang={{
		filter: {
			attributes: {
				'aria-label': (data) => `remove selected ${data.label} filter ${data.value}`,
			},
		},
	}}
/>
```
