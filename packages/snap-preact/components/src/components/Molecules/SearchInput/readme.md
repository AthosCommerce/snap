# SearchInput

Renders an input element

## Sub-components
- Button

## Usage
```tsx
import { SearchInput } from '@athoscommerce/snap-preact/components';
```
```tsx
<SearchInput onChange={handleChange} placeholderText={"placeholder text"}/>
```

### value
The `value` prop sets the input value if externally managed.

```tsx
<SearchInput value={'dress'} placeholderText={"placeholder text"} />
```

### defaultValue
The `defaultValue` prop sets the initial value of an internally managed input. It is read when the component mounts and ignored when `value` is provided. To reset the input to a new `defaultValue`, change the component's `key`.

```tsx
<SearchInput defaultValue={'dress'} />
```

### placeholderText
The `placeholderText` prop sets the input placeholder text. 

```tsx
<SearchInput placeholderText={"placeholder text"} />
```

### inputName
The `inputName` prop sets the input name attribute value. 

```tsx
<SearchInput inputName={"query"} />
```

### onChange
The `onChange` prop is invoked when the input's value has been changed. 

```tsx
<SearchInput onChange={handleChange} />
```

### onKeyUp
The `onKeyUp` prop is invoked on keyUp on the input. 

```tsx
<SearchInput onKeyUp={handleChange} />
```

### onKeyDown
The `onKeyDown` prop is invoked keyDown on the input

```tsx
<SearchInput onKeyDown={handleChange} />
```

### onClick
The `onClick` prop is invoked on click of anything in the component. Wrapper, input or icon. 

```tsx
<SearchInput onClick={handleChange} />
```

### onSubmit
The `onSubmit` prop is invoked when Enter is pressed in the input, or when the submit search button is clicked. It receives the triggering event and the input's current value. An Enter that confirms an IME composition does not submit, and the submit button does not submit while `disabled` is set. The event's default action is not prevented.

```tsx
const handleSubmit = (e, value) => {
    window.location.href = `/search?q=${encodeURIComponent(value)}`;
};

<SearchInput onSubmit={handleSubmit} />
```

### submitSearchButton
The `submitSearchButton` prop specifies props to pass to the submit search button component. Takes any `Button` component props. Its `onClick` runs before `onSubmit`.

```tsx

const buttonProps = {
    icon: 'search',
    onClick: () => func
};

<SearchInput submitSearchButton={buttonProps} />
```

### clearSearchButton
The `clearSearchButton` prop specifies props to pass to the clear search button component. Takes any `Button` component props. Note this button only renders if there is a value to clear. 

```tsx

const buttonProps = {
    icon: 'close-thin',
    onClick: () => func
};

<SearchInput clearSearchButton={buttonProps} />
```

### closeSearchButton
The `closeSearchButton` prop specifies props to pass to the close search button component. Takes any `Button` component props. 

```tsx

const buttonProps = {
    icon: 'angle-left',
    onClick: () => func
};

<SearchInput closeSearchButton={buttonProps} />
```

### hideSubmitSearchButton
The `hideSubmitSearchButton` prop hides the submit search button.

```tsx
<SearchInput hideSubmitSearchButton={true} />
```

### hideClearSearchButton
The `hideClearSearchButton` prop hides the clear search button.

```tsx
<SearchInput hideClearSearchButton={true} />
```

### hideCloseSearchButton
The `hideCloseSearchButton` prop hides the close search button.

```tsx
<SearchInput hideCloseSearchButton={true} />
```

### inputRef
The `inputRef` prop specifies a ref to set on the input element. To be accessed in a parent component.

```tsx
const renderedInputRef = useRef(null);
useEffect(() => {
    console.log(renderedInputRef)
},[])

<SearchInput inputRef={renderedInputRef} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the SearchInput component. Lang entries for this component primarily use `attributes` to set HTML attributes like `placeholder` and `aria-label`.

| Lang Key | Description | Attributes |
|---|---|---|
| `placeholderText` | Search input placeholder | `placeholder` |
| `closeSearchButton` | Close search button | `aria-label` |
| `clearSearchButton` | Clear search button | `aria-label` |
| `submitSearchButton` | Submit search button | `aria-label` |

### Example

```tsx
<SearchInput
	lang={{
		placeholderText: {
			attributes: {
				placeholder: 'Search our store...',
			},
		},
		closeSearchButton: {
			attributes: {
				'aria-label': 'Close search',
			},
		},
		clearSearchButton: {
			attributes: {
				'aria-label': 'Clear search input',
			},
		},
		submitSearchButton: {
			attributes: {
				'aria-label': 'Submit search',
			},
		},
	}}
/>
```
