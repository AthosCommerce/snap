import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { SearchHeader, SearchHeaderProps } from './SearchHeader';

export default {
	title: 'Atoms/SearchHeader',
	component: SearchHeader,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
			actions: {
				disabled: true,
			},
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		controller: {
			description: 'Search Controller reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Search controller object',
				},
			},
			control: { type: 'none' },
		},
		query: {
			description: 'Search Query Store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Search Query Store object',
				},
			},
			control: { type: 'none' },
		},
		pagination: {
			description: 'Search Pagination Store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Search Pagination Store object',
				},
			},
			control: { type: 'none' },
		},
		merchandising: {
			description: 'Search Merchandising Store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Search Merchandising Store object',
				},
			},
			control: { type: 'none' },
		},
		titleText: {
			description: 'Search Title Text',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: {
					summary: 'Search results',
				},
			},
			control: { type: 'text' },
		},
		subtitleText: {
			description: 'Search Subtitle Text',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		correctedQueryText: {
			description: 'Original query redirect text',
			table: {
				type: {
					summary: 'string',
				},
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
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '<span>No results found.</span>' },
			},
			control: { type: 'text' },
		},
		didYouMeanText: {
			description: '"Did you mean" text',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: 'Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?' },
			},
			control: { type: 'text' },
		},
		expandedSearchText: {
			description: 'Expanded search text',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: {
					summary:
						'We couldn\'t find an exact match for "<span className="ss__search-header__results-query">${search?.query?.string}</span>", but here\'s something similar:',
				},
			},
			control: { type: 'text' },
		},
		hideTitleText: {
			description: 'Hide title title',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideSubtitleText: {
			description: 'Hide subtitle',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideCorrectedQueryText: {
			description: 'Hide CorrectedQuery Text',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideExpandedSearchText: {
			description: 'Hide Expanded Search Text',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideNoResultsText: {
			description: 'Hide No Results Text',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideDidYouMeanText: {
			description: 'Hide Did You Mean Text',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'SearchHeader', globals: { siteId: 'atkzs2', search: { query: { string: 'dress' } } } });

export const Default = (args: SearchHeaderProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <SearchHeader {...args} controller={controller} />;
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

const NoResultsSnapInstance = Snapify.search({
	id: 'SearchHeader-noResults',
	globals: { siteId: 'atkzs2', search: { query: { string: 'pokemon' } } },
});

export const NoResults = (args: SearchHeaderProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <SearchHeader {...args} controller={controller} />;
};

NoResults.loaders = [
	async () => {
		await NoResultsSnapInstance.search();
		return {
			controller: NoResultsSnapInstance,
		};
	},
];

const correctedSnapInstance = Snapify.search({
	id: 'SearchHeader-correctedResults',
	globals: { siteId: 'atkzs2', search: { query: { string: 'drezz' } } },
});

export const CorrectedResults = (args: SearchHeaderProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <SearchHeader {...args} controller={controller} />;
};

CorrectedResults.loaders = [
	async () => {
		await correctedSnapInstance.search();
		return {
			controller: correctedSnapInstance,
		};
	},
];

const dymSnapInstance = Snapify.search({
	id: 'SearchHeader-dymResults',
	globals: { siteId: 'atkzs2', search: { query: { string: 'dnfarwts' } } },
});

export const DidYouMeanResults = (args: SearchHeaderProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <SearchHeader {...args} controller={controller} />;
};

DidYouMeanResults.loaders = [
	async () => {
		dymSnapInstance.on('afterSearch', ({ response }: any) => {
			response.search.search.query = 'redd dress';
			response.search.search.didYouMean = 'red dress';
		});
		await dymSnapInstance.search();
		return {
			controller: dymSnapInstance,
		};
	},
];
