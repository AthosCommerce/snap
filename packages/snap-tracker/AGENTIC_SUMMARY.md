# snap-tracker — Agentic Summary

## Purpose
`snap-tracker` provides the `Tracker` class, which extends the `@athoscommerce/beacon` `Beacon` class to send analytics/beacon events (product views, cart changes, order transactions, shopper login, errors). It is consumed by Snap controllers and instantiators via `controller.tracker`.

## Public Exports

| Export | Kind | Description |
|--------|------|-------------|
| `Tracker` | class | Core tracker; extends `Beacon`. Constructor takes `TrackerGlobals` + optional `TrackerConfig`. Exposes `track`, `cookies`, `events`, `storage`, `getGlobals()`, `retarget()`. |
| `TrackerGlobals` | type | Required globals: `siteId: string`, optional `currency`, `cart`. |
| `TrackerConfig` | type | Extends `BeaconConfig`; adds `id?`, `framework?`, `mode?`, `doNotTrack?`. |
| `TrackerEvents` | type | Union of trackable event name strings. |
| `ShopperLoginEvent` | interface | `{ id: string }` |
| `TrackErrorEvent` | interface | Error details: `href`, `filename`, `stack`, `message`, `colno`, `lineno`, `errortimestamp`, `context`, `details`. |
| `ProductViewEvent` | interface | `uid?`, `parentId?`, `sku?`, `childUid?` (legacy), `childSku?` (legacy). |
| `ProductData` | interface | Extends `ProductViewEvent` with `qty` and `price`. |
| `OrderTransactionData` | interface | `order?: {...}`, `items: ProductData[]`. |
| `TrackMethods` | interface | Shape of `tracker.track` — `error`, `shopper.login`, `product.view`, `product.click` (deprecated), `cart.view` (deprecated), `order.transaction`. |

## Key Type Contracts

```typescript
type TrackerGlobals = {
  siteId: string;
  currency?: Currency;       // from @athoscommerce/beacon
  cart?: Product[];          // from @athoscommerce/beacon
};

type TrackerConfig = BeaconConfig & {
  id?: string;
  framework?: string;
  mode?: keyof typeof AppMode | AppMode;
  doNotTrack?: TrackerEvents[];
};

type TrackerEvents = 'error' | 'shopper.login' | 'product.view' | 'product.click' | 'cart.view' | 'order.transaction';

interface OrderTransactionData {
  order?: {
    id?: string | number;
    total?: string | number;
    transactionTotal?: string | number;
    city?: string;
    state?: string;
    country?: string;
  };
  items: ProductData[];
}
```

## Minimal Working Example

```typescript
import { Tracker } from '@athoscommerce/snap-tracker';

const tracker = new Tracker({ siteId: 'abc123' });

// Track a product page view
tracker.track.product.view({ uid: 'prod-1', sku: 'SKU-001' });

// Track a shopper login
tracker.track.shopper.login({ id: 'user@example.com' });

// Track an order transaction
tracker.track.order.transaction({
  order: { id: '12345', total: '99.99', transactionTotal: '99.99' },
  items: [{ uid: 'prod-1', sku: 'SKU-001', qty: 1, price: '99.99' }],
});

// Manage cart cookie/storage helpers
tracker.cookies.cart.add(['uid1', 'uid2']);
tracker.cookies.cart.get(); // string[]
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-tracker/src/index.ts`
- All types: `packages/snap-tracker/src/types.ts`
- Implementation: `packages/snap-tracker/src/Tracker.ts`
- `Tracker` extends `Beacon` from `@athoscommerce/beacon` — all Beacon `events` and `storage` methods are available but not re-exported here.
- `tracker.track.product.click()` and `tracker.track.cart.view()` are deprecated no-ops that log a warning.
- Script block auto-targeting: the constructor scans for `<script type="athos/track/...">` and `<script type="searchspring/track/...">` elements and fires the corresponding track calls automatically.
- `tracker.cookies.cart` provides string-based (uid) cart helpers layered on top of Beacon's `storage.cart` which uses `Product` objects.
- `window.athos.tracker` is set to the first `Tracker` instance constructed.

## README Fixes Applied
None — the README is accurate but minimal; it correctly describes the class and defers to external links for full API and integration details.
