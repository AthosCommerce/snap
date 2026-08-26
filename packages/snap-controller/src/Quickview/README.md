# QuickviewManager

The `QuickviewManager` owns the product quickview modal state. It is **not a controller** — quickview has no search lifecycle, no url state and no tracking identity of its own. The product it displays is a clone of a result that belongs to another controller's response, so tracking and add-to-cart are delegated back to that controller (flagged `quickView: true`) rather than reimplemented here. It fetches product data from the API `products` endpoint (`/v1/products`) on demand and populates a `QuickviewStore` that a single quickview component (`QuickviewModal` / `QuickviewSlideout`) renders.

One manager is created per Snap instance, passed to every controller as the `quickviewManager` service, and exposed on each controller as `controller.quickviewManager`.

It lives in `snap-controller` rather than `snap-preact` because it has no rendering dependency — the quickview components consume the manager, not the reverse — which is what lets it be injected into controllers as an ordinary service instead of being looked up off the window.

## Services

| service | description | required |
|---|---|:---:|
| store | a `QuickviewStore`; constructed from the config when omitted | ➖ |

The manager has no client or logger of its own: every `show()` call runs on behalf of a source controller and uses that controller's `client`, `log`, `eventManager` and `store.meta`.

## QuickviewManagerConfig

The config is optional and defaults to `{ id: 'quickview' }`.

| option | description | default value |
|---|---|:---:|
| id | unique identifier for the manager (namespaces the logger, passed to the store) | `quickview` |
| settings.displayFields | array of product attribute field names — or a function `(result) => string[]` receiving the modal's product and returning the field names — that should appear in the modal's attribute table (preserves order). When omitted, no attributes are shown. Field labels are looked up from `meta.facets[field].label` with a fallback to the raw field name. | ➖ |
| settings.clone | when enabled (default), the modal works with a deep clone of the source result so that interactions inside the modal (such as variant selection) do not affect the result data on the page. Variant selections already made on the source result are copied onto the clone when the modal opens — a point-in-time snapshot, not a live link; after open, the two products are fully independent in both directions. When disabled, the source result is used by reference — variant selection in the modal then mutates the source result tile, and the tile's existing selection is preserved across the `/v1/products` variant rebuild (which would otherwise reset it to the autoSelect default). | true |
| settings.fetchProductData | when enabled (default), the controller fetches full product data from the `/v1/products` endpoint. When disabled, the endpoint is not called and the modal renders whatever variants/attributes the source result already carries. | true |
| settings.imagesField | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate that resolves to more than one image is rendered in a 1-per-view carousel instead of the single core image. | `images`, `ss_images` |

## How quickviews are triggered

The manager is normally not invoked directly. Every controller inherits a `quickview` method that forwards to the manager it was given as the `quickviewManager` service:

```jsx
// any Search / Autocomplete / Recommendation controller
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

`AbstractController.quickview()` is a thin forwarder — it derives nothing and simply calls `show()` with itself as the source controller. All derivation (config precedence, meta) happens in `show()`. It warns and no-ops in two cases: the controller was created without a `quickviewManager` service, or the controller is a `FinderController`, which has no `addToCart` or `track.product.*` for the manager to delegate back to.

Snap wires this up automatically — it creates the manager from `config.quickview` before any controller and passes it into each one. Constructing controllers by hand means passing it yourself:

```js
import { QuickviewManager, SearchController } from '@athoscommerce/snap-controller';

const quickviewManager = new QuickviewManager({}, { id: 'quickview' });
const controller = new SearchController(config, { client, store, urlManager, eventManager, profiler, logger, tracker, quickviewManager });

await controller.quickview(result); // or: quickview.show(result, { controller })
```

## show

### `show(result, options)`

Opens the quickview for the given result and populates the store.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. It must be a product and carry `mappings.core.parentId` — the id used for the `/v1/products` request; otherwise a warning is logged and nothing happens. |
| `options.controller` | `SearchController \| AutocompleteController \| RecommendationController` (required) | The controller that opened the quickview. The manager runs on its services and uses it for delegated actions (`addToCart`, tracking) and to fire the `quickview` middleware. |
| `options.productsData` | `ProductsResponseModel` | If passed, the manager skips the `/v1/products` call and uses this data as-is. Useful for tests, prefetching, or middleware-driven flows. |
| `options.config` | `QuickviewConfig` | Per-call override; wins over both the source controller's `settings.quickview` and the manager's `settings`. |

The meta store is not a parameter — it is always read from `options.controller.store.meta` and forwarded into the cloned `Product` for badge processing. Facet-label consumers read it from the source controller directly (`quickviewManager.sourceController.store.meta`); the quickview store does not retain it.

Config precedence, resolved inside `show()`:

```
manager config.settings  <  source controller config.settings.quickview  <  options.config
```

## Events

### `quickview`

Fired on the **source controller's** event manager (not the manager's) after product data resolves and the store is updated — the store's built `Product` is passed as `product`, so middleware can inspect or mutate what is about to render. Controllers own plugin and middleware attachment, so middleware is registered the same way as any other controller event — which also scopes interception per controller:

```js
searchController.on('quickview', async ({ controller, product }, next) => {
	// inspect or mutate the quickview product
	await next();
});
```

Throwing `new Error('cancelled')` from a listener resets the store and aborts the open.

| property | type | description |
|---|---|---|
| `controller` | `SearchController \| AutocompleteController \| RecommendationController` | The controller that opened the quickview |
| `product` | `Product` | The store's built quickview product (mutable) |

## Superseded and dismissed quickviews

Neither of `show()`'s suspension points is abortable — the products request takes no `AbortSignal` and awaited middleware cannot be cancelled. Each continuation therefore re-checks before writing to the shared store, and abandons when either:

- a newer `show()` call has superseded this one (monotonic token), or
- the shopper dismissed the modal while the call was in flight (`!store.isOpen`) — without this a late fetch would reopen a closed modal.
