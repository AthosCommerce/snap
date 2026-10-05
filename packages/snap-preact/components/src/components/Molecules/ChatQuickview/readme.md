# ChatQuickview

Renders a `productQuery` chat message: an inline [QuickviewLayout](https://athoscommerce.github.io/snap/reference-quickview-layout) driven by the chat controller's quickview manager, plus a sticky "back to comparison / inspiration" banner when the message was opened from one of those flows.

Reads the product from `controller.quickviewManager.store` — populated by the controller (`productQuickView` / `productQuery` / `reopenProductQuery`) through the standard `QuickviewManager.show()` pipeline. The store's `isOpen` flag is what shows and hides the chat secondary window for product queries; loading and error states are rendered by the embedded layout.

## Sub-components
- QuickviewLayout (rendered `inline`: no dialog role/focus trap, no close button — the chat window owns dismissal)
- Button (back banner)

## Usage
```tsx
import { ChatQuickview } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. Must have `messageType === 'productQuery'`. Messages of other types render nothing and emit a warning.

```tsx
<ChatQuickview chatItem={chatItem} controller={controller} />
```

### controller
`ChatController` reference. Supplies the quickview manager the layout renders from; when the controller has no quickview manager the component warns and renders nothing (Snap provides one to chat controllers automatically whenever they are configured).

### layout, column1–column4, hideBadge, variantDropdownType, recommendation
Pass-throughs to the embedded `QuickviewLayout` (same shapes as on `QuickviewModal`/`QuickviewSlideout`). The default mirrors the chat product panel: a header banner on the theme's primary color (product image beside name, price, and the action buttons), followed by the variants, the attribute table, the description, and a link to the product page (badges are hidden by default — `hideBadge: true`):

```tsx
layout: [['c1', 'c2'], ['c3']],
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
column3: {
  layout: [['variantSelections'], ['productDetailTable'], ['productDetail.mappings.core.description'], ['button.more-info']],
  width: '100%',
},
```

The banner styling (primary background, button treatments, hidden slideshow chrome) is part of this component's default styles and keys off the first layout row — a custom `layout` whose first row is not the `c1`/`c2` banner should also restyle via `styleScript`/`disableStyles`.

With the default `layout`, the component fills the chat's secondary window and the detail rows (grouped in `c3`) scroll on their own while the banner row stays fixed above them. This is gated on the `ss__chat-quickview--default-layout` modifier class, which is only added when no custom `layout` is supplied (via props or theme), so a custom layout keeps the plain flowing behaviour.

`button.similar` and `button.discuss` are the chat-only layout modules — they forward to `controller.productSimilar()` / `controller.productQuery()`. `button.more-info` links to the product page (`mappings.core.url`), tracking a clickThrough on the chat controller.

The chat presentation is supplied by this component rather than by the layout:
- `variantDropdownType` defaults to `'list'`, so non-swatch selections render as selectable tiles instead of a dropdown.
- The `variantTitle` lang entry appends the value count to each variant title (e.g. "Color (5)").
- The theme gives the `button.add-to-cart` / `button.similar` / `button.discuss` buttons their `cart` / `search-thin` / `chat` icons (named selectors, so they apply with Snap Templates theming), and `swatches` `hideLabels: false` so each swatch shows its value label beneath it.

Swatch tiles show variant thumbnails when the chat controller's variant options are configured with `thumbnailBackgroundImages` (e.g. `settings.variants.options.color.thumbnailBackgroundImages: true`); values without a background render as text tiles.

The attribute table's fields come from the quickview config merge (`quickview.settings.displayFields` < the chat controller's `settings.quickview.displayFields` < per-call config). Each entry is a `DisplayFieldConfig` (`{ field, label?, type? }`) — use `type: 'rating'` / `'price'` / `'html'` for formatted values.

### primaryColor, primaryColorText
Templates-legal accent colors for the back banner.

### lang
`backToComparisonButton` / `backToInspirationButton` for the banner, plus all `QuickviewLayout` lang entries (`addToCartButton`, `moreInfoButton`, `similarButton`, `discussButton`, `loadingText`, `variantTitle`, …) which are forwarded to the embedded layout. `variantTitle` defaults to the selection label followed by its value count.

## Behaviour

- The panel opens on the variant the shopper clicked: when the clicked result's id matches a variant's `uid`, the `QuickviewStore` preselects that variant's options (otherwise the first available variant is selected).
- The back banner pops the productQuery message (restoring the comparison/inspiration view) and closes the quickview via `controller.closeProductQuickview()`.
