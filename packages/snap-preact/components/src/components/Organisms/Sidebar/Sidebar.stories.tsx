import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Sidebar, SidebarProps } from './Sidebar';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from './readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { iconPaths } from '../../..';

export default {
	title: 'Organisms/Sidebar',
	component: Sidebar,
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
			<div style={{ maxWidth: '300px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Search controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Search controller object',
				},
			},
			control: { type: 'none' },
		},
		layout: {
			description: 'specifies the layout of the sidebar',
			table: {
				category: 'Templates Legal',
				type: {
					summary: "['filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_']",
				},
				defaultValue: { summary: "[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]" },
			},
			control: 'none',
		},
		titleText: {
			description: 'Text to render in the sidebar title',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Filters' },
			},
			control: { type: 'text' },
		},
		hideTitleText: {
			defaultValue: false,
			description: 'hides the sidebar title component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		sticky: {
			description: 'specifies if the sidebar should be sticky',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		stickyOffset: {
			description: 'specifies the offset of the sidebar when sticky is true',
			table: {
				category: 'Templates Legal',
				type: { summary: 'number' },
			},
			control: { type: 'number' },
		},
		hideHeader: {
			description: 'hides the sidebar header',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		hideClearButtonText: {
			description: 'hides the clear button text',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		hideApplyButtonText: {
			description: 'hides the apply button text',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		hideCloseButtonText: {
			description: 'hides the close button text',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		hideCloseButton: {
			description: 'hides the close sidebar button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		closeButtonIcon: {
			description: 'Icon to render in the close sidebar button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		closeButtonText: {
			description: 'Text to render in the close sidebar button',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		hideFooter: {
			description: 'hides the sidebar footer',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		hideApplyButton: {
			description: 'hides the apply facets button component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		applyButtonText: {
			description: 'Text to render in the apply facets button',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		applyButtonIcon: {
			description: 'Icon to render in the apply facets button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		hideClearButton: {
			description: 'hides the clear all filters button component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		clearButtonText: {
			description: 'Text to render in the clear all facets button',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		clearButtonIcon: {
			description: 'Icon to render in the clear filters button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } });

export const Default = (args: SidebarProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <Sidebar {...args} controller={controller} />;
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
