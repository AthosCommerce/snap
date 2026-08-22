# snap-store-mobx — Agentic Summary

## Purpose
Provides MobX-observable store classes that manage Snap API response state for search, autocomplete, finder, recommendation, cart, and meta controllers. Consumed internally by `@athoscommerce/snap-preact`; not intended for direct use.

## Public Exports — Top-Level Store Classes

| Export | Kind | Description |
|--------|------|-------------|
| `AbstractStore` | class | Base observable store; extended by Search, Autocomplete, and Finder stores |
| `SearchStore` | class | Holds search API response + derived state (facets, results, pagination, sorting, etc.) |
| `AutocompleteStore` | class | Holds autocomplete API response + query/term/trending/history state |
| `FinderStore` | class | Manages finder (field-selection) state with optional persistence |
| `RecommendationStore` | class | Holds recommendation API response and variant state |
| `CartStore` | class | Manages cart state |
| `MetaStore` | class | Holds meta API response data |

## Public Exports — Search Sub-Stores & Models

| Export | Kind | Description |
|--------|------|-------------|
| `SearchMerchandisingStore` | class | Merchandising banners/content within a search response |
| `BannerContent` | class | Individual banner content item |
| `ContentType` | enum | Banner content type values |
| `MerchandisingContentBanner` | class | Full banner model |
| `SearchPaginationStore` | class | Pagination state |
| `Page` | class | Single page entry |
| `SearchResultStore` | class | Result/product collection |
| `Product` | class | Single search result/product |
| `Banner` | class | Inline result banner |
| `VariantSelection` | class | Variant selection state for a product |
| `VariantSelectionValue` | class | Single variant option value |
| `SearchSortingStore` | class | Sort options and active sort |
| `SearchQueryStore` | class | Current search query state |
| `SearchHistoryStore` | class | Search query history |

## Public Exports — Facet & Filter Models

| Export | Kind | Description |
|--------|------|-------------|
| `SearchFacetStore` | class | Collection of facets for a search result |
| `ValueFacet` | class | Discrete-value facet |
| `RangeFacet` | class | Range facet |
| `FacetValue` | class | Single value within a ValueFacet |
| `FacetHierarchyValue` | class | Hierarchical facet value |
| `FacetRangeValue` | class | Range facet value |
| `SearchFilterStore` | class | Active filters for a search |
| `Filter` | class | Single active filter |

## Public Exports — Autocomplete Sub-Stores & Models

| Export | Kind | Description |
|--------|------|-------------|
| `AutocompleteFacetStore` | class | Facets within autocomplete results |
| `AutocompleteQueryStore` | class | Autocomplete query state |
| `AutocompleteStateStore` | class | Autocomplete open/closed/input state |
| `AutocompleteTermStore` | class | Suggested terms collection |
| `Term` | class | Single autocomplete term suggestion |
| `AutocompleteTrendingStore` | class | Trending terms state |
| `AutocompleteHistoryStore` | class | Autocomplete history state |

## Public Exports — Config Types

| Export | Kind | Description |
|--------|------|-------------|
| `StoreConfig` | type | Base config shape (`id`, optional `beacon`) |
| `SearchStoreConfig` | type | Config for SearchStore |
| `SearchStoreConfigSettings` | type | Settings block within SearchStoreConfig |
| `AutocompleteStoreConfig` | type | Config for AutocompleteStore |
| `AutocompleteStoreConfigSettings` | type | Settings block within AutocompleteStoreConfig |
| `FinderStoreConfig` | type | Config for FinderStore |
| `FinderFieldConfig` | type | Single field config for FinderStore |
| `RecommendationStoreConfig` | type | Config for RecommendationStore |
| `StoreConfigs` | type | Union of all store config types |
| `FacetStoreConfig` | type | Facet display/behavior config |
| `FilterStoreConfig` | type | Filter display/behavior config |
| `VariantConfig` | type | Variant realtime/options config |
| `VariantOptionConfig` | type | Per-option variant config |
| `VariantOptionConfigMappings` | type | Value-to-display mappings for variant options |
| `VariantConfigFilterTypes` | type | `'first'` \| `'unaltered'` |

## Public Exports — Support Types & Enums

| Export | Kind | Description |
|--------|------|-------------|
| `StoreServices` | type | `{ urlManager: UrlManager }` — services injected into stores |
| `ErrorType` | enum | `'warning'` \| `'info'` \| `'error'` |
| `BeaconSettings` | type | `{ enabled: boolean }` |
| `SelectedSelection` | type | Selected finder field state |
| `ResultBadge` | type | Badge data combining meta tag + result badge |

## Public Exports — Re-exports from snap-toolbox

| Export | Kind | Description |
|--------|------|-------------|
| `StorageStore` | class (re-export from snap-toolbox) | Unified key/value store backed by `localStorage`, `sessionStorage`, cookies, or in-memory |
| `StorageConfig` | type (re-export from snap-toolbox) | Config for StorageStore |
| `StorageType` | enum (re-export from snap-toolbox) | `'session'` \| `'local'` \| `'cookie'` \| `'memory'` |

## Key Type Contracts

```typescript
// Base config — every store config extends this
export type StoreConfig = {
  id: string;
  beacon?: { enabled: boolean };
  [any: string]: unknown;
};

// Search store config
export type SearchStoreConfig = StoreConfig & {
  globals?: Partial<SearchRequestModel>;
  settings?: SearchStoreConfigSettings;
};

// Autocomplete store config
export type AutocompleteStoreConfig = StoreConfig & {
  globals?: Partial<AutocompleteRequestModel>;
  selector: string;       // required CSS selector for the input
  action?: string;
  settings?: AutocompleteStoreConfigSettings;
};

// AbstractStore — base class
abstract class AbstractStore<Type = StoreConfig> {
  custom: {};
  loading: boolean;
  loaded: boolean;
  error?: { code?: number; type?: ErrorType; message?: string };
  config: Type;
  constructor(config: Type);
  setConfig(newConfig: Type): void;
  abstract update(data: any): void;
  toJSON(thing?: this): object;
}
```

## Minimal Working Example

```typescript
// Stores are created internally by controllers — direct instantiation is uncommon.
// Typical usage via snap-preact:
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import type { SearchStoreConfig } from '@athoscommerce/snap-store-mobx';

const config: SearchStoreConfig = {
  id: 'search',
  settings: {
    redirects: { merchandising: true, singleResult: true },
    facets: { trim: true, pinFiltered: true },
    infinite: { enabled: false },
  },
};

// In practice the store is instantiated by SearchController:
// controller.store // => SearchStore instance
// controller.store.results   // => Product[]
// controller.store.facets    // => SearchFacetStore
// controller.store.pagination // => SearchPaginationStore
```

## Notes for MCP Retrieval
- Authoritative export list: `packages/snap-store-mobx/src/index.ts`
- All config types and enums: `packages/snap-store-mobx/src/types.ts`
- Sub-store exports: `packages/snap-store-mobx/src/Search/Stores/index.ts` and `packages/snap-store-mobx/src/Autocomplete/Stores/index.ts`
- `StorageStore`, `StorageConfig`, and `StorageType` are re-exported from `@athoscommerce/snap-toolbox`
- Peer dependency: `mobx ^6.15.1` must be installed by the consumer
- The package is not meant for direct use — it is a dependency of `@athoscommerce/snap-preact`
- `AbstractStore` is extended by `SearchStore`, `AutocompleteStore`, and `FinderStore` (not `RecommendationStore`, `CartStore`, or `MetaStore`)

## README Fixes Applied
None — the README is accurate and intentionally brief, serving as a navigation index to per-store READMEs.
