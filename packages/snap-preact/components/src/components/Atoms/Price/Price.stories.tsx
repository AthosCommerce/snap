import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Price, PriceProps } from './Price';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../Price/readme.md';

export default {
	title: 'Atoms/Price',
	component: Price,
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
			description: 'Numeric value to be formatted',
			type: { required: true },
			table: {
				type: {
					summary: 'number',
				},
				category: 'Templates Legal',
			},
			control: { type: 'number' },
		},
		symbol: {
			description: 'Currency symbol',
			defaultValue: '$',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '$' },
			},
			control: { type: 'text' },
		},
		symbolAfter: {
			description: 'Place currency symbol after the value',
			defaultValue: false,
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		code: {
			description: 'ISO currency code rendered after the amount - supplied by the active currency locale in Snap Templates',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		showCode: {
			description: 'Render the currency code after the amount, in addition to the symbol',
			defaultValue: false,
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		decimalPlaces: {
			description: 'Number of decimal places',
			defaultValue: 2,
			table: {
				type: {
					summary: 'number',
				},
				category: 'Templates Legal',
				defaultValue: { summary: 2 },
			},
			control: { type: 'number' },
		},
		padDecimalPlaces: {
			description: 'Pad decimal places with zeros',
			defaultValue: true,
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		thousandsSeparator: {
			description: 'Character used to separate thousands',
			defaultValue: ',',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: ',' },
			},
			control: { type: 'text' },
		},
		decimalSeparator: {
			description: 'Character used to separate decimal values',
			defaultValue: '.',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '.' },
			},
			control: { type: 'text' },
		},
		lineThrough: {
			description: 'Add line through styling',
			defaultValue: false,
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		raw: {
			description: 'Returns raw value without wrapping DOM node',
			defaultValue: false,
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

export const Default = (args: PriceProps) => <Price {...args} />;
Default.args = {
	value: 1099.99,
};

export const lineThrough = (args: PriceProps) => <Price {...args} />;
lineThrough.args = {
	value: 1199.99,
	lineThrough: true,
};

export const CustomCurrency = (args: PriceProps) => <Price {...args} />;
CustomCurrency.args = {
	value: 999.99,
	symbol: ' €',
	thousandsSeparator: '.',
	decimalSeparator: ',',
	symbolAfter: true,
};
