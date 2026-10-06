# Price

Utilizes `currency` from <a target="_blank" rel="noopener noreferrer" href="https://athoscommerce.github.io/snap/reference-toolbox-filters">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.

## Usage
```tsx
import { Price } from '@athoscommerce/snap-preact/components';
```

The `Price` component utilizes all props from the `FormattedNumber` component with the following additional props:

### lineThrough
The `lineThrough` prop will style the formatted number with a line-through.

```tsx
<Price value={1099.99} symbol=' €' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />
```
Formatted output from above properties: ~~`1.099,99 €`~~

### code
The `code` prop sets the ISO currency code rendered after the amount. In Snap Templates this is supplied automatically by the active currency locale, so it rarely needs to be set by hand.

### showCode
The `showCode` prop renders the `code` after the amount, in addition to the symbol. It defaults to `false`, and the code and amount are separated by a non-breaking space so they never wrap apart.

```tsx
<Price value={1099.99} symbol='$' code='USD' showCode={true} />
```
Formatted output from above properties: `$1,099.99 USD`

Both props are ignored when a `format` function is supplied, since the function produces the entire string itself.
