# Search
>[!IMPORTANT]
> If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers. 

## Search Controller
Search pages render product results for a shopper's query. In the Snap ecosystem this is powered by Snap's `SearchController`. To get started with search results you **must define a search controller** in your Snap configuration; see [SearchController reference](https://athoscommerce.github.io/snap/reference-controller-search) for all available configuration options.

### Minimum Viable Controller
As already covered in our initial setup - the below example displays the bare minimum configuration to create a **search controller** and render a root level `Content` component into it.


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
		search: [
			{
				config: {
					id: 'search',
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

>[!NOTE]
>**Search** is also the controller behind **category pages** — scoping results to a category without displaying an active filter to the shopper is done by applying a **Background Filter** to the search controller's `globals.filters` property. See [Category Pages](https://athoscommerce.github.io/snap/snap-category-pages) for the full walkthrough.

---
## Search Store

This section covers the properties available on the Search Store via a Search Controller, with examples of how to implement common custom components.

> [!IMPORTANT]
> For teams building without time or resourcing to hand-write every component, Snap also ships equivalent (and additional) pre-built components in the `@athoscommerce/snap-preact/components` package. See [Preact Component Library](https://athoscommerce.github.io/snap/preact-components) for everything available and how to use it.


### SearchController.store.results

The `results` property contains an array of result objects for the current page — including `type`, `attributes`, `mappings.core`, `mask`/`display` (for temporary UI-only overrides), `variants`, and `custom`.

> [!TIP]
> For the full breakdown of result object properties, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#results-property).

>[!NOTE]
>If you are creating a custom Result component, the `withTracking` hook is required to capture product impression and click analytics. See [Tracking](https://github.com/athoscommerce/snap/tree/main/docs/SNAP_TRACKING.md#impressions) for more information.

```tsx
// src/components/Results/Results.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController, withTracking, InlineBanner, Price } from '@athoscommerce/snap-preact/components';

export const Results = withController(observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { results } = store;
	
	return (
		<ul class="ss__results">
			{results.map((result) => (
				<li class="ss__result" key={result.id}>
					{{
						banner: <InlineBanner banner={result} />,
					}[result.type] || <Result result={result} />}
				</li>
			))}
		</ul>
	)
}));

const Result = withController(withTracking(observer((props) => {
	const { trackingRef, controller, result } = props;
	const { core } = result.mappings;

	const handleAddToCart = async () => {
		await controller.addToCart(result);
		// optional: run post-cart actions after middleware has completed
		window.location.assign('/cart');
	};

	return (
		<div className="ss__result" ref={trackingRef}>
			<a href={core.url}>
				{ core.name }
			</a>
			<Price value={core.price} />
			<button onClick={handleAddToCart}>Add to cart</button>
		</div>
	)
})));
```

> [!NOTE]
> When `pagination.totalResults` is `0`, render a `<NoResults/>` component instead of `<Results/>` — this is a component you build yourself (there's nothing store-specific to it). See [Putting It Together](https://athoscommerce.github.io/snap/snap-search#putting-it-together) below for where it fits alongside everything else.

### SearchController.store.facets

The `facets` property contains an array of facet objects for the current query — each with a `type` (`range`, `value`, or `range-buckets`) that determines which additional properties are available, plus common ones like `label`, `display`, `collapsed`, and `toggleCollapse()`.

> [!TIP]
> For the full breakdown of facet object properties per type, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#facets-property).

The example below displays a custom `FacetOptionsList` component for facets with a display type of `list`. The `@athoscommerce/snap-preact/components` component library includes [`FacetListOptions`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/molecules-facetlistoptions--default), [`FacetGridOptions`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/molecules-facetgridoptions--default), [`FacetPaletteOptions`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/molecules-facetpaletteoptions--default), [`FacetHierarchyOptions`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/molecules-facethierarchyoptions--default), and [`FacetSlider`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/molecules-facetslider--price) — importable directly or usable as a reference for your own.

```tsx
// src/components/Facets/Facets.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController, SearchInput, FacetGridOptions, FacetPaletteOptions, FacetHierarchyOptions, FacetSlider } from '@athoscommerce/snap-preact/components';

export const Facets = withController(observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { facets } = store;
	
	return facets.length !== 0 ? (
		<div class="ss__facets">
			{facets.map((facet) => (
				<Facet facet={facet} key={facet.field} />
			))}
		</div>
	) : null;
}));

const Facet = withController(observer((props) => {
	const { facet } = props;
	
	return facets.length !== 0 ? (
		<div class="ss__facet">
			<h5 
				onClick={() => { 
					facet.toggleCollapse() 
				}}
				className={`ss__facet__header ${facet.collapsed ? 'ss__facet__header--collapsed' : 'ss__facet__header--expanded'}`}>
				{facet.label}
			</h5>
			{['list', 'grid', 'palette'].includes(facet.display) && (
				<SearchInput onChange={(e) => facet.search.input = e.target.value} placeholder={`Search ${facet.label}`} />
			)}
			<div className="ss__facet__options">
				{{
					grid: <FacetGridOptions facet={facet} />,
					palette: <FacetPaletteOptions facet={facet} />,
					hierarchy: <FacetOptionsHierarchy facet={facet} />,
					slider: <FacetSlider facet={facet} />,
				}[facet.display] || <FacetOptionsList facet={facet} />}
			</div>
		</div>
	) : null;
}));

// custom FacetOptionsList component instead of importing from @athoscommerce/snap-preact/components
const FacetOptionsList = withController(observer((props) => {
	const { facet } = props;
	const values = facet.refinedValues;
	
	return (
		<ul class="ss__facet__options__list">
			{values.map((value) => {
				return (
					<li class={`ss__facet__options__list__option ${value.filtered ? 'ss__facet__options__list__option--active' : ''}`}>
						<a {...value.url.link} title={`Remove filter ${value.label}`}>
							{value.label}
						</a>
					</li>
				);
			})}
		</ul>
	)
}));
```


### SearchController.store.filters

The `filters` property contains an array of filters that are currently applied to the query.

Typically used to display a filter summary with options to remove filters.

> [!TIP]
> For the full breakdown of filter object properties, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#filters-property).

```tsx
// src/components/FilterSummary/FilterSummary.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController } from '@athoscommerce/snap-preact/components';

export const FilterSummary = withController(observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { filters } = store;
	
	return filters.length !== 0 ? (
		<ul class="ss__filter-summary">
			<div className="ss__filter-summary__title">Current Filters</div>
			{filters.map((filter) => (
				<li class="ss__filter-summary__filter" key={filter.label}>
					<a
						title={`Remove filter ${filter.label}`}
						className="ss__filter-summary__filter__link"
						aria-label={`remove selected ${filter.facet.label} filter ${filter.value.label}`}
						{...filter.url.link}
					>
						<span className="ss__filter__label">
							{filter.facet.label}:
						</span>
						<span className="ss__filter__value">{filter.value.label}</span>
					</a>
				</li>
			))}
		</ul>	
	) : null;
}));
```

### SearchController.store.pagination

The `pagination` property is not only used for information about the current query, but also contains everything needed for handling pagination of a query that yields multiple pages. Invoking the `getPages` method will retrieve the specified number of page objects.

> [!TIP]
> For the full breakdown of pagination properties, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#pagination-property).

```tsx
// src/components/Pagination/Pagination.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController } from '@athoscommerce/snap-preact/components';

export const Pagination = withController(observer((props) => {
	const { controller } = props;
	const { store } = props.controller;
	const { pagination } = store;
	
	const MINIMUM_PAGES = 5;
	const pages = pagination.getPages(MINIMUM_PAGES);
	
	return (
		<div class="ss__pagination">
			{pagination.previous && (
				<span class="ss__pagination__prev">
					<a {...pagination.previous.url.link} title="Previous">
						Prev
					</a>
				</span>
			)}

			{pages.map((page) => (
				<span key={page.key} class={`ss__pagination__page ${page.active ? 'ss__pagination__page--current' : ''}`}>
					<a {...page.url.link}>{page.number}</a>
				</span>
			))}

			{pagination.next && (
				<span class="ss__pagination__next">
					<a {...pagination.next.url.link} title="Next">
						Next
					</a>
				</span>
			)}
		</div>
	)
}));
```

### SearchController.store.search

The `search` property contains information about the current query, typically displayed above results and used in combination with the `store.pagination` data.

> [!TIP]
> For the full breakdown of search properties, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#search-property).

```tsx
// src/components/SearchHeader/SearchHeader.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController } from '@athoscommerce/snap-preact/components';

export const SearchHeader = withController(observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { pagination, search } = store;
	const originalQuery = search.originalQuery;

	return (
		store.loaded && (
			<div class="ss__search-header">
				{pagination.totalResults ? (
					<h1 class="ss__search-header--results">
						{`Showing `}
						{pagination.multiplePages && <span class="ss__search-header__count-range">{` ${pagination.begin} - ${pagination.end} of `}</span>}
						<span class="ss__search-header__count-total">{pagination.totalResults}</span>
						{` result${pagination.totalResults == 1 ? '' : 's'}`}
						{search?.query && (
							<span>
								{` for `}
								<span class="ss__search-header__query">"{search.query.string}"</span>
							</span>
						)}
					</h1>
				) : (
					pagination.totalResults === 0 && (
						<h1 class="ss__search-header--noresults">
							{search?.query ? (
								<span>
									No results for <span class="ss__search-header__query">"{search.query.string}"</span> found.
								</span>
							) : (
								<span>No results found.</span>
							)}
						</h1>
					)
				)}

				{originalQuery && (
					<div class="ss__oq">
						Search instead for "<a href={originalQuery.url.href}>{originalQuery.string}</a>"
					</div>
				)}
			</div>
		)
	);
}));
```

### SearchController.store.sorting

The `sorting` property contains sorting options applicable to the current query. Typically used to render a `<select>` dropdown of sorting options. 

Sorting settings can be configured in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net)

> [!TIP]
> For the full breakdown of sorting properties, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#sorting-property).

```tsx
// src/components/SortBy/SortBy.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { withController } from '@athoscommerce/snap-preact/components';

export const SortBy = withController(observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { sorting } = store;
	
	return sorting.length !== 0 ? (
		<div class="ss__sorting">
			<label for="ss__sort--select">Sort</label>

			<select
				name="ss__sort--select"
				id="ss__sort--select"
				onChange={(e) => {
					const selectedOption = sorting.options.filter((option) => option.value == e.target.value).pop();
					selectedOption && selectedOption.url.go();
				}}
			>
				{sorting.options.map((option) => (
					<option value={option.value} selected={option.value === sorting.current.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	) : null;
}));
```

### SearchController.store.merchandising

The `merchandising` property contains **merchandising redirects** and **banner content**, both configured in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net).

> [!TIP]
> For the full breakdown of merchandising properties, see the [SearchStore reference](https://athoscommerce.github.io/snap/reference-store-search#merchandising-property).

> [!TIP]
> Use the [`<Banner/>`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/atoms-banner--header) component from `@athoscommerce/snap-preact/components` to display banners — available types are `header`, `banner`, `footer`, `left`, and `inline`. Inline banners are the exception: use [`<InlineBanner/>`](https://athoscommerce.github.io/snap/preact-components?params=?path=/story/atoms-inlinebanner--default) instead — see `store.results` above.

## Putting It Together

With `results`, `facets`, `filters`, `pagination`, `search`, `sorting`, and `merchandising` each wired into their own component, the root `Content` component composes them into the full search page:

```tsx
// src/components/Content/Content.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { ControllerProvider, Banner, Pagination } from '@athoscommerce/snap-preact/components';
import { Results } from '../Results/Results';
import { NoResults } from '../NoResults/NoResults';
import { SearchHeader } from '../SearchHeader/SearchHeader';

export const Content = observer((props) => {
	const { controller } = props;

	return controller.store.loaded ? (
		<ControllerProvider controller={controller}>
			<div class="ss__content">
				<Banner content={merchandising.content} type="header" />
				<Banner content={merchandising.content} type="banner" />
				<SearchHeader />
				{
					pagination.totalResults > 0
						? (<Results />)
						: (<NoResults />)
				}
				<Pagination />
				<Banner content={merchandising.content} type="footer" />
			</div>
		</ControllerProvider>
	) : null;
});
```
