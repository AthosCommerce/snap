# snap-toolbox — Agentic Summary

## Purpose
A collection of browser utility helpers for the Snap SDK, covering DOM targeting, storage abstraction, URL parsing, cookie management, feature flag detection, string filters, and miscellaneous utilities.

## Public Exports — DOM & Storage

| Export | Kind | Description |
|--------|------|-------------|
| `DomTargeter` | class | Mounts React/Preact components into DOM selectors; handles injection, hiding, retargeting, and cleanup |
| `Target` | type | Config shape for a single `DomTargeter` target |
| `OnTarget` | type | Callback signature `(target, elem, originalElem?, targeter?) => void \| Promise<void>` |
| `StorageStore` | class | Unified key/value store backed by `localStorage`, `sessionStorage`, cookies, or in-memory |
| `StorageConfig` | type | Config for `StorageStore` constructor |
| `StorageType` | enum | `session \| local \| cookie \| memory` |

## Public Exports — Feature Flags & Cookies

| Export | Kind | Description |
|--------|------|-------------|
| `featureFlags` | const | Pre-evaluated `{ cors, cookies, storage }` booleans |
| `getFlags` | function | Returns live `FeatureFlags` object with `.cors()`, `.cookies()`, `.storage()` methods |
| `cookies` | const | `{ set, get, unset }` cookie helpers (honours `featureFlags.cookies`) |

## Public Exports — URL Utilities

| Export | Kind | Description |
|--------|------|-------------|
| `url` | function | Parses a URL string into `{ base, params, url() }` |
| `URLParserResponse` | interface | Return type of `url()` |
| `charsParams` | function | Counts approximate query-string character length of a params object |
| `ParameterObject` | type | Input type for `charsParams` |
| `getContext` | function | Reads variables from Snap CDN `<script>` tags on the page |

## Public Exports — String & Formatting

| Export | Kind | Description |
|--------|------|-------------|
| `filters` | namespace | Re-exports `currency`, `formatNumber`, `handleize`, `stripHTML`, `truncate` filter functions |
| `escapeHTML` | function | Escapes `&`, `<`, `>`, `'`, `"` to HTML entities |
| `unescapeHTML` | function | Reverses common HTML entity escaping |
| `fieldNameToComponentName` | function | Converts `snake_case` field names to `kebab-case` component names |
| `sprintf` | function | C-style string formatting (`%s`, `%d`, `%f`, etc.) |

## Public Exports — Async & Misc

| Export | Kind | Description |
|--------|------|-------------|
| `debounce` | function | Returns a debounced wrapper for any function (default 200 ms) |
| `until` | function | Promise that polls until a value/function becomes truthy |
| `UntilOptions` | type | Options bag for `until` |
| `version` | const | Package version string (from `package.json`) |
| `AppMode` | enum | `production \| development` |

## Key Type Contracts

```typescript
// Target — DomTargeter target descriptor
export type Target = {
  selector: string;
  inject?: {
    action: 'before' | 'after' | 'append' | 'prepend' | 'replace';
    element: Element | ((target: Target, element: Element) => Element);
  };
  emptyTarget?: boolean;
  hideTarget?: boolean;
  autoRetarget?: boolean;
  clickRetarget?: boolean | string;
  navigationRetarget?: boolean;
  [any: string]: unknown;
};

// StorageConfig
export type StorageConfig = {
  type: StorageType | keyof typeof StorageType;
  cookie?: { expiration?: number; sameSite?: string };
  key: string;
};

// UntilOptions
export type UntilOptions = {
  checkMax: number;      // default 25
  checkCount: number;
  checkTime: number;     // default 60 ms
  exponential: number;   // default 1.1
  defer: boolean;
  executeFunction: boolean;
};

// URLParserResponse
export interface URLParserResponse {
  base: string;
  params: { query: { [key: string]: string }; hash: string };
  url: () => string;
}
```

## Minimal Working Example

```typescript
import { DomTargeter, StorageStore, StorageType, filters, until, url } from '@athoscommerce/snap-toolbox';

// Mount a component into a DOM selector
const targeter = new DomTargeter(
  [{ selector: '#search-results', emptyTarget: true }],
  (target, elem) => {
    elem.innerHTML = '<p>Snap mounted here</p>';
  }
);

// Persistent storage via localStorage
const store = new StorageStore({ type: StorageType.local, key: 'my-app' });
store.set('user.name', 'Alice');
console.log(store.get('user.name')); // 'Alice'

// Currency filter
console.log(filters.currency(1999, { symbol: '$' })); // '$19.99'

// Poll until an element exists
await until(() => document.querySelector('#lazy-widget'));

// Parse and mutate a URL
const parsed = url('https://example.com/search?q=boots#results');
parsed!.params.query['page'] = '2';
console.log(parsed!.url()); // 'https://example.com/search?q=boots&page=2#results'
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-toolbox/src/index.ts`
- `filters` is exported as a namespace (`export * as filters`) — import as `filters.currency(...)`, not as a named export
- `StorageStore` README: `packages/snap-toolbox/src/StorageStore/README.md`
- `featureFlags` is a static snapshot evaluated at import time; `getFlags()` re-evaluates on each call
- `getContext` targets Snap CDN script tags (`snapui.searchspring.io` / `snapui.athoscommerce.io`) or `id="athos-context"`
- `debounce` uses `window.setTimeout` — not suitable for Node/SSR environments
- `version` is imported directly from `package.json` via TypeScript `resolveJsonModule`

## README Fixes Applied
- Added missing exports to the import example block: `StorageStore`, `StorageType`, `debounce`, `escapeHTML`, `unescapeHTML`, `getContext`, `fieldNameToComponentName`, `sprintf`, `version`, `AppMode`
