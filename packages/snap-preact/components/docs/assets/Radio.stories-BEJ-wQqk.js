import { R as o } from './Radio-CEEJysGh.js';
import { ah as n } from './iframe-Bc4KSH0T.js';
import { c as s } from './componentArgs-DfBuq-N1.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './preload-helper-PPVm8Dsz.js';
const r =
		"# Radio\n\nRenders a native or custom radio.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### native\nThe `native` prop will render an `<input type='radio'>` element.\n\n```tsx\n    <Radio native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n    <Radio checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the radio to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```tsx\n    <Radio startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the radio from being toggled or invoking the `onClick` callback.\n\n```tsx\n    <Radio disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n    <Radio disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom radio size.\n\n```tsx\n    <Radio size={'16px'} />\n```\n\n### color\nThe `color` prop sets the radio border stroke and fill colors.\n\n```tsx\n    <Radio color={'#ffff00'} />\n```\n\n\n### checkedIcon\nThe `checkedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is checked. This only applies if using a custom radio `native={false}`.\n\n```tsx\n    <Radio checkedIcon={'bullet'} />\n```\n\n### unCheckedIcon\nThe `unCheckedIcon` prop specifies a path within the `Icon` component paths (see Icon Gallery) to show when the radio is not pchecked. This only applies if using a custom radio `native={false}`.\n\n```tsx\n    <Radio unCheckedIcon={'bullet-o'} />\n```\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the radio is clicked.\n\n```tsx\n    <Radio onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Radio component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `radio` | Radio element text/attributes | `disabled` (boolean), `checkedState` (boolean) |\n\n### Example\n\n```tsx\n<Radio\n	lang={{\n		radio: {\n			attributes: {\n				'aria-label': (data) => `radio option is ${data.checkedState ? 'selected' : 'not selected'}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: i } = __STORYBOOK_MODULE_TEST__,
	y = {
		title: 'Molecules/Radio',
		component: o,
		parameters: { docs: { description: { component: r } } },
		args: { onClick: i() },
		argTypes: {
			checked: {
				description: 'Radio is checked (externally managed state)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disabled: {
				description: 'Radio is disabled',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			size: {
				defaultValue: '20px',
				description: 'Radio size',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
				control: { type: 'text' },
			},
			checkedIcon: {
				description: 'Icon name when radio is checked',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bullet' } },
				options: [...Object.keys(n)],
				control: { type: 'select' },
			},
			unCheckedIcon: {
				description: 'Icon name when radio is unchecked',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bullet-o' } },
				options: [...Object.keys(n)],
				control: { type: 'select' },
			},
			color: {
				description: 'Radio color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
				control: { type: 'color' },
			},
			startChecked: {
				description: 'Radio is checked initially (internally managed state)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			native: {
				description: 'Render as unstyled native radio',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onClick: { description: 'Radio click event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			disableA11y: {
				description: 'boolean to disable autoset ally properties',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...s,
		},
	},
	e = {},
	t = { args: { checked: !0, disabled: !0 } },
	a = { args: { native: !0 } };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: '{}', ...e.parameters?.docs?.source } } };
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    checked: true,
    disabled: true
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    native: true
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
const b = ['Default', 'Disabled', 'Native'];
export { e as Default, t as Disabled, a as Native, b as __namedExportsOrder, y as default };
