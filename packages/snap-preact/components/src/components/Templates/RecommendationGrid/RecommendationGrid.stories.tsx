import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { RecommendationGrid, RecommendationGridProps } from './RecommendationGrid';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { RecommendationController } from '@athoscommerce/snap-controller';

export default {
	title: 'Templates/RecommendationGrid',
	component: RecommendationGrid,
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
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			type: { required: true },
			control: { type: 'none' },
		},
		title: {
			description: 'Recommendation title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		results: {
			description: 'Results store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Results store object',
				},
			},
			control: { type: 'none' },
		},
		resultComponent: {
			description: 'Slot for custom result component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		columns: {
			description: 'Number of columns in results grid',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		rows: {
			description: 'Number of rows in results grid',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		trim: {
			description: 'trim off extra results based on columns and rows?',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
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
		lazyRender: {
			description: 'Lazy render settings object',
			defaultValue: {
				enabled: true,
				offset: '10%',
			},
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
				defaultValue: { summary: 'Lazy render settings object' },
			},
			control: { type: 'object' },
		},
		breakpoints: {
			defaultValue: { summary: 'Breakpoint object' },
			description: 'Breakpoints options object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: { type: 'none' },
		},

		...componentArgs,
	},
};

const snapInstance = Snapify.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } });

export const List = (args: RecommendationGridProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
	return (
		<div style={{ maxWidth: '1200px' }}>
			<RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
		</div>
	);
};

List.args = {
	columns: 10,
	rows: 1,
};

List.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

export const Grid = (args: RecommendationGridProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
	return (
		<div style={{ maxWidth: '1200px' }}>
			<RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
		</div>
	);
};

Grid.args = {
	columns: 4,
};

Grid.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
