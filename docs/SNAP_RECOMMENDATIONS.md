# Recommendations 🎯

>[!IMPORTANT]
>If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers.

>[!NOTE]
> While it is possible to construct recommendation controllers via the Snap configuration, it is recommended to utilize the [RecommendationInstantiator config](https://athoscommerce.github.io/snap/reference-snap-preact-instantiators#recommendationinstantiatorconfig) instead for integration of recommendations. The `RecommendationInstantiator` will only create recommendation controllers if the page contains recommendation profiles.

## Recommendation Types
There are three types of recommendations that Athos offers:

- Product Recommendations / Personalized Recommendations
- Bundle Recommendations
- Email Recommendations (documentation coming soon)

This guide will cover usage of the **Default templates** that are available in the Athos Search & Product Discovery Console. If you are looking to create a custom template, please refer to the [Custom Templates reference](https://athoscommerce.github.io/snap/reference-custom-recommendation-templates)

>[!TIP]
>See [Recommendations Controller reference](https://athoscommerce.github.io/snap/reference-controller-recommendation) for all available context variables, plus more on batching, ordering, deduplication, filtering, and examples.
---

## Product Recommendations / Personalized Recommendations

The Athos Search & Product Discovery Console contains a `Default` template available for standard profiles (non-bundle) that does not require the use of the Snapfu CLI to create a custom template. To use the `Default` template, the following instantiator config should be added to your `snap-preact` config.

```js
// src/index.js

import { Snap } from '@athoscommerce/snap-preact';

const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	instantiators: {
		recommendation: {
			components: {
				Default: async () => {
					return (await import('./components/Recommendations/Recs')).Recs;
				},
			},
		},
	},
});
```

>[!NOTE]
> Note that the component is not required to be named `Default`, however `instantiators.recommendation.component` must contain the `Default` key as seen in the example above.


The following example assumes a `recently-viewed` profile has been configured in the Athos Search & Product Discovery Console (ASD) with the `Default` template selected. The profile (specified via the `tag` property) will render inside the `.ss__recs__recently-viewed` element below the script block. While the target element can be placed anywhere on the page, it's recommended to group elements with their corresponding script blocks for easier integration management. The component configuration is handled within the [`RecommendationInstantiator`](https://athoscommerce.github.io/snap/reference-snap-preact-instantiators).

```html
<script type="athos/recommendations">
	profiles = [
		{
			tag: 'recently-viewed',
			selector: '.ss__recs__recently-viewed',
			options: {
				limit: 5
			}
		}
	];
</script>

<div class="ss__recs__recently-viewed"><!-- recommendations will render here --></div>
```

>[!TIP]
>For the full list of profile-level and global context variables (like `options.filters`, `options.dedupe`, `shopper.id`), see [Recommendation Context Variables](https://athoscommerce.github.io/snap/snap-recommendations-integration#recommendation-context-variables) on the Profile Setup page.

### Recommendation Component

<img src='/images/recs-default-example.png'/>

In this example, the `Recs` component is a wrapper around the `Recommendation` component from the `@athoscommerce/snap-preact/components` package. See [Components Preact > Recommendation](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Ftemplates-recommendation--default) for more details.

```tsx
// components/Recommendations/Recs.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'preact/hooks';
import { Recommendation } from '@athoscommerce/snap-preact/components';

import './Recs.scss';

export const Recs = observer((props) => {
	
	const controller = props.controller;
	const store = controller?.store;

	useEffect(() => {
		if (!controller.store.loaded && !controller.store.loading) {
			controller.search();
		}
	}, []);

	const parameters = store?.profile?.display?.templateParameters;

	return (
		store.results.length > 0 && (
			<Recommendation controller={controller} title={parameters?.title}/>
		)
	);
});
```
---

## Bundle Recommendations
The Athos Search & Product Discovery Console also contains a `Bundle` template available for bundle profiles, this template does not require the use of the Snapfu CLI to create a custom template. To use the `Bundle` template, another component mapping will need to be added to your instantiator config.

```js
// src/index.js

const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	instantiators: {
		recommendation: {
			components: {
				Default: async () => {
					return (await import('./components/Recommendations/Recs')).Recs;
				},
				Bundle: async () => {
					return (await import('./components/Recommendations/Bundled')).Bundled;
				},
			},
		},
	},
});
```

>[!NOTE]
> Note that the component is not required to be named `Bundle`, however `instantiators.recommendation.component` must contain the `Bundle` key as seen in the example above.

The following example assumes a `bundle` profile has been configured in the Athos Search & Product Discovery Console (ASD) with the `Bundle` template selected. The profile (specified via the `tag` property) will render inside the `.ss__recs__bundle` element below the script block. While the target element can be placed anywhere on the page, it's recommended to group elements with their corresponding script blocks for easier integration management. The component configuration is handled within the [`RecommendationInstantiator`](https://athoscommerce.github.io/snap/reference-snap-preact-instantiators). 

>[!IMPORTANT]
> The `products` global context variable is required for bundle recommendations to specify the sku of the currently viewed product.

```html
<script type="athos/recommendations">
	global: {
		products: ['product_sku_123'],
	};
	profiles = [
		{
			tag: 'bundle',
			selector: '.ss__recs__bundle',
			options: {
				limit: 5
			}
		}
	];
</script>

<div class="ss__recs__bundle"><!-- recommendations will render here --></div>
```

### Bundle Component

<img src='/images/recs-bundle-example.gif'/>

>[!TIP]
>Deselecting an item updates the subtotal and excludes it from "Add Selected" — this selection state is handled entirely by the `RecommendationBundle` component below.

The example `Bundled` component below uses the `RecommendationBundle` component imported from the snap component library. See [Components Preact > RecommendationBundle](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Ftemplates-recommendationbundle--default) for more details. 

```tsx
// components/Recommendations/Bundled.jsx

import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { RecommendationBundle } from '@athoscommerce/snap-preact/components';

import './Bundled.scss';

const openCart = () => {
	// open cart drawer or redirect to cart
};

export const Bundled = observer((props) => {
	const controller = props.controller;
	const store = controller?.store;

	useEffect(() => {
		if (!controller.store.loaded && !controller.store.loading) {
			controller.search();
		}
	}, []);

	const parameters = store?.profile?.display?.templateParameters;

	return (
		store.results.length > 0 && (
			<RecommendationBundle
				controller={controller}
				onAddToCart={async () => {
					// controller.addToCart is already awaited by RecommendationBundle
					openCart();
				}}
				title={parameters?.title}
			/>
		)
	);
});
```

---
## Troubleshooting FAQ ❓

**Q: My recommendation profile doesn't render anywhere on the page. Why?**
<br>
**A:** Confirm the `tag` in your script block's `profiles` array matches a profile actually configured in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net), and that `selector` matches an element present on the page — the `RecommendationInstantiator` only creates a controller when both a matching profile and a matching selector exist.

**Q: My Bundle recommendation profile returns no results. Why?**
<br>
**A:** Bundle recommendations require the `products` global context variable — set to the SKU(s) of the currently viewed product — in the script block's `globals`. Without it, the Bundle template has nothing to base recommendations on.

**Q: I have `options.dedupe` enabled but I'm still seeing the same product in two different recommendation carousels. Why?**
<br>
**A:** Deduping only applies within a single batch — profiles grouped in the *same* `<script type="athos/recommendations">` block. Profiles split across separate script blocks are fetched as separate batches and won't dedupe against each other.

**Q: Recommendations aren't personalized to the shopper. Why?**
<br>
**A:** Confirm `shopper.id` is set — either globally via the page's script tag context, or passed directly in the recommendations script block's `globals` — personalization requires a shopper identifier from one of those two places.