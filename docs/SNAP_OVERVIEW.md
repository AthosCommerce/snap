# Overview 🧭

Snap is built using the Model View Controller (MVC) pattern. When constructing an instance of the Snap class, the configuration object that is provided contains all the controllers that the project will use and where they will be rendered on the page. Each controller can be configured with various settings and custom functionality can be implemented via middleware to tie into the search lifecycle.

> [!TIP]
> This page walks through the architecture of a full **Snap Integration** — controllers, stores, and hand-built Preact components. Building with **Snap Templates** instead? Pre-built templates and themes already handle this wiring for you, so head over to [Snap Templates Integration](https://athoscommerce.github.io/snap/templates-about) for a faster path. Working directly against the Athos APIs? You can skip the component layer entirely — jump to [API Integration](https://athoscommerce.github.io/snap/snap-client).

<img src='/images/snap-search-lifecycle.svg'/>

 
**1. Config → controllers.**
You pass a config object listing every controller your project uses and the DOM target each one renders to.
 
**2. Controller → search.**
Each controller exposes `controller.search()`, which reads state from `controller.urlManager` and sends it to the Athos API. For `Search` controllers, urlManager tracks URL query/hash params. `Autocomplete`, `Recommendations`, and `Finder` controllers keep their urlManager detached from the URL — so, for example, opening an autocomplete dropdown never touches the browser's address bar or fires a full-page search.
 
**3. API → store.**
The response lands in `controller.store`. Each controller type (`Search`, `Autocomplete`, `Recommendations`, `Finder`) has its own store schema.
 
**4. Store → component.**
A root Preact component renders to the controller's target, receiving the controller via `props.controller`. It and its children read from `props.controller.store` and re-render automatically when the store changes.
 
**5. Interaction → urlManager → loop.**
Clicking a facet, page number, or sort option updates the urlManager state, which triggers a new `controller.search()` — and the cycle repeats from step 2.
 
---

>[!TIP]
>For the concrete configuration and component code behind this lifecycle, see [Minimum Viable Controller](https://athoscommerce.github.io/snap/snap-setup#minimum-viable-controller) in Setup — it walks through the controller config, `ControllerProvider`, and the `withController`/`observer` pattern used to build `Content` and `Results` components step by step.