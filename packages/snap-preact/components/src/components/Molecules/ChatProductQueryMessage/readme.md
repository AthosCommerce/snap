# ChatProductQueryMessage

Renders a `productQuery` chat message: a detailed product panel showing the product image, name, brand, price, action buttons (Add to Cart, Show Similar, Discuss Product, Go to product), variant swatches, a "Product Information" table, a "Description" section, and a "Features" list.

Reads the product from `controller.store.productQuickview` (loaded by the controller in response to a `productQuery` request).

## Sub-components
- Image
- Button
- Icon
- Price

## Usage
```tsx
import { ChatProductQueryMessage } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. Must have `messageType === 'productQuery'`. Messages of other types render nothing and emit a `console.warn`.

```tsx
<ChatProductQueryMessage chatItem={chatItem} controller={controller} />
```

### controller
Optional `ChatController` reference. Drives Add-to-Cart, Show Similar, Discuss Product, and Back-to-inspiration actions. When omitted those buttons are still rendered but become no-ops.

### displayFields
Optional array of attribute keys to whitelist in the "Product Information" table. When set, rows are filtered + ordered by the array. When omitted, a sensible default order (rating, availability, material, fit, etc.) is used and card-level fields are skipped.

```tsx
<ChatProductQueryMessage
  chatItem={chatItem}
  controller={controller}
  displayFields={['category', 'brand', 'color', 'price', 'rating', 'available', 'description']}
/>
```

### primaryColor, primaryColorText
Templates-legal accent colors for the header bar + table outlines.

## Accessibility

- Variant swatches use `role="radiogroup"` + `role="radio"` with `aria-checked` and `aria-disabled` for unavailable options.
- Spec table rows use `<th scope="row">` so screen readers announce the row label when navigating values.
- "Back to inspiration" is a real `<button>`.
- The product info table has an `aria-label`.
