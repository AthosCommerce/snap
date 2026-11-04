import { h } from 'preact';

import { ChatMessageUser, ChatMessageUserProps } from './ChatMessageUser';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatMessageUser/readme.md';

export default {
	title: 'Molecules/ChatMessageUser',
	component: ChatMessageUser,
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
			description: 'message bubble background color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		primaryColorText: {
			description: 'message bubble text color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		...componentArgs,
	},
};

const mockController: any = {
	store: {
		currentChat: { chat: [], attachments: { get: () => null } },
	},
	productQuickView: () => undefined,
};

export const Default = {
	render: (args: ChatMessageUserProps) => <ChatMessageUser {...args} controller={mockController} />,
	args: {
		chatItem: { id: '1', text: 'Show me running shoes', requestType: 'productSearch' },
	},
};
