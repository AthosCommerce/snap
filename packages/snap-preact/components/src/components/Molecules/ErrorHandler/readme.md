# ErrorHandler

Renders error messages.

## Sub-components
- Icon
- Button

## Usage
```tsx
import { ErrorHandler } from '@athoscommerce/snap-preact/components';
```

### controller
The `controller` prop specifies a reference to a Snap controller. This is the standard usage.

```tsx
<ErrorHandler controller={controller} />
```

### error
The `error` prop provides an alternative means of utilizing the component to display errors messages.

```tsx
import { ErrorType } from '@athoscommerce/snap-store-mobx';
const errorObject = {
	code: 500,
	type: ErrorType.ERROR,
	message: 'Invalid Search Request or Service Unavailable',
}

<ErrorHandler error={errorObject} />
```

### onRetryClick
When a request has been rate limited, a 'warning' error with code `429` will be generated. For this error the component will render a 'retry' button to try the request again. By default the retry button will run the provided controller's `search` method unless the `onRetryClick` prop is provided.

```tsx
<ErrorHandler controller={controller} onRetryClick={(e) => {
    // do something
    controller.search();
}}/>
```

```tsx
import { ErrorType } from '@athoscommerce/snap-store-mobx';
const errorObject = {
	code: 429,
	type: ErrorType.WARNING,
	message: 'Too many requests try again later',
}

<ErrorHandler error={errorObject} onRetryClick={(e) => {
    // do something
}}/>
```


## ErrorHandle Types

```js
import { ErrorType } from '@athoscommerce/snap-store-mobx';

export enum ErrorType {
	WARNING = 'warning',
	INFO = 'info',
	ERROR = 'error',
}
```
## Lang

The `lang` prop allows you to override translatable text strings used by the ErrorHandler component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `warningText` | Warning message prefix text | `controller` (AbstractController) |
| `infoText` | Info message prefix text | `controller` (AbstractController) |
| `errorText` | Error message prefix text | `controller` (AbstractController) |
| `reloadText` | Retry button text | `controller` (AbstractController) |

### Example

```tsx
<ErrorHandler
	controller={controller}
	lang={{
		warningText: {
			value: 'Warning:',
		},
		errorText: {
			value: 'Something went wrong:',
		},
		reloadText: {
			value: 'Try Again',
		},
	}}
/>
```
