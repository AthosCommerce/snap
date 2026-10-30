import { R as r } from './Rating-DUxc2ffg.js';
import { ah as n } from './iframe-U9T2Y9ZS.js';
import { c as o } from './componentArgs-DfBuq-N1.js';
import './defined-CdKp_MB-.js';
import './preload-helper-PPVm8Dsz.js';
const s =
		'# Rating\n\nRenders a component for a product rating. By default it supports partial star icons (eg. 4.5 / 50% width). The component will render only when the `value` prop is above zero - unless a `count` prop greater than zero is provided or the `alwaysRender` prop is used.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### value\nThe `value` prop is required and expects a number between 0 and 5.\n\n```tsx\n<Rating value={4.4} />\n```\n\n### count\nThe `count` prop specifies the number of ratings for the product, this number will show after the rating icons.\n\n```tsx\n<Rating value={5} count={70} />\n```\n\n### text\nAn optional `text` prop specifies any additional text to display next to the rating icons (shows after the count if used)\n\n```tsx\n<Rating value={5} text="Product Rating" />\n```\n\n### alwaysRender\nThe `alwaysRender` prop will allow a product with no rating, or a zero rating to render.\n\n```tsx\n<Rating value={0} alwaysRender />\n```\n\n### disablePartialFill\nThe `disablePartialFill` prop will specify wether or not to show a partial star rating (eg. 3.3). When using this prop stars will round down. For example, a `value` of 3.3 would display as 3, and a `value` of 4.9 would round down to 4.\n\n```tsx\n<Rating value={3.3} disablePartialFill />\n```\n\n### fullIcon\nThe `fullIcon` prop specifies a path within the `Icon` component to use for the "full icons". The default value is `star`.\n\n```tsx\n<Rating value={4} fullIcon="heart" />\n```\n\n### emptyIcon\nThe `emptyIcon` prop specifies a path within the `Icon` component to use for the "full icons". The default value is `star-o`.\n\n```tsx\n<Rating value={4} emptyIcon="heart-o" />\n```',
	d = {
		title: 'Molecules/Rating',
		component: r,
		parameters: { docs: { description: { component: s } } },
		argTypes: {
			value: {
				description: 'The rating value (out of five)',
				type: { required: !0 },
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			count: {
				description: 'The number of ratings or reviews',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			text: {
				type: { required: !1 },
				description: 'Additional text to be rendered.',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			alwaysRender: {
				description: 'Force to render even when value is 0 or undefined',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: 'boolean',
			},
			disablePartialFill: {
				description: 'Disables fractional stars - will round down',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: 'boolean',
			},
			fullIcon: {
				description: 'Icon to render in for a full star',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'star' } },
				options: [...Object.keys(n)],
				control: { type: 'select' },
			},
			emptyIcon: {
				description: 'Icon to render for an empty star',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'star-o' } },
				options: [...Object.keys(n)],
				control: { type: 'select' },
			},
			...o,
		},
	},
	e = { args: { value: 4.5 } },
	t = { args: { value: 3, count: 33, emptyIcon: 'star' } },
	a = { args: { value: 3.3, fullIcon: 'heart', emptyIcon: 'heart-o' } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: 4.5
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: 3,
    count: 33,
    emptyIcon: 'star'
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
    value: 3.3,
    fullIcon: 'heart',
    emptyIcon: 'heart-o'
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
const m = ['Default', 'StarsWithCount', 'Hearts'];
export { e as Default, a as Hearts, t as StarsWithCount, m as __namedExportsOrder, d as default };
