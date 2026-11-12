import { j as e } from './iframe-0uTqSs9S.js';
import { S as i } from './snapify-B992lD8l.js';
import { T as n } from './Toolbar-BZ7mMkfh.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
import './defined-CdKp_MB-.js';
import './FacetsHorizontal-D193PKaF.js';
import './useA11y-BuGQuOJb.js';
import './useClickOutside-DOEh9Z-W.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-CL17qjds.js';
import './Facet-DQZMdX7t.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
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
import './Slideout-DvI7vGOb.js';
import './Overlay-D_0SkdOn.js';
import './PaginationInfo-DqP8FQYM.js';
import './SearchHeader-BHi0LQRW.js';
import './Facets-CShzM2lt.js';
import './Banner-DZg3U6u9.js';
import './withTracking-Bxgx8W-i.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './Breadcrumbs-kqze-Ojn.js';
import './LoadMore-CT03CmWA.js';
import './useIntersection--tMWEcR1.js';
import './Pagination-WVMgHxfy.js';
import './PerPage-D8pMV3P2.js';
import './Select-BGmz8t2_.js';
import './selectionKey-CmN2KTR5.js';
import './List-PZ5HrgK2.js';
import './RadioList-DsDAvIw3.js';
import './SortBy-D1lFQBNp.js';
import './LayoutSelector-Cac-plGG.js';
import './FilterSummary-D4UeoXRA.js';
import './Filter-CgxQ6G_w.js';
import './TabSelection-DwzD6qYJ.js';
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
