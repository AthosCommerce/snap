# snap-event-manager — Agentic Summary

## Purpose
A lightweight middleware-based event bus used by Snap controllers to attach and fire named events. It enables ordered, async middleware chains with support for cancellation via returning `false`.

## Public Exports

| Export | Kind | Description |
|--------|------|-------------|
| `EventManager` | class | The main event bus — manages named events and their middleware stacks. Used via `controller.eventManager`. |
| `Next` | type | `() => void \| Promise<void>` — the `next` function passed to each middleware to advance the chain. |
| `Middleware<T>` | type | `(context: T, next: Next) => Promise<boolean \| void> \| boolean \| void` — a single middleware handler. Returning `false` cancels the chain. |
| `Callback` | type | `(cancel: boolean \| void) => void` — internal callback type used by `MiddlewareManager.dispatch`. |

## Key Type Contracts

```typescript
export type Next = () => void | Promise<void>;

export type Middleware<T> = (context: T, next: Next) => Promise<boolean | void> | boolean | void;

export type Callback = (cancel: boolean | void) => void;

class EventManager {
  public events: Record<string, MiddlewareManager<any>>;
  constructor();
  on<T>(event: string, ...func: Middleware<T>[]): void;
  async fire<T>(event: string, context?: T): Promise<void>;
}
```

## Minimal Working Example

```typescript
import { EventManager } from '@athoscommerce/snap-event-manager';

const eventManager = new EventManager();

// Attach middleware to an event
eventManager.on('search', async (context, next) => {
  console.log('before search', context);
  await next();
  console.log('after search');
});

// Fire the event with context data
await eventManager.fire('search', { query: 'shoes' });

// Return false to cancel remaining middleware
eventManager.on('search', async (context, next) => {
  if (!context.query) return false; // cancels — throws Error('cancelled')
  await next();
});
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-event-manager/src/index.ts`
- Implementation: `packages/snap-event-manager/src/EventManager.ts`, `packages/snap-event-manager/src/MiddlewareManager.ts`
- Types: `packages/snap-event-manager/src/types.ts`
- `MiddlewareManager` is an internal class (not exported from index.ts) but powers the per-event middleware stack; its `dispatch` method throws `Error('cancelled')` when any middleware returns `false`.
- `EventManager` is typically consumed as `controller.eventManager` on any Snap controller rather than instantiated directly.
- No peer dependencies beyond TypeScript types.

## README Fixes Applied
None — the README accurately describes the `on` and `fire` public methods and middleware execution order. The exported utility types (`Next`, `Middleware`, `Callback`) are not documented in the README but their absence is not an inaccuracy.
