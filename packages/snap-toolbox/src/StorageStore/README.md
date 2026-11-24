# StorageStore
An interface for storing data in the browser session storage, local storage, cookies, or memory

```js
import { StorageStore } from '@athoscommerce/snap-toolbox';

const config = {
	type: 'session',
	key: 'ss-storage'
}

const storage = new StorageStore(config)

storage.set('path', 'value')
storage.get('path') // 'value'

console.log(storage.state) // { 'path': 'value' }
```

## `config` object
If `config` is not provided, storage will be saved to its internal `state` object

`type` (required) - the type of storage to use: `session`, `local`, `cookie`, or `memory`

`key` (required) - root level key that the data is stored under (for example `'ss-storage'`)

`cookie` - cookie config object, only used if type is `cookie`

`cookie.expiration` - cookie expiration in ms, default is 31536000000 (1 year)

`cookie.sameSite` - cookie sameSite attribute, allows you to declare if cookies should be restricted to a first-party or same-site context, default is `'Lax'`

```js
const config = {
	type: 'cookie',
	key: 'ss-storage',
	cookie: {
		expiration: 31536000000,
		sameSite: 'Strict',
	},
}	
```

## Fallback to memory
When the requested storage type is not available, the StorageStore keeps its data in its internal `state` object instead (the same as the `memory` type). Data stored this way is not persisted across page loads. This happens when:

- `type` is `session` or `local` and browser storage is unavailable (`featureFlags.storage` is false)
- `type` is `session` and session storage is blocked, or the existing entry under `key` cannot be read
- `type` is `cookie` and cookies are unavailable (`featureFlags.cookies` is false)

The `set`, `get` and `clear` methods work the same way in either case.

## `set` method
Accepts a path and value to save to storage

```js
storage.set(`facet.values`, facet.values)
```

## `get` method
Retrieves a value by path from storage. A path is required - `get` returns `undefined` when no path is provided. To read all stored data, use the [`state` property](#state-property).

```js
storage.get(`facet.values`)
```

## `clear` method
Clears all data from storage

```js
storage.clear()
```

## `state` property
The `state` object holds all stored data, keyed by path (not nested under `key`). It is refreshed from the backing storage whenever `get` or `set` is called. If a config has not been provided, or the storage fell back to memory, the StorageStore manages its `state` object instead of using session storage, local storage, or cookies. 

This `state` object can be accessed directly:

```js
storage.state // { 'path': 'value' }
```
