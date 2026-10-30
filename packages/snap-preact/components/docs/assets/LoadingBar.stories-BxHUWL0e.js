import { j as o } from './iframe-U9T2Y9ZS.js';
import { L as r } from './LoadingBar-BWkR3ELL.js';
import { c as n } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const t =
		"# Loading Bar\n\nRenders a Loading Bar.\n\n## Usage\n```tsx\nimport { LoadingBar } from '@athoscommerce/snap-preact/components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```tsx\n<LoadingBar active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the loading bar.\n\n```tsx\n<LoadingBar active={true} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the loading bar.\n\n```tsx\n<LoadingBar active={true} backgroundColor={'#eeeeee'} />\n```\n\n\n### height\nThe `height` prop specifies the height of the loading bar.\n\n```tsx\n<LoadingBar active={true} height={'10px'} />\n```\n",
	p = {
		title: 'Atoms/LoadingBar',
		component: r,
		parameters: { docs: { description: { component: t } } },
		argTypes: {
			active: {
				defaultValue: !1,
				description: 'LoadingBar is displayed',
				type: { required: !0 },
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			color: {
				description: 'Bar color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'theme.variables.colors.primary' } },
				control: { type: 'color' },
			},
			backgroundColor: {
				description: 'Background color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'theme.variables.colors.secondary' } },
				control: { type: 'color' },
			},
			height: {
				defaultValue: '5px',
				description: 'LoadingBar height',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '5px' } },
				control: { type: 'text' },
			},
			...n,
		},
	},
	e = { render: (a) => o(r, { ...a, style: { maxWidth: '1200px', margin: '1rem', overflow: 'hidden' } }), args: { active: !0 } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: LoadingBarProps) => {
    return <LoadingBar {...args} style={{
      maxWidth: '1200px',
      margin: '1rem',
      overflow: 'hidden'
    }} />;
  },
  args: {
    active: true
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const d = ['Active'];
export { e as Active, d as __namedExportsOrder, p as default };
