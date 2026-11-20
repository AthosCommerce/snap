# Quickview

> [!NOTE]
> This page covers Snap Templates. For a standard Snap integration, see [Quickview](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_QUICKVIEW.md) under Snap Integration.

Quickview lets shoppers preview a product - images, price, variant selection, add-to-cart - in a modal or slide-out panel without leaving the search results, autocomplete, or a recommendation carousel.

When a quickview opens, Snap fetches full product data (all variants) from the API `products` endpoint (`/v1/products`) using the result's `mappings.core.parentId`. Add-to-cart and tracking from inside the quickview go through the controller of the results it was opened from, so they behave like the result card's own buttons.

## Enabling Quickview

Quickview takes two additions: a `quickview` section, which injects the quickview component, and the `hideQuickviewButton: false` result option, which renders the trigger button on each result.

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

new SnapTemplates(validateTemplatesConfig({
	config: {
		siteId: 'REPLACE_WITH_YOUR_SITE_ID',
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
}));
```

`targets[].component` is either `'QuickviewModal'` or `'QuickviewSlideout'`. `targets[].selector` is optional and defaults to `'body'` - the component renders inside an injected `#athos-quickview` element appended to the selected element.

`hideQuickviewButton` (default `true`) controls the quickview button rendered over the result image - set it to `false` to show the button. It only renders when the image is not hidden. Because the `result` component is shared, enabling it on `result` enables it everywhere results render - search, autocomplete, and recommendations. Use a named selector (e.g. `'search results result'`) to scope where the button appears.

> [!IMPORTANT]
> The button only renders when the config has a `quickview` section. With `hideQuickviewButton: false` but no `quickview` section, no button is shown.

## Quickview Settings

The quickview behaviour is controlled by these settings:

| option | description | default value |
|---|---|:---:|
| `displayFields` | array of `{ field, label?, type? }` objects rendered as rows of the quickview's attribute table (order preserved), or a function receiving the quickview product and returning that array. `field` is a dot-path (e.g. `attributes.brand`) or a bare key resolved on `mappings.core`, then `attributes`. `label` defaults to the facet label from the API meta (`meta.facets[field].label`), then the raw field key. `type` sets how the value renders: `'text'` (default), `'html'`, `'price'`, `'rating'` or `'image'`. Attributes are opt-in - when omitted, no table renders, and fields with no value are skipped. | ➖ |
| `clone` | when enabled (default), the source is deep-cloned into an independent product. When disabled, the source result is used by reference inside the quickview - variant selection in the quickview then mutates the source result tile. | `true` |
| `fetchProductData` | when enabled (default), full product data is fetched from the `/v1/products` endpoint. When disabled, the endpoint is not called and the quickview renders whatever variants/attributes the source result already carries. | `true` |
| `imagesField` | field name or array of candidate field names (looked up on `mappings.core`, then `attributes`) holding a list of image URLs. The first candidate resolving to more than one image renders as a slideshow instead of the single core image. | `['images', 'ss_images']` |

Settings can be set at two levels: `quickview.settings` applies everywhere, and a feature's `settings.quickview` applies to quickviews opened from that feature's results. Tabs can carry their own quickview settings via `tabs[].settings`:

```tsx
new SnapTemplates(validateTemplatesConfig({
	// ...
	quickview: {
		targets: [{ component: 'QuickviewModal' }],
		settings: {
			displayFields: [{ field: 'color' }, { field: 'brand' }],
		},
	},
	search: {
		targets: [{ selector: '#athos-templates', component: 'Search' }],
		settings: {
			quickview: {
				displayFields: [{ field: 'color' }, { field: 'brand' }, { field: 'material' }, { field: 'vendor', label: 'Vendor' }],
			},
		},
	},
}));
```

## Modal or Slideout

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

## Customizing the Layout

Both containers render the [QuickviewLayout](https://github.com/athoscommerce/snap/blob/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout/readme.md) organism, which arranges named **modules** via a `layout` prop - the same pattern as `AutocompleteLayout`. Set `layout` and `column1`-`column4` on the container you target (`quickviewModal` or `quickviewSlideout`), which passes them down to `QuickviewLayout` - like `AutocompleteLayout`, `quickviewLayout` is not an override selector of its own. Every column needs a `width` (a CSS width or `'auto'`).

Available modules include `slideshow`, `calloutBadge` (or `calloutBadge.<tag>` for a custom badge tag), `variantSelections` (or a single `variantSelection.<field>`), `productDetail.<path>` (any product field by dot-path, e.g. `productDetail.mappings.core.name`), `button.add-to-cart`, `button.more-info`, `quantityPicker`, `productDetailTable` (driven by `displayFields`), `recommendation.<profile>` (a recommendation carousel seeded with the viewed product), the `_` separator, and columns `c1`-`c4` which recurse into `column1`-`column4` configs.

```tsx
theme: {
	extends: 'pike',
	overrides: {
		default: {
			quickviewModal: {
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
					width: 'auto',
				},
			},
		},
	},
}
```

Modules with nothing to show (no description, no variants, no displayed attributes) render nothing, so empty rows and columns collapse.

Button and dialog text are customizable through `translations` (see [Translations](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_HOW_TO_TRANSLATIONS.md)):

```tsx
translations: {
	EN: {
		quickviewLayout: {
			addToCartButton: { value: 'Add to Bag' },
			moreInfoButton: { value: 'View Full Details' },
		},
	},
},
```

See the [QuickviewLayout documentation](https://github.com/athoscommerce/snap/blob/main/packages/snap-preact/components/src/components/Organisms/QuickviewLayout/readme.md) for the full module, prop, and lang reference.
