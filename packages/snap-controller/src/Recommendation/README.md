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
| settings.quickview.displayFields | array of fields `{ field, label?, type? }` (`DisplayFieldConfig`) — or a function `(result) => DisplayFieldConfig[]` receiving the modal's product and returning them — that should appear in the modal's attribute table (preserves order). When omitted, no attributes are shown. `label` overrides the default label lookup (`meta.facets[field].label`, falling back to the raw field name); `type` selects how the value renders (`text` default, `price`, `rating`, `image`, `html`). | ➖ |   |
| settings.quickview.clone | when enabled (default), the modal works with a deep clone of the source result so that interactions inside the modal (such as variant selection) do not affect the result data on the page. When disabled, the source result is used by reference — variant selection in the modal then mutates the source result tile. | true |   |
| settings.quickview.fetchProductData | when enabled (default), the controller fetches full product data (including variants) from the `/v1/products` endpoint while the modal displays in a loading state. When disabled, the endpoint is not called and the modal renders whatever variants/attributes the source result already carries. | true |   |
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

### `quickview(result, config?, productsData?)`

Requests the product quickview modal for the given result. This method is a thin forwarder: it calls `show(result, { config, productsData, controller: this })` on the manager it was given as the `quickviewManager` service, and warns if it has none. The manager derives everything else from the controller passed to it — the product's parent (`result.mappings.core.parentId`), the effective config, and the meta store — then opens the modal, fetches `/v1/products`, fires the `quickview` middleware on **this controller's** event manager, and updates its own store.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. It must carry `mappings.core.parentId` (the id used for the `/v1/products` request) — results without one are ignored with a warning. |
| `config` | `QuickviewConfig` (optional) | Per-call override. Precedence: manager `settings.quickview` < this controller's `settings.quickview` < this argument. |
| `productsData` | `ProductsResponseModel` (optional) | If passed, the `QuickviewManager` skips its `/v1/products` call and uses this data as-is. |

```tsx
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

### Closing the modal

Call the QuickviewManager close method `controller.quickviewManager.close()` to hide the modal while retaining `product` (note that calling `quickview()` again will re-enter the loading state and re-fetch), or `.store.reset()` to also clear the product reference.

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
- Called with `eventData` = { controller, product }
- Fires after the manager's `store.update` has built the modal's product (post `/v1/products` fetch) and before the loading state clears
- Middleware can inspect or mutate `product` — the store's built quickview product — before it is displayed
- Throw `new Error('cancelled')` to short-circuit: `store.reset()` is called and no modal renders
- Any other thrown error surfaces as `store.error` and the modal renders the error branch

```ts
controller.on('quickview', async ({ product }, next) => {
    // inspect or mutate the quickview product before it is displayed
    await next();
});
```

## Variants
For variant integration details, see [Variant Integration Docs](https://github.com/athoscommerce/snap/blob/main/docs/INTEGRATION_VARIANTS.md)
