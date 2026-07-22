# PaginationInfo

Renders a current count of the current products available.

## Usage

### controller
The `controller` prop specifies a reference to the search controller.

```tsx
<PaginationInfo controller={controller} />
```

### Store Props
Alternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. 

```tsx
<PaginationInfo pagination={SearchPaginationStore} />
```

### infoText
The `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.

```tsx
<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>
```
## Lang

The `lang` prop allows you to override translatable text strings used by the PaginationInfo component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `infoText` | The pagination info display text | `pagination` (SearchPaginationStore) |

### Example

```tsx
<PaginationInfo
	controller={controller}
	lang={{
		infoText: {
			value: (data) => `Showing ${data.pagination?.begin}-${data.pagination?.end} of ${data.pagination?.totalResults} products`,
			attributes: {
				'aria-label': (data) => `Displaying ${data.pagination?.totalResults} results`,
			},
		},
	}}
/>
```
