# Event Reference 📋

A single chart of every tracking event Snap supports and how each is delivered by default — use this to make sure you're aware of everything available, not just the ones you've already wired up.

For full setup details on any event, see [Automatic Tracking](./snap-tracking-automatic) or [Manual Tracking](./snap-tracking-manual).

| Event | Default Delivery | Invoked Via |
|---|---|---|
| [Product Click](./snap-tracking-automatic#product-click) | ✅ Automatic* | None — default components handle it (custom cards: `controller.track.product.click()`) |
| [Impressions](./snap-tracking-automatic#impressions) | ✅ Automatic* | None — default components handle it (custom cards: `withTracking` / `ResultTracker`) |
| [Product Add To Cart](./snap-tracking-manual#product-add-to-cart) | 🛠️ Manual | `controller.addToCart()` |
| [Shopper Login](./snap-tracking-manual#shopper-login) | 🛠️ Manual | `shopper.id` context var |
| [Currency](./snap-tracking-manual#currency) | 🛠️ Manual | `currency` context var |
| [Product View](./snap-tracking-manual#product-view) | 🛠️ Manual | `athos.tracker.events.product.pageView()` |
| [Order Transaction](./snap-tracking-manual#order-transaction) | 🛠️ Manual | `athos.tracker.events.order.transaction()` |
| [Cart Contents](./snap-tracking-manual#cart-contents) | 🛠️ Manual | `athos.tracker.events.cart.add()` / `.remove()` |
| [Cart Attribute Tracking](./snap-tracking-manual#cart-attribute-tracking) | 🛠️ Manual | `ss-track-cart-*` attributes |

\* Only automatic when using Snap's default `Result`/Autocomplete components. Building custom result cards? You still need to wire up `withTracking` or `ResultTracker` yourself — see [Automatic Tracking](./snap-tracking-automatic).

Ready to confirm what you've actually implemented? Use the [Integration Checklist](./snap-integration-checklist#tracking-📊)'s Tracking section.
