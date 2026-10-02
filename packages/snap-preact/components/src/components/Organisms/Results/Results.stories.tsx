import { h } from 'preact';

import { Results, ResultsProps } from './Results';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { ResultsLayout } from '../../../types';

import Readme from './readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Organisms/Results',
	component: Results,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		results: {
			description: 'Results store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Results store object',
				},
			},
			control: false,
		},
		layout: {
			description: 'Results layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: [ResultsLayout.grid, ResultsLayout.list],
			control: {
				type: 'select',
			},
		},
		columns: {
			defaultValue: 4,
			description: 'Number of columns in results grid',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 4 },
			},
			control: { type: 'number' },
		},
		rows: {
			description: 'Number of rows in results grid - adding this will put a hard limit on the results',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		gapSize: {
			defaultValue: '20px',
			description: 'Gap size between rows and columns',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '20px' },
			},
			control: { type: 'text' },
		},
		breakpoints: {
			defaultValue: { summary: 'Breakpoint object' },
			description: 'Breakpoints options object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: false,
		},
		resultComponent: {
			description: 'Slot for custom result component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: false,
		},
		excludeBanners: {
			defaultValue: false,
			description: 'Exclude inline merchandising banners from the results list',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Results', globals: { siteId: 'atkzs2' } });

export const Grid = {
	render: (args: ResultsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.layout == 'list' ? '650px' : '800px' }}>
				<Results {...args} controller={controller} results={controller?.store?.results} />
			</div>
		);
	},

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		layout: 'grid',
	},
};

export const List = {
	render: (args: ResultsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.layout == 'list' ? '650px' : '800px' }}>
				<Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.list} />
			</div>
		);
	},

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		layout: 'list',
	},
};
