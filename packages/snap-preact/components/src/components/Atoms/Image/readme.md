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
The `hoverSrc` prop specifiesthe URL of the alternative image to display on hover.

```tsx
<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />
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
