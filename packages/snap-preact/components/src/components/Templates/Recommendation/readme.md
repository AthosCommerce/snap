# Recommendation

Renders a carousel of product recommendations, built using the Carousel Component.

If using children, the provided children elements array length and order must match the results stored in the `controller.store.results` (or `results` prop) to avoid unexpected tracking behaviour.

Any modification to the results array and data are recommended to be made using an `afterSearch` and/or `afterStore` event via the Controller instead of making modifications in the component.


## Sub-components
- Carousel
- ResultTracker
- Result (default)

## Usage
```tsx
import { Recommendation } from '@athoscommerce/snap-preact/components';
```

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the `modules` prop; these may need additional props and or stylesheets.

### controller
The required `controller` prop specifies a reference to the RecommendationController

```tsx
<Recommendation controller={controller} />
```
### loop
The `loop` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

```tsx
<Recommendation controller={controller} loop={true} />
```

### results
The `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`

If using children, the provided children elements array length and order must match the results stored in the `results` prop to avoid unexpected tracking behaviour.

```tsx
<Recommendation controller={controller} results={controller.store.results} />
```

### resultComponent
The `resultComponent` prop specifies a custom result component to render.

```tsx

const CustomResult = ({
	controller 
	result
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Recommendation controller={controller} resultComponent={CustomResult} />
```

### title
The `title` prop specifies the carousel title

```tsx
<Recommendation controller={controller} title={'Recommended Products'} />
```

### hideTitle
The `hideTitle` prop hides the carousel title

```tsx
<Recommendation controller={controller} title={'Recommended Products'} hideTitle={true} />
```

### description
The `description` prop specifies the carousel description

```tsx
<Recommendation controller={controller} description={'Recommended Products are so awesome!'} />
```

### pagination
The `pagination` prop specifies if the carousel should display pagination dots. 

```tsx
<Recommendation controller={controller} pagination={true} />
```

### vertical
The `vertical` prop sets the carousel scroll direction to vertical.

```tsx
<Recommendation vertical={true}>{children}<Recommendation/>
```

### hideButtons
The `hideButtons` prop specifies if the carousel should hide prev/next buttons.

```tsx
<Recommendation hideButtons={true}>{children}<Recommendation/>
```

### prevButton
The `prevButton` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

```tsx
<Recommendation controller={controller} prevButton={'<'} />
```

### nextButton
The `nextButton` prop specifies the next button element of the carousel. This can be a string or JSX element. 

```tsx
<Recommendation controller={controller} nextButton={'>'} />
```

### modules
The `modules` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include `Navigation`, `Pagination` and `A11y` modules by default.

```tsx
import { Scrollbar } from 'swiper';
<Recommendation controller={controller} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
```

### lazyRender 
The `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `"10%"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

```tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<Recommendation controller={controller} lazyRender={ customLazyRenderProps } />
```

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **`any Recommendation props`**, or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. 

`slidesPerView` - number of products to display per page (for a peekaboo effect use a decimal number here)

`slidesPerGroup` - number of products to scroll by when next/previous button is clicked

`spaceBetween` - spacing between each product

```js
const defaultRecommendationBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
	480: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 10,
	},
};

const defaultVerticalRecommendationBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
```

```tsx
<Recommendation controller={controller} breakpoints={defaultRecommendationBreakpoints} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the Recommendation component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `titleText` | Recommendation carousel title | `controller` (RecommendationController) |

### Example

```tsx
<Recommendation
	controller={controller}
	lang={{
		titleText: {
			value: 'You May Also Like',
		},
	}}
/>
```
