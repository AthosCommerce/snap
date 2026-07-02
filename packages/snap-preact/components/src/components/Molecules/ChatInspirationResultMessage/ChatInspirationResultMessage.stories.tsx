import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatInspirationResultMessage, ChatInspirationResultMessageProps } from './ChatInspirationResultMessage';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatInspirationResultMessage/readme.md';

export default {
	title: 'Molecules/ChatInspirationResultMessage',
	component: ChatInspirationResultMessage,
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
		controller: {
			description: 'reference to a ChatController',
			table: { type: { summary: 'ChatController' } },
			control: { type: 'none' },
		},
		chatItem: {
			description: 'inspirationResult chat message',
			table: { category: 'Templates Legal', type: { summary: 'ChatResponseInspirationResultData' } },
			control: { type: 'none' },
		},
		onProductQuickView: {
			description: 'callback fired after a product thumbnail is clicked',
			table: { category: 'Templates Legal', type: { summary: '() => void' } },
			control: { type: 'none' },
		},
		...componentArgs,
	},
};

const mockController: any = {
	store: { loading: false, blocked: false },
	search: () => undefined,
	track: { product: { click: () => undefined } },
	productQuickView: () => undefined,
};

const mockChatItem: any = {
	id: 'mock-inspiration',
	messageType: 'inspirationResult',
	inspirationSections: [
		{
			filterSummary: [
				{
					field: 'product_type',
					value: 'Apparel/Outerwear',
					label: 'Product Type: Apparel/Outerwear',
					filterLabel: 'Product Type',
					filterValue: 'Apparel/Outerwear',
				},
			],
			clusterTitle: 'Cozy Layers',
			clusterDescription: 'Warm, easy-to-style pieces for chilly mornings.',
			searchQueries: ['waterproof jacket', 'wool beanie', 'thermal base layer'],
			products: [],
		},
		{
			filterSummary: [
				{
					field: 'product_type',
					value: 'Apparel/Footwear/Hiking',
					label: 'Product Type: Apparel/Footwear/Hiking',
					filterLabel: 'Product Type',
					filterValue: 'Apparel/Footwear/Hiking',
				},
			],
			clusterTitle: 'On-the-Trail',
			clusterDescription: 'Practical picks for day-hike comfort.',
			searchQueries: ['hiking boots', 'lightweight backpack'],
			products: [],
		},
	],
};

export const Default = (args: ChatInspirationResultMessageProps) => <ChatInspirationResultMessage {...args} controller={mockController} />;
Default.args = {
	chatItem: mockChatItem,
};
