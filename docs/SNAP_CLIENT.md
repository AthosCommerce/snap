# Snap Client

The `@athoscommerce/snap-client` package is a client for the Athos API. It is a wrapper around the Athos API that provides a simple interface for fetching data from the API.


## ClientGlobals

When constructing a new Client, the first argument is a `ClientGlobals` object. This object can be used to set client search parameters that will apply to all requests made with the client (and subsequently any controllers using the client as a service). Typically only the siteId will be set here, but could be used for setting globally utilized background filters and/or sorts as well.

You can find your Athos siteId in the [Athos Search & Product Discovery Console](https://console.athoscommerce.net)

```js
import { Client } from '@athoscommerce/snap-client';

const client = new Client({
	siteId: '1234567890',
	filters: [{
		field: 'stock_status',
		value: 'yes',
		type: 'value',
		background: true
	}],
});
```


## ClientConfig

The second argument is an optional `ClientConfig` object.

| Option | Type | Description |
|--------|------|-------------|
| mode | `string` \| `AppMode` enum <br>(e.g. `'development'`, `'production'`, `AppMode.development`, `AppMode.production`) | Optional. Sets the client mode. `'development'` disables network caching; |
| initiator | `string` | Optional. Identifies the initiator of requests (e.g. for analytics/debugging). |
| fetchApi | `WindowOrWorkerGlobalScope['fetch']` | Alternative fetch implementation to use for requests. Defaults to global `fetch`. |
| meta | `RequesterConfig<MetaRequestModel, MetaRequesterPaths>` | Configuration for the `meta` endpoint (origin, headers, cache, globals, paths). |
| search | `RequesterConfig<SearchRequestModel, SearchRequesterPaths>` | Configuration for the `search`, `autocomplete`, `category`, and `finder` endpoints (origin, headers, cache, globals, paths). |
| recommend | `RequesterConfig<RecommendRequestModel, RecommendRequesterPaths>` | Configuration for the `recommend` endpoint (origin, headers, cache, globals, paths). |
| suggest | `RequesterConfig<SuggestRequestModel, SuggestRequesterPaths>` | Configuration for the `suggest` and `trending` endpoints (origin, headers, cache, globals, paths). |


Where `RequesterConfig<RequestType, PathConfigurationType>` is defined as:

```js
type RequesterConfig<RequestType, PathConfigurationType> = {
	origin?: string;
	headers?: { [key: string]: string };
	cache?: {
		enabled?: boolean; // default: true - enables caching
		ttl?: number; // default: 300000 (5 minutes) - time in milliseconds to store a response in the cache
		maxSize?: number; // default: 200 - maximum size in KB to store in sessionStorage
		purgeable?: boolean; // default: true - allows the cache to be purged from sessionStorage when maxSize is reached (with exception when used for meta)
		entries?: { [key: string]: Response }; // default: undefined - allows for pre-populating the cache with entries, primarily used for email recommendations
	};
	globals?: Partial<RequestType>;
	paths?: Partial<PathConfigurationType>; // override the default API endpoint paths
};
```

Example: 

```js
import { Client } from '@athoscommerce/snap-client';

const client = new Client({
	siteId: '1234567890',
}, {
	mode: 'development',
	fetchApi: window.fetch,
	search: {
		cache: {
			enabled: true,
			ttl: 300000,
			maxSize: 100,
			purgeable: true,
		},
	},
});
```

## Caching & Retries

If the Client is running in a browser environment, the client will cache responses for 5 minutes in sessionStorage if available. This prevents unnecessary network requests and improves performance for previously made requests.

Also, for unexpected API response status codes, the client will retry failed requests by default up to 8 times with starting with a 1 second delay with fibonacci backoff for each subsequent retry.

Both caching and retries can be disabled or configured for each endpoint in the `ClientConfig` object.


## Opting out of API tracking

Requests made by the `search`, `category`, `finder`, `autocomplete` and `recommend` methods are tracked by the API by default. To opt a `search`, `category`, `finder` or `autocomplete` request out of API tracking, set `tracking.beacon` to `false` in its parameters; the request is then sent with `beacon=false`. For `autocomplete`, this applies to the autocomplete request, not the suggest request made before it.

To opt a `recommend` request out, set `beacon` to `false` in its parameters; the request is then sent with `beacon: false`.

Responses to requests that opt out are cached separately from tracked responses. Recommendation requests with `beacon: false` are batched separately from tracked requests, since the opt-out applies to the whole batch.

Controllers opt their requests out when their `beacon.enabled` config is not `true`, so a controller with `beacon: { enabled: false }` makes untracked requests.

```js
const { meta, search }: { meta: MetaResponseModel; search: SearchResponseModel } = await client.search({
	search: {
		query: {
			string: 'search query',
		},
	},
	tracking: {
		beacon: false,
	},
});
```


## API Types

The client uses the [@athoscommerce/snapi-types](https://www.npmjs.com/package/@athoscommerce/snapi-types) package to define the API types.


### Methods

#### meta

The `meta` endpoint is used to fetch metadata about the site and also contains common static data such as sort options that don't change between other API queries.


```js
const meta: MetaResponseModel = await client.meta();
```

#### autocomplete

The `autocomplete` endpoint is used to fetch autocomplete suggestions and results for a given search query and also requests the meta data for the site.


```js
const { meta, search }: { meta: MetaResponseModel; search: AutocompleteResponseModel } = await client.autocomplete({
	suggestions: {
		count: 5
	},
	search: {
		query: {
			string: 'search query',
		}
	}
});
```

#### search

The `search` endpoint is used to fetch search results for a given search query and also requests the meta data for the site.


```js
const { meta, search }: { meta: MetaResponseModel; search: SearchResponseModel } = await client.search({
	search: {
		query: {
			string: 'search query',
		},
	},
});
```


#### category

The `category` method makes a request to the Athos Category API to fetch search results for a given category page.

```js
const { meta, search }: { meta: MetaResponseModel; search: SearchResponseModel } = await client.category({
	search: {
		query: {
			string: 'search query',
		},
	},
});
```


#### finder

The `finder` method makes a request to the Athos Finder API to fetch search results for a given search query.

```js
const { meta, search }: { meta: MetaResponseModel; search: SearchResponseModel } = await client.finder({
	search: {
		query: {
			string: 'search query',
		},
	},
	filters: [{
		type: 'value',
		field: 'color',
		background: false,
		value: 'red',
	}],
});
```

#### trending

The `trending` method makes a request to the Athos Trending API to fetch trending search queries.

```js
const results: TrendingResponseModel = await client.trending({
	limit: 5,
});
```


#### recommend

The `recommend` method makes a request to the Athos Profile API and Recommend API to fetch recommendations for a given profile tag. This will also request the meta data.

```js
const results: RecommendCombinedResponseModel = await client.recommend({
	tag: 'similar',
	products: ['product123'],
});
```


<!-- TODO: add types for ProfileResponseModel and other types that are in the snap-client package and not in the snapi-types package -->