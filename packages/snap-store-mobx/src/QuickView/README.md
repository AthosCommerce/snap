# QuickviewStore
The quickview store holds the state for the product quickview modal. It extends the AbstractStore and is the `store` of the shared [QuickviewManager](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Quickview) — it is reached via any controller at `controller.quickviewManager.store`.

The store is typically driven by the `QuickviewManager`, which opens it in a loading state, fetches additional product data from `/v1/products`, and then calls `update` to populate the modal. Controllers (`SearchController`, `AutocompleteController`, `RecommendationController`) trigger this flow via their `quickview(result)` method, which forwards to the manager.

## Constructor
The store is constructed with a `QuickviewStoreConfig` (the standard `StoreConfig` plus an optional `settings.quickview` of type `QuickviewConfig`). The config is stored on the inherited `config` property.

## `product` property
The `Product` being previewed in the modal. Observable by reference (`observable.ref`).

While the manager is loading, `product` is `undefined` — each `show()` wipes the previous quickview's product before fetching, so nothing can act on stale data — and the modal renders a loading branch in that state. Once `update` runs, it is set:

- By default (`config.clone` not set or `true`), `product` is a deep-cloned independent `Product` instance, so variant selection in the modal cannot leak back to the source result tile. The source product's `Badges` instance is carried onto the clone (badges are display-only and not mutated by variant selection).
- With `config.clone = false`, `product` is the source result by reference — variant interactions in the modal will mutate the source result tile.

## `isOpen` property
Boolean stating whether the modal should be rendered. Driven by the `QuickviewManager`: set to `true` when `show()` starts (via the manager's `open()`) and to `false` by the manager's `close()`. Also set to `false` by `reset`.

## `loading` property
Inherited from the AbstractStore. Driven by the `QuickviewManager`: `true` while `show()` is fetching `/v1/products` and firing the `quickview` middleware; `false` once the flow completes or fails. Also cleared by `reset`.

## `resolvedConfig` property
The per-quickview `QuickviewConfig` for the currently-open modal, set on each `update()` (and cleared at the start of each `show()`, like `product`) and read by the modal (e.g. `displayFields`, `imagesField`). This is the effective config (controller-level `settings.quickview` defaults merged with the per-call override). It is distinct from the store-level `config` property (the `QuickviewStoreConfig`).

`QuickviewConfig` options:

| option | type | default | description |
|---|---|---|---|
| `displayFields` | `string[] \| (result: Product) => string[]` | — | Fields to display in the modal. Can be a function that receives the modal's product and returns the field names. |
| `clone` | `boolean` | `true` | When enabled, the source result is deep-cloned into an independent product for the modal. When disabled, the source result is used directly as the modal's product (no cloning); variant selection in the modal will then mutate the source result tile. |
| `fetchProductData` | `boolean` | `true` | When enabled, the controller fetches product data via `/v1/products`. When disabled, the fetch is skipped and the modal renders whatever data is already on the source result. |
| `imagesField` | `string \| string[]` | `['images', 'ss_images']` | Field name(s) (looked up on the product's `mappings.core`, then `attributes`) holding a list of image URLs. Candidates are tried in order; the first that resolves to more than one image is rendered in a carousel instead of the single core image. |

## `error` property
A `QuickviewError` (`{ message: string, cause?: unknown }`) or `undefined`. Set by the `QuickviewManager` when the `quickview` middleware or the store update fails. When set, the modal renders an error branch (with `role="alert"`) instead of the product. A failed `/v1/products` fetch does not set it — the modal silently renders from the data already on the source result. Cleared by `update`, by the start of each `show()`, and by `reset`.

## `update` method
`update({ result, productsData?, config?, storeConfig?, meta? })`

Builds (or reuses) the `Product` instance and applies variants from `productsData`. Returns early if no `result` is provided.

| argument | description |
|---|---|
| `result` | The source `Product` to preview. Required. Any variant selections already made on it (e.g. swatches clicked on the result tile) are captured as `update()` starts and re-applied after the variants are (re)built, overriding the `autoSelect` defaults. With cloning (default) this is a point-in-time snapshot onto an independent product — no live link in either direction after open. With `clone: false` the modal and tile share the product, so this instead preserves the tile's selection across the `productsData` rebuild (which would otherwise reset it); modal interactions then mutate the tile directly. |
| `productsData` | Data from `/v1/products`: `{ mappings?: { core? }, variants?: { data?, optionConfig? } }`. When it contains `variants.data` (and the product has a `Variants` instance), the variants are updated with `autoSelect: true` so a default variant is picked as soon as the data arrives; `variants.optionConfig` is applied first so each selection gets its configured `type` (`dropdown`/`swatches`) and `count`. |
| `config` | Per-quickview `QuickviewConfig` (see above). Stored on `resolvedConfig`. Honors `config.clone` (default `true`). |
| `storeConfig` | Optional store-config passthrough, used when cloning so the clone's variants pick up the existing `settings.variants` configuration. |
| `meta` | Optional raw meta data passthrough for badges processing on the cloned product. The store does not retain it — badge and facet-label consumers read meta off the originating controller's store (`quickviewManager.sourceController.store.meta`). |

After running, `product` and `resolvedConfig` are set and `error` is cleared. `update` does not touch `isOpen` or `loading` — those are driven by the `QuickviewManager` (see above).

## Closing the modal
The store has no `close` method — closing lives on the manager: `controller.quickviewManager.close()` hides the modal (`isOpen = false`) but retains `product` in the store.

## `reset` method
Returns the store to its initial state: clears `product`, `resolvedConfig`, and `error`, and sets `isOpen` and `loading` to `false`.
