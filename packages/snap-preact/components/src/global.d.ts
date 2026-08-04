// `process.env.NODE_ENV` is substituted by bundlers at build time; `process` does not exist at runtime
declare const process: { env: { NODE_ENV?: string } };

// is-plain-object's package.json "exports" omits a "types" condition, so its declarations
// cannot be resolved under exports-respecting module resolution
declare module 'is-plain-object' {
	export function isPlainObject(o: any): boolean;
}
