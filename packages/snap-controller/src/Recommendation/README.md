# RecommendationController

The `RecommendationController` is used when making queries to the API `recommend` endpoint. It can also bind events to DOM elements to handle user input of queries.

## RecommendationControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | ➖ | ✔️ |
| tag | unique name of the recommendations profile | ➖ | ✔️ |
| realtime | update recommendations if cart contents change (requires [cart attribute tracking](https://github.com/athoscommerce/snap/tree/main/docs/SNAP_TRACKING.md#cart-attribute-tracking)) | ➖ |   |
| batched | batch multiple recommendations into a single network request | true |   |
| limit | maximum number of results to display, can also be set globally via globals | 20 |  |
| globals | keys defined here will be passed to the API request (can overwrite global config)| ➖ |   |
| settings.searchOnPageShow | causes a search to be conducted when returning using browser back/forward cache | true |   | 
| settings.variants.field | used to set the field in which to grab the variant data from | ➖ |   | 
| settings.variants.showDisabledSelectionValues | determines if completely out of stock (disabled) options should appear in variant selections | false |   | 
| settings.variants.realtime.enabled | enable real time variant updates | ➖ |   | 
| settings.variants.realtime.filters | specify which filters to use to determine which results are updated | ➖ |   | 
| settings.variants.options | object keyed by individual option field values for configuration of any option settings  | ➖ |   | 
| settings.quickview.displayFields | array of product attribute field names that should appear in the modal's attribute table (preserves order). When omitted, no attributes are shown. Field labels are looked up from `meta.facets[field].label` with a fallback to the raw field name. | ➖ |   |
| settings.quickview.clone | when `false`, the source result is used by reference inside the modal — variant selection in the modal then mutates the source result tile. When `true` (default), the source is deep-cloned into an independent Product graph. | true |   |
| settings.quickview.fetchProductData | when `false`, the `/v1/products` endpoint is NOT called and the modal renders whatever variants/attributes the source result already carries. When `true` (default), the controller fetches full product data (including variants) while the modal displays in a loading state. | true |   |
| settings.quickview.imagesField | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate that resolves to more than one image is rendered in a 1-per-view carousel instead of the single core image. When omitted, defaults to trying `images` then `ss_images`. Each field is expected to be an array of image URLs (real array or MobX observable array). | `images`, `ss_images` |   |


## Initialize
Invoking the `init` method is required to subscribe to changes that occur in the UrlManager. This is typically done automatically prior to calling the first `search`.

```js
recommendationController.init();
```

## Search
This will invoke a search request to Athos's search API and populate the store with the response.

```js
recommendationController.search();
```

## AddToCart
This will invoke an addToCart event (see below). Takes an array of Products as a parameter, and an optional `TrackEventOverrides` object (`{ quickView?: boolean }`) as a second parameter — passed as `{ quickView: true }` by the `QuickviewManager` when delegating, so the resulting beacon event is flagged as having occurred within the quickview modal.

```js
recommendationController.addToCart([recommendationController.store.results[0]]);
```

## Quickview

The Recommendation controller exposes a `quickview` method for opening the product quickview modal. The modal state does not live on `RecommendationController` — it is owned by the `QuickviewManager` (see `snap-controller`), exposed on the controller as `controller.quickviewManager`, whose `store` is a `QuickviewStore`. A single quickview component is rendered once: the Snap framework injects it into `<body>` — there is no per-result modal.

### `quickview(result, productsData?, config?)`

Requests the product quickview modal for the given result. This method is a thin forwarder: it calls `show(result, { productsData, config, controller: this })` on the manager it was given as the `quickview` service, and warns if it has none. The manager derives everything else from the controller passed to it — the product's parent (`result.mappings.core.parentId`), the effective config, and the meta store — then opens the modal, fetches `/v1/products`, fires the `quickview` middleware on **this controller's** event manager, and updates its own store.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. It must carry `mappings.core.parentId` (the id used for the `/v1/products` request) — results without one are ignored with a warning. |
| `productsData` | `ProductsResponseModel` (optional) | If passed, the `QuickviewManager` skips its `/v1/products` call and uses this data as-is. |
| `config` | `QuickviewConfig` (optional) | Per-call override. Precedence: manager `settings.quickview` < this controller's `settings.quickview` < this argument. |

```tsx
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

### Closing the modal

Closing is handled by the manager's store: call `controller.quickviewManager.store.close()` to hide the modal while retaining `product` (note that calling `quickview()` again will re-enter the loading state and re-fetch), or `.store.reset()` to also clear the product reference.

## Events
### init
- Called with `eventData` = { controller }
- Done once automatically before the first search - or manually invoked by calling `init`

### error
- Called with `eventData` = { controller, error }
- Invoked when an error has been caught within the controller

### beforeSearch
- Called with `eventData` = { controller, request }
- Always invoked before an API request is made 
- Sets `controller.store.loading = true`

### afterSearch
- Called with `eventData` = { controller, request, response }
- Always invoked after an API request is made 
- Sets `controller.store.loading = false`
- Cancels search if input doesn't match current urlManager input state

### afterStore
- Called with `eventData` = { controller, request, response }
- Always invoked after data has been stored in mobx store

### track.product.clickThrough
- Called with `eventData` = { controller, event, result, trackEvent } 
- Always invoked after `track.product.clickThrough()` or `track.product.click()` method has been invoked
- Allows for adding custom product click events (ie. Google Analytics)

### track.product.impression
- Called with `eventData` = { controller, result, trackEvent } 
- Always invoked after `track.product.impression()` method has been invoked

### track.product.addToCart
- Called with `eventData` = { controller, product, trackEvent } 
- Always invoked after `track.product.addToCart()` method has been invoked

For the `track.product.*` events above, `trackEvent` includes `quickView: true` when the tracked interaction was delegated from the `QuickviewManager` (i.e. it occurred within the quickview modal).

Impressions are deduped per product per response: `track.product.impression` sends at most one regular impression and one quickview-delegated impression for each result of a response. The two kinds dedup separately, so opening the quickview still sends an impression for a product whose grid impression was already tracked (and vice versa).

### addToCart
- Called with `eventData` = { controller, products } 
- Always invoked after `controller.addToCart()` method has been invoked

### quickview
- This middleware fires on `RecommendationController`'s own event manager — the controller that opened the quickview — so attaching it here scopes interception to recommendation-originated quickviews
- Called with `eventData` = `ProductQuickviewObj` = { controller, result, productsData?, config }
- Fires after the optional `/v1/products` fetch resolves and before the manager's `store.update` runs
- Middleware can mutate `result`, `productsData`, or `config` on the payload — the `QuickviewManager` reads them back after the await and passes them to `store.update`
- Throw `new Error('cancelled')` to short-circuit: `store.reset()` is called and no modal renders
- Any other thrown error surfaces as `store.error` and the modal renders the error branch

```ts
controller.on('quickview', async (eventObj, next) => {
    if (someCondition(eventObj.result)) {
        eventObj.config.displayFields = ['custom', 'fields', 'here'];
    }
    await next();
});
```

## Variants
For variant integration details, see [Variant Integration Docs](https://github.com/athoscommerce/snap/blob/main/docs/INTEGRATION_VARIANTS.md)
