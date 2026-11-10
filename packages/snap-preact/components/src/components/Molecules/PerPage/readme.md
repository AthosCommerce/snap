# PerPage

Renders a select dropdown or a RadioSelect to be used with the pagination store, for setting the page size.

## Sub-components
- Select
- List
- RadioList

## Usage

### pagination
The `pagination` prop specifies an reference to the SearchPaginationStore.

```tsx
<PerPage pagination={controller.store.pagination} />
```

### controller
The `controller` prop specifies an reference to the Search Controller.

```tsx
<PerPage controller={controller} />
```

### label
The `label` prop specifies an label to render as the title.

```tsx
<PerPage controller={controller} label={'Sort By'}/>
```

### type
The `type` prop specifies which type of PerPage component to render. You can choose from 1 of 3 options - "dropdown" | "list" | "radio".
By default "dropdown" is used. and will render a dropdown using the Select component. "radio" will render a RadioList component, and "list" will render a List component.

```tsx
<PerPage controller={controller} type={'radio'} label={'Sort By'}/>
```



## Lang

The `lang` prop allows you to override translatable text strings used by the PerPage component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `label` | The per-page selector label text | `options` (ListOption[]), `selectedOptions` (ListOption[]) |

### Example

```tsx
<PerPage
	controller={controller}
	lang={{
		label: {
			value: 'Items per page',
		},
	}}
/>
```
