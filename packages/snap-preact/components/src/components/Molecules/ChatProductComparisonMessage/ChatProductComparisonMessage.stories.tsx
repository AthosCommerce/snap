import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatProductComparisonMessage, ChatProductComparisonMessageProps } from './ChatProductComparisonMessage';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatProductComparisonMessage/readme.md';

export default {
	title: 'Molecules/ChatProductComparisonMessage',
	component: ChatProductComparisonMessage,
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
			description: 'productComparison chat message',
			table: { category: 'Templates Legal', type: { summary: 'ChatResponseProductComparisonData' } },
			control: { type: 'none' },
		},
		...componentArgs,
	},
};

const mockChatItem: any = {
	id: 'mock-comparison',
	messageType: 'productComparison',
	comparisonData: {
		summary: 'Both products are top-rated, but they differ in material and price.',
		features: [
			{ featureName: 'Material', values: { p1: 'Wool', p2: 'Cotton' } },
			{ featureName: 'Weight', values: { p1: '320g', p2: '210g' } },
			{ featureName: 'Price', values: { p1: '$50', p2: '$30' } },
		],
	},
	searchResults: [
		{ id: 'p1', display: { mappings: { core: { name: 'Alpine Wool Beanie', imageUrl: 'https://via.placeholder.com/80' } } } },
		{ id: 'p2', display: { mappings: { core: { name: 'Trailhead Cotton Cap', imageUrl: 'https://via.placeholder.com/80' } } } },
	],
};

export const Default = (args: ChatProductComparisonMessageProps) => <ChatProductComparisonMessage {...args} />;
Default.args = {
	chatItem: mockChatItem,
};
