import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatProductQueryMessage, ChatProductQueryMessageProps } from './ChatProductQueryMessage';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatProductQueryMessage/readme.md';

export default {
	title: 'Molecules/ChatProductQueryMessage',
	component: ChatProductQueryMessage,
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
			table: { category: 'Templates Legal', type: { summary: 'ChatProductQueryMessageItem' } },
			control: { type: 'none' },
		},
		displayFields: {
			description: 'attribute keys to whitelist in the product info table',
			table: { category: 'Templates Legal', type: { summary: 'string[]' } },
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
	store: {
		productQuickview: {
			display: {
				mappings: { core: { name: 'Sample Wool Hat', brand: 'Acme', price: 29.99 } },
				attributes: { material: 'wool', color: 'black' },
			},
			variants: { selections: [] },
		},
		productQuickviewError: null,
		currentChat: { chat: [], popProductQueryMessage: () => undefined },
		clearProductQuickview: () => undefined,
		features: { similarProducts: { enabled: true } },
	},
	track: { product: { click: () => undefined, addToCart: () => undefined } },
	addToCart: () => undefined,
	productSimilar: () => undefined,
	productQuery: () => undefined,
};

export const Default = (args: ChatProductQueryMessageProps) => <ChatProductQueryMessage {...args} controller={mockController} />;
Default.args = {
	chatItem: { id: '1', messageType: 'productQuery', sourceProduct: {} } as any,
};
