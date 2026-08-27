# QuantityPicker

Renders a numeric quantity input with increment and decrement buttons. The input only accepts whole numbers - typed values are clamped to the `min`/`max` range and decimals are truncated. Values can never be negative.

## Sub-components
- Button

## Usage
```tsx
import { QuantityPicker } from '@athoscommerce/snap-preact/components';
```

### value
The `value` prop allows for external state management. Otherwise if not provided, the component will use its own internal state.

```tsx
<QuantityPicker value={quantity} onChange={(e, value) => setQuantity(value)} />
```

### startValue
The `startValue` prop sets the initial value on the first render. Must use internal state by not using the `value` prop.

```tsx
<QuantityPicker startValue={3} />
```

### min
The `min` prop sets the minimum value (default `1`). The value cannot be decremented or typed below it, and it can never be negative.

```tsx
<QuantityPicker min={2} />
```

### max
The `max` prop sets the maximum value. The value cannot be incremented or typed above it. No maximum is applied when omitted.

```tsx
<QuantityPicker max={10} />
```

### step
The `step` prop sets the amount the increment and decrement buttons change the value by (default `1`).

```tsx
<QuantityPicker step={5} />
```

### disabled
The `disabled` prop disables the input and both buttons and prevents the `onChange` callback from being invoked.

```tsx
<QuantityPicker disabled={true} />
```

### label
The `label` prop displays a label inline with the buttons and input. No label is rendered when omitted.

```tsx
<QuantityPicker label={'Quantity'} />
```

### hideButtons
The `hideButtons` prop hides the increment and decrement buttons. The input remains usable and the `onChange` callback is still invoked when typing a new value.

```tsx
<QuantityPicker hideButtons={true} />
```

### Events

#### onChange
The `onChange` prop allows for a custom callback function for when the value changes - via the buttons or by typing into the input. It is invoked with the event and the new (clamped) value.

```tsx
<QuantityPicker onChange={(e, value) => {console.log(value)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the QuantityPicker component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `quantityInput` | Input element attributes | `quantity` (number), `min` (number), `max` (number \| undefined), `disabled` (boolean \| undefined) |
| `decrementButton` | Decrement button attributes | `quantity` (number), `min` (number), `max` (number \| undefined), `disabled` (boolean \| undefined) |
| `incrementButton` | Increment button attributes | `quantity` (number), `min` (number), `max` (number \| undefined), `disabled` (boolean \| undefined) |

### Example

```tsx
<QuantityPicker
	lang={{
		quantityInput: {
			attributes: {
				'aria-label': (data) => `quantity of ${data.quantity}`,
			},
		},
	}}
/>
```
