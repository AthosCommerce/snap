import { h } from 'preact';

import { ChatResultsDisplay, ChatResultsDisplayProps } from './ChatResultsDisplay';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatResultsDisplay/readme.md';

export default {
	title: 'Molecules/ChatResultsDisplay',
	component: ChatResultsDisplay,
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
			description: 'chat message whose results should be rendered',
			table: { category: 'Templates Legal', type: { summary: 'object' } },
			control: false,
		},
		...componentArgs,
	},
};

const mockController: any = {
	store: {
		currentChat: {
			comparisons: { items: [] },
		},
		features: {
			similarProducts: { enabled: true },
		},
	},
	track: { product: { click: () => undefined, addToCart: () => undefined, impression: () => undefined } },
	productSimilar: () => undefined,
	compareProduct: () => undefined,
	productQuery: () => undefined,
	addToCart: () => undefined,
	productQuickView: () => undefined,
};

const mockResult = (id: string, name: string): any => ({
	id,
	display: {
		mappings: {
			core: {
				name,
				imageUrl: `https://picsum.photos/seed/${encodeURIComponent(name)}/240/240`,
				price: Math.round(Math.random() * 80 + 20),
			},
		},
	},
});

const mockChatItem = {
	messageType: 'productSearch',
	results: [
		mockResult('p1', 'Alpine Wool Beanie'),
		mockResult('p2', 'Trailhead Cap'),
		mockResult('p3', 'Summit Toque'),
		mockResult('p4', 'Glacier Liner'),
		mockResult('p5', 'Ridgeway Hat'),
	],
};

export const Default = {
	render: (args: ChatResultsDisplayProps) => (
		<ChatResultsDisplay {...args} chatItem={mockChatItem} controller={mockController} scrollToBottom={() => undefined} />
	),
};
