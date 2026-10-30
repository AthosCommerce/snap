import { j as r } from './iframe-U9T2Y9ZS.js';
import { F as n } from './Facets-B-EVV1pK.js';
import { S as s } from './snapify-Df13VkEj.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './Facet-HxPfd-CW.js';
import './types-DqusP3LW.js';
import './useA11y-BuGQuOJb.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './Button-rwG4FGUK.js';
import './SearchInput-CBuvCU_0.js';
import './FacetListOptions-DXiMkJ6r.js';
import './Checkbox-Dsv4fCi7.js';
import './Radio-CBQqiZ56.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-DNUnpz6e.js';
import './FacetPaletteOptions-8YWwPWlW.js';
import './names-Cka5BSlk.js';
import './Image-C5uuJXju.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions--7mFlBiQ.js';
import './FacetSlider-FfvPprOV.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const l =
		"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```tsx\nimport { Facets } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```",
	{ fn: i } = __STORYBOOK_MODULE_TEST__,
	v = {
		title: 'Organisms/Facets',
		component: n,
		parameters: { docs: { description: { component: l } } },
		decorators: [(t) => r('div', { style: { maxWidth: '300px' }, children: r(t, {}) })],
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
			...c,
		},
	},
	o = s.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
	e = { render: (t, { loaded: { controller: a } }) => r(n, { ...t, controller: a }), loaders: [async () => (await o.search(), { controller: o })] };
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
export { e as Default, A as __namedExportsOrder, v as default };
