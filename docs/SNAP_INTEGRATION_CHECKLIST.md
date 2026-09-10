# Snap Integration Checklist ✅

A step-by-step checklist for a **base level Snap Integration** — check off the sections for whichever features your project actually uses before calling it done. For more information on each step please see the relevant documentation.

## Setup & Foundation 🛠️ 
- [ ] Project scaffolded via the Snapfu CLI (or manually) — see [Initialize new project](https://athoscommerce.github.io/snap/snap-setup#initialize-new-project)
- [ ] `client.globals.siteId` set to your real Site ID, not the placeholder — see [Minimum Viable Controller](https://athoscommerce.github.io/snap/snap-setup#minimum-viable-controller)
- [ ] [Local mockup file](https://athoscommerce.github.io/snap/snap-setup#local-mockup-file) or [Snapfu Chrome extension](https://athoscommerce.github.io/snap/snap-setup#snapfu-chrome-extension) previewing correctly
- [ ] [Minimum Viable Controller](https://athoscommerce.github.io/snap/snap-setup#minimum-viable-controller) renders live results in your mockup

## Search 🔍 
- [ ] `SearchController` configured with a `targeters` entry — see [Search Controller](https://athoscommerce.github.io/snap/snap-search#search-controller)
- [ ] Results component built, rendering `<NoResults/>` when `pagination.totalResults === 0` — see [store.results](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstoreresults)
- [ ] No Results copy personalized for your store (support contact, storefront address, etc.)
- [ ] Product click/impression tracking wired via `withTracking` (or the library `ResultTracker`) — see [Product Click](https://athoscommerce.github.io/snap/snap-tracking-automatic#product-click) and [Impressions](https://athoscommerce.github.io/snap/snap-tracking-automatic#impressions)
- [ ] Facets component built (or using the library Facet* components) — see [store.facets](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstorefacets)
- [ ] FilterSummary component built for removing active filters — see [store.filters](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstorefilters)
- [ ] Pagination component built — see [store.pagination](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstorepagination)
- [ ] SearchHeader component built (result count / query display) — see [store.search](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstoresearch)
- [ ] SortBy component built — see [store.sorting](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstoresorting)
- [ ] Merchandising banners added for every location in use: `header`, `banner`, `footer`, `left` — see [store.merchandising](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstoremerchandising)
- [ ] `<InlineBanner/>` conditionally rendered inside Results for banner-type result entries — see [store.merchandising](https://athoscommerce.github.io/snap/snap-search#searchcontrollerstoremerchandising)

## Category Pages 🗂️ 
- [ ] Category value read from the script tag context via `getContext` — see [Retrieving the category](https://athoscommerce.github.io/snap/snap-category-pages#retrieving-the-category)
- [ ] Applied as a Background Filter on `config.globals.filters` (not `client.globals.filters`, unless intentionally global) — see [Applying the filter](https://athoscommerce.github.io/snap/snap-category-pages#applying-the-filter)
- [ ] Category filter does **not** show up as a removable/active filter in FilterSummary (confirms `background: true` is set) — see [Background Filter Object](https://athoscommerce.github.io/snap/snap-background-filters#background-filter-object)

## Autocomplete ⌨️ 
- [ ] `config.selector` and `targeter.selector` both point to the same `<input/>` — see [Autocomplete Controller](https://athoscommerce.github.io/snap/snap-autocomplete#autocomplete-controller)
- [ ] `hideTarget: true` set on the targeter, to avoid a duplicate visible input — see [Autocomplete Controller](https://athoscommerce.github.io/snap/snap-autocomplete#autocomplete-controller)
- [ ] Terms component built — see [store.terms](https://athoscommerce.github.io/snap/snap-autocomplete#autocompletecontrollerstoreterms)
- [ ] Trending enabled via `settings.trending`, if used — see [store.trending](https://athoscommerce.github.io/snap/snap-autocomplete#autocompletecontrollerstoretrending)
- [ ] History enabled via `settings.history`, if used — see [store.history](https://athoscommerce.github.io/snap/snap-autocomplete#autocompletecontrollerstorehistory)

## Quickview 👁️ 
- [ ] `quickview` configured at the top level of the Snap config, not nested under `controllers` — see [Setup with Snap](https://athoscommerce.github.io/snap/reference-quickview#setup-with-snap-standard-integrations)
- [ ] `QuickviewModal` or `QuickviewSlideout` targeted somewhere on the page — see [Modal or Slideout](https://athoscommerce.github.io/snap/reference-quickview#modal-or-slideout)
- [ ] Trigger wired — either `hideQuickviewButton: false` on the library Result, or a custom [`controller.quickview(result)`](https://athoscommerce.github.io/snap/reference-quickview#opening-a-quickview-programmatically) call

## Recommendations 🎯 
- [ ] Using [`RecommendationInstantiator`](https://athoscommerce.github.io/snap/snap-recommendations) rather than hand-building recommendation controllers
- [ ] `Default` component mapped for standard profiles — see [Product Recommendations](https://athoscommerce.github.io/snap/snap-recommendations#product-recommendations--personalized-recommendations)
- [ ] `Bundle` component mapped, if using Bundle Recommendations — see [Bundle Recommendations](https://athoscommerce.github.io/snap/snap-recommendations#bundle-recommendations)
- [ ] `products` global context variable provided for product-detail-page profiles — see [Bundle Recommendations](https://athoscommerce.github.io/snap/snap-recommendations#bundle-recommendations)
- [ ] `shopper.id` provided for personalized profiles — see [Personalization Without Bundle Context](https://athoscommerce.github.io/snap/snap-recommendations-integration#personalization-without-bundle-context)
- [ ] Profiles that should dedupe against each other are batched in the same script block; profiles that shouldn't (e.g. a mini cart) live in a separate script tag — see [Batching and Ordering](https://athoscommerce.github.io/snap/snap-recommendations-integration#batching-and-ordering)

## Finder 🧭 
- [ ] Field marked for 'Filter' on the ASD Field Settings page — see [Configuration](https://athoscommerce.github.io/snap/snap-finder#configuration)
- [ ] (Hierarchy Finders) Field set as a hierarchy display type with a matching 'Hierarchy Delimiter' — see [Hierarchy Configuration](https://athoscommerce.github.io/snap/snap-finder#hierarchy-configuration)
- [ ] Finder component built, with working Find/Reset actions — see [Component Example](https://athoscommerce.github.io/snap/snap-finder#component-example)

## Background Filters 🫥 
- [ ] Filter object includes `background: true` — see [Background Filter Object](https://athoscommerce.github.io/snap/snap-background-filters#background-filter-object)
- [ ] Applied on the correct controller's `config.globals.filters` — not accidentally global via `client.globals.filters`

## Foreground Filters 🚦 
- [ ] Initial `UrlManager` state configured via `url.initial.parameters` on the controller — see [Foreground Filters](https://athoscommerce.github.io/snap/snap-foreground-filters)
- [ ] Pre-applied filter appears in the URL and can be removed like any other filter

## Badges 🏷️ 
- [ ] Feature enabled by your account manager in the Athos Search & Product Discovery Console — see [Badges](https://athoscommerce.github.io/snap/snap-badges)
- [ ] Badges configured in ASD
- [ ] Result card includes [`OverlayBadge`](https://athoscommerce.github.io/snap/snap-badges#overlaybadge) and/or [`CalloutBadge`](https://athoscommerce.github.io/snap/snap-badges#calloutbadge)

## Tracking 📊 
- [ ] Result impression tracking added — confirm via dev tools network tab — see [Impressions](https://athoscommerce.github.io/snap/snap-tracking-automatic#impressions)
- [ ] Result click tracking added (not required if using `withTracking`/`ResultTracker`) — see [Product Click](https://athoscommerce.github.io/snap/snap-tracking-automatic#product-click)
- [ ] Result add-to-cart tracking added — see [Product Add To Cart](https://athoscommerce.github.io/snap/snap-tracking-manual#product-add-to-cart)
- [ ] Shopper login tracking added — see [Shopper Login](https://athoscommerce.github.io/snap/snap-tracking-manual#shopper-login)
- [ ] Currency tracking added (if multi-currency) — see [Currency](https://athoscommerce.github.io/snap/snap-tracking-manual#currency)
- [ ] Product view tracking added — see [Product View](https://athoscommerce.github.io/snap/snap-tracking-manual#product-view)
- [ ] Order transaction tracking added — see [Order Transaction](https://athoscommerce.github.io/snap/snap-tracking-manual#order-transaction)
- [ ] Cart contents tracking added — see [Cart Contents](https://athoscommerce.github.io/snap/snap-tracking-manual#cart-contents)
- [ ] Cart attribute tracking added, if using Realtime Recommendations — see [Cart Attribute Tracking](https://athoscommerce.github.io/snap/snap-tracking-manual#cart-attribute-tracking)
