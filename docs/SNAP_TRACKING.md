# Tracking 📊

>[!IMPORTANT]
>If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers.

Snap automatically tracks result **impressions and clicks** out of the box when using the default `Result` and Autocomplete components (or the `withTracking` hook / `ResultTracker` component for custom result cards). Everything else — product add-to-cart, shopper login, currency, product views, order transactions, and cart activity — needs to be wired up manually, since these are events Snap has no way to detect without explicit instrumentation.

## Quick Reference

### ✅ Tracked Automatically
- **[Impressions](./snap-tracking-automatic#impressions)** — via the default `Result`/Autocomplete components, or the `withTracking` hook / `ResultTracker` component for custom result cards
- **[Product Click](./snap-tracking-automatic#product-click)** — same as above

### 🛠️ Requires Manual Setup
- **[Product Add To Cart](./snap-tracking-manual#product-add-to-cart)** — tracking is bundled into `controller.addToCart()`, but you still need to enable the default component's button or wire up your own handler
- **[Shopper Login](./snap-tracking-manual#shopper-login)**
- **[Currency](./snap-tracking-manual#currency)**
- **[Product View](./snap-tracking-manual#product-view)**
- **[Order Transaction](./snap-tracking-manual#order-transaction)**
- **[Cart Contents](./snap-tracking-manual#cart-contents)**
- **[Cart Attribute Tracking](./snap-tracking-manual#cart-attribute-tracking)**

---
