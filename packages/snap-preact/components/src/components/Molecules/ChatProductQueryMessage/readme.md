# ChatProductQueryMessage

Renders a `productQuery` chat message: an inline [QuickviewLayout](https://athoscommerce.github.io/snap/reference-quickview-layout) driven by the chat controller's quickview manager, plus a sticky "back to comparison / inspiration" banner when the message was opened from one of those flows.

Reads the product from `controller.quickviewManager.store` — populated by the controller (`productQuickView` / `productQuery` / `reopenProductQuery`) through the standard `QuickviewManager.show()` pipeline. The store's `isOpen` flag is what shows and hides the chat secondary window for product queries; loading and error states are rendered by the embedded layout.

## Sub-components
- QuickviewLayout (rendered `inline`: no dialog role/focus trap, no close button — the chat window owns dismissal)
- Button (back banner)

## Usage
```tsx
import { ChatProductQueryMessage } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. Must have `messageType === 'productQuery'`. Messages of other types render nothing and emit a warning.

```tsx
<ChatProductQueryMessage chatItem={chatItem} controller={controller} />
```

### controller
`ChatController` reference. Supplies the quickview manager the layout renders from; when the controller has no quickview manager the component warns and renders nothing (Snap provides one to chat controllers automatically whenever they are configured).

### layout, column1–column4, hideBadge, recommendation
Pass-throughs to the embedded `QuickviewLayout` (same shapes as on `QuickviewModal`/`QuickviewSlideout`). The default mirrors the chat product panel: a header banner on the theme's primary color (product image beside name, price, and the action buttons), followed by the variants, the attribute table, the description, and a "more info" link (badges are hidden by default — `hideBadge: true`):

```tsx
layout: [['c1', 'c2'], ['variantSelections'], ['productDetailTable'], ['productDetail.mappings.core.description'], ['button.more-info']],
column1: {
  layout: ['slideshow'],
  width: '25%',
},
column2: {
  layout: [
    ['productDetail.mappings.core.name'],
    ['productDetail.mappings.core.price'],
    ['button.add-to-cart', 'button.similar', 'button.discuss'],
  ],
  width: 'auto',
},
```

The banner styling (primary background, button treatments, hidden slideshow chrome) is part of this component's default styles and keys off the first layout row — a custom `layout` whose first row is not the `c1`/`c2` banner should also restyle via `styleScript`/`disableStyles`.

`button.similar` and `button.discuss` are the chat-only layout modules — they forward to `controller.productSimilar()` / `controller.productQuery()`. Because the layout renders `inline`, variant titles include the value count, non-swatch selections render as selectable tile lists, and the action buttons carry their icons (see the QuickviewLayout reference).

The attribute table's fields come from the quickview config merge (`quickview.settings.displayFields` < the chat controller's `settings.quickview.displayFields` < per-call config); chat's `displayFields` may be a plain `string[]`.

### primaryColor, primaryColorText
Templates-legal accent colors for the back banner.

### lang
`backToComparisonButton` / `backToInspirationButton` for the banner, plus all `QuickviewLayout` lang entries (`addToCartButton`, `moreInfoButton`, `similarButton`, `discussButton`, `loadingText`, …) which are forwarded to the embedded layout.

## Behaviour

- On mount (and whenever the quickview product changes) every unselected variant selection is given an initial value, preferring the variant whose `uid` matches the clicked result's id so the panel reflects exactly the variant the shopper clicked.
- The back banner pops the productQuery message (restoring the comparison/inspiration view) and closes the quickview via `controller.closeProductQuickview()`.
