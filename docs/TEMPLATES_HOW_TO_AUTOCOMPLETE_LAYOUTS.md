## Customizing Autocomplete Layouts

Snap Templates ships three autocomplete variants — `AutocompleteFixed`, `AutocompleteModal`, and `AutocompleteSlideout`. All of them use the `AutocompleteLayout` component under the hood, whose `layout` prop controls which sections appear and how they are arranged. The `results` sub-component exposes `columns` and `rows` to control the product grid inside the dropdown.

### How the `layout` Prop Works

The `layout` prop on an autocomplete template component accepts either a **2-D array of module names** (same row/column semantics as the Search toolbar) or a **prebuilt layout string**. Each row holds either column tokens (`c1`–`c4`) or module names, not a mix of both.

#### Prebuilt Layouts

Instead of constructing a custom module array, you can pass one of the following string values:

| Prebuilt | Expands To | Description |
|---|---|---|
| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list, no-results message and see-more button — no product results grid and no merchandising banners |
| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Single column: terms, then results, then the see-more button |
| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (with the default columns: terms + results, no facets) |
| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (with the default columns: terms, facets, results) |

A prebuilt string does slightly more than its expansion: `'terms'` and `'mobile'` also default the term lists to a horizontal layout (a theme's `terms` `vertical` or `termsList` `verticalOptions` setting, such as pike's, takes precedence), `'terms'` turns off the no-results recommendations, and each string adds an `ss__autocomplete--<name>` class (for example `ss__autocomplete--mobile`) to the layout.

```tsx
// Use a prebuilt layout as a simple string
autocompleteFixed: {
    layout: 'terms',
}
```

Because `'terms'` contains no `content` or `facets` module, it renders none of the merchandising banners, so the `layout-banners` lint rule reports this override as an error. Use it only when dropping the banners is intended.

> **Note:** Prebuilt layout strings are only valid as the top-level `layout` value. They cannot be used inside a layout array (e.g., `['terms']` is **not** valid — use `layout: 'terms'` instead).

#### Custom Layout Arrays

For full control, pass a 2-D array of module names. The special column tokens `c1`–`c4` represent flexible flex columns that each have their own inner `layout` array of modules (configurable via `column1`–`column4` props; a column layout cannot contain column tokens). Use them to group sections side-by-side.

**Available modules:**

| Module | Description |
|---|---|
| `c1` | Flex column 1 (default: terms list) |
| `c2` | Flex column 2 (default: facets) |
| `c3` | Flex column 3 (default: tab selection, results + see more) |
| `c4` | Flex column 4 (no default: renders nothing until you set `column4`) |
| `termsList` | Combined history, trending & suggestion terms |
| `terms.suggestions` | Suggestion terms only |
| `terms.trending` | Trending terms only |
| `terms.history` | History terms only |
| `facets` | Facet list, followed by the left banner |
| `facetsHorizontal` | Horizontal facet bar, followed by the left banner |
| `content` | Product results, with the header, main and footer banners, and the no-results message when there are no results |
| `no-results` | No-results message (and no-results recommendations when enabled) |
| `button.see-more` | "See N results" CTA |
| `tabSelection` | Tab selection for tabbed search |
| `searchInput` | The template's rendered search input (see below) |
| `banner.header` | Header banner |
| `banner.banner` | Main banner |
| `banner.footer` | Footer banner |
| `banner.left` | Left banner |
| `_` | Flex spacer |

### Understanding `columns` and `rows` on the Results Sub-Component

Inside the autocomplete dropdown, product results are rendered by the `Results` component. Two props cap the visible result count:

- **`columns`** — how many result cards appear per row
- **`rows`** — how many rows of results to show

The number of visible products is capped at `columns × rows` (inline banners in the results count toward the cap). For example, `columns: 2, rows: 2` shows a 2×2 grid of up to 4 products. Set these props on the `results` sub-component for the specific autocomplete component you are configuring: use the matching template variant selector such as `'autocompleteFixed results'` or `'autocompleteModal results'` when configuring those templates.

```
columns: 2, rows: 2  →  [ result ][ result ]
                         [ result ][ result ]   (4 products total)

columns: 4, rows: 1  →  [ result ][ result ][ result ][ result ]   (4 products total)
```

### Example: Standard Three-Column Layout

The default desktop layout places terms in the left column, facets in the middle, and results with a see-more link on the right.

```tsx
new SnapTemplates(validateTemplatesConfig({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				// Three-column layout: c1 contains terms | c2 contains facets | c3 contains results and see more button. 
				autocompleteFixed: {
					layout: [['c1', 'c2', 'c3']],
				},
				// 3x2 result grid
				'autocompleteFixed results': {
					columns: 3,
					rows: 2,
				},
			},
			mobile: {
				// Collapse to the single-column 'mobile' layout (terms, results, see more)
				autocompleteFixed: {
					layout: 'mobile',
				},
			},
			tablet: {
				// Two-column layout on tablet: terms | results (no facets)
				// c2 (facets) also renders the left banner, so give banner.left its own row
				autocompleteFixed: {
					layout: [['c1', 'c3'], ['banner.left']],
				},
				// 3x1 result grid
				'autocompleteFixed results': {
					columns: 3,
					rows: 1,
				},
			},
		},
	},
	...
}));
```

### Example: Customizing Column Widths & Inner Layouts

Each `c1`–`c4` column is configured with a `column1`–`column4` object that takes a `width` (a CSS width such as `'160px'` or `'40%'`, or `'auto'` to fill the remaining space) and a `layout` array of inner modules — both required — plus an optional `alignContent`. Override them via the cascading prop path on the autocomplete component.

```tsx
new SnapTemplates(validateTemplatesConfig({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				autocompleteFixed: {
					layout: [['c1', 'c2', 'c3']],

					// Narrow terms column with history above trending
					column1: {
						width: '160px',
						layout: ['terms.history', 'terms.trending', 'terms.suggestions'],
					},

					// Medium facets column
					column2: {
						width: '180px',
						layout: ['facets'],
					},

					// Remaining space for results + CTA
					column3: {
						width: 'auto',
						layout: [['content'], ['_', 'button.see-more']],
					},
				},

				// 2 columns × 3 rows = up to 6 products visible
				'autocompleteFixed results': {
					columns: 2,
					rows: 3,
				},
			},
		},
	},
	...
}));
```

### Example: Placing the Search Input Inside the Layout

The autocomplete templates render their search input above the layout by default. Add the `searchInput` module to the `layout` (or to one of the column layouts) to render the input at that position instead - for example a modal with the input and term lists in a left column and products on the right. The layout stays rendered while the template is open so the input is never lost, while the other modules (except `_` spacers) still only render once the input is focused and there are terms to show or a search has loaded. Setting `renderInput: false` disables the rendered input in both cases.

```tsx
new SnapTemplates(validateTemplatesConfig({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				autocompleteModal: {
					layout: [['c1', 'c3']],

					// search input above the history and trending terms
					// (banner.left keeps the left banner that c2's facets would render)
					column1: {
						width: '40%',
						layout: [['searchInput'], ['terms.history', 'terms.trending'], ['banner.left']],
						alignContent: 'flex-start'
					},

					// product results
					column3: {
						width: 'auto',
						layout: ['content'],
					},
				},
			},
		},
	},
	...
}));
```
