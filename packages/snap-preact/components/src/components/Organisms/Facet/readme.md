# Facet

Renders a single complete facet. This includes determining the correct options type, a collapsable header, and overflow options. 

## Sub-components
- Dropdown
- FacetHierarchyOptions
- FacetGridOptions
- FacetListOptions
- FacetPaletteOptions
- FacetToggle
- FacetSlider
- Icon
- SearchInput
- Button


## Usage
```tsx
import { Facet } from '@athoscommerce/snap-preact/components';
```

### facet
The required `facet` prop specifies a reference to any single facet object within the facets store array. 

```tsx
<Facet facet={controller.store.facets[0]} />
```

### disableCollapse
The `disableCollapse` prop prevents the facet from toggling its collapse state. 

```tsx
<Facet facet={controller.store.facets[0]} disableCollapse={true} />
```

### color
The `color` prop sets the facet name and icon color.

```tsx
<Facet facet={controller.store.facets[0]} color={'#222222'} />
```

### limit
The `limit` prop sets the number of options to display before the remaining options overflow and a show more/less button is displayed. 

```tsx
<Facet facet={controller.store.facets[0]} limit={10} />
```

### previewOnFocus
If using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. 

```tsx
<Facet facet={controller.store.facets[0]} previewOnFocus={true} />
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
<Facet facet={controller.store.facets[0]} valueProps={valueProps} />
```

### iconExpand
The `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.

```tsx
<Facet facet={controller.store.facets[0]} iconExpand={'angle-down'} />
```

### iconCollapse
The `iconCollapse` prop is the name of the icon to render when the facet is in its open state.

```tsx
<Facet facet={controller.store.facets[0]} iconCollapse={'angle-up'} />
```

### showMoreText
The `showMoreText` prop contains the text to display in the facet overflow button when collapsed. Default is `'Show More'`

```tsx
<Facet facet={controller.store.facets[0]} showMoreText={'Show More'} />
```

### showLessText
The `showLessText` prop contains the text to display in the facet overflow button when expanded. Default is `'Show Less'`

```tsx
<Facet facet={controller.store.facets[0]} showLessText={'Show Less'} />
```

## hideShowMoreLessText
The `hideShowMoreLessText` prop hides the show more / show less text.

```tsx
<Facet facet={controller.store.facets[0]} hideShowMoreLessText={true} />
```

### showSelectedCount
The `showSelectedCount` prop shows the number of selected options within the facet in the facet header. NOTE: this prop will not work if `justContent` prop enabled. 

```tsx
<Facet facet={controller.store.facets[0]} showSelectedCount={true} />
```

### hideSelectedCountParenthesis
The `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header. NOTE: this prop will not work if `justContent` prop enabled. 

```tsx
<Facet facet={controller.store.facets[0]} hideSelectedCountParenthesis={true} />
```

### rangeInputs
The `rangeInputs` prop specifies if the range inputs should render. 

```tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} />
```

### rangeInputsSubmitButtonText
The `rangeInputsSubmitButtonText` prop specifies the text to be rendered in the range input submit button. 

```tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSubmitButtonText={'Filter by Price'}/>
```

### rangeInputsPrefix
The `rangeInputsPrefix` prop specifies the prefix to render next to the range inputs.

```tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsPrefix={'$'}/>
```

### rangeInputsSeparatorText
The `rangeInputsSeparatorText` prop specifies the separator text to render between the range inputs.

```tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsSeparatorText={' to '}/>
```

### rangeInputsInheritDefaultValues
The `rangeInputsInheritDefaultValues` prop enables the facet range input values to default to the facet low and high limits.

```tsx
<Facet facet={controller.store.facets[0]} rangeInputs={true} rangeInputsInheritDefaultValues={true}/>
```

### showClearAllText
The `showClearAllText` prop specifies if the clear all text should render.

```tsx
<Facet facet={controller.store.facets[0]} showSelectedCount={true} showClearAllText={true} />
```


### clearAllText
The `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'

```tsx
<Facet facet={controller.store.facets[0]} clearAllText={'Clear All'} />
```


### clearAllIcon
The `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.

```tsx
<Facet facet={controller.store.facets[0]} clearAllIcon={'ban'} />
```


### iconOverflowMore
The `iconOverflowMore` prop contains the icon name of the facet overflow button when collapsed. Default is `'plus'`

```tsx
<Facet facet={controller.store.facets[0]} iconOverflowMore={'plus'} />
```

### iconOverflowLess
The `iconOverflowLess` prop contains the icon name of the facet overflow button when expanded. Default is `'minus'`

```tsx
<Facet facet={controller.store.facets[0]} iconOverflowLess={'minus'} />
```

### overflowSlot
The `overflowSlot` prop is a JSX element used to change the display of the show more/less toggle.

```js
const Overflow = (props) => {
	const facet = props.facet;
	return (
		<div>Show { facet.overflow.remaining > 0 ? `${facet.overflow.remaining} ` : ''}{facet.overflow.remaining > 0 ? 'more' : 'less'}...</div>
	)
}
```

```tsx
<Facet facet={controller.store.facets[0]} overflowSlot={<Overflow/>} />
```


### fields
The `fields` prop allows you to manually change prop values on a per-facet level, sorted by the facet field.

```js
const fieldsProp = {
	Color: {
		limit: 6,
	},
	Size: { 
		disableOverflow: true,
		disableCollapse: true,
	}
},
```

```tsx
<Facet facet={controller.store.facets[0]} fields={fieldsProp} />
```


### display
The `display` prop allows you to manually change prop values on a per-facet display type level

```typescript
const displayProp = {
	display: {
		list: {
			limit: 5,
		},
		hierarchy: {
			limit: 3
		},
		grid: {
			limit: 10
		},
		palette: {
			limit: 20
		}
	}
},
```

```tsx
<Facet facet={controller.store.facets[0]} display={displayProp} />
```

### optionsSlot
The `optionsSlot` prop is a JSX element used to manually set the options component used, regardless of the facet.display type. Returns the facet,valueProps, limit, & previewOnFocus prop values.

```js
const CustomFacetOptions = (props) => {
	const facet = props.facet;
	return (
		<div>
			{facet && facet.values.map(value => <span>{value.label}</span>)}
		</div>
	)
}
```

```tsx
<Facet facet={controller.store.facets[0]} optionsSlot={<CustomFacetOptions/>} />
```


### iconColor
The `iconColor` prop sets the facet icon color.

```tsx
<Facet facet={controller.store.facets[0]} iconColor={'#222222'} />
```

### justContent
The `justContent` prop renders just the facet options. Excludes rendering of the Dropdown sub-component.

```tsx
<Facet facet={controller.store.facets[0]}  justContent={true} />
```

### horizontal
The `horizontal` prop renders the facet horizontally.

```tsx
<Facet facet={controller.store.facets[0]}  horizontal={true} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the Facet component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `showMoreText` | Show more options button text | `facet` (ValueFacet \| RangeFacet) |
| `showLessText` | Show less options button text | `facet` (ValueFacet \| RangeFacet) |
| `dropdownButton` | Facet dropdown toggle button attributes | `facet` (ValueFacet \| RangeFacet) |
| `clearAllText` | Clear all selections button text | `facet` (ValueFacet \| RangeFacet) |
| `submitRangeButton` | Range input submit button text | `facet` (ValueFacet \| RangeFacet) |

### Example

```tsx
<Facet
	facet={controller.store.facets[0]}
	lang={{
		showMoreText: {
			value: (data) => `Show more ${data.facet.label} options`,
		},
		showLessText: {
			value: 'Show fewer options',
		},
		dropdownButton: {
			attributes: {
				'aria-label': (data) => `${data.facet.collapsed ? 'expand' : 'collapse'} ${data.facet.label} filter`,
			},
		},
		clearAllText: {
			value: 'Clear filters',
		},
	}}
/>
```
