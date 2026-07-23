# Snap SDK — Package Agentic Summaries Reference

This file is auto-generated and source-verified. Each entry links to the `AGENTIC_SUMMARY.md`
for that package, which was produced by reading `src/index.ts` and key implementation files
as ground truth, then cross-checking against the snap-mcp index.

> **Before authoring or editing these summaries (or any MCP-indexed docs), read
> [REFERENCE_MCP_DOCUMENTATION_INDEXING.md](REFERENCE_MCP_DOCUMENTATION_INDEXING.md)** —
> it explains how the MCP chunks, embeds, and ranks this repo's documentation, and defines
> the chunk-aware authoring template these summaries follow (e.g. large export tables are
> split into categorized sub-sections to stay within the ~1500-character chunk boundary).

| Package | Key Exports | README Fixed? |
|---------|-------------|---------------|
| [`snap-toolbox`](../packages/snap-toolbox/AGENTIC_SUMMARY.md) | DomTargeter, StorageStore, filters, featureFlags | ✅ Added 10 missing exports to the README import example block: StorageStore, StorageType, debounce, escapeHTML, unescapeHTML, getContext, fieldNameToComponentName, sprintf, version, AppMode |
| [`snap-logger`](../packages/snap-logger/AGENTIC_SUMMARY.md) | Logger, LoggerConfig, colors, emoji | No |
| [`snap-profiler`](../packages/snap-profiler/AGENTIC_SUMMARY.md) | Profiler | No |
| [`snap-event-manager`](../packages/snap-event-manager/AGENTIC_SUMMARY.md) | EventManager, Middleware, Next, Callback | No |
| [`snap-url-manager`](../packages/snap-url-manager/AGENTIC_SUMMARY.md) | UrlManager, UrlTranslator, QueryStringTranslator, NoopTranslator | No |
| [`snap-tracker`](../packages/snap-tracker/AGENTIC_SUMMARY.md) | Tracker, TrackerGlobals, TrackerConfig, TrackerEvents | No |
| [`snap-client`](../packages/snap-client/AGENTIC_SUMMARY.md) | Client, ClientGlobals, ClientConfig, RecommendRequestModel | ✅ Added missing `type?: 'memory' | 'sessionStorage'` field to the CacheConfig type block; corrected the prose which incorrectly referenced 'localStorage' as the storage backend (actual options are 'memory' and 'sessionStorage'), and added the `type` key to the cache settings description. |
| [`snap-store-mobx`](../packages/snap-store-mobx/AGENTIC_SUMMARY.md) | AbstractStore, SearchStore, AutocompleteStore, FinderStore | No |
| [`snap-controller`](../packages/snap-controller/AGENTIC_SUMMARY.md) | AbstractController, SearchController, AutocompleteController, FinderController | ✅ Added missing `tracker` to the services destructuring example in the Services section (was `{ client, store, urlManager, eventManager, profiler, logger }`, corrected to `{ client, store, urlManager, eventManager, profiler, logger, tracker }`). |
| [`snap-platforms`](../packages/snap-platforms/AGENTIC_SUMMARY.md) | addToCart (shopify), addToCart (magento2), addToCart (bigcommerce), pluginBackgroundFilters | No |
| [`snap-preact`](../packages/snap-preact/AGENTIC_SUMMARY.md) | Snap, SnapHybrid, SnapTemplates, TemplatesStore | ✅ Renamed `targets` → `targeters` in three places in the README (full config example for search and autocomplete controllers, the per-controller field description, and the standalone SearchController example). The actual `SnapConfigControllerDefinition` type uses `targeters` but the README consistently used the wrong name `targets`. |

## Packages Covered (11)

- [`snap-toolbox`](../packages/snap-toolbox/AGENTIC_SUMMARY.md) — 22 public exports
- [`snap-logger`](../packages/snap-logger/AGENTIC_SUMMARY.md) — 4 public exports
- [`snap-profiler`](../packages/snap-profiler/AGENTIC_SUMMARY.md) — 1 public export
- [`snap-event-manager`](../packages/snap-event-manager/AGENTIC_SUMMARY.md) — 4 public exports
- [`snap-url-manager`](../packages/snap-url-manager/AGENTIC_SUMMARY.md) — 19 public exports
- [`snap-tracker`](../packages/snap-tracker/AGENTIC_SUMMARY.md) — 10 public exports
- [`snap-client`](../packages/snap-client/AGENTIC_SUMMARY.md) — 9 public exports
- [`snap-store-mobx`](../packages/snap-store-mobx/AGENTIC_SUMMARY.md) — 55 public exports
- [`snap-controller`](../packages/snap-controller/AGENTIC_SUMMARY.md) — 22 public exports
- [`snap-platforms`](../packages/snap-platforms/AGENTIC_SUMMARY.md) — 26 public exports
- [`snap-preact`](../packages/snap-preact/AGENTIC_SUMMARY.md) — 13 public exports

## How to Use

Each `AGENTIC_SUMMARY.md` contains:
1. **Purpose** — what the package does
2. **Public Exports** — table of every export with kind and description
3. **Key Type Contracts** — actual TypeScript types from source
4. **Minimal Working Example** — copy-paste usage
5. **Notes for MCP Retrieval** — pointers to authoritative source files

These summaries are designed to be chunked and indexed by an MCP server for accurate retrieval.
The source of truth is always `packages/<name>/src/index.ts`.

_Last generated: source-verified against packages/ as of this run._
