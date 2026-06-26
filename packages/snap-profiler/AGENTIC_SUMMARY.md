# snap-profiler — Agentic Summary

## Purpose
A lightweight performance-timing utility that records how long operations take to complete. It is available on every Snap controller via `controller.profiler` and is used to measure API response times, component render times, and middleware execution times.

## Public Exports

| Export | Kind | Description |
|--------|------|-------------|
| `Profiler` | class | Creates and manages a collection of `Profile` instances for a given namespace |

> Note: `Profile`, `ProfileDetails`, and `ProfileTime` are defined in `src/Profiler.ts` but are **not exported** from the package. `Profile` instances are obtained exclusively via `Profiler.create()`.

## Key Type Contracts

```typescript
// Internal type used as argument to Profiler.create()
type ProfileDetails<T> = { type: string; name: string; context: T };

// Shape of the time object on every Profile instance
type ProfileTime = {
  date: number;   // Date.now() snapshot at start()
  begin: number;  // window.performance.now() at start()
  end: number;    // window.performance.now() at stop()
  run: number;    // elapsed milliseconds (end - begin), 3 decimal places
};

// Public surface of the Profile object returned by Profiler.create()
// (class is not exported, but instances are the primary value returned)
class Profile<T> {
  namespace: string;
  type: string;
  name: string;
  context: T;
  status: 'pending' | 'started' | 'finished';
  time: ProfileTime;

  start(): Profile<T>;
  stop(): Profile<T>;
}

// Profiler constructor and methods
class Profiler {
  namespace: string;
  profiles: Profile<any>[];

  constructor(namespace?: string);
  setNamespace(namespace: string): void;
  create<T>(details: ProfileDetails<T>): Profile<T>;
}
```

## Minimal Working Example

```typescript
import { Profiler } from '@athoscommerce/snap-profiler';

const profiler = new Profiler('myApp');

const profile = profiler.create({
  type: 'event',
  name: 'search',
  context: { query: 'shoes' },
});

profile.start();
// ... code to measure ...
profile.stop();

console.log(`Elapsed: ${profile.time.run}ms`);
// Use controller.log.profile(profile) for structured output via snap-logger
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-profiler/src/index.ts` (re-exports from `./Profiler`)
- Full implementation: `packages/snap-profiler/src/Profiler.ts`
- `Profile` and `ProfileDetails` and `ProfileTime` are **internal** — not exported from the package index
- `Profiler.setNamespace()` is a no-op if namespace was already set (idempotent, first-write-wins)
- `Profile.start()` and `Profile.stop()` are also idempotent — repeated calls after the first are ignored
- Requires `window.performance` — browser environment only (no Node.js support)
- Typically consumed indirectly via `controller.profiler` on any Snap controller

## README Fixes Applied
None
