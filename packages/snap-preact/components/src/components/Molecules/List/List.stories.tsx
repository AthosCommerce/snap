import { h } from 'preact';
import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';
import { List, ListProps } from './List';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from './readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Snapify } from '../../../utilities/snapify';

export default {
	title: 'Molecules/List',
	component: List,
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
		options: {
			description: 'list of options to display',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'option[]',
				},
			},
			control: { type: 'object' },
		},
		titleText: {
			defaultValue: '',
			description: 'optional title to render',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		hideTitleText: {
			description: 'hide title text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideOptionCheckboxes: {
			description: 'enable/disable checkboxes',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideOptionIcons: {
			description: 'enable/disable option icons',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideOptionLabels: {
			description: 'enable/disable option labels',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		requireSelection: {
			description: 'enable/disable requireSelection',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		multiSelect: {
			description: 'enable/disable multiselect',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		horizontal: {
			defaultValue: false,
			description: 'render the list options horizontally',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onSelect: {
			description: 'option onSelect event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: { type: 'none' },
			action: 'onSelect',
		},
		disabled: {
			description: 'boolean to set the select in a disabled state',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		native: {
			description: 'boolean to render unstyled native checkbox elements',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		selected: {
			description: 'Current selected option',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | number',
				},
			},
			control: { type: 'none' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'List', globals: { siteId: 'atkzs2' } });

export const Default = (args: ListProps) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<List {...args} />
		</div>
	);
};
Default.args = {
	options: [
		{
			value: 'one',
		},
		{
			value: 'two',
		},
		{
			value: 'three',
		},
		{
			value: 'four',
		},
	],
} as ListProps;

export const DisabledOption = (args: ListProps) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<List {...args} />
		</div>
	);
};
DisabledOption.args = {
	options: [
		{
			value: 'one',
			disabled: true,
		},
		{
			value: 'two',
		},
		{
			value: 'three',
		},
		{
			value: 'four',
		},
	],
} as ListProps;

const viewOptions = [
	{
		label: '1 wide',
		value: '1 wide',
		icon: 'square',
	},
	{
		label: '2 wide',
		value: '2 wide',
		icon: {
			icon: 'layout-large',
		},
	},
	{
		label: '3 wide',
		value: '3 wide',
		icon: {
			icon: 'layout-grid',
		},
	},
];

export const Icons = (args: ListProps) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<List {...args} />
		</div>
	);
};
Icons.args = {
	requireSelection: true,
	options: viewOptions,
	selected: viewOptions[0],
} as ListProps;

export const PerPage = (args: ListProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<List {...args} options={controller.store.pagination.pageSizeOptions} selected={controller.store.pagination.pageSizeOptions[0]} />
		</div>
	);
};

PerPage.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

PerPage.args = {
	titleText: 'Per Page',
	requireSelection: true,
} as Partial<ListProps>;

export const SortBy = (args: ListProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<List {...args} options={controller?.store?.sorting.options} selected={controller?.store?.sorting.current} />
		</div>
	);
};

SortBy.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

SortBy.args = {
	titleText: 'Sort By',
	requireSelection: true,
} as Partial<ListProps>;
