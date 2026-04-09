import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Search/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { SearchCollapsible, SearchCollapsibleProps } from './SearchCollapsible';

export default {
	title: 'Templates/SearchCollapsible',
	component: SearchCollapsible,
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
			<div
				style={{
					maxWidth: '1200px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Search Controller Reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: { type: 'none' },
		},
		toggleSidebarButtonText: {
			description: 'Text to render in the toggle Sidebar button.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		toggleSidebarStartClosed: {
			defaultValue: false,
			description: 'determines if the sidebar toggle should start closed',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideToggleSidebarButton: {
			defaultValue: false,
			description: 'hide the toggle Sidebar button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		mobileDisplayAt: {
			defaultValue: '',
			description: 'Media query for when to render the mobileSidebar',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		hideSidebar: {
			defaultValue: false,
			description: 'prevents the sidebar component from rendering',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideTopToolbar: {
			defaultValue: false,
			description: 'prevents the top Toolbar component from rendering',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideMiddleToolbar: {
			defaultValue: false,
			description: 'prevents the middle Toolbar component from rendering',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideBottomToolbar: {
			defaultValue: false,
			description: 'prevents the bottom Toolbar component from rendering',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		layoutOptions: {
			description: 'Options for layout selection',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'ListOption[]',
				},
			},
			control: { type: 'object' },
		},
		resultComponent: {
			description: 'Slot for custom result component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({
	id: 'Search',
	globals: {
		siteId: 'atkzs2',
	},
});

const noresultsInstance = Snapify.search({
	id: 'Search-noResults',
	globals: {
		siteId: 'atkzs2',
		search: {
			query: {
				string: 'eijworhufsbgd',
			},
		},
	},
});

export const Default = (args: SearchCollapsibleProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <SearchCollapsible {...args} controller={controller} />;
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

export const NoResults = (args: SearchCollapsibleProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <SearchCollapsible {...args} controller={controller} />;
};

NoResults.loaders = [
	async () => {
		await noresultsInstance.search();
		return {
			controller: noresultsInstance,
		};
	},
];
