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

### rows / columns
The `rows` and `columns` props limit how many options are visible before overflowing. The visible limit is `rows * columns`; any remaining options are hidden behind an overflow button.

```tsx
<List options={store.options} rows={1} columns={6} />
```

### overflowButtonInGrid
The `overflowButtonInGrid` prop renders the overflow button inline as one of the options (counting toward the limit) and switches its label to a `+ N` / `- N` remainder count.

```tsx
<List options={store.options} rows={1} columns={6} overflowButtonInGrid={true} />
```

### disableOverflowAction
The `disableOverflowAction` prop renders the overflow button as a static indicator that does not expand the list when clicked.

```tsx
<List options={store.options} rows={1} columns={6} disableOverflowAction={true} />
```

### hideShowLess
The `hideShowLess` prop only renders the overflow button while the list is limited, hiding it once expanded.

```tsx
<List options={store.options} rows={1} columns={6} hideShowLess={true} />
```

### overflowButton
The `overflowButton` prop accepts a custom JSX element to render in place of the default overflow button.

```tsx
<List options={store.options} rows={1} columns={6} overflowButton={<CustomButton />} />
```

### Events

#### onSelect
The `onSelect` prop allows for a custom callback function for when a selection has been made.

```tsx
<List options={store.sorting.options} onSelect={(e, option)=>{console.log(e, option)}} />
```

#### onOverflowButtonClick
The `onOverflowButtonClick` prop allows for a custom callback function for when the overflow button is clicked.

```tsx
<List options={store.options} rows={1} columns={6} onOverflowButtonClick={(e, status, remainder)=>{console.log(e, status, remainder)}} />
```