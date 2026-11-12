import { j as t } from './iframe-0uTqSs9S.js';
import { I as s } from './InlineBanner-c_NbPpya.js';
import { S as c } from './snapify-B992lD8l.js';
import { R as r } from './types-DqusP3LW.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './withTracking-Bxgx8W-i.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
const d =
		"# Inline Banner\n\n## Usage\n```tsx\nimport { InlineBanner } from '@athoscommerce/snap-preact/components';\n```\n\n### banner\nThe `banner` prop specifies a reference to an inline banner object from the `results` store (a result with a `type` of `'banner'`).\n\n```js\nconst banner = controller.store.results.find((result) => result.type === 'banner');\n```\n\n```tsx\n<InlineBanner banner={banner} />\n```\n\n### width\nThe `width` prop specifies the width of the inline banner.\n\n```tsx\n<InlineBanner banner={banner} width={'300px'} />\n```\n\n### layout\nThe `layout` prop specifies if this banner will be rendered in a `grid` or `list` layout.\n\n```tsx\n<InlineBanner banner={banner} layout={'grid'} />\n```\n\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<InlineBanner banner={banner} disableA11y />\n```\n\n### onClick\nThe `onClick` prop contains a custom onClick event handler. Function is passed the click event as first parameter, Banner object is passed as the second.\n\n```js\nconst CustomBannerClick = (e, banner) => {\n    console.log('You Clicked a banner!' , e)\n};\n```\n\n```tsx\n<InlineBanner banner={banner} onClick={CustomBannerClick} />\n```",
	{ fn: m } = __STORYBOOK_MODULE_TEST__,
	T = {
		title: 'Atoms/InlineBanner',
		component: s,
		parameters: { docs: { description: { component: d } } },
		args: { onClick: m() },
		argTypes: {
			banner: {
				description: 'Banner object reference',
				type: { required: !0 },
				table: { type: { summary: 'inline banner store object' } },
				control: !1,
			},
			layout: {
				description: 'Banner layout',
				defaultValue: r.grid,
				table: { type: { summary: "'grid' | 'list'" }, category: 'Templates Legal', defaultValue: { summary: 'grid' } },
				options: [r.grid, r.list],
				control: { type: 'select' },
			},
			width: {
				description: 'InlineBanner width',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'auto' } },
				control: { type: 'text' },
			},
			onClick: { description: 'Custom onClick event handler', table: { type: { summary: 'function' }, category: 'Templates Legal' }, control: !1 },
			disableA11y: {
				description: 'boolean to disable autoset ally properties',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...p,
		},
		decorators: [(e) => t('div', { style: { width: '220px', height: '300px', position: 'relative' }, children: t(e, { height: '200px' }) })],
	},
	o = c.search({ id: 'InlineBanner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } }),
	n = {
		render: (e, { loaded: { controller: l } }) => {
			const a = l?.store?.results?.filter((i) => i.type === 'banner').pop();
			return a && t(s, { ...e, banner: a });
		},
		loaders: [async () => (await o.search(), { controller: o })],
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: InlineBannerProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    const inlineBanners = controller?.store?.results?.filter(result => result.type === 'banner').pop() as Banner;
    return inlineBanners && <InlineBanner {...args} banner={inlineBanners} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...n.parameters?.docs?.source,
		},
	},
};
const w = ['Default'];
export { n as Default, w as __namedExportsOrder, T as default };
