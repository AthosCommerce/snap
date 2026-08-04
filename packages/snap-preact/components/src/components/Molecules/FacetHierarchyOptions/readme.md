# Facet Hierarchy Options

Renders a list of hierarchy options.

## Sub-components
- Icon

## Usage
```tsx
import { FacetHierarchyOptions } from '@athoscommerce/snap-preact/components';
```

### values
The `values` prop specifies all facet values where the facet type is 'hierarchy'. Overrides values passed via the facet prop. 

```tsx
<FacetHierarchyOptions values={hierarchyFacet.values} />
```

### facet
The `facet` prop specifies the reference to the facet object in the store.

```tsx
<FacetHierarchyOptions facet={hierarchyFacet} />
```

### hideCount
The `hideCount` prop will disable the facet count values.

```tsx
<FacetHierarchyOptions values={hierarchyFacet.values} hideCount={true} />
```

### returnIcon
The `returnIcon` prop will set the icon to render for the return levels / options.

```tsx
<FacetHierarchyOptions values={hierarchyFacet.values} returnIcon={'angle-left'} />
```

### horizontal
The `horizontal` prop render facet options horizontally.

```tsx
<FacetHierarchyOptions values={hierarchyFacet.values} horizontal={true} />
```

### previewOnFocus
If using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over.

```tsx
<Autocomplete>
    ...
	<FacetHierarchyOptions values={hierarchyFacet.values} previewOnFocus={true} />
    ...
</Autocomplete>
```


### valueProps
The `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

```js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
```

```tsx
<FacetHierarchyOptions values={hierarchyFacet.values} valueProps={valueProps} />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function for when a facet value is clicked.

```tsx
<FacetHierarchyOptions values={hierarchyFacet.values} onClick={(e)=>{console.log(e)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the FacetHierarchyOptions component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `hierarchyOption` | Hierarchy option element text/attributes | `facet` (ValueFacet), `value` (FacetHierarchyValue) |

### Example

```tsx
<FacetHierarchyOptions
	values={facet.values}
	lang={{
		hierarchyOption: {
			attributes: {
				'aria-label': (data) => `${data.value.filtered ? 'selected' : 'filter by'} ${data.facet?.label} - ${data.value.label}`,
			},
		},
	}}
/>
```
