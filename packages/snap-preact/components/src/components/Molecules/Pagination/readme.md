# Pagination

Renders pagination page links for the given search response. 

## Sub-components
- Icon

## Usage
```tsx
import { Pagination } from '@athoscommerce/snap-preact/components';
```

### pagination
The required `pagination` prop specifies a reference to the pagination store object.

```tsx
<Pagination pagination={controller.store.pagination} />
```

### pages
The `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.

```tsx
<Pagination pagination={controller.store.pagination} pages={5} />
```

### pagesLeft
The `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.

```tsx
<Pagination pagination={controller.store.pagination} pagesLeft={2} />
```

### pagesRight
The `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.

```tsx
<Pagination pagination={controller.store.pagination} pagesRight={2} />
```

### hideFirst
The `hideFirst` prop disables the first page.

```tsx
<Pagination pagination={controller.store.pagination} hideFirst={true} />
```

### hideLast
The `hideLast` prop disables the last page.

```tsx
<Pagination pagination={controller.store.pagination} hideLast={true} />
```

### persistFirst
The `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.

```tsx
<Pagination pagination={controller.store.pagination} persistFirst={true} />
```

### persistLast
The `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.

```tsx
<Pagination pagination={controller.store.pagination} persistLast={true} />
```

### hideEllipsis
The `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. 

```tsx
<Pagination pagination={controller.store.pagination} hideEllipsis={true} />
```

### hideNext
The `hideNext` prop disables the next page.

```tsx
<Pagination pagination={controller.store.pagination} hideNext={true} />
```

### hidePrev
The `hidePrev` prop disables the previous page.

```tsx
<Pagination pagination={controller.store.pagination} hidePrev={true} />
```

### nextButton
The `nextButton` prop specifies the next page button content. This can be a string or JSX element.

```tsx
<Pagination pagination={controller.store.pagination} nextButton={'Next'} />
```

### prevButton
The `prevButton` prop specifies the previous page button content. This can be a string or JSX element.

```tsx
<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />
```

### firstButton
The `firstButton` prop specifies the first page button content. This can be a string or JSX element.

```tsx
<Pagination pagination={controller.store.pagination} firstButton={'First'} />
```

### lastButton
The `lastButton` prop specifies the last page button content. This can be a string or JSX element.

```tsx
<Pagination pagination={controller.store.pagination} lastButton={'Prev'} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the Pagination component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `previous` | Previous page button text/attributes | `pagination` (SearchPaginationStore) |
| `next` | Next page button text/attributes | `pagination` (SearchPaginationStore) |
| `first` | First page button text/attributes | `pagination` (SearchPaginationStore) |
| `last` | Last page button text/attributes | `pagination` (SearchPaginationStore) |
| `page` | Individual page number text/attributes | `pagination` (SearchPaginationStore), `page` (Page) |

### Example

```tsx
<Pagination
	pagination={controller.store.pagination}
	lang={{
		previous: {
			attributes: {
				'aria-label': 'Go to previous page',
			},
		},
		next: {
			attributes: {
				'aria-label': 'Go to next page',
			},
		},
		first: {
			attributes: {
				'aria-label': 'Go to the first page',
			},
		},
		last: {
			value: (data) => `Go to page ${data.pagination.last.number}`,
			attributes: {
				'aria-label': (data) => `Go to last page, page ${data.pagination.last.number}`,
			},
		},
		page: {
			attributes: {
				'aria-label': (data) => `Go to page ${data.page.number} of ${data.pagination.totalPages}`,
			},
		},
	}}
/>
```

When used with Snap Templates, these values can also be set via the `translations` config:

```tsx
new SnapTemplates({
	...
	translations: {
		en: {
			pagination: {
				previous: {
					attributes: { 'aria-label': 'Previous page' },
				},
				next: {
					attributes: { 'aria-label': 'Next page' },
				},
				page: {
					attributes: {
						'aria-label': (data) => `Page ${data.page.number} of ${data.pagination.totalPages}`,
					},
				},
			},
		},
	},
});
```