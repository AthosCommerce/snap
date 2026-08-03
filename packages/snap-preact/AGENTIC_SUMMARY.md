# snap-preact — Agentic Summary

## Purpose
`@athoscommerce/snap-preact` is a config-driven abstraction layer for building Athos Search & Discovery integrations using Preact. It wires together controllers, a shared client, tracker, event manager, and DOM targeters from a single `SnapConfig` object.

## Public Exports

| Export | Kind | Description |
|--------|------|-------------|
| `Snap` | class | Core entry-point. Accepts a `SnapConfig`, creates all controllers and the `RecommendationInstantiator`, and binds DOM targeters. |
| `SnapHybrid` | class | Extends `Snap` to merge a `SnapTemplatesConfig` with a standard `SnapConfig` for hybrid integrations. |
| `SnapTemplates` | class | Entry-point for template-only integrations (re-exported from `./Templates`). |
| `TemplatesStore` | class | MobX store that drives the template engine (re-exported from `./Templates/Stores/TemplateStore`). |
| `polyfills` | const (Promise) | Promise that resolves after loading legacy-browser polyfills. Await before dynamically importing the main bundle. |
| `createSearchController` | function | Factory that creates a `SearchController` with full service wiring. |
| `createAutocompleteController` | function | Factory that creates an `AutocompleteController`. |
| `createFinderController` | function | Factory that creates a `FinderController`. |
| `createRecommendationController` | function | Factory that creates a `RecommendationController`. |
| `SnapConfig` | type | Top-level configuration object passed to `new Snap()`. |
| `SnapTemplatesConfig` | type | Configuration for the templates engine. |
| `SnapTemplatesConfigUnlocked` | type | Unlocked (more permissive) variant of `SnapTemplatesConfig`. |
| `TemplateEditorStore` | type | Type for the template editor store (type-only export). |
| `GlobalThemeStyleScript` | type | `(props: { name?: string; variables: ThemeVariables }) => CSSInterpolation` — function type for injecting global theme styles. |

## Key Type Contracts

```typescript
// SnapConfig — the single config object passed to new Snap()
export type SnapConfig = {
  features?: SnapFeatures;
  mode?: keyof typeof AppMode | AppMode;
  context?: ContextVariables;
  url?: UrlTranslatorConfig;
  client?: {
    globals?: Partial<ClientGlobals>;
    config?: ClientConfig;
  };
  tracker?: {
    globals?: TrackerGlobals;
    config?: TrackerConfig;
  };
  instantiators?: {
    recommendation?: RecommendationInstantiatorConfig;
  };
  controllers?: {
    search?: SnapConfigControllerDefinition<SearchControllerConfig>[];
    autocomplete?: SnapConfigControllerDefinition<AutocompleteControllerConfig>[];
    finder?: SnapConfigControllerDefinition<FinderControllerConfig>[];
    recommendation?: SnapConfigControllerDefinition<RecommendationControllerConfig>[];
  };
};

// Per-controller definition (note: field is "targeters", not "targets")
export type SnapConfigControllerDefinition<ControllerConfig> = {
  config: ControllerConfig;
  targeters?: ExtendedTarget[];
  services?: SnapControllerServices;
  url?: UrlTranslatorConfig & { initial?: InitialUrlConfig };
  context?: ContextVariables;
};

// ExtendedTarget — a DOM target with an optional Preact component to render
export type ExtendedTarget = Target & {
  name?: string;
  controller?: AbstractController;
  component?: () => Promise<any> | any;
  skeleton?: () => Promise<any> | any;
  props?: { [propName: string]: any };
  onTarget?: OnTarget;
  prefetch?: boolean;
  renderAfterSearch?: boolean;
};

// Snap class — key public members
class Snap {
  logger: Logger;
  client: Client;
  tracker: Tracker;
  context: ContextVariables;
  controllers: { [id: string]: Controllers };
  eventManager: EventManager;
  templates?: TemplatesStore;

  getController(id: string): Promise<Controllers>;
  getControllers(...ids: string[]): Promise<Controllers[]>;
  getInstantiator(id: string): Promise<RecommendationInstantiator>;
  createController(
    type: keyof typeof ControllerTypes,
    config: ControllerConfigs,
    services?: SnapControllerServices,
    urlConfig?: UrlTranslatorConfig,
    context?: ContextVariables,
    callback?: (value?: Controllers) => void | Promise<void>
  ): Promise<Controllers>;

  constructor(config: SnapConfig, services?: SnapServices);
}
```

## Minimal Working Example

```typescript
import { Snap } from '@athoscommerce/snap-preact';

const snap = new Snap({
  client: {
    globals: {
      siteId: 'abc123',
    },
  },
  controllers: {
    search: [
      {
        config: { id: 'search' },
        targeters: [
          {
            selector: '#search-results',
            component: () => import('./SearchResults').then((m) => m.SearchResults),
            hideTarget: true,
          },
        ],
      },
    ],
  },
});

// Access the controller once it has been created
snap.getController('search').then((controller) => {
  console.log('search controller ready', controller);
});
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-preact/src/index.ts`
- `Snap` class implementation: `packages/snap-preact/src/Snap.tsx`
- `SnapHybrid` class: `packages/snap-preact/src/SnapHybrid.tsx`
- Controller factories: `packages/snap-preact/src/create/` (createSearchController, createAutocompleteController, createFinderController, createRecommendationController)
- All shared types: `packages/snap-preact/src/types.ts`
- Templates entry: `packages/snap-preact/src/Templates/index.ts`
- Package exposes three entry points: `.` (main), `./components`, `./toolbox`
- Peer dependencies required: `preact ^10.28.4`, `mobx ^6.15.1`; optional: `mobx-react-lite ^4.1.1`
- The controller definition array field is named `targeters` (not `targets`) — a common source of confusion

## README Fixes Applied
- Renamed `targets` → `targeters` in the full config example (two controller definitions: `search` and `autocomplete`)
- Renamed `targets` → `targeters` in the per-controller doc reference ("optional array of Target objects...")
- Renamed `targets` → `targeters` in the standalone SearchController example
