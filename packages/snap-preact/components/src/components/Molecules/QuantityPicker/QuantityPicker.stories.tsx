import { h } from 'preact';

import { QuantityPicker } from './QuantityPicker';
import { componentArgs } from '../../../utilities';
import Readme from '../QuantityPicker/readme.md';

export default {
	title: 'Molecules/QuantityPicker',
	component: QuantityPicker,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		value: {
			description: 'Quantity value (externally managed state)',
			table: {
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		startValue: {
			description: 'Initial quantity value (internally managed state)',
			table: {
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 1 },
			},
			control: { type: 'number' },
		},
		min: {
			defaultValue: 1,
			description: 'Minimum quantity value - can never be negative',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 1 },
			},
			control: { type: 'number' },
		},
		max: {
			description: 'Maximum quantity value',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		step: {
			defaultValue: 1,
			description: 'Amount the increment and decrement buttons change the value by',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 1 },
			},
			control: { type: 'number' },
		},
		disabled: {
			description: 'QuantityPicker is disabled',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideButtons: {
			description: 'Hides the increment and decrement buttons - the input remains usable',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		label: {
			description: 'Label displayed inline with the buttons and input',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		onChange: {
			description: 'Quantity change event handler - invoked with the event and the new value',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: { type: 'none' },
			action: 'onChange',
		},
		...componentArgs,
	},
};

export const Default = {};

export const MinMax = {
	args: {
		min: 2,
		max: 10,
	},
};

export const Disabled = {
	args: {
		startValue: 3,
		disabled: true,
	},
};

export const HiddenButtons = {
	args: {
		startValue: 3,
		hideButtons: true,
	},
};

export const Label = {
	args: {
		label: 'Quantity',
	},
};
