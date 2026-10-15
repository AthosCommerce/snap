import { h } from 'preact';

import { ChatButton, ChatButtonProps } from './ChatButton';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../../Organisms/ChatButton/readme.md';
import type { ChatController } from '@athoscommerce/snap-controller';

export default {
	title: 'Templates/ChatButton',
	component: ChatButton,
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
		content: {
			description: 'button label content (omit for icon-only)',
			table: { type: { summary: 'string | JSX.Element' } },
			control: { type: 'text' },
		},
		icon: {
			description: "icon rendered after the content — defaults to 'chat', pass false for text-only",
			table: { category: 'Templates Legal', type: { summary: 'IconType | Partial<IconProps> | boolean' } },
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.chat({
	id: 'ChatButtonStoryDefault',
	siteId: '8uyt2m',
});

// Force the chat-status endpoint to return enabled=true so the button renders
// without a real backend (same seeding approach as the Chat template story).
const seeded = (() => {
	const STATUS_RESPONSE = {
		chatbot: {
			status: { enabled: true },
			suggestedQuestions: [],
			welcomeMessage: 'Hi! Ask me anything about our catalog.',
		},
		features: {
			imageSearch: { enabled: false },
			similarProducts: { enabled: false },
		},
	};

	const client = (snapInstance as any).client;
	if (client?.chat) {
		client.chat.postStatus = async () => STATUS_RESPONSE;
	}

	const store = (snapInstance as any).store;
	if (typeof store.handleChatStatusResponse === 'function') {
		store.handleChatStatusResponse(STATUS_RESPONSE);
	} else {
		store.chatEnabled = true;
	}

	return snapInstance;
})();

export const IconOnly = {
	render: (args: ChatButtonProps, { loaded: { controller } }: { loaded: { controller: ChatController } }) => (
		<ChatButton {...args} controller={controller} />
	),
	loaders: [async () => ({ controller: seeded })],
};

export const TextAndIcon = {
	render: (args: ChatButtonProps, { loaded: { controller } }: { loaded: { controller: ChatController } }) => (
		<ChatButton {...args} controller={controller} />
	),
	loaders: [async () => ({ controller: seeded })],
	args: {
		content: 'Ask AI',
	},
};

export const TextOnly = {
	render: (args: ChatButtonProps, { loaded: { controller } }: { loaded: { controller: ChatController } }) => (
		<ChatButton {...args} controller={controller} />
	),
	loaders: [async () => ({ controller: seeded })],
	args: {
		content: 'Ask AI',
		icon: false,
	},
};
