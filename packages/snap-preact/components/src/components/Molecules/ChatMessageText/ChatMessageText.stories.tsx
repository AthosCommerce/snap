import { h } from 'preact';

import { ChatMessageText, ChatMessageTextProps } from './ChatMessageText';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatMessageText/readme.md';

export default {
	title: 'Molecules/ChatMessageText',
	component: ChatMessageText,
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
			description: 'chat message to render',
			table: { category: 'Templates Legal', type: { summary: 'object' } },
			control: false,
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
	store: { currentChat: { activeMessage: undefined } },
	track: { product: { click: () => undefined } },
	productQuickView: () => undefined,
};

export const Default = {
	render: (args: ChatMessageTextProps) => <ChatMessageText {...args} controller={mockController} />,
	args: {
		chatItem: { id: '1', text: 'Here are some great suggestions for you!', messageType: 'general' },
		scrollToBottom: () => undefined,
	},
};
