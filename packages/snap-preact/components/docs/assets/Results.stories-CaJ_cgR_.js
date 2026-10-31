import { j as r } from './iframe-Bc4KSH0T.js';
import { R as a } from './Results-xmDCY8C2.js';
import { S as i } from './snapify-DBnzfZp8.js';
import { R as l } from './types-DqusP3LW.js';
import { c as u } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-7OChHsa4.js';
import './defined-CdKp_MB-.js';
import './ResultTracker-COjEKXyJ.js';
import './createImpressionObserver-m2TNXj0r.js';
import './InlineBanner-BArbY9cG.js';
import './useA11y-BuGQuOJb.js';
import './withTracking-D6kix-j7.js';
import './Result-BzjtDAC1.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './Image-9Pub_w4s.js';
import './Button-C4cTOUHA.js';
import './CalloutBadge-DSmlH766.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-B-yVUDqy.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './names-Cka5BSlk.js';
import './Slideshow-ChO0chUe.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhbbLEi.js';
import './Checkbox-4N2aMGfq.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const p = `# Results

Renders a page of results utilizing \`<Result />\` components.

## Sub-components
- Result

- InlineBanner

- ResultTracker

## Usage
\`\`\`tsx
import { Results } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to the search controller.

\`\`\`tsx
<Results controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`tsx
<Results results={controller.store.results} />
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

<Results results={controller.store.results} controller={controller} resultComponent={CustomResult} />
\`\`\`

### excludeBanners
The \`excludeBanners\` prop specifies whether inline merchandising banners should be omitted from the rendered results.

\`\`\`tsx
<Results results={controller.store.results} excludeBanners={true} />
\`\`\`

### layout
The \`layout\` prop specifies if this result will be rendered in a \`grid\` or \`list\` layout.

\`\`\`tsx
<Results results={controller.store.results} layout={'grid'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display in a grid layout.

\`\`\`tsx
<Results results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display in a grid layout.

\`\`\`tsx
<Results results={controller.store.results} rows={2} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result within a grid layout.

\`\`\`tsx
<Results results={controller.store.results} gapSize={'10px'} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`js
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
<Results results={controller.store.results} breakpoints={breakpoints} />
\`\`\`
`,
	$ = {
		title: 'Organisms/Results',
		component: a,
		parameters: { docs: { description: { component: p } } },
		decorators: [(e) => r(e, {})],
		argTypes: {
			results: { description: 'Results store reference', type: { required: !1 }, table: { type: { summary: 'Results store object' } }, control: !1 },
			layout: {
				description: 'Results layout',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				options: [l.grid, l.list],
				control: { type: 'select' },
			},
			columns: {
				defaultValue: 4,
				description: 'Number of columns in results grid',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
				control: { type: 'number' },
			},
			rows: {
				description: 'Number of rows in results grid - adding this will put a hard limit on the results',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			gapSize: {
				defaultValue: '20px',
				description: 'Gap size between rows and columns',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
				control: { type: 'text' },
			},
			breakpoints: {
				defaultValue: { summary: 'Breakpoint object' },
				description: 'Breakpoints options object',
				table: { type: { summary: 'object' } },
				control: !1,
			},
			resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: !1 },
			excludeBanners: {
				defaultValue: !1,
				description: 'Exclude inline merchandising banners from the results list',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...u,
		},
	},
	o = i.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
	s = {
		render: (e, { loaded: { controller: t } }) =>
			r('div', { style: { maxWidth: e?.layout == 'list' ? '650px' : '800px' }, children: r(a, { ...e, controller: t, results: t?.store?.results }) }),
		loaders: [async () => (await o.search(), { controller: o })],
		args: { layout: 'grid' },
	},
	n = {
		render: (e, { loaded: { controller: t } }) =>
			r('div', {
				style: { maxWidth: e?.layout == 'list' ? '650px' : '800px' },
				children: r(a, { ...e, controller: t, results: t?.store?.results, layout: l.list }),
			}),
		loaders: [async () => (await o.search(), { controller: o })],
		args: { layout: 'list' },
	};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ResultsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.layout == 'list' ? '650px' : '800px'
    }}>
                <Results {...args} controller={controller} results={controller?.store?.results} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    layout: 'grid'
  }
}`,
			...s.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ResultsProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <div style={{
      maxWidth: args?.layout == 'list' ? '650px' : '800px'
    }}>
                <Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.list} />
            </div>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    layout: 'list'
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
const ee = ['Grid', 'List'];
export { s as Grid, n as List, ee as __namedExportsOrder, $ as default };
