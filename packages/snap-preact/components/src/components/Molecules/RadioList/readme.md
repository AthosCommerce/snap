# RadioList

Renders a list of options with radio inputs.

## Sub-components
- Radio

## Usage

### options
The required `options` prop specifies an array of Option Objects to be rendered.

```tsx
<RadioList options={store.options} />
```

### native
The `native` prop will use native html `<input type='radio'>` elements.

```tsx
<RadioList options={store.options} native={true} />
```

### hideOptionRadios
The `hideOptionRadios` prop will disable the option radio elements from rendering.

```tsx
<RadioList options={store.options} hideOptionRadios={true} />
```

### hideOptionLabels
The `hideOptionLabels` prop will disable the option label elements from rendering.

```tsx
<RadioList options={store.options} hideOptionLabels={true} />
```

### hideOptionIcons
The `hideOptionIcons` prop will disable the option icon elements from rendering.

```tsx
<RadioList options={store.options} hideOptionIcons={true} />
```

### titleText
The `titleText` prop is will render a title element

```tsx
<RadioList options={store.options} titleText={'Per Page'} />
```

### hideTitleText
The `hideTitleText` prop is will hide the title text.

```tsx
<RadioList options={store.options} titleText={'Per Page'} hideTitleText={true} />
```

### disabled
The `disabled` prop will put the inputs in a disabled state.

```tsx
<RadioList options={store.options} disabled={true} />
```

### horizontal
The `horizontal` prop will determine if the radio list options should render horizontally.

```tsx
<RadioList options={store.options} horizontal={true} />
```

### selected
The `selected` prop specifies the currently selected Option object. 

```tsx
<RadioList options={store.pagination.pageSizeOptions} selected={store.pagination.pageSizeOptions[0]} />
```

### Events

#### onSelect
The `onSelect` prop allows for a custom callback function for when a selection has been made.

```tsx
<RadioList options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the RadioList component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `title` | Optional title text above the radio list | `options` (ListOption[]), `selectedOptions` (ListOption[]) |

### Example

```tsx
<RadioList
	options={options}
	lang={{
		title: {
			value: 'Choose an option',
		},
	}}
/>
```
