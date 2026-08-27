import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { QuantityPicker, QuantityPickerProps } from './QuantityPicker';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../QuantityPicker/readme.md';

export default {
	title: 'Molecules/QuantityPicker',
	component: QuantityPicker,
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

export const Default = (args: QuantityPickerProps) => <QuantityPicker {...args} />;

export const MinMax = (args: QuantityPickerProps) => <QuantityPicker {...args} />;
MinMax.args = {
	min: 2,
	max: 10,
};

export const Disabled = (args: QuantityPickerProps) => <QuantityPicker {...args} />;
Disabled.args = {
	startValue: 3,
	disabled: true,
};

export const HiddenButtons = (args: QuantityPickerProps) => <QuantityPicker {...args} />;
HiddenButtons.args = {
	startValue: 3,
	hideButtons: true,
};

export const Label = (args: QuantityPickerProps) => <QuantityPicker {...args} />;
Label.args = {
	label: 'Quantity',
};
