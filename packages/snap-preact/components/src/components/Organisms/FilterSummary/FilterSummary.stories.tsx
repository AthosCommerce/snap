import { h } from 'preact';

import { iconPaths } from '../../Atoms/Icon';
import { FilterSummary, FilterSummaryProps } from './FilterSummary';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../FilterSummary/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import type { SearchRequestModelFilterValue } from '@athoscommerce/snapi-types';

export default {
	title: 'Organisms/FilterSummary',
	component: FilterSummary,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '300px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller object',
				},
			},
			control: false,
		},
		filters: {
			description: 'Filters object',
			type: { required: false },
			table: {
				type: {
					summary: 'object',
				},
			},
			control: false,
		},
		title: {
			defaultValue: 'Current Filters',
			description: 'Filters object',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Current Filters' },
			},
			control: { type: 'text' },
		},
		hideTitle: {
			description: 'Hide title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		hideFacetLabel: {
			description: 'Hide filter facet label',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		separator: {
			defaultValue: ':',
			description: 'Filter delimiter',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		hideClearAll: {
			description: 'Hide filter clear all button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		clearAllLabel: {
			defaultValue: 'Clear All',
			description: 'Text to show on clear all filters',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Clear All' },
			},
			control: 'text',
		},
		clearAllIcon: {
			defaultValue: 'close-thin',
			description: 'Icon name',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'close-thin' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		filterIcon: {
			defaultValue: 'close-thin',
			description: 'Icon name',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'close-thin' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		onClick: {
			description: 'Filter click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onClick',
		},
		type: {
			defaultValue: 'inline',
			description: 'display type',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'inline' },
			},
			options: ['inline', 'list'],
			control: {
				type: 'select',
			},
		},
		onClearAllClick: {
			description: 'Filter clear click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onClearAllClick',
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({
	id: 'FilterSummary',
	globals: {
		siteId: 'atkzs2',
		filters: [
			{
				type: 'value',
				field: 'color',
				value: 'Blue',
			} as SearchRequestModelFilterValue,
			{
				type: 'value',
				field: 'size',
				value: 'Small',
			} as SearchRequestModelFilterValue,
		],
	},
});

export const Regular = {
	render: (args: FilterSummaryProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<FilterSummary {...args} controller={controller} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],
};

export const noFacetLabel = {
	render: (args: FilterSummaryProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<FilterSummary {...args} controller={controller} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		hideFacetLabel: true,
	},
};

export const customTitle = {
	render: (args: FilterSummaryProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<FilterSummary {...args} controller={controller} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		title: 'Selected Filters',
	},
};
