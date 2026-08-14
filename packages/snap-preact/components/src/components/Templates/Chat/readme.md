# Chat (Template)

The `Chat` template is the public, themeable entry point for the conversational-search experience. It wraps the `ChatOrganism` and registers itself under the `'chat'` theme key so per-template overrides apply.

## Sub-components
- ChatOrganism

## Usage
```tsx
import { Chat } from '@athoscommerce/snap-preact/components';

<Chat controller={chatController} />
```

### controller
Required `ChatController`. Forwarded to the underlying `ChatOrganism`.

### lang
Optional `Partial<ChatLang>` for future i18n overrides.

### Templates-legal props
The template re-exports the same `ChatTemplatesLegalProps` as the organism:

- `logo`, `title`, `subtitle`
- `offset`, `position`
- `multiselectFacets`
- `disableBubbleSuggestedQuestions`
- `primaryColorBg`, `primaryColorFg`
- `primaryAccentColorBg`, `primaryAccentColorFg`
- `secondaryAccentColorBg`, `secondaryAccentColorFg`

```tsx
<Chat
  controller={chatController}
  position="left"
  primaryColorBg="#1e293b"
  primaryColorFg="#fff"
/>
```

## Theming

Override at the theme level under the `chat` key:

```ts
const theme = {
  components: {
    chat: {
      position: 'left',
      offset: '40px',
      primaryColorBg: '#1e293b',
    },
  },
};
```

## See also

- [`Organisms/Chat`](../../Organisms/Chat/readme.md) for the underlying implementation, hooks, and a11y notes.
- The 9 promoted Chat molecules (`ChatMessageUser`, `ChatMessageText`, `ChatSuggestedQuestions`, `ChatResultsDisplay`, `ChatResult`, `ChatAttachmentContext`, `ChatInspirationResultMessage`, `ChatProductComparisonMessage`, `ChatProductQueryMessage`) for per-message rendering.
