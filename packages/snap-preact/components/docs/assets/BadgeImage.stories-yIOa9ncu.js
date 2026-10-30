import { j as a } from './iframe-U9T2Y9ZS.js';
import { B as r } from './BadgeImage-DTqNIdDt.js';
import { c as n } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const s =
		"# BadgeImage\n\nRenders an image badge. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n\n```tsx\nimport { BadgeImage } from '@athoscommerce/snap-preact/components';\n```\n\n### url\nThe required `url` prop specifies the badge image `src` attribute.\n\n```tsx\n<BadgeImage url={'/images/example.png'}/>\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```tsx\n<BadgeImage tag={'30-off-promo'} url={'/images/example.png'}/>\n```\n\n### label\nThe `label` prop specifies the badge image `alt` attribute. \n\n```tsx\n<BadgeImage label={'example badge'} url={'/images/example.png'} />\n```\n",
	p = {
		title: 'Atoms/BadgeImage',
		component: r,
		parameters: { docs: { description: { component: s } } },
		decorators: [(t) => a('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: a(t, {}) })],
		argTypes: {
			url: {
				description: 'Badge image url',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			tag: { description: 'Badge location tag', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			label: {
				description: 'Badge image alt text',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			...n,
		},
	},
	e = { args: { url: '//cdn.searchspring.net/ajax_search/img/star-badge-new-blue.png', label: 'placeholder badge image' } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    url: '//cdn.searchspring.net/ajax_search/img/star-badge-new-blue.png',
    label: 'placeholder badge image'
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const d = ['Default'];
export { e as Default, d as __namedExportsOrder, p as default };
