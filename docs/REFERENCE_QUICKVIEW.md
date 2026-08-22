## Quickview

Quickview lets shoppers preview a product - images, price, variant selection, add-to-cart - in a modal or slide-out panel without leaving the search results, autocomplete, or a recommendation carousel.

How the pieces fit together:

- The [QuickviewManager](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Quickview) owns the quickview state. It is **not a controller** - one manager is created per Snap instance, passed to every controller as the `quickview` service, and exposed on each controller as `controller.quickviewManager`.
- Every `SearchController`, `AutocompleteController` and `RecommendationController` inherits a `quickview(result)` method that opens the shared quickview for one of its results.
- A single quickview component - `QuickviewModal` (centered modal) or `QuickviewSlideout` (side panel) - is injected into `<body>` and renders whatever the manager's store holds. Only one container is mounted; there is no per-result modal.
- When a quickview opens, the manager fetches full product data (all variants) from the API `products` endpoint (`/v1/products`) using the source result's `mappings.core.parentId`. Tracking and add-to-cart are delegated back to the controller that opened it, flagged `quickView: true`, rather than reimplemented in the quickview.

Quickview is available to both Snap Templates and standard Snap integrations.

### Setup with Snap Templates

Enabling quickview in Snap Templates takes two additions: a `quickview` section, which creates the manager and injects the component, and the `showQuickview` result option, which renders the trigger button on each result.

```tsx
new SnapTemplates({
	config: {
		siteId: '8uyt2m',
	},
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				result: {
					showQuickview: true,
				},
			},
		},
	},
	quickview: {
		targets: [
			{
				component: 'QuickviewModal',
			},
		],
	},
	search: {
		targets: [
			{
				selector: '#athos-templates',
				component: 'Search',
			},
		],
	},
});
```

`targets[].component` is either `'QuickviewModal'` or `'QuickviewSlideout'`. `targets[].selector` is optional and defaults to `'body'` - the component renders inside an injected `#athos-quickview` element appended to the selected element.

`showQuickview` (default `false`) renders a quickview button over the result image which calls `controller.quickview(result)` on click. Because the `result` component is shared, enabling it on `result` enables it everywhere results render - search, autocomplete, and recommendations. Use a named selector (e.g. `'search results result'`) to scope where the button appears.

> [!IMPORTANT]
> The `quickview` section is what creates the `QuickviewManager`. With `showQuickview: true` but no `quickview` section, clicking the button logs a warning and nothing opens - the controllers were created without a `quickview` service.

### Setup with Snap (standard integrations)

In a standard Snap integration, quickview is configured at the **top level** of the Snap config - not under `controllers` - since the `QuickviewManager` is not a controller. It is created ahead of every controller so it can be handed to each one as the `quickview` service.

```js
const config = {
	// ... client, instances, controllers ...
	quickview: {
		config: {
			id: 'quickview',
			settings: {
				quickview: {
					displayFields: ['color', 'brand', 'material'],
				},
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

Both `config` and `targeters` are optional: with no `config` the manager defaults to `{ id: 'quickview' }`, and with no `targeters` nothing is rendered but the manager still exists for programmatic use. Targeted components receive the manager as a `quickviewManager` prop (alongside `snap`).

The trigger is up to your components. The library `Result` component renders one when given `showQuickview: true`; a custom result component calls the controller directly:

```jsx
// inside any Search / Autocomplete / Recommendation controller component
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

### Quickview Settings

The quickview behaviour is controlled by a `quickview` settings object:

| option | description | default value |
|---|---|:---:|
| `displayFields` | array of product attribute field names rendered in the modal's attribute table (order preserved). Attributes are opt-in - when omitted, no table renders. Field labels are looked up from the source controller's meta (`meta.facets[field].label`) with a fallback to the raw field name. | ➖ |
| `clone` | when `false`, the source result is used by reference inside the modal - variant selection in the modal then mutates the source result tile. When `true`, the source is deep-cloned into an independent product. | `true` |
| `fetchProductData` | when `false`, the `/v1/products` endpoint is not called and the modal renders whatever variants/attributes the source result already carries. | `true` |
| `imagesField` | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate resolving to more than one image renders as a slideshow instead of the single core image. | `['images', 'ss_images']` |

Settings can be supplied at three levels, resolved per `show()` call with the most specific winning:

```
manager settings  <  source controller settings  <  per-call options.config
```

In Snap Templates the manager level is `quickview.settings`, and the controller level is the feature's `settings.quickview` - which also means tabs can carry their own quickview settings via `tabs[].settings`:

```tsx
new SnapTemplates({
	// ...
	quickview: {
		targets: [{ component: 'QuickviewModal' }],
		settings: {
			quickview: {
				displayFields: ['color', 'brand'],
			},
		},
	},
	search: {
		settings: {
			quickview: {
				displayFields: ['color', 'brand', 'material', 'vendor'],
			},
		},
	},
});
```

In a standard Snap integration the same two levels are the manager's `config.settings.quickview` (shown above) and each controller config's `settings.quickview`.

### Modal or Slideout

`QuickviewModal` renders the quickview centered in the viewport over a page overlay. `QuickviewSlideout` renders the same content in a panel sliding in from the side, and additionally accepts `slideDirection`, `width` and `overlayColor` props:

```tsx
quickview: {
	targets: [
		{
			component: 'QuickviewSlideout',
		},
	],
},
theme: {
	extends: 'pike',
	overrides: {
		default: {
			quickviewSlideout: {
				slideDirection: 'right',
				width: '500px',
			},
		},
	},
},
```

### Customizing the Layout

Both containers render the [QuickviewLayout](https://github.com/athoscommerce/snap/tree/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout) organism, which arranges named **modules** via a `layout` prop - the same pattern as `AutocompleteLayout`. The theme selectors are `quickviewModal`, `quickviewSlideout` and `quickviewLayout`.

Available modules include `slideshow`, `calloutBadge`, `variantSelections` (or a single `variantSelection.<field>`), `productDetail.<path>` (any product field by dot-path, e.g. `productDetail.mappings.core.name`), `button.add-to-cart`, `button.more-info`, `quantityPicker`, `productDetailTable` (driven by `displayFields`), `recommendation.<profile>` (a recommendation carousel seeded with the viewed product), the `_` separator, and columns `c1`-`c4` which recurse into `column1`-`column4` configs.

```tsx
theme: {
	extends: 'pike',
	overrides: {
		default: {
			quickviewLayout: {
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
						['recommendation.similar'],
					],
				},
			},
		},
	},
}
```

Modules with nothing to show (no description, no variants, no displayed attributes) render nothing, so empty rows and columns collapse.

Button and dialog text are customizable through `lang`:

```tsx
quickviewLayout: {
	lang: {
		addToCartButton: { value: 'Add to Bag' },
		moreInfoButton: { value: 'View Full Details' },
	},
},
```

See the [QuickviewLayout documentation](https://github.com/athoscommerce/snap/tree/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout) for the full module, prop, and lang reference.

### Opening a Quickview Programmatically

Every `SearchController`, `AutocompleteController` and `RecommendationController` exposes `quickview(result)`. The manager itself is available on each of these controllers as `controller.quickviewManager`, whose `show(result, options)` accepts a per-call config override and pre-fetched product data:

```js
// from a controller
await controller.quickview(result);

// equivalent, via the manager
await controller.quickviewManager.show(result, { controller });

// per-call settings override and pre-fetched data
await controller.quickviewManager.show(result, {
	controller,
	config: { displayFields: ['color'] },
	productsData, // skips the /v1/products request
});
```

The `result` must be a product carrying `mappings.core.parentId` - otherwise a warning is logged and nothing opens.

> [!IMPORTANT]
> `FinderController` cannot open quickviews - it has no `addToCart` or product tracking for the manager to delegate back to. Calling `quickview()` on a finder logs a warning and no-ops.

### The `quickview` Event

A `quickview` event fires on the **source controller's** event manager after product data resolves and before the store updates, so middleware is registered per controller like any other controller event:

```js
searchController.on('quickview', async ({ controller, result, productsData, config }, next) => {
	// inspect or mutate productsData / config
	await next();
});
```

Throwing `new Error('cancelled')` from a listener aborts the open.

### Further Reading

- [QuickviewManager](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Quickview) - manager API, `show()` options, config precedence, events
- [QuickviewLayout](https://github.com/athoscommerce/snap/tree/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout) - layout modules, images, variants, tracking, accessibility
