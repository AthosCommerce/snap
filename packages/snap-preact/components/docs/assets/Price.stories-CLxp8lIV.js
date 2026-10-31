import { P as r } from './Price-BreE7qNQ.js';
import { c as o } from './componentArgs-DfBuq-N1.js';
import './iframe-Bc4KSH0T.js';
import './preload-helper-PPVm8Dsz.js';
import './formatNumber-C6zKvI-v.js';
const n =
		"# Price\n\nUtilizes `currency` from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://athoscommerce.github.io/snap/reference-toolbox-filters\">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.\n\n## Usage\n```tsx\nimport { Price } from '@athoscommerce/snap-preact/components';\n```\n\nThe `Price` component utilizes all props from the `FormattedNumber` component with the following additional props:\n\n### lineThrough\nThe `lineThrough` prop will style the formatted number with a line-through.\n\n```tsx\n<Price value={1099.99} symbol=' €' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />\n```\nFormatted output from above properties: ~~`1.099,99 €`~~\n\n### code\nThe `code` prop sets the ISO currency code rendered after the amount. In Snap Templates this is supplied automatically by the active currency locale, so it rarely needs to be set by hand.\n\n### showCode\nThe `showCode` prop renders the `code` after the amount, in addition to the symbol. It defaults to `false`, and the code and amount are separated by a non-breaking space so they never wrap apart.\n\n```tsx\n<Price value={1099.99} symbol='$' code='USD' showCode={true} />\n```\nFormatted output from above properties: `$1,099.99 USD`\n\nBoth props are ignored when a `format` function is supplied, since the function produces the entire string itself.\n",
	p = {
		title: 'Atoms/Price',
		component: r,
		parameters: { docs: { description: { component: n } } },
		argTypes: {
			value: {
				description: 'Numeric value to be formatted',
				type: { required: !0 },
				table: { type: { summary: 'number' }, category: 'Templates Legal' },
				control: { type: 'number' },
			},
			symbol: {
				description: 'Currency symbol',
				defaultValue: '$',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '$' } },
				control: { type: 'text' },
			},
			symbolAfter: {
				description: 'Place currency symbol after the value',
				defaultValue: !1,
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			code: {
				description: 'ISO currency code rendered after the amount - supplied by the active currency locale in Snap Templates',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			showCode: {
				description: 'Render the currency code after the amount, in addition to the symbol',
				defaultValue: !1,
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			decimalPlaces: {
				description: 'Number of decimal places',
				defaultValue: 2,
				table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: 2 } },
				control: { type: 'number' },
			},
			padDecimalPlaces: {
				description: 'Pad decimal places with zeros',
				defaultValue: !0,
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			thousandsSeparator: {
				description: 'Character used to separate thousands',
				defaultValue: ',',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: ',' } },
				control: { type: 'text' },
			},
			decimalSeparator: {
				description: 'Character used to separate decimal values',
				defaultValue: '.',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '.' } },
				control: { type: 'text' },
			},
			lineThrough: {
				description: 'Add line through styling',
				defaultValue: !1,
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
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
	a = { args: { value: 1199.99, lineThrough: !0 } },
	t = { args: { value: 999.99, symbol: ' €', thousandsSeparator: '.', decimalSeparator: ',', symbolAfter: !0 } };
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
    value: 1199.99,
    lineThrough: true
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
    value: 999.99,
    symbol: ' €',
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbolAfter: true
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const i = ['Default', 'lineThrough', 'CustomCurrency'];
export { t as CustomCurrency, e as Default, i as __namedExportsOrder, p as default, a as lineThrough };
