import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatMessageText, ChatMessageTextProps } from './ChatMessageText';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatMessageText/readme.md';

export default {
	title: 'Molecules/ChatMessageText',
	component: ChatMessageText,
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

export const Default = (args: ChatMessageTextProps) => <ChatMessageText {...args} controller={mockController} />;
Default.args = {
	chatItem: { id: '1', text: 'Here are some great suggestions for you!', messageType: 'general' },
	scrollToBottom: () => undefined,
};
