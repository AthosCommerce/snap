import { h } from 'preact';

import { componentArgs } from '../../../utilities';
import Readme from './readme.md';
import { Rating } from './Rating';
import { iconPaths } from '../../Atoms/Icon';

export default {
	title: 'Molecules/Rating',
	component: Rating,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		value: {
			description: 'The rating value (out of five)',
			type: { required: true },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		count: {
			description: 'The number of ratings or reviews',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		text: {
			type: { required: false },
			description: 'Additional text to be rendered.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		alwaysRender: {
			description: 'Force to render even when value is 0 or undefined',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		disablePartialFill: {
			description: 'Disables fractional stars - will round down',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		fullIcon: {
			description: 'Icon to render in for a full star',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'star' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		emptyIcon: {
			description: 'Icon to render for an empty star',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'star-o' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		value: 4.5,
	},
};

export const StarsWithCount = {
	args: {
		value: 3,
		count: 33,
		emptyIcon: 'star',
	},
};

export const Hearts = {
	args: {
		value: 3.3,
		fullIcon: 'heart',
		emptyIcon: 'heart-o',
	},
};
