# RecommendationBundleEasyAdd

Renders a single recommended product and bundle CTA section that includes a visually hidden seed product. Like all of the bundle components, the first result passed will be treated as the seed. The Seed will not be rendered, but will be included in the cartstore, bundle pricing, and items included when adding to the cart. 

## Sub-components
- RecommendationBundle


### controller
The required `controller` prop specifies a reference to the RecommendationController

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
```

### onAddToCart 
the `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed the click event and an array of the selected products. 

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
```

### results
The `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. 

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />
```

### title
The `title` prop specifies the bundle title

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />
```

### description
The `description` prop specifies the bundle description

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />
```

### resultComponent
The `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -

```tsx
	{ 
		result: Product, 
		seed: boolean, 
		selected: boolean, 
		onProductSelect: (result:Product) => void
	}
```

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />
```

### ctaButtonText
The `ctaButtonText` prop specifies the inner text to render in the add to cart button.

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />
```

### ctaButtonSuccessText
The `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />
```

### ctaButtonSuccessTimeout
The `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />
```


### ctaIcon
The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />
```

### ctaInline
The `ctaInline` prop specifies if the add to cart display should be block or inline with the bundle.

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />
```

### ctaSlot
The `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -

```tsx	
	{ 
		cartStore: CartStore;
		onAddToCart: (e:any) => void
	}
```

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />
```

### seedText
The `seedText` prop specifies text to be rendered as a badge in the seed product.   

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={"Main Product"} />
```

### hideSeedText
The `hideSeedText` prop specifies if the seed product badge text should be rendered or not.

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />
```

### vertical
The `vertical` prop sets the carousel scroll direction to vertical.

```tsx
<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />
```

### lazyRender 
The `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enabled` toggle (defaults to `true`) as well as an `offset` (default `"10%"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

```tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationBundleEasyAdd controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the RecommendationBundleEasyAdd component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `seedText` | Seed product label text | _(none)_ |
| `ctaButtonText` | Add to cart CTA button text | _(none)_ |
| `ctaButtonSuccessText` | CTA button text after successful add | _(none)_ |
| `ctaSubtotalTitle` | Subtotal section title | `cartStore` (CartStore) |

### Example

```tsx
<RecommendationBundleEasyAdd
	controller={controller}
	lang={{
		ctaButtonText: {
			value: 'Add Bundle to Cart',
		},
	}}
/>
```
