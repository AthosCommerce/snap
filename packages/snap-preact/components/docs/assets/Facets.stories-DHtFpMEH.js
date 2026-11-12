import { j as o } from './iframe-0uTqSs9S.js';
import { F as n } from './Facets-CShzM2lt.js';
import { S as c } from './snapify-B992lD8l.js';
import { c as s } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Facet-DQZMdX7t.js';
import './types-DqusP3LW.js';
import './useA11y-BuGQuOJb.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './Button-CmsiLEAv.js';
import './SearchInput-Df-AktE7.js';
import './FacetListOptions-BKcb2oXB.js';
import './Checkbox-7fOTHZL3.js';
import './Radio-Cqas9W8s.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-BF9owBak.js';
import './FacetPaletteOptions-HvPNtfKg.js';
import './names-Cka5BSlk.js';
import './Image-C3O8T0nj.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-CGgJIm7v.js';
import './FacetSlider-BBgYI5hi.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
const l =
		"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```tsx\nimport { Facets } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked. The function is passed the click event.\n\n```tsx\n<Facets controller={controller} onFacetOptionClick={(e) => { console.log(e) }}/>\n```",
	{ fn: i } = __STORYBOOK_MODULE_TEST__,
	U = {
		title: 'Organisms/Facets',
		component: n,
		parameters: { docs: { description: { component: l } } },
		decorators: [(t) => o('div', { style: { maxWidth: '300px' }, children: o(t, {}) })],
		args: { onFacetOptionClick: i() },
		argTypes: {
			facets: { description: 'Facets store reference', type: { required: !1 }, table: { type: { summary: 'Facets store object' } }, control: !1 },
			limit: {
				description: 'Maximum number of facets to display',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			controller: { description: 'Controller reference', type: { required: !1 }, table: { type: { summary: 'Controller object' } }, control: !1 },
			onFacetOptionClick: {
				description: 'Callback function for when a facet option is clicked',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: !1,
			},
			...s,
		},
	},
	r = c.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
	e = { render: (t, { loaded: { controller: a } }) => o(n, { ...t, controller: a }), loaders: [async () => (await r.search(), { controller: r })] };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <Facets {...args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const A = ['Default'];
export { e as Default, A as __namedExportsOrder, U as default };
