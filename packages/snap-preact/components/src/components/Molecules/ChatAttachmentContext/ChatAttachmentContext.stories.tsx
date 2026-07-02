import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ChatAttachmentContext, ChatAttachmentContextProps } from './ChatAttachmentContext';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ChatAttachmentContext/readme.md';

export default {
	title: 'Molecules/ChatAttachmentContext',
	component: ChatAttachmentContext,
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
		title: {
			description: 'label rendered above the attachments',
			table: { category: 'Templates Legal', type: { summary: 'string' } },
			control: { type: 'text' },
		},
		items: {
			description: 'attachment items to render',
			table: { category: 'Templates Legal', type: { summary: 'ChatAttachmentContextItem[]' } },
			control: { type: 'object' },
		},
		onClose: {
			description: 'optional close handler',
			table: { category: 'Templates Legal', type: { summary: '() => void' } },
			control: { type: 'none' },
		},
		...componentArgs,
	},
};

export const Default = (args: ChatAttachmentContextProps) => <ChatAttachmentContext {...args} />;
Default.args = {
	title: 'Attachments',
	items: [
		{ id: '1', name: 'photo.png', imageUrl: 'https://via.placeholder.com/64' },
		{ id: '2', name: 'screenshot.png', imageUrl: 'https://via.placeholder.com/64' },
	],
};

export const Loading = (args: ChatAttachmentContextProps) => <ChatAttachmentContext {...args} />;
Loading.args = {
	title: 'Attachments',
	items: [{ id: '1', name: 'uploading.png', imageUrl: 'https://via.placeholder.com/64', isLoading: true }],
};

export const Error = (args: ChatAttachmentContextProps) => <ChatAttachmentContext {...args} />;
Error.args = {
	title: 'Attachments',
	items: [{ id: '1', name: 'failed.png', hasError: true, errorMessage: 'Upload failed' }],
};
