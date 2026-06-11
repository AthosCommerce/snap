# QuickviewStore
The quickview store holds the state for the product quickview modal. It extends the AbstractStore and is the `store` of the dedicated `QuickviewController` — it is reached at `quickviewController.store`.

The store is typically driven by the `QuickviewController`, which opens it in a loading state, fetches additional product data from `/v1/products`, and then calls `update` to populate the modal. Other controllers (`SearchController`, `AutocompleteController`, `RecommendationController`) trigger this flow via their `quickview({ result })` method, which fires the global `controller/quickview` event.

## Constructor
The store is constructed with a `QuickviewStoreConfig` (the standard `StoreConfig` plus an optional `settings.quickview` of type `QuickviewConfig`). The config is stored on the inherited `config` property.

## `product` property
The `Product` being previewed in the modal. Observable by reference (`observable.ref`).

During the loading phase this is set to the source result that triggered the quickview (so consumers can scope the modal by `product.id` while only a spinner renders). Once `update` runs, it is replaced:

- By default (`config.clone` not set or `true`), `product` is a deep-cloned independent `Product` instance, so variant selection in the modal cannot leak back to the source result tile. The source product's `Badges` instance is carried onto the clone (badges are display-only and not mutated by variant selection).
- With `config.clone = false`, `product` is the source result by reference — variant interactions in the modal will mutate the source result tile.

## `isOpen` property
Boolean stating whether the modal should be rendered. Set to `true` by `update`, `setLoading(true, ...)`, and `setError(error)`; set to `false` by `close` and `reset`.

## `loading` property
Inherited from the AbstractStore. `true` while the `QuickviewController` is awaiting `/v1/products`; the modal renders a loading branch in this state. Cleared by `update`, `setError`, and `reset`.

## `quickviewConfig` property
The per-quickview `QuickviewConfig` for the currently-open modal, set on each `update()` and read by the modal (e.g. `displayFields`, `imagesField`). This is the effective config (controller-level `settings.quickview` defaults merged with the per-call override). It is distinct from the store-level `config` property (the `QuickviewStoreConfig`).

`QuickviewConfig` options:

| option | type | default | description |
|---|---|---|---|
| `displayFields` | `string[]` | — | Fields to display in the modal. |
| `clone` | `boolean` | `true` | When `false`, the source result is used directly as the modal's product (no cloning); variant selection in the modal will then mutate the source result tile. |
| `fetchProductData` | `boolean` | `true` | When `false`, the controller skips the `/v1/products` fetch and the modal renders whatever data is already on the source result. |
| `imagesField` | `string \| string[]` | `['images', 'ss_images']` | Field name(s) (looked up on the product's `mappings.core`, then `attributes`) holding a list of image URLs. Candidates are tried in order; the first that resolves to more than one image is rendered in a carousel instead of the single core image. |

## `error` property
A `QuickviewError` (`{ message: string, cause?: unknown }`) or `undefined`. When set, the modal renders an error branch (with `role="alert"`) instead of the product. Cleared by `update`, `setLoading(true, ...)`, `setError(undefined)`, and `reset`.

## `meta` property
A `MetaStore` reference forwarded from the originating controller's store, so badge and facet-label consumers (e.g. `OverlayBadge`, attribute facet labels) can read `store.meta` off the quickview singleton.

## `update` method
`update({ result, productsData?, config?, storeConfig?, meta? })`

Builds (or reuses) the `Product` instance, applies variants from `productsData`, and opens the modal. Returns early if no `result` is provided.

| argument | description |
|---|---|
| `result` | The source `Product` to preview. Required. |
| `productsData` | Data from `/v1/products`: `{ mappings?: { core? }, variants?: { data?, optionConfig? } }`. When it contains `variants.data` (and the product has a `Variants` instance), the variants are updated with `autoSelect: true` so a default variant is picked as soon as the data arrives; `variants.optionConfig` is applied first so each selection gets its configured `type` (`dropdown`/`swatches`) and `count`. |
| `config` | Per-quickview `QuickviewConfig` (see above). Stored on `quickviewConfig`. Honors `config.clone` (default `true`). |
| `storeConfig` | Optional store-config passthrough, used when cloning so the clone's variants pick up the existing `settings.variants` configuration. |
| `meta` | Optional raw meta data passthrough for badges processing on the cloned product. |

After running, `product` and `quickviewConfig` are set, `isOpen` is `true`, and `loading` and `error` are cleared.

## `setLoading` method
`setLoading(loading, product?)`

Sets the `loading` state. When `loading` is `true`, also opens the modal (`isOpen = true`), stores the given source `product`, and clears any prior `error` so a retry starts fresh. `setLoading(false)` only flips `loading` off — it does not close the modal.

## `setError` method
`setError(error | undefined)`

Surfaces a fatal error from the controller (e.g. an exception inside `update()`). Flips `loading` off so the spinner doesn't remain stuck, and opens the modal (when `error` is defined) so the error branch renders. Passing `undefined` clears the error.

## `close` method
Hides the modal (`isOpen = false`) but retains `product` in the store.

## `reset` method
Returns the store to its initial state: clears `product`, `quickviewConfig`, and `error`, and sets `isOpen` and `loading` to `false`.
