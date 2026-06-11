# Chat

To set up Chat using Snap, we'll need to define a chat controller in our Snap configuration. The Chat controller provides an AI-powered conversational shopping assistant that supports text queries, image search, product discussions, product comparisons, and similar product discovery.


```js
// src/index.js

import { Snap } from '@athoscommerce/snap-preact';
import { Chat } from '@athoscommerce/snap-preact/components';

const snap = new Snap({
    client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                    settings: {
                        feedbackAfterMessages: 3,
                    },
                },
                targeters: [
                    {
                        selector: 'body',
                        component: async () => {
                            return Chat;
                        },
                    },
                ],
            },
        ],
    },
});
```


## Configuration

The following settings can be configured in the `ChatControllerConfig`:

| Setting | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | `'chat'` | Controller identifier |
| `settings.feedbackAfterMessages` | `number` | `3` | Number of assistant messages before showing a session feedback prompt |
| `settings.quickview.enabled` | `boolean` | `false` | Enable the product quickview panel for chat product clicks |
| `settings.quickview.displayFields` | `string[]` | — | Fields to display in the product quickview panel |
| `settings.bgFilters` | `Record<string, string>` | — | Background filters forwarded to the chat init API as `searchConfig.bgFilters` |
| `beacon` | `{ enabled: boolean }` | `{ enabled: true }` | Enable or disable analytics tracking for chat events |
| `globals` | `Partial<ChatRequestModel>` | — | Default request parameters applied to all chat requests |
| `middleware` | `object` | — | Event middleware hooks (see [Middleware](https://athoscommerce.github.io/snap/reference-snap-preact-middleware)) |


### Add to Cart

To handle add-to-cart actions from within the chat, register an `addToCart` middleware on the controller config. The chat fires the `addToCart` event whenever `controller.addToCart()` is called from a UI component, and any registered middleware will run with `{ controller, products }`:

```js
import { Chat } from '@athoscommerce/snap-preact/components';

const snap = new Snap({
    client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                    middleware: {
                        addToCart: (data, next) => {
                            // handle adding products to the cart
                            data.products.forEach((product) => {
                                console.log('Adding to cart:', product.mappings.core.name);
                            });
                            next();
                        },
                    },
                },
                targeters: [
                    {
                        selector: 'body',
                        component: async () => {
                            return Chat;
                        },
                    },
                ],
            },
        ],
    },
});
```


## Chat Component Props

The `Chat` component accepts the following props. The `controller` prop is injected by Snap when the targeter mounts; everything else is optional and falls back to the defaults shown below.

| Prop | Type | Default | Description |
|---|---|---|---|
| `controller` | `ChatController` | — (injected) | The chat controller for this targeter. Do not set manually. |
| `logo` | `string` | `'https://cdn.athoscommerce.net/snap/images/Athos%20Commerce_Icon_white.svg'` | URL of the logo image shown in the chat header. |
| `title` | `string` | `'Athos Conversational Assistant'` | Primary header title. |
| `subtitle` | `string` | `'Your Guided Discovery Expert'` | Secondary header title. |
| `position` | `'left' \| 'right'` | `'right'` | Which side of the viewport the chat panel and launcher bubble anchor to. |
| `offset` | `string \| number` | — | Distance from the top of the viewport before the chat starts (e.g. to clear a fixed site header). A number is treated as pixels; a string is used as-is (`'80px'`, `'4rem'`, etc.). |
| `multiselectFacets` | `boolean` | `true` | When `true`, facet selections in chat are batched and applied via an "Apply" button. When `false`, each selection sends a new request immediately. |
| `disableBubbleSuggestedQuestions` | `boolean` | `false` | Hide the suggested-question chips that appear on the launcher bubble before the chat has been opened. |
| `primaryColorBg` | `string` | `'#253B80'` | Primary brand colour — background of headers, buttons, and accents. |
| `primaryColorFg` | `string` | `'#fff'` | Foreground (text/icon) colour paired with `primaryColorBg`. |
| `primaryAccentColorBg` | `string` | `'#feeeae'` | Accent colour for highlights (e.g. the add-to-cart icon background). |
| `primaryAccentColorFg` | `string` | `'#000000'` | Foreground colour paired with `primaryAccentColorBg`. |
| `secondaryAccentColorBg` | `string` | `'#000000'` | Secondary accent colour (e.g. the "Discuss Product" icon background on `ChatResult`). |
| `secondaryAccentColorFg` | `string` | `'#ffffff'` | Foreground colour paired with `secondaryAccentColorBg`. |

In addition, every prop inherited from `ComponentProps` is also accepted — most notably `className`, `style`, `styleScript`, `theme`, and `disableStyles` for styling overrides.

### Mounting at `body`

The `Chat` component is fixed-positioned and is normally mounted at the document level. When a chat targeter's `selector` is exactly `'body'` and no `inject` config is supplied, Snap automatically attaches the following `inject` so the component renders into a fresh appended `<div>` rather than replacing the body contents:

```js
inject: {
    action: 'append',
    element: () => {
        return document.createElement('div');
    },
},
```

This default is only applied when (a) the selector is the literal string `'body'` and (b) the targeter does not already define its own `inject`. Any other selector — or an explicit `inject` on a body-selector targeter — is left untouched.

### Providing props via the targeter config

Pass component props through the `props` field on the targeter object. Snap forwards them to the `Chat` component when it mounts at the configured selector:

```js
import { Chat } from '@athoscommerce/snap-preact/components';

const snap = new Snap({
    client: {
        globals: {
            siteId: 'REPLACE_WITH_YOUR_SITE_ID',
        },
    },
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                },
                targeters: [
                    {
                        selector: 'body',
                        component: async () => {
                            return Chat;
                        },
                        props: {
                            title: 'Acme Shopping Assistant',
                            subtitle: 'Ask me anything',
                            logo: 'https://acme.example.com/assets/chat-logo.svg',
                            position: 'left',
                            offset: 64,
                            multiselectFacets: false,
                            primaryColorBg: '#0f172a',
                            primaryColorFg: '#ffffff',
                            primaryAccentColorBg: '#fbbf24',
                            primaryAccentColorFg: '#0f172a',
                        },
                    },
                ],
            },
        ],
    },
});
```


## Opening the Chat Programmatically

The chat can be opened programmatically using the controller's `openChat` method or via global events. An optional initial message can be provided to immediately start a conversation. If the persisted active session has expired (older than 24 hours), `openChat` drops the user into a fresh session instead of showing the expired placeholder.

```js
// open the chat via controller
const chatController = snap.controllers.chat;
chatController.openChat();

// open with an initial message
chatController.openChat('I am looking for running shoes');
```

### Global Events

The following global events are registered on the Snap event manager and can be fired from anywhere on the page via `window.athos.fire`:

```js
// open the chat (no request fired)
window.athos.fire('chat/send');

// open the chat and send a plain text message — defaults to a 'general' request
window.athos.fire('chat/send', { message: 'Show me winter jackets' });

// open the chat and send a typed request (any MoiRequestModel variant works)
window.athos.fire('chat/send', {
    requestType: 'productSearch',
    searchTerm: 'red dress',
});

// open the chat and ask about a specific product
window.athos.fire('chat/productQuery', { result: productData });

// open the chat and find products similar to the given one (sends the request immediately)
window.athos.fire('chat/productSimilar', { result: productData });
```

All events accept an optional `controllerIds` array (string or RegExp) to target specific chat controller instances.

The `chat/send` event accepts the same discriminated union the chat backend uses — `general`, `productQuery`, `productSearch`, `productComparison`, `imageSearch`, `productSimilar`, `inspiration`, and `content`. If `requestType` is omitted and a `message` is provided, the request defaults to `general`. If neither is provided, the chat is opened without firing a request.


## Request Types

The Chat controller automatically determines the request type based on the current context (attachments, comparisons, etc.):

| Request Type | Triggered When |
|---|---|
| `general` | Default - a plain text message with no attachments |
| `imageSearch` | An image has been uploaded and attached |
| `productQuery` | A single product is attached for discussion |
| `productSimilar` | A product is attached with the "find similar" intent |
| `productComparison` | Two or more products are in the comparison set, or a committed comparison is still active |
| `productSearch` | Facet filters are selected on the active facets display |


## Tracking

The Chat controller provides tracking methods under `controller.track.product` for analytics. These are automatically invoked by the `Chat` component but can also be called manually:

```js
// track a product impression
controller.track.product.impression(result);

// track a product click-through
controller.track.product.clickThrough(event, result);

// track an add-to-cart event
controller.track.product.addToCart(result);

// track session feedback
controller.track.product.feedback('UP');
```

Tracking requires `beacon` to be enabled in the controller config:

```js
config: {
    id: 'chat',
    beacon: {
        enabled: true,
    },
}
```


## Custom Result Component

The `Chat` component renders product cards using the built-in `ChatResult` component. An implementation can supply a custom Result component to replace it (e.g. to match a host site's product card design). To preserve the behavior the default `ChatResult` provides, a custom Result needs to handle the items below.

A minimal custom Result skeleton:

```tsx
import { observer } from 'mobx-react-lite';
import { withTracking } from '@athoscommerce/snap-preact/components';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { ChatController } from '@athoscommerce/snap-controller';

interface CustomChatResultProps {
    result: Product;
    controller: ChatController;
    scrollToBottom: () => void;
    trackingRef?: (el: HTMLElement | null) => void;
}

export const CustomChatResult = withTracking(
    observer((props: CustomChatResultProps) => {
        const { result, controller, scrollToBottom, trackingRef } = props;
        const core = result.display.mappings.core;

        const isInComparison = controller.store.currentChat?.comparisons.items.some(
            (item) => item.result?.id === result.id
        );
        const isConfigurable =
            !!(result as any).variants?.optionConfig &&
            Object.keys((result as any).variants.optionConfig).length > 0;

        return (
            <div ref={trackingRef} className="custom-chat-result">
                <img src={core?.imageUrl} alt={core?.name} onLoad={scrollToBottom} />
                <div className="title">{core?.name}</div>
                <div className="price">{core?.price}</div>

                {controller.store.features.similarProducts.enabled && (
                    <button onClick={() => controller.productSimilar(result)}>Similar</button>
                )}
                <button onClick={() => controller.compareProduct(result)}>
                    {isInComparison ? 'In comparison' : 'Compare'}
                </button>
                <button onClick={() => controller.productQuery(result)}>Discuss</button>
                <button
                    onClick={() => {
                        if (isConfigurable) {
                            controller.productQuickView(result);
                            return;
                        }
                        controller.track.product.addToCart(result);
                        controller.addToCart(result);
                    }}
                >
                    {isConfigurable ? 'Configure' : 'Add to Cart'}
                </button>
            </div>
        );
    })
);
```

### Impression and click tracking with `withTracking`

Wrap the exported component in the `withTracking` HOC (`import { withTracking } from '@athoscommerce/snap-preact/components'`). It injects two behaviors:

- **Impressions** — registers an IntersectionObserver and fires `controller.track.product.impression(result)` once the card enters the viewport. The observer resets automatically when `result.responseId` changes (i.e. a new chat response), so impressions retrigger across messages.
- **Click tracking** — installs a capture-phase click listener that fires `controller.track.product.click(event, result)`. This dedupes with `track.product.clickThrough` and is forwarded to `clickThrough` only when the click lands on an `<a>` (product link).

For `withTracking` to attach its listeners, the component must accept a `trackingRef` prop and attach it (via `ref={trackingRef}`) to the root element of the card. `withTracking` passes `controller` and `result` through unchanged.

Do not call `controller.track.product.impression` or `controller.track.product.click` manually inside the card — `withTracking` handles both.

### Required props

| Prop | Type | Purpose |
|---|---|---|
| `result` | `Product` | The product to render. Used by `withTracking` to derive `responseId` and to scope click/impression calls. |
| `controller` | `ChatController` | Passed in by `Chat`; used both for action methods (below) and by `withTracking`. |
| `scrollToBottom` | `() => void` | Conditional scroll handler — call from `<img onLoad={scrollToBottom}>` so async-loading product images don't push earlier messages off-screen. |
| `trackingRef` | `(el: HTMLElement \| null) => void` | Injected by `withTracking`. Attach to the root element of the card. |

### Controller methods to wire up

Each action on the card maps to a method on the chat controller. These are required to keep parity with `ChatResult`:

| Action | Call | Notes |
|---|---|---|
| Find similar products | `controller.productSimilar(result)` | Attaches the product with the "find similar" intent and immediately sends a search request. Gate this UI with `controller.store.features.similarProducts.enabled`. |
| Discuss product / Ask about | `controller.productQuery(result)` | Attaches the product for follow-up discussion and opens the product quickview side panel. |
| Add to comparison set | `controller.compareProduct(result)` | Adds the product to the comparison set. Use `controller.store.currentChat?.comparisons.items` to detect whether the current product is already in the set and reflect that in the UI (e.g. a check icon). |
| Add to cart | `controller.addToCart(result)` + `controller.track.product.addToCart(result)` | Call both: the `track.product.addToCart` analytics call is not implied by `addToCart`. Skip the direct add-to-cart path when the product has variant options (see below). |
| Open product quickview | `controller.productQuickView(result)` | Use for configurable products before adding to cart — the user needs to pick a variant in the quickview. The default card calls this in place of `addToCart` when `result.variants?.optionConfig` is non-empty. |

A configurable product is detected via `result.variants?.optionConfig`; if it has entries, the product needs a variant selection before it can be added to the cart, so route the "Add to Cart" action through `controller.productQuickView(result)` instead.

### Feature flags

Some controls should only appear when the chat backend reports the corresponding feature is enabled:

- `controller.store.features.similarProducts.enabled` — show the "Similar" / `productSimilar` action.

If a feature is disabled, hide the control entirely rather than letting the user click it.

### Click bubbling

The Chat component wraps each card with an outer click handler that calls `controller.track.product.click(e, result)` followed by `controller.productQuickView(result)`. That outer handler skips any click whose path contains a `button`, `.ss__button`, or `<a>` element — so action buttons inside the card don't double-fire as a card click. If your custom Result uses different elements for its interactive controls, either give them one of those selectors or call `e.stopPropagation()` on their `onClick` to keep them from triggering a card-level click.


## Middleware Events

The Chat controller fires the following middleware events that can be hooked into:

| Event | Description |
|---|---|
| `init` | Fired during controller initialization; checks chat availability |
| `addToCart` | Fired when a product is added to the cart |
| `track.product.impression` | Fired when a product impression is tracked |
| `track.product.clickThrough` | Fired when a product click-through is tracked |
| `track.product.addToCart` | Fired when a product add-to-cart is tracked |
| `track.product.feedback` | Fired when session feedback is tracked |

```js
import { Chat } from '@athoscommerce/snap-preact/components';

const snap = new Snap({
    controllers: {
        chat: [
            {
                config: {
                    id: 'chat',
                    middleware: {
                        addToCart: (data, next) => {
                            console.log('Chat add to cart:', data.products);
                            next();
                        },
                    },
                },
                targeters: [
                    {
                        selector: 'body',
                        component: async () => {
                            return Chat;
                        },
                    },
                ],
            },
        ],
    },
});
```
