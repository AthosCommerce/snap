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
The `srcset` prop sets the image `srcset` attribute. It accepts either an array of widths or a `srcset` string.

When given an array of widths, a candidate URL is generated for each width by setting the `width` query parameter on the `src` (eg. `image.jpg?v=123&width=320`), along with a width (`w`) descriptor. The `sizes` prop should also be provided so that the browser can select the appropriate candidate for the space the image occupies.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} srcset={[320, 640, 960, 1280]} sizes='(max-width: 600px) 100vw, 400px' alt='image' />
```

The `width` query parameter is supported by the Shopify CDN. Shopify ignores it when the filename has a legacy size suffix (eg. `image_600x600.jpg`), so every candidate would be the same image. Remove the suffix from the `src` first with the `stripShopifyImageSize` function from `@athoscommerce/snap-platforms/shopify`.

```tsx
import { stripShopifyImageSize } from '@athoscommerce/snap-platforms/shopify';

<Image src={stripShopifyImageSize(searchResponse.results.mappings.core.imageUrl)} srcset={[320, 640, 960, 1280]} sizes='(max-width: 600px) 100vw, 400px' alt='image' />
```

For other image CDNs, provide a `srcset` string instead. A `srcset` string is set on the attribute as-is, and may use width (`w`) or pixel density (`x`) descriptors.

```tsx
<Image
	src={searchResponse.results.mappings.core.imageUrl}
	srcset={`${searchResponse.results.mappings.core.thumbnailImageUrl} 400w, ${searchResponse.results.mappings.core.imageUrl} 1200w`}
	sizes='(max-width: 600px) 100vw, 400px'
	alt='image'
/>
```

The `src` is used by browsers that do not support `srcset`. If the image fails to load, `srcset` and `sizes` are removed so that the `fallback` image is displayed.

### sizes
The `sizes` prop sets the image `sizes` attribute - a comma-separated list of media conditions and the width the image will be displayed at when each condition matches. It is used by the browser to choose between `srcset` candidates that use width (`w`) descriptors. Without it, browsers assume the image is displayed at the full viewport width.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} srcset={[320, 640, 960, 1280]} sizes='(max-width: 600px) 100vw, 400px' alt='image' />
```

### hoverSrcset
The `hoverSrcset` prop specifies the `srcset` to use while hovering, alongside `hoverSrc`. Like `srcset`, it accepts either an array of widths (applied to `hoverSrc`) or a `srcset` string.

When `srcset` is an array of widths and `hoverSrcset` is not provided, the same widths are applied to `hoverSrc`. When `srcset` is a string and `hoverSrcset` is not provided, the `srcset` attribute is removed while hovering so that the `hoverSrc` image is displayed.

```tsx
<Image
	src={searchResponse.results.mappings.core.imageUrl}
	srcset={[320, 640, 960, 1280]}
	hoverSrc={searchResponse.results.mappings.core.hoverImg}
	hoverSrcset={[320, 640, 960, 1280]}
	sizes='(max-width: 600px) 100vw, 400px'
	alt='image'
/>
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
The `onError` prop allows for a custom callback function when the image has encountered an error.

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
