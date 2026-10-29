# Snap Documentation

Snap is not an acronym! Snap is an open source SDK for building e-commerce experiences powered by Athos.

The SDK includes multiple core packages published to npm that in combination with each other, provide the complete front-end tooling for building e-commerce experiences with Athos. However to simplify usage, the `@athoscommerce/snap-preact` package is an abstraction that combines all core packages into a single dependency in combination with Preact to render the UI. This documentation is primarily focused on the usage of this package.

---
## Who Can Use Snap

Snap works with any storefront platform that supports custom JavaScript, including officially supported platforms **Shopify**, **BigCommerce**, and **Magento2**.

The right integration path depends on your team's frontend engineering capacity:

- **Snap Integration** — best for teams with solid JavaScript/TypeScript proficiency who want full control over markup, styling, and behavior.
- **Snap Templates Integration** — best for teams who want a fast, configuration-driven integration using pre-built templates and themes, with lighter development effort.
- **API Integration** — best for teams building a fully custom or headless storefront who want to work directly against the Athos APIs without adopting Snap's component layer.

See [Getting Started](#getting-started-with-snap) below for a full breakdown of each path.

---
## Getting Started with Snap

This documentation is organized into three sections: Snap Integration, Snap Templates Integration, and API Integration. Depending on how you're going to integrate Snap, you'll want to reference the correct section to get started.

### Quick Reference: Choosing an Integration Path

| Path | Best for | Uses | Effort |
|---|---|---|---|
| **Snap Integration** | Teams with solid JS/TS proficiency who want full control over markup, styling, and behavior | `Snap` export from `@athoscommerce/snap-preact` | Highest — full custom markup and plugins |
| **Snap Templates Integration** | Teams who want a fast, configuration-driven integration with lighter dev effort | `SnapTemplates` export from `@athoscommerce/snap-preact` | Medium — prebuilt templates/themes, limited config |
| **API Integration** | Teams building a fully custom or headless storefront, working directly against Athos APIs | `@athoscommerce/snap-client` (recommended, not required) | Lowest abstraction — no component layer, most manual work |
---

### Snap Integration

A "Snap Integration" is a project that uses the `Snap` export from the `@athoscommerce/snap-preact` package to build a storefront integration. It provides the ability to create multiple controllers, custom plugins, and full custom markup to match the storefront markup and inherit styles. It is the most flexible and powerful way to integrate Athos into your storefront. 

An example Snap Integration project can be found [here](https://github.com/snap-implementations/demo.shopify).

Continue by referencing the [Snap Setup](https://athoscommerce.github.io/snap/snap-setup) section.

### Snap Templates Integration

A "Snap Templates Integration" is a project that uses the `SnapTemplates` export from the `@athoscommerce/snap-preact` package to build a storefront integration. It is an abstraction of the `Snap` integration that limits the available configuration and does not provide access to the entire project markup. 

Instead, it is based on choosing an optimized and prebuilt template and theme while only customizing slight layout changes, theme variables, result card markup, and general style declarations. This integration type allows for a rapid integration of Athos to your storefront.

Continue by referencing the [Snap Templates Integration](https://athoscommerce.github.io/snap/templates-about) documentation.

### API Integration

An "API Integration" is a project that utilizes the Athos APIs directly to integrate into your custom storefront project. Although not required, we recommend using just the `@athoscommerce/snap-client` package to fetch data from Athos APIs. 

Continue by referencing the [API Integration](https://athoscommerce.github.io/snap/snap-client) section.

---
## Packages

Snap is modular — depending on your project's architecture, you can adopt it at the layer that best fits your needs, from a lightweight API client up to a full pre-built UI.

> [!TIP]
> **Why use Snap instead of raw API calls?** The Athos APIs provide the raw data; Snap provides the logic, state management, and UI components needed to build on top of it. Go all-in with the pre-built UI components, or use just the lightweight client to handle API requests — the layers are designed to be used independently or together.

### Data Layer: Snap Client

[`@athoscommerce/snap-client`](https://athoscommerce.github.io/snap/snap-client) is a lightweight wrapper around the Search, Autocomplete, and Recommendations APIs. It handles network requests, query parameter construction, and response parsing.

**Best for:** custom headless builds, mobile apps, server-side rendering (SSR), or any TypeScript/JavaScript runtime doing a pure API Integration.

### Logic Layer: Snap Controller

[`@athoscommerce/snap-controller`](https://athoscommerce.github.io/snap/reference-controllers) sits on top of the Client and manages state — active filters, current page, sorting, event tracking, and cookie management — exposing a store your UI can listen to. It's primarily used internally by Snap Preact, but is also published standalone for teams who want Snap's state management without adopting its UI layer.

**Best for:** apps where you want to own the UI (Vue, Angular, vanilla JS) but don't want to write your own filtering or pagination logic.

### UI Layer: Snap Preact

[`@athoscommerce/snap-preact`](https://athoscommerce.github.io/snap/reference-snap-preact) combines the Client and Controller with a library of Preact components, so you can build a full search and recommendation experience with minimal boilerplate while still being able to swap out any component for custom markup.

**Best for:** fast, high-performance storefront integrations where Snap handles the UI.

---
## Contributing

Snap is open source, and we'd love your help making it better.

- **Explore the code** — the full repository lives on [Github](https://github.com/athoscommerce/snap).
- **Report a bug or request a feature** — open a [Github issue](https://github.com/athoscommerce/snap/issues).
- **Ask a question or share an idea** — start a [Github discussion](https://github.com/athoscommerce/snap/discussions).
- **Submit a fix or feature** — open a pull request.

Before contributing, please review Athos's [Community Contribution Guidelines](https://github.com/searchspring/community/blob/main/CONTRIBUTING.md).
