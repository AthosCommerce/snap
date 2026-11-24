# Event Reference

A single chart of every tracking event Snap supports and how each is delivered by default — use this to make sure you're aware of everything available, not just the ones you've already wired up.

For full setup details on any event, see [Automatic Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md) or [Manual Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md).

| Event | Default Delivery | Invoked Via |
|---|---|---|
| [Product Click](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#product-click) | Automatic* | None — `Results`, Autocomplete and Recommendation template components handle it (custom cards: `withTracking` / `ResultTracker` / `controller.track.product.click()`) |
| [Impressions](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#impressions) | Automatic* | None — `Results`, Autocomplete and Recommendation template components handle it (custom cards: `withTracking` / `ResultTracker`) |
| Merchandising Banner Impression / Click | Automatic* | None — the `Banner` and `InlineBanner` components handle it (custom banners: `withTracking`, or `controller.track.banner.impression()` / `.click()` on Search and Autocomplete controllers) |
| Render | Automatic | None — Search, Autocomplete and Recommendation controllers send it when a new response is stored |
| Redirect | Automatic | None — Search and Autocomplete controllers send it before following a merchandising redirect (`settings.redirects.merchandising`) |
| Error | Automatic | None — sent for errors caught by a controller and for uncaught errors thrown from the Snap bundle script |
| [Search Terms](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md#search-terms) | Automatic | None — recorded from the search controller's history store (manage with `athos.tracker.cookies.searched`) |
| [Product Add To Cart](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-add-to-cart) | Manual | `controller.addToCart()` |
| [Shopper Login](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#shopper-login) | Manual | `shopper.id` context var |
| Shopper Login (Magento 2) | Automatic with the Magento 2 `pluginBase` | None — the plugin reads the shopper id from Magento's `mage-cache-storage`. Snap Templates applies it on the `magento2` platform; otherwise attach `pluginBase` from `@athoscommerce/snap-platforms/magento2` |
| [Currency](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#currency) | Manual | `currency` context var |
| [Product View](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#product-view) | Manual | `athos.tracker.events.product.pageView()` |
| [Order Transaction](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#order-transaction) | Manual | `athos.tracker.events.order.transaction()` |
| [Cart Contents](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-contents) | Manual | `athos.tracker.events.cart.add()` / `.remove()` |
| [Cart Attribute Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_MANUAL.md#cart-attribute-tracking) | Manual | `ss-track-cart-*` attributes |

\* Only automatic when using Snap's `Results`, Autocomplete, Recommendation template and banner components (including a custom `resultComponent` passed to them, and custom result components in Snap Templates). The `Result` component does not track on its own - mapping results from the store to `Result` or to your own cards? You still need to wire up `withTracking` or `ResultTracker` yourself — see [Automatic Tracking](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_TRACKING_AUTOMATIC.md).

Ready to confirm what you've actually implemented? Use the [Integration Checklist](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_INTEGRATION_CHECKLIST.md#tracking)'s Tracking section.
