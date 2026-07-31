import { h } from 'preact';

import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from './readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Toolbar, ToolbarProps } from './Toolbar';

export default {
	title: 'Organisms/Toolbar',
	component: Toolbar,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
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
			control: false,
		},
		layout: {
			description: 'array of modules to render in specified layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						'[`searchHeader` | `breadcrumbs` | `filterSummary` | `layoutSelector` | `perPage` | `sortBy` | `pagination` | `paginationInfo` | `_` | `button.sidebar-toggle` | `banner.header` | `banner.banner` | `banner.footer` | `facetsHorizontal`]',
				},
				defaultValue: { summary: "['filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination']" },
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

export const Default = {
	render: (args: ToolbarProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <Toolbar {...args} controller={controller} />;
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
		layout: [['filterSummary', 'paginationInfo', '_', 'sortBy', 'perPage', 'pagination']],
	},
};
