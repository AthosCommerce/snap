import { j as a, o as i } from './iframe-CXSVAHru.js';
import { P as r } from './PaginationInfo-BGW1CMBu.js';
import { S as s } from './snapify-CnhKBMyG.js';
import { c as l } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const c =
		"# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```tsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```tsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the PaginationInfo component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `infoText` | The pagination info display text | `pagination` (SearchPaginationStore) |\n\n### Example\n\n```tsx\n<PaginationInfo\n	controller={controller}\n	lang={{\n		infoText: {\n			value: (data) => `Showing ${data.pagination?.begin}-${data.pagination?.end} of ${data.pagination?.totalResults} products`,\n			attributes: {\n				'aria-label': (data) => `Displaying ${data.pagination?.totalResults} results`,\n			},\n		},\n	}}\n/>\n```\n",
	b = {
		title: 'Atoms/PaginationInfo',
		component: r,
		parameters: { docs: { description: { component: c } } },
		argTypes: {
			controller: {
				description: 'Search Controller reference',
				type: { required: !1 },
				table: { type: { summary: 'Search controller object' } },
				control: !1,
			},
			pagination: {
				description: 'Pagination store reference',
				type: { required: !1 },
				table: { type: { summary: 'pagination store object' } },
				control: !1,
			},
			infoText: {
				description: 'Pagination info text to display',
				table: { type: { summary: 'string, ()=>string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			...l,
		},
	},
	o = s.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
	p = i(({ args: t, controller: e }) => a(r, { ...t, pagination: e?.store?.pagination })),
	n = {
		render: (t, { loaded: { controller: e } }) => a(p, { args: t, controller: e }),
		loaders: [async () => (await o.search(), { controller: o })],
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: PaginationInfoProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservablePaginationInfo args={args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...n.parameters?.docs?.source,
		},
	},
};
const x = ['Default'];
export { n as Default, x as __namedExportsOrder, b as default };
