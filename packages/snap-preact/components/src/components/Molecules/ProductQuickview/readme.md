# ProductQuickview

The `ProductQuickview` molecule renders the active quickview product (`controller.store.product`) inside a `Modal`. It is a MobX `observer` that subscribes to the `QuickviewController`'s store and dismisses the modal by calling `controller.store.close()`.

It is the rendering half of the Quickview feature. The state half lives on `QuickviewController` (`@athoscommerce/snap-controller`) and its `QuickviewStore` (`@athoscommerce/snap-store-mobx`). A quickview is opened by calling `quickview({ result })` on a source controller (`SearchController`, `AutocompleteController`, or `RecommendationController`) — the `Result` molecule's quickview button does this — which delegates to the singleton `QuickviewController` via the integration global's `controller/quickview` event.

## Usage

Place a single `<ProductQuickview controller={quickviewController} />` in the page. When using Snap templates this happens automatically: a quickview controller is always created and a single `ProductQuickview` is injected into `<body>` (in a `#athos-quickview` element). The molecule renders nothing until `controller.store.isOpen` flips to `true`.

```tsx
<ProductQuickview controller={quickviewController} />
```

The `controller` must be a `QuickviewController` — the component warns and renders `null` when the controller is missing or its `type` is not `'quickview'`. Because the modal is driven by the shared singleton store, only one instance needs to be mounted; there is no per-`Result` scoping.

## Props

| prop | type | required | description |
|---|---|:---:|---|
| `controller` | `QuickviewController` | ✔️ | The component subscribes to `controller.store` and invokes `controller.store.close()` on dismiss. Renders `null` (with a console warning) when missing or not of type `'quickview'`. |
| `showBadges` | `boolean` | | Opt-in (default `false`). When `true`, overlay badges are shown over the image/carousel via `OverlayBadge` and callout badges render below it via `CalloutBadge`. |
| `customComponent` | `string` |   | Name of a custom template component to use as an override. Resolved via the Snap templates library. |
| `className`, `internalClassName`, `disableStyles`, `theme`, `treePath` | inherited | | Standard `ComponentProps` for class/style/theme overrides. |

## States

The molecule has three render branches, picked in priority order:

1. **Error** — when `store.error` is set. Renders a red `role="alert"` div with the error message.
2. **Loading** — when `store.loading` is true (typically while the controller is awaiting `/v1/products`). Renders a "Loading…" placeholder so the modal appears instantly on click.
3. **Product** — when `store.product` is set. Renders the product's image(s), name (from `mappings.core.name`), price (from `mappings.core.price`/`msrp`), variant selectors (each with a title), Add to Cart + Go to Product action buttons, description (from `mappings.core.description`), and an attributes table — in that order.

All three branches include a close button (top-right `close-thin` icon `Button` with `aria-label="Close quickview"`).

## Layout

The product branch uses a responsive two-region layout inside `.ss__product-quickview__body`:

- **Mobile (default):** single column — the media region (`.ss__product-quickview__media`) stacks above the details region (`.ss__product-quickview__details`).
- **Desktop (`@media (min-width: 768px)`):** two columns — the **left** column (`.ss__product-quickview__media`, ~45% width) holds the image or carousel (plus callout badges when `showBadges` is set); the **right** column (`.ss__product-quickview__details`) holds the title, price, variant selectors, action buttons, description, and attributes table.

## Fullscreen gallery (lightbox)

Clicking the image (or any carousel image) opens a fullscreen gallery overlay (`Gallery`), portaled to `document.body` so it sits above the modal. It provides:

- **Zoom** — `+` / `−` toolbar buttons step a CSS `scale` from 1× to 4×; when zoomed in, the image can be dragged to pan.
- **Navigation** — full-height prev/next arrow strips down each edge (and a `n / total` counter) cycle through all images when there's more than one; navigation/counter are hidden for a single image.
- **Touch swipe** — on touch devices, a horizontal swipe paginates (left → next, right → previous) when not zoomed in; while zoomed, dragging pans instead.
- **Keyboard** — `Esc` closes, `←` / `→` navigate, `+` / `−` zoom.
- **Close** — the close toolbar button (`aria-label="Close gallery"`), `Esc`, or clicking the dark backdrop around the image.

The gallery shows the same image set as the media region — the multi-image list when present (see Images below), otherwise the single core image (so a lone image is still zoomable). `Gallery` is also exported for standalone use: `<Gallery images={[...]} open={open} startIndex={0} onClose={...} />`.

## Badges

Badges are opt-in via `showBadges` (default `false`). When `showBadges={true}`, overlay badges are shown over the image/carousel (via the `OverlayBadge` molecule) and callout badges render directly below the media (via the `CalloutBadge` molecule). The store carries the source product's `Badges` instance onto the cloned product so they render, and forwards the originating controller's meta store as `store.meta` so badge/facet-label lookups work on the singleton.

## Price

The details column renders the product price using the `Price` atom, sourced from `mappings.core.price`. When `mappings.core.msrp` is greater than `price`, the MSRP is shown struck-through alongside the sale price (`.ss__product-quickview__pricing`).

## Actions

The details column renders two action buttons in `.ss__product-quickview__actions`:

- **Add to Cart** (`.ss__product-quickview__add-to-cart`) — calls `controller.addToCart([product])` with the quickview's product. The `QuickviewController` delegates this to the controller that opened the quickview, so the platform's existing cart integration (tracking and `addToCart` middleware) runs. Because variant selection updates the same product instance, the currently selected variant is reflected in the call.
- **Go to Product** (`.ss__product-quickview__go-to-product`, labeled "More info") — navigates to `mappings.core.url`. Omitted when the product has no url.

## Description

When `mappings.core.description` is present it's rendered (as HTML) in `.ss__product-quickview__description`. The block is omitted when no description exists.

## Images

By default the product branch renders a single image from `mappings.core.imageUrl || thumbnailImageUrl`.

`config.imagesField` (read from `store.quickviewConfig`) controls which field(s) hold the **list** of image URLs to render as a gallery. It accepts a single field name (`string`) or an array of candidate names (`string[]`) tried in order. Each candidate is looked up on `mappings.core` first, then on the product's `attributes`; the first that resolves to **more than one** image is rendered in a `Carousel` with `slidesPerView={1}` (with pagination and prev/next navigation).

When `config.imagesField` is **omitted**, the molecule defaults to trying `'images'` then `'ss_images'`. If no candidate (configured or default) resolves to more than one image, the molecule falls back to the single core image (`mappings.core.imageUrl || thumbnailImageUrl`).

Image resolution is variant-aware: when a variant is active, its own image list is used for the carousel. If the active variant has no multi-image field, only its single `imageUrl` is shown (no carousel) rather than falling back to the parent's array — the parent images may depict other variants and would be misleading. When the active variant's image appears in the carousel list, the carousel navigates to that slide (without remounting) as the selection changes.

Each field's value is expected to be an array of image URLs (a real array or a MobX `observable.array`).

## Variant selection

When `product.variants.selections` is non-empty, the modal renders one `VariantSelection` molecule per selection. Clicking a swatch/option calls `selection.select(...)` under the hood, which updates `product.mask`. Because the molecule reads `product.display.mappings.core` and `product.display.attributes` (which compose `mask` over the base data), the displayed name, image, and attributes refresh automatically.

Each selection renders as **swatches** or a **dropdown** based on the field's `optionConfig.type` (`'swatches'` or `'dropdown'`) from the `/v1/products` response — the store carries `optionConfig` onto the cloned product's variants so `selection.type` is populated, and the molecule passes it through to `VariantSelection`'s `type` prop. Fields without a configured type fall back to `VariantSelection`'s own default (a dropdown).

When `config.clone` is `true` (default), the quickview's `product` is an independent deep-clone of the source result — selecting a variant inside the modal does **not** affect the source tile. With `config.clone = false`, the source result is used by reference and modal interactions mutate the source.

## `displayFields` and labels

`store.quickviewConfig.displayFields` is an optional `string[]` that selects which attributes appear in the attributes table. Order is preserved. Attributes are **opt-in**: when `displayFields` is omitted, no attributes table is rendered.

Field labels come from `controller.store.meta?.data?.facets[field]?.label` — the originating controller's meta store, forwarded onto the quickview store when the modal opens. If no meta entry exists for a given field, the raw field name is used as the label.

Array values (real arrays or MobX `observable.array`s) are rendered as comma-separated strings; object values fall back to `JSON.stringify`.

## Styling notes

The Modal is positioned `fixed` and centered (`top: 50%; left: 50%; transform: translate(-50%, -50%)`). The z-index hierarchy is: autocomplete (`10002`) < Modal overlay (`10005`) < Modal content (`10006`) < dropdown portals (`10007`), so the quickview paints above an open autocomplete while variant `<select>` option lists still paint above the modal.

`!important` is applied to the `position`, `top`, `left`, and `transform` properties so theme overrides cannot accidentally re-anchor the modal back to its source `Result` tile (which is the underlying `Modal` molecule's default).

The wrapper element is taken out of normal flow (`position: absolute`, zero size) so mounting the molecule inside a CSS grid (e.g. as a sibling of result tiles) doesn't occupy a grid cell or shift the layout. The Modal's scroll lock is disabled (`lockScroll={false}`) so opening the modal doesn't remove the page scrollbar and reflow the results.

## Accessibility

- Error branch has `role="alert"` so screen readers announce failures.
- Close button has `aria-label="Close quickview"`.
- Clicking the overlay also invokes `controller.store.close()`.
- `Escape` closes the quickview — unless the fullscreen gallery is open, in which case it closes the gallery first.
- Focus management: on open, focus moves to the close button; on close, focus is restored to the element that was focused before the modal opened.

## Notes

- The modal is rendered inside a `CacheProvider` so emotion styles are scoped correctly when the component is portaled.
- Clicks inside the quickview call `stopPropagation` so they don't reach the `AutocompleteController`'s document click handler, which would otherwise close an open autocomplete behind the modal.
- The molecule does not fetch its own data; the `QuickviewController` is responsible for loading product data (`/v1/products`, skippable via `config.fetchProductData: false`), and the molecule renders whatever the store provides (including the add-to-cart button, image carousel, variant selection, and fullscreen gallery).
