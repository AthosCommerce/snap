# ChatButton (Template)

Thin template wrapper around the `ChatButton` organism — an inline chat launcher rendered at a custom selector as an alternative to the Chat organism's floating bubble. Registered in the SnapTemplates library under the `chat` type so it can be used as a chat target component.

See the `Organisms/ChatButton` readme for props and behavior.

## Usage
```tsx
import { ChatButton } from '@athoscommerce/snap-preact/components';

<ChatButton controller={chatController} content="Ask AI" />
```

Snap config usage (second targeter sharing the chat controller):
```ts
chat: [
	{
		config: { id: 'chat', ... },
		targeters: [
			{
				selector: '.my-nav',
				component: async () => (await import('@athoscommerce/snap-preact/components')).ChatButton,
				props: { content: 'Ask AI' },
			},
			{
				selector: 'body',
				component: async () => (await import('@athoscommerce/snap-preact/components')).Chat,
			},
		],
	},
],
```
