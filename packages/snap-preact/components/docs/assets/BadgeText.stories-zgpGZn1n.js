import { j as t } from './iframe-CXSVAHru.js';
import { B as o } from './BadgeText-D-f5TEPn.js';
import { c as r } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const n =
		"# BadgeText\n\nRenders a text badge. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n```tsx\nimport { BadgeText } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```tsx\n<BadgeText value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```tsx\n<BadgeText colorText={'#000000'} value={'30% Off'} />\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```tsx\n<BadgeText tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
	p = {
		title: 'Atoms/BadgeText',
		component: o,
		parameters: { docs: { description: { component: n } } },
		decorators: [(a) => t('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: t(a, {}) })],
		argTypes: {
			value: {
				description: 'Badge text contents',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			colorText: {
				description: 'Badge text color',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#000000' } },
				control: { type: 'color' },
			},
			tag: { description: 'Badge location tag', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			...r,
		},
	},
	e = { args: { value: '30% Off', colorText: '#000000' } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: '30% Off',
    colorText: '#000000'
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const g = ['Default'];
export { e as Default, g as __namedExportsOrder, p as default };
