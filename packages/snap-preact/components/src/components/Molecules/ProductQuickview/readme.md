# ProductQuickview

The `ProductQuickview` molecule renders the active quickview product (`controller.store.quickview.product`) inside a `Modal`. It is a MobX `observer` that subscribes to `controller.store.quickview` and dismisses the modal by calling `controller.store.quickview.close()`.

It is the rendering half of the QuickView feature. The state half lives on the controller: see `SearchController`, `AutocompleteController`, and `RecommendationController` for `quickview` (which opens it) and `store.quickview.close()` (which dismisses it).

## Usage

Place a single `<ProductQuickview controller={controller} />` somewhere in your tree alongside the consumer. The molecule renders nothing until `controller.store.quickview.isOpen` flips to `true`.

```tsx
<ProductQuickview controller={controller} />
```

Scoping the modal to a specific Result (`Result` does this automatically when `hideQuickViewButton={false}`):

```tsx
{results.map((result) => (
    <Result result={result} controller={controller}>
        <ProductQuickview controller={controller} result={result} />
    </Result>
))}
```

When `result` is passed, the modal only mounts when its id matches the active quickview's product id. (The store sets `product` to the source result as soon as the modal opens — before the fetch resolves — so this scoping holds through the loading, error, and loaded phases.) This prevents N modal copies from rendering when N tiles each include a `ProductQuickview`.

## Props

| prop | type | required | description |
|---|---|:---:|---|
| `controller` | `SearchController \| AutocompleteController \| RecommendationController` | ✔️ | The component subscribes to `controller.store.quickview` and invokes `controller.store.quickview.close()` on dismiss. |
| `result` | `Product` |   | Scopes the modal — only mounts when this result's id matches the active quickview's product id. Omit to mount on every open. |
| `showBadges` | `boolean` | | Opt-in (default `false`). When `true`, overlay badges are shown over the image/carousel via `OverlayBadge` and callout badges render below it via `CalloutBadge`. |
| `customComponent` | `string` |   | Name of a custom template component to use as an override. Resolved via the Snap templates library. |
| `className`, `internalClassName`, `disableStyles`, `theme`, `treePath` | inherited | | Standard `ComponentProps` for class/style/theme overrides. |

## States

The molecule has three render branches, picked in priority order:

1. **Error** — when `store.quickview.error` is set. Renders a red `role="alert"` div with the error message.
2. **Loading** — when `store.quickview.loading` is true (typically while `quickview` is awaiting `/v1/products`). Renders a "Loading…" placeholder so the modal appears instantly on click.
3. **Product** — when `store.quickview.product` is set. Renders the product's image(s), name (from `mappings.core.name`), price (from `mappings.core.price`/`msrp`), variant selectors (each with a title), description (from `mappings.core.description`), an attributes table, and Add to Cart + Go to Product action buttons.

All three branches include a close button (top-right `×` with `aria-label="Close quickview"`).

## Layout

The product branch uses a responsive two-region layout inside `.ss__product-quickview__body`:

- **Mobile (default):** single column — the media region (`.ss__product-quickview__media`) stacks above the details region (`.ss__product-quickview__details`).
- **Desktop (`@media (min-width: 768px)`):** two columns — the **left** column (`.ss__product-quickview__media`, ~45% width) holds only the image or carousel; the **right** column (`.ss__product-quickview__details`) holds the title, variant selectors, description, attributes table, and Add to Cart button.

## Fullscreen gallery (lightbox)

Clicking the image (or any carousel image) opens a fullscreen gallery overlay (`Gallery`), portaled to `document.body` so it sits above the modal. It provides:

- **Zoom** — `+` / `−` toolbar buttons step a CSS `scale` from 1× to 4×; when zoomed in, the image can be dragged to pan.
- **Navigation** — full-height prev/next arrow strips down each edge (and a `n / total` counter) cycle through all images when there's more than one; navigation/counter are hidden for a single image.
- **Touch swipe** — on touch devices, a horizontal swipe paginates (left → next, right → previous) when not zoomed in; while zoomed, dragging pans instead.
- **Keyboard** — `Esc` closes, `←` / `→` navigate, `+` / `−` zoom.
- **Close** — the `×` toolbar button, `Esc`, or clicking the dark backdrop around the image.

The gallery shows the same image set as the media region — the multi-image list when present (see Images below), otherwise the single core image (so a lone image is still zoomable). `Gallery` is also exported for standalone use: `<Gallery images={[...]} open={open} startIndex={0} onClose={...} />`.

## Badges

Badges are opt-in via `showBadges` (default `false`). When `showBadges={true}`, overlay badges are shown over the image/carousel (via the `OverlayBadge` molecule) and callout badges render directly below the media (via the `CalloutBadge` molecule). The quickview carries the source product's `Badges` instance onto the cloned product so they render, and both badge molecules read `product.display.badges` (which reflects the active variant).

## Price

The details column renders the product price using the `Price` atom, sourced from `mappings.core.price`. When `mappings.core.msrp` is greater than `price`, the MSRP is shown struck-through alongside the sale price (`.ss__product-quickview__pricing`).

## Actions

The details column renders two action buttons in `.ss__product-quickview__actions`:

- **Add to Cart** (`.ss__product-quickview__add-to-cart`) — calls `controller.addToCart([product])` with the quickview's product. Because variant selection updates the same product instance, the currently selected variant is reflected in the call.
- **Go to Product** (`.ss__product-quickview__go-to-product`) — navigates to `mappings.core.url`. Omitted when the product has no url.

## Description

When `mappings.core.description` is present it's rendered (as HTML) in `.ss__product-quickview__description`. The block is omitted when no description exists.

## Images

By default the product branch renders a single image from `mappings.core.imageUrl || thumbnailImageUrl`.

`config.imagesField` controls which field(s) hold the **list** of image URLs to render as a gallery. It accepts a single field name (`string`) or an array of candidate names (`string[]`) tried in order. Each candidate is looked up on `mappings.core` first, then on the product's `attributes`; the first that resolves to **more than one** image is rendered in a `Carousel` with `slidesPerView={1}` (with pagination and prev/next navigation).

When `config.imagesField` is **omitted**, the molecule defaults to trying `'images'` then `'ss_images'`. If no candidate (configured or default) resolves to more than one image, the molecule falls back to the single core image (`mappings.core.imageUrl || thumbnailImageUrl`).

Each field's value is expected to be an array of image URLs (a real array or a MobX `observable.array`).

## Variant selection

When `product.variants.selections` is non-empty, the modal renders one `VariantSelection` molecule per selection. Clicking a swatch/option calls `selection.select(...)` under the hood, which updates `product.mask`. Because the molecule reads `product.display.mappings.core` and `product.display.attributes` (which compose `mask` over the base data), the displayed name, image, and attributes refresh automatically.

Each selection renders as **swatches** or a **dropdown** based on the field's `optionConfig.type` (`'swatches'` or `'dropdown'`) from the `/v1/products` response — the quickview carries `optionConfig` onto the cloned variants so `selection.type` is populated, and passes it through to `VariantSelection`'s `type` prop. Fields without a configured type fall back to `VariantSelection`'s own default (a dropdown).

When `config.clone` is `true` (default), the quickview's `product` is an independent deep-clone of the source result — selecting a variant inside the modal does **not** affect the source tile. With `config.clone = false`, the source result is used by reference and modal interactions mutate the source.

## `displayFields` and labels

`controller.store.quickview.config.displayFields` is an optional `string[]` that filters which attributes appear in the attributes table. Order is preserved. When omitted, all attributes on the product are rendered.

Field labels come from `controller.store.meta?.data?.facets[field]?.label` — the same labels used by facets. If no meta entry exists for a given field, the raw field name is used as the label.

Array values (real arrays or MobX `observable.array`s) are rendered as comma-separated strings; object values fall back to `JSON.stringify`.

## Styling notes

The Modal is positioned `fixed` and centered (`top: 50%; left: 50%; transform: translate(-50%, -50%)`) at `z-index: 9998`, with the Modal overlay backdrop lowered to `z-index: 9990`. This sits above page content but **below** dropdown portals (z-index `9999`), so variant `<select>` option lists paint above the modal.

`!important` is applied to the `position`, `top`, `left`, and `transform` properties so theme overrides cannot accidentally re-anchor the modal back to its source `Result` tile (which is the underlying `Modal` molecule's default).

## Accessibility

- Error branch has `role="alert"` so screen readers announce failures.
- Close button has `aria-label="Close quickview"`.
- Clicking the overlay also invokes `controller.store.quickview.close()`.

## Notes

- The modal is rendered inside a `CacheProvider` so emotion styles are scoped correctly when the component is portaled.
- When a `result` prop is provided, the modal refuses to open (renders `null`) even when the store is open if the active quickview's product id does not match `result.id`. This is the mechanism that lets every `Result` tile include its own `<ProductQuickview />` without producing duplicate modals.
- The molecule does not fetch its own data; the controller/store is responsible for loading product data, and the molecule renders whatever is provided (including the add-to-cart button, image carousel, variant selection, and fullscreen gallery).
