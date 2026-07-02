# ChatAttachmentContext

Renders the contextual attachments (uploaded images, product references, filter pills) that were attached to a chat user message. Each attachment can be in loading, error, or normal state, optionally clickable, optionally removable.

## Sub-components
- Image
- Icon
- Button

## Usage
```tsx
import { ChatAttachmentContext } from '@athoscommerce/snap-preact/components';
```

### title
Human-readable label rendered above the items.

```tsx
<ChatAttachmentContext title="Attachments" items={items} />
```

### items
Array of attachment descriptors. Each `ChatAttachmentContextItem` supports:

- `id` — unique identifier
- `name` — display name (also used for `aria-label` when clickable)
- `imageUrl` — optional thumbnail
- `isLoading` — show a loading indicator overlay
- `hasError` / `errorMessage` — render in error state
- `onClick` — when provided, the item becomes a keyboard-accessible button
- `onRemove` — when provided, a remove button is rendered

```tsx
<ChatAttachmentContext
  title="Attachments"
  items={[
    { id: '1', name: 'shirt.png', imageUrl: '/shirt.png', onRemove: () => {} },
  ]}
/>
```

### onClose
Optional callback fired when the user clicks the close button on the label. The close button is keyboard-accessible.

```tsx
<ChatAttachmentContext title="Attachments" items={items} onClose={() => setAttachments([])} />
```
