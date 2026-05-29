# ProductQuickview

The `ProductQuickview` molecule renders the active quickview product (`controller.store.quickview.product`) inside a `Modal`. It is a MobX `observer` that subscribes to `controller.store.quickview` and dismisses the modal by calling `controller.closeQuickView()`.

It is the rendering half of the QuickView feature. The state half lives on the controller: see `SearchController`, `AutocompleteController`, and `RecommendationController` for `setQuickView` / `closeQuickView`.

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

When `result` is passed, the modal only mounts when its id matches the active quickview's product id (or the `triggeringResultId` during loading/error). This prevents N modal copies from rendering when N tiles each include a `ProductQuickview`.

## Props

| prop | type | required | description |
|---|---|:---:|---|
| `controller` | `SearchController \| AutocompleteController \| RecommendationController` | ✔️ | The component subscribes to `controller.store.quickview` and invokes `controller.closeQuickView()` on dismiss. |
| `result` | `Product` |   | Scopes the modal — only mounts when this result's id matches the active quickview's product id (or `triggeringResultId` during loading/error). Omit to mount on every open. |
| `customComponent` | `string` |   | Name of a custom template component to use as an override. Resolved via the Snap templates library. |
| `className`, `internalClassName`, `disableStyles`, `theme`, `treePath` | inherited | | Standard `ComponentProps` for class/style/theme overrides. |

## States

The molecule has three render branches, picked in priority order:

1. **Error** — when `store.quickview.error` is set. Renders a red `role="alert"` div with the error message.
2. **Loading** — when `store.quickview.loading` is true (typically while `setQuickView` is awaiting `/v1/products`). Renders a "Loading…" placeholder so the modal appears instantly on click.
3. **Product** — when `store.quickview.product` is set. Renders the product's name (from `mappings.core.name`), image (`mappings.core.imageUrl || thumbnailImageUrl`), variant selectors, and an attributes table.

All three branches include a close button (top-right `×` with `aria-label="Close quickview"`).

## Variant selection

When `product.variants.selections` is non-empty, the modal renders one `VariantSelection` molecule per selection. Clicking a swatch/option calls `selection.select(...)` under the hood, which updates `product.mask`. Because the molecule reads `product.display.mappings.core` and `product.display.attributes` (which compose `mask` over the base data), the displayed name, image, and attributes refresh automatically.

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
- Clicking the overlay also invokes `controller.closeQuickView()`.

## Notes

- The modal is rendered inside a `CacheProvider` so emotion styles are scoped correctly when the component is portaled.
- When a `result` prop is provided, the modal will refuse to open even when the store is open if the active quickview's product id (or `triggeringResultId`) does not match `result.id`. This is the mechanism that lets every `Result` tile include its own `<ProductQuickview />` without producing duplicate modals.
- The molecule does not handle add-to-cart, image carousels, or other interactive controls; those are out of scope for v1 of the feature.
