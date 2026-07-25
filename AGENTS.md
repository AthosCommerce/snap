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
| Test all        | `npm run test`             | Root Jest (`bail: true`), then `posttest` runs demo Cypress E2E + preact Cypress component tests        |
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

Build -> Lint -> Test (see `.github/workflows/test.yml`). Tests need built output.

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
- **Test files are excluded from lint and build** (see `tsconfig.json` excludes and `.eslintrc.cjs` `ignorePatterns`).

## Testing

- Jest 29 with ts-jest, jsdom environment. Config at `jest.config.json` + `jest.base.config.json`.
- Tests live in `src/` alongside source as `*.test.ts` / `*.test.tsx`.
- Root Jest uses `bail: true` to stop on the first failure and `silent: true` to reduce test output verbosity.
- `posttest` triggers Cypress: demo E2E (`snap-preact-demo/tests/`) and component tests (`snap-preact/components/tests/`).
- Demo Cypress needs the dev server running (`start-server-and-test` handles this automatically). To iterate quickly, start it once (`npm run dev` in `snap-preact-demo`, wait for `https://localhost:2222`) and then run `npx cypress run --project tests` directly.
- `--spec` paths resolve against the current working directory, not `--project`, so from `snap-preact-demo` they must start with `tests/cypress/e2e/...`.
- CI sets `NODE_OPTIONS="--max-old-space-size=4096"` for tests.

### Cypress traps

- **`it('...', async () => {...})` with `cy` commands and no `await` silently skips every assertion.** The async function returns an already-resolved promise, Cypress treats that as the test finishing, and the command queue is abandoned — the test passes without testing anything. Spot it by comparing a test's reported duration against the work it claims to do. Never write a Cypress test as `async` unless it genuinely awaits something.
- **`cy.wrap(someValue).should(...)` freezes the value at queue time** and retries forever against a stale snapshot. Wrap the owning object and walk the path instead: `cy.wrap(controller).its('store.services.urlManager.state.filter').should('exist')`.
- **`cy.snapController()` doubles as a page settle.** Specs frequently click Snap-bound elements right after calling it; if the targeter has not bound yet the click silently does nothing, and the test fails much later on a missing selector. Its `grace` option preserves that settle for stores that never load — do not tighten it casually.
- `testIsolation: false` in the demo config means state carries between tests, so a change can break a *later* spec. After touching `tests/cypress/support/commands.js`, run the whole demo suite, not just the specs you edited.

## Gotchas

- `npm run build:prod` must complete before CI tests — Jest runs against source via ts-jest, but Cypress and cross-package imports need the full production output. The failure reads `Cannot find module '@athoscommerce/...'`, which looks like a broken Jest `moduleNameMapper` but is just a missing build.
- **A fresh git worktree has no `node_modules` and no `dist`** — run `npm ci && npm run build:prod` before anything else. Until you do, `npx tsc` falls through to whatever compiler is installed globally; with TypeScript 7 that fails as `error TS5108: Option 'moduleResolution=node10' has been removed`. That is a missing-install symptom, not a real type error.
- `git stash` is repository-global, not per-worktree — `git stash list` and `git stash pop` operate on shared refs across every worktree. With several worktrees checked out, prefer committing over stashing.
- Lerna `packages` config only includes `packages/*`, but npm `workspaces` also includes `packages/snapps/*`.
- `snap-preact` has sub-exports (`/components`, `/toolbox`) defined in its `exports` field — these are separate TypeScript compilation roots under `components/` and `toolbox/`.
- Preact is pinned to `10.28.4` via root `overrides` in `package.json`.
- Legacy SearchSpring references remain in some configs (prettier package, browserslist config, stale bot). The brand is now Athos Commerce.
