# Formatted Number

Utilizes `formatNumber` from <a target="_blank" rel="noopener noreferrer" href="https://athoscommerce.github.io/snap/reference-toolbox-filters">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.

## Usage
```tsx
import { FormattedNumber } from '@athoscommerce/snap-preact/components';
```

### value
The required `value` prop specifies the number to be formatted. 

```tsx
<FormattedNumber value={99.99} />
```
Formatted output from above properties: `99.990`

### symbol
The `symbol` prop specifies an optional symbol to be included. Typically used when adding a unit of measure to a number.

```tsx
<FormattedNumber value={99} symbol={' °C'} /> 
```
Formatted output from above properties: `99.000 °C`

### decimalPlaces
The `decimalPlaces` prop specifies how many decimal places to format.

```tsx
<FormattedNumber value={99} decimalPlaces={2} /> 
```
Formatted output from above properties: `99.00`

### padDecimalPlaces
The `padDecimalPlaces` prop pads excess decimal places with zeros.

```tsx
<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={true} /> 
```
Formatted output from above properties: `99.9900`

```tsx
<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={false} /> 
```
Formatted output from above properties: `99.99`

### thousandsSeparator
The `thousandsSeparator` prop specifies the thousands separator character.

```tsx
<FormattedNumber value={10999.99} thousandsSeparator={','} /> 
```
Formatted output from above properties: `10,999.990`

### decimalSeparator
The `decimalSeparator` prop specifies the decimal separator character.

```tsx
<FormattedNumber value={10999.99} decimalSeparator={','} decimalPlaces={2} /> 
```
Formatted output from above properties: `10999,99`

### symbolAfter
The `symbolAfter` prop specifies if the provided `symbol` prop should be placed after the formatted `value`.

```tsx
<FormattedNumber value={999.999} symbol={'km'} symbolAfter={true} /> 
```
Formatted output from above properties: `999.999km`

### raw
The `raw` prop returns the formatted number as a plain string, without the wrapping `<span>` element.

```tsx
<FormattedNumber value={99.99} raw={true} />
```
Formatted output from above properties: `99.990`
