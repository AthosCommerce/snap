# SearchController

The `SearchController` is used when making queries to the API `search` endpoint.

## SearchControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | ➖ | ✔️ |
| globals | keys defined here will be passed to the API request (can overwrite global config)| ➖ |   |
| settings.redirects.merchandising | enable merchandising redirects | true |   |
| settings.redirects.singleResult | enable redirect to product detail page if search yields 1 result count | true |   |
| settings.facets.pinFiltered | selected facet options move to the top of the options array | true |   |
| settings.facets.storeRange | range facets keep their initial boundary ranges from first load | true |   |
| settings.facets.trim | facets that do not change results will be removed | true |   |
| settings.facets.autoOpenActive | setting for "auto open" functionality for facets that are filtered (active), collapsed, and have no stored data | true |   |
| settings.facets.fields | object keyed by individual facet fields for configuration of any settings.facets options | ➖ |   |
| settings.filters.fields | object keyed by individual filter fields for configuration of any settings.filters options | ➖ |   |
| settings.filters.hierarchy.enabled | boolean to enable/disable selected hierarchy facets from showing in the filters  | false |   |
| settings.filters.hierarchy.showFullPath | boolean to show the full hierarchy path in the filter  | false |   |
| settings.filters.hierarchy.displayDelimiter | string to adjust the delimiter between each level of the full hierarchy path | ' / ' |   |
| settings.filters.rangeFormatValue | setting to re-format the value of a range filter using sprintf  | false |   |
| settings.history.max | how many search terms should be kept in the history store | 25 |   | 
| settings.history.url | allows for adjust the root URL for history store terms (default is relative URLs) | ➖ |   | 
| settings.pagination.pageSizeOptions | setting to change the page size options available | ➖ |   | 
| settings.variants.field | used to set the field in which to grab the variant data from | ➖ |   | 
| settings.variants.showDisabledSelectionValues | determines if completely out of stock (disabled) options should appear in variant selections | false |   | 
| settings.variants.realtime.enabled | enable real time variant updates | ➖ |   | 
| settings.variants.realtime.filters | specify which filters to use to determine which results are updated | ➖ |   | 
| settings.variants.options | object keyed by individual option field values for configuration of any option settings  | ➖ |   | 
| settings.infinite | enable infinite scrolling by setting to empty object | ➖ |   |
| settings.infinite.backfill | number of pages allowed for backfill | ➖ |   |
| settings.restorePosition.enabled | boolean to enable/disable using `restorePosition` event middleware to restore the window scroll position when navigating back to previous page (when using infinite this is automatically set to true) | false |   |
| settings.restorePosition.onPageShow | boolean to enable/disable having restorePosition occur on the 'pageshow' window event (requires `restorePosition.enable`) | false |   |
| settings.quickview.displayFields | array of product attribute field names that should appear in the modal's attribute table (preserves order). When omitted, all attributes are shown. Field labels are looked up from `meta.facets[field].label` with a fallback to the raw field name. | ➖ |   |
| settings.quickview.clone | when `false`, the source result is used by reference inside the modal — variant selection in the modal then mutates the source result tile. When `true` (default), the source is deep-cloned into an independent Product graph. | true |   |
| settings.quickview.fetchProductData | when `false`, the `/v1/products` endpoint is NOT called and the modal renders whatever variants/attributes the source result already carries. When `true` (default), the controller fetches full product data (including variants) before the modal opens. | true |   |
| settings.quickview.imagesField | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate that resolves to more than one image is rendered in a 1-per-view carousel instead of the single core image. When omitted, defaults to trying `images` then `ss_images`. Each field is expected to be an array of image URLs (real array or MobX observable array). | `images`, `ss_images` |   |


## Initialize
Invoking the `init` method is required to subscribe to changes that occur in the UrlManager. This is typically done automatically prior to calling the first `search`.

```js
searchController.init();
```

## Search
This will invoke a search request to Athos's search API and populate the store with the response.

```js
searchController.search();
```

## AddToCart
This will invoke an addToCart event (see below). Takes an array of Products as a parameter. 

```js
searchController.addToCart([searchController.store.results[0]]);
```

## Quickview

The Search controller exposes a `quickview` method for opening the product quickview modal. The modal state no longer lives on `SearchController` — it is owned by a dedicated `QuickviewController` (controller id `quickview`) at `quickviewController.store.quickview` (a `QuickviewStore`). A single `<ProductQuickview />` is rendered once: the `QuickviewController` injects it into `<body>`, so consumers no longer render one per result.

### `quickview({ result, productsData?, config? })`

Requests the product quickview modal for the given result. The Search controller computes the product's parent (`result.mappings.core.parentId || result.id`), merges the controller-level `settings.quickview` config with the per-call override, and fires a global `controller/quickview` event (`window.athos.fire(...)`) carrying `{ result, productsData, parentId, config, meta, controller }`. It no longer touches a local `store.quickview`. The dedicated `QuickviewController` handles that event: it opens the modal, fetches `/v1/products`, fires the `quickview` middleware, and updates its own `store.quickview`.

| param | type | description |
|---|---|---|
| `result` | `Product` (required) | The source result to preview. Search resolves the parent via `result.mappings.core.parentId || result.id`. |
| `productsData` | `ProductsResponseModel` (optional) | If passed, the `QuickviewController` skips its own `/v1/products` call and uses this data as-is. Useful for tests, prefetching, or middleware-driven flows. |
| `config` | `QuickviewConfig` (optional) | Per-call override; merged with `settings.quickview` from the controller config (caller wins). |

```tsx
<button onClick={() => controller.quickview({ result })}>Quick View</button>
```

### Closing the modal

Closing is handled by the `QuickviewController`'s store: call `quickviewController.store.quickview.close()` to hide the modal while retaining `product` (so reopening the same result is instant), or `quickviewController.store.quickview.reset()` to also clear the product reference.

```js
quickviewController.store.quickview.close();
```

## Search History
Search queries made by the controller are stored for later usage. This is enabled by default without providing any settings, to disable set the `max` to zero. The `config.settings.history.url` setting should be set when utilizing the history store outside of the search page in order for the URLs to direct users to the correct location. Common usage of the historical terms are on the search listing page or within autocomplete.

## Infinite
When `config.settings.infinite` is defined and `store.pagination.next.url.go({ history: 'replace' })` is invoked, the next page will be fetched and its result set will be appended to the existing result set.

If the page has been reloaded, the results will be reset to page 1.

```js
const searchConfig = {
	id: 'search',
	globals: {
		pagination: {
			pageSize: 12
		}
	},
	settings: {
		infinite: {}
	}
};
```

### Backfill
If `config.settings.infinite.backfill` is specified, any page reloads when paginated up to the specified value will fetch previous pages to backfill.

```js
const searchConfig = {
	id: 'search',
	globals: {
		pagination: {
			pageSize: 12
		}
	},
	settings: {
		infinite: {
			backfill: 5
		}
	}
};
```

For example, if `config.settings.infinite.backfill` contains a value of `5` and the user has paginated to page `4` and reloads the page, `4` pages of results will be shown. However, if the user has paginated to page `6` or above and reloads the page, only page `1` results will be shown. 

### Restore Position
Any time you navigate back to a previous page, this setting will tell the controller to attempt to scroll to the previous position on the page. The restore position algorithm uses a selector that was stored when tracking the product that was clicked (`track.product.click()`) - this saves the product href, selector and domRect position details. For this to work properly, it is important that each product has a unique URL assigned to it in `mappings.core.url`. The functionality was made to work out of the box on many types of sites, but if it does not work, it can be disabled and left entirely up to the browser by setting `restorePosition.enabled` to `false` (the default setting unless using `config.settings.infinite`).

When using infinite scroll, it is recommended to specify a value for `config.settings.infinite.backfill` to ensure that when returning to the product listing page, that the product is there to scroll to.

```js
const searchConfig = {
	id: 'search',
	globals: {
		pagination: {
			pageSize: 12
		}
	},
	settings: {
		infinite: {
			backfill: 5,
		}
		restorePosition: {
			enabled: false,
		}
	}
};
```


### Pagination Settings 

#### `pageSizeOptions` property
The optional `pageSizeOptions` property gives the ability to overwrite the default page size options in the SearchPaginationStore. These are typically used in a `<select>` dropdown to change the number of results displayed per page. You can pass in as many options as you need. Each option has a `label` and a numeric `value`. The SearchPaginationStore then automatically populates and updates the `url` and `active` values. 

`label` - label text to display

`value` - number of results for this selection

`url` - reference to the URLManager containing href and onclick values

`active` - boolean stating if current page size matches the value of this option


```js
const searchConfig = {
	id: 'search',
	settings: {
		pagination: {
			pageSizeOptions: [
				{
					label: `show 30`,
					value: 30,
				},
				{
					label: `show 40`,
					value: 40,
				},
				{
					label: `show 50`,
					value: 50,
				},
			]
		},
	}
};
```


### Infinite Scrolling
By default when using the infinite configuration, additional pages are appended when `store.pagination.next()` is invoked. To automatically request the next page when the user has scrolled to the bottom, an `useIntersection` hook along with a `useRef` attached to an element below the results can be used to invoke `pagination.next.url.go({ history: 'replace' })` when the element comes into the viewport. 

```tsx
import { h, Fragment, Component } from 'preact';
import { useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { ControllerProvider, useIntersection, Results } from '@athoscommerce/snap-preact/components';

@observer
export class Content extends Component {
	render() {
		const controller = this.props.controller;
		const {
			store: { pagination, merchandising, loading },
		} = controller;

		const infinite = useRef(null);
		const atBottom = pagination.totalResults > 0 ? useIntersection(infinite, '50px') : false;
		if (atBottom && pagination.next && !loading) {
			setTimeout(() => {
				pagination.next.url.go({ history: 'replace' });
			})
		}
		return (
			<ControllerProvider controller={controller}>
				<Results results={controller.store.results}>		
				<div style={{ display: loading ? 'none' : 'block' }} ref={infinite}></div>
			</ControllerProvider>
		);
	}
}

```

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
- Invokes `window.location.replace()` if API response contains merchandising redirects AND if `config.settings.redirects.merchandising = true` (default)
- Invokes `window.location.replace()` to redirect to product detail page if API response returned a single product AND `config.settings.redirects.singleResult = true` (default)
- Sets `controller.store.loading = false`

### afterStore
- Called with `eventData` = { controller, request, response }
- Always invoked after data has been stored in mobx store

### restorePosition
- Called with `eventData` = { controller, element }
- If an element position data exists, `element` data will include `domRect` (of the element with selector), `href` and `selector`
- Invoked during final stages of `afterStore` just prior to setting loading state to false

### track.banner.impression
- Called with `eventData` = { controller, product, trackEvent } 
- Always invoked after `track.product.impression()` method has been invoked

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

### track.product.redirect
- Called with `eventData` = { controller, redirectURL, trackEvent } 
- Always invoked after `track.product.redirect()` method has been invoked

### addToCart
- Called with `eventData` = { controller, products } 
- Always invoked after `addToCart()` method has been invoked

### quickview
- This middleware fires on the dedicated `QuickviewController` (the controller that handles the global `controller/quickview` event), not on `SearchController`
- Called with `eventData` = `ProductQuickviewObj` = { controller, result, productsData?, config }
- Fires after the optional `/v1/products` fetch resolves and before the `QuickviewController`'s `store.quickview.update` runs
- Middleware can mutate `result`, `productsData`, or `config` on the payload — the `QuickviewController` reads them back after the await and passes them to `store.quickview.update`
- Throw `new Error('cancelled')` to short-circuit: `store.quickview.reset()` is called and no modal renders
- Any other thrown error surfaces as `store.quickview.error` and the modal renders the error branch

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
