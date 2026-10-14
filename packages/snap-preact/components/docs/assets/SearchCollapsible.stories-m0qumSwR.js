import { j as r } from './iframe-CXSVAHru.js';
import { S as i } from './snapify-CnhKBMyG.js';
import { SearchCollapsible as l } from './SearchCollapsible-Cz8VzK5Z.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
import './Search-CZVcPdBq.js';
import './useA11y-BuGQuOJb.js';
import './componentNameToClassName-btPHBToT.js';
import './Slideout-OFSsF92G.js';
import './defined-CdKp_MB-.js';
import './Overlay-BCtuQj-C.js';
import './useLang-Dx66cFD0.js';
import './Toolbar-Dpm17CO3.js';
import './FacetsHorizontal-CIi7o8UB.js';
import './useClickOutside-G4DBoznB.js';
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
import './Results-Hox3H_zi.js';
import './useDisplaySettings-D0_uZPs4.js';
import './ResultTracker-D4h_hXCO.js';
import './InlineBanner-DsZBvWCz.js';
import './Result-BacvSyPr.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './CalloutBadge-CahbTmzQ.js';
import './Rating-Bdkm_1kb.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
import './truncate-CqAvmyZI.js';
import './NoResults-CNNW63w2.js';
import './useCreateController-CPUKSfyE.js';
const d = `# SearchCollapsible Template

Renders a Search Results Page with the facets collapsed behind a sidebar toggle button.

\`SearchCollapsible\` is a thin wrapper around the \`Search\` template. It renders \`Search\` with an internal \`alias\` of \`searchCollapsible\`, which resolves the \`searchCollapsible\` theme component defaults in place of the \`search\` defaults. It accepts the same props as \`Search\` — only the theme defaults differ, so the sidebar starts closed and the toggle button is placed in the toolbar layout.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required \`controller\` prop specifies a reference to the search controller.

\`\`\`tsx
<SearchCollapsible controller={controller} />
\`\`\`

### toggleSidebarButtonText
The \`toggleSidebarButtonText\` prop specifies the inner text of the Sidebar toggle button. It defaults to \`"Filters"\`, so a toggle button renders once the store has loaded. No button renders if the text resolves to an empty value, or if \`hideToggleSidebarButton\` is \`true\`.

Because this template starts with the sidebar closed, the toggle button is how the sidebar is reached — this template's theme places it in the toolbar layout as the \`button.sidebar-toggle\` module.

\`\`\`tsx
<SearchCollapsible controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
\`\`\`

### toggleSidebarStartClosed
The \`toggleSidebarStartClosed\` prop specifies if the sidebar toggle should start closed. This template's theme sets it to \`true\` by default, unlike the \`Search\` template. Pass \`false\` to have the sidebar start open.

\`\`\`tsx
<SearchCollapsible controller={controller} toggleSidebarStartClosed={false} />
\`\`\`

### hideToggleSidebarButton
The \`hideToggleSidebarButton\` prop hides the Sidebar toggle button.

\`\`\`tsx
<SearchCollapsible controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`tsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<SearchCollapsible controller={controller} resultComponent={CustomResult} />
\`\`\`

### mobileDisplayAt
The \`mobileDisplayAt\` prop defines a CSS media query that determines when the Sidebar component switches to mobile view with a slideout. It defaults to the theme's \`tablet\` breakpoint, falling back to \`"991px"\` when the theme does not define one. You can also pass a boolean value to enable or disable mobile view regardless of screen size — \`true\` always renders the mobile view, \`false\` never does.

\`\`\`tsx
<SearchCollapsible controller={controller} mobileDisplayAt={'400px'} />
\`\`\`

or 

\`\`\`tsx
<SearchCollapsible controller={controller} mobileDisplayAt={true} />
\`\`\`

### sidebarWidth
The \`sidebarWidth\` prop specifies the CSS width of the Sidebar component. By default, the sidebar width is \`"270px"\`.

\`\`\`tsx
<SearchCollapsible controller={controller} sidebarWidth={'300px'} />
\`\`\`

### hideSidebar
The \`hideSidebar\` prop specifies if the Sidebar component should be rendered.  

\`\`\`tsx
<SearchCollapsible controller={controller} hideSidebar={true} />
\`\`\`

### hideTopToolbar
The \`hideTopToolbar\` prop specifies if the top ToolBar component should be rendered.  

\`\`\`tsx
<SearchCollapsible controller={controller} hideTopToolbar={true} />
\`\`\`

### hideMiddleToolbar
The \`hideMiddleToolbar\` prop specifies if the middle ToolBar component should be rendered. This template's theme leaves the middle toolbar empty at desktop widths.  

\`\`\`tsx
<SearchCollapsible controller={controller} hideMiddleToolbar={true} />
\`\`\`

### hideBottomToolbar
The \`hideBottomToolbar\` prop specifies if the bottom ToolBar component should be rendered.  

\`\`\`tsx
<SearchCollapsible controller={controller} hideBottomToolbar={true} />
\`\`\`

### layoutOptions
The \`layoutOptions\` prop allows you to customize the layout of the SearchCollapsible component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




\`\`\`tsx

type ListOption = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    default?: boolean;
    icon?: IconType | Partial<IconProps>;
    overrides?: ThemeMinimal;
    url?: UrlManager;
    available?: boolean;
}

const layoutOptions: ListOption[] = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'searchCollapsible results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'searchCollapsible results': {
					columns: 2,
				},
			},
		},
	},
]

<SearchCollapsible controller={controller} layoutOptions={layoutOptions} />
\`\`\`

## Theme Defaults

Theme overrides for this template are keyed off the \`searchCollapsible\` selector rather than \`search\`. The defaults applied by the theme are:

| Selector | Default |
|---|---|
| \`searchCollapsible\` | \`toggleSidebarStartClosed: true\`, \`hideToggleSidebarButton: false\` |
| \`searchCollapsible button.sidebar-toggle\` | \`icon: 'filters'\` |
| \`searchCollapsible toolbar.top\` | \`[['banner.header'], ['searchHeader'], ['banner.banner'], ['button.sidebar-toggle', 'paginationInfo', '_', 'perPage', 'sortBy']]\` |
| \`searchCollapsible toolbar.middle\` | \`[]\` — empty at desktop widths |
| \`searchCollapsible toolbar.bottom\` | \`[['banner.footer'], ['_', 'pagination', '_']]\` |
| \`searchCollapsible results\` | \`columns: 4\` (3 on tablet, 2 on mobile) |

At mobile and tablet widths the toolbars are rearranged so the sidebar toggle and sort controls move into the middle toolbar:

\`\`\`tsx
'searchCollapsible toolbar.top': {
	layout: [['banner.header'], ['searchHeader', '_']],
},
'searchCollapsible toolbar.middle': {
	layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']],
},
\`\`\`

To override a sub-component of this template, prefix the selector with \`searchCollapsible\`:

\`\`\`tsx
const theme = {
	components: {
		'searchCollapsible results': {
			columns: 6,
		},
	},
};
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the SearchCollapsible component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`toggleSidebarButtonText\` | Sidebar toggle button text | \`filters\` (SearchFilterStore), \`sidebarOpenState\` (boolean) |

### Example

\`\`\`tsx
<SearchCollapsible
	controller={controller}
	lang={{
		toggleSidebarButtonText: {
			value: (data) => {
				if (data.sidebarOpenState) {
					return 'Close Sidebar';
				}
				return 'Open Sidebar';
			},
		},
	}}
/>
\`\`\`
`,
	ke = {
		title: 'Templates/SearchCollapsible',
		component: l,
		parameters: { docs: { description: { component: d } } },
		decorators: [(e) => r('div', { style: { maxWidth: '1200px' }, children: r(e, {}) })],
		argTypes: {
			controller: { description: 'Search Controller Reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			toggleSidebarButtonText: {
				description: 'Text to render in the toggle Sidebar button.',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			toggleSidebarStartClosed: {
				defaultValue: !1,
				description: 'determines if the sidebar toggle should start closed',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideToggleSidebarButton: {
				defaultValue: !1,
				description: 'hide the toggle Sidebar button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			mobileDisplayAt: {
				defaultValue: '',
				description: 'specifies a CSS media query for when the Sidebar component should render in mobile view, which will render in a slideout',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			hideSidebar: {
				defaultValue: !1,
				description: 'prevents the sidebar component from rendering',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideTopToolbar: {
				defaultValue: !1,
				description: 'prevents the top Toolbar component from rendering',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideMiddleToolbar: {
				defaultValue: !1,
				description: 'prevents the middle Toolbar component from rendering',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideBottomToolbar: {
				defaultValue: !1,
				description: 'prevents the bottom Toolbar component from rendering',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			layoutOptions: {
				description: 'Options for layout selection',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'ListOption[]' } },
				control: { type: 'object' },
			},
			resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
			...p,
		},
	},
	a = i.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
	s = i.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
	t = { render: (e, { loaded: { controller: n } }) => r(l, { ...e, controller: n }), loaders: [async () => (await a.search(), { controller: a })] },
	o = { render: (e, { loaded: { controller: n } }) => r(l, { ...e, controller: n }), loaders: [async () => (await s.search(), { controller: s })] };
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SearchCollapsibleProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <SearchCollapsible {...args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...t.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SearchCollapsibleProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <SearchCollapsible {...args} controller={controller} />;
  },
  loaders: [async () => {
    await noresultsInstance.search();
    return {
      controller: noresultsInstance
    };
  }]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const Ae = ['Default', 'NoResults'];
export { t as Default, o as NoResults, Ae as __namedExportsOrder, ke as default };
