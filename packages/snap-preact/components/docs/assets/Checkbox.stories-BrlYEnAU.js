import { C as n } from './Checkbox-4N2aMGfq.js';
import { ah as a } from './iframe-Bc4KSH0T.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './preload-helper-PPVm8Dsz.js';
const s =
		"# Checkbox\n\nRenders a native or custom checkbox.\n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Checkbox } from '@athoscommerce/snap-preact/components';\n```\n\n### native\nThe `native` prop will render an `<input type='checkbox'>` element.\n\n```tsx\n<Checkbox native />\n```\n\n### checked\nThe `checked` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n<Checkbox checked={true} />\n```\n\n### startChecked\nThe `startChecked` prop sets the checkbox to be checked on the initial render. Must use internal state by not using the `checked` prop.\n\n```tsx\n<Checkbox startChecked={true} />\n```\n\n### disabled\nThe `disabled` prop disables the checkbox from being toggled or invoking the `onClick` callback.\n\n```tsx\n<Checkbox disabled={true} />\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Checkbox disableA11y={true} />\n```\n\n### size\nThe `size` prop will set the custom checkbox size.\n\n```tsx\n<Checkbox size={'16px'} />\n```\n\n### color\nThe `color` prop sets the checkbox border color and the icon color if the `iconColor` prop is not set.\n\n```tsx\n<Checkbox color={'#ffff00'} />\n```\n\n### iconColor\nThe `iconColor` prop sets the icon color and overwrites the `color` prop. It will not affect checkbox border color.\n\n```tsx\n<Checkbox iconColor={'#ffff00'} />\n```\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery). This only applies if using a custom checkbox `native={false}`.\n\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the checkbox is clicked.\n\n```tsx\n<Checkbox onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Checkbox component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `checkbox` | Checkbox element text/attributes | `checkedState` (boolean), `disabled` (boolean) |\n\n### Example\n\n```tsx\n<Checkbox\n	lang={{\n		checkbox: {\n			attributes: {\n				'aria-label': (data) => `checkbox is ${data.checkedState ? 'checked' : 'unchecked'}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: c } = __STORYBOOK_MODULE_TEST__,
	u = {
		title: 'Molecules/Checkbox',
		component: n,
		parameters: { docs: { description: { component: s } } },
		args: { onClick: c() },
		argTypes: {
			checked: {
				description: 'Checkbox is checked (externally managed state)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			disabled: {
				description: 'Checkbox is disabled',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			size: {
				defaultValue: '12px',
				description: 'Checkbox size',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '12px' } },
				control: { type: 'text' },
			},
			icon: {
				defaultValue: 'check-thin',
				description: 'Icon name',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'check-thin' } },
				options: [...Object.keys(a)],
				control: { type: 'select' },
			},
			color: {
				description: 'Checkbox color',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
				control: { type: 'color' },
			},
			iconColor: {
				description: 'Checkbox icon color. Overwrites color.',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
				control: { type: 'color' },
			},
			startChecked: {
				description: 'Checkbox is checked initially (internally managed state)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			native: {
				description: 'Render as unstyled native checkbox',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onClick: { description: 'Checkbox click event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			disableA11y: {
				description: 'boolean to disable autoset ally properties',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...r,
		},
	},
	e = {},
	t = { args: { checked: !0, disabled: !0 } },
	o = { args: { native: !0 } };
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
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    native: true
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const k = ['Default', 'Disabled', 'Native'];
export { e as Default, t as Disabled, o as Native, k as __namedExportsOrder, u as default };
