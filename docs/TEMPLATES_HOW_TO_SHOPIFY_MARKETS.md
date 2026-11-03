## Using the Shopify Markets Plugin

The **Shopify Markets plugin** fetches region-specific product pricing from the Shopify Storefront API for storefronts using Shopify Markets, and writes it onto the results (`result.mappings.core.price` and `msrp`). It only fetches when the shopper's country (`Shopify.country`) differs from the plugin's `baseCountry` (default `'US'`); otherwise the indexed prices are kept.
It localizes the price *values*; displaying them correctly also needs the matching currency locale, so configuring `markets` with a non-empty `token` automatically enables the [Shopify Currency plugin](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_HOW_TO_SHOPIFY_CURRENCY.md), unless `plugins.shopify.currency.enabled` is `false`. The plugin is not registered at all without a `token`.

Register the plugin in your SnapTemplates configuration:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
	},
	plugins: {
		shopify: {
			markets: {
				token: 'your-storefront-access-token',
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

While Markets is active, the built-in `Result` and `OverlayResult` components wait for `result.state.priceFetched` before rendering prices. In a custom result component, check the `priceFetched` flag yourself before rendering prices (only while Markets is configured - without it the flag is never set). The plugin also sets it to `true` when no fetch is needed or the request fails, so the indexed prices are shown in those cases.

```tsx
import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { Price } from '@athoscommerce/snap-preact/components';
import type { ResultProps } from '@athoscommerce/snap-preact/components';

export const CustomResult = observer(({ result, treePath }: ResultProps) => {
	const core = result.display.mappings.core;
	const { priceFetched } = result.state;
	return (
		<article>
			<h2>{core?.name}</h2>
			{priceFetched && (
				<Price value={core?.price} treePath={treePath} />
			)}
		</article>
	);
});
```

If you need a custom formatter, you can still set `theme.overrides.default.price.format` in your template config; it takes precedence over the currency locale. When `format` is set, the `Price` component renders only the string it returns - the locale's `symbol` and `showCode` are not applied.
												
For detailed configuration options, troubleshooting, and advanced usage, see the [Shopify Markets plugin documentation](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/shopify/README.md#pluginshopifymarkets).
