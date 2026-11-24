# Quickview

> [!NOTE]
> This page covers standard Snap integrations. For Snap Templates, see [Quickview](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_QUICKVIEW.md) under Templates Integration.

Quickview lets shoppers preview a product - images, price, variant selection, add-to-cart - in a modal or slide-out panel without leaving the search results, autocomplete, or a recommendation carousel.

How the pieces fit together:

- The [QuickviewManager](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Quickview) owns the quickview state. It is **not a controller** - one manager is created per Snap instance, passed to every controller as the `quickviewManager` service, and exposed on each controller as `controller.quickviewManager`.
- Every `SearchController`, `AutocompleteController` and `RecommendationController` inherits a `quickview(result)` method that opens the shared quickview for one of its results.
- A single quickview component - `QuickviewModal` (centered modal) or `QuickviewSlideout` (side panel) - is rendered into the quickview targeter's element and renders whatever the manager's store holds. Only one container is mounted; there is no per-result modal.
- When a quickview opens, the manager fetches full product data (all variants) from the API `products` endpoint (`/v1/products`) using the source result's `mappings.core.parentId`. Tracking and add-to-cart are delegated back to the controller that opened it, flagged `quickView: true`, rather than reimplemented in the quickview.

## Setup

Quickview is configured at the **top level** of the Snap config - not under `controllers` - since the `QuickviewManager` is not a controller. It is created ahead of every controller so it can be handed to each one as the `quickviewManager` service.

```js
import { Snap } from '@athoscommerce/snap-preact';

const config = {
	// ... client, controllers ...
	quickview: {
		config: {
			id: 'quickview',
			settings: {
				displayFields: [{ field: 'color' }, { field: 'brand', label: 'Brand' }, { field: 'material' }],
			},
		},
		targeters: [
			{
				selector: 'body',
				inject: {
					action: 'append',
					element: () => {
						const el = document.createElement('div');
						el.id = 'athos-quickview';
						return el;
					},
				},
				component: async () => (await import('@athoscommerce/snap-preact/components')).QuickviewModal,
			},
		],
	},
};

new Snap(config);
```

Both `config` and `targeters` are optional: with no `config` the manager defaults to `{ id: 'quickview' }`, and with no `targeters` nothing is rendered but the manager still exists for programmatic use. Each targeter needs a `selector` and a `component`. The component is loaded the first time a quickview opens, and receives the manager as a `quickviewManager` prop (alongside `snap`) plus any targeter `props`.

The trigger is up to your components. The library `Result` component renders a quickview button over the image when given `hideQuickviewButton: false` (it only renders when the controller has a `quickviewManager`); a custom result component calls the controller directly:

```jsx
// inside any Search / Autocomplete / Recommendation controller component
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

## Opening a Quickview Programmatically

Every `SearchController`, `AutocompleteController` and `RecommendationController` exposes `quickview(result, config?, productsData?)` and accepts optional config overrides.

```js
// from a controller
await controller.quickview(result);

// per-call settings override
await controller.quickview(result, { displayFields: [{ field: 'color' }] });

// pre-fetched product data (a `/v1/products` response) - the third argument
await controller.quickview(result, undefined, productsData);
```

The `result` must be a product carrying `mappings.core.parentId` - otherwise a warning is logged and nothing opens. Without a `quickview` section in the config, the controllers have no `quickviewManager` and `quickview()` logs a warning and nothing opens.

> [!IMPORTANT]
> `FinderController` cannot open quickviews - it has no `addToCart` or product tracking for the manager to delegate back to. Calling `quickview()` on a finder logs a warning and no-ops.

## Quickview Settings

The quickview behaviour is controlled by a `quickview` settings object:

| option | description | default value |
|---|---|:---:|
| `displayFields` | array of `{ field, label?, type? }` objects rendered as rows of the modal's attribute table (order preserved), or a function receiving the quickview product and returning that array. `field` is a dot-path (e.g. `attributes.brand`) or a bare key resolved on `mappings.core`, then `attributes`. `label` defaults to the source controller's meta (`meta.facets[field].label`), then the raw field key. `type` sets how the value renders: `'text'` (default), `'html'`, `'price'`, `'rating'` or `'image'`. Attributes are opt-in - when omitted, no table renders, and fields with no value are skipped. | ➖ |
| `clone` | when enabled (default), the source is deep-cloned into an independent product. When disabled, the source result is used by reference inside the modal - variant selection in the modal then mutates the source result tile. | `true` |
| `fetchProductData` | when enabled (default), the controller fetches full product data from the `/v1/products` endpoint. When disabled, the endpoint is not called and the modal renders whatever variants/attributes the source result already carries. | `true` |
| `imagesField` | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate resolving to more than one image renders as a slideshow instead of the single core image. | `['images', 'ss_images']` |

Settings can be set at two levels: the manager's `quickview.config.settings` (shown above) applies everywhere, and a controller config's `settings.quickview` applies to quickviews opened from that controller's results.

## Modal or Slideout

`QuickviewModal` renders the quickview centered in the viewport over a page overlay. `QuickviewSlideout` renders the same content in a panel sliding in from the side, and additionally accepts `slideDirection`, `width` and `overlayColor` props. Choose one with the targeter `component`, and pass props with the targeter `props`:

```js
quickview: {
	targeters: [
		{
			selector: 'body',
			inject: {
				action: 'append',
				element: () => {
					const el = document.createElement('div');
					el.id = 'athos-quickview';
					return el;
				},
			},
			component: async () => (await import('@athoscommerce/snap-preact/components')).QuickviewSlideout,
			props: {
				slideDirection: 'right',
				width: '500px',
			},
		},
	],
},
```

## Customizing the Layout

Both containers render the [QuickviewLayout](https://github.com/athoscommerce/snap/blob/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout/readme.md) organism, which arranges named **modules** via a `layout` prop - the same pattern as `AutocompleteLayout`. Pass `layout` and `column1`-`column4` to the container (through the targeter `props`), which passes them down to `QuickviewLayout`. Every column needs a `width` (a CSS width or `'auto'`).

Available modules include `slideshow`, `calloutBadge` (or `calloutBadge.<tag>` for a custom badge tag), `variantSelections` (or a single `variantSelection.<field>`), `productDetail.<path>` (any product field by dot-path, e.g. `productDetail.mappings.core.name`), `button.add-to-cart`, `button.more-info`, `quantityPicker`, `productDetailTable` (driven by `displayFields`), `recommendation.<profile>` (a recommendation carousel seeded with the viewed product), the `_` separator, and columns `c1`-`c4` which recurse into `column1`-`column4` configs.

```js
props: {
	layout: [['c1', 'c2']],
	column1: {
		layout: ['slideshow'],
		width: '50%',
	},
	column2: {
		layout: [
			['productDetail.mappings.core.name'],
			['variantSelections'],
			['button.add-to-cart', 'quantityPicker'],
			['productDetailTable'],
		],
		width: 'auto',
	},
},
```

Modules with nothing to show (no description, no variants, no displayed attributes) render nothing, so empty rows and columns collapse.

See the [QuickviewLayout documentation](https://github.com/athoscommerce/snap/blob/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout/readme.md) for the full module, prop, and lang reference.

## The `quickview` Event

A `quickview` event fires on the **source controller's** event manager after product data resolves and the store updates - `product` is the store's built `Product` (the clone about to render), so middleware can inspect or mutate it. Middleware is registered per controller like any other controller event:

```js
searchController.on('quickview', async ({ controller, product }, next) => {
	// inspect or mutate the quickview product
	await next();
});
```

Throwing `new Error('cancelled')` from a listener resets the store and aborts the open.

## Further Reading

- [QuickviewManager](https://github.com/athoscommerce/snap/blob/main/packages/snap-controller/src/Quickview/README.md) - manager API, `show()` options, config precedence, events
