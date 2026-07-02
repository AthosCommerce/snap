# ChatLoadingIndicator

Displays an animated, rotating verb (Thinking, Searching, Analyzing, Generating, Processing) to indicate that the chat assistant is working. Each verb is announced to assistive technologies via `aria-live="polite"`.

## Usage
```tsx
import { ChatLoadingIndicator } from '@athoscommerce/snap-preact/components';
```

### loading
The `loading` prop drives visibility. The component renders nothing when `loading` is false.

```tsx
<ChatLoadingIndicator loading={controller.store.loading} />
```

### verbs
Optional list of strings used in place of the defaults. The verb cycles randomly between 1 and 5 seconds.

```tsx
<ChatLoadingIndicator loading={true} verbs={['Thinking', 'Cooking', 'Brewing']} />
```
