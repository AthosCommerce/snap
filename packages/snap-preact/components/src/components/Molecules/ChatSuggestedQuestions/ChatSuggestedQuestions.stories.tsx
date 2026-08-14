import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatSuggestedQuestions, ChatSuggestedQuestionsProps } from './ChatSuggestedQuestions';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatSuggestedQuestions/readme.md';

export default {
	title: 'Molecules/ChatSuggestedQuestions',
	component: ChatSuggestedQuestions,
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
		questions: {
			description: 'list of suggestion strings',
			table: { category: 'Templates Legal', type: { summary: 'string[]' } },
			control: { type: 'object' },
		},
		actions: {
			description: 'response actions used as suggestions when `questions` is omitted',
			table: { category: 'Templates Legal', type: { summary: "ChatResponseActionsData['actions']" } },
			control: { type: 'object' },
		},
		primaryColor: {
			description: 'accent color for the badge + focus ring',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'color' },
		},
		...componentArgs,
	},
};

const mockController: any = {
	openChat: (q: string) => console.log('openChat', q),
};

export const Default = (args: ChatSuggestedQuestionsProps) => <ChatSuggestedQuestions {...args} controller={mockController} />;
Default.args = {
	questions: ['What is on sale right now?', 'Show me waterproof jackets', 'Compare these two products'],
};
