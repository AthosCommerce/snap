# Grid

Renders an Grid of options

## Components Used
- image

## Usage
```tsx
import { Grid } from '@athoscommerce/snap-preact/components';
```

### options
The required `options` prop specifies an array of options to render.

```tsx
const options: SwatchOption = [
		{
			value: 'one',
			disabled: true,
		},
		{
			value: 'two',
		},
		{
			value: 'three',
		},
	],

<Grid options={options} />
```

### gapSize
The optional `gapsize` props specifies the gap size between rows and columns.

```tsx
<Grid options={options} gapsize={'15px'} />
```

### columns
The optional `columns` prop specifies the number of columns to show in the grid. (defaults to 4)

```tsx
<Grid options={options} columns={3} />
```

### rows
The optional `rows` prop specifies the number of rows to show in the grid. Should be noted that if more `options` are passed than are allowed via `columns` and `rows` props, then the component will hide the overflow options behind a `+ 4 more` overflow button. 

```tsx
<Grid options={options} rows={2} />
```

### disableOverflowAction
The optional `disableOverflowAction` prop will disable the overflow action from the overflow button (`+ 4 more`s). This is to be used when you want the overflow button to show render but you do not want the grid to expand and show all options onclick of the overflow button. 

```tsx
<Grid options={options} rows={2} disableOverflowAction={true}/>
```

### overflowButton
The optional `overflowButton` prop accepts a custom JSX element to render instead of the default overflow button. The custom component will be passed the current expanded state of the grid, as well as the number of options hidden 

```tsx

const overflowButton = (expanded, remainder) => {
    return (
       expanded ? (
            <span>
                show {remainder} more
            </span>
        ) : (
            <span>
                Show Less
            </span>
        )
    )
}

<Grid options={options} rows={2} overflowButton={overflowButton}/>
```

### overflowButtonInGrid
The optional `overflowButtonInGrid` prop specifies if the overflow button should be rendered in the grid or below. 

```tsx
<Grid options={options} overflowButtonInGrid={true} />
```

### onOverflowButtonClick
The optional `onOverflowButtonClick` prop specifies to custom function to call onClick of the overflow button. 

```tsx
const onOverflowButtonClick = (expandedState: boolean, remainder: number) => {
    console.log(expandedState, remainder);
}

<Grid options={options} onOverflowButtonClick={onOverflowButtonClick} />
```

### hideLabels
The optional `hideLabels` prop specifies if option labels should be hidden. 

```tsx
<Grid options={options} hideLabels={true} />
```

### hideShowLess
The optional `hideShowLess` prop specifies if show less button should be hidden. 

```tsx
<Grid options={options} hideShowLess={true} />
```

### multiselect
The optional `multiselect` prop specifies if more than a single option can be selected at once. 

```tsx
<Grid options={options} multiselect={true} />
```

### onSelect
The optional `onSelect` prop specifies callback function to be called on option click. 

```tsx
const onSelectFunc = (event, clickedOption, currenctlySelectedOptionArray) => {
    console.log(event, clickedOption, currenctlySelectedOptionArray)
}

<Grid options={options} onSelect={onSelectFunc} />
```

### titleText
The optional `titleText` prop specifies the text to be rendered in the grid title. 

```tsx
<Grid options={options} titleText={"Grid Title"} />
```

### selected
The optional `selected` prop specifies the selected option(s) if the selected state is handled outside of the component. 

```tsx

const selectedOption: SwatchOption = [
    {
        value: 'two',
    },
]

<Grid options={options} selected={selectedOption} />
```



## Lang

The `lang` prop allows you to override translatable text strings used by the Grid component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `showMoreText` | Show more button text | `limited` (boolean), `remainder` (number), `overflowButtonInGrid` (boolean) |
| `showLessText` | Show less button text | `limited` (boolean), `remainder` (number), `overflowButtonInGrid` (boolean) |

### Example

```tsx
<Grid
	options={options}
	lang={{
		showMoreText: {
			value: (data) => data.overflowButtonInGrid ? `+ ${data.remainder}` : 'Show More',
		},
		showLessText: {
			value: (data) => data.overflowButtonInGrid ? `- ${data.remainder}` : 'Show Less',
		},
	}}
/>
```
