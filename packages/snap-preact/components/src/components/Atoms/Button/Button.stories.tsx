import { h } from 'preact';

import { Button } from './Button';
import { componentArgs } from '../../../utilities';
import Readme from '../Button/readme.md';
import { iconPaths } from '../Icon';

export default {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		content: {
			description: 'Content to be displayed in button',
			table: {
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		children: {
			description: 'Content to be displayed in button (using children)',
			table: {
				type: {
					summary: 'string, JSX',
				},
				category: 'Templates Legal',
			},
			control: false,
		},
		disabled: {
			description: 'Disable button',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onClick: {
			description: 'Button click event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onClick',
		},
		color: {
			description: 'Button text color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'color' },
		},
		icon: {
			description: 'Button Icon name',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		backgroundColor: {
			description: 'Button background color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '#fff' },
			},
			control: { type: 'color' },
		},
		borderColor: {
			description: 'Button border color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '#333' },
			},
			control: { type: 'color' },
		},
		native: {
			description: 'Render as unstyled native button',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disableA11y: {
			description: 'boolean to disable autoset ally properties',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		content: 'Button',
	},
};

export const Disabled = {
	args: {
		content: 'Button',
		disabled: true,
	},
};

export const Native = {
	args: {
		content: 'Button',
		native: true,
	},
};
