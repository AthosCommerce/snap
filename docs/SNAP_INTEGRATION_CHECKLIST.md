# Snap Integration Checklist

A step-by-step checklist for a **base level Snap Integration** — check off the sections for whichever features your project actually uses before calling it done. For more information on each step please see the relevant documentation.

## Setup & Foundation
- [ ] Project scaffolded via the Snapfu CLI (or manually) — see [Initialize new project](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SETUP.md#initialize-new-project)
- [ ] `client.globals.siteId` set to your real Site ID, not the placeholder — see [Minimum Viable Controller](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SETUP.md#minimum-viable-controller)
- [ ] [Local mockup file](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SETUP.md#local-mockup-file) or [Snapfu Chrome extension](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SETUP.md#snapfu-chrome-extension) previewing correctly
- [ ] [Minimum Viable Controller](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SETUP.md#minimum-viable-controller) renders live results in your mockup

## Search
- [ ] `SearchController` configured with a `targeters` entry — see [Search Controller](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#search-controller)
- [ ] Results component built, rendering `<NoResults/>` when `pagination.totalResults === 0` — see [store.results](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoreresults)
- [ ] No Results copy personalized for your store (support contact, storefront address, etc.)
- [ ] Product click/impression tracking wired via `withTracking` (or the library `ResultTracker`) — see [Product Click](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click) and [Impressions](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions)
- [ ] Facets component built (or using the library Facet* components) — see [store.facets](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstorefacets)
- [ ] FilterSummary component built for removing active filters — see [store.filters](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstorefilters)
- [ ] Pagination component built — see [store.pagination](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstorepagination)
- [ ] SearchHeader component built (result count / query display) — see [store.search](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoresearch)
- [ ] SortBy component built — see [store.sorting](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoresorting)
- [ ] Merchandising banners added for every location in use: `header`, `banner`, `footer`, `left` — see [store.merchandising](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoremerchandising)
- [ ] `<InlineBanner/>` conditionally rendered inside Results for banner-type result entries — see [store.merchandising](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoremerchandising)

## Category Pages
- [ ] Category value read from the script tag context via `getContext` — see [Retrieving the category](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_CATEGORY_PAGES.md#retrieving-the-category)
- [ ] Applied as a Background Filter on `config.globals.filters` (not `client.globals.filters`, unless intentionally global) — see [Applying the filter](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_CATEGORY_PAGES.md#applying-the-filter)
- [ ] Category filter does **not** show up as a removable/active filter in FilterSummary (confirms `background: true` is set) — see [Background Filter Object](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BACKGROUND_FILTERS.md#background-filter-object)

## Autocomplete
- [ ] `config.selector` and `targeter.selector` both point to the same `<input/>` — see [Autocomplete Controller](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_AUTOCOMPLETE.md#autocomplete-controller)
- [ ] `hideTarget: true` set on the targeter, to keep the target hidden until it has been targeted and prevent content flashing — see [Autocomplete Controller](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_AUTOCOMPLETE.md#autocomplete-controller)
- [ ] Terms component built — see [store.terms](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_AUTOCOMPLETE.md#autocompletecontrollerstoreterms)
- [ ] Trending enabled via a positive `settings.trending.limit`, if used — see [store.trending](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_AUTOCOMPLETE.md#autocompletecontrollerstoretrending)
- [ ] History enabled via a positive `settings.history.limit`, if used — see [store.history](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_AUTOCOMPLETE.md#autocompletecontrollerstorehistory)

## Quickview
- [ ] `quickview` configured at the top level of the Snap config, not nested under `controllers` — see [Setup with Snap](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_QUICKVIEW.md#setup-with-snap-standard-integrations)
- [ ] `QuickviewModal` or `QuickviewSlideout` targeted somewhere on the page — see [Modal or Slideout](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_QUICKVIEW.md#modal-or-slideout)
- [ ] Trigger wired — either `hideQuickviewButton: false` on the library Result, or a custom [`controller.quickview(result)`](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_QUICKVIEW.md#opening-a-quickview-programmatically) call

## Recommendations
- [ ] Using [`RecommendationInstantiator`](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_RECOMMENDATIONS.md) rather than hand-building recommendation controllers
- [ ] `Default` component mapped for standard profiles — see [Product Recommendations](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_RECOMMENDATIONS.md#product-recommendations--personalized-recommendations)
- [ ] `Bundle` component mapped, if using Bundle Recommendations — see [Bundle Recommendations](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_RECOMMENDATIONS.md#bundle-recommendations)
- [ ] `products` global context variable provided for product-detail-page profiles — see [Bundle Recommendations](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_RECOMMENDATIONS.md#bundle-recommendations)
- [ ] `shopper.id` provided for personalized profiles — see [Personalization Without Bundle Context](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_RECOMMENDATIONS_INTEGRATION.md#personalization-without-bundle-context)
- [ ] Profiles that should dedupe against each other are batched in the same script block; profiles that shouldn't (e.g. a mini cart) live in a separate script tag — see [Batching and Ordering](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_RECOMMENDATIONS_INTEGRATION.md#batching-and-ordering)

## Finder
- [ ] Field marked for 'Filter' on the Field Settings page in the Athos Search & Product Discovery Console (ASD) — see [Configuration](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_FINDER.md#configuration)
- [ ] (Hierarchy Finders) Field set as a hierarchy display type with a matching 'Hierarchy Delimiter' — see [Hierarchy Configuration](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_FINDER.md#hierarchy-configuration)
- [ ] Finder component built, with working Find/Reset actions — see [Component Example](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_FINDER.md#component-example)

## Background Filters
- [ ] Filter object includes `background: true` — see [Background Filter Object](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BACKGROUND_FILTERS.md#background-filter-object)
- [ ] Applied on the correct controller's `config.globals.filters` — not accidentally global via `client.globals.filters`

## Foreground Filters
- [ ] Initial `UrlManager` state configured via `url.initial.parameters` on the controller — see [Foreground Filters](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_FOREGROUND_FILTERS.md)
- [ ] Pre-applied filter appears in the URL and can be removed like any other filter

## Badges
- [ ] Feature enabled by your account manager in the Athos Search & Product Discovery Console — see [Badges](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BADGES.md)
- [ ] Badges configured in ASD
- [ ] Result card includes [`OverlayBadge`](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BADGES.md#overlaybadge) and/or [`CalloutBadge`](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BADGES.md#calloutbadge)

## Tracking
- [ ] Result impression tracking added — confirm via dev tools network tab — see [Impressions](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions)
- [ ] Result click tracking added (not required if using `withTracking`/`ResultTracker`) — see [Product Click](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click)
- [ ] Result add-to-cart tracking added — see [Product Add To Cart](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-add-to-cart)
- [ ] Shopper login tracking added — see [Shopper Login](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#shopper-login)
- [ ] Currency tracking added (if multi-currency) — see [Currency](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#currency)
- [ ] Product view tracking added — see [Product View](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-view)
- [ ] Order transaction tracking added — see [Order Transaction](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#order-transaction)
- [ ] Cart contents tracking added — see [Cart Contents](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-contents)
- [ ] Cart attribute tracking added, if using Realtime Recommendations — see [Cart Attribute Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-attribute-tracking)
