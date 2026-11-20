# Background Filters

> [!NOTE]
> This page covers Snap Templates. For a standard Snap integration, see [Background Filters](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BACKGROUND_FILTERS.md) under Snap Integration.

Background filters refine results without showing the filter to the shopper as an active, removable filter. They are mainly used for category pages, and also for restricting which products a group of shoppers can see.

In Snap Templates, background filters are applied by plugins, so most integrations need no code - only the right variables in the page's script context.

## Category Pages

On category pages, the platform plugin for your `config.platform` builds the category background filter from the script context automatically:

| Platform | Context variables | Filters applied | Controllers |
| --- | --- | --- | --- |
| `shopify` | `collection` (`handle`, `name`) and optional `tags` | collection (`collection_handle`), plus tags, vendor and product type where they apply | search |
| `bigCommerce` | `category` (`path`) or `brand` (`name`) | category (`categories_hierarchy`) or brand (`brand`) | search |
| `magento2` | `category` (`path`) | category (`category_hierarchy`) on search, and a product `visibility` filter | search and autocomplete |

The platform plugins are enabled by default. Each one's `fieldNames` option changes the field names used, if your catalog uses different ones - see the [Shopify](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/shopify/README.md#pluginbackgroundfilters), [BigCommerce](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/bigcommerce/README.md#pluginbackgroundfilters) and [Magento2](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/magento2/README.md#pluginbackgroundfilters) plugin documentation for the context each expects.

For example, a Shopify collection page only needs the collection in its script context:

```html
<script src="https://snapui.athoscommerce.io/REPLACE_WITH_YOUR_SITE_ID/bundle.js" id="athos-context">
	collection = {
		name: 'Shirts',
		handle: 'shirts',
	};
</script>
```

## Custom Background Filters

For any other background filter - another field, a user group, or a platform without a plugin - use the common `backgroundFilters` plugin. It is enabled by default and applies its filters to every search, autocomplete and recommendation controller, unless a filter sets `controllerTypes` or `controllerIds`:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

new SnapTemplates(validateTemplatesConfig({
	config: {
		siteId: 'REPLACE_WITH_YOUR_SITE_ID',
	},
	theme: {
		extends: 'pike',
	},
	plugins: {
		common: {
			backgroundFilters: {
				filters: [
					{
						type: 'value',
						field: 'in_stock',
						value: 1,
					},
					{
						type: 'range',
						field: 'price',
						value: { low: 10, high: 200 },
						controllerTypes: ['search'],
					},
				],
			},
		},
	},
	search: {
		targets: [{ selector: '#athos-templates', component: 'Search' }],
	},
}));
```

| Option | Description |
| --- | --- |
| `filters[].type` | `'value'` or `'range'` |
| `filters[].field` | Field name to filter on |
| `filters[].value` | A string or number for `'value'` filters, or `{ low, high }` for `'range'` filters |
| `filters[].controllerTypes` | Only apply the filter to these controller types: `search`, `autocomplete`, `recommendation` |
| `filters[].controllerIds` | Only apply the filter to these controller ids (strings or regular expressions) |

The same plugin can also be configured on a single feature (`search.plugins.common.backgroundFilters`, and likewise for `autocomplete` and `recommendation`), and its filters are added to the top-level ones.

Filters that depend on the page - for example the logged-in shopper's group - can be set in the script context instead, with the `backgroundFilters` variable:

```html
<script src="https://snapui.athoscommerce.io/REPLACE_WITH_YOUR_SITE_ID/bundle.js" id="athos-context">
	backgroundFilters = [
		{
			type: 'value',
			field: 'customer_group',
			value: 'wholesale',
		},
	];
</script>
```

See the [backgroundFilters plugin documentation](https://github.com/athoscommerce/snap/blob/main/packages/snap-platforms/common/README.md#pluginbackgroundfilters) for the full reference.

> [!NOTE]
> Foreground filters - filters pre-applied to the URL that the shopper can see and remove - are not available in Snap Templates. They need a standard Snap integration (see [Foreground Filters](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_FOREGROUND_FILTERS.md)).
