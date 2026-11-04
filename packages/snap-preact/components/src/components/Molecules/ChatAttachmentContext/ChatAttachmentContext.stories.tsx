import { h } from 'preact';

import { ChatAttachmentContext } from './ChatAttachmentContext';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatAttachmentContext/readme.md';

export default {
	title: 'Molecules/ChatAttachmentContext',
	component: ChatAttachmentContext,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
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
			control: false,
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		title: 'Attachments',
		items: [
			{ id: '1', name: 'photo.png', imageUrl: 'https://picsum.photos/64/64' },
			{ id: '2', name: 'screenshot.png', imageUrl: 'https://picsum.photos/64/64' },
		],
	},
};

export const Loading = {
	args: {
		title: 'Attachments',
		items: [{ id: '1', name: 'uploading.png', imageUrl: 'https://picsum.photos/64/64', isLoading: true }],
	},
};

export const Error = {
	args: {
		title: 'Attachments',
		items: [{ id: '1', name: 'failed.png', hasError: true, errorMessage: 'Upload failed' }],
	},
};
