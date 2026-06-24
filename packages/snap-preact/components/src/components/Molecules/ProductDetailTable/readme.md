# ProductDetailTable

Renders a two-column table of product details (label / value), one row per configured field. It is the component behind the Quickview `productDetailTable` module. Each value cell is rendered with `ProductDetail`, so values resolve from an explicit dot-path when given (e.g. `attributes.brand`) or fall back to `mappings.core` first, then `attributes`, for bare field keys; arrays render comma-separated.

## Usage

```tsx
import { ProductDetailTable } from '@athoscommerce/snap-preact/components';
```

### result
The `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from.

### fields
The `fields` prop is the ordered list of detail keys to display. Each entry may be an explicit dot-path (e.g. `attributes.brand`) or a bare field key (resolved against `mappings.core` then `attributes`). Only fields that resolve to a non-empty value are rendered; if none do, the component renders `null` (details are opt-in).

```tsx
<ProductDetailTable result={product} fields={['brand', 'material', 'colors']} />
```

### labels
The optional `labels` prop maps a field key to its display label. When a field has no entry the raw field key is used.

```tsx
<ProductDetailTable
	result={product}
	fields={['brand', 'material']}
	labels={{ brand: 'Brand', material: 'Material' }}
/>
```
