# Foreground Filters 🚦

> [!NOTE]
> Foreground filters are only usable with a `SearchController`.

**Foreground filters** pre-apply a filter on page load. Unlike a [Background Filter](https://athoscommerce.github.io/snap/snap-background-filters), a foreground filter is applied to the URL and shows up as a normal, removable filter — the shopper can see it and clear it just like any filter they'd select themselves. Foreground filtering is accomplished by setting the **initial `UrlManager` state**; this can be used for setting various states, but only filtering will be covered in this document.

>[!TIP]
>Need the filter to be invisible and non-removable instead (e.g. a category page)? Use a [Background Filter](https://athoscommerce.github.io/snap/snap-background-filters#background-filter-object) instead.

## Foreground Filter Configuration

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `initial.settings` | Object | ➖ | - | Global configuration settings for initial state |
| `initial.settings.ignoreParameters` | string[] | ➖ | `['query', 'tag', 'fallbackQuery']` | Parameters to ignore when determining whether to apply initial state |
| `initial.settings.useDefaultIgnoreParameters` | boolean | ➖ | `true` | Whether to use the default ignore parameters list |
| `initial.parameters` | Object | ✔️ | - | UrlManager state parameters to set initially |
| `initial.parameters.filter` | Object | ➖ | - | Filter state configuration |
| `initial.parameters.sort` | Object | ➖ | - | Sort state configuration |
| `initial.parameters.page` | Object | ➖ | - | Page state configuration |
| `initial.parameters.pageSize` | Object | ➖ | - | Page size state configuration |
| `initial.parameters.[custom]` | Object | ➖ | - | Any custom UrlManager state parameter |
| `initial.parameters.[param].state` | Object | ✔️ | - | The actual state values to set for the parameter |
| `initial.parameters.[param].useGlobalIgnoreParameters` | boolean | ➖ | `true` | Whether to use global ignore parameters for this parameter |
| `initial.parameters.[param].action` | 'merge' \| 'set' | ➖ | `'merge'` | How to handle existing state values ('merge' = merge with existing, 'set' = replace completely) |
| `initial.parameters.[param].ignoreParameters` | string[] | ➖ | - | Individual ignore parameters for this specific parameter |

---
## Basic Example

In the simplified example below, a foreground filter is used to pre-apply a filter for the `on_sale` field.

```js
const config = {
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		search: [
			{
				url: {
					initial: {
						parameters: {
							filter: {
								state: {
									on_sale: ['yes'],
								}
							},
						},
					}
				},
				config: {
					id: 'search',
				},
			},
		],
	},
};

const snap = new Snap(config);
```


The `initial.parameters` object is keyed by **`UrlManager` state parameters** - such as filter, sort, page, and pageSize. Any valid `UrlManager` state parameters are available for usage here, even custom parameters; however, filter is the most likely to be used here.

---
## Ignoring Existing Parameters

There is also an optional `ignoreParameters` param you can set on the `initial.settings` object - this allows for specifying additional UrlManager state parameters to be added to the ignore list. In the example below, the `initial.state` filter `on_sale:yes` will be set even if there are other `filter` params present in the UrlManager state. The default values in `ignoreParameters` are `query`, `tag`, and `fallbackQuery`.

>[!NOTE]
>`ignoreParameters` determines whether or not to apply the initial state at all - if the UrlManager state contains any states that are **not** being ignored, the initial state will not be applied.

```js
const config = {
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		search: [
			{
				url: {
					initial: {
						settings: {
							ignoreParameters: ['filter'],
						},
						parameters: {
							filter: {
								state: {
									on_sale: ['yes'],
								}
							},
						},
					}
				},
				config: {
					id: 'search',
				},
			},
		],
	},
};

const snap = new Snap(config);
```

---
## Advanced Configuration
Additional advanced configuration is available for special use cases. If you do not wish to use the default `ignoreParameters` you can specify as much using `initial.settings.useDefaultIgnoreParameters`, and setting it to `false`.

More configuration can be made within each `initial.parameter` object:
- Specify individual `ignoreParameters` for more control over when to apply each individual initial state
- Opt out of the 'global' `ignoreParameters` settings specified in `initial.settings` via `useGlobalIgnoreParameters`
- Replace existing state values instead of merging them (the default) via the `action` config - supports `merge` or `set`

Example using advanced configurations shown below:

```js
const config = {
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		search: [
			{
				url: {
					initial: {
						settings: {
							ignoreParameters: ['query', 'tag', 'filter'],
							useDefaultIgnoreParameters: false,
						},
						parameters: {
							filter: {
								useGlobalIgnoreParameters: true,
								action: 'set',
								state: {
									on_sale: ['yes'],
								}
							},
						},
					}
				},
				config: {
					id: 'search',
				},
			},
		],
	},
};

const snap = new Snap(config);
```

---
## Troubleshooting FAQ ❓

**Q: My initial filter isn't being applied on page load. Why?**
<br>
**A:** Confirm the UrlManager state doesn't already contain a non-ignored parameter - the presence of anything not in `ignoreParameters` (default: `query`, `tag`, `fallbackQuery`) will block the initial state from applying entirely. Also confirm the filter is set under `url.initial.parameters`, not `config.globals.filters` (that's for [Background Filters](https://athoscommerce.github.io/snap/snap-background-filters)).

**Q: My foreground filter is being wiped out when I navigate with an existing `filter` param in the URL. Why?**
<br>
**A:** This is expected unless you account for it - `filter` isn't in the default `ignoreParameters` list, so an existing filter param in the URL will prevent the initial state from applying. Add `'filter'` to `ignoreParameters` if you want the initial filter to apply regardless.

**Q: I set `action: 'set'` but my other filter state is still merging in instead of being replaced. Why?**
<br>
**A:** Confirm `action` is set on the specific `initial.parameters.[param]` object (e.g. `initial.parameters.filter.action`), not on `initial.settings` - `action` is a per-parameter configuration, not a global one.
