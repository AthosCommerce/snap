# Inline Banner

## Usage
```tsx
import { InlineBanner } from '@athoscommerce/snap-preact/components';
```

### banner
The `banner` prop specifies a reference to an inline banner object from the `results` store (a result with a `type` of `'banner'`).

```js
const banner = controller.store.results.find((result) => result.type === 'banner');
```

```tsx
<InlineBanner banner={banner} />
```

### width
The `width` prop specifies the width of the inline banner.

```tsx
<InlineBanner banner={banner} width={'300px'} />
```

### layout
The `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.

```tsx
<InlineBanner banner={banner} layout={'grid'} />
```


### disableA11y
The `disableA11y` prop specifies a boolean to disable the autoset ally properties.

```tsx
<InlineBanner banner={banner} disableA11y />
```

### onClick
The `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.

```js
const CustomBannerClick = (e, banner) => {
    console.log('You Clicked a banner!' , e)
};
```

```tsx
<InlineBanner banner={banner} onClick={CustomBannerClick} />
```