# ChatSuggestedQuestions

Renders a vertical list of suggested questions that, when clicked, send a message via the supplied `ChatController`.

## Sub-components
- Icon

## Usage
```tsx
import { ChatSuggestedQuestions } from '@athoscommerce/snap-preact/components';
```

### questions
Array of strings to render. When omitted or empty, nothing renders.

```tsx
<ChatSuggestedQuestions
  controller={controller}
  questions={['What is on sale?', 'Show me jackets', 'Compare these two']}
/>
```

### primaryColor
Templates-legal color for the accent badge + focus ring. Defaults to `#253B80`.
