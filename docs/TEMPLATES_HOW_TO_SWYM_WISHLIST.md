## Using the Swym Wishlist Plugin

The **Swym Wishlist plugin** connects the Swym Wishlist Plus app to Snap results. After each search it registers the results in Swym's product data and initializes the wishlist buttons rendered in your result component through the Swym SDK, so they add, remove and show the added state exactly as the theme's own buttons do. It is configured under `plugins.common.swymWishlist` and can be used on every platform by setting `enabled: true`:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfig({
	config: {
		siteId: 'your-site-id',
		platform: 'shopify',
	},
	plugins: {
		common: {
			swymWishlist: {
				enabled: true,
			},
		},
	},
	components: {
		result: {
			WishlistResult: async () => (await import('./components/WishlistResult')).WishlistResult,
		},
	},
	theme: {
		extends: 'pike',
		globalResultComponent: 'WishlistResult',
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
});

new SnapTemplates(config);
```

In your result component, render the button with the attributes from `swymWishlistButtonProps`. It returns `undefined` when the result has no resolvable id or product URL.

```tsx
import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { swymWishlistButtonProps } from '@athoscommerce/snap-platforms/common';
import type { ResultProps } from '@athoscommerce/snap-preact/components';

export const WishlistResult = observer(({ result }: ResultProps) => {
	const core = result.display.mappings.core;
	const wishlistButton = swymWishlistButtonProps(result);
	return (
		<article>
			<h2>{core?.name}</h2>
			{wishlistButton && (
				<button type="button" {...wishlistButton}>
					<span className="swym-wishlist-cta">Add to Wishlist</span>
				</button>
			)}
		</article>
	);
});
```

The Swym Wishlist Plus app must be installed on the store so that the Swym SDK loads on the page. For how the plugin works, how product and variant ids are resolved, and platform notes, see the [Swym Wishlist plugin documentation](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/common/README.md#pluginswymwishlist).
