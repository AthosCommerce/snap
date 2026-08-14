import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatLoadingIndicator, ChatLoadingIndicatorProps } from './ChatLoadingIndicator';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatLoadingIndicator/readme.md';

export default {
	title: 'Atoms/ChatLoadingIndicator',
	component: ChatLoadingIndicator,
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
		loading: {
			description: 'whether the indicator should be visible and animating',
			table: { category: 'Templates Legal', type: { summary: 'boolean' } },
			control: { type: 'boolean' },
		},
		verbs: {
			description: 'list of verbs to cycle through',
			table: { category: 'Templates Legal', type: { summary: 'string[]' } },
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

export const Default = (args: ChatLoadingIndicatorProps) => <ChatLoadingIndicator {...args} />;
Default.args = {
	loading: true,
};

export const CustomVerbs = (args: ChatLoadingIndicatorProps) => <ChatLoadingIndicator {...args} />;
CustomVerbs.args = {
	loading: true,
	verbs: ['Brewing', 'Stirring', 'Pouring'],
};
