import { O as t } from './Overlay-BH_wZt84.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './iframe-U9T2Y9ZS.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
const a =
		"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n```tsx\nimport { Overlay } from '@athoscommerce/snap-preact/components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```tsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```tsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```tsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```tsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
	{ fn: n } = __STORYBOOK_MODULE_TEST__,
	p = {
		title: 'Atoms/Overlay',
		component: t,
		parameters: { docs: { description: { component: a } } },
		args: { onClick: n() },
		argTypes: {
			active: {
				description: 'Overlay is displayed',
				type: { required: !0 },
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			color: {
				defaultValue: 'rgba(0,0,0,0.8)',
				description: 'Overlay color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
				control: { type: 'color' },
			},
			transitionSpeed: {
				defaultValue: '0.25s',
				description: 'Overlay opening/closing transition speed',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '0.25s' } },
				control: { type: 'text' },
			},
			onClick: { description: 'Overlay click event handler', table: { type: { summary: 'function' }, category: 'Templates Legal' }, control: !1 },
			...r,
		},
	},
	e = { args: { active: !0 } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    active: true
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const m = ['Default'];
export { e as Default, m as __namedExportsOrder, p as default };
