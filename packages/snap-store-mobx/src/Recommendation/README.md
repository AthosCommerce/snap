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

## `quickview` property

`store.quickview` is a `QuickViewStore` instance shared with `SearchStore` and `AutocompleteStore`. It holds the state for the product quickview modal:

- Observable fields: `product?: Product`, `isOpen: boolean`, `loading: boolean`, `config?: QuickViewConfig`, `error?: QuickViewError`.
- Actions: `update({ result, productsData?, config?, storeConfig?, meta? })`, `close()`, `reset()`, `setLoading(loading, resultId?)`, `setError(error | undefined)`.

Consumers should drive the store via `controller.setQuickView(...)` / `controller.closeQuickView()` rather than calling these actions directly. See the [RecommendationController README](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Recommendation) for the full usage, and the [SearchStore quickview docs](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) for the complete observable surface.