# Banner

Renders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. 

This `Banner` component does not support inline banners. See `InlineBanner` component below.

## Usage
```tsx
import { Banner } from '@athoscommerce/snap-preact/components';
```

### content
The `content` prop specifies an object of banners returned from the athos API. If not provided, the `controller` prop's `store.merchandising.content` is used.

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'header'} />
```

### type
The required `type` prop specifies the banner type to render from the `content` object.

Banner Types include `header`, `footer`, `left`, and `banner`. 

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'header'} />
```

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'footer'} />
```

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'left'} />
```

```tsx
<Banner content={controller?.store?.merchandising?.content} type={'banner'} />
```

### controller
The `controller` prop specifies a reference to the search or autocomplete controller. Its `store.merchandising.content` is used when the `content` prop is not provided.

```tsx
<Banner controller={controller} type={'header'} />
```