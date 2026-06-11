# ChatResultsDisplay

Wraps `Carousel` + `ChatResult` to display either `chatItem.results` or `chatItem.recommendationResult[*].results` inside a chat message. Adjusts slides-per-view based on viewport width and whether the side-chat panel is currently open.

## Sub-components
- Carousel
- ChatResult

## Usage
```tsx
import { ChatResultsDisplay } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message whose results should be displayed. Supports both `results` (productSearch / inspirationResult) and `recommendationResult` (productRecommendation) shapes.

```tsx
<ChatResultsDisplay chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />
```

### controller
Required `ChatController` reference. Used to dispatch click tracking and quickview.

### scrollToBottom
Callback forwarded to each rendered `ChatResult`; called when product images finish loading so the parent `Chat` can keep its messages scrolled to the bottom.

### onProductQuickView
Optional callback fired after the user clicks a result and the quickview is opened. Useful for mobile UI that wants to toggle a panel.
