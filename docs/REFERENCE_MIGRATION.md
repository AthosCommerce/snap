# Migration Guide: Searchspring Snap to Athos Snap

> [!NOTE]
> Athos Snap requires an Athos siteId (prefixed with `at`). Searchspring siteIds are **NOT** compatible with Athos Snap. Your account must be provisioned in the [Athos Search & Discovery Console](https://console.athoscommerce.net) before beginning this migration.

## Prerequisites

Before starting the migration, ensure the following:

- Your account has been set up in the [Athos Search & Discovery Console (ASD)](https://console.athoscommerce.net)
- You have a valid Athos siteId (starts with `at`)
- You have access to the site's Snap integration repository

## Migration Steps

### 1. Package Dependencies

Remove the old Searchspring packages and standalone dependencies, then add the Athos Snap package.

**Remove the following packages:**

```sh
npm uninstall @searchspring/snap-preact @searchspring/snap-preact-components preact mobx mobx-react
```

**Install the Athos Snap package:**

```sh
npm install @athoscommerce/snap-preact
```

The `@athoscommerce/snap-preact` package includes `preact`, `mobx`, and `mobx-react-lite` as dependencies -- they no longer need to be installed separately.

**Replace `mobx-react` with `mobx-react-lite`:**

All imports of `mobx-react` should be changed to `mobx-react-lite`. The `observer` API is the same.

```js
// Before
import { observer } from 'mobx-react';

// After
import { observer } from 'mobx-react-lite';
```

> [!NOTE]
> If you are using `@inject` or `@observer` decorators from `mobx-react`, these are not available in `mobx-react-lite`. You must refactor to the functional `observer()` wrapper instead.

### 2. Import Paths

All `@searchspring/snap-*` package imports must be updated to `@athoscommerce/snap-*`.

The `@searchspring/snap-preact-components` package has been consolidated into `@athoscommerce/snap-preact/components`.

| Before                                 | After                                   |
| -------------------------------------- | --------------------------------------- |
| `@searchspring/snap-preact`            | `@athoscommerce/snap-preact`            |
| `@searchspring/snap-preact-components` | `@athoscommerce/snap-preact/components` |
| `@searchspring/snap-controller`        | `@athoscommerce/snap-controller`        |
| `@searchspring/snap-store-mobx`        | `@athoscommerce/snap-store-mobx`        |
| `@searchspring/snap-tracker`           | `@athoscommerce/snap-tracker`           |
| `@searchspring/snap-url-manager`       | `@athoscommerce/snap-url-manager`       |
| `@searchspring/snap-event-manager`     | `@athoscommerce/snap-event-manager`     |
| `@searchspring/snap-toolbox`           | `@athoscommerce/snap-toolbox`           |
| `@searchspring/snap-platforms`         | `@athoscommerce/snap-platforms`         |
| `@searchspring/snap-logger`            | `@athoscommerce/snap-logger`            |
| `@searchspring/snap-profiler`          | `@athoscommerce/snap-profiler`          |

**Example:**

```jsx
// Before
import { Snap } from '@searchspring/snap-preact';
import { Result, InlineBanner } from '@searchspring/snap-preact-components';

// After
import { Snap } from '@athoscommerce/snap-preact';
import { Result, InlineBanner } from '@athoscommerce/snap-preact/components';
```

### 3. Global Object & Configuration

The global window object has been renamed from `searchspring` to `athos`.

**JavaScript references:**

```js
// Before
window.searchspring;
window?.searchspring;

// After
window.athos;
window?.athos;
```

This includes any usage in custom scripts, middleware, Cypress tests, or external integrations that reference the global object.

**package.json configuration key** *(Snapfu scaffolding only)*:**

```json
// Before
{
  "searchspring": {
    "siteId": "abc123",
    "framework": "preact",
    "platform": "shopify"
  }
}

// After
{
  "athos": {
    "siteId": "at1234",
    "framework": "preact",
    "platform": "shopify"
  }
}
```

> [!NOTE]
> Remember to update the `siteId` value to your new Athos siteId (prefixed with `at`).

### 4. Class Components

Athos Snap uses a newer version of Preact that disallows hook usage inside class components. If your integration has class components that use hooks (e.g. `useState`, `useEffect`, `useRef`), you must refactor them to functional components.

**Before:**

```jsx
// This will no longer work
class MyComponent extends Component {
	render() {
		const [value, setValue] = useState(''); // hooks cannot be used in class components
		return <div>{value}</div>;
	}
}
```

**After:**

```jsx
export const MyComponent = observer((props) => {
	const [value, setValue] = useState('');
	return <div>{value}</div>;
});
```

### 5. AfterSearch / AfterStore Middleware

The `afterSearch` middleware event payload has been restructured. The API response data is now nested under `response.search` and `response.meta` instead of being flat on the `response` object.

**Before:**

```js
controller.on('afterSearch', async (eventData, next) => {
	const { response } = eventData;

	// Old structure - data was flat on response
	const results = response.results;
	const pagination = response.pagination;
	const meta = response.meta;

	// ... custom logic
	await next();
});
```

**After:**

```js
controller.on('afterSearch', async (eventData, next) => {
	const { response } = eventData;

	// New structure - search data is nested under response.search
	const results = response.search.results;
	const pagination = response.search.pagination;
	const meta = response.meta;

	// ... custom logic
	await next();
});
```

Review all `afterSearch` and `afterStore` middleware in your `src/` directory and update any references to the response payload accordingly.

### 6. RecommendationBundle Props

The `RecommendationBundle` component now uses `title` and `description` values from the profile response by default. Previously these had to be provided manually.

If your integration has custom bundle components that generate their own title or description templates, you will need to adjust them to account for the default values now being populated automatically. Custom values will still override the defaults when provided.

### 7. RecommendationBundle Styles

A bug was fixed where the CSS class `addedToCart` was always applied to the bundle CTA button, regardless of state. The component now correctly uses a BEM modifier class that is only applied when the product has been added to the cart.

**Before (incorrect - class was always present):**

```scss
.ss__recommendation-bundle__wrapper__cta__button {
	&.addedToCart {
		// These styles were always applied due to the bug
		background-color: green;
	}
}
```

**After (correct - modifier class applied conditionally):**

```scss
.ss__recommendation-bundle__wrapper__cta__button {
	&.ss__recommendation-bundle__wrapper__cta__button--added {
		// These styles are now correctly applied only when added to cart
		background-color: green;
	}
}
```

Search your styling files for references to `.addedToCart` in recommendation bundle styles and update them to use the new modifier class.

### 8. Swatches Component

The Swatches component has moved away from using `swiper.js` and now uses the built-in `Slideshow` component. If your integration has custom styling targeting swiper.js classes or structure within Swatches, you will need to update those styles to work with the new Slideshow-based implementation.

### 9. Variants

Athos Snap no longer supports passing in a field to configure variants. If your integration relies on field-based variant configuration, you will need to update your implementation to use the current variants API.

See the [Variants reference](https://athoscommerce.github.io/snap/reference-variants) for the supported configuration options.

### 10. Recommendation Profile Tracker

The Recommendation Profile Tracker has been removed in Athos Snap. If your integration uses the profile tracker or has styles associated with it, you will need to remove that code and any related CSS/SCSS.
