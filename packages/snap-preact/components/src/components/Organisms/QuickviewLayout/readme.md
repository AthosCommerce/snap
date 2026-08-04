# QuickviewLayout

`QuickviewLayout` is the rendering engine of the Quickview feature. It is a MobX `observer` that subscribes to a `QuickviewController`'s store and renders the active quickview product (`controller.store.product`) — image(s), name, variant selectors, action buttons, description, and an attributes table — arranged by a configurable, module-based `layout` prop (the same pattern as `AutocompleteLayout`).

It is composed inside a presentation container that owns the open/close shell:

- **`ProductQuickviewModal`** (`Templates/ProductQuickviewModal`) — renders `QuickviewLayout` inside a centered `Modal`. This is the default variant injected by Snap templates.
- **`ProductQuickviewSlideout`** (`Templates/ProductQuickviewSlideout`) — renders `QuickviewLayout` inside a side-panel `Slideout`.

The state half of the feature lives on `QuickviewController` (`@athoscommerce/snap-controller`) and its `QuickviewStore` (`@athoscommerce/snap-store-mobx`). A quickview is opened by calling `quickview(result)` on a source controller (`SearchController`, `AutocompleteController`, or `RecommendationController`) — the `Result` molecule's quickview button does this — which delegates to the singleton `QuickviewController`.

## Usage

When using Snap templates a quickview controller is always created and a single container is injected into `<body>` (in a `#athos-quickview` element). `ProductQuickviewModal` is the default; supply a `quickview` controller definition that resolves `ProductQuickviewSlideout` from the library to use the slide-out instead.

```tsx
// Default (centered modal)
<ProductQuickviewModal controller={quickviewController} />

// Slide-out panel
<ProductQuickviewSlideout controller={quickviewController} slideDirection="right" width="500px" />

// The layout engine on its own (rare — normally used via a container)
<QuickviewLayout controller={quickviewController} onReset={() => quickviewController.store.close()} />
```

The `controller` must be a `QuickviewController` — the components warn and render `null` when the controller is missing or its `type` is not `'quickview'`. Because the feature is driven by the shared singleton store, only one container needs to be mounted; there is no per-`Result` scoping.

## Layout

`QuickviewLayout` renders a flex grid of named **modules** described by the `layout` prop, resolved at render time by a recursive `findModule()` engine (mirroring `AutocompleteLayout`).

Each module name maps to a library component (so theme selectors and `customComponent` overrides resolve, the same way `AutocompleteLayout` uses `terms.history` / `button.see-more`):

- `slideshow` — the slideshow region (a `Slideshow` of one or more images; nav/pagination appear only for multiple images). Wrapped in `OverlayBadge` so overlay badges paint over it, unless `disabledOverlayBadges` is set.
- `calloutBadge` — the `CalloutBadge` molecule (callout badges rendered as their own block). Use `calloutBadge.<tag>` to pass a custom `tag` prop to `CalloutBadge` (e.g. `calloutBadge.callout-secondary`); the bare `calloutBadge` uses the component's default tag (`callout`). A custom tag also names the component, so `calloutBadge.<tag>` theme selectors can target it.
- `variantSelections` — one `VariantSelection` per variant selection.
- `variantSelection.<field>` — a single `VariantSelection` for the matching selection field (e.g. `variantSelection.color`). The field also matches its component-name form (`color_family` → `color-family`), so `variantSelection.<field>` theme selectors can target it. A bare `variantSelection` module is not supported.
- `productDetail.<path>` — a single product field via the `ProductDetail` atom, resolved from an explicit dot-path (e.g. `productDetail.mappings.core.name` or `productDetail.attributes.brand`). `productDetail.mappings.core.name` is the title; `productDetail.mappings.core.description` renders as rich HTML. Any product path is valid. The path's final segment names the component, so `productDetail.<name>` theme selectors can target it (e.g. `productDetail.description`).
- `button.add-to-cart` / `button.more-info` — the action `Button`s (More info only renders when the product has a `url`). Clicking More info tracks a clickThrough for the product (`controller.track.product.clickThrough`, delegated with `quickView: true`) before navigating to the product page.
- `productDetailTable` — the `ProductDetailTable` molecule (opt-in via `displayFields`).
- `recommendation.<profile>` — a recommendation carousel for the named profile. `<profile>` becomes the `RecommendationController` **tag**; the controller is seeded with the currently-viewed product (`mappings.core.parentId || product.id`) and rendered through the theme's `Recommendation` component (configurable via the `recommendation` prop). The profile also names the component, so `recommendation.<profile>` theme selectors can target it. Renders `null` until the controller's store is loaded.
- `_` — a flexible separator.

Columns `c1`–`c4` recurse into their own `column1`–`column4` layouts.

- **`ProductQuickviewModal` default** — a two-column row: `layout: [['c1', 'c2']]` with `column1 = { layout: ['slideshow'], width: '45%' }` and `column2 = { layout: [['productDetail.mappings.core.name'],['calloutBadge'],['variantSelections'],['button.add-to-cart','button.more-info'],['productDetail.mappings.core.description'],['productDetailTable'],['recommendation.quickview']], width: 'auto' }`. Columns stack into a single column below the `768px` breakpoint; configured column widths apply from `768px` up. (`ProductQuickviewModal` sets no layout of its own, so it inherits these `QuickviewLayout` defaults.)
- **`ProductQuickviewSlideout` default** — a single stacked column: `layout: [['slideshow'], ['productDetail.mappings.core.name'], ['calloutBadge'], ['variantSelections'], ['button.add-to-cart', 'button.more-info'], ['productDetail.mappings.core.description'], ['productDetailTable']]`.

Each module returns `null` when it has nothing to show (no description, no displayed attributes, no variant selections, no slideshow), so empty columns and rows collapse.

## Props

| prop | type | required | description |
|---|---|:---:|---|
| `controller` | `QuickviewController` | ✔️ | The component subscribes to `controller.store`. Renders `null` (with a console warning) when missing or not of type `'quickview'`. |
| `onReset` | `() => void` | | Called by the close button. The container passes `store.close()`; falls back to `store.close()` when rendered standalone. |
| `layout` | `ModuleNamesWithColumns[]` | | The module/column arrangement (see Layout). |
| `disabledOverlayBadges` | `boolean` | | Defaults to `false`. When `true`, the `slideshow` module renders without the `OverlayBadge` wrapper. |
| `column1`–`column4` | `Column` | | `{ layout, width, alignContent }` configs for the `c1`–`c4` columns. |
| `recommendation` | `{ component?, resultComponent?, config? }` | | Config for every `recommendation.<profile>` module (see Recommendations). |
| `customComponent` | `string` | | Name of a custom template component override, resolved via the Snap templates library. |
| `className`, `internalClassName`, `disableStyles`, `theme`, `treePath` | inherited | | Standard `ComponentProps`. |

`ProductQuickviewModal` / `ProductQuickviewSlideout` accept the same `layout` / `column1`–`column4` props and pass them through to `QuickviewLayout`. `ProductQuickviewSlideout` additionally accepts `slideDirection`, `width`, and `overlayColor`.

## States

`QuickviewLayout` has three render branches, picked in priority order:

1. **Error** — when `store.error` is set. Renders a red `role="alert"` div with the error message.
2. **Loading** — when `store.loading` is true (while the controller awaits `/v1/products`). Renders a "Loading…" placeholder so the panel appears instantly on click.
3. **Product** — when `store.product` is set. Renders the configured module layout.

All three branches include a close button (top-right `close-thin` icon `Button`, `aria-label` via `lang.closeButton`, default `"Close quickview"`).

## Fullscreen gallery (lightbox)

Clicking the image (or any slide) opens a fullscreen `Gallery` overlay, portaled to `document.body` so it sits above the container. It provides zoom (`+`/`−`, drag to pan), prev/next navigation with a `n / total` counter, touch swipe, and keyboard control (`Esc` closes, `←`/`→` navigate, `+`/`−` zoom). The gallery shows the same image set as the slideshow region (the multi-image list when present, otherwise the single core image). `Gallery` is also exported for standalone use.

## Images

By default the product branch renders a single image from `mappings.core.imageUrl || thumbnailImageUrl`.

`config.imagesField` (read from `store.quickviewConfig`) controls which field(s) hold the **list** of image URLs. It accepts a single field name or an array of candidate names tried in order; each is looked up on `mappings.core` first, then `attributes`, and the first that resolves to **more than one** image renders in a 1-per-view `Slideshow`. When omitted it defaults to trying `'images'` then `'ss_images'`. If none qualifies, it falls back to the single core image (rendered through the same `Slideshow` with navigation and pagination hidden).

Image resolution is variant-aware: when a variant is active its own image list is used; if the variant has no multi-image field only its single `imageUrl` is shown (no slideshow nav) rather than the parent's array. When the active variant's image appears in the slideshow, the `Slideshow`'s `startIndex` navigates to that slide in place (no remount).

## Variant selection

When `product.variants.selections` is non-empty the `variantSelections` module renders one `VariantSelection` molecule per selection, while `variantSelection.<field>` renders only the matching selection. Each renders as **swatches** or a **dropdown** based on the field's `optionConfig.type`. Because the layout reads `product.display.mappings.core` / `product.display.attributes` (which compose `mask` over base data), the displayed name, image, and attributes refresh automatically when a variant is selected.

## `displayFields` and labels

`store.quickviewConfig.displayFields` is an optional `string[]` selecting which attributes appear in the `productDetailTable` module (order preserved). Attributes are **opt-in**: with no `displayFields`, no table renders. `QuickviewLayout` resolves labels from `controller.store.meta?.data?.facets[field]?.label` (falling back to the raw field name) and passes the field/label pairs to `ProductDetailTable` as `details`. Array values render comma-separated; objects fall back to `JSON.stringify`.

## Recommendations

Place a `recommendation.<profile>` module anywhere in the `layout` (or a column layout) to render a recommendation carousel below/around the product. The `<profile>` segment is the `RecommendationController` **tag** (e.g. `recommendation.similar`, `recommendation.crosssell`).

Because `QuickviewLayout` cannot call hooks inside its recursive module renderer, it scans the resolved layout for every `recommendation.*` profile up front and resolves one `RecommendationController` (id `quickview-<profile>`) and the render/result components per profile. Each controller is seeded with the active product (`mappings.core.parentId || product.id`) and re-searches whenever the viewed product changes.

The optional `recommendation` prop configures every recommendation module (the profile/tag still comes from the module name):

| field | type | default | description |
|---|---|---|---|
| `component` | library `recommendation` component name | `Recommendation` | The carousel/grid component resolved from the theme library. |
| `resultComponent` | library `result` component name | `Result` | The per-result component passed to the recommendation component. |
| `config` | `Partial<RecommendationControllerConfig>` | ➖ | Extra controller config (e.g. `limit`, `globals`). `tag` is always overridden by the module name; `id` defaults to `quickview-<profile>`. |

Recommendations require a Snap templates context (`useSnap().templates`); rendered standalone without one, the module collapses to nothing.

## Tracking

Both containers wrap the layout in the exported `QuickviewTracker` component whenever a product is displayed. It uses the `useTracking` hook (`track: { click: false }`) to observe the quickview content and calls `controller.track.product.impression(product)` once the content has actually been viewed (the standard impression thresholds apply: ≥70% visible for at least 1s). The `QuickviewController` delegates the call to the controller that opened the quickview with `{ quickView: true }`, and quickview impressions dedup separately from grid impressions there — one of each kind per product per response.

The tracker is keyed by `responseId`-`product.id`, so displaying a different product (or the same product from a new search response) remounts it and the new product view is observed and tracked. Because the impression fires from the containers, a standalone `QuickviewLayout` does not track impressions on its own.

Generic click tracking is disabled inside the quickview (`track: { click: false }` — clicks on the content do not send click/clickThrough events). The only click-type event is the **More info** button, which tracks a clickThrough for the product before navigating to the product page. Add-to-cart tracking runs through `controller.addToCart`, which delegates to the originating controller's cart integration (also flagged `quickView: true`).

## Styling & containers

`ProductQuickviewModal` positions the `Modal` content `fixed` and centered (`translate(-50%, -50%)`, with `!important` so theme overrides cannot re-anchor it to the source `Result` tile). The z-index hierarchy is: autocomplete (`10002`) < overlay (`10005`) < content (`10006`) < dropdown portals (`10007`), so the quickview paints above an open autocomplete while variant `<select>` lists still paint above it. The container wrapper is taken out of flow (`position: absolute`, zero size) so mounting inside a CSS grid doesn't shift layout, and scroll lock is disabled so opening doesn't reflow the page.

`ProductQuickviewSlideout` keeps the same z-index ladder and syncs an overlay dismiss back to `store.close()` via the `Slideout`'s `onToggle` callback, so `store.isOpen` stays the single source of truth.

## Accessibility

- The content is a dialog (`role="dialog"`, `aria-modal="true"`, `aria-label` via `lang.quickview`) with a `useA11y` focus trap (same pattern as `AutocompleteModal`/`AutocompleteSlideout`): `Tab`/`Shift+Tab` cycle within the content, and `Escape` fires the trap's callback.
- Error branch has `role="alert"`.
- Close button is a `Button` (keyboard focusable, `Space`/`Enter` activation via `useA11y`) with `aria-label="Close quickview"` via `lang.closeButton`.
- Clicking the overlay invokes `store.close()`.
- `Escape` closes the quickview — unless the fullscreen gallery is open, in which case it closes the gallery first. Handled by the `useA11y` escape callback when focus is inside the content, with a window `keydown` fallback when it is not.
- Focus management lives in the container (always mounted): on open, focus moves to the close button; on close, focus is restored to the previously focused element.

## Lang

`QuickviewLayout` (and both containers, which forward the prop) accepts a `lang` prop following the standard `defaultLang` → `deepmerge` → `useLang` pattern:

- `quickview` — attributes for the dialog content (default `aria-label="Quickview"`).
- `closeButton` — attributes for the close button (default `aria-label="Close quickview"`).
- `addToCartButton` — value for the add-to-cart button (default `Add to Cart`).
- `moreInfoButton` — value for the more-info button (default `More info`).
- `loadingText` — value for the loading indicator (default `Loading…`).

## Notes

- Rendered inside a `CacheProvider` so emotion styles are scoped correctly when portaled.
- Container clicks call `stopPropagation` so they don't reach the `AutocompleteController`'s document click handler (which would close an open autocomplete behind the quickview).
- The layout does not fetch data; `QuickviewController` loads product data (`/v1/products`) and the layout renders whatever the store provides.
