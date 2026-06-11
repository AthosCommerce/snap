import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatResultsDisplay, ChatResultsDisplayProps } from './ChatResultsDisplay';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatResultsDisplay/readme.md';

export default {
	title: 'Molecules/ChatResultsDisplay',
	component: ChatResultsDisplay,
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
			description: 'chat message whose results should be rendered',
			table: { category: 'Templates Legal', type: { summary: 'object' } },
			control: { type: 'none' },
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
	track: { product: { click: () => undefined, addToCart: () => undefined } },
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
				imageUrl: `https://via.placeholder.com/240x240?text=${encodeURIComponent(name)}`,
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

export const Default = (args: ChatResultsDisplayProps) => (
	<ChatResultsDisplay {...args} chatItem={mockChatItem} controller={mockController} scrollToBottom={() => undefined} />
);
Default.args = {};
