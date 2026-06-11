# Chat

The full conversational-search experience. Renders the chat bubble, expanded primary panel (message thread + composer), and the secondary side-chat panel that displays inspiration sections, product comparisons, and product detail views. On mobile the secondary panel is a swipe-to-dismiss sheet anchored above the composer.

The `Chat` organism is consumed by `Templates/Chat` and registered automatically in the SnapTemplates library, but it can also be rendered directly with any `ChatController`.

## Sub-components
- ChatMessageUser
- ChatMessageText
- ChatSuggestedQuestions
- ChatAttachmentContext
- ChatLoadingIndicator
- ChatInspirationResultMessage
- ChatProductComparisonMessage
- ChatProductQueryMessage
- Button, Image, Icon, Overlay, Dropdown, FacetSlider

## Usage
```tsx
import { Chat } from '@athoscommerce/snap-preact/components';

<Chat controller={chatController} />
```

### controller
Required `ChatController`. Drives all messages, attachments, side-chat state, file upload, and Add-to-Cart / Similar / Compare actions.

### logo, title, subtitle
Header content. Defaults: Athos Commerce logo + "Athos Conversational Assistant" + "Your Guided Discovery Expert".

### position
`'left'` or `'right'`. Anchors the bubble and the expanded panel to that side of the viewport. Defaults to `'right'`.

### offset
Optional horizontal-anchor offset. Accepts a CSS length or a number (treated as px).

### multiselectFacets
When true (default), facets in the chat footer batch their changes behind an "Apply" button. When false, each facet toggle re-runs the search immediately.

### disableBubbleSuggestedQuestions
When true, the suggested-question chips don't render above the chat bubble while the panel is closed. Defaults to true on mobile.

### primaryColorBg, primaryColorFg, primaryAccentColorBg, primaryAccentColorFg, secondaryAccentColorBg, secondaryAccentColorFg
Templates-legal color tokens. Drive the bubble background, header strip, user-message bubble, Add-to-Cart button, and Compare / Similar buttons respectively. All defaults match the Athos brand.

## Accessibility

- The chat bubble is a real `<button>` with `aria-label` and `aria-expanded`.
- The message list is `role="log"` + `aria-live="polite"` + `aria-relevant="additions"` so new messages are announced.
- The secondary panel is `role="region"` with `aria-label="Conversation details"`.
- Pressing **Escape** when the chat is open dismisses the side-chat first (if visible), then closes the panel.
- Promoted molecules each enforce their own a11y rules (variant swatches as radios, query pills as buttons, etc.).

## Customization

Per-instance overrides go via props. Theme-wide overrides go via the `chat` key in your theme:

```ts
{
  theme: {
    components: {
      chat: {
        position: 'left',
        offset: '40px',
        primaryColorBg: '#1e293b',
      }
    }
  }
}
```
