# List

Renders a list of options.

## Sub-components
- Checkbox

## Usage
```tsx
import { List } from '@athoscommerce/snap-preact/components';
```

### options
The required `options` prop specifies an array of Option Objects to be rendered.

```tsx
<List options={store.options} />
```

### hideOptionCheckboxes
The `hideOptionCheckboxes` prop will disable the checkbox elements from rendering.

```tsx
<List options={store.options} hideOptionCheckboxes={true} />
```

### hideOptionLabels
The `hideOptionLabels` prop will disable the option label elements from rendering.

```tsx
<List options={store.options} hideOptionLabels={true} />
```

### hideOptionIcons
The `hideOptionIcons` prop will disable the option icon elements from rendering.

```tsx
<List options={store.options} hideOptionIcons={true} />
```

### requireSelection
The `requireSelection` prop will enable/disable the ability to have no options selected.

```tsx
<List options={store.options} requireSelection={false} />
```

### multiSelect
The `multiSelect` prop will enable/disable the ability to select more than one option at a time.

```tsx
<List options={store.options} multiSelect={true} />
```

### horizontal
The `horizontal` prop will render the list options horizontally.

```tsx
<List options={store.options} horizontal={true} />
```

### native
The `native` prop is a boolean to render unstyled native checkbox elements

```tsx
<List options={store.options} native={true} />
```

### titleText
The `titleText` prop is will render a title element

```tsx
<List options={store.options} titleText={'Per Page'} />
```

### hideTitleText
The `hideTitleText` prop is will hide the title element

```tsx
<List options={store.options} titleText={'Per Page'} hideTitleText={true} />
```

### disabled
The `disabled` prop will put the inputs in a disabled state.

```tsx
<List options={store.options} disabled={true} />
```

### selected
The `selected` prop specifies the currently selected option. It accepts either a single Option object (for single-select lists) or, when `multiSelect` is enabled, an array of Option objects representing the selected options.
```tsx
<List options={store.pagination.pageSizeOptions} selected={store.pagination.pageSizeOptions[0]} />
```

### Events

#### onSelect
The `onSelect` prop allows for a custom callback function for when a selection has been made.

```tsx
<List options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />
```
## Lang

The `lang` prop allows you to override translatable text strings used by the List component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `title` | Optional title text above the list | `options` (ListOption[]), `selectedOptions` (ListOption[]) |

### Example

```tsx
<List
	options={options}
	lang={{
		title: {
			value: 'Select an option',
		},
	}}
/>
```
