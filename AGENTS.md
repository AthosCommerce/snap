# AGENTS.md

## Project

Athos Commerce **Snap** — e-commerce search/discovery SDK. Monorepo of 14 TypeScript packages under `packages/*`, published as `@athoscommerce/snap-*` to NPM.

## Stack

TypeScript 5.6 (strict), Preact 10, MobX 6, Emotion CSS-in-JS, Lerna 9 + Nx 22 + npm workspaces. Dual ESM (`es2020`) and CJS (`es5`) builds per package.

## Commands

| Task            | Command                    | Notes                                                                                            |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------------ |
| Install         | `npm ci`                   | Always use `ci`, not `install` — lockfile is source of truth                                     |
| Build all       | `npm run build`            | Lerna delegates to each package; Nx caches with `dependsOn: ["^build"]`                          |
| Test all        | `npm run test`             | Root Jest (`bail: true`), then `posttest` runs demo Cypress E2E + preact Cypress component tests |
| Lint all        | `npm run lint`             | ESLint via Lerna; also Nx-cached                                                                 |
| Format all      | `npm run format`           | Prettier via Lerna                                                                               |
| Dev (all watch) | `npm run dev`              | All packages `tsc --watch` in parallel; demo at `https://localhost:2222`                         |
| Storybook       | `npm run storybook:preact` | Port 6006                                                                                        |
| Commit          | `npm run commit`           | Commitizen, conventional-changelog, 150 char max header                                          |

### Single-package operations

```sh
# Run tests for one package
npm run test --workspace=@athoscommerce/snap-client

# Build one package (must build deps first — Nx handles this via `npm run build`)
npm run build --workspace=@athoscommerce/snap-toolbox

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
snapps/              ← Gitignored; local co-development area
```

### Key entry points

- SDK orchestrator: `packages/snap-preact/src/Snap.tsx`
- Components: `packages/snap-preact/components/src/` (Atomic Design: Atoms → Molecules → Organisms → Templates)
- 7 themes in `packages/snap-preact/components/src/themes/`
- Platform integrations use conditional `exports` in `snap-platforms/package.json`

### Build output

Each package builds to `dist/esm/` and `dist/cjs/` via parallel `tsc` invocations. The build script is: `tsc & p1=$!; tsc -p tsconfig.cjs.json & p2=$!; wait $p1 && wait $p2`.

## Conventions

- **Commits**: Conventional commits required (Commitizen enforced). Use `npm run commit`.
- **Pre-commit hook**: Husky runs `lint-staged` — Prettier + ESLint on staged `.js/.ts/.tsx` files.
- **`no-explicit-any` is OFF** — the codebase uses `any` freely.
- **`@ts-ignore` requires a description** (`ban-ts-comment` with `allow-with-description`).
- **Unused vars**: Error, but `h`, `jsx`, and underscore-prefixed vars are allowed (`varsIgnorePattern: "^(h|jsx|_+)$"`).
- **No debugger statements** (`no-debugger: error`).
- **Preact, not React**: JSX pragma is `h`. React is aliased to Preact in bundler configs. Do not import from `react`.
- **Test files are excluded from lint and build** (see `tsconfig.json` excludes and `.eslintignore`).

## Testing

- Jest 29 with ts-jest, jsdom environment. Config at `jest.config.json` + `jest.base.config.json`.
- Tests live in `src/` alongside source as `*.test.ts` / `*.test.tsx`.
- Root Jest is `bail: true` and `silent: true` — stops on first failure.
- `posttest` triggers Cypress: demo E2E (`snap-preact-demo/tests/`) and component tests (`snap-preact/components/tests/`).
- Demo Cypress needs the dev server running (`start-server-and-test` handles this automatically).
- CI sets `NODE_OPTIONS="--max-old-space-size=4096"` for tests.

## Gotchas

- `npm run build` must complete before tests — Jest runs against source via ts-jest, but Cypress and cross-package imports need built `dist/`.
- Lerna `packages` config only includes `packages/*`, but npm `workspaces` also includes `packages/snapps/*`.
- `snap-preact` has sub-exports (`/components`, `/toolbox`) defined in its `exports` field — these are separate TypeScript compilation roots under `components/` and `toolbox/`.
- Preact is pinned to `10.28.4` via root `overrides` in `package.json`.
- Legacy SearchSpring references remain in some configs (prettier package, browserslist config, stale bot). The brand is now Athos Commerce.
