import { j as o } from './iframe-CBMP6iq3.js';
import { F as n } from './Facets-C4kyNZhV.js';
import { S as c } from './snapify-CNA1I2DS.js';
import { c as s } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Facet-OlUlVoFY.js';
import './types-DqusP3LW.js';
import './useA11y-BuGQuOJb.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-DmIQwaKA.js';
import './useClickOutside-CYgcb6yY.js';
import './Button-CDadhUc9.js';
import './SearchInput-BVu3wkIZ.js';
import './FacetListOptions-C5czvGqf.js';
import './Checkbox-Bf1jD8rh.js';
import './Radio-DA80vQT3.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-Dfanjq4X.js';
import './FacetPaletteOptions-CM1X0ghd.js';
import './names-EhrrLUyQ.js';
import './Image-DCYn0aso.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-CU4I08jo.js';
import './FacetSlider-BLr0dnSi.js';
import './RecommendationController-DcdNSeJF.js';
import './AutocompleteController-3_eY9TEV.js';
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
