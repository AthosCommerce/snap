import { h } from 'preact';

import { ChatProductComparisonMessage } from './ChatProductComparisonMessage';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatProductComparisonMessage/readme.md';

export default {
	title: 'Molecules/ChatProductComparisonMessage',
	component: ChatProductComparisonMessage,
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
			description: 'productComparison chat message',
			table: { category: 'Templates Legal', type: { summary: 'ChatResponseProductComparisonData' } },
			control: false,
		},
		...componentArgs,
	},
};

const mockChatItem: any = {
	id: 'mock-comparison',
	messageType: 'productComparison',
	comparisonData: {
		summary: 'Both products are top-rated, but they differ in material and price.',
		features: [
			{ featureName: 'Material', values: { p1: 'Wool', p2: 'Cotton' } },
			{ featureName: 'Weight', values: { p1: '320g', p2: '210g' } },
			{ featureName: 'Price', values: { p1: '$50', p2: '$30' } },
		],
	},
	searchResults: [
		{ id: 'p1', display: { mappings: { core: { name: 'Alpine Wool Beanie', imageUrl: 'https://picsum.photos/80/80' } } } },
		{ id: 'p2', display: { mappings: { core: { name: 'Trailhead Cotton Cap', imageUrl: 'https://picsum.photos/80/80' } } } },
	],
};

export const Default = {
	args: {
		chatItem: mockChatItem,
	},
};
