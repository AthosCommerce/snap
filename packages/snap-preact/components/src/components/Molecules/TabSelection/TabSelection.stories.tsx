import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { TabSelection, TabSelectionProps } from './TabSelection';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { TabManagerStore } from '../../../../../src/Templates/Stores/TabManagerStore';
import Readme from '../TabSelection/readme.md';

export default {
	title: 'Molecules/TabSelection',
	component: TabSelection,
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
	argTypes: {
		tabManager: {
			description: 'Tab manager store reference',
			table: {
				type: {
					summary: 'tab manager store object',
				},
			},
			control: { type: 'none' },
		},
		titleText: {
			description: 'Heading rendered above the tabs',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		showResultCount: {
			description: 'Display the result count alongside each tab label',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		enableEmptyTabs: {
			description: 'Keep tabs with no results selectable',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onTabClick: {
			description: 'Tab click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function(e: Event, tab: Tab)',
				},
			},
			control: { type: 'none' },
			action: 'onTabClick',
		},
		...componentArgs,
	},
};

const tabConfigs = [
	{ id: 'TabSelectionProducts', siteId: 'atkzs2', param: 'products', label: 'Products' },
	{ id: 'TabSelectionSale', siteId: 'atkzs2', param: 'sale', label: 'Sale' },
];

const controllers = tabConfigs.map((tab) =>
	Snapify.search({
		id: tab.id,
		globals: {
			siteId: tab.siteId,
		},
	})
);

export const Default = (args: TabSelectionProps, { loaded: { tabManager } }: { loaded: { tabManager: TabManagerStore } }) => {
	return <TabSelection {...args} tabManager={tabManager} />;
};

Default.loaders = [
	async () => {
		await Promise.all(controllers.map((controller) => controller.search()));

		return {
			tabManager: new TabManagerStore(tabConfigs, controllers),
		};
	},
];
