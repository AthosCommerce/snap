# FinderStore
The finder store is meant to hold the API response and associated selection state. It extends the AbstractStore and the search response by adding several additional properties and methods to make working with the data easier.

```ts
import { FinderStore, FinderStoreConfig } from '@athoscommerce/snap-store-mobx'
import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';

const finderConfig: FinderStoreConfig = {
	id: 'finder',
	url: '/search',
	fields: [
		{
			field: 'ss_tire',
			label: 'Wheel Finder',
			levels: ['Year', 'Make', 'Model', 'Wheel Size']
		},
	]
};

const finderUrlManager = new UrlManager(new UrlTranslator()).detach();
const store = new FinderStore(finderConfig, { urlManager: finderUrlManager });

store.update(data);

console.log(store.toJSON());
```

## `meta` property
The meta property is an object containing the meta data retrieved from the Athos Meta API

## `pagination` property
See [SearchStore](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Search) `pagination` property

## `config` property

A reference to the `FinderStoreConfig` object that was provided to instantiate the FinderStore

## `storage` property
A reference to the [StorageStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-toolbox/src/StorageStore/README.md)

## `persistedStorage` property
A reference to the [StorageStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-toolbox/src/StorageStore/README.md) used for persisting finder selections (requires `config.persist.enabled` to be `true`)

## `persisted` property
The `persisted` property is used to determine if finder selections have been persisted. (requires `config.persist.enabled` to be `true`)

Will be set to `true` when the `loadPersisted` method is invoked and `selections` have been persisted from local storage. 

Will be set to `false` when the `reset` method is invoked (with `config.persist.enabled`). Changing a selection does not clear it - the `select` method only clears that selection's own `persisted` property.

## `save` method
The `save` method when invoked will save any current finder selections to local storage. (requires `config.persist.enabled` to be `true`)

## `loadPersisted` method
The `loadPersisted` method when invoked will update the store with data that has been saved to local storage using the `save` method. (requires `config.persist.enabled` to be `true`)

## `selections` property
An array of `Selection` and `SelectionHierarchy` objects. Each object represents a finder dropdown selection.

Both object types will have the following properties:

### `select` method
The `select` method should be invoked when a selection has been made, such as in the onChange event of a `<select>` element

```tsx
{selections.map((selection) => (
	<select onChange={(e) => {
		selection.select(e.target.value)
	}}>
		{selection.values.map((value) => (
			<option value={value.value}>{value.label}</option>
		))}
	</select>
))}
```

```js
// index 0 is the placeholder option, so the first real value is at index 1
selections[0].select(selections[0].values[1].value)
```

### `values` property
An array of the selection's facet values (`{ value, label, filtered }`). The first entry is always a placeholder option (`value: ''`, labelled with the selection's configured label, falling back to the facet `label`), followed by the values in `data`.

### `data` property
The facet values available for this selection, as stored in the [StorageStore](https://github.com/athoscommerce/snap/blob/main/packages/snap-toolbox/src/StorageStore/README.md)

### `config` property
A reference to the field config for this selection. For a `Selection` this is the entry in `config.fields`; for a `SelectionHierarchy` it is the level config (`{ index, label, key }`)

### `persisted` property
Set from the store's `persisted` state when the selection is created, and set to `false` when the selection's `select` method is invoked

### `type` property
Inherited from `facet.type` of the facet name that was provided in the config

### `field` property
Inherited from `facet.field` of the facet name that was provided in the config

### `filtered` property
Inherited from `facet.filtered` of the facet name that was provided in the config

### `collapsed` property
Inherited from `facet.collapsed` of the facet name that was provided in the config

### `display` property
Inherited from `facet.display` of the facet name that was provided in the config

### `label` property
Inherited from `facet.label` of the facet name that was provided in the config

### `multiple` property
Inherited from `facet.multiple` of the facet name that was provided in the config

### `id` property
A reference to the `id` property on the config 

### `disabled` property
Boolean set to `true` if this selection is disabled. Selections are disabled when restored from persisted storage with `config.persist.lockSelections` enabled. A `SelectionHierarchy` object is also disabled to enforce the user selects dropdowns in hierarchical order. A selection with no facet values is not disabled - it renders with only the placeholder option

### `selected` property
Contains the value of the selection that was made. 

### `custom` property

See [`custom` property](https://github.com/athoscommerce/snap/tree/main/packages/snap-store-mobx/src/Abstract)