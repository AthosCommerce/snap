# QuickviewController

The `QuickviewController` owns the product quickview modal state. It is a singleton-style controller (typically registered with the id `quickview`) that other controllers (`SearchController`, `AutocompleteController`, `RecommendationController`) delegate to when their `quickview` method is invoked. It does not perform searches — its `search` method is a no-op — instead it fetches product data from the API `products` endpoint (`/v1/products`) on demand and populates a `QuickviewStore` that a single `<ProductQuickview />` component renders.

## QuickviewControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | ➖ | ✔️ |
| settings.quickview.displayFields | array of product attribute field names that should appear in the modal's attribute table (preserves order). When omitted, no attributes are shown. Field labels are looked up from `meta.facets[field].label` with a fallback to the raw field name. | ➖ |   |
| settings.quickview.clone | when `false`, the source result is used by reference inside the modal — variant selection in the modal then mutates the source result tile. When `true` (default), the source is deep-cloned into an independent Product graph. | true |   |
| settings.quickview.fetchProductData | when `false`, the `/v1/products` endpoint is NOT called and the modal renders whatever variants/attributes the source result already carries. When `true` (default), the controller fetches full product data (including variants) while the modal displays in a loading state. | true |   |
| settings.quickview.imagesField | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate that resolves to more than one image is rendered in a 1-per-view carousel instead of the single core image. When omitted, defaults to trying `images` then `ss_images`. | `images`, `ss_images` |   |

The `settings.quickview` values act as controller-level defaults — each `quickview()` call may pass a per-call `config` that is merged on top (caller wins).

## How quickviews are triggered

The `QuickviewController` is normally not invoked directly. Other controllers' `quickview` methods fire a global `controller/quickview` event on the integration global (`window.athos.fire('controller/quickview', { result, productsData, parentId, config, meta, controller })`). The snap-preact event manager handles this event by locating the registered controller with `type === 'quickview'` (matched by type, not id) and invoking its `quickview` method with the payload fields as arguments. Because of this, the `QuickviewController` is created eagerly by snap-preact even when no targeters are configured.

```jsx
// any Search / Autocomplete / Recommendation controller
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

## Quickview

### `quickview(result, productsData?, config?, options?)`

Opens the quickview modal for the given result and populates the store.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. If omitted, a warning is logged and nothing happens. |
| `productsData` | `ProductsResponseModel` (optional) | If passed, the controller skips its own `/v1/products` call and uses this data as-is. Useful for tests, prefetching, or middleware-driven flows. |
| `config` | `QuickviewConfig` (optional) | Per-call override; merged on top of `config.settings.quickview` (caller wins). |
| `options.parentId` | `string` (optional) | Parent id used for the `/v1/products` request. When omitted, resolved via `result.mappings.core.parentId \|\| result.id`. |
| `options.meta` | `MetaStore` (optional) | The originating controller's meta store, forwarded onto `store.meta` for badge / facet-label rendering. |
| `options.controller` | `SearchController \| AutocompleteController \| RecommendationController` (optional) | The controller that opened the quickview, remembered for delegated actions like `addToCart`. |

The method performs the following steps:

1. Opens the modal immediately in a loading state scoped to the triggering result (`store.setLoading(true, result)`).
2. Fetches `/v1/products` with the resolved `parentId` — unless `productsData` was provided or `config.fetchProductData` is `false`. A failed fetch logs a warning and continues with no products data.
3. Fires the `quickview` event middleware (see Events below).
4. Updates the store (`store.update(...)`), building the modal product and applying variants. An exception here surfaces as `store.error` instead of leaving the modal stuck in loading state.

The controller does not track an impression itself — the quickview container components (`ProductQuickviewModal` / `ProductQuickviewSlideout`) observe the displayed content and call `track.product.impression` when it is actually viewed.

Each call increments an internal token; if a newer `quickview()` call supersedes an older one while its fetch or middleware is still in flight, the stale continuation is discarded and never writes to the store — the last-clicked product always wins.

```js
quickviewController.quickview(result, undefined, { displayFields: ['color', 'material'] });
```

## Search
The `QuickviewController` has no search lifecycle. The `search` method exists only to satisfy the `AbstractController` interface and resolves immediately without doing anything.

## AddToCart
Delegates to the `addToCart` method of the controller that opened the current quickview (passed as `options.controller` to `quickview()`), so the platform's existing cart integration (tracking and `addToCart` middleware) runs there. Takes an array of Products (or a single Product) as a parameter. The delegated call passes `{ quickView: true }` as the overrides parameter, so the resulting beacon event is flagged as having occurred within the quickview modal. If no originating controller exists, a warning is logged.

```js
quickviewController.addToCart([quickviewController.store.product]);
```

## Track
The `QuickviewController` has no tracking lifecycle of its own — every tracked interaction happened against a result that belongs to the originating controller's response. Its `track.product` methods therefore delegate to the same method on the controller that opened the current quickview, passing `{ quickView: true }` as the overrides parameter so the resulting beacon event (and the `trackEvent` data on the fired `track.product.*` events) is flagged with `quickView: true`. If no originating controller exists, a warning is logged and nothing is tracked.

| method | delegates to |
|---|---|
| `track.product.clickThrough(e, result)` | `sourceController.track.product.clickThrough(e, result, { quickView: true })` |
| `track.product.click(e, result)` | `sourceController.track.product.click(e, result, { quickView: true })` |
| `track.product.impression(result)` | `sourceController.track.product.impression(result, { quickView: true })` |
| `track.product.addToCart(result)` | `sourceController.track.product.addToCart(result, { quickView: true })` |

```js
quickviewController.track.product.impression(quickviewController.store.product);
```

In the default components these methods are invoked automatically: the container components (`ProductQuickviewModal` / `ProductQuickviewSlideout`) wrap the layout in a `QuickviewTracker` that calls `track.product.impression` (via the `useTracking` hook) once the displayed product is actually viewed, and the `QuickviewLayout` "More info" button calls `track.product.clickThrough` before navigating to the product page. Generic click tracking is intentionally disabled inside the quickview — the "More info" button is the only element that sends a click-type event.

Quickview impressions are deduped separately from regular (grid) impressions in the originating controller's event bookkeeping — opening the quickview still sends an impression for a product whose grid impression was already tracked, and vice versa. Each kind is sent at most once per product per response.

## QuickviewStore
The controller's store (`quickviewController.store`) is a `QuickviewStore` holding the modal state:

| property | type | description |
|---|---|---|
| `product` | `Product \| undefined` | the product currently shown in the modal (the deep clone by default, or the source result when `clone: false`) |
| `isOpen` | `boolean` | whether the modal is open |
| `loading` | `boolean` | `true` while product data is being fetched |
| `quickviewConfig` | `QuickviewConfig \| undefined` | the per-quickview config of the currently-open modal (`displayFields`, `imagesField`, etc.) |
| `error` | `{ message, cause? } \| undefined` | set when the middleware or store update fails — the modal renders an error branch |
| `meta` | `MetaStore \| undefined` | the originating controller's meta store, for badge / facet-label lookups |

Closing the modal is done via the store: `store.close()` hides the modal while retaining `product` (so reopening the same result is instant), and `store.reset()` also clears the product reference.

```js
quickviewController.store.close();
```

## Usage
With `snap-preact`, the controller is defined under `controllers.quickview` in the Snap config. Targeters are optional — the controller is created eagerly so the global `controller/quickview` handler can always find it.

```js
const snap = new Snap({
	client: {
		globals: {
			siteId: 'xxxxxx',
		},
	},
	controllers: {
		quickview: [
			{
				config: {
					id: 'quickview',
					settings: {
						quickview: {
							displayFields: ['color', 'material'],
						},
					},
				},
			},
		],
	},
});
```

## Events
### init
- Called with `eventData` = { controller }
- Invoked by calling `init`

### error
- Called with `eventData` = { controller, error }
- Invoked when an error has been caught within the controller

### quickview
- Called with `eventData` = `ProductQuickviewObj` = { controller, result, productsData?, config }
- Fires after the optional `/v1/products` fetch resolves and before `store.update` runs
- Middleware can mutate `result`, `productsData`, or `config` on the payload — the controller reads them back after the await and passes them to `store.update`
- Throw `new Error('cancelled')` to short-circuit: `store.reset()` is called and no modal renders
- Any other thrown error surfaces as `store.error` and the modal renders the error branch

```ts
quickviewController.on('quickview', async (eventObj, next) => {
	if (someCondition(eventObj.result)) {
		eventObj.config.displayFields = ['custom', 'fields', 'here'];
	}
	await next();
});
```
