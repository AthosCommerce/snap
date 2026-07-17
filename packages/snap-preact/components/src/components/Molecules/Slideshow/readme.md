# Slideshow

Renders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.

## Sub-components
- Image
- Button

## Usage

```tsx
<Slideshow slides={slidesArray} />
```

### slides
The `slides` prop accepts an array of image URLs (strings) or slides objects with callbacks and metadata. slides objects allow for individual click handlers and custom properties.

```tsx
<Slideshow slides={['img1.jpg', 'img2.jpg', 'img3.jpg']} />
```

or

```tsx
const slidesObjects = [
    {
        src: 'product1.jpg',
        alt: 'Premium Headphones',
        onClick: (slide, index) => openProductDetails(slide)
    },
    {
        onClick: (slide, index) => addToCart(slide),
        content: <div>slide 2</div>
    }
];
```

```tsx
<Slideshow slides={slidesObjects} />
```

### slidesToShow
The `slidesToShow` prop specifies the number of slides visible at once in the slideshow.

```tsx
<Slideshow slides={slidesArray} slidesToShow={4} />
```

### slidesToMove
The `slidesToMove` prop specifies the number of slides to advance when using navigation controls.

```tsx
<Slideshow slides={slidesArray} slidesToMove={2} />
```

### startIndex
The `startIndex` prop sets the initial slide index. When it changes after mount the slideshow navigates to that slide in place (clamped to the valid range) rather than remounting — useful for syncing the active slide to external state.

```tsx
<Slideshow slides={slidesArray} startIndex={2} />
```

### gap
The `gap` prop sets the spacing between slides in pixels.

```tsx
<Slideshow slides={slidesArray} gap={20} />
```

### autoPlay
The `autoPlay` prop enables automatic progression through the slideshow.

```tsx
<Slideshow slides={slidesArray} autoPlay={true} />
```

### autoPlayInterval
The `autoPlayInterval` prop sets the time in milliseconds between automatic slide transitions.

```tsx
<Slideshow slides={slidesArray} autoPlay={true} autoPlayInterval={5000} />
```

### showNavigation
The `showNavigation` prop controls the visibility of previous/next navigation buttons.

```tsx
<Slideshow slides={slidesArray} showNavigation={false} />
```

### showPagination
The `showPagination` prop controls the visibility of pagination dots at the bottom of the slideshow.

```tsx
<Slideshow slides={slidesArray} showPagination={false} />
```

### overlayNavigation
The `overlayNavigation` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. 

```tsx
<Slideshow slides={slidesArray} overlayNavigation={false} />
```

### touchDragging
The `touchDragging` prop controls if the slideshow should have drag navigation enabled. 

```tsx
<Slideshow slides={slidesArray} touchDragging={true} />
```

### dragThreshold
The `dragThreshold` prop sets the drag sensitivity. 

```tsx
<Slideshow slides={slidesArray} dragThreshold={50} />
```

### loop
The `loop` prop enables continuous looping through the slideshow when reaching the end.

```tsx
<Slideshow slides={slidesArray} loop={false} />
```

### fallbackImage
The `fallbackImage` prop specifies a default image URL to display when an image fails to load.

```tsx
<Slideshow slides={slidesArray} fallbackImage="/path/to/default.jpg" />
```

### slideImageAlt
The `slideImageAlt` prop provides default alt text for images, which will be appended with the image number for accessibility.

```tsx
<Slideshow slides={slidesArray} slideImageAlt="Product image" />
```

### ariaLabel
The `ariaLabel` prop provides an accessible label for the entire slideshow component.

```tsx
<Slideshow slides={slidesArray} ariaLabel="Featured products slideshow" />
```

### ariaLabelledBy
The `ariaLabelledBy` prop references the ID of an element that labels the slideshow.

```tsx
<h2 id="slideshow-title">Our Products</h2>
<Slideshow slides={slidesArray} ariaLabelledBy="slideshow-title" />
```

### alwaysShowNavigation
The `alwaysShowNavigation` prop ensures navigation buttons are always displayed and take up space, even when the number of slides is below the `slidesPerView` threshold. This is particularly useful when using the slideshow in a grid of product cards to maintain consistent layout and height across all cards.

```tsx
<Slideshow slides={slidesArray} alwaysShowNavigation={true} />
```

### centerInsufficientSlides
The `centerInsufficientSlides` prop centers slides when there are fewer slides than the `slidesToShow` setting. This is enabled by default.

```tsx
<Slideshow slides={slidesArray} centerInsufficientSlides={true} />
```