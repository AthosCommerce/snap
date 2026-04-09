import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { FacetsHorizontal, FacetsHorizontalProps } from './FacetsHorizontal';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { iconPaths } from '../../Atoms/Icon';
import Readme from '../FacetsHorizontal/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Organisms/FacetsHorizontal',
	component: FacetsHorizontal,
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
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '1200px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		facets: {
			description: 'Facets store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Facets store object',
				},
			},
			control: { type: 'none' },
		},
		limit: {
			description: 'Maximum number of facets to display',
			defaultValue: 6,
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 6 },
			},
			control: { type: 'number' },
		},
		alwaysShowFiltersButton: {
			defaultValue: false,
			description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideFiltersButton: {
			defaultValue: false,
			description: 'Hide the filters button',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onFacetOptionClick: {
			description: 'Callback function for when a facet option is clicked',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: { summary: 'function' },
			},
			action: 'onFacetOptionClick',
		},
		showSelectedCount: {
			description: 'shows the number of selected options within the facet headers',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideSelectedCountParenthesis: {
			description: 'specifies if the parenthesis should render around the selected count',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		showClearAllText: {
			description: 'specifies if the clear all text should render',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		clearAllText: {
			description: 'text to show in the clear all link',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Clear All' },
			},
			control: { type: 'text' },
		},
		clearAllIcon: {
			description: 'Icon to show in the clear all link',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		iconExpand: {
			defaultValue: 'angle-down',
			description: 'Icon for when facet is collapsed',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'angle-down' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		iconCollapse: {
			defaultValue: 'angle-up',
			description: 'Icon for when facet is expanded',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'angle-up' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		controller: {
			description: 'Controller reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Controller object',
				},
			},
			control: { type: 'none' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } });

export const Default = (args: FacetsHorizontalProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <FacetsHorizontal {...args} controller={controller} />;
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
