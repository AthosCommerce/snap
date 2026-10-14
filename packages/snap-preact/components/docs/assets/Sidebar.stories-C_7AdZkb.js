import { ah as o, j as n } from './iframe-CXSVAHru.js';
import { S as l } from './FacetsHorizontal-CIi7o8UB.js';
import { S as i } from './snapify-CnhKBMyG.js';
import { c as s } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
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
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const p =
		"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n- Button\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Sidebar controller={controller} />\n```\n\n### layout \nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;\n\n```tsx\n<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>\n```\n\n### hideTitleText\nThe `hideTitleText` prop will disable the sidebar title from rendering.\n\n```tsx\n<Sidebar controller={controller} hideTitleText />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```tsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### sticky\nThe `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.\n\n```tsx\n<Sidebar controller={controller} sticky={true} />\n```\n\n### stickyOffset\nThe `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.\n\n```tsx\n<Sidebar controller={controller} stickyOffset={50} />\n```\n\n### hideHeader\nThe `hideHeader` prop will disable the sidebar header from rendering. \n\n```tsx\n<Sidebar controller={controller} hideHeader />\n```\n\n### hideCloseButton\nThe `hideCloseButton` prop will disable the close Button component from rendering.\n\n```tsx\n<Sidebar controller={controller} hideCloseButton />\n```\n\n### closeButtonIcon \nThe `closeButtonIcon` prop specifies the name of an icon to add to the close sidebar button.\n\n```tsx\n<Sidebar controller={controller} closeButtonIcon={'close'} />\n```\n\n### closeButtonText\nThe `closeButtonText` prop will change the inner text of the sidebar close button.\n\n```tsx\n<Sidebar controller={controller} closeButtonText={'Close Sidebar'} />\n```\n\n### hideFooter\nThe `hideFooter` prop will disable the sidebar footer from rendering. \n\n```tsx\n<Sidebar controller={controller} hideFooter />\n```\n\n### hideApplyButton\nThe `hideApplyButton` prop will disable the apply Button component from rendering.\n\n```tsx\n<Sidebar controller={controller} hideApplyButton />\n```\n\n### applyButtonText\nThe `applyButtonText` prop will change the inner text of the apply Button component.\n\n```tsx\n<Sidebar controller={controller} applyButtonText={'Apply Changes'} />\n```\n\n### applyButtonIcon \nThe `applyButtonIcon` prop specifies the name of an icon to add to the sidebar apply filters button.\n\n```tsx\n<Sidebar controller={controller} applyButtonIcon={'cog'} />\n```\n\n### hideClearButton\nThe `hideClearButton` prop will disable the clear all Button component from rendering.\n\n```tsx\n<Sidebar controller={controller} hideClearButton />\n```\n\n### clearButtonText\nThe `clearButtonText` prop will change the inner text of the clear all Button component.\n\n```tsx\n<Sidebar controller={controller} clearButtonText={'Start Over'} />\n```\n\n### clearButtonIcon \nThe `clearButtonIcon` prop specifies the name of an icon to add to the sidebar clear all filters button.\n\n```tsx\n<Sidebar controller={controller} clearButtonIcon={'close'} />\n```\n\n### hideClearButtonText \nThe `hideClearButtonText` prop hides the clear button text.\n\n```tsx\n<Sidebar controller={controller} clearButtonText={'start over'} hideClearButtonText={true} />\n```\n\n### hideApplyButtonText \nThe `hideApplyButtonText` prop hides the apply button text.\n\n```tsx\n<Sidebar controller={controller} applyButtonText={'Apply Changes'} hideApplyButtonText={true} />\n```\n\n### hideCloseButtonText \nThe `hideCloseButtonText` prop hides the close button text.\n\n```tsx\n<Sidebar controller={controller} closeButtonText={'close'} hideCloseButtonText={true} />\n```\n\n### onToggleSidebar\nThe `onToggleSidebar` prop specifies a callback function that is invoked when the close, apply, or clear button is clicked. Typically used to toggle the sidebar open/closed state.\n\n```tsx\n<Sidebar controller={controller} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Sidebar component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `titleText` | Sidebar heading text | `controller` (SearchController) |\n\n### Example\n\n```tsx\n<Sidebar\n	controller={controller}\n	lang={{\n		titleText: {\n			value: 'Refine By',\n		},\n	}}\n/>\n```\n",
	{ fn: c } = __STORYBOOK_MODULE_TEST__,
	ie = {
		title: 'Organisms/Sidebar',
		component: l,
		parameters: { docs: { description: { component: p } } },
		decorators: [(t) => n('div', { style: { maxWidth: '300px' }, children: n(t, {}) })],
		args: { onToggleSidebar: c() },
		argTypes: {
			controller: {
				description: 'Search controller reference',
				type: { required: !0 },
				table: { type: { summary: 'Search controller object' } },
				control: !1,
			},
			layout: {
				description: 'specifies the layout of the sidebar',
				table: {
					category: 'Templates Legal',
					type: { summary: "['filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_']" },
					defaultValue: { summary: "[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]" },
				},
				control: 'none',
			},
			titleText: {
				description: 'Text to render in the sidebar title',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
				control: { type: 'text' },
			},
			hideTitleText: {
				defaultValue: !1,
				description: 'hides the sidebar title component',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			sticky: {
				description: 'specifies if the sidebar should be sticky',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			stickyOffset: {
				description: 'specifies the offset of the sidebar when sticky is true',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			hideHeader: {
				description: 'hides the sidebar header',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideClearButtonText: {
				description: 'hides the clear button text',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideApplyButtonText: {
				description: 'hides the apply button text',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideCloseButtonText: {
				description: 'hides the close button text',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideCloseButton: {
				description: 'hides the close sidebar button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			closeButtonIcon: {
				description: 'Icon to render in the close sidebar button',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
				options: [...Object.keys(o)],
				control: { type: 'select' },
			},
			closeButtonText: {
				description: 'Text to render in the close sidebar button',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			hideFooter: {
				description: 'hides the sidebar footer',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideApplyButton: {
				description: 'hides the apply facets button component',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			applyButtonText: {
				description: 'Text to render in the apply facets button',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Apply' } },
				control: { type: 'text' },
			},
			applyButtonIcon: {
				description: 'Icon to render in the apply facets button',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				options: [...Object.keys(o)],
				control: { type: 'select' },
			},
			hideClearButton: {
				description: 'hides the clear all filters button component',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			clearButtonText: {
				description: 'Text to render in the clear all facets button',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
				control: { type: 'text' },
			},
			clearButtonIcon: {
				description: 'Icon to render in the clear filters button',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				options: [...Object.keys(o)],
				control: { type: 'select' },
			},
			onToggleSidebar: {
				description: 'Callback function invoked when the close, apply, or clear button is clicked',
				table: { type: { summary: '() => void' } },
			},
			...s,
		},
	},
	r = i.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } }),
	e = { render: (t, { loaded: { controller: a } }) => n(l, { ...t, controller: a }), loaders: [async () => (await r.search(), { controller: r })] };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SidebarProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <Sidebar {...args} controller={controller} />;
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
const se = ['Default'];
export { e as Default, se as __namedExportsOrder, ie as default };
