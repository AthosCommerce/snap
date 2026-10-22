import { h } from 'preact';

import { ChatInspirationResultMessage, ChatInspirationResultMessageProps } from './ChatInspirationResultMessage';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatInspirationResultMessage/readme.md';

export default {
	title: 'Molecules/ChatInspirationResultMessage',
	component: ChatInspirationResultMessage,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		controller: {
			description: 'reference to a ChatController',
			table: { type: { summary: 'ChatController' } },
			control: false,
		},
		chatItem: {
			description: 'inspirationResult chat message',
			table: { category: 'Templates Legal', type: { summary: 'ChatResponseInspirationResultData' } },
			control: false,
		},
		onProductQuickView: {
			description: 'callback fired after a product thumbnail is clicked',
			table: { category: 'Templates Legal', type: { summary: '() => void' } },
			control: false,
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

export const Default = {
	render: (args: ChatInspirationResultMessageProps) => <ChatInspirationResultMessage {...args} controller={mockController} />,
	args: {
		chatItem: mockChatItem,
	},
};
