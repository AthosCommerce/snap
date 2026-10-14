import { j as o, o as s } from './iframe-CXSVAHru.js';
import { P as i } from './Pagination-Dp3xsKuj.js';
import { S as r } from './snapify-CnhKBMyG.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const l =
		"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Pagination } from '@athoscommerce/snap-preact/components';\n```\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```tsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### persistFirst\nThe `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.\n\n```tsx\n<Pagination pagination={controller.store.pagination} persistFirst={true} />\n```\n\n### persistLast\nThe `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.\n\n```tsx\n<Pagination pagination={controller.store.pagination} persistLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```tsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hidePages\nThe `hidePages` prop hides the main page number buttons (excludes first and last pages, which have their own hide props).\n\n```tsx\n<Pagination pagination={controller.store.pagination} hidePages={true} />\n```\n\n### ellipsisContent\nThe `ellipsisContent` prop specifies custom content to render in the ellipsis sections. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} ellipsisContent={'...'} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\nUsing a JSX element:\n\n```tsx\n<Pagination pagination={controller.store.pagination} nextButton={<Icon icon={'angle-right'} />} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\nUsing a JSX element:\n\n```tsx\n<Pagination pagination={controller.store.pagination} prevButton={<Icon icon={'angle-left'} />} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} lastButton={'Last'} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Pagination component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `previous` | Previous page button text/attributes | `pagination` (SearchPaginationStore) |\n| `next` | Next page button text/attributes | `pagination` (SearchPaginationStore) |\n| `first` | First page button text/attributes | `pagination` (SearchPaginationStore) |\n| `last` | Last page button text/attributes | `pagination` (SearchPaginationStore) |\n| `page` | Individual page number text/attributes | `pagination` (SearchPaginationStore), `page` (Page) |\n\n### Example\n\n```tsx\n<Pagination\n	pagination={controller.store.pagination}\n	lang={{\n		previous: {\n			attributes: {\n				'aria-label': 'Go to previous page',\n			},\n		},\n		next: {\n			attributes: {\n				'aria-label': 'Go to next page',\n			},\n		},\n		first: {\n			attributes: {\n				'aria-label': 'Go to the first page',\n			},\n		},\n		last: {\n			value: (data) => `Go to page ${data.pagination.last.number}`,\n			attributes: {\n				'aria-label': (data) => `Go to last page, page ${data.pagination.last.number}`,\n			},\n		},\n		page: {\n			attributes: {\n				'aria-label': (data) => `Go to page ${data.page.number} of ${data.pagination.totalPages}`,\n			},\n		},\n	}}\n/>\n```\n\nWhen used with Snap Templates, these values can also be set via the `translations` config:\n\n```tsx\nnew SnapTemplates({\n	...\n	translations: {\n		en: {\n			pagination: {\n				previous: {\n					attributes: { 'aria-label': 'Previous page' },\n				},\n				next: {\n					attributes: { 'aria-label': 'Next page' },\n				},\n				page: {\n					attributes: {\n						'aria-label': (data) => `Page ${data.page.number} of ${data.pagination.totalPages}`,\n					},\n				},\n			},\n		},\n	},\n});\n```",
	P = {
		title: 'Molecules/Pagination',
		component: i,
		parameters: { docs: { description: { component: l } } },
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
			pages: {
				description:
					'Number of pages shown - recommend using an odd number as it includes the current page with an even spread to the left and right (excluding first and last)',
				defaultValue: 5,
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 5 } },
				control: { type: 'number' },
			},
			pagesLeft: {
				description: 'Number of pages shown to the left (excluding first) - must be used with pagesRight',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			pagesRight: {
				description: 'Number of pages shown to the right (excluding last) - must be used with pagesLeft',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			nextButton: {
				description: 'Pagination next button content',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			prevButton: {
				description: 'Pagination prev button content',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			firstButton: {
				description: 'Pagination first button content',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			lastButton: {
				description: 'Pagination last button content',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			hideFirst: {
				description: 'Hide first button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideLast: {
				description: 'Hide last button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			persistFirst: {
				description: 'persists the first page button (when not on first page)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			persistLast: {
				description: 'persists the last page button (when not on last page)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideEllipsis: {
				description: 'Hide ellipsis',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hidePages: {
				description: 'Hide main page number buttons (excludes first and last)',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			ellipsisContent: {
				description: 'Custom content for the ellipsis sections',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			hideNext: {
				description: 'Hide next button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hidePrev: {
				description: 'Hide previous button',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...p,
		},
	},
	a = r.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
	g = s(({ args: e, controller: n }) => o(i, { ...e, pagination: n?.store?.pagination })),
	t = {
		render: (e, { loaded: { controller: n } }) => o(g, { args: e, controller: n }),
		loaders: [async () => (await a.search(), { controller: a })],
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: PaginationProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservablePagination args={args} controller={controller} />;
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
const T = ['Default'];
export { t as Default, T as __namedExportsOrder, P as default };
