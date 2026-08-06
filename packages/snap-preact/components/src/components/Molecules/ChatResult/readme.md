# ChatResult

Renders a single product card for use inside chat-style result carousels (e.g. inside `ChatMessageText` or `ChatResultsDisplay`). It is a simplified, chat-shaped variant of `Result`.

## Sub-components
- Image
- Button
- Price
- OverlayBadge
- CalloutBadge

## Usage
```tsx
import { ChatResult } from '@athoscommerce/snap-preact/components';
```

### result
The required `result` prop is a `Product` taken from `controller.store.currentChat?.results` (or any other source of chat result products).

```tsx
<ChatResult result={controller.store.currentChat.results[0]} controller={controller} scrollToBottom={scrollToBottom} />
```

### controller
The required `controller` prop is a reference to a `ChatController`. It is used to drive Similar / Compare / Discuss / Add-to-Cart / Quickview actions.

### scrollToBottom
Callback fired when the result image finishes loading. The parent `Chat` organism uses this to keep the messages list scrolled to the bottom while messages render.

### trackingRef
Optional callback ref forwarded by the higher-order `withTracking` wrapper. The component automatically receives this and attaches it to the root element; you typically should not pass it manually.

### customComponent
Optionally replace the default rendering with a custom `Result` component registered via `SnapTemplates`.

```tsx
<ChatResult result={result} controller={controller} scrollToBottom={() => {}} customComponent="MyCustomResult" />
```
