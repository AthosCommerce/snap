# snap-url-manager — Agentic Summary

## Purpose
Provides a standard, immutable URL state management API for Snap SDK products. It abstracts URL serialization/deserialization through pluggable `Translator` implementations and exposes transform methods (`set`, `merge`, `remove`) that return new `UrlManager` instances rather than mutating state in place.

## Public Exports — Core Classes & Linker

| Export | Kind | Description |
|--------|------|-------------|
| `UrlManager` | class | Core URL state manager; constructed with a `Translator` and optional `linker` |
| `UrlTranslator` | class | Translator using hash-fragment path-style URLs (e.g. `/search#/filter:color:blue`) |
| `QueryStringTranslator` | class | Translator using query-string URLs (e.g. `?q=dress&page=2`) |
| `NoopTranslator` | class | No-op translator for testing or server-side use |
| `reactLinker` | function | Linker that returns `{ href, onClick }` props for React anchor elements |

## Public Exports — Translator Contracts & Enums

| Export | Kind | Description |
|--------|------|-------------|
| `Translator` | interface | Contract that all translator implementations must satisfy |
| `TranslatorConfig` | interface | Base config shape for translators (`urlRoot`, `settings`) |
| `RangeValueProperties` | enum | `LOW = 'low'`, `HIGH = 'high'` — keys for range filter values |
| `ParamLocationType` | enum | `hash = 'hash'`, `query = 'query'` — parameter location type |

## Public Exports — URL State Types

| Export | Kind | Description |
|--------|------|-------------|
| `UrlState` | type | Canonical internal state shape shared across all translators |
| `ImmutableUrlState` | type | Immutable variant of `UrlState` (`ImmutableObject<UrlState>`) |
| `UrlStateRangeValue` | type | `{ low: number \| null; high: number \| null }` |
| `UrlStateFilterType` | type | `string \| number \| boolean \| UrlStateRangeValue` |
| `UrlStateFilter` | type | `{ [fieldName: string]: UrlStateFilterType \| Array<UrlStateFilterType> }` |
| `UrlStateSort` | type | `{ field: string; direction: string }` |

## Public Exports — Translator Config Types

| Export | Kind | Description |
|--------|------|-------------|
| `QueryStringTranslatorConfig` | type | Config for `QueryStringTranslator` |
| `UrlTranslatorConfig` | type | Config for `UrlTranslator` |
| `UrlTranslatorParametersConfig` | type | Parameter mapping config for `UrlTranslator` |
| `UrlTranslatorSettingsConfig` | type | Settings config for `UrlTranslator` |
| `CoreMap` | type | Core parameter name/type mapping for `UrlTranslator` |

## Key Type Contracts

```typescript
type UrlState = {
  page?: number;
  pageSize?: number;
  query?: string;
  rq?: string;
  fallbackQuery?: string;
  filter?: UrlStateFilter;
  sort?: UrlStateSort | Array<UrlStateSort>;
  tag?: string;
  [any: string]: unknown;
};

interface Translator {
  getCurrentUrl(): string;
  getConfig(): Record<string, unknown>;
  serialize(state: UrlState | ImmutableObject<UrlState>): string;
  deserialize(url: string): UrlState;
  bindExternalEvents?(update: () => void): void;
  go(url: string, config?: { [any: string]: unknown }): void;
}

interface TranslatorConfig {
  urlRoot?: string;
  settings?: {
    serializeUrlRoot?: boolean;
    [any: string]: unknown;
  };
  [any: string]: unknown;
}

// UrlManager constructor signature
constructor(
  translator: Translator,
  linker?: (urlManager: UrlManager) => Record<string, unknown>,
  // remaining params are internal — not part of public API
)
```

## Minimal Working Example

```typescript
import { UrlManager, UrlTranslator, reactLinker } from '@athoscommerce/snap-url-manager';

const urlManager = new UrlManager(new UrlTranslator({ urlRoot: '/search' }), reactLinker);

// Transforms return new UrlManager instances (immutable)
const withQuery = urlManager.set({ query: 'dress' });
const withFilter = withQuery.merge('filter.color', 'blue');

console.log(withFilter.href); // /search#/q:dress/filter:color:blue

// Navigate the browser
withFilter.go();

// Subscribe to URL changes
urlManager.subscribe((prev, next) => {
  console.log('URL changed', prev, next);
});

// React component usage
function FacetLink({ url }: { url: UrlManager }) {
  return <a {...url.link}>Click me</a>; // link = { href, onClick }
}
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-url-manager/src/index.ts`
- Type definitions: `packages/snap-url-manager/src/types.ts`
- `UrlManager` class: `packages/snap-url-manager/src/UrlManager/UrlManager.ts`
- Translators: `packages/snap-url-manager/src/Translators/` (QueryString, Url, Noop subdirectories)
- Linkers: `packages/snap-url-manager/src/linkers/react/react.ts`
- `UrlState` includes a `fallbackQuery` field not reflected in the Translators README example — the source in `types.ts` is authoritative
- `UrlManager` is immutable by design; all transform methods (`set`, `merge`, `remove`, `reset`, `withConfig`, `withGlobals`, `detach`) return new instances
- `detached` mode: `urlManager.detach()` creates an instance that does not push to the browser URL on `go()`
- Peer dependency: `seamless-immutable` and `deepmerge` (bundled as regular dependencies)

## README Fixes Applied
None — the README was accurate. No class names, constructor signatures, config keys, or export names required correction.
