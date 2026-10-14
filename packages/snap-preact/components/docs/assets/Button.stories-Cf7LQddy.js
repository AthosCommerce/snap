import { B as o } from './Button-YZishUF-.js';
import { ah as a } from './iframe-CXSVAHru.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './preload-helper-PPVm8Dsz.js';
const s = `# Button

Renders a native or custom button.

## Usage
\`\`\`tsx
import { Button } from '@athoscommerce/snap-preact/components';
\`\`\`

### content
The \`content\` prop specifies the button text. This can be a string or a JSX element.

\`\`\`tsx
<Button content={"click me!"} />
\`\`\`
 
Or alternatively as children:

\`\`\`tsx
<Button>click me!</Button>
\`\`\`

### disabled
The \`disabled\` prop will disable the button from being clickable.

\`\`\`tsx
<Button content={"click me!"} disabled />
\`\`\`

### native
The \`native\` prop will use a native html \`<button>\` element.

\`\`\`tsx
<Button content={"click me!"} native />
\`\`\`

### backgroundColor
The \`backgroundColor\` prop specifies the button background color.

\`\`\`tsx
<Button content={"click me!"} backgroundColor={'#eeeeee'} />
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon you wish to add to the button content. Note this currently only supports icons from our list of available icons. (see Icon Component for more details)

\`\`\`tsx
<Button content={"click me!"} icon={'cog'} />
\`\`\`

### borderColor
The \`borderColor\` prop specifies the button border color.

\`\`\`tsx
<Button content={"click me!"} borderColor={'#cccccc'} />
\`\`\`
### color
The \`color\` prop specifies the button text color.

\`\`\`tsx
<Button content={"click me!"} color={'#222222'} />
\`\`\`

### disableA11y
The \`disableA11y\` prop specifies a boolean to disable the autoset ally properties.

\`\`\`tsx
<Button content={"click me!"} disableA11y />
\`\`\`

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when the button is clicked.

\`\`\`tsx
<Button content={"click me!"} onClick={(e)=>{console.log(e)}} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the Button component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`button\` | Button element text/attributes | _(none)_ |

### Example

\`\`\`tsx
<Button
	content={"click me!"}
	lang={{
		button: {
			attributes: {
				'aria-label': 'Click this button',
			},
		},
	}}
/>
\`\`\`
`,
	{ fn: c } = __STORYBOOK_MODULE_TEST__,
	y = {
		title: 'Atoms/Button',
		component: o,
		parameters: { docs: { description: { component: s } } },
		args: { onClick: c() },
		argTypes: {
			content: { description: 'Content to be displayed in button', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
			children: {
				description: 'Content to be displayed in button (using children)',
				table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
				control: !1,
			},
			disabled: {
				description: 'Disable button',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onClick: { description: 'Button click event handler', table: { type: { summary: 'function' }, category: 'Templates Legal' }, control: !1 },
			color: { description: 'Button text color', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'color' } },
			icon: {
				description: 'Button Icon name',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				options: [...Object.keys(a)],
				control: { type: 'select' },
			},
			backgroundColor: {
				description: 'Button background color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#fff' } },
				control: { type: 'color' },
			},
			borderColor: {
				description: 'Button border color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#333' } },
				control: { type: 'color' },
			},
			native: {
				description: 'Render as unstyled native button',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disableA11y: {
				description: 'boolean to disable autoset ally properties',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...r,
		},
	},
	t = { args: { content: 'Button' } },
	e = { args: { content: 'Button', disabled: !0 } },
	n = { args: { content: 'Button', native: !0 } };
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    content: 'Button'
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    content: 'Button',
    disabled: true
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    content: 'Button',
    native: true
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
const g = ['Default', 'Disabled', 'Native'];
export { t as Default, e as Disabled, n as Native, g as __namedExportsOrder, y as default };
