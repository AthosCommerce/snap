# ChatSuggestedQuestions

Renders a vertical list of suggested questions (or response actions) that, when clicked, send a message via the supplied `ChatController`.

## Sub-components
- Icon

## Usage
```tsx
import { ChatSuggestedQuestions } from '@athoscommerce/snap-preact/components';
```

### questions
Array of strings to render. When omitted, the component falls back to `actions[i].message`.

```tsx
<ChatSuggestedQuestions
  controller={controller}
  questions={['What is on sale?', 'Show me jackets', 'Compare these two']}
/>
```

### actions
Array of `ChatResponseActionsData['actions']`. Each `action.message` becomes a button. Ignored if `questions` is supplied.

```tsx
<ChatSuggestedQuestions controller={controller} actions={controller.store.currentChat?.suggestedActions} />
```

### primaryColor
Templates-legal color for the accent badge + focus ring. Defaults to `#253B80`.
