# RecommendationStore
The recommendation store is meant to hold the recommend and profile API response and associated state. It extends the AbstractStore and the recommend response by adding several additional properties and methods to make working with the data easier.

```js
import { RecommendationStore } from '@athoscommerce/snap-store-mobx'
import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';

const recommendationConfig = {
	id: 'recommendation',
	tag: 'also-bought'
};

const recommendationUrlManager = new UrlManager(new UrlTranslator()).detach(0);
const store = new RecommendationStore(recommendationConfig, { urlManager: recommendationUrlManager });

store.update(data);

console.log(store.toJSON());
```

## `reset` method
Reset store to the initial state by clearing data

```js
const store = new RecommendationStore();

store.reset()
```

## `profile` property
Contains an object with the following properties:

`tag` - the profile unique tag (set in ASD)

`placement` - location of the profile on a site (set in ASD)

`display` - object containing details regarding the template and any template parameters
## `results` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `results` property

## Quickview

The quickview modal state does not live on `RecommendationStore` — it is held by the `QuickviewStore`, the store of the shared `QuickviewManager`, reached via any controller at `controller.quickviewManager.store`:

- Observable fields: `product?: Product`, `isOpen: boolean`, `loading: boolean`, `resolvedConfig?: QuickviewConfig`, `error?: QuickviewError`.
- Actions: `update({ result, productsData?, config?, storeConfig?, meta? })`, `close()`, `reset()`, `setLoading(loading, product?)`, `setError(error | undefined)`.

`RecommendationController` exposes a `quickview(result)` method that forwards to the `QuickviewManager`. See the [RecommendationController README](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Recommendation) for the full usage, and the [QuickviewStore README](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/QuickView) for the complete observable surface.