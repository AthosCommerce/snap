# ChatButton

An inline chat launcher button intended to be rendered at a custom selector (e.g. inside a site's navigation) as an alternative to the Chat organism's built-in floating bubble. Shares the `ChatController` with the Chat organism — clicking it toggles the chat open/closed.

While a `ChatButton` is mounted it registers itself with the `ChatStore` (`store.registerLauncher()`), which causes the Chat organism to hide its floating bubble and suggested-question chips automatically. If the button's target selector is never found on a page, the floating bubble remains as the fallback launcher.

The `ChatButton` organism is consumed by `Templates/ChatButton` and registered in the SnapTemplates library, but it can also be rendered directly with any `ChatController`.

## Usage
```tsx
import { ChatButtonOrganism } from '@athoscommerce/snap-preact/components';

// icon only (default 'chat' icon)
<ChatButtonOrganism controller={chatController} />

// text + icon
<ChatButtonOrganism controller={chatController} content="Ask AI" />

// text only
<ChatButtonOrganism controller={chatController} content="Ask AI" icon={false} />
```

### controller
Required `ChatController`.

### content / children
Optional label content rendered inside `.ss__chat-button__content`. Omit for an icon-only button.

### icon
`IconType | Partial<IconProps> | boolean` — defaults to `'chat'`. Pass `false` for a text-only button, or an `IconProps` object for a custom icon.

### lang
`openChatButton` / `closeChatButton` entries providing the `aria-label`/`title` for the closed and open states.

## Styling
Renders a native `Button` atom (`.ss__button.ss__chat-button`) styled as a pill: white background, border and text in the theme's primary color, rounded corners, and a hover shadow. Override via the `chatButton` theme component key or `styleScript`, or pass `disableStyles` to unstyle it entirely.
