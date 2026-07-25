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

Two jobs (see `.github/workflows/test.yml`):

1. **Tests** — Lint -> Typecheck tests -> Jest. Needs no build.
2. **E2E** — `needs: Tests`, so it is skipped entirely if the above fails. Build -> both Cypress suites -> demo preview deploy to S3.

CI calls `test:core` / `test:e2e` directly rather than `npm test`.

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
- 7 themes in `packages/snap-preact/components/src/themes/`
- Platform integrations use conditional `exports` in `snap-platforms/package.json`

### Build output

Each package builds to `dist/esm/` and `dist/cjs/` via parallel `tsc` invocations. Cleanup must finish before either compiler starts; the build script groups both compiler processes after `rm -rf ./dist ./components/dist`.

## Conventions

- **Commits**: Conventional commits required (Commitizen enforced). Use `npm run commit`.
- **Pre-commit hook**: Husky runs `lint-staged` — Prettier + ESLint on staged `.js/.ts/.tsx` files.
- **`no-explicit-any` is OFF** — the codebase uses `any` freely.
- **`@ts-ignore` requires a description** (`ban-ts-comment` with `allow-with-description`).
- **Unused vars**: Error, but `h`, `jsx`, and underscore-prefixed vars are allowed (`varsIgnorePattern: "^(h|jsx|_+)$"`).
- **No debugger statements** (`no-debugger: error`).
- **Preact, not React**: JSX pragma is `h`. React is aliased to Preact in bundler configs. Do not import from `react`.
- **Test files are excluded from lint and build** (see `tsconfig.json` excludes and `.eslintrc.cjs` `ignorePatterns`), so `npm run typecheck:tests` is the only thing that type-checks them.

## Testing

- Jest 29 with ts-jest (transpile-only via `isolatedModules`), jsdom environment except `snap-event-manager`, which uses `node`. Config at `jest.config.json` + `jest.base.config.json`.
- Tests live in `src/` alongside source as `*.test.ts` / `*.test.tsx`.
- Root Jest uses `bail: true` to stop on the first failure and `silent: true` to reduce test output verbosity.
- `npm run test` is the humans' full-suite entry point: Jest, then `npm run build`, then both Cypress suites, `&&`-chained so it stops at the first failure. **CI does not use it** — the workflow calls `test:core` and `test:e2e` separately so it can split them across jobs and do its own `build:prod` (needed for the S3 deploy).
- The e2e step only needs `npm run build` (fast, ESM-only), not `build:prod`. Verified: component Cypress passes against an ESM-only `dist`, and the demo E2E runs off the webpack dev server rather than the demo's production bundles. `build:prod` is only required for publishing and the CI preview deploy.
- **Both Cypress suites need `packages/*/dist`** (component specs import `@athoscommerce/*`, and the component webpack config has no source aliases, unlike Jest). They deliberately share one CI job so a single build serves both; splitting them would mean either building twice or plumbing artifacts. The cheaper component suite runs first, so a failure there skips the demo suite and its dev-server boot.
- Demo Cypress needs the dev server running (`start-server-and-test` handles this automatically). To iterate quickly, start it once (`npm run dev` in `snap-preact-demo`, wait for `https://localhost:2222`) and then run `npx cypress run --project tests` directly.
- `--spec` paths resolve against the current working directory, not `--project`, so from `snap-preact-demo` they must start with `tests/cypress/e2e/...`.
- CI sets `NODE_OPTIONS="--max-old-space-size=4096"` for tests.

### Cypress traps

- **`it('...', async () => {...})` with `cy` commands and no `await` silently skips every assertion.** The async function returns an already-resolved promise, Cypress treats that as the test finishing, and the command queue is abandoned — the test passes without testing anything. Spot it by comparing a test's reported duration against the work it claims to do. Never write a Cypress test as `async` unless it genuinely awaits something.
- **`cy.wrap(someValue).should(...)` freezes the value at queue time** and retries forever against a stale snapshot. Wrap the owning object and walk the path instead: `cy.wrap(controller).its('store.services.urlManager.state.filter').should('exist')`.
- **`cy.snapController()` doubles as a page settle.** Specs frequently click Snap-bound elements right after calling it; if the targeter has not bound yet the click silently does nothing, and the test fails much later on a missing selector. Its `grace` option preserves that settle for stores that never load — do not tighten it casually.
- `testIsolation: false` in the demo config means state carries between tests, so a change can break a *later* spec. After touching `tests/cypress/support/commands.js`, run the whole demo suite, not just the specs you edited.

## Gotchas

- **Jest needs no build; Cypress does.** `jest.base.config.json` maps `@athoscommerce/*` to each package's `src/`, so `npm run test:core` and `npm run typecheck:tests` run from a clean tree. Only the Cypress suites (`npm run test:e2e`) need a build, and `npm run build` is enough — see the note above. If you add a new workspace package or sub-export, add it to that `moduleNameMapper` *and* to `paths` in `tsconfig.test.json`, or its imports will fall back to `dist/` and reintroduce the stale-build hazard.
- **Jest is transpile-only** (`isolatedModules`), so it will not fail on type errors. `npm run typecheck:tests` is the only type gate for test files — the build's `tsconfig.json` `exclude` and `.eslintrc.cjs` `ignorePatterns` both skip `*.test.ts(x)`. `tsconfig.test.json` must also include the ambient `*.d.ts` shims (`is-plain-object`, `css.escape`), which package builds get free via `include: ["src"]`; omitting them yields spurious `TS7016`.
- **`testTimeout` is a global-only Jest option** — setting it in a project config (`packages/*/jest.config.js`) is silently ignored and emits an "Unknown option" warning. Suites needing more than the 5s default call `jest.setTimeout()` in-file; do not "clean those up" as redundant.
- **A fresh git worktree has no `node_modules`** — run `npm ci` before anything else. Until you do, `npx tsc` falls through to whatever compiler is installed globally; with TypeScript 7 that fails as `error TS5108: Option 'moduleResolution=node10' has been removed`. That is a missing-install symptom, not a real type error.
- `git stash` is repository-global, not per-worktree — `git stash list` and `git stash pop` operate on shared refs across every worktree. With several worktrees checked out, prefer committing over stashing.
- Lerna `packages` config only includes `packages/*`, but npm `workspaces` also includes `packages/snapps/*`.
- `snap-preact` has sub-exports (`/components`, `/toolbox`) defined in its `exports` field — these are separate TypeScript compilation roots under `components/` and `toolbox/`.
- Preact is pinned to `10.28.4` via root `overrides` in `package.json`.
- Legacy SearchSpring references remain in some configs (prettier package, browserslist config, stale bot). The brand is now Athos Commerce.
