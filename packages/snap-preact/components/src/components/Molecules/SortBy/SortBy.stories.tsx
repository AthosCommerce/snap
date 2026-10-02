import { h } from 'preact';

import { SortBy, SortByProps } from './SortBy';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../SortBy/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
export default {
	title: 'Molecules/SortBy',
	component: SortBy,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		sorting: {
			description: 'reference to the SearchSortingStore',
			type: { required: true },
			table: {
				type: {
					summary: 'reference to the SearchSortingStore',
				},
			},
			control: false,
		},
		controller: {
			description: 'reference to the Search Controller',
			table: {
				type: {
					summary: 'reference to the Search Controller',
				},
			},
			control: false,
		},
		label: {
			description: 'Header label text to render.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		hideLabel: {
			description: 'hide header label',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		type: {
			description: 'type of Select to render.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '"dropdown" | "list" | "radio"',
				},
				defaultValue: { summary: 'dropdown' },
			},
			options: ['dropdown', 'list', 'radio'],
			control: {
				type: 'select',
			},
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'SortBy', globals: { siteId: 'atkzs2' } });

export const Default = {
	render: (args: SortByProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.type == 'list' || args?.type == 'radio' ? '500px' : '300px' }}>
				<SortBy {...args} sorting={controller?.store?.sorting} />
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
		label: 'Sort By',
	},
};

export const List = {
	render: (args: SortByProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.type == 'list' || args?.type == 'radio' ? '500px' : '300px' }}>
				<SortBy {...args} sorting={controller?.store?.sorting} />
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
		label: '',
		type: 'list',
	},
};

export const Radio = {
	render: (args: SortByProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.type == 'list' || args?.type == 'radio' ? '500px' : '300px' }}>
				<SortBy {...args} sorting={controller?.store?.sorting} />
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
		label: 'Sort By',
		type: 'radio',
	},
};
