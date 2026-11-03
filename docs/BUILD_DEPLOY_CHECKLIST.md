# QA Checklist

## Integration Code Checklist

- [Background Filters](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BACKGROUND_FILTERS.md) are being read from script context and applied on the search controller's `config.globals.filters` to handle Category pages.

- (If applicable) [Foreground Filters](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_FOREGROUND_FILTERS.md) are configured via the search controller's `url.initial.parameters` to handle custom filtering (ie. only show results in stock)

- Merchandising [Banner](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-banner--footer) components have been added for all banner locations: `header`, `banner`, `footer`, `left`. See [Search > Search Store Merchandising](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoremerchandising)

- [InlineBanner](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-inlinebanner--default) component is conditionally rendered in your Results component. See [Search > Search Store Results](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_SEARCH.md#searchcontrollerstoreresults)

- [Result impression tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions) has been added. Confirm via browser dev tools network tab that beacon impression events are being sent for results in Search, Category, Autocomplete, and Recommendations

- [Result click tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click) has been added. (not required if using `withTracking` or `ResultTracker` as this functionallity is handled by those components)

- [Result add to cart tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-add-to-cart) has been added. Confirm via browser dev tools network tab that beacon add to cart events are being sent for results in Search, Category, Autocomplete, and Recommendations

- (If enabled) Self-configured [Badges](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BADGES.md) are added to your Result component

- No Results component text has been personalized for your store (ie. contains support contact and storefront address information)

## Platform Integration Checklist

- [Shopper Login tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#shopper-login) has been added. Confirm via browser dev tools network tab that beacon shopper login events are being sent only when a shopper is logged in

- [Currency tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#currency) has been added. Confirm via browser dev tools network tab that beacon events contain the currency code in the event `context.currency` for any event. If using a single currency, this is not required.

- [Product view tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-view). Confirm via browser dev tools that last viewed products cookie is being updated when a product is viewed.

- [Order transaction tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#order-transaction) has been added. Confirm via browser dev tools network tab that beacon order transaction events are being sent only when an order is completed.

- [Cart contents tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-contents) has been added. Confirm via browser dev tools network tab that beacon cart add and remove events are being sent when cart contents change.

- (If applicable) Realtime recommendations requires [Cart Attribute Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-attribute-tracking)
