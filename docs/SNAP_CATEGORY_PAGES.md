# Category Pages

A category (or collection) page displays search results scoped to a specific category rather than a shopper-entered query — for example, a "Shirts" collection page showing every shirt in that category. Snap does not have a separate category controller; a category page is built using the same [Search](https://athoscommerce.github.io/snap/snap-search) controller and components as a search results page, with the category applied as a [Background Filter](https://athoscommerce.github.io/snap/snap-background-filters) so the shopper sees the filtered results without an active filter that could be removed.

## Retrieving the category

The category is typically provided to the page as a context variable via the script tag context object. See [Context Variables](https://athoscommerce.github.io/snap/build-deploy-integration#context-variables) for how this is defined on the storefront.

```html
<script src="https://snapui.athoscommerce.io/[your_site_id]/bundle.js" id="athos-context">
	collection = {
		handle: 'shirts'
	};
</script>
```

Use `getContext` from `@athoscommerce/snap-toolbox` to read the variable, then build a background filter object from it.

```js
// src/index.js

import { getContext } from '@athoscommerce/snap-toolbox';

const context = getContext(['collection']);
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

## Applying the filter

Assign the background filter array to `config.globals.filters` on the search controller. This ensures every request from this controller includes the category filter, and since `background: true` is set on each filter object, the filter will not be displayed to the shopper as an active/removable filter.

```js
// src/index.js

import { Snap } from '@athoscommerce/snap-preact';
import { getContext } from '@athoscommerce/snap-toolbox';

const context = getContext(['collection']);
const backgroundFilters = [];

if (context.collection?.handle) {
	backgroundFilters.push({
		field: 'collection_handle',
		value: context.collection.handle,
		type: 'value',
		background: true,
	});
}

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

Rendering the `Content` component and reading `store.results`, `store.facets`, etc. is identical to a search results page — see [Search](https://athoscommerce.github.io/snap/snap-search) for the full set of available store properties and example components.

## Multiple background filters

Background filters aren't limited to category — the same pattern can restrict visibility of products to a user group, or combine category with another context value, by pushing an additional background filter object into the array for each field/value pair.

See [Background Filters](https://athoscommerce.github.io/snap/snap-background-filters) for the full Background Filter Object reference.
