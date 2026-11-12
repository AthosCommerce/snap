import { j as n } from './iframe-0uTqSs9S.js';
import { RecommendationGrid as l } from './RecommendationGrid-BKpJfQmS.js';
import { S as a } from './snapify-B992lD8l.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-CrQOlxmk.js';
import './defined-CdKp_MB-.js';
import './useIntersection--tMWEcR1.js';
import './RecommendationProfileTracker-BY3nS6Ea.js';
import './ResultTracker-Cu6M_iF6.js';
import './createImpressionObserver-Wn5GOqGo.js';
import './Result-DV0wVcu6.js';
import './types-DqusP3LW.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './Image-C3O8T0nj.js';
import './Button-CmsiLEAv.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-DXapTNdX.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-ERPkfVOZ.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './names-Cka5BSlk.js';
import './Slideshow-zOCrnuUn.js';
import './Grid-BRtXjrhJ.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-PZ5HrgK2.js';
import './Checkbox-7fOTHZL3.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
const m = `# RecommendationGrid

Renders a List of results utilizing \`<Result />\` components.

## Sub-components
- Result

## Usage

### controller
The \`controller\` prop specifies a reference to the recommendation controller.

\`\`\`tsx
<RecommendationGrid controller={controller} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`tsx
<RecommendationGrid results={controller.store.results} />
\`\`\`

### title
The \`title\` prop specifies the title text to render.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} title={'Recommended For You'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display. 

\`\`\`tsx
<RecommendationGrid results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} rows={2} />
\`\`\`

### trim
The \`trim\` prop specifies whether we should trim off excess results in order to have equal rows and columns.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} rows={3} trim={true} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} gapSize={'10px'} />
\`\`\`


### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enabled\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationGrid results={controller.store.results} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Example \`breakpoints\` object (there are no default breakpoints):

\`\`\`typescript
const breakpoints = {
	0: {
		columns: 1,
	},
	540: {
		columns: 2,
	},
	768: {
		columns: 3,
	},
	991: {
		columns: 4,
	},
};
\`\`\`

\`\`\`tsx
<RecommendationGrid results={controller.store.results} breakpoints={breakpoints} />
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

<RecommendationGrid results={controller.store.results} resultComponent={CustomResult} />
\`\`\``,
	Z = {
		title: 'Templates/RecommendationGrid',
		component: l,
		parameters: { docs: { description: { component: m } } },
		decorators: [(e) => n(e, {})],
		argTypes: {
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, type: { required: !0 }, control: !1 },
			title: {
				description: 'Recommendation title',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string' },
					defaultValue: { summary: 'controller.store.profile.display.templateParameters.title' },
				},
				control: { type: 'text' },
			},
			results: {
				description: 'Results store reference',
				type: { required: !1 },
				table: { type: { summary: 'Results store object' }, defaultValue: { summary: 'controller.store.results' } },
				control: !1,
			},
			resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
			columns: {
				description: 'Number of columns in results grid',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			rows: {
				description: 'Number of rows in results grid',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			trim: {
				description: 'trim off extra results based on columns and rows?',
				table: { category: 'Templates Legal', type: { summary: 'boolean' } },
				control: { type: 'boolean' },
			},
			gapSize: {
				defaultValue: '20px',
				description: 'Gap size between rows and columns',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
				control: { type: 'text' },
			},
			lazyRender: {
				description: 'Lazy render settings object',
				defaultValue: { enabled: !0, offset: '10%' },
				table: {
					category: 'Templates Legal',
					type: { summary: '{ enabled: boolean, offset?: string }' },
					defaultValue: { summary: "{ enabled: true, offset: '10%' }" },
				},
				control: { type: 'object' },
			},
			breakpoints: { description: 'Breakpoints options object', table: { type: { summary: 'object' } }, control: !1 },
			...i,
		},
	},
	s = a.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } }),
	r = {
		render: (e, { loaded: { controller: t } }) =>
			n('div', { style: { maxWidth: '1200px' }, children: n(l, { ...e, controller: t, results: t?.store?.results }) }),
		args: { columns: 10, rows: 1 },
		loaders: [async () => (await s.search(), { controller: s })],
	},
	o = {
		render: (e, { loaded: { controller: t } }) =>
			n('div', { style: { maxWidth: '1200px' }, children: n(l, { ...e, controller: t, results: t?.store?.results }) }),
		args: { columns: 4 },
		loaders: [async () => (await s.search(), { controller: s })],
	};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: RecommendationGridProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: RecommendationController;
    };
  }) => {
    return <div style={{
      maxWidth: '1200px'
    }}>
                <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
            </div>;
  },
  args: {
    columns: 10,
    rows: 1
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...r.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: RecommendationGridProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: RecommendationController;
    };
  }) => {
    return <div style={{
      maxWidth: '1200px'
    }}>
                <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
            </div>;
  },
  args: {
    columns: 4
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const $ = ['List', 'Grid'];
export { o as Grid, r as List, $ as __namedExportsOrder, Z as default };
