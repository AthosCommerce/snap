import { Q as s } from './QuantityPicker-BOFBvqlQ.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './iframe-U9T2Y9ZS.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './defined-CdKp_MB-.js';
import './Button-rwG4FGUK.js';
import './useA11y-BuGQuOJb.js';
const o =
		"# QuantityPicker\n\nRenders a numeric quantity input with increment and decrement buttons. The input only accepts whole numbers - typed values are clamped to the `min`/`max` range and decimals are truncated. Values can never be negative.\n\n## Sub-components\n- Button\n\n## Usage\n```tsx\nimport { QuantityPicker } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe `value` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.\n\n```tsx\n<QuantityPicker value={quantity} onChange={(e, value) => setQuantity(value)} />\n```\n\n### startValue\nThe `startValue` prop sets the initial value on the first render. Must use internal state by not using the `value` prop.\n\n```tsx\n<QuantityPicker startValue={3} />\n```\n\n### min\nThe `min` prop sets the minimum value (default `1`). The value cannot be decremented or typed below it, and it can never be negative.\n\n```tsx\n<QuantityPicker min={2} />\n```\n\n### max\nThe `max` prop sets the maximum value. The value cannot be incremented or typed above it. No maximum is applied when omitted.\n\n```tsx\n<QuantityPicker max={10} />\n```\n\n### step\nThe `step` prop sets the amount the increment and decrement buttons change the value by (default `1`).\n\n```tsx\n<QuantityPicker step={5} />\n```\n\n### disabled\nThe `disabled` prop disables the input and both buttons and prevents the `onChange` callback from being invoked.\n\n```tsx\n<QuantityPicker disabled={true} />\n```\n\n### label\nThe `label` prop displays a label inline with the buttons and input. No label is rendered when omitted.\n\n```tsx\n<QuantityPicker label={'Quantity'} />\n```\n\n### hideButtons\nThe `hideButtons` prop hides the increment and decrement buttons. The input remains usable and the `onChange` callback is still invoked when typing a new value.\n\n```tsx\n<QuantityPicker hideButtons={true} />\n```\n\n### Events\n\n#### onChange\nThe `onChange` prop allows for a custom callback function for when the value changes - via the buttons or by typing into the input. It is invoked with the event and the new (clamped) value.\n\n```tsx\n<QuantityPicker onChange={(e, value) => {console.log(value)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the QuantityPicker component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `quantityInput` | Input element attributes | `quantity` (number), `min` (number), `max` (number \\| undefined), `disabled` (boolean \\| undefined) |\n| `decrementButton` | Decrement button attributes | `quantity` (number), `min` (number), `max` (number \\| undefined), `disabled` (boolean \\| undefined) |\n| `incrementButton` | Increment button attributes | `quantity` (number), `min` (number), `max` (number \\| undefined), `disabled` (boolean \\| undefined) |\n\n### Example\n\n```tsx\n<QuantityPicker\n	lang={{\n		quantityInput: {\n			attributes: {\n				'aria-label': (data) => `quantity of ${data.quantity}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: u } = __STORYBOOK_MODULE_TEST__,
	g = {
		title: 'Molecules/QuantityPicker',
		component: s,
		parameters: { docs: { description: { component: o } } },
		args: { onChange: u() },
		argTypes: {
			value: { description: 'Quantity value (externally managed state)', table: { type: { summary: 'number' } }, control: { type: 'number' } },
			startValue: {
				description: 'Initial quantity value (internally managed state)',
				table: { type: { summary: 'number' }, defaultValue: { summary: 1 } },
				control: { type: 'number' },
			},
			min: {
				defaultValue: 1,
				description: 'Minimum quantity value - can never be negative',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 1 } },
				control: { type: 'number' },
			},
			max: {
				description: 'Maximum quantity value',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			step: {
				defaultValue: 1,
				description: 'Amount the increment and decrement buttons change the value by',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 1 } },
				control: { type: 'number' },
			},
			disabled: {
				description: 'QuantityPicker is disabled',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideButtons: {
				description: 'Hides the increment and decrement buttons - the input remains usable',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			label: {
				description: 'Label displayed inline with the buttons and input',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			onChange: {
				description: 'Quantity change event handler - invoked with the event and the new value',
				table: { category: 'Templates Legal', type: { summary: 'function' } },
				control: { type: 'none' },
			},
			...i,
		},
	},
	e = {},
	t = { args: { min: 2, max: 10 } },
	n = { args: { startValue: 3, disabled: !0 } },
	a = { args: { startValue: 3, hideButtons: !0 } },
	r = { args: { label: 'Quantity' } };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: '{}', ...e.parameters?.docs?.source } } };
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    min: 2,
    max: 10
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    startValue: 3,
    disabled: true
  }
}`,
			...n.parameters?.docs?.source,
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
    startValue: 3,
    hideButtons: true
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    label: 'Quantity'
  }
}`,
			...r.parameters?.docs?.source,
		},
	},
};
const v = ['Default', 'MinMax', 'Disabled', 'HiddenButtons', 'Label'];
export { e as Default, n as Disabled, a as HiddenButtons, r as Label, t as MinMax, v as __namedExportsOrder, g as default };
