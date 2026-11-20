import { j as e } from './iframe-CBMP6iq3.js';
import { S as i } from './snapify-CNA1I2DS.js';
import { T as n } from './Toolbar-BaxQK2PY.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-DcdNSeJF.js';
import './AutocompleteController-3_eY9TEV.js';
import './defined-CdKp_MB-.js';
import './FacetsHorizontal-DH3KG3vc.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CYgcb6yY.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-DmIQwaKA.js';
import './Facet-OlUlVoFY.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
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
import './Slideout-CtsQZp-g.js';
import './Overlay-DtQ4nwO8.js';
import './PaginationInfo-Bm3Wp1aX.js';
import './SearchHeader-BJ-rDmC6.js';
import './Facets-C4kyNZhV.js';
import './Banner-DLjUyzNk.js';
import './withTracking-CHJH0HXR.js';
import './createImpressionObserver-BETervzW.js';
import './Breadcrumbs-BuWqUEto.js';
import './LoadMore-CNxAASBD.js';
import './useIntersection-1a9oca-F.js';
import './Pagination-Cdia9LPj.js';
import './PerPage-D-S0QYLC.js';
import './Select-BDZKe8EB.js';
import './selectionKey-CmN2KTR5.js';
import './List-Bltyzt-T.js';
import './RadioList-BIeJdfUA.js';
import './SortBy-25Mi-IK9.js';
import './LayoutSelector-2vULcprm.js';
import './FilterSummary-BaUEEzJF.js';
import './Filter-CbO2rp-4.js';
import './TabSelection-DxmQAwWT.js';
const s =
		"# Toolbar\n\nRenders a search results toolbar.\n\n## Sub-components\n\n- SearchHeader\n- FilterSummary\n- LayoutSelector\n- PerPage\n- SortBy\n- Pagination\n- PaginationInfo\n- Button\n- Banner\n- FacetsHorizontal\n- TabSelection\n- SearchInput\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Toolbar controller={controller} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center,left,right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`searchHeader`, `filterSummary`,  `breadcrumbs`, `layoutSelector`, `perPage`, `sortBy`, `pagination`, `paginationInfo`, `tabSelection`, `searchInput`, `_`, `button.sidebar-toggle`, `banner.header`, `banner.banner`, `banner.footer`, `facetsHorizontal`;\n\n\n```tsx\n<Toolbar controller={controller} layout={['filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']}/>\n```\n\n### toggleSideBarButton\nThe `toggleSideBarButton` prop specifies `Button` props for the sidebar toggle button. This button renders in the layout as `button.sidebar-toggle` (included in the default layout). The button only renders when both the `toggleSideBarButton` prop is provided and `button.sidebar-toggle` is present in the layout.\n\n```tsx\n<Toolbar controller={controller} toggleSideBarButton={{ content: 'Toggle Sidebar' }} layout={['button.sidebar-toggle']}/>\n```\n\n\n",
	io = {
		title: 'Organisms/Toolbar',
		component: n,
		parameters: { docs: { description: { component: s } } },
		decorators: [(r) => e('div', { style: { maxWidth: '1200px' }, children: e(r, {}) })],
		argTypes: {
			controller: { description: 'Controller reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			layout: {
				description: 'array of modules to render in specified layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							'[`searchHeader` | `breadcrumbs` | `filterSummary` | `layoutSelector` | `perPage` | `sortBy` | `pagination` | `paginationInfo` | `tabSelection` | `searchInput` | `_` | `button.sidebar-toggle` | `banner.header` | `banner.banner` | `banner.footer` | `facetsHorizontal`]',
					},
					defaultValue: { summary: "['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']" },
				},
				control: 'none',
			},
			toggleSideBarButton: {
				description: 'specifies Button props for the sidebar toggle button',
				table: { category: 'Templates Legal', type: { summary: 'Partial<ButtonProps>' } },
				control: { type: 'object' },
			},
			...l,
		},
	},
	t = i.search({ id: 'Toolbar', globals: { siteId: 'atkzs2' } }),
	o = {
		render: (r, { loaded: { controller: a } }) => e(n, { ...r, controller: a }),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { layout: [['filterSummary', 'paginationInfo', '_', 'sortBy', 'perPage', 'pagination']] },
	};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ToolbarProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <Toolbar {...args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    layout: [['filterSummary', 'paginationInfo', '_', 'sortBy', 'perPage', 'pagination']]
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const lo = ['Default'];
export { o as Default, lo as __namedExportsOrder, io as default };
