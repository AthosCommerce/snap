# Category Pages 🗂️

> [!IMPORTANT]
> Category pages use the **same** `SearchController` and `SearchStore` as a standard search page. **Snap doesn't have a separate category controller**. The rest of this page covers how to build a category page by applying the category as a **Background Filter** in your search controller's config.

## What is a Category page
A category (or collection) page displays search results scoped to a specific category rather than a shopper-entered query — for example, a "Shirts" collection page showing every shirt in that category. 
>[!TIP]
>See [Search](https://athoscommerce.github.io/snap/snap-search) for the full set of available store properties and example components shared with category pages.

---
## Retrieving the category

Every storefront page that loads Snap includes a script tag context object — a small block of page-specific data the platform/theme injects before `bundle.js` loads. For a category page, this is typically where the shopper's active category or collection handle gets passed through.

```html
<script src="https://snapui.athoscommerce.io/[your_site_id]/bundle.js" id="athos-context">
	collection = {
		handle: 'shirts'
	};
</script>
```

This markup lives on the storefront page itself (or your local mockup file) — it isn't something you write inside your Snap project's `src/` files.

In your project, use `getContext` from `@athoscommerce/snap-toolbox` to read that variable back out.

```js
// src/index.js

import { getContext } from '@athoscommerce/snap-toolbox';

const context = getContext(['collection']);
```

With the category handle in hand, build a **background filter** object from it — this is what actually scopes the search request to that category.

```js
// src/index.js (continued)

const backgroundFilters = [];

if (context.collection?.handle) {
	backgroundFilters.push({
		field: 'collection_handle',
		value: context.collection.handle,
		type: 'value',
		background: true,
	});
}
```

>[!TIP]
>Request only the keys you need — e.g. `getContext(['collection'])` — to keep the payload lean and make it clear what a component depends on. Context isn't limited to category data, it's a common way to pass **shopper info**, **page type**, or other page-level variables into your controllers and components.

---
## Applying the filter

Assign the **background filter array** to **`config.globals.filters`** on the search controller. This ensures **every request** from this controller includes the category filter — and since `background: true` is set on each filter object, the filter **won't be displayed to the shopper** as an active, removable filter.

```js
// src/index.js (continued from above)

const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		search: [
			{
				config: {
					id: 'search',
					globals: {
						filters: backgroundFilters,
					},
				},
				targeters: [
					{
						selector: '#athos-content',
						component: async () => {
							return (await import('./components/Content/Content')).Content;
						},
					},
				],
			},
		],
	},
});
```

>[!TIP]
>`config.globals.filters` applies to **every** request that controller makes. It should only be used for filters that should always be active, as opposed to a shopper-selected filter that lives in the URL.

---

## Multiple background filters

Background filters aren't limited to category — the same pattern can restrict visibility of products to a user group, or combine category with another context value, by pushing an additional background filter object into the array for each field/value pair.

>[!TIP]
>We suggest keeping a single `backgroundFilters` array that collects every background filter rule for a controller, then assigning it once to `config.globals.filters` — this keeps every rule the controller applies in one visible place instead of scattered across multiple config edits.

See [Background Filters](https://athoscommerce.github.io/snap/snap-background-filters) for the full Background Filter Object reference.

---
## Troubleshooting FAQ ❓

**Q: My category page returns zero results even though the collection has products. Why?**
<br>
**A:** Confirm `field: 'collection_handle'` matches the actual attribute/facet field name configured for this site in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net) — the field name in this example is a placeholder, not a fixed Snap value, and needs to match your site's data.

**Q: `context.collection` is `undefined` in my controller. Why?**
<br>
**A:** Confirm the storefront platform/theme is actually injecting a `collection` key into the script tag context object on this page, and that the key requested in `getContext([...])` matches it exactly — see [Retrieving the category](#retrieving-the-category) above.
