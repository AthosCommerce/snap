# Snap Javascript Client

Simple Javascript client for communicating with the Athos Snap API.

## Installation

```bash
npm install --save @athoscommerce/snap-client
```

## Import
```js
import { Client } from '@athoscommerce/snap-client';
```

## Global Config
Client is constructed with `globals`.  

Globals are API parameters that will be applied to all searches requested by the client. This will typically contain just the *siteId*; but could also include global filters, background filters, sorts, or merchandising segments.

`siteId` (required)

```js
const globals = {
	siteId: 'a1b2c3'
};
```

Any other keys defined here will be passed to the API request

For example, with background filter:

```js
const globals = {
	siteId: 'a1b2c3',
  filters: [{
    field: 'stock_status',
    value: 'yes',
    type: 'value',
    background: true
  }]
};
```

## Client Config
Optional configuration for each requester. This can be used to specifiy a development origin URL or to configure cache settings per requester.

```js
type ClientConfig = {
	mode?: keyof typeof AppMode | AppMode;
	initiator?: string;
	fetchApi?: WindowOrWorkerGlobalScope['fetch'];
	meta?: RequesterConfig<MetaRequestModel, MetaRequesterPaths>;
	search?: RequesterConfig<SearchRequestModel, SearchRequesterPaths>; // also used by autocomplete, category, and finder
	products?: RequesterConfig<ProductsRequestModel, ProductsRequesterPaths>;
	recommend?: RequesterConfig<RecommendRequestModel, RecommendRequesterPaths>;
	suggest?: RequesterConfig<SuggestRequestModel, SuggestRequesterPaths>; // also used by trending
};

type RequesterConfig<RequestType, PathConfigurationType> = {
	origin?: string;
	headers?: HTTPHeaders;
	cache?: CacheConfig;
	globals?: Partial<RequestType>;
	paths?: Partial<PathConfigurationType>;
};

type CacheConfig = {
	enabled?: boolean;
	ttl?: number;
	maxSize?: number;
	type?: 'memory' | 'sessionStorage';
	purgeable?: boolean;
	entries?: { [key: string]: Response };
};

```

## Controller usage
Snap Client is a dependency of Snap Controller and it is recommended to use the Controller's `search` method to perform a search. 

## Cache usage
Each requester in the Snap Client has its own cache settings, which can be configured via the `ClientConfig` under `cache`. Settings include: 

  `enabled`: to opt out - Defaults to `true`, 

  `ttl`: to adjust how long the requests are stored (in ms) - Defaults to `300000`,

  `maxSize`: to adjust the maximum size of the cache (in kb) - Defaults to `1000`,

  `type`: to specify where the cache is stored, either `'memory'` or `'sessionStorage'` - Defaults to `'sessionStorage'` with the exception of `products` which always uses `'memory'`,

  `purgeable`: to allow auto purging of the requests from the cache when maxSize is hit, based on time remaining to expiration.  - Defaults to `true` with the exception of `meta`,

  `entries`: to allow preload the cache. This is primarily used in Email Recommendations. 

```js
const metaResponse = {
    "facets": {
        "brand": {
            "display": "list",
            "label": "Brand",
            "collapsed": false,
            "multiple": "or"
        },
        "collection": {
            "display": "list",
            "label": "Collection",
            "collapsed": false,
            "multiple": "or"
        },
        "color_family": {
            "display": "palette",
            "label": "Color",
            "collapsed": false,
            "multiple": "or"
        }
    },
    "sortOptions": [
        {
            "type": "relevance",
            "field": "relevance",
            "direction": "desc",
            "label": "Best Match"
        },
        {
            "type": "field",
            "field": "sales_rank",
            "direction": "desc",
            "label": "Most Popular"
        }
    ]
};

const metaKey = `/v1/meta/{"siteId":"atkzs2"}`;

const clientConfig = {
  meta: {
    cache: {
      entries: {
        [metaKey]: metaResponse
      }
    }
  }
}

const client = new Client(globals, clientConfig);

const response = await client.search({
  search: {
    query: {
      string: 'dress'
    }
  }
});
```

## Standalone usage
```js
const client = new Client(globals, clientConfig);

const { meta, search } = await client.search({
  search: {
    query: {
      string: 'dress'
    }
  }
});
```

## `search` method
Makes a request to the Athos Search API and returns a promise.  

```js
const client = new Client(globals, clientConfig);

const { meta, search } = await client.search({
  search: {
    query: {
      string: 'dress'
    }
  }
});
```

## `autocomplete` method
Makes a request to the Athos Autocomplete API and returns a promise.  

```js
const client = new Client(globals, clientConfig);

const { meta, search } = await client.autocomplete({
  suggestions: {
    count: 5
  },
  search: {
    query: {
      string: 'yellw',
    }
  }
});
```

## `category` method
Makes a request to the Athos Category API and returns a promise.

```js
const client = new Client(globals, clientConfig);

const { meta, search } = await client.category({
  filters: [{
    field: 'categoryId',
    value: '12345',
    type: 'value',
    background: true,
  }]
});
```

## `meta` method
Makes a request to the Athos Search API to fetch meta properties, it returns a promise. The `search` method utilizes this method.

```js
const client = new Client(globals, clientConfig);
const meta = await client.meta();
```

## `trending` method
Makes a request to the Athos Trending API and returns a promise. The `siteId` is sourced from globals automatically, but if provided that siteId would be used.

```js
const client = new Client(globals, clientConfig);
const results = await client.trending({
  siteId: 'REPLACE_WITH_YOUR_SITE_ID',
  limit: 5
});
```

## `finder` method
Makes a request to the Athos finder API and returns a promise.

```js
const client = new Client(globals, clientConfig);
const { meta, search } = await client.finder({
  filters: [{
    type: "value",
    field: "color",
    background: false,
    value: "red",
  }]
});
```

## `products` method
Makes a `GET` request to the Athos Products API (`/v1/products/[parentId]`) and returns a promise. The `parentId` parameter is required. The `siteId` is sourced from globals automatically, but if provided that siteId would be used. The default origin is `https://[siteId].a.athoscommerce.net` and can be overridden via the `products.origin` client config. Responses are cached in memory only (not in sessionStorage).

```js
const client = new Client(globals, clientConfig);
const product = await client.products({
  parentId: 'product123'
});
```

## `recommend` method
Makes a request to the Athos Recommend API and returns a promise.

```js
const client = new Client(globals, clientConfig);
const { profile, meta, results, responseId } = await client.recommend({
  tag: 'similar',
  siteId: 'REPLACE_WITH_YOUR_SITE_ID',
  products: ['product123'],
  shopper: '[REPLACE WITH LOGGED IN SHOPPER ID]'
});
```
