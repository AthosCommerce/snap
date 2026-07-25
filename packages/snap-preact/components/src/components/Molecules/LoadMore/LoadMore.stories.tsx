import { h } from 'preact';

import { LoadMore, LoadMoreProps } from './LoadMore';
import { componentArgs } from '../../../utilities';
import { iconPaths } from '../../Atoms/Icon';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../LoadMore/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import type { SearchRequestModelFilterTypeEnum } from '@athoscommerce/snapi-types';

export default {
	title: 'Molecules/LoadMore',
	component: LoadMore,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		controller: {
			description: 'Search Controller reference',
			table: {
				type: {
					summary: 'Search controller object',
				},
			},
			control: false,
		},
		pagination: {
			description: 'Pagination store reference',
			table: {
				type: {
					summary: 'pagination store object',
				},
			},
			control: false,
		},
		autoFetch: {
			description: 'Automatically load more results when component comes into viewport',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		intersectionOffset: {
			defaultValue: '0px',
			description: 'Defines the IntersectionObserver rootMargin',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '0px' },
			},
			control: { type: 'text' },
		},
		loading: {
			description: 'Loading state',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		loadMoreText: {
			defaultValue: 'Load More',
			description: 'Load more button text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Load More' },
			},
			control: { type: 'text' },
		},
		color: {
			description: 'Color of the indicator active state',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '#cccccc' },
			},
			control: { type: 'color' },
		},
		backgroundColor: {
			description: 'Background color of the indicator',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '#f8f8f8' },
			},
			control: { type: 'color' },
		},
		progressIndicatorWidth: {
			description: 'Progress indicator width in pixels',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '300px' },
			},
			control: { type: 'text' },
		},
		progressIndicatorSize: {
			description: 'Progress indicator size in pixels',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '5px' },
			},
			control: { type: 'text' },
		},
		hideProgressIndicator: {
			description: 'Hide progress indicator',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideProgressText: {
			description: 'Hide progress text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		loadingIcon: {
			description: 'Loading icon',
			defaultValue: 'spinner',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'spinner' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		loadingLocation: {
			description: 'Location of loading indicator',
			defaultValue: 'button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'button' },
			},
			options: ['button', 'outside'],
			control: {
				type: 'select',
			},
		},
		onClick: {
			description: 'Button click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function(e: Event)',
				},
			},
			control: false,
			action: 'onClick',
		},
		...componentArgs,
	},
};
const snapInstance = Snapify.search({
	id: 'LoadMore',
	globals: {
		siteId: 'atkzs2',
		filters: [
			{
				type: 'value' as SearchRequestModelFilterTypeEnum,
				field: 'color_family',
				// @ts-ignore - value does not exist on SearchRequestModelFilter
				value: 'Beige',
				background: true,
			},
		],
	},
});

export const Default = {
	render: (args: LoadMoreProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <LoadMore {...args} controller={controller} />;
	},

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],
};
