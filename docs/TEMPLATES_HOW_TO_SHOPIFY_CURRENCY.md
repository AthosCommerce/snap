## Using the Shopify Currency Plugin

The **Shopify Currency plugin** takes the storefront's active currency (`Shopify.currency.active`) and applies the matching built-in currency locale, so the `Price` component's symbol, symbol position, decimal places and separators follow the market the shopper is browsing in. If `Shopify.currency.active` is missing or not a [supported currency](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#supported-currencies), the plugin logs a warning and keeps `config.currency`. It is the display-side companion to the Markets plugin, which localizes the price values themselves.

Configuring the Markets plugin (with a non-empty `token`) enables this one automatically, since the two are halves of the same feature — Markets converts the price values, this plugin makes the display match them. Enabling it on its own is only correct when something else is converting prices; on a multi-currency storefront with no conversion it would label base-currency amounts with the shopper's market symbol. To use it standalone, or to opt back out alongside Markets, set `enabled` explicitly:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
		currency: 'USD', // applied until the plugin resolves the storefront currency, and kept if it can't
	},
	plugins: {
		shopify: {
			currency: {
				enabled: true,
			},
		},
	},
	theme: {
		extends: 'pike',
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
});

new SnapTemplates(config);
```

No currency table is needed per site: the currency locales for the [supported currencies](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#supported-currencies) (ISO 4217 codes, a list intended to match the currencies Shopify supports) ship with Snap Templates. Site specific adjustments still go through `theme.overrides.default.price`, which is applied on top of the currency locale, or through top-level [`currencies`](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#per-currency-overrides) for a single currency.

Each locale sets the `symbol` for that currency, plus `decimalPlaces`, `thousandsSeparator`, `decimalSeparator` and `symbolAfter` where they differ from the `Price` defaults (`2`, `','`, `'.'`, `false`). The active currency's ISO code is also passed to the `Price` component's `code` prop. To display that code after the amount (e.g. `$1,099.99 USD`, similar to Shopify's `money_with_currency_format`), set `theme.overrides.default.price.showCode: true`. `showCode` has no effect when a `format` function is set.

The plugin does not watch for currency changes: it reads `Shopify.currency.active` once, when the controllers are created, so a currency change made by a selector that reloads the page is picked up on the next load. The display currency can also be changed at any time with `window.athos.templates.setCurrency('EUR')` - this changes formatting only, not the price values.

For detailed configuration options, see the [Shopify Currency plugin documentation](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/shopify/README.md#pluginshopifycurrency).
