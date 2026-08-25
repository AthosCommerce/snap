# snap-platforms — Agentic Summary

## Purpose
Provides platform-specific helper functions and controller plugins for common e-commerce operations (add-to-cart, background filters, result mutation) across Shopify, Magento 2, BigCommerce, and a platform-agnostic common sub-package.

## Public Exports

This package uses sub-path exports — there is no single root entry point. Import from the correct sub-path.

### `@athoscommerce/snap-platforms/common`

| Export | Kind | Description |
|--------|------|-------------|
| `pluginBackgroundFilters` | function (plugin) | Applies background filters to any controller |
| `PluginBackgroundFiltersConfig` | type | Config for `pluginBackgroundFilters` |
| `pluginScrollToTop` | function (plugin) | Scrolls page to top on search controller `restorePosition` event |
| `PluginScrollToTopConfig` | type | Config for `pluginScrollToTop` |
| `pluginLogger` | function (plugin) | Logs controller events for debugging |
| `PluginLoggerConfig` | type | Config for `pluginLogger` (alias of `AbstractPluginConfig`) |
| `pluginAddToCart` | function (plugin) | Generic add-to-cart plugin (platform-agnostic) |
| `PluginAddToCartConfig` | type | Config for `pluginAddToCart` |

### `@athoscommerce/snap-platforms/shopify`

| Export | Kind | Description |
|--------|------|-------------|
| `addToCart` | async function | Adds products to Shopify cart via fetch API |
| `AddToCartConfig` | type | Alias of `ShopifyAddToCartConfig` |
| `pluginBackgroundFilters` | function (plugin) | Shopify-specific background filters plugin |
| `PluginBackgroundFiltersConfig` | type | Config for Shopify background filters plugin |
| `pluginMutateResults` | function (plugin) | Mutates search/category results for Shopify (fetches Shopify product data) |
| `PluginMutateResultsConfig` | type | Config for `pluginMutateResults` |
| `pluginAddToCart` | function (plugin) | Shopify add-to-cart plugin |
| `PluginAddToCartConfig` | type | Config for Shopify add-to-cart plugin |

### `@athoscommerce/snap-platforms/magento2`

| Export | Kind | Description |
|--------|------|-------------|
| `addToCart` | async function | Adds products to Magento 2 cart via form POST |
| `AddToCartConfig` | type | Alias of `Magento2AddToCartConfig` |
| `getUenc` | function | Returns the current page's URL-encoded `uenc` value |
| `getFormKey` | function | Returns the Magento 2 form key from cookie |
| `pluginBackgroundFilters` | function (plugin) | Magento 2 background filters plugin |
| `PluginBackgroundFiltersConfig` | type | Config for Magento 2 background filters plugin |
| `pluginAddToCart` | function (plugin) | Magento 2 add-to-cart plugin |
| `PluginAddToCartConfig` | type | Config for Magento 2 add-to-cart plugin |
| `pluginBase` | function (plugin) | Magento 2 base plugin (sets product URLs on results) |
| `PluginBaseConfig` | type | Config for `pluginBase` |

### `@athoscommerce/snap-platforms/bigcommerce`

| Export | Kind | Description |
|--------|------|-------------|
| `addToCart` | async function | Adds products to BigCommerce cart via Storefront API |
| `AddToCartConfig` | type | Alias of `BigCommerceAddToCartConfig` |
| `pluginBackgroundFilters` | function (plugin) | BigCommerce background filters plugin |
| `PluginBackgroundFiltersConfig` | type | Config for BigCommerce background filters plugin |
| `pluginAddToCart` | function (plugin) | BigCommerce add-to-cart plugin |
| `PluginAddToCartConfig` | type | Config for BigCommerce add-to-cart plugin |

## Key Type Contracts

```typescript
// Shared base — all plugin configs extend this
type AbstractPluginConfig = {
  enabled?: boolean;
};

// common/src/types.ts — shared background filter primitives
type PluginBackgroundFilter =
  | { type: 'value'; field: string; value: string | number }
  | { type: 'range'; field: string; value: { low: number; high: number } };

type PluginBackgroundFilterGlobal = PluginBackgroundFilter & { background: true };

// Shopify AddToCartConfig (exported as AddToCartConfig from shopify sub-path)
type ShopifyAddToCartConfig = {
  redirect?: boolean | string;
  idFieldName?: string; // maps to display.mappings.core.uid
};

// Magento 2 AddToCartConfig
type Magento2AddToCartConfig = {
  formKey?: string;
  uenc?: string;
  redirect?: boolean | string;
  idFieldName?: string; // maps to display.mappings.core.uid
};

// BigCommerce AddToCartConfig
type BigCommerceAddToCartConfig = {
  redirect?: boolean | string;
  idFieldName?: string; // maps to display.mappings.core.id
};

// pluginScrollToTop config (common)
type PluginScrollToTopConfig = AbstractPluginConfig & {
  selector?: string;
  options?: {
    top?: number;
    left?: number;
    behavior?: 'auto' | 'instant' | 'smooth';
  };
};
```

## Minimal Working Example

```typescript
// Shopify: add a plugin to a search controller
import { pluginScrollToTop } from '@athoscommerce/snap-platforms/common';
import { pluginAddToCart } from '@athoscommerce/snap-platforms/shopify';

const searchConfig = {
  id: 'search',
  plugins: [
    [pluginScrollToTop, { enabled: true, selector: '#snap-layout' }],
    [pluginAddToCart, { enabled: true, redirect: '/cart' }],
  ],
  // ...
};

// Magento 2: standalone addToCart call
import { addToCart, getFormKey, getUenc } from '@athoscommerce/snap-platforms/magento2';

await addToCart(selectedProducts, {
  formKey: getFormKey(),
  uenc: getUenc(),
  redirect: true,
});
```

## Notes for MCP Retrieval
- Authoritative sources: `packages/snap-platforms/common/src/index.ts`, `packages/snap-platforms/shopify/src/index.ts`, `packages/snap-platforms/magento2/src/index.ts`, `packages/snap-platforms/bigcommerce/src/index.ts`
- Shared types live in `packages/snap-platforms/common/src/types.ts` and are used across all platform sub-packages
- The package has **no root entry point** — always import from a sub-path (`/common`, `/shopify`, `/magento2`, `/bigcommerce`)
- All plugins follow the signature `(controller: AbstractController, config?: PluginXConfig) => void`
- `pluginMutateResults` (Shopify) is unique to that platform — no equivalent in other platforms
- `getUenc` and `getFormKey` (Magento 2) are standalone utility functions, not plugins
- `pluginBase` (Magento 2) sets product URLs and is typically the first plugin added in Magento 2 integrations

## README Fixes Applied
None — the root README.md is accurate (intentionally brief, linking to per-platform docs).
```
