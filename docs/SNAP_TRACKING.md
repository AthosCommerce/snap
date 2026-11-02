# Tracking

>[!IMPORTANT]
>If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers.

Snap automatically tracks result **impressions and clicks** out of the box when using the default `Result` and Autocomplete components (or the `withTracking` hook / `ResultTracker` component for custom result cards). Everything else — product add-to-cart, shopper login, currency, product views, order transactions, and cart activity — needs to be wired up manually, since these are events Snap has no way to detect without explicit instrumentation.

## Quick Reference

### Tracked Automatically
- **[Impressions](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions)** — via the default `Result`/Autocomplete components, or the `withTracking` hook / `ResultTracker` component for custom result cards
- **[Product Click](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click)** — same as above

### Requires Manual Setup
- **[Product Add To Cart](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-add-to-cart)** — tracking is bundled into `controller.addToCart()`, but you still need to enable the default component's button or wire up your own handler
- **[Shopper Login](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#shopper-login)**
- **[Currency](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#currency)**
- **[Product View](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-view)**
- **[Order Transaction](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#order-transaction)**
- **[Cart Contents](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-contents)**
- **[Cart Attribute Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-attribute-tracking)**

---
