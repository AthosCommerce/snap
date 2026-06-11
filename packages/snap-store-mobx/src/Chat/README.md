# ChatStore
The ChatStore holds the chat session state, conversation history, attachment data, product quickview state, and the active facets display. It extends `AbstractStore` and manages one or more `ChatSessionStore` instances that represent individual chat conversations. Chat history is persisted in local storage and capped at 10 sessions (oldest pruned).

## `open` property
Boolean indicating whether the chat UI is currently open.

## `inputValue` property
The current text value of the chat input field.

## `loading` property
Boolean (inherited from `AbstractStore`) indicating whether a chat request is currently in progress.

## `chatEnabled` property
Boolean (or `null` before the status check completes) indicating whether chat is enabled for the current site. This is determined by the chat status endpoint, with the response cached in localStorage for 12 hours.

## `initChatLoading` property
Boolean indicating whether the initial chat session creation (`chatInit` API call) is in progress.

## `suggestedQuestions` property
An array of suggested question strings returned from the chat status endpoint. These can be displayed as quick-start prompts when the chat is first opened.

```tsx
const { suggestedQuestions } = controller.store;

return (
    <div class="ss__chat__suggestions">
        {suggestedQuestions.map((question) => (
            <button onClick={() => controller.search({ data: { message: question } })}>
                {question}
            </button>
        ))}
    </div>
);
```

## `welcomeMessage` property
A welcome message string returned from the chat status endpoint, displayed when the chat is first opened.

## `features` property
An object describing the features enabled for the current site, such as `imageSearch` and `similarProducts`. Returned from the chat status endpoint and can be used to conditionally show or hide UI elements.

## `currentChat` getter
Returns the current active `ChatSessionStore` instance (the entry in `chats` whose `id` matches `currentChatId`), or `undefined` if no chat session exists. Contains the full conversation history, attachments, and comparison state.

## `currentChatId` property
The id of the active `ChatSessionStore`. Persisted to localStorage so the active chat survives page reloads.

## `chats` property
An array of all `ChatSessionStore` instances. Chat history is persisted in local storage and previous conversations can be accessed here.

## `chatsIds` getter
Returns an array of chat session IDs.

## `blocked` getter
Returns `true` when the chat input should be blocked — when `loading` is true or when an image attachment is still uploading.

## `urlManager` property
A detached `UrlManager` that holds the in-progress facet selection for the active facets display. Detached so that `.go()` updates state without navigating the page.

## `facets` property
A `SearchFacetStore` reflecting the facets on the current `productSearchResult` message. Rebuilt automatically when the active message changes; selections feed the next `productSearch` request.

## `urlVersion` property
A counter that bumps on every `urlManager` state change so observers re-evaluate `isFacetSelected` (mobx can't subscribe to the underlying UrlManager directly).

## `productQuickview` property
The currently viewed product in the quickview panel, or `null` if no product quickview is open. Set via `setProductQuickview()` and cleared via `clearProductQuickview()`.

## `productQuickviewError` property
An error message string if the product quickview failed to load, or `null` otherwise.

## `error` property
An error object (inherited from `AbstractStore`) set when a chat request fails. Contains the following properties:

| Property | Type | Description |
|---|---|---|
| `type` | `'error'` \| `'warning'` | The severity of the error |
| `message` | `string` | A human-readable error message |
| `code` | `number` (optional) | HTTP status code (e.g. `429` for rate limiting, `500` for server errors) |

Session-limit-exceeded responses (`CS_003`) are flagged on `currentChat.sessionLimitReached` instead of populating `error`.

## `meta` property
Contains meta data retrieved from the Athos Meta API, stored as a `MetaStore` instance. Persisted to localStorage and used to lazily hydrate inactive sessions when the user switches chats.

## Methods

### `createChat(data?)`
Creates a new `ChatSessionStore`, sets it as the current chat, persists the new `currentChatId` to localStorage, and returns the created session. Optionally accepts an object with a `sessionId`. Old sessions beyond the 10-session cap are pruned. Resets `loading` and `error` so any in-flight request from the previous chat doesn't bleed into the new one.

```js
const chat = store.createChat();
store.createChat({ sessionId: 'abc123' });
```

### `switchChat(id)`
Switches the current active chat to the specified chat session ID and persists it to localStorage. Lazily hydrates the target session's results into `Product`/`SearchResultStore` instances on first switch.

```js
store.switchChat('session-id');
```

### `clearHistory()`
Drops all stored chat sessions except the current one. If there is no current chat, falls back to `reset()`.

### `reset()`
Clears all chat sessions and product quickview state, wipes localStorage, and creates a fresh empty chat.

### `setProductQuickview(product)`
Sets the product to display in the quickview panel. Clones the supplied `Product` so that variant selections and the parent-mappings merge done by `updateProductQuickview` only affect the quickview — the carousel and other surfaces still hold the original instance.

### `updateProductQuickview(response)`
Updates the current quickview product with parent-level data from the products API response, merging `mappings.core` and creating/updating `Variants`.

### `setProductQuickviewError(message)`
Sets an error message for the product quickview.

### `clearProductQuickview()`
Clears the product quickview, closing the panel.

### `compareProduct(result)`
Adds a product to the comparison set on the current chat session.

### `sendProductQuery(result, options)`
Attaches a product to the current chat context for discussion. The `options.requestType` determines how the product is used (`'productQuery'`, `'productSimilar'`, or `'productComparison'`). For `productQuery` it also pushes a `productQuery` message so the side-chat panel opens immediately.

### `setActiveFacets(facets, messageId)`
Resets the detached `urlManager`, seeds it with the API-reported filtered values from the message's facets, and rebuilds the root `SearchFacetStore`. Called automatically when the active message changes.

### `addFacet(facet)`
Selects a facet value on the detached `urlManager`. Accepts `{ key, value }` where `value` may be a plain string or a range encoded as `"low:high"`.

### `removeFacet(key, value)`
Removes a specific facet selection by key and value.

### `clearPendingFacets()`
Clears all selected facet filters from the detached `urlManager`.

### `isFacetSelected(key, value)`
Returns `true` if the specified facet filter is currently selected on the detached `urlManager`.

### `request(request)`
Snapshots the current facet labels and forwards the outgoing chat request to the current `ChatSessionStore` so it can render the user-facing message text. Called internally before a search.

### `update(data)`
Updates the store with a chat API response. Hydrates results into `Product`/`SearchResultStore` instances, refreshes `meta`, and appends the assistant message(s) to the current session's conversation history.

### `handleChatStatusResponse(response)`
Processes the chat status response. Sets `chatEnabled`, `suggestedQuestions`, `welcomeMessage`, and `features`, and persists the response (with a timestamp) to localStorage so it can be reused for 12 hours. Returns a boolean indicating whether chat is enabled.

## ChatSessionStore

Each chat session is represented by a `ChatSessionStore` instance, accessible via `store.currentChat` or from the `store.chats` array. Key properties include:

| Property | Description |
|---|---|
| `id` | Local identifier (uuid) for the session — used as the storage key and for `currentChatId` |
| `sessionId` | The unique session identifier assigned by the API (`chatInit` response) |
| `chat` | Array of message objects (user, assistant, and `productQuery` placeholder messages) in the conversation |
| `actions` | Suggested follow-up actions returned with the most recent assistant response |
| `requestType` | Request type of the most recent outgoing message |
| `activeMessage` (getter) | Currently displayed assistant message — honors the `activeMessageId` override and skips `topicDrift` / `productAnswer` |
| `activeMessageId` | Override id used when the user navigates back to a historical message |
| `dismissedSideChatMessageId` | Id of a message whose side-chat panel the user has explicitly dismissed |
| `attachments` | `ChatAttachmentStore` managing image, product, and facet attachments |
| `comparisons` | `ChatCompareStore` managing the in-progress and committed product comparison sets |
| `sessionFeedback` | Session-level feedback object with a `rating` of `'UP'` or `'DOWN'` |
| `feedbackJustGiven` | Boolean flag set after feedback is submitted (drives the brief "thank you" UI) |
| `feedbackDismissed` | Boolean flag set when the feedback prompt is dismissed |
| `sessionLimitReached` | Boolean flag set when the API rejects a request with `CS_003` |
| `hydrated` | Boolean indicating whether stored results have been re-wrapped as `Product` / `SearchResultStore` instances |
| `createdAt` | When the session was created — used to prune oldest stored sessions |
| `sessionEndTime` | Server-provided session expiration time, returned by `chatInit` |
| `isExpired` (getter) | `true` when the current time is past `sessionEndTime` (falls back to 24 hours after `createdAt` for sessions persisted before this field existed) |
| `topicDrift` (getter) | The trailing `topicDrift` message if the assistant flagged the last message as off-topic |

### `save()`
Persists the current session state to local storage on a debounced timer (multiple calls within the same tick are coalesced into a single write).

### `saveImmediate()`
Synchronously persists the current session state to local storage, cancelling any pending debounced save.

### `pushProductQueryMessage(result)`
Adds a `productQuery` placeholder message to the conversation for the given product so the side-chat panel opens immediately. Captures the previously-active message id so `popProductQueryMessage` can restore it.

### `popProductQueryMessage(restoreActiveMessageId?)`
Removes any trailing `productQuery` placeholder messages and optionally restores a prior active message id (used when the user backs out of the product detail panel).

### `setActiveMessage(id)`
Pins the displayed side-chat message to the message with the given id and clears any side-chat dismissal.

### `dismissSideChat()`
Dismisses the side chat panel (used for `productQuery`/`productAnswer`/`productComparison` views) by recording the current active message id in `dismissedSideChatMessageId`.

### `dismissTopicDrift()`
Removes any `topicDrift` messages from the conversation.

### `handleTopicDrift()`
Removes any `topicDrift` messages and the user message that triggered the drift, returning the original user message text so the caller can re-prompt or restore it to the input.

### `request(request, filterLabels?)`
Appends a user message to the conversation for the outgoing request, activating any matching attachments and committing comparison products as needed. The optional `filterLabels` map supplies human-readable facet labels for `productSearch` requests.

### `update(data)`
Hydrates results in the chat response into `Product` / `SearchResultStore` instances and appends the assistant message(s) to the conversation, then persists.

### `hydrateResults(meta)`
Re-wraps raw stored results in this session as `Product` / `SearchResultStore` instances using the supplied meta. Called lazily by `ChatStore.switchChat` when an inactive session is opened.

### `reset()`
Clears the conversation, attachments, actions, and feedback on this session.

### `ChatSessionStore.pruneStoredSessions(storage, maxSessions = 10)` (static)
Removes the oldest stored sessions when the count in storage exceeds `maxSessions`. Called by `ChatStore.createChat` before adding a new session.
