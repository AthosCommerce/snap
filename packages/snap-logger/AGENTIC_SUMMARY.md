# snap-logger — Agentic Summary

## Purpose
Provides structured, mode-aware console logging for Snap SDK controllers. Supports colored/emoji-prefixed output with separate log levels and suppresses development-only logs in production mode.

## Public Exports

| Export | Kind | Description |
|--------|------|-------------|
| `Logger` | class | Main logging class; instantiated per controller, exposed as `controller.log` |
| `LoggerConfig` | type | Constructor config: optional `prefix` string and `mode` |
| `colors` | const | Object of named hex color strings used for styled console output |
| `emoji` | const | Object of named emoji characters used for styled console output |

## Key Type Contracts

```typescript
type LoggerConfig = {
  prefix?: string;
  mode?: keyof typeof AppMode | AppMode; // 'production' | 'development'
};

// AppMode from @athoscommerce/snap-toolbox
// enum AppMode { production = 'production', development = 'development' }

class Logger {
  public emoji: typeof emoji;
  public colors: typeof colors;

  constructor(config?: LoggerConfig);

  public setNamespace(group: string): void;

  public error(...params: any[]): void;
  public warn(...params: any[]): void;
  public dev(...params: any[]): void;
  public debug(...params: any[]): void;
  public image({ url, width, height }: { url: string; width: number | string; height: number | string }, ...params: any[]): void;
  public imageText({ url, text, style }: { url: string; text: string; style: string }, ...params: any[]): void;
  public profile(profile: any, ...params: any[]): void;
}
```

## Minimal Working Example

```typescript
import { Logger } from '@athoscommerce/snap-logger';

const log = new Logger({ prefix: 'my-controller', mode: 'development' });

log.error('Something went wrong');
log.warn('Heads up');
log.dev('Only visible in development mode');
log.debug('Debug info');
log.image({ url: 'https://example.com/img.png', width: '30px', height: '30px' });
log.imageText({ url: 'https://example.com/img.png', text: 'label', style: 'color: blue;' });

// Use built-in colors and emoji
log.dev(`%c ${log.emoji.vortex} %cMessage`, `color: ${log.colors.blue};`, `color: ${log.colors.bluegreen};`);
```

## Notes for MCP Retrieval
- Authoritative source: `packages/snap-logger/src/index.ts`
- Logger class and LoggerConfig type: `packages/snap-logger/src/Logger.ts`
- Color constants: `packages/snap-logger/src/colors.ts`
- Emoji constants: `packages/snap-logger/src/emoji.ts`
- `mode` values come from `AppMode` enum in `@athoscommerce/snap-toolbox` (peer dependency)
- `dev`, `debug`, `image`, `imageText`, and `profile` methods are suppressed when mode is `production`
- `error` and `warn` always log regardless of mode
- `setNamespace(group)` overrides the prefix — not documented in README but is a public method

## README Fixes Applied
None — the README accurately describes all documented methods, the emoji list, and the colors map.
