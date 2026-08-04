# ProductDetailTable

Renders a two-column table of product details (label / value), one row per configured detail. It is the component behind the Quickview `productDetailTable` module. Values resolve from an explicit dot-path when given (e.g. `attributes.brand`) or fall back to `mappings.core` first, then `attributes`, for bare field keys.

## Usage

```tsx
import { ProductDetailTable } from '@athoscommerce/snap-preact/components';
```

### result
The `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from.

### details
The `details` prop is the ordered list of detail rows to display. Each entry is an object with:

- `field` (required) — an explicit dot-path (e.g. `attributes.brand`) or a bare field key (resolved against `mappings.core` then `attributes`).
- `label` (optional) — the display label; falls back to the raw field key.
- `type` (optional) — how to render the resolved value:
  - `'text'` (default) — plain text via `ProductDetail`; arrays render comma-separated.
  - `'price'` — the `Price` component (formatted currency).
  - `'rating'` — the `Rating` component (star display).
  - `'image'` — the `Image` component (arrays use the first entry).
  - `'html'` — rich HTML via `ProductDetail`'s `html` mode.

  When a typed value doesn't fit its type (e.g. a non-numeric `price`), the value falls back to text rendering.

Only details that resolve to a non-empty value are rendered; if none do, the component renders `null` (details are opt-in).

```tsx
<ProductDetailTable
	result={product}
	details={[
		{ field: 'brand', label: 'Brand' },
		{ field: 'material', label: 'Material' },
		{ field: 'price', label: 'Price', type: 'price' },
		{ field: 'rating', label: 'Rating', type: 'rating' },
	]}
/>
```
