# Gallery

Renders a fullscreen lightbox-style image gallery overlay with navigation, zoom controls, and keyboard/touch support. The gallery is portalled to `document.body` and renders above all other content.

## Sub-components
- Button

## Usage

```tsx
import { Gallery } from '@athoscommerce/snap-preact/components';
```

```tsx
<Gallery images={imageUrls} open={isOpen} onClose={() => setIsOpen(false)} />
```

### images
The `images` prop accepts an array of image URL strings to display in the gallery. If the array is empty, the gallery is not rendered.

```tsx
<Gallery images={['img1.jpg', 'img2.jpg', 'img3.jpg']} open={true} />
```

### open
The `open` prop controls the visibility of the gallery overlay. When `false`, the gallery is not rendered.

```tsx
<Gallery images={imageUrls} open={true} />
```

### startIndex
The `startIndex` prop specifies which image to display when the gallery opens. Defaults to `0`.

```tsx
<Gallery images={imageUrls} open={true} startIndex={2} />
```

### onClose
The `onClose` prop is a callback invoked when the gallery is dismissed via the close button, the Escape key, or clicking the backdrop.

```tsx
<Gallery images={imageUrls} open={true} onClose={() => setIsOpen(false)} />
```

### alt
The `alt` prop provides alt text for the displayed image.

```tsx
<Gallery images={imageUrls} open={true} alt="Product image" />
```

### zoomMin
The `zoomMin` prop sets the minimum zoom level. Defaults to `1`.

```tsx
<Gallery images={imageUrls} open={true} zoomMin={1} />
```

### zoomMax
The `zoomMax` prop sets the maximum zoom level. Defaults to `4`.

```tsx
<Gallery images={imageUrls} open={true} zoomMax={6} />
```

### zoomStep
The `zoomStep` prop sets the zoom increment applied per zoom in/out action. Defaults to `0.5`.

```tsx
<Gallery images={imageUrls} open={true} zoomStep={1} />
```

### swipeThreshold
The `swipeThreshold` prop sets the number of pixels of horizontal touch travel required before a swipe navigates to the next or previous image. Defaults to `40`.

```tsx
<Gallery images={imageUrls} open={true} swipeThreshold={60} />
```

## Features

### Keyboard Controls
- **Escape** - Close the gallery
- **ArrowLeft / ArrowRight** - Navigate between images
- **+ / =** - Zoom in
- **- / _** - Zoom out

### Zoom
Zoom ranges from `zoomMin` (default 1x) to `zoomMax` (default 4x) in `zoomStep` (default 0.5x) increments. When zoomed in, drag-to-pan is enabled.

### Touch Swipe
On mobile, dominantly-horizontal swipe gestures past `swipeThreshold` (default 40px) navigate between images when not zoomed in.

### Wrap-around Navigation
Navigation wraps around from the last image to the first and vice versa. The previous/next navigation buttons and the image counter are hidden when there is only one image.
