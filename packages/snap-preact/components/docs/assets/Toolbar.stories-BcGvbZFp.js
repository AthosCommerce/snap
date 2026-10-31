import { j as o } from './iframe-Bc4KSH0T.js';
import { S as i } from './snapify-DBnzfZp8.js';
import { T as n } from './Toolbar-vvYI5bhh.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
import './defined-CdKp_MB-.js';
import './FacetsHorizontal-DD9MOQMC.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-CoFEN31h.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-tCLF6hwk.js';
import './Facet-JzgYSJ_F.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Button-C4cTOUHA.js';
import './SearchInput-BPIgwblk.js';
import './FacetListOptions-BRsZOoKo.js';
import './Checkbox-4N2aMGfq.js';
import './Radio-CEEJysGh.js';
import './createHoverProps-B_zlUBHN.js';
import './FacetHierarchyOptions-sMDWNmLW.js';
import './FacetPaletteOptions-D2DLl7t9.js';
import './names-Cka5BSlk.js';
import './Image-9Pub_w4s.js';
import './handleize-xLHhB8k5.js';
import './FacetGridOptions-B4YG6F_c.js';
import './FacetSlider-Cclsjvzk.js';
import './Slideout-DA0XdRZT.js';
import './Overlay-d1j9-VxC.js';
import './PaginationInfo-K-nKWsAd.js';
import './SearchHeader-CxEO9llg.js';
import './Facets-DXg3Av-H.js';
import './Banner-CMX4Y7Vh.js';
import './withTracking-D6kix-j7.js';
import './createImpressionObserver-m2TNXj0r.js';
import './Breadcrumbs-DmxOMnRy.js';
import './LoadMore-tgvuskFW.js';
import './useIntersection-C53zN6Qj.js';
import './Pagination-CdrYtlrh.js';
import './PerPage-DHlasSSl.js';
import './Select-C5jrZYxP.js';
import './selectionKey-CmN2KTR5.js';
import './List-DGhbbLEi.js';
import './RadioList-mYVU-cPs.js';
import './SortBy-B6sDet1z.js';
import './LayoutSelector-CMNTfShJ.js';
import './FilterSummary-CmmIwfAj.js';
import './Filter-CBA1sOCL.js';
import './TabSelection-By3kzuho.js';
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
