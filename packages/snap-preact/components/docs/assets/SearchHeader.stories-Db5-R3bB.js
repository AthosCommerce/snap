import { j as t } from './iframe-U9T2Y9ZS.js';
import { S as l } from './snapify-Df13VkEj.js';
import { S as n } from './SearchHeader-DMztF-MS.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
import './useLang-Dx66cFD0.js';
const y =
		'# Search Header\n\nWill render a series of heading elements to build a search header. Depending on current store data, it may show verbiage for the search title, corrected and original search query, no results title, or even a landing page title from the merchandising store.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<SearchHeader controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass each of the required stores individually as props. The `query` prop specifies a reference to the SearchQueryStore, the `pagination` prop specifies a reference to the SearchPaginationStore, and the `merchandisingStore` prop specifies a reference to the SearchMerchandisingStore. \n\n```tsx\n<SearchHeader query={SearchQueryStore} pagination={SearchPaginationStore} merchandising={SearchMerchandisingStore} />\n```\n\n### titleText\nThe `titleText` prop specifies the text to render in the title. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```tsx\n<SearchHeader controller={controller} titleText={\'Search Results\'}/>\n```\n\n### subtitleText\nThe `subtitleText` prop specifies an optional subtitle to render under the the rest of the headings. This can be either a string, or a function that returns a string, functions are passed the controller.\n\n```tsx\n<SearchHeader controller={controller} subtitleText={\'Narrow your search!\'} />\n```\n\n### correctedQueryText\nThe `correctedQueryText` prop specifies the text to show when there is an originalQuery. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\nconst getCorrected = (controller) => {\n	const { pagination, search } = controller.store;\n	return `<div class="ss__search-header__corrected">No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.</div>`\n}\n<SearchHeader controller={controller} correctedQueryText={getCorrected} />\n```\n\n### noResultsText\nThe `noResultsText` prop specifies the text to show when the totalResults count is 0. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\n<SearchHeader controller={controller} noResultsText={\'No Results Found, Please try another term\'} />\n```\n\n\n### didYouMeanText\nThe `didYouMeanText` prop specifies the text to show when there is a "didYouMean" query. This can be either a string, or a function that returns a string, functions are passed the pagination and query store for reference to build out custom text.\n\n```tsx\nconst getDym = (controller) => {\n	const { search } = controller.store;\n	return `<div class="ss__search-header__dym">Sorry, but did you mean "<em><a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a></em>"</div>`\n}\n<SearchHeader controller={controller} didYouMeanText={getDym} />\n```\n\n### expandedSearchText\nThe `expandedSearchText` prop specifies the text to show when the search matchType equals \'expanded\'.\n```tsx\n<SearchHeader controller={controller} expandedSearchText={"We couldn\'t find an exact match for that, but heres something similar:"} />\n```\n\n### hideTitleText\nThe `hideTitleText` prop hides the title text.\n\n```tsx\n<SearchHeader controller={controller} hideTitleText={true} />\n```\n\n### hideSubtitleText\nThe `hideSubtitleText` prop hides the subtitle text.\n\n```tsx\n<SearchHeader controller={controller} hideSubtitleText={true} />\n```\n\n### hideCorrectedQueryText\nThe `hideCorrectedQueryText` prop hides the corrected query text.\n\n```tsx\n<SearchHeader controller={controller} hideCorrectedQueryText={true} />\n```\n\n### hideNoResultsText\nThe `hideNoResultsText` prop hides the no results text.\n\n```tsx\n<SearchHeader controller={controller} hideNoResultsText={true} />\n```\n\n### hideDidYouMeanText\nThe `hideDidYouMeanText` prop hides did you mean text.\n\n```tsx\n<SearchHeader controller={controller} hideDidYouMeanText={true} />\n```\n\n### hideExpandedSearchText\nThe `hideExpandedSearchText` prop hides the expanded search text.\n\n```tsx\n<SearchHeader controller={controller} hideExpandedSearchText={true} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the SearchHeader component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `titleText` | The main search heading text | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `correctedQueryText` | Text shown when query was auto-corrected | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `noResultsText` | Text shown when no results are found | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `didYouMeanText` | "Did you mean" suggestion text | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `expandedSearchText` | Text shown when search was expanded | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n| `subtitleText` | Optional subtitle text | `pagination` (SearchPaginationStore), `search` (SearchQueryStore) |\n\n### Example\n\n```tsx\n<SearchHeader\n	controller={controller}\n	lang={{\n		titleText: {\n			value: (data) => `Results for "${data.search?.query?.string}"`,\n		},\n		noResultsText: {\n			value: (data) => `No results found for "${data.search?.query?.string}"`,\n		},\n	}}\n/>\n```\n',
	w = {
		title: 'Atoms/SearchHeader',
		component: n,
		parameters: { docs: { description: { component: y } }, actions: { disabled: !0 } },
		decorators: [(e) => t(e, {})],
		argTypes: {
			controller: {
				description: 'Search Controller reference',
				type: { required: !1 },
				table: { type: { summary: 'Search controller object' } },
				control: !1,
			},
			query: {
				description: 'Search Query Store reference',
				type: { required: !1 },
				table: { type: { summary: 'Search Query Store object' } },
				control: !1,
			},
			pagination: {
				description: 'Search Pagination Store reference',
				type: { required: !1 },
				table: { type: { summary: 'Search Pagination Store object' } },
				control: !1,
			},
			merchandising: {
				description: 'Search Merchandising Store reference',
				type: { required: !1 },
				table: { type: { summary: 'Search Merchandising Store object' } },
				control: !1,
			},
			titleText: {
				description: 'Search Title Text',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'Search results' } },
				control: { type: 'text' },
			},
			subtitleText: {
				description: 'Search Subtitle Text',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			correctedQueryText: {
				description: 'Original query redirect text',
				table: {
					type: { summary: 'string' },
					category: 'Templates Legal',
					defaultValue: {
						summary:
							'No results found for "<em>${search?.originalQuery?.string}</em>", showing results for "<em>${search?.query?.string}</em>" instead.',
					},
				},
				control: { type: 'text' },
			},
			noResultsText: {
				description: 'no results found text',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '<span>No results found.</span>' } },
				control: { type: 'text' },
			},
			didYouMeanText: {
				description: '"Did you mean" text',
				table: {
					type: { summary: 'string' },
					category: 'Templates Legal',
					defaultValue: { summary: 'Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?' },
				},
				control: { type: 'text' },
			},
			expandedSearchText: {
				description: 'Expanded search text',
				table: {
					type: { summary: 'string' },
					category: 'Templates Legal',
					defaultValue: {
						summary: `We couldn't find an exact match for "<span className="ss__search-header__results-query">\${search?.query?.string}</span>", but here's something similar:`,
					},
				},
				control: { type: 'text' },
			},
			hideTitleText: {
				description: 'Hide title title',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideSubtitleText: {
				description: 'Hide subtitle',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideCorrectedQueryText: {
				description: 'Hide CorrectedQuery Text',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideExpandedSearchText: {
				description: 'Hide Expanded Search Text',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideNoResultsText: {
				description: 'Hide No Results Text',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideDidYouMeanText: {
				description: 'Hide Did You Mean Text',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...p,
		},
	},
	d = l.search({ id: 'SearchHeader', globals: { siteId: 'atkzs2', search: { query: { string: 'dress' } } } }),
	a = { render: (e, { loaded: { controller: r } }) => t(n, { ...e, controller: r }), loaders: [async () => (await d.search(), { controller: d })] },
	h = l.search({ id: 'SearchHeader-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } } }),
	o = { render: (e, { loaded: { controller: r } }) => t(n, { ...e, controller: r }), loaders: [async () => (await h.search(), { controller: h })] },
	u = l.search({ id: 'SearchHeader-correctedResults', globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } } }),
	s = { render: (e, { loaded: { controller: r } }) => t(n, { ...e, controller: r }), loaders: [async () => (await u.search(), { controller: u })] },
	i = l.search({ id: 'SearchHeader-dymResults', globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } } }),
	c = {
		render: (e, { loaded: { controller: r } }) => t(n, { ...e, controller: r }),
		loaders: [
			async () => (
				i.on('afterSearch', ({ response: e }) => {
					(e.search.search.query = 'redd dress'), (e.search.search.didYouMean = 'red dress');
				}),
				await i.search(),
				{ controller: i }
			),
		],
	};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SearchHeaderProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <SearchHeader {...args} controller={controller} />;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...a.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SearchHeaderProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <SearchHeader {...args} controller={controller} />;
  },
  loaders: [async () => {
    await NoResultsSnapInstance.search();
    return {
      controller: NoResultsSnapInstance
    };
  }]
}`,
			...o.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SearchHeaderProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <SearchHeader {...args} controller={controller} />;
  },
  loaders: [async () => {
    await correctedSnapInstance.search();
    return {
      controller: correctedSnapInstance
    };
  }]
}`,
			...s.parameters?.docs?.source,
		},
	},
};
c.parameters = {
	...c.parameters,
	docs: {
		...c.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SearchHeaderProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <SearchHeader {...args} controller={controller} />;
  },
  loaders: [async () => {
    dymSnapInstance.on('afterSearch', ({
      response
    }: any) => {
      response.search.search.query = 'redd dress';
      response.search.search.didYouMean = 'red dress';
    });
    await dymSnapInstance.search();
    return {
      controller: dymSnapInstance
    };
  }]
}`,
			...c.parameters?.docs?.source,
		},
	},
};
const q = ['Default', 'NoResults', 'CorrectedResults', 'DidYouMeanResults'];
export { s as CorrectedResults, a as Default, c as DidYouMeanResults, o as NoResults, q as __namedExportsOrder, w as default };
