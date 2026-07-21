# SortBy

Renders a Select dropdown or a RadioSelect, to be used with the SearchSortingStore for setting the current sorting. 

## Sub-components
- Select
- List
- RadioList

## Usage

### sorting
The `sorting` prop specifies an reference to the SearchSortingStore.

```tsx
<SortBy sorting={controller.store.sorting} />
```

### controller
The `controller` prop specifies an reference to the Search Controller.

```tsx
<SortBy controller={controller} />
```

### label
The `label` prop specifies an label to render as the title.

```tsx
<SortBy controller={controller} label={'Sort By'}/>
```

### hideLabel
The `hideLabel` prop hides the header title label

```tsx
<SortBy controller={controller} label={'Sort By'} hideLabel={true} />
```

### type
The `type` prop specifies which type of SortBy component to render. You can choose from 1 of 3 options - "Dropdown" | "List" | "Radio".
By default "Dropdown" is used. and will render a dropdown using the Select component. "Radio" will render a RadioSelect component, and "List" will render a RadioSelect component with radios disabled.

```tsx
<SortBy controller={controller} type={'Radio'} label={'Sort By'}/>
```

## Lang

The `lang` prop allows you to override translatable text strings used by the SortBy component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `label` | The sort selector label text | `options` (ListOption[]), `selectedOptions` (ListOption[]) |

### Example

```tsx
<SortBy
	controller={controller}
	lang={{
		label: {
			value: 'Sort Results',
		},
	}}
/>
```
