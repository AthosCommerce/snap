import { F as r } from './FormattedNumber-BmJFvqGZ.js';
import { c as o } from './componentArgs-DfBuq-N1.js';
import './iframe-U9T2Y9ZS.js';
import './preload-helper-PPVm8Dsz.js';
import './formatNumber-C6zKvI-v.js';
const s =
		"# Formatted Number\n\nUtilizes `formatNumber` from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://athoscommerce.github.io/snap/reference-toolbox-filters\">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.\n\n## Usage\n```tsx\nimport { FormattedNumber } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the number to be formatted. \n\n```tsx\n<FormattedNumber value={99.99} />\n```\nFormatted output from above properties: `99.990`\n\n### symbol\nThe `symbol` prop specifies an optional symbol to be included. Typically used when adding a unit of measure to a number.\n\n```tsx\n<FormattedNumber value={99} symbol={' °C'} /> \n```\nFormatted output from above properties: `99.000 °C`\n\n### decimalPlaces\nThe `decimalPlaces` prop specifies how many decimal places to format.\n\n```tsx\n<FormattedNumber value={99} decimalPlaces={2} /> \n```\nFormatted output from above properties: `99.00`\n\n### padDecimalPlaces\nThe `padDecimalPlaces` prop pads excess decimal places with zeros.\n\n```tsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={true} /> \n```\nFormatted output from above properties: `99.9900`\n\n```tsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={false} /> \n```\nFormatted output from above properties: `99.99`\n\n### thousandsSeparator\nThe `thousandsSeparator` prop specifies the thousands separator character.\n\n```tsx\n<FormattedNumber value={10999.99} thousandsSeparator={','} /> \n```\nFormatted output from above properties: `10,999.990`\n\n### decimalSeparator\nThe `decimalSeparator` prop specifies the decimal separator character.\n\n```tsx\n<FormattedNumber value={10999.99} decimalSeparator={','} decimalPlaces={2} /> \n```\nFormatted output from above properties: `10999,99`\n\n### symbolAfter\nThe `symbolAfter` prop specifies if the provided `symbol` prop should be placed after the formatted `value`.\n\n```tsx\n<FormattedNumber value={999.999} symbol={'km'} symbolAfter={true} /> \n```\nFormatted output from above properties: `999.999km`\n",
	c = {
		title: 'Atoms/FormattedNumber',
		component: r,
		parameters: { docs: { description: { component: s } } },
		argTypes: {
			value: {
				description: 'Numeric value to be formatted',
				type: { required: !0 },
				table: { type: { summary: 'number' }, category: 'Templates Legal' },
				control: { type: 'number' },
			},
			symbol: {
				defaultValue: '',
				description: 'Unit symbol',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			symbolAfter: {
				defaultValue: !0,
				description: 'Place unit symbol after the value',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			decimalPlaces: {
				defaultValue: 3,
				description: 'Number of decimal places',
				table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: 3 } },
				control: { type: 'number' },
			},
			padDecimalPlaces: {
				defaultValue: !0,
				description: 'Pad decimal places with zeros',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			thousandsSeparator: {
				defaultValue: '',
				description: 'Character used to separate thousands',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
				control: { type: 'text' },
			},
			decimalSeparator: {
				defaultValue: '.',
				description: 'Character used to separate decimal values',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '.' } },
				control: { type: 'text' },
			},
			raw: {
				description: 'Returns raw value without wrapping DOM node',
				defaultValue: !1,
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...o,
		},
	},
	e = { args: { value: 1099.99 } },
	a = { args: { value: 100, symbol: ' °C', decimalPlaces: 2 } },
	t = { args: { value: 100, symbol: ' mm', decimalPlaces: 2 } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: 1099.99
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: 100,
    symbol: ' °C',
    decimalPlaces: 2
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    value: 100,
    symbol: ' mm',
    decimalPlaces: 2
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const d = ['Default', 'Temperature', 'Length'];
export { e as Default, t as Length, a as Temperature, d as __namedExportsOrder, c as default };
