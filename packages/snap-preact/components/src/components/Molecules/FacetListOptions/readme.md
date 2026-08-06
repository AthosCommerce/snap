# Facet List Options

Renders a list of facet options.

## Sub-components
- Checkbox
- Radio

## Usage
```tsx
import { FacetListOptions } from '@athoscommerce/snap-preact/components';
```

### values
The `values` prop specifies all facet values where the facet type is 'list'. Overrides values passed via the facet prop. 

```tsx
<FacetListOptions values={listFacet.values} />
```

### facet
The `facet` prop specifies the reference to the facet object in the store.

```tsx
<FacetListOptions facet={listFacet} />
```

### hideCheckbox
The `hideCheckbox` prop will disable the facet checkbox. Typically used if the facet can only have a single value selected at a time.

```tsx
<FacetListOptions values={listFacet.values} hideCheckbox={true} />
```

### respectSingleSelect
The `respectSingleSelect` prop will render radios instead of checkboxes if `facet.multiple == single`

```tsx
<FacetListOptions values={listFacet.values} respectSingleSelect={true} />
```

### hideCount
The `hideCount` prop will disable the facet count values.

```tsx
<FacetListOptions values={listFacet.values} hideCount={true} />
```

### horizontal
The `horizontal` prop render facet options horizontally.

```tsx
<FacetListOptions values={listFacet.values} horizontal={true} />
```

### hideCountParenthesis
The `hideCountParenthesis` prop will disable the facet count parenthesis from rendering.

```tsx
<FacetListOptions values={listFacet.values} hideCountParenthesis={true} />
```

### previewOnFocus
If using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over.

```tsx
<Autocomplete>
	...
	<FacetListOptions values={listFacet.values} previewOnFocus={true} />
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
<FacetListOptions values={listFacet.values} valueProps={valueProps} />
```

### checkbox
The `checkbox` prop specifies an object with `Checkbox` component props. See `Checkbox` component documentation for further details.


### Events

#### onClick
The `onClick` prop allows for a custom callback function for when a facet value is clicked.

```tsx
<FacetListOptions values={listFacet.values} onClick={(e)=>{console.log(e)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the FacetListOptions component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `listOption` | List option element text/attributes | `facet` (ValueFacet), `value` (FacetValue) |

### Example

```tsx
<FacetListOptions
	values={facet.values}
	lang={{
		listOption: {
			attributes: {
				'aria-label': (data) => `${data.value.filtered ? 'remove' : 'apply'} filter ${data.facet?.label} - ${data.value.label}`,
			},
		},
	}}
/>
```
