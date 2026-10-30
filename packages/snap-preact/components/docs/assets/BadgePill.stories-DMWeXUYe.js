import { j as t } from './iframe-U9T2Y9ZS.js';
import { B as a } from './BadgePill-DqaxSvIL.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const n =
		"# BadgePill\n\nRenders a text badge in the shape of a pill. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n\n```tsx\nimport { BadgePill } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```tsx\n<BadgePill value={'30% Off'} />\n```\n\n### color\nThe `color` prop specifies the badge background color.\n\n```tsx\n<BadgePill color={'rgba(255, 255, 255, 0.5)'} value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```tsx\n<BadgePill colorText={'#000000'} value={'30% Off'} />\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```tsx\n<BadgePill tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
	i = {
		title: 'Atoms/BadgePill',
		component: a,
		parameters: { docs: { description: { component: n } } },
		decorators: [(o) => t('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: t(o, {}) })],
		argTypes: {
			value: {
				description: 'Badge text contents',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			color: {
				description: 'Badge background color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'rgba(58, 35, 173, 1)' } },
				control: { type: 'color' },
			},
			colorText: {
				description: 'Badge text color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#ffffff' } },
				control: { type: 'color' },
			},
			tag: { description: 'Badge location tag', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			...r,
		},
	},
	e = { args: { value: '30% Off', color: '#0000FF', colorText: '#FFFFFF' } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: '30% Off',
    color: '#0000FF',
    colorText: '#FFFFFF'
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const d = ['Default'];
export { e as Default, d as __namedExportsOrder, i as default };
