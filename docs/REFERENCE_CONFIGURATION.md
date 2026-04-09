# Configuration

This configuration refers to the object passed to the `new Snap()` constructor. 

## Client

Required. Config object that is passed to the core `@athoscommerce/snap-client` package. This service handles the network requests to Athos APIs to retrieve data to be displayed.


| Option | Type | Description |
|---|---|---|
| client.globals | `Partial<ClientGlobals>` | Base query parameters to the API; these are parameters that will ALWAYS be included on every request. At the bare minimum, `siteId` is required and can be obtained in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net). See [Snap client](https://github.com/athoscommerce/snap/tree/main/packages/snap-client) for more information. |
| client.config | `ClientConfig` | Optional. See [Snap client](https://github.com/athoscommerce/snap/tree/main/packages/snap-client) for more information. |


## Mode

| Option | Type | Description |
|---|---|---|
| mode | `string` \| `AppMode` enum <br>(e.g. `'development'`, `'production'`, `AppMode.development`, `AppMode.production`) | Optional. Sets the application mode. `'development'` enables additional logging and disables network caching; Can also be set at runtime via url parameter `?dev=1` or `?dev=0`. `'production'` is for live usage and is the default mode. |

## Context

Optional Context object to be used to set the global context. If no context is provided, a default context taken from the integration script will be used, otherwise the provided config.context is merged with the script context. This context becomes the globalContext that is passed to all controllers that are created.


| Option | Type | Description |
|---|---|---|
| context | `ContextVariables` | Optional. Provides contextual variables for Snap, such as collection or user info. |

## URL

Optional. [`UrlTranslator` config](https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager/src/Translators/Url) object that is passed to the core `@athoscommerce/snap-url-manager` package used by all controllers. This parameter configuration will be applied to all controllers created via Snap, but can be specified per controller for specific customization.

| Option | Type | Description |
|---|---|---|
| url | `UrlTranslatorConfig` | Optional. Configures URL translation and parameter mapping. |


## Tracker

| Option | Type | Description |
|---|---|---|
| tracker | `{ globals?: TrackerGlobals; config?: TrackerConfig }` | Optional. Tracker configuration for analytics and event tracking. |

## Instantiators

| Option | Type | Description |
|---|---|---|
| instantiators | `{ recommendation?: RecommendationInstantiatorConfig }` | Optional. Custom instantiators for advanced controller/component instantiation, such as recommendations. See [`RecommendationInstantiator`](https://athoscommerce.github.io/snap/reference-snap-preact-instantiators) for more information. |

## Controllers

Specifies all of the controllers that we wish to create.

| Option | Type | Description |
|---|---|---|
| controllers | `{ search?: Controller[]; autocomplete?: Controller[]; finder?: Controller[]; recommendation?: Controller[] }` | Optional. Defines the controllers to instantiate (search, autocomplete, finder, recommendation), each with their own config. | 

> [!NOTE]
> - Each controller array (e.g. `search`, `autocomplete`, etc.) contains objects with at least a `config` property, and may include `targeters`, `services`, `url`, and `context`.
> - For detailed controller configuration, see the Snap documentation or type definitions for each controller type.


## Snap Methods

### getController

The `config` object contains all controller configurations. The most notable property here is the required `id` with a given value of `'search'`. This will be the name of the search controller that we can then interface with the return of the `new Snap()` instance via the `getController` method. 

In snap-preact controllers are created only as needed (typically when a targeter has found a target), their creation is an asynchronous process. The `getController` method will return a promise that will resolve to the controller object requested immediately after its creation.

For example:

```js
const snap = new Snap(config);
snap.getController('search').then((search) => {
	// do things with controller
});
```


### getControllers

If multiple controllers are needed at the same time, usage of the `getControllers` method is necessary. The `getControllers` method returns a promise that resolves to an array of controllers in the order requested by the parameters. The promise only resolves when ALL of the controllers have been created - if a controller is specified that is never created the promise will never resolve. For this reason this method should only be used when all controllers are needed simultaneously.

```js
const snap = new Snap(config);
snap.getControllers('search', 'autocomplete').then(([search, autocomplete]) => {
	// do things with controllers
});
```


### getInstantiator


Snap also provides a method to retrieve instantiators. Instantiatiors are used to create instances of the [`RecommendationInstantiator`](https://athoscommerce.github.io/snap/reference-snap-preact-instantiators) class, which is responsible for instantiating recommendations.

```js
const snap = new Snap(config);
snap.getInstantiator('recommendation').then((instantiator) => {
	// do things with instantiator
});
```


## Snap Properties

| Property | Description |
|---|---|
| `client` | A reference to the [snap-client](https://github.com/athoscommerce/snap/tree/main/packages/snap-client) default instance used when constructing all controllers |
| `tracker` | A reference to the [snap-tracker](https://github.com/athoscommerce/snap/tree/main/packages/snap-tracker) default instance used when constructing all controllers. It can also be used to access storage helper methods and event tracking methods. |
| `context` | A reference to the context object used when constructing all controllers. |
| `controllers` | An object containing all controllers that have been constructed. |
