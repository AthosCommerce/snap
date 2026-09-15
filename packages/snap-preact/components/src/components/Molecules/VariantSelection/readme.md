# Variant Selection

Renders an variant selection component to be used with a VariantSelection on the searchResultStore.

The variantSelection can be rendered as 3 different types, Dropdown, List, or Swatches.

## Components Used
- Dropdown
- List
- Swatches

## Usage
```tsx
import { VariantSelection } from '@athoscommerce/snap-preact/components';
```

### selection
The required `selection` prop specifies a reference to the searchResultStores VariantSelection. 

```tsx
<VariantSelection selection={VariantSelection} />
```

### type
The optional `type` prop specifies what type of selection you wish to render. Options are `dropdown`, `list`, or `swatches`, with `dropdown` being the default.

```tsx
<VariantSelection selection={VariantSelection} type={'swatches'} />
```

### thumbnailSwatches
The optional `thumbnailSwatches` prop renders each swatch with its variant's `thumbnailImageUrl` when the value has no `background` or `backgroundImageUrl` of its own. Thumbnails are only used when they differ between the values; a selection whose variants share a thumbnail keeps text swatches.

```tsx
<VariantSelection selection={VariantSelection} type={'swatches'} thumbnailSwatches />
```

### onSelect
The `onSelect` prop allows you to provide a callback function that is triggered when a variant option is selected. The selected option will be passed as an argument to this function, as well as the event.

```tsx
<VariantSelection selection={VariantSelection} type={'swatches'} onSelect={(e, val) => console.log(e, val)}/>
```