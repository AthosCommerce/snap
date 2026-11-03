# RecommendationBundleList

Renders a recommended bundle of products with seed, recommendations in list form, and add to cart display.

## Sub-components
- RecommendationBundle

### controller
The required `controller` prop specifies a reference to the RecommendationController

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
```

### onAddToCart 
the `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed the click event and an array of the selected products. 

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
```

### results
The `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. 

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />
```

### title
The `title` prop specifies the bundle title

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />
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
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />
```


### description
The `description` prop specifies the bundle description

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />
```

### hideSeed
The `hideSeed` prop specifies if the seed result should be rendered or not.  

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />
```

### hideSeedText
The `hideSeedText` prop specifies if the seed result text should be rendered or not.  

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />
```


### hideCheckboxes
The `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />
```

### ctaButtonText
The `ctaButtonText` prop specifies the inner text to render in the add to cart button.

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />
```

### ctaButtonSuccessText
The `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />
```

### ctaButtonSuccessTimeout
The `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />
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
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />
```

### limit
The `limit` prop limits the number of results rendered. Defaults to `5`.

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />
```

### separatorIcon
The `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string. Defaults to `false` (no icon).

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />
```

### separatorIconSeedOnly
The `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />
```

### preselectedCount
The `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. Defaults to `2`.

```tsx
<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />
```

### lazyRender 
The `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enabled` toggle (defaults to `true`) as well as an `offset` (default `"10%"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

```tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the RecommendationBundleList component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `seedText` | Seed product label text | _(none)_ |
| `ctaButtonText` | Add to cart CTA button text | _(none)_ |
| `ctaButtonSuccessText` | CTA button text after successful add | _(none)_ |
| `ctaSubtotalTitle` | Subtotal section title | `cartStore` (CartStore) |

### Example

```tsx
<RecommendationBundleList
	controller={controller}
	lang={{
		ctaButtonText: {
			value: 'Add Bundle to Cart',
		},
	}}
/>
```
