// is-plain-object's package.json "exports" omits a "types" condition, so its declarations
// cannot be resolved under exports-respecting module resolution
declare module 'is-plain-object' {
	export function isPlainObject(o: any): boolean;
}
