# Image

Renders an Image with fallback and rollover functionality. 

## Usage
```tsx
import { Image } from '@athoscommerce/snap-preact/components';
```

### src
The required `src` prop specifies the URL of the image to render.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />
```

### alt
The required `alt` prop is the image `alt` attribute.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />
```

### title
The `title` prop specifies the image `title` attribute. If not provided, the `alt` prop value is used.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' title='image title' />
```

### fallback
The `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />
```

### hoverSrc
The `hoverSrc` prop specifies the URL of the alternative image to display on hover.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />
```

### srcset
The `srcset` prop sets the image `srcset` attribute. It accepts either a `srcset` string, or a function that receives an image URL and returns the `srcset` for it.

A string is set on the attribute as-is, and may use width (`w`) or pixel density (`x`) descriptors. While hovering it is removed so that the `hoverSrc` image is displayed.

```tsx
<Image
	src={searchResponse.results.mappings.core.imageUrl}
	srcset={`${searchResponse.results.mappings.core.thumbnailImageUrl} 400w, ${searchResponse.results.mappings.core.imageUrl} 1200w`}
	sizes='auto, (max-width: 600px) 100vw, 400px'
	alt='image'
/>
```

A function is called with the `src`, and with the `hoverSrc` while hovering, so it can be set once through the theme - for example on the result image (`'result image'`). Platform packages provide helpers for their image CDN - for Shopify, use `shopifyImageSrcset` from `@athoscommerce/snap-platforms/shopify` to generate candidates at a list of widths.

```tsx
import { shopifyImageSrcset } from '@athoscommerce/snap-platforms/shopify';

<Image
	src={searchResponse.results.mappings.core.imageUrl}
	srcset={(src) => shopifyImageSrcset(src, [320, 640, 960, 1280])}
	sizes='auto, (max-width: 600px) 100vw, 400px'
	alt='image'
/>
```

The `src` is used by browsers that do not support `srcset`. If a `srcset` candidate fails to load, the `srcset` is removed so that the browser retries with the `src`, and it is not set again until the `src` changes. If that also fails, the `fallback` image is displayed.

### sizes
The `sizes` prop sets the image `sizes` attribute - a comma-separated list of media conditions and the width the image will be displayed at when each condition matches. It is used by the browser to choose between `srcset` candidates that use width (`w`) descriptors. Without it, browsers assume the image is displayed at the full viewport width.

Start the list with `auto` so that browsers that support it use the rendered width of the image to choose a candidate. `auto` only applies to lazy loaded images (see the `lazy` prop, enabled by default); the rest of the list is used otherwise.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} srcset={srcset} sizes='auto, (max-width: 600px) 100vw, 400px' alt='image' />
```

### height
The `height` prop is used to set a height on the image. 

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />
```

### lazy
The `lazy` prop is used to disable the lazy loading feature. Enabled by default. 

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />
```

### draggable
The `draggable` prop sets the `draggable` attribute on the image element.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} draggable={false} alt='image' />
```

### Events

#### onMouseOver
The `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />
```

#### onMouseOut
The `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />
```

#### onPointerDown
The `onPointerDown` prop allows for a custom callback function when a pointer becomes active on the image.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerDown={(e)=>{console.log(e)}} />
```

#### onPointerMove
The `onPointerMove` prop allows for a custom callback function when a pointer moves over the image.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerMove={(e)=>{console.log(e)}} />
```

#### onPointerUp
The `onPointerUp` prop allows for a custom callback function when a pointer is released on the image.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerUp={(e)=>{console.log(e)}} />
```

#### onPointerLeave
The `onPointerLeave` prop allows for a custom callback function when a pointer leaves the image.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerLeave={(e)=>{console.log(e)}} />
```

#### onError
The `onError` prop allows for a custom callback function when the image has encountered an error. It is invoked for each failed load, so when a `srcset` candidate fails and the `src` is retried it may be called twice.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />
```

#### onLoad
The `onLoad` prop allows for a custom callback function when the image has finished loading.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />
```

#### onClick
The `onClick` prop allows for a custom callback function when the image is clicked. 

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />
```
