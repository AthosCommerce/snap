// .storybook/preserveArgTypesOrder.ts
//
// Storybook's built-in `inferArgTypes` enhancer derives argTypes from a story's `args` and merges
// them *ahead* of the ones declared in the story file:
//
//   combineParameters(<types inferred from initialArgs>, <declared argTypes>)
//
// Since `controls.sort` defaults to `'none'` (meaning "key insertion order"), any prop referenced
// by the story's `args` silently jumps to the top of the Controls panel and the docs args table.
// That's why BadgeImage rendered as label/tag/url despite declaring tag/url/label, while Price —
// whose only `Default` arg declares `type: { required: true }` — happened to keep its order.
//
// `inferArgTypes` skips keys that already declare a top-level `type`, so this enhancer fills that
// in first (it runs before the built-ins, having no `secondPass` flag). The inferred type is the
// same one the built-in would have produced, so controls and the docs table are unaffected — only
// the ordering changes, leaving the story file's argTypes order authoritative.
//
// Any arg without a declared argTypes entry has no declared position, so it is appended last.

import type { ArgTypesEnhancer, SBType, StrictArgTypes } from 'storybook/internal/types';

// Mirrors the built-in `inferType`, but does not recurse into objects and arrays. The nested value
// only feeds the docs table's type summary, which every argType here overrides via `table.type`,
// and skipping the walk avoids dragging controllers and stores into a deep traversal.
function inferType(value: unknown): SBType {
	const type = typeof value;

	switch (type) {
		case 'boolean':
		case 'string':
		case 'number':
		case 'function':
		case 'symbol':
			return { name: type };
		default:
			break;
	}

	if (Array.isArray(value)) {
		return { name: 'array', value: { name: 'other', value: 'unknown' } };
	}

	return { name: 'object', value: {} };
}

export const preserveArgTypesOrder: ArgTypesEnhancer = ({ argTypes, initialArgs = {} }) => {
	const ordered: StrictArgTypes = {};

	Object.entries(argTypes).forEach(([key, argType]) => {
		ordered[key] = argType.type || !(key in initialArgs) ? argType : { ...argType, type: inferType(initialArgs[key]) };
	});

	Object.entries(initialArgs).forEach(([key, arg]) => {
		if (!(key in ordered)) {
			ordered[key] = { name: key, type: inferType(arg) };
		}
	});

	return ordered;
};
