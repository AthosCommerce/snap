<p align="center">
  <img src="images/flat-logo-snap.svg"/>  
</p>
<br/><br/>

# Snap 1.0

Welcome to Snap - Athos Commerce's SDK for integrating into front end web apps. We invite your participation through issues, discussions and pull requests! Please reference Athos's [Community Contribution Guidelines](https://github.com/searchspring/community/blob/main/CONTRIBUTING.md).

Please reference the [Snap Documentation](https://athoscommerce.github.io/snap/) to get started using Snap to build applications.

# Packages
The Snap mono-repo publishes multiple packages to NPM's registry; packages are versioned together, and it is recommended to utilize packages of the same exact versioning.

Documentation for each package can be found in its respective README file (`/packages/`).

# Prerequisite

## Node.js
We recommend usage of Node.js v16 or higher.
## NPM v7.x

NPM v7.x is required for its workspaces feature

NPM v7.7.0 is optional for executing scripts in workspaces

# Commands
While at the <b>repo root</b>, the following commands are available:

## Install dependencies
```shell
npm install
```

Always run TypeScript through the local install. This branch pins `typescript` to `npm:@typescript/typescript6@6.0.2`, so `npx tsc` from a directory without `node_modules` silently falls through to whatever compiler is installed globally and reports confusing, unrelated errors. That is a missing-install symptom, not a code or config error — run `npm ci` first.

## Build
Builds the ESM package outputs needed for local development:
```shell
npm run build
```

Builds the complete ESM, CJS, and demo production outputs:
```shell
npm run build:prod
```
## Dev
Executes `npm run dev` across all packages sequentially. All packages will be linked with hot reloading
```shell
npm run dev
```

Demo store: https://localhost:2222

## Docs
Serves the contents of the root directory to allow you to view the docs

Docs: http://localhost:1111/

```shell
npm run dev:docs
```

## Commit
Instead of using `git commit`, use `npm run commit` to utilize Commitizen
```shell
npm run commit
```

## Storybook Components
Preact Components: http://localhost:6006
```shell
npm run storybook:preact
```

## Tests (unit + headless E2E)

Runs everything — Jest, then `npm run build`, then both headless Cypress suites. It stops at the first failure, cheapest step first, so a broken unit test surfaces in seconds rather than after a build:

```shell
npm run test
```

To run just the Jest suite (no build required — cross-package `@athoscommerce/*` imports are mapped to each package's `src/` via `moduleNameMapper` in `jest.base.config.json`, so it runs straight from a fresh clone and always exercises current source rather than a possibly-stale `dist/`):

```shell
npm run test:core
```

Coverage is opt-in, since instrumenting every file slows the run:

```shell
npm run test:coverage
```

Jest runs transpile-only, so it does not report type errors. Test files are type-checked separately (nothing else in the repo covers them — the build and lint configs both exclude `*.test.ts`):

```shell
npm run typecheck:tests
```

The Cypress suites need a build first, but only the fast ESM-only one. Run them together, or individually while iterating:

```shell
npm run build && npm run test:e2e
```

```shell
npm run test:e2e:components
npm run test:e2e:demo
```

## Cypress (interactive)
The headless runs above are covered by `npm run test:e2e`. To open the Cypress UI instead, run it from the package that owns the suite — the demo for E2E specs, `snap-preact` for component specs. Both need a build first (`npm run build`).
```shell
npm run cypress --workspace=@athoscommerce/snap-preact-demo
npm run cypress --workspace=@athoscommerce/snap-preact
```

## Clean
Removes all package and root `node_modules` directories and package-lock.json; additionally removes generated documentation and test coverage data.
```shell
npm run clean
```
