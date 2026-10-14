# AGENTS.md

## Project

Athos Commerce **Snap** — e-commerce search/discovery SDK. Monorepo of TypeScript packages under `packages/*`, using the `@athoscommerce/snap-*` naming convention, with some packages published to npm.

## Stack

TypeScript 7.0 native compiler (strict), Preact 10, MobX 6, Emotion CSS-in-JS, Lerna 9 + Nx 22 + npm workspaces. Dual ESM and CJS builds targeting ES2020. TypeScript 6 remains installed as the compatibility API for ESLint, Jest, and TypeDoc.

## Commands

| Task            | Command                    | Notes                                                                                                   |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------------------- |
| Install         | `npm ci`                   | Always use `ci`, not `install` — lockfile is source of truth                                            |
| Build for dev   | `npm run build`            | Fast ESM-only library build for local development; skips CJS and demo production bundles                |
| Build all       | `npm run build:prod`       | Full ESM+CJS package and demo production build used by CI and releases                                  |
| Test all        | `npm run test`             | Full suite: Jest, then `npm run build`, then both Cypress suites. Stops at the first failure             |
| Test (Jest)     | `npm run test:core`        | Jest only (`bail: true`); needs no build. Coverage is opt-in via `npm run test:coverage`                 |
| Typecheck tests | `npm run typecheck:tests`  | Only type gate for `*.test.ts(x)` — Jest is transpile-only and build/lint both exclude test files        |
| E2E all         | `npm run test:e2e`         | Component Cypress then demo Cypress (in that order); needs `npm run build` first                         |
| E2E components  | `npm run test:e2e:components` | Preact component tests only; no dev server needed                                                     |
| E2E demo        | `npm run test:e2e:demo`    | Demo E2E only; boots the demo dev server via `start-server-and-test`                                     |
| Lint all        | `npm run lint`             | ESLint via Lerna; also Nx-cached                                                                        |
| Format all      | `npm run format`           | Prettier via Lerna                                                                                      |
| Dev (all watch) | `npm run dev`              | Runs each workspace's `dev` script in parallel (watchers/dev servers); demo at `https://localhost:2222` |
| Storybook       | `npm run storybook:preact` | Port 6006                                                                                               |
| Commit          | `npm run commit`           | Commitizen, conventional-changelog, 150 char max header                                                 |

### Single-package operations

```sh
# Run tests for one package
npm run test --workspace=@athoscommerce/snap-client

# Build one package for local development
npm run build --workspace=@athoscommerce/snap-toolbox

# Full production build for one package
npm run build:prod --workspace=@athoscommerce/snap-toolbox

# Lint one package
npm run lint --workspace=@athoscommerce/snap-controller
```

### CI order

A single `Tests` job (see `.github/workflows/test.yml`) runs, in order:

Lint -> Typecheck tests -> Jest (`test:core`) -> sitemap check -> `build:prod` -> both Cypress suites (`test:e2e`) -> demo preview deploy to S3 + CloudFront invalidation.

Steps stop at the first failure, so a lint or unit-test failure costs ~1 minute and never reaches the build, Cypress or deploy steps. The job is named `Tests` because branch protection matches required checks by job name — renaming it would leave PRs waiting on a check that never reports.

CI calls `test:core` / `test:e2e` directly rather than `npm test`, which is the full-suite entry point and would build and run Cypress twice.

## Architecture

```
snap-preact          ← top-level SDK, Preact components, themes, Storybook
├── snap-controller  ← Search, Autocomplete, Finder, Recommendation controllers
├── snap-client      ← API client (Search, Meta, Recommend, Suggest endpoints)
├── snap-store-mobx  ← MobX stores for all controller types + Cart, Storage
├── snap-tracker     ← Analytics via @athoscommerce/beacon
├── snap-url-manager ← URL state with Translators + Linkers
├── snap-event-manager
├── snap-logger
├── snap-profiler
├── snap-platforms   ← Conditional exports: common, shopify, magento2, bigcommerce
└── snap-toolbox     ← Zero-dep utilities (leaf of the dep graph)

snap-preact-demo     ← Private demo store (Webpack); E2E/Cypress tests live here
snap-shared          ← Private internal shared code
snapps/              ← gitignored; local co-development area
```

### Key entry points

- SDK orchestrator: `packages/snap-preact/src/Snap.tsx`
- Components: `packages/snap-preact/components/src/` (Atomic Design: Atoms → Molecules → Organisms → Templates)
- 5 themes in `packages/snap-preact/components/src/themes/` (`base`, `bocachica`, `pike`, `snapnco`, `snappy`); the sibling `themeComponents/` directory is shared pieces, not a theme
- Platform integrations use conditional `exports` in `snap-platforms/package.json`

### Build output

`build:prod` emits `dist/esm/` and `dist/cjs/` via parallel `tsc` invocations. Cleanup must finish before either compiler starts; the script groups both compiler processes after `rm -rf ./dist`. `build` runs a single `tsc` and emits ESM only.

## Conventions

- **Commits**: Conventional commits required (Commitizen enforced). Use `npm run commit`.
- **Pre-commit hook**: Husky runs `lint-staged` — Prettier + ESLint on staged `.js/.ts/.tsx` files.
- **`no-explicit-any` is off in lint, but don't write `any` in production code** — existing usages are debt, not precedent. See [Types](#types).
- **`@ts-ignore` requires a description** (`ban-ts-comment` with `allow-with-description`).
- **Unused vars**: Error, but `h`, `jsx`, and names made only of underscores (`_`, `__`) are allowed (`varsIgnorePattern: "^(h|jsx|_+)$"`). Use those to discard destructured props, as components do with `style: _`.
- **No debugger statements** (`no-debugger: error`).
- **Preact, not React**: JSX pragma is `h`. React is aliased to Preact in bundler configs. Do not import from `react` — hooks come from `preact/hooks`.
- **Test files are excluded from lint and build** (see `tsconfig.json` excludes and `eslint.config.cjs` `ignores`), so `npm run typecheck:tests` is the only thing that type-checks them.

## Standards

Snap is open source and integrators build directly on its public surface, so PRs are reviewed against these standards. Lint enforces only a few of them; the rest are on the author. Component rules are in `packages/snap-preact/components/AGENTS.md` and docs rules in `docs/AGENTS.md`.

### Public interfaces are long-term commitments

A consumer-facing surface is anything an integrator can touch: exports, component props, config options, theme and lang keys, classnames, events and tracking methods. Once released to `develop`/`main` it is hard to take back. Internal code can be refactored later; interfaces can't.

- **Check for an existing mechanism first.** Before adding a prop, option, method, store field or package, look for one that already covers the need and extend it instead of adding a parallel path.
- **Extensible signatures.** Add an options object rather than another positional parameter: `useLang(lang, data, { activeBreakpoint })`, not `useLang(lang, data, activeBreakpoint)`.
- **Precise types, no surprising defaults.** Use string-literal unions over `string`, and match sibling types (if sibling props accept CSS strings like `'12px'`, so does yours). A default an integrator wouldn't expect (e.g. a country defaulting to `'US'`) should be required instead, or documented.
- **Data lives in the layer that owns it.** Plugin-only data doesn't go on core stores (`AbstractStore`, `result.custom`), and stores don't mutate each other.
- **Consistent names.** Match sibling names and existing conventions (plugins are `pluginX`, e.g. `pluginBackgroundFilters`). A rename is applied everywhere: types, `subProps` keys, story args, lang keys, theme entries and docs.
- **Don't break released surfaces.** Removing or renaming a released prop, export, classname, default or config key needs a compatible path. Surfaces that exist only on `beta` can change freely.

### Types

- **No `any` in production code.** Use the real type, a generic, or `unknown` with narrowing. `any` is tolerated in tests.
- **Fix the type instead of casting.** Don't cast to force a value the type rejects (e.g. a filter `type: 'hierarchy'` when only `'value' | 'range'` exist).
- **`import type`** for imports used only as types.
- **Suppressions are a last resort.** `@ts-ignore` and `eslint-disable` need a reason and only when no typed fix exists. Use `_` names instead of disabling `no-unused-vars`.
- **One home per type.** Reuse shared types rather than redefining them locally; component prop types are registered in `packages/snap-preact/components/src/providers/themeComponents.ts`.

### Correctness

- **`0` is a valid number.** Don't truthiness-check numeric values (`if (low && high)`); compare against `undefined` or use `Number.isFinite`.
- **DOM listeners** are attached in `useEffect` with cleanup and a stable handler reference, never in the render body or a loop.
- **MobX:** set the observed property; don't replace the observed object (`result.state = { ... }`).
- **Tracking identifiers come from `result.mappings.core`** (`uid`, `parentId`, `sku`), not `result.id` or `attributes`. When the child variant is unknown, omit child fields rather than copying the parent's values.
- **Keep the original error.** Don't swallow or replace it in a `catch`; log it with the instance logger (`this.log`), not `console.*`. An intentionally empty `catch` gets a comment saying why.
- **Guard what can be missing, not what can't.** Handle lookups that can fail (meta facets by field, optional config). Don't add optional chaining or fallbacks for values that are always defined.
- **Fix sibling paths too.** A bug fixed in one controller or code path often exists in its siblings (Search, Autocomplete, Recommendation); check them.

### Tests

- **Bug fixes come with a test** that fails without the fix. New props, options and features get tests of their behavior (event wiring, rendered label/href/class), not just that something renders or is defined.
- **Assert exact values** when they're known: `toEqual` the full expected payload rather than `toContain` or `length > 0`. Assert the "before" state when testing a change, so the test can't pass without the behavior.
- **Names match the test.** A test's name and comments describe what its body actually checks.
- **No fixed waits** (`cy.wait(1100)`); use fake timers. Don't select on emotion-generated classnames.
- **Nothing left behind:** no `it.only`, `rendered.debug()` or permanently skipped tests.

### Leftovers and scope

- **Remove everything that existed for a removed thing:** types, props, `*Names` unions, lang entries, theme entries, story args, docs, and styles targeting its classnames. Search for the old name before finishing.
- **Delete, don't comment out.** No `console.log`, `debugger` or stray TODOs in source; track deferred work in an issue.
- **One concern per PR.** Unrelated fixes, refactors and drive-by changes go in their own PR. Explain any change that isn't self-evident in the PR description.
- **No manual version bumps:** `standard-version` handles them in the publish workflow.

### Docs move with the code

Docs must match the code in both directions, in the same PR. When a prop, option, default or behavior changes, update every place that describes it: the component `readme.md`, Storybook stories and argTypes, `docs/*.md`, package READMEs and code examples. When editing docs, make sure the code actually does what they say.

### Dependencies and imports

- Type-only and test-only packages go in root `devDependencies`.
- Import only from packages declared in the importing package's `package.json`. No relative imports into another package's `src`, and a package never imports from its own entry point.

### Before opening a PR

- `npm run lint`, `npm run typecheck:tests` and `npm run test:core` pass.
- The PR description lists interface changes: consumer-facing surfaces added, changed or removed, and whether any change breaks a released surface.
- Docs are updated for everything the PR touches.
- The author has read the whole diff and can explain every line, including generated code.

## Testing

- Jest 29 with ts-jest (transpile-only via `isolatedModules`), jsdom environment except `snap-event-manager`, which uses `node`. Config at `jest.config.json` + `jest.base.config.json`.
- Tests live in `src/` alongside source as `*.test.ts` / `*.test.tsx`.
- Root Jest uses `bail: true` to stop on the first failure and `silent: true` to reduce test output verbosity.
- `npm run test` is the humans' full-suite entry point: Jest, then `npm run build`, then both Cypress suites, `&&`-chained so it stops at the first failure. **CI does not use it** — the workflow calls `test:core` and `test:e2e` as separate steps so it can interleave lint and typecheck between them and run its own `build:prod` (needed for the S3 deploy).
- The e2e step only needs `npm run build` (fast, ESM-only), not `build:prod`. Verified: component Cypress passes against an ESM-only `dist`, and the demo E2E runs off the webpack dev server rather than the demo's production bundles. `build:prod` is only required for publishing and the CI preview deploy.
- **Both Cypress suites need `packages/*/dist`** (component specs import `@athoscommerce/*`, and the component webpack config has no source aliases, unlike Jest). They deliberately share one CI job so a single build serves both; splitting them would mean either building twice or plumbing artifacts. The cheaper component suite runs first, so a failure there skips the demo suite and its dev-server boot.
- Demo Cypress needs the dev server running (`start-server-and-test` handles this automatically). To iterate quickly, start it once (`npm run dev` in `snap-preact-demo`, wait for `https://localhost:2222`) and then run `npx cypress run --project tests` directly.
- `--spec` paths resolve against the current working directory, not `--project`, so from `snap-preact-demo` they must start with `tests/cypress/e2e/...`.
- CI sets `NODE_OPTIONS="--max-old-space-size=4096"` for tests.

### Cypress traps

- **`it('...', async () => {...})` with `cy` commands and no `await` silently skips every assertion.** The async function returns an already-resolved promise, Cypress treats that as the test finishing, and the command queue is abandoned — the test passes without testing anything. Spot it by comparing a test's reported duration against the work it claims to do. Never write a Cypress test as `async` unless it genuinely awaits something.
- **`cy.wrap(someValue).should(...)` freezes the value at queue time** and retries forever against a stale snapshot. Wrap the owning object and walk the path instead: `cy.wrap(controller).its('store.services.urlManager.state.filter').should('exist')`.
- **`cy.snapController()` doubles as a page settle.** Specs frequently click Snap-bound elements right after calling it; if the targeter has not bound yet the click silently does nothing, and the test fails much later on a missing selector. Its `settle` option (default 450ms, matching the previous implementation's floor) preserves that margin — do not tighten it casually; shortening it passes locally and fails on slower CI runners.
- `testIsolation: false` in the demo config means state carries between tests, so a change can break a *later* spec. After touching `tests/cypress/support/commands.js`, run the whole demo suite, not just the specs you edited.

## Gotchas

- **Jest needs no build; Cypress does.** `jest.base.config.json` maps `@athoscommerce/*` to each package's `src/`, so `npm run test:core` and `npm run typecheck:tests` run from a clean tree. Only the Cypress suites (`npm run test:e2e`) need a build, and `npm run build` is enough — see the note above. If you add a new workspace package or sub-export, add it to that `moduleNameMapper` *and* to `paths` in `tsconfig.test.json`, or its imports will fall back to `dist/` and reintroduce the stale-build hazard.
- **Jest is transpile-only** (`isolatedModules`), so it will not fail on type errors. `npm run typecheck:tests` is the only type gate for test files — the build's `tsconfig.json` `exclude` and `eslint.config.cjs` `ignores` both skip `*.test.ts(x)`. `tsconfig.test.json` must also include the ambient `*.d.ts` shims (`is-plain-object`, `css.escape`), which package builds get free via `include: ["src"]`; omitting them yields spurious `TS7016`.
- **`testTimeout` is a global-only Jest option** — setting it in a project config (`packages/*/jest.config.js`) is silently ignored and emits an "Unknown option" warning. Suites needing more than the 5s default call `jest.setTimeout()` in-file; do not "clean those up" as redundant.
- **A fresh git worktree has no `node_modules` and no `dist`** — run `npm ci` (and `npm run build` before Cypress) before anything else. Until you do, `npx tsc` falls through to whatever compiler is installed globally and reports confusing, unrelated config errors. The toolchain is two aliased packages — `@typescript/native` (`typescript@7.0.2`, the compiler `tsc` resolves to) and `typescript` (`@typescript/typescript6@6.0.2`, the compatibility API for ESLint/Jest/TypeDoc) — so only the local install matches `tsconfig.json`.
- `git stash` is repository-global, not per-worktree — `git stash list` and `git stash pop` operate on shared refs across every worktree. With several worktrees checked out, prefer committing over stashing.
- Lerna `packages` config only includes `packages/*`, but npm `workspaces` also includes `packages/snapps/*`.
- `snap-preact` has sub-exports (`/components`, `/toolbox`) defined in its `exports` field — these are separate TypeScript compilation roots under `components/` and `toolbox/`.
- Preact is pinned to `10.28.4` via root `overrides` in `package.json`.
- Legacy SearchSpring references remain in some configs (prettier package, browserslist config, stale bot). The brand is now Athos Commerce.
