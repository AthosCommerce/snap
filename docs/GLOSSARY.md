# Glossary

Before diving into your implementation, let's get familiar with some of the common Snap terminology used throughout these docs.

- **Athos Search & Product Discovery Console** — The web console (`console.athoscommerce.net`) used to configure your site's search behavior — sorting, facet display, merchandising campaigns — and to find your `siteId` and secret key.

- **Background Filter** — A filter applied to a request without displaying it to the shopper as an active, removable filter. Used to scope [Category Pages](https://athoscommerce.github.io/snap/snap-category-pages) or restrict visibility to a user group. See [Background Filters](https://athoscommerce.github.io/snap/snap-background-filters).

- **Client** — The `@athoscommerce/snap-client` service that makes requests to the Athos API on behalf of a controller. A single client instance is shared across all controllers in a Snap instance.

- **Config** — The configuration object passed to `new Snap()` (or `SnapTemplates` / `SnapHybrid`) that determines which client, controllers, and services get created.

- **Context** — An object of variables (like `shopper`) made available to controllers, either read automatically from the page's script tag context or provided directly in config. Can be set globally or per-controller.

- **Controller** — The service responsible for tying together a client, store, urlManager, eventManager, profiler, and logger for a given feature. Controller types include Search, Autocomplete, Finder, and Recommendation.

- **Facet** — A filterable attribute of search results (e.g. Price, Size, Brand), exposed on `store.facets` with properties for its values, display type, and collapse state.

- **Finder** — A controller type for building custom guided-selling / product finder experiences, distinct from Search.

- **Foreground Filter** — A filter pre-applied to the URL on page load, visible and removable like any other applied filter (unlike a Background Filter). Only usable with a SearchController. See [Foreground Filters](https://athoscommerce.github.io/snap/snap-foreground-filters).

- **Instantiator** — Used with Recommendation controllers to create and manage multiple recommendation instances found on a page (one per script tag), accessible via `snap.recommendations`.

- **Middleware** — A function attached to a controller event (e.g. `beforeSearch`, `afterSearch`) via `controller.on()`, used to hook custom logic into the search lifecycle.

- **MobX** — The reactive state management library backing Snap's Stores; a peer dependency of `@athoscommerce/snap-preact`.

- **Preact** — The lightweight UI rendering library Snap's components are built on; a peer dependency of `@athoscommerce/snap-preact`.

- **Recommendation** — A controller type used for recommendation profiles, such as product carousels.

- **Result** — A single product (or banner) object in `store.results`, containing `mappings`, `attributes`, `mask` / `display`, `variants`, and a `custom` object for your own data.

- **Search** — The standard controller type used for search results and category pages.

- **Site ID (`siteId`)** — The unique identifier for your Athos account, found in the Athos Search & Product Discovery Console and required in `client.globals.siteId`.

- **Snap** — The primary export of `@athoscommerce/snap-preact` used to build a fully custom "Snap Integration," with complete control over controllers, targets, and components.

- **Snapfu** — The CLI (`npm install -g snapfu`) used to scaffold a new Snap project from a template.

- **SnapHybrid** — A class that bridges Snap Templates and standard Snap, letting you add full Snap control (custom controllers, targets) while preserving your existing Templates theme, translations, and components.

- **SnapTemplates** — An export of `@athoscommerce/snap-preact` for a configuration-driven integration built on pre-built, Athos-managed templates and themes — a faster alternative to a full Snap Integration.

- **Store** — The MobX-backed reactive data layer on a controller (`controller.store`) that holds the mutated API response — `results`, `facets`, `filters`, `pagination`, `sorting`, `merchandising`, etc. — for your components to render.

- **Target / Targeter** — The selector-and-component pairing in a controller's config that tells Snap where in the DOM to render a root-level component.

- **Tracker** — The shared `@athoscommerce/snap-tracker` instance used to send Beacon 2.0 tracking events (impressions, clicks, add-to-cart) for reporting.

- **UrlManager** — The service (`controller.urlManager`) that manages the page URL — reading and writing filter, sort, and page state — via a pluggable Translator.

- **Variant** — A different version of the same base product (size, color, etc.), available on `result.variants` when variants are enabled and configured.
