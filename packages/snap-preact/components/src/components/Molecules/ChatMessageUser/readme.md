# ChatMessageUser

Renders a user-side chat message bubble. Optionally shows:

- An italicized "request type" label (e.g. "Searching products", "Comparing products")
- A right-aligned attachments row (image thumbnails, product thumbnails, filter pills) with overflow-counter
- The user's typed text

Product attachments that resolve to a known product in the chat history become keyboard-accessible buttons that re-open that product.

## Sub-components
- Image
- Icon

## Usage
```tsx
import { ChatMessageUser } from '@athoscommerce/snap-preact/components';
```

### chatItem
The chat message to render. The component reads `text`, `requestType`, `attachments`, and `request.searchFilters`.

### controller
Required `ChatController` reference.

### onProductQuickView
Optional callback fired after a product attachment is clicked and the quickview opens. Useful for mobile UIs that need to toggle a panel.

### primaryColor, primaryColorText
Templates-legal accent colors. Drive the message bubble background/text and the focus ring on clickable product attachments.
