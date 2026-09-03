# Snap Integration Checklist ✅

A step-by-step checklist for a complete **Snap Integration** — check off the sections for whichever features your project actually uses before calling it done.

## 🛠️ Setup & Foundation
- [ ] Project scaffolded via the Snapfu CLI (or manually) — see [Setup](https://athoscommerce.github.io/snap/snap-setup)
- [ ] `client.globals.siteId` set to your real Site ID, not the placeholder
- [ ] Local mockup file or Snapfu Chrome extension previewing correctly
- [ ] Minimum Viable Controller renders live results in your mockup

## 🔍 Search
- [ ] `SearchController` configured with a `targeters` entry
- [ ] Results component built, rendering `<NoResults/>` when `pagination.totalResults === 0`
- [ ] No Results copy personalized for your store (support contact, storefront address, etc.)
- [ ] Product click/impression tracking wired via `withTracking` (or the library `ResultTracker`)
- [ ] Facets component built (or using the library Facet* components)
- [ ] FilterSummary component built for removing active filters
- [ ] Pagination component built
- [ ] SearchHeader component built (result count / query display)
- [ ] SortBy component built
- [ ] Merchandising banners added for every location in use: `header`, `banner`, `footer`, `left`
- [ ] `<InlineBanner/>` conditionally rendered inside Results for banner-type result entries

## 🗂️ Category Pages
- [ ] Category value read from the script tag context via `getContext`
- [ ] Applied as a Background Filter on `config.globals.filters` (not `client.globals.filters`, unless intentionally global)
- [ ] Category filter does **not** show up as a removable/active filter in FilterSummary (confirms `background: true` is set)

## ⌨️ Autocomplete
- [ ] `config.selector` and `targeter.selector` both point to the same `<input/>`
- [ ] `hideTarget: true` set on the targeter, to avoid a duplicate visible input
- [ ] Terms component built
- [ ] Trending enabled via `settings.trending`, if used
- [ ] History enabled via `settings.history`, if used

## 👁️ Quickview
- [ ] `quickview` configured at the top level of the Snap config, not nested under `controllers`
- [ ] `QuickviewModal` or `QuickviewSlideout` targeted somewhere on the page
- [ ] Trigger wired — either `hideQuickviewButton: false` on the library Result, or a custom `controller.quickview(result)` call

## 🎯 Recommendations
- [ ] Using `RecommendationInstantiator` rather than hand-building recommendation controllers
- [ ] `Default` component mapped for standard profiles
- [ ] `Bundle` component mapped, if using Bundle Recommendations
- [ ] `products` global context variable provided for product-detail-page profiles
- [ ] `shopper.id` provided for personalized profiles
- [ ] Profiles that should dedupe against each other are batched in the same script block; profiles that shouldn't (e.g. a mini cart) live in a separate script tag

## 🧭 Finder
- [ ] Field marked for 'Filter' on the ASD Field Settings page
- [ ] (Hierarchy Finders) Field set as a hierarchy display type with a matching 'Hierarchy Delimiter'
- [ ] Finder component built, with working Find/Reset actions

## 🫥 Background Filters
- [ ] Filter object includes `background: true`
- [ ] Applied on the correct controller's `config.globals.filters` — not accidentally global via `client.globals.filters`

## 🚦 Foreground Filters
- [ ] Initial `UrlManager` state configured via `url.initial.parameters` on the controller
- [ ] Pre-applied filter appears in the URL and can be removed like any other filter

## 🏷️ Badges
- [ ] Feature enabled by your account manager in the Athos Search & Product Discovery Console
- [ ] Badges configured in ASD
- [ ] Result card includes `OverlayBadge` and/or `CalloutBadge`

## 📊 Tracking
- [ ] Result impression tracking added — confirm via dev tools network tab
- [ ] Result click tracking added (not required if using `withTracking`/`ResultTracker`)
- [ ] Result add-to-cart tracking added
- [ ] Shopper login tracking added
- [ ] Currency tracking added (if multi-currency)
- [ ] Product view tracking added
- [ ] Order transaction tracking added
- [ ] Cart contents tracking added
- [ ] Cart attribute tracking added, if using Realtime Recommendations
