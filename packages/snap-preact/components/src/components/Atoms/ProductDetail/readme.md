# ProductDetail

Renders a single product field — resolved from an explicit dot-path on the product (e.g. `mappings.core.name` or `attributes.brand`) — as text or raw HTML. It is the building block behind the Quickview `title` (`productDetail.mappings.core.name`) and `description` (`productDetail.mappings.core.description`) modules and is reused for the value cells of `ProductDetailTable`.

## Usage

```tsx
import { ProductDetail } from '@athoscommerce/snap-preact/components';
```

### result
The `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from. The variant-aware `display` view is preferred, so values stay in sync with the active variant.

```tsx
<ProductDetail result={product} field={'mappings.core.name'} />
```

### field
The required `field` prop is an explicit dot-path stating where to read the value from — for example `mappings.core.name` or `attributes.brand`. The path is resolved against the product's `display` view first, then the product itself. Array values render comma-separated; objects fall back to `JSON.stringify`. The component renders `null` when the resolved value is empty.

```tsx
<ProductDetail result={product} field={'attributes.brand'} />
```

When the field is a core-mapping price (`mappings.core.price`, `mappings.core.msrp`, or the bare `price`/`msrp` keys) and the resolved value is numeric, it is formatted with the `Price` component rather than rendered as plain text. Non-core price fields such as `attributes.price` are left as text.

```tsx
<ProductDetail result={product} field={'mappings.core.price'} />
```

### html
When `html` is true the resolved value is rendered via `dangerouslySetInnerHTML` (used for rich descriptions).

```tsx
<ProductDetail result={product} field={'mappings.core.description'} html={true} />
```

### name
The optional `name` prop drives the `productDetail.<name>` theme selector (the `${module}.${name}` pattern) and the `ss__product-detail--<name>` classname modifier. When omitted the field path's final segment is used, normalized to its component-name form (underscores become dashes, lowercased — e.g. `color_family` → `color-family`).

```tsx
<ProductDetail result={product} field={'mappings.core.name'} name={'name'} />
```
