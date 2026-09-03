# Profile Setup 🧩

>[!WARNING]
> Changes to the recommendation integration scripts were made in Snap `v0.60.0`. Legacy Recommendation Integrations docs can still be found [`here`](https://athoscommerce.github.io/snap/snap-recommendations-legacy)

## Profile Prerequisites

Profiles must be setup in the Athos Search & Product Discovery Console (ASD) and have associated Snap templates selected. The template selected contains a `component` that will be used to render the recommendations profile. This component must be configured in your `RecommendationInstantiator`.

>[!TIP]
> See [Recommendations](https://athoscommerce.github.io/snap/snap-recommendations) for setting up the Default/Bundle templates before continuing here.
---
## Installation

Recommendations are added to the page by placing a **recommendations script block** — a `<script type="athos/recommendations">` tag containing a `profiles` array, one entry per recommendation profile you want rendered on the page.

Each profile entry needs:
- **`tag`** — the profile name configured in ASD
- **`selector`** — the CSS selector of the element to render into
- **`options`** *(optional)* — additional per-profile settings

>[!NOTE]
> A matching target element — typically a `<div>` — must also exist on the page for each profile's `selector` to find.

## Script Blocks

Recommendations script blocks can be placed **anywhere** on the page and will automatically target and batch requests for all profiles specified in the block.

- If this is the **first profile** you are adding to the storefront, you will need to place the script block in a common location that is likely to be present on all pages that contain recommendations. For example, within the `<head>` tag.

- Or **Additional profiles** being added should be appended to the existing script block in the `profiles` array and can be conditionally rendered (via templating logic) based on the page type. However if the page does not contain any elements matching any of the profile's `selector`, the profile will also not be rendered so alternatively the `div` element can be conditionally rendered instead. We do not recommend creating a new script block for each profile, as this will result in multiple API requests and products will not be deduplicated across profiles. Batching profiles is important for deduplication of recommended products across profiles on the same page (see [Deduping](#deduping)).

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
```

```html
<div class="ss__recs__recently-viewed"><!-- recommendations will render here --></div>
```

In this example the `recently-viewed` profile `tag` is set to render inside the `.ss__recs__recently-viewed` element.

> [!IMPORTANT]
> Each profile entry creates a single controller and API request, regardless of how many DOM elements match its `selector`. If multiple elements match, they all render using the same shared controller and recommendation data. To render different recommendation data in different locations, use separate profile entries.
---
## Recommendation Context Variables
Context variables are set within the script blocks and can be used to set either global or per profile (profile specific) functionality. Variables are used to alter the results displayed by our recommendations and may be required depending on the profile placements in use.

Global context variables are set via a `globals` object in the recommendations script block, alongside `profiles`:

```html
<script type="athos/recommendations">
	globals = {
		products: ['product_sku_123'],
		shopper: {
			id: 'buyer@shopper.com'
		}
	};
	profiles = [
		{
			tag: 'recently-viewed',
			selector: '.ss__recs__recently-viewed'
		}
	];
</script>
```

### Global Variables
| Option | Value | Placement | Description | Required
|---|---|:---:|---|:---:|
| products | array of SKU strings | product detail page | SKU value(s) to identify the current product(s) being viewed — can be omitted on placements other than a product detail page | ✔️ |
| blockedItems | array of strings | all | SKU values to identify which products to exclude from the response |   |
| filters | array of filters | all | optional recommendation filters to apply to ALL profiles in the batch |   |
| cart | array (or function that returns an array) of current cart skus | all | optional method of setting cart contents |   |
| shopper.id | unique shopper identifier | all | required for personalization functionality — any unique identifier for the shopper, not necessarily an email |   |

### Profile Specific Variables
| Option | Value | Placement | Description | Required
|---|---|:---:|---|:---:|
| tag | string | all | profile tag name to use | ✔️ |
| selector | string | all | CSS selector to render component inside | ✔️ |
| options.siteId | global siteId overwrite | all | optional global siteId overwrite |   |
| options.categories | array of category path strings | all | optional category identifiers used in category trending recommendation profiles |   |
| options.brands | array of brand strings | all | optional brand identifiers used in brand trending recommendation profiles |   |
| options.blockedItems | array of strings | all | SKU values to identify which products to exclude from the profile response |   |
| options.branch | template branch overwrite | all | optional branch overwrite for recommendations template (advanced usage) |   |
| options.dedupe | boolean (default: `true`) | all | dedupe products across all profiles in the batch |   |
| options.query | string | dynamic custom | query to search |   |
| options.filters | array of filters | all | optional recommendation filters, scoped to this profile only |   |
| options.realtime | boolean | all | optional update recommendations if cart contents change (requires [cart attribute tracking](https://github.com/athoscommerce/snap/tree/main/docs/SNAP_TRACKING.md#cart-attribute-tracking)) |   |
| options.limit | number (default: 20, max: 20) | all | optional maximum number of results to display, can also be set globally via RecommendationController config globals |   |

>[!TIP]
>Global `filters` (above) and profile-level `options.filters` (above) are two different things despite the shared name — global `filters` apply to every profile in the batch, while `options.filters` scope to just that one profile.
---

## Batching and Ordering
Each "athos/recommendations" script block groups multiple recommendation profiles into a single API request, known as a batch. By default, the script tag fetches recommendations for all profiles with a matching selector in one batched request. The order of profiles in the array determines their priority within the batch.

The main page batch — order here determines priority for deduping:

```html
<script type="athos/recommendations">
	profiles = [
		{
			tag: 'customers-also-bought',
			selector: '.ss__recs__crosssell'
		},
		{
			tag: 'customers-also-viewed',
			selector: '.ss__recs__similar'
		}
	];
</script>
```

While batching all profiles together is generally the most efficient approach, there may be cases where separate batching is preferred. For instance, recommendations for a mini cart (side cart) might not require de-duplication with other recommendations. 

```html
<script type="athos/recommendations">
	profiles = [
		{
			tag: 'mini-cart-recs',
			selector: '.ss__recs__minicart'
		}
	];
</script>
```
>[!TIP]
>You can disable de-duplication for a specific profile by setting `dedupe: false` in its options, or create a separate batch by using an additional script tag.
---

## Deduping

Deduping prevents the same product from appearing in multiple recommendation profiles within a single batch. This is useful when you have several recommendation profiles on a page and want to ensure a diverse range of products is shown to the shopper.

Here's how deduping works:

1. By default, deduping is enabled for all profiles in a batch (`options.dedupe: true`).
2. The order of profiles in the array determines their priority for deduping.
3. When a product is returned for a higher-priority profile, it becomes unavailable for lower-priority profiles in the same batch.

For example, if you have three profiles in this order: "Customers Also Bought", "Similar Products", and "You May Also Like", and a product is returned for "Customers Also Bought", it won't appear in "Similar Products" or "You May Also Like".

>[!NOTE]
> You can disable deduping for specific profiles by setting `options.dedupe: false`. This is useful for profiles where you want to ensure certain products always appear, regardless of their presence in other recommendations.

Below is an example that demonstrates deduping:

```html
<script type="athos/recommendations">
	globals = {
		products: ['product123']
	};
	profiles = [
		{
			tag: 'customers-also-bought',
			selector: '.ss__recs__crosssell',
			options: {
				limit: 5
			}
		},
		{
			tag: 'customers-also-viewed',
			selector: '.ss__recs__similar'
		},
		// same batch, but dedupe false
		{
			tag: 'customers-also-like',
			selector: '.ss__recs__alsoliked',
			options: {
				dedupe: false
			}
		}
	];
</script>
```

## Additional Examples

Each example below assumes a Snap `bundle.js` script exists on the page, already configured with a [`RecommendationInstantiator`](https://athoscommerce.github.io/snap/reference-snap-preact-instantiators).

### Product Detail Page

A typical "similar" profile displays products similar to the product passed in via the `products` global context variable. This assumes a `similar` profile has been setup in the Athos Search & Product Discovery Console (ASD).

```html
<script type="athos/recommendations">
	globals = {
		products: ['product123']
	};
	profiles = [
		{
			tag: 'customers-also-viewed',
			selector: '.ss__recs__similar'
		}
	];
</script>
```

### Cross-Sell Without Tracking

If tracking scripts are not in place, `cross-sell` profiles may require the cart contents to be provided.

```html
<script type="athos/recommendations">
	globals = {
		cart: ['product123']
	};
	profiles = [
		{
			tag: 'customers-also-bought',
			selector: '.ss__recs__crosssell'
		}
	];
</script>
```

### Personalization Without Bundle Context

If the shopper identifier is not being captured by the `bundle.js` context, it must be provided for proper personalization.

```html
<script type="athos/recommendations">
	globals = {
		shopper: {
			id: 'buyer@shopper.com'
		}
	};
	profiles = [
		{
			tag: 'view-cart',
			selector: '.ss__recs__cart'
		}
	];
</script>
```

### Filters
The example below filters the recommendations for products matching field `color` with a value `blue` and `red`, as well as a field `price` with a range from `0` to `20`.

```html
<script type="athos/recommendations">
	profiles = [
		{
			tag: 'customers-also-bought',
			selector: '.ss__recs__crosssell',
			options: {
				filters: [
					{
						type: 'value',
						field: 'color',
						value: 'blue'
					},
					{
						type: 'value',
						field: 'color',
						value: 'red'
					},
					{
						type: 'range',
						field: 'price',
						value: { low: 0, high: 20 }
					}
				]
			}
		}
	];
</script>
```

---
## Troubleshooting FAQ ❓

**Q: I added a new profile to an existing batch, but it's not being deduped against the others. Why?**
<br>
**A:** Confirm the new profile is appended to the same `profiles` array, not placed in a separate `<script type="athos/recommendations">` tag — separate script tags create separate batches, which never dedupe against each other.

**Q: I set `options.limit: 50` but I'm still only getting 20 results. Why?**
<br>
**A:** `options.limit` caps at 20 within the script block. To display more, set the limit globally via the RecommendationController config's `globals` instead.

**Q: A filter is excluding products from a profile I never applied a filter to. Why?**
<br>
**A:** You likely set a top-level `filters` global instead of a profile-level `options.filters` — global `filters` apply to every profile in the batch, not just one.

**Q: I set `shopper.id` but personalization still isn't working. Why?**
<br>
**A:** Confirm `shopper.id` is set inside the script block's top-level `globals`, not inside a profile's `options` — it's a global-only context variable and has no effect if scoped to a single profile.