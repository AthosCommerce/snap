import { h } from 'preact';

import { ChatResult, ChatResultProps } from './ChatResult';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatResult/readme.md';

export default {
	title: 'Molecules/ChatResult',
	component: ChatResult,
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
		result: {
			description: 'product to render',
			table: { category: 'Templates Legal', type: { summary: 'Product' } },
			control: false,
		},
		scrollToBottom: {
			description: 'callback fired when the image finishes loading',
			table: { category: 'Templates Legal', type: { summary: '() => void' } },
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
	track: { product: { click: () => undefined, addToCart: () => undefined } },
	productSimilar: () => undefined,
	compareProduct: () => undefined,
	productQuery: () => undefined,
	addToCart: () => undefined,
	productQuickView: () => undefined,
};

const mockResult: any = {
	id: 'mock-result-1',
	display: {
		mappings: {
			core: {
				name: 'Alpine Wool Beanie',
				imageUrl: 'https://picsum.photos/seed/alpine-beanie/480/480',
				price: 29.99,
			},
		},
	},
};

export const Default = {
	render: (args: ChatResultProps) => (
		<div style={{ width: '240px' }}>
			<ChatResult {...args} controller={mockController} result={mockResult} scrollToBottom={() => undefined} />
		</div>
	),
};
