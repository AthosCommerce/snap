import { j as o } from './iframe-CXSVAHru.js';
import { S as i } from './snapify-CnhKBMyG.js';
import { T as n } from './Toolbar-Dpm17CO3.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
import './defined-CdKp_MB-.js';
import './FacetsHorizontal-CIi7o8UB.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-G4DBoznB.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-WSImKrUZ.js';
import './Facet-BmQbVpPT.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Button-YZishUF-.js';
import './SearchInput-DJ-VPu5W.js';
import './FacetListOptions-DvX14VIV.js';
import './Checkbox-CXNoFSPC.js';
import './Radio-DY75CPxX.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-Bu5fpnu_.js';
import './FacetPaletteOptions-DW1gB9zo.js';
import './names-Cka5BSlk.js';
import './Image-BTbXUZuZ.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-C5dERDt2.js';
import './FacetSlider-AhnUnnRl.js';
import './Slideout-OFSsF92G.js';
import './Overlay-BCtuQj-C.js';
import './PaginationInfo-BGW1CMBu.js';
import './SearchHeader-BsYBThrg.js';
import './Facets-DPwV1I2W.js';
import './Banner-DD7UuHM6.js';
import './withTracking-DWvVsRqK.js';
import './createImpressionObserver-DI1SU3AN.js';
import './Breadcrumbs-C6qMSVRy.js';
import './LoadMore-U8fNXCqg.js';
import './useIntersection-Dwh_PZ6E.js';
import './Pagination-Dp3xsKuj.js';
import './PerPage-COcGnyzN.js';
import './Select-DAPmdZ4V.js';
import './selectionKey-CmN2KTR5.js';
import './List-DGhdnIhb.js';
import './RadioList-uOtV-0O8.js';
import './SortBy-Ax3RG03i.js';
import './LayoutSelector-C9dw2cSG.js';
import './FilterSummary-D-y17uWR.js';
import './Filter-DHh9Ae_k.js';
import './TabSelection-IWPsXkgZ.js';
const s =
		"# Toolbar\n\nRenders a search results toolbar.\n\n## Sub-components\n\n- SearchHeader\n- FilterSummary\n- LayoutSelector\n- PerPage\n- SortBy\n- Pagination\n- PaginationInfo\n- Button\n- Banner\n- FacetsHorizontal;\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Toolbar controller={controller.store.results} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center,left,right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`searchHeader`, `filterSummary`,  `breadcrumbs`, `layoutSelector`, `perPage`, `sortBy`, `pagination`, `paginationInfo`, `_`, `button.sidebar-toggle`, `banner.header`, `banner.banner`, `banner.footer`, `facetsHorizontal`;\n\n\n```tsx\n<Toolbar controller={controller.store.results} layout={['filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']}/>\n```\n\n### toggleSideBarButton\nThe `toggleSideBarButton` prop specifies an element to be used as the toggleSideBarButton. This element will render in the layout as `button.sidebar-toggle`. If it is not provided in the layout, the button will not render.\n\n```tsx\n\nconst button = () => {\n    return <div>Toggle Sidebar</div>\n}\n<Toolbar controller={controller.store.results} toggleSideBarButton={button} layout={[`button.sidebar-toggle`]}/>\n```\n\n\n",
	ie = {
		title: 'Organisms/Toolbar',
		component: n,
		parameters: { docs: { description: { component: s } } },
		decorators: [(r) => o('div', { style: { maxWidth: '1200px' }, children: o(r, {}) })],
		argTypes: {
			controller: { description: 'Controller reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			layout: {
				description: 'array of modules to render in specified layout',
				table: {
					category: 'Templates Legal',
					type: {
						summary:
							'[`searchHeader` | `breadcrumbs` | `filterSummary` | `layoutSelector` | `perPage` | `sortBy` | `pagination` | `paginationInfo` | `_` | `button.sidebar-toggle` | `banner.header` | `banner.banner` | `banner.footer` | `facetsHorizontal`]',
					},
					defaultValue: { summary: "['filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']" },
				},
				control: 'none',
			},
			toggleSideBarButton: {
				description: 'specifies an element to be used as the toggleSideBarButton',
				table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '' } },
				control: { type: 'object' },
			},
			...l,
		},
	},
	t = i.search({ id: 'Toolbar', globals: { siteId: 'atkzs2' } }),
	e = {
		render: (r, { loaded: { controller: a } }) => o(n, { ...r, controller: a }),
		loaders: [async () => (await t.search(), { controller: t })],
		args: { layout: [['filterSummary', 'paginationInfo', '_', 'sortBy', 'perPage', 'pagination']] },
	};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
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
			...e.parameters?.docs?.source,
		},
	},
};
const le = ['Default'];
export { e as Default, le as __namedExportsOrder, ie as default };
