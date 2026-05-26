# OverlayResult

Renders a single product card with details overlaid on top of the product image.

## Sub-components
- Badge
- Price
- Image

## Usage
```tsx
import { OverlayResult } from '@athoscommerce/snap-preact/components';
```

### result
The required `result` prop specifies a reference to a product object from the `results` store array.

```tsx
<OverlayResult result={controller.store.results[0]} />
```

### disableSlide
The `disableSlide` prop disables the hover slide animation and always shows all content in the overlay details area.

```tsx
<OverlayResult result={controller.store.results[0]} disableSlide={true} />
```

### overlayBackgroundColor
The `overlayBackgroundColor` prop sets the background style for the overlay details panel.

```tsx
<OverlayResult
	result={controller.store.results[0]}
	overlayBackgroundColor={'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)'}
/>
```

### hideBadge
The `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hideBadge={true} />
```

### hideTitle
The `hideTitle` prop will prevent to product title from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hideTitle={true} />
```

### hideRating
The `hideRating` prop will prevent to product rating from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hideRating={true} />
```

### hideAddToCartButton
The `hideAddToCartButton` prop will prevent to product add to cart button from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hideAddToCartButton={true} />
```

### addToCartButtonText
The `addToCartButtonText` prop will will change the text rendered in the add to cart button.

```tsx
<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />
```

### hidePricing
The `hidePricing` prop will prevent the pricing from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hidePricing={true} />
```

### onAddToCartClick
The `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. 

```tsx

const clickFunc = (e, result) => {
	console.log('added!', e, result);
}

<OverlayResult result={controller.store.results[0]} onAddToCartClick={() => clickFunc} />
```

### hideVariantSelections
The `hideVariantSelections` prop will prevent the VariantSelections components from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hideVariantSelections={true} />
```

### addToCartButtonSuccessText
The `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.

```tsx
<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />
```

### addToCartButtonSuccessTimeout
The `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.

```tsx
<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />
```

### hideImage
The `hideImage` prop will prevent the image from rendering.

```tsx
<OverlayResult result={controller.store.results[0]} hideImage={true} />
```

### detailSlot
The `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.

```js
const productDetails = (props) => {
	const listEntries = props?.product?.attributes?.descriptionList.split('|');
	return (
		listEntries && (
			<ul>
				{listEntries.map(entry => (
					<li>{entry}</li>
				))}
			</ul>
		)
	)
}
```

```tsx
<OverlayResult result={controller.store.results[0]} detailSlot={<productDetails product={controller.store.results[0]/>} />
```

### fallback
The `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. 

```tsx
<OverlayResult result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />
```

### truncateTitle
The `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as "..."

```tsx
<OverlayResult result={controller.store.results[0]} truncateTitle={ limit: 5, append: '...' } />
```