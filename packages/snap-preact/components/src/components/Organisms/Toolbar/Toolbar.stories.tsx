import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from './readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Toolbar, ToolbarProps } from './Toolbar';

export default {
	title: 'Organisms/Toolbar',
	component: Toolbar,
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
			description: 'Controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: { type: 'none' },
		},
		layout: {
			description: 'array of modules to render in specified layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						'[`searchHeader` | `breadcrumbs` | `filterSummary` | `mobileSidebar` | `layoutSelector` | `perPage` | `sortBy` | `pagination` | `paginationInfo` | `_` | `button.sidebar-toggle` | `banner.header` | `banner.banner` | `banner.footer` | `facetsHorizontal`]',
				},
				defaultValue: { summary: "['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']" },
			},
			control: 'none',
		},
		toggleSideBarButton: {
			description: 'specifies an element to be used as the toggleSideBarButton',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({
	id: 'Toolbar',
	globals: {
		siteId: 'atkzs2',
	},
});

export const Default = (args: ToolbarProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return <Toolbar {...args} controller={controller} />;
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
Default.args = {
	layout: [['mobileSidebar', 'paginationInfo', '_', 'sortBy', 'perPage', 'pagination']],
};
