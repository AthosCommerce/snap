import { h } from 'preact';

import { Checkbox } from './Checkbox';
import { iconPaths } from '../../Atoms/Icon';
import { componentArgs } from '../../../utilities';
import Readme from '../Checkbox/readme.md';

export default {
	title: 'Molecules/Checkbox',
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		checked: {
			description: 'Checkbox is checked (externally managed state)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disabled: {
			description: 'Checkbox is disabled',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		size: {
			defaultValue: '12px',
			description: 'Checkbox size',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '12px' },
			},
			control: { type: 'text' },
		},
		icon: {
			defaultValue: 'check-thin',
			description: 'Icon name',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'check-thin' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		color: {
			description: 'Checkbox color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'theme.variables.colors.primary' },
			},
			control: { type: 'color' },
		},
		iconColor: {
			description: 'Checkbox icon color. Overwrites color.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'theme.variables.colors.primary' },
			},
			control: { type: 'color' },
		},
		startChecked: {
			description: 'Checkbox is checked initially (internally managed state)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		native: {
			description: 'Render as unstyled native checkbox',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onClick: {
			description: 'Checkbox click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onClick',
		},
		disableA11y: {
			description: 'boolean to disable autoset ally properties',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

export const Default = {};

export const Disabled = {
	args: {
		checked: true,
		disabled: true,
	},
};

export const Native = {
	args: {
		native: true,
	},
};
