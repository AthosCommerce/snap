# snap-controller — Agentic Summary

## Purpose
Provides the four concrete controller classes (Search, Autocomplete, Finder, Recommendation) plus an abstract base class that wire together the Snap SDK services (client, store, urlManager, eventManager, profiler, logger, tracker) into a unified search-lifecycle orchestrator. Intended to be consumed via `@athoscommerce/snap-preact`, not directly.

## Public Exports — Controller Classes

| Export | Kind | Description |
|--------|------|-------------|
| `AbstractController` | class | Base class for all controllers; provides `init`, `search` (abstract), `on`, `plugin`, `use`, `setConfig`, `createTargeter`, `addTargeter`, `retarget`, `handleError` |
| `SearchController` | class | Extends AbstractController for search/PLP pages; adds `track`, `params`, `search`, `addToCart`, infinite-scroll and restore-position support |
| `AutocompleteController` | class | Extends AbstractController for typeahead; adds `bind`, `unbind`, `setFocused`, `reset`, `searchTrending`, `track`, `params`, `search`, `addToCart`, `handlers` |
| `FinderController` | class | Extends AbstractController for custom product finders |
| `RecommendationController` | class | Extends AbstractController for recommendation profiles |

## Public Exports — Constants & Enums

| Export | Kind | Description |
|--------|------|-------------|
| `INPUT_DELAY` | const | `200` — millisecond debounce delay for autocomplete input (exported from AutocompleteController) |
| `ControllerTypes` | enum | `search \| autocomplete \| finder \| recommendation` |

## Public Exports — Plugin & Attachment Types

| Export | Kind | Description |
|--------|------|-------------|
| `PluginFunction` | type | `(cntrlr: AbstractController, ...args: any) => Promise<void> \| void` |
| `PluginGrouping` | type | `[func: PluginFunction, ...args: unknown[]]` |
| `Attachments` | type | `{ middleware?, plugins?, [any] }` — used by `use()` |

## Public Exports — Event Data Types

| Export | Kind | Description |
|--------|------|-------------|
| `BeforeSearchObj` | type | Event data for the `beforeSearch` event |
| `SearchAfterSearchObj` | type | Event data for the `afterSearch` event on SearchController |
| `AutocompleteAfterSearchObj` | type | Event data for the `afterSearch` event on AutocompleteController |
| `FinderAfterSearchObj` | type | Event data for the `afterSearch` event on FinderController |
| `AfterSearchObj` | type | Union of the three `*AfterSearchObj` types |
| `AfterStoreObj` | type | Event data for the `afterStore` event |
| `RestorePositionObj` | type | Event data for the `restorePosition` event |
| `ElementPositionObj` | type | `{ href?, selector?, domRect? }` — scroll position record |

## Public Exports — Service & Context Types

| Export | Kind | Description |
|--------|------|-------------|
| `Controllers` | type | Union of all four concrete controller types |
| `ControllerServices` | type | Services bag passed to controller constructors |
| `ContextVariables` | type | `{ shopper?, page?, [variable] }` — optional 3rd constructor arg |
| `PageContextVariable` | type | `{ type: 'search' \| 'category' }` |

## Public Exports — Config Types

| Export | Kind | Description |
|--------|------|-------------|
| `ControllerConfig` | type | `StoreConfig & Attachments` |
| `SearchControllerConfig` | type | `ControllerConfig & SearchStoreConfig` |
| `FinderControllerConfig` | type | `ControllerConfig & FinderStoreConfig` |
| `AutocompleteControllerConfig` | type | `ControllerConfig & AutocompleteStoreConfig` |
| `RecommendationControllerConfig` | type | `ControllerConfig & RecommendationStoreConfig` |
| `ControllerConfigs` | type | Union of all four config types |

## Key Type Contracts

```typescript
// Services bag — required second argument to every controller constructor
type ControllerServices = {
  client: Client;
  store: SearchStore | AutocompleteStore | FinderStore | RecommendationStore;
  urlManager: UrlManager;
  eventManager: EventManager;
  profiler: Profiler;
  logger: Logger;
  tracker: Tracker;
};

// Minimum required config (all controller configs extend this)
type ControllerConfig = StoreConfig & Attachments;
// StoreConfig requires at minimum: { id: string }

// Plugin attachment shape
type PluginGrouping = [func: PluginFunction, ...args: unknown[]];
type Attachments = {
  middleware?: { [eventName: string]: Middleware<any> | Middleware<any>[] };
  plugins?: PluginGrouping[];
  [any: string]: unknown;
};

// Context (optional 3rd constructor arg)
type ContextVariables = {
  shopper?: { id: string; cart?: ProductViewEvent[]; [variable: string]: any };
  page?: PageContextVariable;
  [variable: string]: any;
};
```

## Minimal Working Example

```typescript
import { SearchController } from '@athoscommerce/snap-controller';

const controller = new SearchController(
  { id: 'search' },
  { client, store, urlManager, eventManager, profiler, logger, tracker }
);

// Attach middleware before init
controller.on('afterSearch', async (eventData, next) => {
  console.log('search complete', eventData);
  await next();
});

// Initializes URL subscription; auto-called on first search() if omitted
await controller.init();

// Trigger a search (reads state from urlManager)
await controller.search();
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-controller/src/index.ts`
- All types live in: `packages/snap-controller/src/types.ts`
- Concrete implementations: `src/Search/SearchController.ts`, `src/Autocomplete/AutocompleteController.ts`, `src/Finder/FinderController.ts`, `src/Recommendation/RecommendationController.ts`
- Abstract base: `src/Abstract/AbstractController.ts`
- `SearchController` and `AutocompleteController` also export internal helpers (`getStorableRequestParams`, `generateHrefSelector`) — these are not part of the public API
- All peer services (`Client`, `Store`, `UrlManager`, etc.) are dev dependencies; consumers must supply them (typically via `@athoscommerce/snap-preact`)
- The `tracker` service is required but was omitted from the README services snippet (now fixed)

## README Fixes Applied
- Added missing `tracker` to the services destructuring example: `{ client, store, urlManager, eventManager, profiler, logger }` → `{ client, store, urlManager, eventManager, profiler, logger, tracker }`
