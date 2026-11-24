# Variants

> [!NOTE]
> This page covers Snap Templates. For a standard Snap integration, see [Variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md) under Snap Integration.

Product variants represent different versions of the same base product - such as sizes, colors or other options - so shoppers can switch between them directly from search, category and recommendation results.

Variants are configured in the [Athos Search & Product Discovery Console (ASD)](https://console.athoscommerce.net). Once they are, the API returns variant data on each result and Snap Templates renders variant selections on the result cards automatically - no configuration is required. The configuration on this page is only needed to change how selections look or behave.

## Displaying Variant Selections

The default `result` component renders one `variantSelection` per variant option (for example color and size) below the price. Selections show in search and recommendation results, and are hidden in the autocomplete templates by the default theme.

Selecting a value updates the result card - its image, price and other details switch to the selected variant.

Use theme overrides to hide the selections or change how they render. `variantSelection` takes the option field name after a dot to target a single option:

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
				// hide selections on results in the carousel recommendation template only
				'recommendation result': {
					hideVariantSelections: true,
				},
				// render the color option as swatches - 'dropdown', 'swatches' or 'list'
				'variantSelection.color': {
					type: 'swatches',
				},
			},
		},
	},
	search: {
		targets: [{ selector: '#athos-templates', component: 'Search' }],
	},
}));
```

## Variant Settings

Variant behaviour is configured per feature under `settings.variants`: `search.settings.variants`, `autocomplete.settings.variants` and `recommendation.settings.variants`. Search tabs can override them with `tabs[].settings.variants`.

| Option | Description | Default |
| :--- | :--- | :---: |
| `options` | Per option field settings, keyed by the option field name (see below) | ➖ |
| `showDisabledSelectionValues` | Show option values whose variants are all out of stock (disabled) instead of hiding them | `false` |
| `autoSelect` | Select a variant for each result when variants load - the `preSelected` values, or the first available value of each option. Always enabled for bundle recommendations so a selection exists for add to cart | `false` |
| `realtime.enabled` | Sync selections with the variant selectors on the page (see [Realtime Variants](#realtime-variants)) | ➖ |
| `realtime.filters` | Limit which results realtime updates - `'first'` and/or `'unaltered'` | ➖ |

Each entry in `options` accepts:

| Property | Description |
| :--- | :--- |
| `label` | Custom display label for the option field (e.g. "color" → "Colour") |
| `preSelected` | Array of option values to select by default (e.g. `['red', 'blue']`) |
| `thumbnailBackgroundImages` | When `true`, uses the variant thumbnail images as option background images |
| `mappings` | Object of value-specific overrides, keyed by option value |
| `mappings[optionValue].label` | Override display label for a specific option value |
| `mappings[optionValue].background` | Override background color for a specific option value |
| `mappings[optionValue].backgroundImageUrl` | Override background image URL for a specific option value |

```tsx
new SnapTemplates(validateTemplatesConfig({
	// ...
	search: {
		targets: [{ selector: '#athos-templates', component: 'Search' }],
		settings: {
			variants: {
				showDisabledSelectionValues: true,
				options: {
					color: {
						label: 'Colour',
						preSelected: ['red'],
						mappings: {
							red: {
								label: 'Cherry',
							},
							blue: {
								label: 'Sky',
								background: 'teal',
							},
						},
					},
				},
			},
		},
	},
}));
```

## Realtime Variants

Realtime variants keep recommendation results in sync with the variant the shopper selects on the product page - for example, a bundle recommendation that switches its seed product to the selected color.

1. Enable it in the recommendation settings:

```tsx
new SnapTemplates(validateTemplatesConfig({
	// ...
	recommendation: {
		settings: {
			variants: {
				realtime: {
					enabled: true,
					filters: ['first'],
				},
			},
		},
	},
}));
```

`filters` limits which results are updated:

- `first` - updates only the first product in the results (the seed product of a bundle recommendation)
- `unaltered` - updates only products whose variant the shopper hasn't changed on the current page

> [!NOTE]
> `recommendation.settings.realtime` (a boolean) is a different setting - it re-runs recommendations when the cart changes.

2. On the product page, add these attributes to the clickable variant selector elements:

- `ss-variant-option="${field}:${value}"` on each option element (e.g. `"Color:Blue"`)
- `ss-variant-option-selected` on the currently selected options

```html
<div class="option-selectors">
	<div class="option-selector-fieldset">
		<a ss-variant-option="Color:Night" ss-variant-option-selected href="/products/hightide-crew-night">Night</a>
		<a ss-variant-option="Color:Cornflower" href="/products/hightide-crew-cornflower">Cornflower</a>
	</div>
	<div class="option-selector-fieldset">
		<label ss-variant-option="Size:S" ss-variant-option-selected>S</label>
		<label ss-variant-option="Size:M">M</label>
	</div>
</div>
```

## Updating Variant Data

Variant data can be changed after it loads - for example, to add inventory or pricing from another source - with `result.variants.update()`. In Snap Templates this needs a custom plugin, so it is only available in an [unlocked configuration](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#unlocked-configuration). The plugin receives each controller and can update its results after every response:

```tsx
import { SnapTemplates, validateTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';
import type { AbstractController } from '@athoscommerce/snap-controller';

new SnapTemplates(validateTemplatesConfigUnlocked({
	unlocked: true,
	config: {
		siteId: 'REPLACE_WITH_YOUR_SITE_ID',
	},
	// ...
	search: {
		targets: [{ selector: '#athos-templates', component: 'Search' }],
		plugins: {
			custom: {
				updateVariants: {
					function: (controller: AbstractController) => {
						controller.on('afterStore', async (_, next) => {
							// update each result's variant data here, e.g. result.variants?.update(newVariantData)
							await next();
						});
					},
				},
			},
		},
	},
}));
```

See the standard Snap [Variants](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_VARIANTS.md#updating-variant-data) page for the shape `update()` expects.
