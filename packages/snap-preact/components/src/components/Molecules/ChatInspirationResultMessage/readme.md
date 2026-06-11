# ChatInspirationResultMessage

Renders an `inspirationResult` chat message. Each `inspirationSection` is rendered as a card with a cluster title, description, a row of keyboard-accessible "search query" buttons (each clicks-through to a productSearch via `controller.search()`), and a horizontal carousel of product thumbnails.

## Sub-components
- Image
- Carousel

## Usage
```tsx
import { ChatInspirationResultMessage } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. Must have `messageType === 'inspirationResult'` and a non-empty `inspirationSections` array. Messages of other types render nothing and emit a `console.warn`.

```tsx
<ChatInspirationResultMessage chatItem={chatItem} controller={controller} />
```

### controller
Optional `ChatController` reference. Required for the search-query buttons and thumbnail clicks to trigger any action.

### onProductQuickView
Optional callback fired after a product thumbnail is clicked and the quickview is opened. Useful for mobile UIs that need to toggle a panel.
