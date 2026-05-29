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
| settings.quickview.displayFields | array of product attribute field names that should appear in the modal's attribute table (preserves order). When omitted, all attributes are shown. Field labels are looked up from `meta.facets[field].label` with a fallback to the raw field name. | ➖ |   |
| settings.quickview.clone | when `false`, the source result is used by reference inside the modal — variant selection in the modal then mutates the source result tile. When `true` (default), the source is deep-cloned into an independent Product graph. | true |   |
| settings.quickview.fetchProductData | when `false`, the `/v1/products` endpoint is NOT called and the modal renders whatever variants/attributes the source result already carries. When `true` (default), the controller fetches full product data (including variants) before the modal opens. | true |   |


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
This will invoke an addToCart event (see below). Takes an array of Products as a parameter. 

```js
recommendationController.addToCart([recommendationController.store.results[0]]);
```

## QuickView

The Recommendation controller exposes two methods for driving the product quickview modal: `setQuickView` and `closeQuickView`. State lives on `controller.store.quickview`; consumers render the `<ProductQuickview controller={controller} />` molecule to display it.

### `setQuickView({ result, productsData?, config? })`

Opens the product quickview modal for the given result. Immediately flips the store into a loading state, optionally fetches `/v1/products` for the result (Recommendation uses `result.id` as the parent identifier), fires the `productQuickview` middleware event, then populates `controller.store.quickview` with the (cloned-by-default) Product. The method always resolves — errors surface via `store.quickview.error` rather than thrown.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. Recommendation uses `result.id` as the parent identifier. |
| `productsData` | `ProductsResponseModel` (optional) | If passed, the controller skips its own `/v1/products` call and uses this data as-is. |
| `config` | `QuickViewConfig` (optional) | Per-call override; merged with `settings.quickview` from the controller config (caller wins). |

```tsx
<button onClick={() => controller.setQuickView({ result })}>Quick View</button>
```

### `closeQuickView()`

Hides the modal but retains `product` in the store, so reopening the same result is instant. Call `controller.store.quickview.reset()` if you also want to clear the product reference.

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

### addToCart
- Called with `eventData` = { controller, products } 
- Always invoked after `controller.addToCart()` method has been invoked

### productQuickview
- Called with `eventData` = `ProductQuickviewObj` = { controller, result, productsData?, config }
- Fires inside `setQuickView`, after the optional `/v1/products` fetch resolves and before the store's `update` runs
- Middleware can mutate `result`, `productsData`, or `config` on the payload — the controller reads them back after the await and passes them to `store.quickview.update`
- Throw `new Error('cancelled')` to short-circuit: `store.quickview.reset()` is called and no modal renders
- Any other thrown error surfaces as `store.quickview.error` and the modal renders the error branch

```ts
controller.on('productQuickview', async (eventObj, next) => {
    if (someCondition(eventObj.result)) {
        eventObj.config.displayFields = ['custom', 'fields', 'here'];
    }
    await next();
});
```

## Variants
For variant integration details, see [Variant Integration Docs](https://github.com/athoscommerce/snap/blob/main/docs/INTEGRATION_VARIANTS.md)
