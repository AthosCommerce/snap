# Autocomplete ⌨️

>[!IMPORTANT]
>If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers.

## Autocomplete Controller
To set up Autocomplete using Snap, we'll need to define an autocomplete controller in our Snap configuration. 

>[!TIP]
> See [AutocompleteController reference](https://athoscommerce.github.io/snap/reference-controller-autocomplete) for all available configuration options

When setting up your Autocomplete Controller you'll notice a duplicate **`selector`** property between `config` and `targeters` — each one controls something different:

- **`config.selector`** — the `<input/>` element(s) to attach Autocomplete's events (focus, keydown, submit) to. Supports a selector matching multiple elements.
- **`targeter.selector`** — the DOM node the `targeter.component` renders into.

In the example below, both use the same selector, so the Autocomplete component renders as a child node directly below whichever `<input/>` is currently focused.


```js
// src/index.js

import { Snap } from '@athoscommerce/snap-preact';

const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		autocomplete: [
			{
				config: {
					id: 'autocomplete',
					selector: 'header input[type="search"]', // <input> to attach Autocomplete's events to
					settings: {
						trending: {
							limit: 5,
						},
						history: {
							limit: 5,
						},
					},
				},
				targeters: [
					{
						selector: 'header input[type="search"]', // DOM node the component renders into
						hideTarget: true,
						component: async () => {
							return (await import('@athoscommerce/snap-preact/components')).Autocomplete;
						},
					},
				],
			},
		],
	},
});
```

---

## Autocomplete Store

The following properties are specific to an Autocomplete Store via an Autocomplete Controller. This section wills start with what's unique to Autocomplete, then cover the properties shared with `SearchController`.

>[!NOTE]
> If you are using Snap Components in your integration we recommend utlizing the [Autocomplete](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/organisms-autocomplete--default) component from `@athoscommerce/snap-preact/components` to display Autocomplete.


### AutocompleteController.store.terms

The `terms` property contains an array of autocomplete terms relevant to the query. Each term has a `preview` method, invoked on the `onFocus` event of a term value — this locks the current terms and unlocks the previous facets (if changing terms with a facet filter applied), so the store update for the new term doesn't change the original terms.

<img src='/images/autocomplete-term-preview.gif'/>

>[!TIP]
>For the full breakdown of `Term` object properties, see the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#term-object).

```tsx
// src/components/Terms/Terms.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';

export const Terms = observer((props) => {
	const { terms } = props;

	return terms.length !== 0 ? (
		<ul class="ss__terms">
			{terms.map((term) => (
				<li key={term.value} class={`ss__terms__term ${term.active ? 'ss__terms__term--active' : ''}`}>
					<a href={term.url.href} onFocus={term.preview}>
						{term.value}
					</a>
				</li>
			))}
		</ul>
	) : null;
});
```

>[!TIP]
>`trending` and `history` (below) are arrays of this same `Term` shape — `Terms` takes `terms` as a prop, so the same component renders all three, just passed a different store property.

### AutocompleteController.store.trending

The `trending` property contains an array of trending terms — generated from collected reporting data rather than the current query. It's recommended as a starting point shown when the `<input/>` is focused and empty. Must be enabled via **`settings.trending`** in the AutocompleteController config.

<img src='/images/autocomplete-trending-preview.gif'/>

>[!TIP]
>Renders with the same `Terms` component shown above — pass `controller.store.trending` as the `terms` prop.

### AutocompleteController.store.history

The `history` property contains an array of previously searched terms, stored in localStorage. Can be shown in place of, or alongside, trending and suggested terms. Must be enabled via **`settings.history`** in the AutocompleteController config.

<img src='/images/autocomplete-history-preview.gif'/>

>[!TIP]
>Renders with the same `Terms` component shown above — pass `controller.store.history` as the `terms` prop.

---

The properties below are shared with `SearchController` — see [Search](https://athoscommerce.github.io/snap/snap-search) for their full descriptions and worked examples.

### AutocompleteController.store.merchandising

Identical to `SearchController.store.merchandising`.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#merchandising-property) for the full property breakdown.

### AutocompleteController.store.search

Same shape as `SearchController.store.search`, with one difference: it does not contain a `didYouMean` query.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#search-property) for the full property breakdown.

### AutocompleteController.store.facets

Same shape as `SearchController.store.facets`, with one addition: each facet value also has a `preview` method — invoked on `onFocus`, with the same locking behavior as `terms.preview` above.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#facets-property) for the full property breakdown.

### AutocompleteController.store.filters

Identical to `SearchController.store.filters`.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#filters-property) for the full property breakdown.

### AutocompleteController.store.results

Identical to `SearchController.store.results`.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#results-property) for the full property breakdown.

### AutocompleteController.store.pagination

Identical to `SearchController.store.pagination`.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#pagination-property) for the full property breakdown.

### AutocompleteController.store.sorting

Identical to `SearchController.store.sorting`.

>[!TIP]
>See the [AutocompleteStore reference](https://athoscommerce.github.io/snap/reference-store-autocomplete#sorting-property) for the full property breakdown.

## Putting It Together

With `terms`, `trending`, `history`, and `results` each wired in, the root `Autocomplete` component composes them: suggested terms once the shopper is typing, trending/history as a starting point when the input is empty, and a preview of live results underneath.

```tsx
// src/components/Autocomplete/Autocomplete.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController } from '@athoscommerce/snap-preact/components';
import { Terms } from '../Terms/Terms';
import { Results } from '../Results/Results';

export const Autocomplete = withController(observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { search, terms, trending, history, results } = store;

	return store.loaded ? (
		<div class="ss__autocomplete">
			{search?.query?.string
				? <Terms terms={terms} />
				: <Terms terms={[...trending, ...history]} />}
			{results.length !== 0 && <Results />}
		</div>
	) : null;
}));
```

>[!TIP]
>`Results` is the same component from the [Search](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstoreresults) page — Autocomplete's `results` property is identical, so it renders without changes.

---
## Troubleshooting FAQ ❓

**Q: The original `<input/>` still shows alongside the rendered Autocomplete component. Why?**
<br>
**A:** Set `hideTarget: true` on the targeter — it hides the original target element before the component mounts. Without it, both the original `<input/>` and the rendered component stay visible together.

**Q: Trending terms never show up, even with an empty, focused input. Why?**
<br>
**A:** Confirm `settings.trending` is set on the AutocompleteController config — trending terms are opt-in and won't populate `store.trending` without it.

**Q: History / "Recent Searches" never shows up. Why?**
<br>
**A:** Confirm `settings.history` is enabled in the config, and that a search has actually been submitted at least once in this browser — history is written to localStorage on search submission, not on every keystroke, so a fresh browser with no prior searches will show nothing here.

**Q: Hovering a suggested term doesn't update the results/facets preview. Why?**
<br>
**A:** Confirm `term.preview` is wired to the term's `onFocus` event, as shown in the `Terms` example above — without calling `preview()`, the store has no signal to fetch and lock in that term's results.

