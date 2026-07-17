# AutocompleteController

The `AutocompleteController` is used when making queries to the API `autocomplete` endpoint. It can also bind events to DOM elements to handle user input of queries.

## AutocompleteControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | ➖ | ✔️ |
| selector | css selector for input elements that DOM events should be bound to | ➖ | ✔️ |
| action | optional way to override the form action or provide one when it does not exist | ➖ |   |
| globals | keys defined here will be passed to the API request (can overwrite global config)| ➖ |   |
| settings.initializeFromUrl | initialize the controller with query parameter from URL (pre-fill input with current search) | true |   |
| settings.disableClickOutside | prevent the autocomplete from closing on clicks to the document | false |   |
| settings.syncInputs | if the selector targets multiple inputs, the value of those inputs will be synced | true |   |
| settings.serializeForm | if no action is specified in the config and a form element is found for the input, additional elements that are found will be added to the generated URLs (eg. hidden form input) | false |   |
| settings.facets.trim | facets that do not change results will be removed | true |   |
| settings.trending.limit | when set, trending (popular) queries will be fetched and made available in the trending store | ➖ |   | 
| settings.trending.showResults | if trending limit is set and there is no input, the first term results will be displayed | false |   | 
| settings.history.limit | when set, historical (previously searched) queries will be fetched and made available in the history store | ➖ |   | 
| settings.history.showResults | if history limit is set and there is no input, the first term results will be displayed | false |   | 
| settings.redirects.merchandising | boolean to disable merchandising redirects when ac form is submitted | true |   | 
| settings.redirects.singleResult | enable redirect to product detail page if search yields 1 result count | false |   |
| settings.bind.input | boolean to disable binding of the input element (selector) | true |   | 
| settings.bind.submit | boolean to disable binding of the submit event (form submission of enter key press) | true |   |
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
autocompleteController.init();
```

## Bind
<!-- TODO: set/test link to DomTargeter -->
Invoking the `bind` method is required to attach event listeners to each input specified as `selector` in the `AutocompleteControllerConfig`.

```js
autocompleteController.bind();
```

## Unbind
<!-- TODO: set/test link to DomTargeter -->
Invoking the `unbind` method will remove attached event listeners previously attached by the `bind` method.

```js
autocompleteController.unbind();
```

## Search
This will invoke a search request to Athos' search API and populate the store with the response. This should be automatically called by the DOM event binding that occurs when the `bind` method (see above) is invoked.

```js
autocompleteController.search();
```

## AddToCart
This will invoke an addToCart event (see below). Takes an array of Products as a parameter, and an optional `TrackEventOverrides` object (`{ quickView?: boolean }`) as a second parameter — passed as `{ quickView: true }` by the `QuickviewController` when delegating, so the resulting beacon event is flagged as having occurred within the quickview modal.

```js
autocompleteController.addToCart([autocompleteController.store.results[0]]);
```

## QuickView

The Autocomplete controller exposes a `quickview` method for opening the product quickview modal. The modal state no longer lives on `AutocompleteController` — it is owned by a dedicated `QuickviewController` (default id `quickview`; the global handler resolves it by controller type) at `quickviewController.store` (a `QuickviewStore`). A single `<ProductQuickview />` is rendered once: the Snap framework injects it into `<body>`, so consumers no longer render one per result.

### `quickview(result, productsData?, config?)`

Requests the product quickview modal for the given result. The Autocomplete controller computes the product's parent (`result.mappings.core.parentId || result.id`), merges the controller-level `settings.quickview` config with the per-call override, and fires a global `controller/quickview` event (`window.athos.fire(...)`) carrying `{ result, productsData, parentId, config, meta, controller }`. It no longer touches a local `store.quickview`. The dedicated `QuickviewController` handles that event: it opens the modal, fetches `/v1/products`, fires the `quickview` middleware, and updates its own store.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. Autocomplete resolves the parent via `result.mappings.core.parentId || result.id`. |
| `productsData` | `ProductsResponseModel` (optional) | If passed, the `QuickviewController` skips its own `/v1/products` call and uses this data as-is. |
| `config` | `QuickviewConfig` (optional) | Per-call override; merged with `settings.quickview` from the controller config (caller wins). |

```tsx
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

### Closing the modal

Closing is handled by the `QuickviewController`'s store: call `quickviewController.store.close()` to hide the modal while retaining `product` (note that calling `quickview()` again will re-enter the loading state and re-fetch), or `quickviewController.store.reset()` to also clear the product reference.

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

### focusChange
- Called with `eventData` = { controller }
- Invoked when an input has been focused

### beforeSubmit
- Called with `eventData` = { controller, input }
- Invoked prior to submission of autocomplete search

### track.banner.impression
- Called with `eventData` = { controller, product, trackEvent } 
- Always invoked after `track.banner.impression()` method has been invoked

### track.banner.clickThrough
- Called with `eventData` = { controller, event, product, trackEvent } 
- Always invoked after `track.banner.clickThrough()` or `track.banner.click()` method has been invoked

### track.product.impression
- Called with `eventData` = { controller, product, trackEvent } 
- Always invoked after `track.product.impression()` method has been invoked

### track.product.clickThrough
- Called with `eventData` = { controller, event, product, trackEvent } 
- Always invoked after `track.product.clickThrough()` or `track.product.click()` method has been invoked

### track.product.addToCart
- Called with `eventData` = { controller, product, trackEvent } 
- Always invoked after `track.product.addToCart()` method has been invoked

For the `track.product.*` events above, `trackEvent` includes `quickView: true` when the tracked interaction was delegated from the `QuickviewController` (i.e. it occurred within the quickview modal).

Impressions are deduped per product per response: `track.product.impression` sends at most one regular impression and one quickview-delegated impression for each result of a response. The two kinds dedup separately, so opening the quickview still sends an impression for a product whose grid impression was already tracked (and vice versa).

### track.redirect
- Called with `eventData` = { controller, redirectURL, trackEvent } 
- Always invoked after `track.redirect()` method has been invoked

### addToCart
- Called with `eventData` = { controller, products } 
- Always invoked after `addToCart()` method has been invoked

### quickview
- This middleware fires on the dedicated `QuickviewController` (the controller that handles the global `controller/quickview` event), not on `AutocompleteController`
- Called with `eventData` = `ProductQuickviewObj` = { controller, result, productsData?, config }
- Fires after the optional `/v1/products` fetch resolves and before the `QuickviewController`'s `store.update` runs
- Middleware can mutate `result`, `productsData`, or `config` on the payload — the `QuickviewController` reads them back after the await and passes them to `store.update`
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
