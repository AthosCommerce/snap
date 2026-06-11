# ChatMessageText

Renders an assistant-side chat message bubble with markdown-parsed text, an optional side-chat toggle button (for inspiration / comparison messages), an optional "Show Details" button, and any inline result carousel for the message.

## Sub-components
- Button
- ChatResultsDisplay

## Usage
```tsx
import { ChatMessageText } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. The component reads `overallSummary`, `text`, `comparisonData.summary`, `errorMessage`, or `messageForDrift` to derive the text, and forwards the item to `ChatResultsDisplay` for any embedded results.

### controller
Required `ChatController` reference.

### scrollToBottom
Callback fired by `ChatResultsDisplay` when product images finish loading; lets the parent keep the message list pinned to the bottom.

### showDetailsButton
When true (typically on mobile), renders a prominent "Show Details" button for `productComparison` messages.

### sideChatOpen
When true and the message has a side-chat view (inspiration or comparison), the toggle button is rendered in its active state.

### primaryColor, primaryColorText
Templates-legal accent colors for the side-chat toggle, "Show Details" button, and carousel arrows.
