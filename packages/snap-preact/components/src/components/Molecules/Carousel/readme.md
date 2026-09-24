# Carousel

Renders a carousel of slides using children, built with <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/get-started">Swiper v11</a>

## Sub-components
- Icon

## Usage
```tsx
import { Carousel } from '@athoscommerce/snap-preact/components';
```

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the `modules` prop; these may need additional props and or stylesheets.

```tsx
<Carousel>{children}</Carousel>
```
### loop
The `loop` prop (defaults to `true`) enables 'infinite' looping through the result set when swiping or using the arrow buttons.

```tsx
<Carousel loop={true}>{children}</Carousel>
```

### pagination
The `pagination` prop (defaults to `false`) can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#pagination">swiper docs</a>. When enabled, `clickable` is set to `true` unless overridden in the config object.

```tsx
<Carousel pagination={true}>{children}</Carousel>
```

or

```js
const paginationConfig = {
	bulletActiveClass: "active",
	bulletClass: 'bullet',
	clickable: false
};
```
```tsx
<Carousel pagination={paginationConfig}>{children}</Carousel>
```

### scrollbar
The `scrollbar` prop can take a bool to enable a scrollbar track beneath the slides, or an object containing a SwiperOptions.scrollbar config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#scrollbar">swiper docs</a>. The `Scrollbar` module is included by default, so no additional module import is needed. The track color is `#d9d9d9` and the drag handle uses the theme's primary color.

```tsx
<Carousel scrollbar={true}>{children}</Carousel>
```

or

```js
const scrollbarConfig = {
	draggable: true,
	hide: false,
	snapOnRelease: true,
};
```
```tsx
<Carousel scrollbar={scrollbarConfig}>{children}</Carousel>
```

### navigation
The `navigation` prop can take a bool (defaults to `true`) to enable the prev/next buttons, or an object containing a SwiperOptions.navigation config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#navigation">swiper docs</a>. The `nextEl` and `prevEl` options are managed internally and bound to the rendered `prevButton` and `nextButton` elements. To hide the buttons while keeping navigation enabled, use the `hideButtons` prop.

```tsx
<Carousel navigation={false}>{children}</Carousel>
```

or

```js
const navigationConfig = {
	disabledClass: 'disabled',
	hiddenClass: 'hidden',
};
```
```tsx
<Carousel navigation={navigationConfig}>{children}</Carousel>
```

### vertical 
The `vertical` prop changes the carousel slide direction from horizontal, to vertical. 

```tsx
<Carousel vertical={true}>{children}</Carousel>
```

### hideButtons
The `hideButtons` prop specifies if the carousel should hide prev/next buttons.

```tsx
<Carousel hideButtons={true}>{children}</Carousel>
```

### prevButton
The `prevButton` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

```tsx
<Carousel prevButton={'<'}>{children}</Carousel>
```

### nextButton
The `nextButton` prop specifies the next button element of the carousel. This can be a string or JSX element. 

```tsx
<Carousel nextButton={'>'}>{children}</Carousel>
```

### onPrevButtonClick
The `onPrevButtonClick` prop can be used to handle click events on the prevButton.

```tsx
<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>
```

### onNextButtonClick
The `onNextButtonClick` prop can be used to handle click events on the nextButton.

```tsx
<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>
```

### onClick
The `onClick` prop can be used to handle click events on the swiper component.

```tsx
<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>
```

### onBeforeInit
The `onBeforeInit` prop can be used to tie into the swiper `beforeInit` event. It is called after the carousel has bound its prev/next button elements to the swiper navigation params.

```tsx
<Carousel onBeforeInit={(swiper) => { /* do something */ }}>{children}</Carousel>
```

### onInit
The `onInit` prop can be used to tie into the initialization event for swiper.

```tsx
<Carousel onInit={(swiper) => { /* do something */ }}>{children}</Carousel>
```

### onAfterInit
The `onAfterInit` prop can be used to tie into the swiper `afterInit` event. It is called after the carousel has attached its own prev/next click handlers.

```tsx
<Carousel onAfterInit={(swiper) => { /* do something */ }}>{children}</Carousel>
```

### onResize
The `onResize` prop can be used to tie into the swiper `resize` event. Unlike the native swiper event, no arguments are passed to the handler.

```tsx
<Carousel onResize={() => { /* do something */ }}>{children}</Carousel>
```

### onTransitionEnd
The `onTransitionEnd` prop can be used to tie into the swiper `transitionEnd` event. Unlike the native swiper event, no arguments are passed to the handler.

```tsx
<Carousel onTransitionEnd={() => { /* do something */ }}>{children}</Carousel>
```

### modules
The `modules` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include `Navigation`, `Pagination`, `Scrollbar` and `A11y` modules by default.

```tsx
import { Autoplay } from 'swiper/modules';
<Carousel modules={[Autoplay]} autoplay={{ delay: 3000 }}>{children}</Carousel>
```

### slidesPerView
The `slidesPerView` prop specifies the number of slides visible at once. Accepts a number (use a decimal for a peekaboo effect) or `'auto'`. Values from `breakpoints` (including the defaults below) take precedence over this prop, so pass an empty `breakpoints` object to use a single value at all viewports.

```tsx
<Carousel slidesPerView={3} breakpoints={{}}>{children}</Carousel>
```

### autoAdjustSlides
The `autoAdjustSlides` prop (defaults to `false`) when set to `true` will automatically adjust the `slidesPerView` and `slidesPerGroup` values to match the `children` length when there are fewer children than the current `slidesPerView`. The `loop` prop is not affected.

```tsx
<Carousel autoAdjustSlides={true}>{children}</Carousel>
```

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

Note: breakpoints are ignored when the component or global theme is a `templates` type theme.

The object key specifies the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **`any Carousel props`** or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. 

`slidesPerView` - number of products to display per page (for a peekaboo effect use a decimal number here)

`slidesPerGroup` - number of products to scroll by when next/previous button is clicked

`spaceBetween` - spacing between each product

```js
const defaultCarouselBreakpoints = {
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

const defaultVerticalCarouselBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
```

```tsx
<Carousel breakpoints={defaultCarouselBreakpoints}>{children}</Carousel>
```
