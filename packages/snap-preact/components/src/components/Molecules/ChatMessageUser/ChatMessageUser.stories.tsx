import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatMessageUser, ChatMessageUserProps } from './ChatMessageUser';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatMessageUser/readme.md';

export default {
	title: 'Molecules/ChatMessageUser',
	component: ChatMessageUser,
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
			description: 'chat message to render',
			table: { category: 'Templates Legal', type: { summary: 'object' } },
			control: { type: 'none' },
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

export const Default = (args: ChatMessageUserProps) => <ChatMessageUser {...args} controller={mockController} />;
Default.args = {
	chatItem: { id: '1', text: 'Show me running shoes', requestType: 'productSearch' },
};
