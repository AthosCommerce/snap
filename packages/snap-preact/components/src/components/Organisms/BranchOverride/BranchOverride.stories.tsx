import { h } from 'preact';

import { BranchOverride } from './BranchOverride';
import { componentArgs } from '../../../utilities';
import Readme from '../BranchOverride/readme.md';

export default {
	title: 'Organisms/BranchOverride',
	component: BranchOverride,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div
				style={{
					maxWidth: '900px',
					position: 'relative',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		branch: {
			description: 'bundle branch name',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		details: {
			description: 'Object containing details for branch override',
			type: { required: false },
			table: {
				type: {
					summary: '{ url: string; lastModified: string }',
				},
			},
			control: { type: 'object' },
		},
		error: {
			description: 'Object containing error message and description',
			type: { required: false },
			table: {
				type: {
					summary: '{ message: string; description: string }',
				},
			},
			control: { type: 'object' },
		},
		onRemoveClick: {
			description: 'optional function to run on remove button click',
			table: {
				type: {
					summary: '(e: Event, name: string) => void',
				},
			},
			control: false,
			action: 'onRemoveClick',
		},
		darkMode: {
			description: 'enable darkMode',
			type: { required: false },
			table: {
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

export const Auto = {
	args: {
		branch: 'next',
		details: {
			url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
			lastModified: '1 Feb 2022 1:02:03 GMT',
		},
	},
};

export const Dark = {
	args: {
		branch: 'next',
		details: {
			url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
			lastModified: '1 Feb 2022 1:02:03 GMT',
		},
		darkMode: true,
	},
};

export const Error = {
	args: {
		branch: 'testing',
		error: {
			message: 'Branch not found!',
			description: 'Incorrect branch name or branch no longer exists.',
		},
	},
};

export const Light = {
	args: {
		branch: 'next',
		details: {
			url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
			lastModified: '1 Feb 2022 1:02:03 GMT',
		},
		darkMode: false,
	},
};
