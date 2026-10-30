import { ah as o, j as n } from './iframe-U9T2Y9ZS.js';
import { F as r } from './FacetsHorizontal-B68XtXsV.js';
import { S as s } from './snapify-Df13VkEj.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './useClickOutside-DeMSpwd-.js';
import './useLang-Dx66cFD0.js';
import './Dropdown-Bgi8cN4O.js';
import './Facet-HxPfd-CW.js';
import './types-DqusP3LW.js';
import './fieldNameToComponentName-CjebIDZG.js';
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
import './Slideout-xOZDsJn4.js';
import './Overlay-BH_wZt84.js';
import './PaginationInfo-Bg650W-a.js';
import './SearchHeader-DMztF-MS.js';
import './Facets-B-EVV1pK.js';
import './Banner-D10o1Oav.js';
import './withTracking-B-gE0m0K.js';
import './createImpressionObserver-B76-2cq4.js';
import './Breadcrumbs-BMN0fsvC.js';
import './LoadMore-CrQlsgeP.js';
import './useIntersection-D52kaMEq.js';
import './Pagination-DoORxBwJ.js';
import './PerPage-2HjLiwSz.js';
import './Select-HVXhT1EH.js';
import './selectionKey-CmN2KTR5.js';
import './List-9eXTq04g.js';
import './RadioList-Dpb6I9cR.js';
import './SortBy-Blw6YrBp.js';
import './LayoutSelector-CDjnVls8.js';
import './FilterSummary-h_KJo5Qw.js';
import './Filter-xKdvsRSa.js';
import './TabSelection-Cf26zrT4.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const c =
		"# FacetsHorizontal\n\nRenders all facets in a horizontal display.\n\n## Sub-components\n- Facet\n- Dropdown\n- Icon\n- Button\n- Slideout\n- Sidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and sidebar slideout.\n\n```tsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowToggleSidebarButton\nThe `alwaysShowToggleSidebarButton` prop will always render the sidebar-toggle button, not just when facets are overflowing.\n\n```tsx\n<FacetsHorizontal controller={controller} alwaysShowToggleSidebarButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideToggleSidebarButton\nThe `hideToggleSidebarButton` prop specifies whether the toggle sidebar button should be rendered or not. If not hidden, the button will render when there are more filters to show than the limit prop allows (unless the `alwaysShowToggleSidebarButton` prop is passed, which will ignore the limit). \n\n```tsx\n<FacetsHorizontal controller={controller} hideToggleSidebarButton={true}/>\n```\n\n### openFacetsInSidebar\nThe `openFacetsInSidebar` prop changes what clicking a facet header does. Instead of opening a dropdown under the header, the click opens the sidebar slideout with that facet expanded, scrolled into view and focused.\n\n```tsx\n<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />\n```\n\n### toggleSidebarButtonText\nThe `toggleSidebarButtonText` prop specifies the text displayed in the toggle sidebar button. Defaults to 'Filters'.\n\n```tsx\n<FacetsHorizontal controller={controller} toggleSidebarButtonText={'Filters'}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```tsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FacetsHorizontal component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `dropdownButton` | Facet dropdown button text/attributes | `selectedFacet` (IndividualFacetType), `facet` (IndividualFacetType) |\n| `toggleSidebarButtonText` | Sidebar toggle button text | `facets` (IndividualFacetType[]), `sidebarOpenState` (boolean) |\n\n### Example\n\n```tsx\n<FacetsHorizontal\n	controller={controller}\n	lang={{\n		toggleSidebarButtonText: {\n			value: (data) => data.sidebarOpenState ? 'Hide Filters' : 'Show Filters',\n		},\n	}}\n/>\n```\n",
	{ fn: p } = __STORYBOOK_MODULE_TEST__,
	se = {
		title: 'Organisms/FacetsHorizontal',
		component: r,
		parameters: { docs: { description: { component: c } } },
		decorators: [(t) => n('div', { style: { maxWidth: '1200px' }, children: n(t, {}) })],
		args: { onFacetOptionClick: p() },
		argTypes: {
			facets: { description: 'Facets store reference', type: { required: !1 }, table: { type: { summary: 'Facets store object' } }, control: !1 },
			limit: {
				description: 'Maximum number of facets to display',
				defaultValue: 6,
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 6 } },
				control: { type: 'number' },
			},
			alwaysShowToggleSidebarButton: {
				defaultValue: !1,
				description: 'Always render sidebar toggle button regardless of facet overflow set by limit prop',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideToggleSidebarButton: {
				defaultValue: !1,
				description: 'Hide the toggle sidebar button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			openFacetsInSidebar: {
				defaultValue: !1,
				description: 'Clicking a facet header opens that facet in the sidebar slideout instead of a dropdown',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			toggleSidebarButtonText: {
				defaultValue: 'Filters',
				description: 'Text to display in the toggle sidebar button',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
				control: { type: 'text' },
			},
			onFacetOptionClick: {
				description: 'Callback function for when a facet option is clicked',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'function' } },
			},
			showSelectedCount: {
				description: 'shows the number of selected options within the facet headers',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideSelectedCountParenthesis: {
				description: 'specifies if the parenthesis should render around the selected count',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			showClearAllText: {
				description: 'specifies if the clear all text should render',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			clearAllText: {
				description: 'text to show in the clear all link',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
				control: { type: 'text' },
			},
			clearAllIcon: {
				description: 'Icon to show in the clear all link',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				options: [...Object.keys(o)],
				control: { type: 'select' },
			},
			iconExpand: {
				description: 'Icon for when facet is collapsed',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
				options: [...Object.keys(o)],
				control: { type: 'select' },
			},
			iconCollapse: {
				description: 'Icon for when facet is expanded',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
				options: [...Object.keys(o)],
				control: { type: 'select' },
			},
			controller: { description: 'Controller reference', type: { required: !1 }, table: { type: { summary: 'Controller object' } }, control: !1 },
			...i,
		},
	},
	a = s.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
	e = { render: (t, { loaded: { controller: l } }) => n(r, { ...t, controller: l }), loaders: [async () => (await a.search(), { controller: a })] };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: FacetsHorizontalProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <FacetsHorizontal {...args} controller={controller} />;
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
const ie = ['Default'];
export { e as Default, ie as __namedExportsOrder, se as default };
