# Event Reference

A single chart of every tracking event Snap supports and how each is delivered by default — use this to make sure you're aware of everything available, not just the ones you've already wired up.

For full setup details on any event, see [Automatic Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md) or [Manual Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md).

| Event | Default Delivery | Invoked Via |
|---|---|---|
| [Product Click](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click) | Automatic* | None — default components handle it (custom cards: `controller.track.product.click()`) |
| [Impressions](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions) | Automatic* | None — default components handle it (custom cards: `withTracking` / `ResultTracker`) |
| [Search Terms](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#search-terms) | Automatic | None — recorded from the search controller's history store (manage with `athos.tracker.cookies.searched`) |
| [Product Add To Cart](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-add-to-cart) | Manual | `controller.addToCart()` |
| [Shopper Login](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#shopper-login) | Manual | `shopper.id` context var |
| [Currency](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#currency) | Manual | `currency` context var |
| [Product View](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-view) | Manual | `athos.tracker.events.product.pageView()` |
| [Order Transaction](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#order-transaction) | Manual | `athos.tracker.events.order.transaction()` |
| [Cart Contents](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-contents) | Manual | `athos.tracker.events.cart.add()` / `.remove()` |
| [Cart Attribute Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-attribute-tracking) | Manual | `ss-track-cart-*` attributes |

\* Only automatic when using Snap's default `Result`/Autocomplete components. Building custom result cards? You still need to wire up `withTracking` or `ResultTracker` yourself — see [Automatic Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md).

Ready to confirm what you've actually implemented? Use the [Integration Checklist](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_INTEGRATION_CHECKLIST.md#tracking)'s Tracking section.
