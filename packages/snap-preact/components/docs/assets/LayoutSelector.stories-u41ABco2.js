import { j as t } from './iframe-U9T2Y9ZS.js';
import { L as l } from './LayoutSelector-CDjnVls8.js';
import { c as s } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Select-HVXhT1EH.js';
import './useA11y-BuGQuOJb.js';
import './selectionKey-CmN2KTR5.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './Button-rwG4FGUK.js';
import './List-9eXTq04g.js';
import './Checkbox-Dsv4fCi7.js';
import './handleize-xLHhB8k5.js';
import './RadioList-Dpb6I9cR.js';
import './Radio-CBQqiZ56.js';
const i = `# LayoutSelector

Renders a layout selector to be used with snap templates for changing result layout settings. 

## Sub-components
- Select
- RadioList 
- List


## Usage

### options
The required \`options\` prop specifies an array of layoutOptions to render. When using Snap Templates, overrides can be provided in each option - these overrides will be applied when the option is selected.

\`\`\`tsx
const layoutOptions = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'results': {
					columns: 2,
				},
			},
		},
	},
],

<LayoutSelector options={layoutOptions} />
\`\`\`

### onSelect
The required \`onSelect\` sets the callback function for when a selection has been made. the function will be passed the click event and the selected option. 

\`\`\`tsx

<LayoutSelector onSelect={(e, option) => callback()} options={layoutOptions} />

\`\`\`

### type
The \`type\` prop specifies the type of selector to render. Options are \`'radio'\`, \`'list'\`, or \`'dropdown'\`. Defaults to \`"dropdown"\`.

\`\`\`tsx
<LayoutSelector type={"list"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### selected
The \`selected\` prop specifies the intitially selected option. 

\`\`\`tsx
<LayoutSelector onSelect={(e, option) => callback()} selected={layoutOptions[0]} options={layoutOptions} />
\`\`\`

### label
The \`label\` prop specifies the label to render. Defaults to \`"Layout"\`.

\`\`\`tsx
<LayoutSelector label={"Layout"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### hideLabel
The \`hideLabel\` prop hides the selector label.

\`\`\`tsx
<LayoutSelector hideLabel={true} label={"Layout"} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### hideOptionLabels
The \`hideOptionLabels\` prop hides the option labels.

\`\`\`tsx
<LayoutSelector hideOptionLabels={true} onSelect={(e, option) => callback()} options={layoutOptions} />
\`\`\`

### showSingleOption
The \`showSingleOption\` prop specifies if the component should render if the provided options prop contains a single option. 
\`\`\`tsx
<LayoutSelector showSingleOption={true} onSelect={(e, option) => callback()} options={layoutOptions.slice(0, 1)} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the LayoutSelector component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`label\` | The selector label text | \`options\` (ListOption[]), \`selectedOptions\` (ListOption[]) |

### Example

\`\`\`tsx
<LayoutSelector
	options={layoutOptions}
	lang={{
		label: {
			value: 'Grid Layout',
		},
	}}
/>
\`\`\`
`,
	{ fn: p } = __STORYBOOK_MODULE_TEST__,
	_ = {
		title: 'Molecules/LayoutSelector',
		component: l,
		parameters: { docs: { description: { component: i } } },
		args: { onSelect: p() },
		argTypes: {
			options: {
				description: 'layoutOptions to render',
				type: { required: !0 },
				table: { type: { summary: 'layoutOptions to render' } },
				control: { type: 'object' },
			},
			onSelect: {
				description: 'onSelect event handler',
				type: { required: !0 },
				table: { category: 'Templates Legal', type: { summary: 'onSelect event handler' } },
				control: !1,
			},
			type: {
				description: 'type of Select to render.',
				table: { category: 'Templates Legal', type: { summary: '"dropdown" | "list" | "radio"' }, defaultValue: { summary: 'dropdown' } },
				options: ['dropdown', 'list', 'radio'],
				control: { type: 'select' },
			},
			label: { description: 'Header label', table: { category: 'Templates Legal', type: { summary: 'string, JSX' } }, control: { type: 'text' } },
			hideLabel: {
				defaultValue: !1,
				description: 'hide selector label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideOptionLabels: {
				defaultValue: !1,
				description: 'hide option labels',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			selected: { description: 'currently selected option', table: { type: { summary: 'Option object' } }, control: !1 },
			showSingleOption: {
				defaultValue: !1,
				description: 'specifies if the component should render if the provided options prop contains a single option',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...s,
		},
	},
	r = [
		{ label: '1 wide', value: '1 wide', icon: 'square' },
		{ label: '2 wide', value: '2 wide', icon: { icon: 'layout-large' } },
		{ label: '3 wide', value: '3 wide', icon: { icon: 'layout-grid' } },
		{ label: '4 wide', value: '4 wide' },
		{ label: 'custom', value: 'custom' },
	],
	o = {
		render: (e) => t('div', { style: { maxWidth: e?.type == 'list' || e?.type == 'dropdown' ? '500px' : '300px' }, children: t(l, { ...e }) }),
		args: { label: 'Layout', options: r },
	},
	n = {
		render: (e) => t('div', { style: { maxWidth: e?.type == 'list' || e?.type == 'dropdown' ? '500px' : '300px' }, children: t(l, { ...e }) }),
		args: { options: r, label: 'List Layout Selector', type: 'list' },
	},
	a = {
		render: (e) => t('div', { style: { maxWidth: e?.type == 'list' || e?.type == 'dropdown' ? '500px' : '300px' }, children: t(l, { ...e }) }),
		args: { options: r, label: 'Radio Layout Selector', type: 'radio' },
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: LayoutSelectorProps) => {
    return <div style={{
      maxWidth: args?.type == 'list' || args?.type == 'dropdown' ? '500px' : '300px'
    }}>
                <LayoutSelector {...args} />
            </div>;
  },
  args: {
    label: 'Layout',
    options: layoutOptions
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: LayoutSelectorProps) => {
    return <div style={{
      maxWidth: args?.type == 'list' || args?.type == 'dropdown' ? '500px' : '300px'
    }}>
                <LayoutSelector {...args} />
            </div>;
  },
  args: {
    options: layoutOptions,
    label: 'List Layout Selector',
    type: 'list'
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: LayoutSelectorProps) => {
    return <div style={{
      maxWidth: args?.type == 'list' || args?.type == 'dropdown' ? '500px' : '300px'
    }}>
                <LayoutSelector {...args} />
            </div>;
  },
  args: {
    options: layoutOptions,
    label: 'Radio Layout Selector',
    type: 'radio'
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
const R = ['Default', 'List', 'Radio'];
export { o as Default, n as List, a as Radio, R as __namedExportsOrder, _ as default };
