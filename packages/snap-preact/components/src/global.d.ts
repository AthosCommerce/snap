// is-plain-object's package.json "exports" omits a "types" condition, so its declarations
// cannot be resolved under exports-respecting module resolution
declare module 'is-plain-object' {
	export function isPlainObject(o: any): boolean;
}

export {};

declare global {
	// ambient declaration for the bundler-substituted NODE_ENV check in mergeProps.ts;
	// intentionally narrow rather than pulling in @types/node for this browser package
	// eslint-disable-next-line no-var
	var process: { env: { NODE_ENV?: string } } | undefined;
}
