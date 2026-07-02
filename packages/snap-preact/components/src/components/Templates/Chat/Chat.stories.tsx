import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Chat, ChatProps } from './Chat';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Chat/readme.md';
import type { ChatController } from '@athoscommerce/snap-controller';

export default {
	title: 'Templates/Chat',
	component: Chat,
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
		logo: {
			description: 'header logo URL',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'text' },
		},
		title: {
			description: 'header title',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'text' },
		},
		subtitle: {
			description: 'header subtitle',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'text' },
		},
		position: {
			description: 'anchor side',
			table: { category: 'Templates Legal', type: { summary: "'left' | 'right'" } },
			options: ['left', 'right'],
			control: { type: 'select' },
		},
		offset: {
			description: 'horizontal anchor offset',
			table: { category: 'Templates Legal', type: { summary: 'string | number' } },
			control: { type: 'text' },
		},
		multiselectFacets: {
			description: 'batch facet changes behind an Apply button',
			table: { category: 'Templates Legal', type: { summary: 'boolean' } },
			control: { type: 'boolean' },
		},
		disableBubbleSuggestedQuestions: {
			description: 'hide suggested questions above the closed bubble',
			table: { category: 'Templates Legal', type: { summary: 'boolean' } },
			control: { type: 'boolean' },
		},
		primaryColorBg: {
			description: 'primary background color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		primaryColorFg: {
			description: 'primary foreground color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		primaryAccentColorBg: {
			description: 'primary accent background color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		primaryAccentColorFg: {
			description: 'primary accent foreground color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		secondaryAccentColorBg: {
			description: 'secondary accent background color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		secondaryAccentColorFg: {
			description: 'secondary accent foreground color',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.chat({
	id: 'ChatStoryDefault',
	siteId: '8uyt2m',
});

// Force the chat-status endpoint to return enabled=true with imageSearch +
// similarProducts both enabled, so the storybook works end-to-end without a
// real backend. The controller calls postStatus on init AND on every chat
// action, so we override the method (not just the cached store state).
const seeded = (() => {
	const STATUS_RESPONSE = {
		chatbot: {
			status: { enabled: true },
			suggestedQuestions: ['What is on sale right now?', 'Show me waterproof jackets'],
			welcomeMessage: 'Hi! Ask me anything about our catalog.',
		},
		features: {
			imageSearch: { enabled: true },
			similarProducts: { enabled: true },
		},
	};

	const client = (snapInstance as any).client;
	if (client?.chat) {
		client.chat.postStatus = async () => STATUS_RESPONSE;
	}

	// Apply the seeded status to the store immediately so the bubble renders
	// on first paint, before the async controller.init() resolves.
	const store = (snapInstance as any).store;
	if (typeof store.handleChatStatusResponse === 'function') {
		store.handleChatStatusResponse(STATUS_RESPONSE);
	} else {
		store.chatEnabled = true;
		store.features = STATUS_RESPONSE.features;
		store.suggestedQuestions = STATUS_RESPONSE.chatbot.suggestedQuestions;
		store.welcomeMessage = STATUS_RESPONSE.chatbot.welcomeMessage;
	}

	return snapInstance;
})();

export const Default = (args: ChatProps, { loaded: { controller } }: { loaded: { controller: ChatController } }) => (
	<Chat {...args} controller={controller} />
);
Default.loaders = [async () => ({ controller: seeded })];
Default.args = {};
