import { h } from 'preact';
import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';
import { RadioList, RadioListProps } from './RadioList';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../RadioList/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Snapify } from '../../../utilities/snapify';

export default {
	title: 'Molecules/RadioList',
	component: RadioList,
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
		native: {
			description: 'use native HTML radio inputs',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideOptionRadios: {
			description: 'enable/disable radio icons',
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
		horizontal: {
			description: 'boolean to set the radio list in a horizontal layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
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

const snapInstance = Snapify.search({ id: 'RadioList', globals: { siteId: 'atkzs2' } });

export const Default = (args: RadioListProps) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<RadioList {...args} />
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
} as RadioListProps;

export const Icons = (args: RadioListProps) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<RadioList {...args} />
		</div>
	);
};
Icons.args = {
	options: [
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
	],
} as RadioListProps;

export const Native = (args: RadioListProps) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<RadioList {...args} />
		</div>
	);
};
Native.args = {
	native: true,
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
} as RadioListProps;

export const PerPage = (args: RadioListProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<RadioList {...args} options={controller.store.pagination.pageSizeOptions} selected={controller.store.pagination.pageSizeOptions[0]} />
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
} as RadioListProps;

export const SortBy = (args: RadioListProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<RadioList {...args} options={controller?.store?.sorting.options} selected={controller?.store?.sorting.current} />
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
} as RadioListProps;
