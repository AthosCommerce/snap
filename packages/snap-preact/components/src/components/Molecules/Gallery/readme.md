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
The `images` prop accepts an array of image URL strings to display in the gallery.

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

## Features

### Keyboard Controls
- **Escape** - Close the gallery
- **ArrowLeft / ArrowRight** - Navigate between images
- **+ / -** - Zoom in / out

### Zoom
Zoom ranges from 1x to 4x in 0.5x increments. When zoomed in, drag-to-pan is enabled.

### Touch Swipe
On mobile, horizontal swipe gestures navigate between images when not zoomed in.

### Wrap-around Navigation
Navigation wraps around from the last image to the first and vice versa.
