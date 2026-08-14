# ChatProductComparisonMessage

Renders a `productComparison` chat message as an accessible HTML table. Products are columns (`<th scope="col">`) and feature names are rows (`<th scope="row">`).

## Usage
```tsx
import { ChatProductComparisonMessage } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. Must have `messageType === 'productComparison'`, a `comparisonData.features` array, and a `searchResults` array. Messages of other types render nothing and emit a `console.warn`.

```tsx
<ChatProductComparisonMessage chatItem={chatItem} controller={controller} />
```

### controller
Optional `ChatController` reference. Reserved for future interactivity inside the table.

## Accessibility

The table uses a visually-hidden `<caption>` plus `scope="col"` and `scope="row"` on header cells so screen readers announce both the product and feature when navigating values.
