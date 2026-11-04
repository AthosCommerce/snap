import { h } from 'preact';

import { Chat, ChatProps } from './Chat';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Chat/readme.md';
import type { ChatController } from '@athoscommerce/snap-controller';

export default {
	title: 'Templates/Chat',
	component: Chat,
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

const snapInstance = Snapify.chat(
	{ id: 'ChatStoryDefault' },
	{
		status: {
			chatbot: {
				status: { enabled: true },
				suggestedQuestions: ['What is on sale right now?', 'Show me waterproof jackets'],
				welcomeMessage: 'Hi! Ask me anything about our catalog.',
			},
			features: {
				imageSearch: { enabled: true },
				similarProducts: { enabled: true },
			},
		},
	}
);

export const Default = {
	render: (args: ChatProps, { loaded: { controller } }: { loaded: { controller: ChatController } }) => <Chat {...args} controller={controller} />,
	loaders: [async () => ({ controller: snapInstance })],
};
