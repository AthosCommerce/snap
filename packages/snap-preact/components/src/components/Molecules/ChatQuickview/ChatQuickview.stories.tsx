import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatQuickview, ChatQuickviewProps } from './ChatQuickview';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatQuickview/readme.md';

export default {
	title: 'Molecules/ChatQuickview',
	component: ChatQuickview,
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
			description: 'productQuery chat message',
			table: { category: 'Templates Legal', type: { summary: 'ChatQuickviewItem' } },
			control: { type: 'none' },
		},
		layout: {
			description: 'QuickviewLayout module grid rendered for the product (defaults to the chat header-banner layout)',
			table: { category: 'Templates Legal', type: { summary: 'QuickviewLayout layout' } },
			control: { type: 'object' },
		},
		primaryColor: {
			description: 'accent color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		primaryColorText: {
			description: 'accent text color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		...componentArgs,
	},
};

const mockController: any = {
	type: 'chat',
	store: {
		currentChat: { chat: [], popProductQueryMessage: () => undefined },
		features: { similarProducts: { enabled: true } },
	},
	log: { warn: () => undefined, error: () => undefined },
	track: { product: { click: () => undefined, addToCart: () => undefined, clickThrough: () => undefined, impression: () => undefined } },
	addToCart: () => undefined,
	productSimilar: () => undefined,
	productQuery: () => undefined,
	closeProductQuickview: () => undefined,
};

// the panel renders from the chat controller's quickview manager store
mockController.quickviewManager = {
	type: 'quickview',
	store: {
		isOpen: true,
		loading: false,
		product: {
			id: 'sample-hat',
			display: {
				mappings: { core: { name: 'Sample Wool Hat', brand: 'Acme', price: 29.99 } },
				attributes: { material: 'wool', color: 'black' },
			},
			mappings: { core: { name: 'Sample Wool Hat', brand: 'Acme', price: 29.99 } },
			attributes: { material: 'wool', color: 'black' },
			variants: { selections: [] },
		},
		resolvedConfig: { displayFields: [{ field: 'material' }, { field: 'color' }] },
		error: undefined,
	},
	open: () => undefined,
	close: () => undefined,
	addToCart: () => undefined,
	track: { product: { click: () => undefined, addToCart: () => undefined, clickThrough: () => undefined, impression: () => undefined } },
	sourceController: mockController,
};

export const Default = (args: ChatQuickviewProps) => <ChatQuickview {...args} controller={mockController} />;
Default.args = {
	chatItem: { id: '1', messageType: 'productQuery', sourceProduct: {} } as any,
};
