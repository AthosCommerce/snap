import { h } from 'preact';

import { ErrorType } from '@athoscommerce/snap-store-mobx';

import { ErrorHandler } from './ErrorHandler';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/ErrorHandler',
	component: ErrorHandler,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '1200px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller object',
				},
			},
			control: false,
		},
		error: {
			description: 'Error object containing message and type',
			table: {
				type: {
					summary: 'Error object',
				},
			},
			control: { type: 'object' },
		},
		onRetryClick: {
			description: 'Retry button click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onRetryClick',
		},
		...componentArgs,
	},
};

export const Warning = {
	args: {
		controller: {
			store: {
				error: {
					code: 429,
					type: ErrorType.WARNING,
					message: 'Too many requests try again later',
				},
			},
		},
	},
};

export const Error = {
	args: {
		controller: {
			store: {
				error: {
					code: 500,
					type: ErrorType.ERROR,
					message: 'Invalid Search Request or Service Unavailable',
				},
			},
		},
	},
};

export const Info = {
	args: {
		controller: {
			store: {
				error: {
					code: 200,
					type: ErrorType.INFO,
					message: 'Something important happened',
				},
			},
		},
	},
};

export const CustomError = {
	args: {
		error: {
			type: ErrorType.INFO,
			message: 'Custom error using info type',
		},
	},
};
