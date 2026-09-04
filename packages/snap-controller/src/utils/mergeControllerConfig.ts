import deepmerge from 'deepmerge';

// the `Attachments` fields consumed by `AbstractController.use()`, structurally typed so this utility
// does not need to import the controller config types
type ControllerAttachments = {
	plugins?: unknown;
	middleware?: unknown;
};

/*
	Merges a controller's default config with the provided config, preserving the `Attachments` fields
	by reference.

	`plugins` and `middleware` hold functions and, in the case of plugin groupings, the arguments those
	functions are called with. deepmerge deep-clones anything it considers mergeable, which includes class
	instances - a store passed to a plugin as an argument would come out the other side as a plain object
	with its prototype (and therefore all of its methods) stripped. The controller then hands that broken
	clone to the plugin via `use()`, so preserve these two by reference instead of merging them.
*/
export function mergeControllerConfig<T extends object>(defaultConfig: Partial<T>, config: T): T {
	const merged = deepmerge(defaultConfig, config) as T;

	const source = config as ControllerAttachments | undefined;
	const target = merged as ControllerAttachments;

	if (source?.plugins) {
		target.plugins = source.plugins;
	}

	if (source?.middleware) {
		target.middleware = source.middleware;
	}

	return merged;
}
