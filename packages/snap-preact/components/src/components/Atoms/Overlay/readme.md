# Overlay

Renders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.

## Usage
```tsx
import { Overlay } from '@athoscommerce/snap-preact/components';
```

### active
The required `active` prop specifies when the overlay is active (visible). When `false`, the overlay element is still rendered, without the `ss__overlay--active` classname (default styles position it off-screen).

```tsx
<Overlay active={true} />
```

### color
The `color` prop specifies the color of the overlay.

```tsx
<Overlay active={true} color={'rgba(0,0,0,0.8)'} />
```

### transitionSpeed
The `transitionSpeed` prop specifies animation transition speed.

```tsx
<Overlay active={true} transitionSpeed='0.5s' />
```

### disableA11y
The `disableA11y` prop specifies a boolean to disable the autoset ally properties.

```tsx
<Overlay active={true} disableA11y />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function.

```tsx
<Overlay active={true} onClick={(e)=>{console.log(e)}} />
```
