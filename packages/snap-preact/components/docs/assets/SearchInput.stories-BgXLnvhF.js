import { j as n } from './iframe-0uTqSs9S.js';
import { S as o } from './SearchInput-Df-AktE7.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './defined-CdKp_MB-.js';
import './Button-CmsiLEAv.js';
import './useA11y-BuGQuOJb.js';
const s = `# SearchInput

Renders an input element

## Sub-components
- Button

## Usage
\`\`\`tsx
import { SearchInput } from '@athoscommerce/snap-preact/components';
\`\`\`
\`\`\`tsx
<SearchInput onChange={handleChange} placeholderText={"placeholder text"}/>
\`\`\`

### value
The \`value\` prop sets the input value if externally managed.

\`\`\`tsx
<SearchInput value={'dress'} placeholderText={"placeholder text"} />
\`\`\`

### defaultValue
The \`defaultValue\` prop sets the initial value of an internally managed input. It is read when the component mounts and ignored when \`value\` is provided. To reset the input to a new \`defaultValue\`, change the component's \`key\`.

\`\`\`tsx
<SearchInput defaultValue={'dress'} />
\`\`\`

### placeholderText
The \`placeholderText\` prop sets the input placeholder text. 

\`\`\`tsx
<SearchInput placeholderText={"placeholder text"} />
\`\`\`

### inputName
The \`inputName\` prop sets the input name attribute value. 

\`\`\`tsx
<SearchInput inputName={"query"} />
\`\`\`

### disabled
The \`disabled\` prop sets the \`disabled\` attribute on the input and prevents the \`onClick\` and \`onSubmit\` callbacks from being invoked.

\`\`\`tsx
<SearchInput disabled={true} />
\`\`\`

### onChange
The \`onChange\` prop is invoked when the input's value has been changed. 

\`\`\`tsx
<SearchInput onChange={handleChange} />
\`\`\`

### onKeyUp
The \`onKeyUp\` prop is invoked on keyUp on the input. 

\`\`\`tsx
<SearchInput onKeyUp={handleChange} />
\`\`\`

### onKeyDown
The \`onKeyDown\` prop is invoked keyDown on the input

\`\`\`tsx
<SearchInput onKeyDown={handleChange} />
\`\`\`

### onClick
The \`onClick\` prop is invoked on click of anything in the component. Wrapper, input or icon. 

\`\`\`tsx
<SearchInput onClick={handleChange} />
\`\`\`

### onSubmit
The \`onSubmit\` prop is invoked when Enter is pressed in the input, or when the submit search button is clicked. It receives the triggering event and the input's current value. An Enter that confirms an IME composition does not submit, and the submit button does not submit while \`disabled\` is set. The event's default action is not prevented.

\`\`\`tsx
const handleSubmit = (e, value) => {
    window.location.href = \`/search?q=\${encodeURIComponent(value)}\`;
};

<SearchInput onSubmit={handleSubmit} />
\`\`\`

### submitSearchButton
The \`submitSearchButton\` prop specifies props to pass to the submit search button component. Takes any \`Button\` component props. Its \`onClick\` runs before \`onSubmit\`.

\`\`\`tsx

const buttonProps = {
    icon: 'search',
    onClick: () => func
};

<SearchInput submitSearchButton={buttonProps} />
\`\`\`

### clearSearchButton
The \`clearSearchButton\` prop specifies props to pass to the clear search button component. Takes any \`Button\` component props. Note this button only renders if there is a value to clear. 

\`\`\`tsx

const buttonProps = {
    icon: 'close-thin',
    onClick: () => func
};

<SearchInput clearSearchButton={buttonProps} />
\`\`\`

### closeSearchButton
The \`closeSearchButton\` prop specifies props to pass to the close search button component. Takes any \`Button\` component props. 

\`\`\`tsx

const buttonProps = {
    icon: 'angle-left',
    onClick: () => func
};

<SearchInput closeSearchButton={buttonProps} />
\`\`\`

### hideSubmitSearchButton
The \`hideSubmitSearchButton\` prop hides the submit search button.

\`\`\`tsx
<SearchInput hideSubmitSearchButton={true} />
\`\`\`

### hideClearSearchButton
The \`hideClearSearchButton\` prop hides the clear search button.

\`\`\`tsx
<SearchInput hideClearSearchButton={true} />
\`\`\`

### hideCloseSearchButton
The \`hideCloseSearchButton\` prop hides the close search button.

\`\`\`tsx
<SearchInput hideCloseSearchButton={true} />
\`\`\`

### inputRef
The \`inputRef\` prop specifies a ref to set on the input element. To be accessed in a parent component.

\`\`\`tsx
const renderedInputRef = useRef(null);
useEffect(() => {
    console.log(renderedInputRef)
},[])

<SearchInput inputRef={renderedInputRef} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the SearchInput component. Lang entries for this component primarily use \`attributes\` to set HTML attributes like \`placeholder\` and \`aria-label\`.

| Lang Key | Description | Attributes |
|---|---|---|
| \`placeholderText\` | Search input placeholder | \`placeholder\` |
| \`closeSearchButton\` | Close search button | \`aria-label\` |
| \`clearSearchButton\` | Clear search button | \`aria-label\` |
| \`submitSearchButton\` | Submit search button | \`aria-label\` |

### Example

\`\`\`tsx
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
\`\`\`
`,
	{ fn: e } = __STORYBOOK_MODULE_TEST__,
	b = {
		title: 'Molecules/SearchInput',
		component: o,
		parameters: { docs: { description: { component: s } } },
		decorators: [(a) => n('div', { style: { maxWidth: '500px' }, children: n(a, {}) })],
		args: { onChange: e(), onKeyUp: e(), onKeyDown: e(), onClick: e(), onSubmit: e() },
		argTypes: {
			value: {
				type: { required: !1 },
				description: 'sets the value for the input',
				table: { type: { summary: 'string' } },
				control: { type: 'text' },
			},
			defaultValue: {
				description: 'sets the initial value when value is not provided',
				table: { type: { summary: 'string' } },
				control: { type: 'text' },
			},
			onChange: {
				description: 'OnChange Callback',
				table: { category: 'Templates Legal', type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' } },
				control: !1,
			},
			onKeyUp: {
				description: 'OnKeyUp Callback',
				table: { category: 'Templates Legal', type: { summary: '(e: React.KeyboardEvent<HTMLInputElement>) => void' } },
				control: !1,
			},
			onKeyDown: {
				description: 'OnKeyDown Callback',
				table: { category: 'Templates Legal', type: { summary: '(e: React.KeyboardEvent<HTMLInputElement>) => void' } },
				control: !1,
			},
			onClick: {
				description: 'OnClick Callback',
				table: { category: 'Templates Legal', type: { summary: '(e: React.MouseEvent) => void' } },
				control: !1,
			},
			onSubmit: {
				description: 'Invoked with the event and input value on Enter or submit search button click',
				table: { category: 'Templates Legal', type: { summary: '(e, value: string) => void' } },
				control: !1,
			},
			submitSearchButton: {
				description: 'Button component props for submit search button',
				table: { category: 'Templates Legal', type: { summary: 'Partial<ButtonProps>' }, defaultValue: { summary: "{ icon: 'search-thin' }" } },
				control: { type: 'object' },
			},
			clearSearchButton: {
				description: 'Button component props for clear search button',
				table: { category: 'Templates Legal', type: { summary: 'Partial<ButtonProps>' }, defaultValue: { summary: "{ icon: 'close-thin' }" } },
				control: { type: 'object' },
			},
			closeSearchButton: {
				description: 'Button component props for close search button',
				table: { category: 'Templates Legal', type: { summary: 'Partial<ButtonProps>' } },
				control: { type: 'object' },
			},
			placeholderText: {
				defaultValue: 'Search',
				description: 'Display placeholder text',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Search' } },
				control: { type: 'text' },
			},
			inputName: {
				description: 'sets the name attribute for the input',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			disabled: {
				description: 'boolean to set disabled attribute',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
				control: { type: 'boolean' },
			},
			hideSubmitSearchButton: {
				description: 'hides the submit search button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
				control: { type: 'boolean' },
			},
			hideClearSearchButton: {
				description: 'hides the clear search button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
				control: { type: 'boolean' },
			},
			hideCloseSearchButton: {
				description: 'hides the close search button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
				control: { type: 'boolean' },
			},
			...r,
		},
	},
	t = { args: { submitSearchButton: { icon: 'search-thin' }, clearSearchButton: { icon: 'close-thin' } } };
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    submitSearchButton: {
      icon: 'search-thin'
    },
    clearSearchButton: {
      icon: 'close-thin'
    }
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const y = ['Default'];
export { t as Default, y as __namedExportsOrder, b as default };
