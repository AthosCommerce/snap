# ChatController

The `ChatController` is used for the AI-powered conversational shopping assistant. It manages chat sessions, image uploads, product discussions, product comparisons, and similar product discovery.

## ChatControllerConfig

| option | description | default value | required | 
|---|---|:---:|:---:|
| id | unique identifier for this controller | `'chat'` | ✔️ |
| globals | keys defined here will be passed to the chat API request | ➖ |   |
| settings.feedbackAfterMessages | number of assistant messages before showing a session feedback prompt | `3` |   |
| settings.quickview.enabled | enable the product quickview panel for chat product clicks | `false` |   |
| settings.quickview.displayFields | array of field names to display in the product quickview panel | ➖ |   |
| settings.bgFilters | `Record<string, string>` of background filters forwarded to the chat init API as `searchConfig.bgFilters` | ➖ |   |
| beacon.enabled | enable or disable analytics tracking for chat events | `true` |   |

## Initialize
The `init` method is called automatically during construction. It checks the chat status (cached in localStorage for 12 hours) to determine if chat is enabled for the current site and to populate `suggestedQuestions`, `welcomeMessage`, and `features`.

```js
chatController.init();
```

## Search
Sends a chat message. The request is constructed from the current input value, attached images, attached products, active comparisons, and any selected facet filters on the active facets display. The request type is automatically determined based on context. The input value is HTML-stripped at submit time to prevent tag injection in both the API request and the rendered user message.

```js
chatController.search();

// with request overrides
chatController.search({ data: { message: 'Find me blue shoes' } });
```

## Upload
Uploads image files for visual search. Accepts a `FileList` from a file input element. Uploading an image starts a fresh context — clearing in-progress and committed comparisons and dismissing any product-related side chat.

```js
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', (e) => {
    chatController.upload(e.target.files);
});
```

## ProductQuickView
Pushes a `productQuery` message into the side-chat panel and opens a product quickview within the chat. Fetches full product data from the products API. Drops any prior `productQuery` attachment for a different product so the previous discussion target doesn't remain alongside the newly focused product.

`productQuickView` is a no-op unless `settings.quickview.enabled` is `true`.

```js
chatController.productQuickView(result);
```

## ProductQuery
Attaches a product to the chat context for follow-up discussion and opens the product quickview. Any in-progress or committed comparison set is discarded so the new single-product flow starts cleanly.

```js
chatController.productQuery(result);
```

## ProductSimilar
Attaches a product with the "find similar" intent and immediately sends a search request. Any in-progress or committed comparison set is discarded first.

```js
chatController.productSimilar(result);
```

## CompareProduct
Adds a product to the comparison set. When two or more products are in the comparison set, the next search will be sent as a `productComparison` request. Calling this also clears any prior `productQuery` attachments and dismisses an active productQuery/productAnswer/productComparison side chat so the new comparison starts cleanly.

```js
chatController.compareProduct(result1);
chatController.compareProduct(result2);
// next search() call will compare these products
```

## OpenChat
Opens the chat UI. Optionally accepts an initial message to start a conversation immediately. With no message, a new chat session is created if none exists and the input is focused. If the persisted active session has expired (past the `sessionEndTime` returned by `chatInit`) a fresh session is created so the user lands in a usable chat rather than the expired placeholder. Also exposed as the global event `chat/send` (fire via `window.athos.fire('chat/send', { message })`).

```js
chatController.openChat();

// open with an initial message
chatController.openChat('I am looking for running shoes');
```

## AddToCart
Triggers the add-to-cart flow for one or more products. Fires the `addToCart` event so any registered middleware can react to it (no event is fired when the products array is empty). Takes a single Product or an array of Products as a parameter.

```js
chatController.addToCart(result);
chatController.addToCart([result1, result2]);
```

To run custom logic on add-to-cart (e.g. forward to a host cart), register an `addToCart` middleware on the controller config:

```js
{
    config: {
        id: 'chat',
        middleware: {
            addToCart: (data, next) => {
                console.log('chat add to cart!', data.products);
                next();
            },
        },
    },
}
```

## HandleFeedback
Records session-level feedback on the current chat. Accepts `'UP'` or `'DOWN'`. Fires the `track.product.feedback` event and automatically dismisses the feedback prompt after 3 seconds.

```js
chatController.handleFeedback('UP');
```

## Request Types

The controller automatically determines the request type based on the current context:

| Request Type | Triggered When |
|---|---|
| `general` | Default — a plain text message with no attachments |
| `imageSearch` | An image has been uploaded and attached |
| `productQuery` | A single product is attached for discussion |
| `productSimilar` | A product is attached with the "find similar" intent |
| `productComparison` | Two or more products are in the comparison set, or a committed comparison is still active |
| `productSearch` | Facet filters are selected on the active facets display |

## Events

### init
- Called with `eventData` = { controller }
- Done once automatically during construction — checks chat availability

### addToCart
- Called with `eventData` = { controller, products }
- Always invoked after `addToCart()` method has been invoked

### track.product.impression
- Called with `eventData` = { controller, product, trackEvent }
- Always invoked after `track.product.impression()` method has been invoked

### track.product.clickThrough
- Called with `eventData` = { controller, event, product, trackEvent }
- Always invoked after `track.product.clickThrough()` is called
- `track.product.click()` only forwards to `clickThrough` when the click event lands within a product link (deduplicated via a short timeout)

### track.product.addToCart
- Called with `eventData` = { controller, product, trackEvent }
- Always invoked after `track.product.addToCart()` method has been invoked

### track.product.feedback
- Called with `eventData` = { controller, trackEvent }
- Always invoked after `track.product.feedback()` method has been invoked (no-op if there is no current chat sessionId)
