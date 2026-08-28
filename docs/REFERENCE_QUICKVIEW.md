## Quickview

Quickview lets shoppers preview a product - images, price, variant selection, add-to-cart - in a modal or slide-out panel without leaving the search results, autocomplete, or a recommendation carousel.

How the pieces fit together:

- The [QuickviewManager](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Quickview) owns the quickview state. It is **not a controller** - one manager is created per Snap instance, passed to every controller as the `quickviewManager` service, and exposed on each controller as `controller.quickviewManager`.
- Every `SearchController`, `AutocompleteController` and `RecommendationController` inherits a `quickview(result)` method that opens the shared quickview for one of its results.
- A single quickview component - `QuickviewModal` (centered modal) or `QuickviewSlideout` (side panel) - is injected into `<body>` and renders whatever the manager's store holds. Only one container is mounted; there is no per-result modal.
- When a quickview opens, the manager fetches full product data (all variants) from the API `products` endpoint (`/v1/products`) using the source result's `mappings.core.parentId`. Tracking and add-to-cart are delegated back to the controller that opened it, flagged `quickView: true`, rather than reimplemented in the quickview.
- `ChatController` is quickview-native: it receives its **own** manager instance (separate store), and its "discuss product" panel renders a `QuickviewLayout` inline in the chat secondary window - no component target needed. See [Quickview in Chat](#quickview-in-chat).

Quickview is available to both Snap Templates and standard Snap integrations.

### Setup with Snap Templates

Enabling quickview in Snap Templates takes two additions: a `quickview` section, which creates the manager and injects the component, and the `hideQuickviewButton: false` result option, which renders the trigger button on each result.

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
					hideQuickviewButton: false,
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

`targets[].component` is either `'QuickviewModal'` or `'QuickviewSlideout'`. `targets[].selector` is optional and defaults to `'body'` - the component renders inside an injected `#athos-quickview` element appended to the selected element. `targets` itself is also optional: a settings-only `quickview` section is valid (chat renders its quickview inline and needs no component target - see [Quickview in Chat](#quickview-in-chat)).

`hideQuickviewButton` (default `true`) controls the quickview button rendered over the result image, which calls `controller.quickview(result)` on click - set it to `false` to show the button. It only renders when the result has a `controller` and the image is not hidden. The button's accessible label is customizable via the `quickviewButtonText` prop (default `'Quick View'`), and `onQuickviewClick` adds a callback alongside the built-in behaviour. Because the `result` component is shared, enabling it on `result` enables it everywhere results render - search, autocomplete, and recommendations. Use a named selector (e.g. `'search results result'`) to scope where the button appears.

> [!IMPORTANT]
> The `quickview` section is what creates the `QuickviewManager`. With `hideQuickviewButton: false` but no `quickview` section, clicking the button logs a warning and nothing opens - the controllers were created without a `quickviewManager` service.

### Setup with Snap (standard integrations)

In a standard Snap integration, quickview is configured at the **top level** of the Snap config - not under `controllers` - since the `QuickviewManager` is not a controller. It is created ahead of every controller so it can be handed to each one as the `quickviewManager` service.

```js
const config = {
	// ... client, instances, controllers ...
	quickview: {
		config: {
			id: 'quickview',
			settings: {
				displayFields: ['color', 'brand', 'material'],
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

The trigger is up to your components. The library `Result` component renders one when given `hideQuickviewButton: false`; a custom result component calls the controller directly:

```jsx
// inside any Search / Autocomplete / Recommendation controller component
<button onClick={() => controller.quickview(result)}>Quick View</button>
```

### Opening a Quickview Programmatically

Every `SearchController`, `AutocompleteController` and `RecommendationController` exposes `quickview(result, config?, productsData?)` and accepts optional config overrides.

```js
// from a controller
await controller.quickview(result);

// per-call settings override and pre-fetched data
await controller.quickview(result, { displayFields: ['color'] });
```

The `result` must be a product carrying `mappings.core.parentId` - otherwise a warning is logged and nothing opens.

> [!IMPORTANT]
> `FinderController` cannot open quickviews - it has no `addToCart` or product tracking for the manager to delegate back to. Calling `quickview()` on a finder logs a warning and no-ops.

### Quickview in Chat

Chat is quickview-native: the "discuss product" panel in the chat secondary window **is** a quickview. `ChatController.productQuickView(result)` / `productQuery(result)` open it through the standard `QuickviewManager.show()` pipeline (products fetch, clone, variants), and the `ChatProductQueryMessage` component renders a `QuickviewLayout` inline from the manager's store. The store's `isOpen` flag is what shows and hides the window for product queries - `show()` opens it, `controller.dismissSideChat()` / `closeProductQuickview()` close it.

No configuration is required: whenever chat controllers are configured, Snap creates a **chat-scoped** `QuickviewManager` (id `chat-quickview`) and passes it to chat controllers - even when there is no `quickview` config at all. Chat renders the layout inline, so it never needs a component target. The chat manager owns a separate store from the body modal's, so opening the chat panel can never open the modal (and vice versa); when a `quickview` config exists, the chat manager inherits its `config.settings`.

Config precedence for the chat panel follows the standard manager merge: manager settings (inherited from `quickview.config.settings`) &lt; the chat controller's `settings.quickview` &lt; per-call config. Chat's `settings.quickview.displayFields` may be a plain `string[]` - string entries are shorthand for `{ field }`.

The panel's layout is themeable via the `chatProductQueryMessage` selector (same `layout`/`column` props as the containers). The default mirrors the legacy chat product panel: a header banner row on the theme's primary color (`c1` — the `slideshow` at 25% width — beside `c2` — name, price, and a `button.add-to-cart` / `button.similar` / `button.discuss` row), followed by `variantSelections`, `productDetailTable`, description, and `button.more-info`. The `button.similar` and `button.discuss` modules are chat-only - they forward to `controller.productSimilar()` / `controller.productQuery()` and render nothing when the quickview was opened by a non-chat controller (and `button.similar` also requires the chat `similarProducts` feature).

Because the chat panel renders the layout with `inline`, the `QuickviewLayout` also applies the chat presentation: variant titles include the value count (e.g. "Color (5)"), non-swatch variant selections render as a list of selectable tiles instead of a dropdown, and the add-to-cart/similar/discuss buttons carry their cart/search/chat icons.

### Quickview Settings

The quickview behaviour is controlled by a `quickview` settings object:

| option | description | default value |
|---|---|:---:|
| `displayFields` | array of product attribute fields rendered in the modal's attribute table (order preserved). Each entry is a `{ field, label?, type? }` object or a plain string (shorthand for `{ field }`). Attributes are opt-in - when omitted, no table renders. Field labels are looked up from the source controller's meta (`meta.facets[field].label`) with a fallback to the raw field name. | ➖ |
| `clone` | when enabled (default), the source is deep-cloned into an independent product. When disabled, the source result is used by reference inside the modal - variant selection in the modal then mutates the source result tile. | `true` |
| `fetchProductData` | when enabled (default), the controller fetches full product data from the `/v1/products` endpoint. When disabled, the endpoint is not called and the modal renders whatever variants/attributes the source result already carries. | `true` |
| `imagesField` | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate resolving to more than one image renders as a slideshow instead of the single core image. | `['images', 'ss_images']` |

In Snap Templates the manager-level settings are `quickview.settings`, and controller-level settings are the feature's `settings.quickview` - which also means tabs can carry their own quickview settings via `tabs[].settings`:

```tsx
new SnapTemplates({
	// ...
	quickview: {
		targets: [{ component: 'QuickviewModal' }],
		settings: {
			displayFields: ['color', 'brand'],
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

In a standard Snap integration the same two levels are the manager's `config.settings` (shown above) and each controller config's `settings.quickview`.

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

Both containers render the [QuickviewLayout](https://athoscommerce.github.io/snap/reference-quickview-layout) organism, which arranges named **modules** via a `layout` prop - the same pattern as `AutocompleteLayout`. The theme selectors are `quickviewModal`, `quickviewSlideout` and `quickviewLayout`.

Available modules include `slideshow`, `calloutBadge` (or `calloutBadge.<tag>` for a custom badge tag), `variantSelections` (or a single `variantSelection.<field>`), `productDetail.<path>` (any product field by dot-path, e.g. `productDetail.mappings.core.name`), `button.add-to-cart`, `button.more-info`, `quantityPicker`, `productDetailTable` (driven by `displayFields`), `recommendation.<profile>` (a recommendation carousel seeded with the viewed product), the chat-only `button.similar` and `button.discuss` (rendered only when a chat controller opened the quickview - see [Quickview in Chat](#quickview-in-chat)), the `_` separator, and columns `c1`-`c4` which recurse into `column1`-`column4` configs.

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

See the [QuickviewLayout documentation](https://athoscommerce.github.io/snap/reference-quickview-layout) for the full module, prop, and lang reference.

### The `quickview` Event

A `quickview` event fires on the **source controller's** event manager after product data resolves and the store updates - `product` is the store's built `Product` (the clone about to render), so middleware can inspect or mutate it. Middleware is registered per controller like any other controller event:

```js
searchController.on('quickview', async ({ controller, product }, next) => {
	// inspect or mutate the quickview product
	await next();
});
```

Throwing `new Error('cancelled')` from a listener resets the store and aborts the open.

### Further Reading

- [QuickviewManager](https://athoscommerce.github.io/snap/reference-quickview-manager) - manager API, `show()` options, config precedence, events
