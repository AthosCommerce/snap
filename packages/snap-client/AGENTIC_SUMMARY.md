# snap-client — Agentic Summary

## Purpose
`@athoscommerce/snap-client` is a lightweight HTTP client for the Athos Snap API. It exposes methods for search, autocomplete, category, finder, trending, recommend, and meta requests, handling caching and request merging internally.

## Public Exports

| Export | Kind | Description |
|--------|------|-------------|
| `Client` | class | Main client class; constructed with `ClientGlobals` and optional `ClientConfig` |
| `ClientGlobals` | type | Globals passed to every request — must include `siteId` |
| `ClientConfig` | type | Per-requester config (mode, origin, headers, cache, globals, paths) |
| `TrendingResponseModel` | type | Response shape for `client.trending()` |
| `RecommendCombinedResponseModel` | type | Response shape for `client.recommend()` — profile + results + meta + responseId |
| `ProfileResponseModel` | type | Profile data returned by the recommend profile endpoint |
| `RecommendResponseModel` | type | Raw recommend response (profile tag + results + responseId) |
| `RecommendRequestModel` | type | Request params for `client.recommend()` |
| `RecommendationRequestFilterModel` | type | Union of range and value filter models used in recommend requests |

## Key Type Contracts

```typescript
type ClientGlobals = {
  siteId: string;
  [configurationPath: string]: any;
};

type ClientConfig = {
  mode?: keyof typeof AppMode | AppMode;
  initiator?: string;
  fetchApi?: WindowOrWorkerGlobalScope['fetch'];
  meta?: RequesterConfig<MetaRequestModel, MetaRequesterPaths>;
  search?: RequesterConfig<SearchRequestModel, SearchRequesterPaths>;
  recommend?: RequesterConfig<RecommendRequestModel, RecommendRequesterPaths>;
  suggest?: RequesterConfig<SuggestRequestModel, SuggestRequesterPaths>;
};

type CacheConfig = {
  enabled?: boolean;
  ttl?: number;
  maxSize?: number;
  type?: 'memory' | 'sessionStorage';
  purgeable?: boolean;
  entries?: { [key: string]: Response };
};

type RecommendRequestModel = RecommendRequestGlobalsModel &
  RecommendRequestOptionsModel & {
    tag: string;
    profile?: RecommendRequestOptionsModel;
  };
```

## Minimal Working Example

```typescript
import { Client } from '@athoscommerce/snap-client';

const globals = { siteId: 'a1b2c3' };
const client = new Client(globals);

// Search
const { meta, search } = await client.search({
  search: { query: { string: 'dress' } }
});

// Recommendations
const { profile, meta: recMeta, results, responseId } = await client.recommend({
  tag: 'similar',
  products: ['product123'],
});
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-client/src/index.ts`
- All type definitions live in `packages/snap-client/src/types.ts`
- Main implementation: `packages/snap-client/src/Client/Client.ts`
- Internal API requesters (not exported): `packages/snap-client/src/Client/apis/` — MetaAPI, SearchAPI, RecommendAPI, SuggestAPI
- `RecommendationRequestRangeFilterModel` and `RecommendationRequestValueFilterModel` are not individually exported; only their union `RecommendationRequestFilterModel` is public
- Peer dependency on `@athoscommerce/snapi-types` for search/meta/autocomplete types (not re-exported by this package)
- Cache defaults (NetworkCache): `enabled: true`, `ttl: 300000` ms, `maxSize: 1000` kb, `type: 'sessionStorage'`, `purgeable: true` (except `meta` defaults `purgeable: false`)

## README Fixes Applied
- Added missing `type?: 'memory' | 'sessionStorage'` field to the `CacheConfig` type block in the README
- Corrected "localStorage" storage reference to the accurate "memory or sessionStorage" options, and added the `type` config key to the cache settings prose
