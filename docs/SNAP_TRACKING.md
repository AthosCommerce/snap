# Tracking

>[!IMPORTANT]
>If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers.

Snap automatically tracks result **impressions and clicks** out of the box when using the `Results` component, the Autocomplete components or the Recommendation templates - including custom result components passed to them as `resultComponent`, and every custom result component in [Snap Templates](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#registering-additional-components). Result cards you map from the store yourself (including the library `Result` component) need the `withTracking` higher-order component or the `ResultTracker` component. Everything else — product add-to-cart, shopper login, currency, product views, order transactions, and cart activity — needs to be wired up manually, since these are events Snap has no way to detect without explicit instrumentation.

## Quick Reference

### Tracked Automatically
- **[Impressions](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions)** — via the `Results` component, Autocomplete components and Recommendation templates, or the `withTracking` higher-order component / `ResultTracker` component for custom result cards
- **[Product Click](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click)** — same as above
- **[Search Terms](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#search-terms)** — recorded from the search controller's history store and sent as the `lastSearches` personalization parameter

### Requires Manual Setup
- **[Product Add To Cart](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-add-to-cart)** — tracking is bundled into `controller.addToCart()`, but you still need to enable the default component's button or wire up your own handler
- **[Shopper Login](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#shopper-login)**
- **[Currency](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#currency)**
- **[Product View](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-view)**
- **[Order Transaction](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#order-transaction)**
- **[Cart Contents](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-contents)**
- **[Cart Attribute Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-attribute-tracking)**
