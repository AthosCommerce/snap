# AutocompleteStore
The autocomplete store is meant to hold the suggest and search API response and associated state. It extends the AbstractStore and the autocomplete response by adding several additional properties and methods to make working with the data easier.

```js
import { AutocompleteStore } from '@athoscommerce/snap-store-mobx'
import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';

const autocompleteConfig = {
	id: 'autocomplete',
	selector: '#searchInput',
	settings: {
		syncInputs: true
	},
};

const autocompleteUrlManager = new UrlManager(new UrlTranslator()).detach();
const store = new AutocompleteStore(autocompleteConfig, { urlManager: autocompleteUrlManager });

store.update(data);

console.log(store.toJSON());
```

## `updateTrendingTerms` method
Used to update the store with trending terms data

## `setService` method
Used to update the `urlManager` service on the store

## `reset` method
Reset store to the initial state by clearing data and locks

```js
store.reset()
```

## `resetTerms` method
Sets all term suggestions, trending terms and history terms to inactive (calls `resetSuggestions`, `resetTrending` and `resetHistory`)

## `resetSuggestions` method
Sets all term suggestions to inactive

## `resetTrending` method
Sets all trending term suggestions to inactive

## `resetHistory` method
Sets all history terms to inactive

## `initHistory` method
Populates the `history` property from previously stored search queries. History is only populated when `settings.history.limit` is set to a positive number and `settings.history.enabled` is not `false` - otherwise `history` is an empty array

## `meta` property
The meta property is an object containing the meta data retrieved from the Athos Meta API

## `state` property
Contains autocomplete lock state

A "lock" refers to a locked state of a certain component of autocomplete. There are two lock components of autocomplete:

`state.locks.terms` - this becomes locked when a term's `preview` method is called, resulting in the terms not changing while the user interacts with the facets and results for the locked term. Without locking, Autocomplete API requests from user interaction would cause the terms to change unexpectedly

`state.locks.facets`, similar to the terms lock, this prevents facets from changing when interacting with other facets. It becomes locked when a facet value's `preview` method is called, and is unlocked when a term's `preview` method is called


### `locks` property
The `locks` object contains two properties:

- `terms` property contains a Lock object

- `facets` property contains a Lock object

### `focusedInput` property
Contains a reference to the current focused `HTMLInputElement`

### `input` property
Contains the currently focused input value being searched

### `url` property
Contains a reference to the [UrlManager](https://github.com/athoscommerce/snap/tree/main/packages/snap-url-manager) from the store's `urlManager` service. It is replaced when a new `urlManager` is provided via the `setService` method

## `Lock` object
A `Lock` object contains a private boolean state. The `state.locks.terms` and `state.locks.facets` locks both start unlocked (`false`), and `reset` returns them to that state. The `Lock` class is not exported - use the instances on `store.state.locks`

### `reset` method
Sets lock state to the original starting state when the Lock was constructed

### `lock` method
Sets lock state to `true`

### `unlock` method
Sets lock state to `false`

### `locked` getter
Boolean `true` if the Lock state is locked

```js
const lock = store.state.locks.terms;
console.log(lock.locked) // false

lock.lock()
console.log(lock.locked) // true

lock.unlock()
console.log(lock.locked) // false

lock.lock()
lock.reset();
console.log(lock.locked) // false
```

## `storage` property
Contains a reference to the [StorageStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-toolbox/src/StorageStore/README.md)

## Quickview

The quickview modal state does not live on `AutocompleteStore` — it is held by the `QuickviewStore`, the store of the shared `QuickviewManager`, reached via any controller at `controller.quickviewManager.store`:

- Observable fields: `product?: Product`, `isOpen: boolean`, `loading: boolean`, `resolvedConfig?: QuickviewConfig`, `error?: QuickviewError`.
- Actions: `update({ result, productsData?, config?, storeConfig?, meta? })` and `reset()`. Closing lives on the manager (`quickviewManager.close()`); `isOpen`, `loading`, and `error` are driven by the `QuickviewManager`.

`AutocompleteController` exposes a `quickview(result)` method that forwards to the `QuickviewManager`. See the [AutocompleteController README](https://github.com/athoscommerce/snap/tree/main/packages/snap-controller/src/Autocomplete) for the full usage, and the [QuickviewStore README](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/QuickView) for the complete observable surface.

## `merchandising` property
Contains redirect and banner merchandising data that the Search API returned. See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `merchandising` property

## `search` property
Contains an object with the following properties:

`query` - query that was searched

`correctedQuery` - corrected query if spell correction occurred

`subject` - the search subject returned by the API

`matchType` - the match type returned by the API

Each query (`query`, `correctedQuery` and `subject`) is an object with a `string` value and a `url` UrlManager instance

## `terms` property
An array of `Term` objects.

## `trending` property
An array of trending `Term` objects.

## `history` property
An array of previously searched `Term` objects.

## `Term` object
Each `Term` object corresponds to a term returned from the Autocomplete API and/or Suggest API

### `active` property
Boolean set to `true` when the term is active, such when invoking the `preview` method

### `value` property
Term text value

### `url` property
Set to an instance of UrlManager for the term

### `preview` method
Query API for the term that was previewed and displays results.
This will also lock the term state, and unlock facets state. 


## `facets` property
An array of facets. See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `facets` property

In addition to all the search facets functionally, the values of Autocomplete facets will have an added `preview` method

### `preview` method
Each facet value has a `preview` method. It marks the facet and value as filtered, locks the facets state (`state.locks.facets`) and queries the API for the value's filter. Unlike `terms.preview`, it does not change the terms lock or term active states


## `filters` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `filters` property

## `results` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `results` property

## `pagination` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `pagination` property

## `sorting` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `sorting` property