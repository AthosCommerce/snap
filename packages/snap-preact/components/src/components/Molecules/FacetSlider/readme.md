# Facet Slider

Renders a slider to be used with any slider facet. Built using <a target="_blank" rel="noopener noreferrer" href="https://github.com/tannerlinsley/react-ranger">react-ranger</a>.

## Usage
```tsx
import { FacetSlider } from '@athoscommerce/snap-preact/components';
```

### facet
The required `facet` prop specifies a reference to a facet within the facets store array. The facet must be a range facet (`display` type of `'slider'`).

```tsx
<FacetSlider facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} />
```

### showTicks
The `showTicks` prop will render reference ticks below the slider track.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
/>
```

### tickSize
The `tickSize` prop specifies the unit number between ticks. Must be used with `showTicks` prop.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickSize={20}
/>
```

### tickTextColor
The `tickTextColor` prop specifies ticks text color. Must be used with `showTicks` prop.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickTextColor={'#cccccc'}
/>
```

### handleColor
The `handleColor` prop specifies the handle color.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleColor={'#0000ff'}
/>
```

### stickyHandleLabel
The `stickyHandleLabel` prop specifies if the handle value text should display above each handle.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	stickyHandleLabel={true}
/>
```

### separateHandles
The `separateHandles` prop prevents the minimum and maximum slider values from being equal. When enabled, if a user attempts to set both handles to the same value, they will be automatically separated by one step value. The component intelligently determines whether to adjust the min or max value based on the available range.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	separateHandles={true}
/>
```

### handleDraggingColor
The `handleDraggingColor` prop specifies the handle color while dragging.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleDraggingColor={'0000ff'}
/>
```

### valueTextColor
The `valueTextColor` prop specifies the value text color.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	valueTextColor={'#222222'}
/>
```

### trackColor
The `trackColor` prop specifies the slider track (background) color.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	trackColor={'#cccccc'}
/>
```

### railColor
The `railColor` prop specifies the slider rail (foreground) color.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	railColor={'#0000ff'}
/>
```

### Events

#### onChange
The `onChange` prop allows for a custom callback function for when a slider handle has been changed. This callback is invoked **before** the URL manager updates occur, allowing for mutation of values or other operations prior to API request.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onChange={(values)=>{ console.log(`low: ${values[0]} high: ${values[1]}`) }}
/>
```

#### onDrag
The `onDrag` prop allows for a custom callback function for when a slider handle is being dragged.

```tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onDrag={(values)=>{ console.log(`low: ${values[0]} high: ${values[1]}`) }}
/>
```

## Lang

The `lang` prop allows you to override translatable text strings used by the FacetSlider component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `sliderHandle` | Slider handle element text/attributes | `facet` (RangeFacet), `value` (number) |

### Example

```tsx
<FacetSlider
	facet={rangeFacet}
	lang={{
		sliderHandle: {
			attributes: {
				'aria-label': (data) => `${data.facet.label} slider handle, current value ${data.value}`,
			},
		},
	}}
/>
```
