// Part of the mergeProps characterization suite: these tests pin the CURRENT behavior of the
// exported filterSelectors and sortSelectors helpers (and one end-to-end mergeProps consequence)
// ahead of a planned refactor. Expectations were derived by executing the code, not from intent.
// QUIRK comments flag behavior that is pinned as-is but looks unintended.

import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { sortSelectors, filterSelectors, mergeProps } from './mergeProps';

describe('filterSelectors suffix matching for unnamed components', () => {
	it('matches a selector for a longer component type sharing a suffix (multiselect matches treePath select)', () => {
		const selectors = {
			multiselect: {},
		};

		// QUIRK: for unnamed components filterSelectors compares with key.endsWith(componentType) (mergeProps.ts:310),
		// so the selector 'multiselect' matches the unrelated component type 'select' purely because of the shared suffix.
		expect(filterSelectors(selectors, 'select')).toEqual(['multiselect']);
	});

	it('applies suffix-leaked selector props end-to-end via mergeProps in templates mode', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				multiselect: {
					separator: 'm',
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {};
		// @ts-ignore - globalTheme components keyed by a different component type
		const props = mergeProps(componentType, globalTheme as Theme, defaultProps, properties);

		// QUIRK: because of the endsWith suffix match (mergeProps.ts:310), theme props declared for
		// 'multiselect' are merged into a 'select' component, so 'select' receives separator 'm'.
		expect(props.separator).toBe('m');
	});

	it('does NOT leak the suffix for named components (exact compare when treePath has a name)', () => {
		const selectors = {
			'multiselect.foo': {},
			multiselect: {},
		};

		// Named treePaths take the exact-compare branch (mergeProps.ts:305) where the last selector segment
		// must equal componentType or componentType.componentName, so no suffix leak occurs here.
		expect(filterSelectors(selectors, 'select.foo')).toEqual([]);
	});
});

describe('filterSelectors mid-path segment matching', () => {
	it('matches selectors whose mid-path segments appear in the treePath in ANY order', () => {
		const selectors = {
			'toolbar search icon': {},
		};

		// QUIRK: each mid-path segment is searched independently — prevIndex is re-declared as -1 on every
		// iteration (mergeProps.ts:323-340) and is assigned the segment index `s` rather than the treePath
		// index `i`, so the loop always scans from 0 and no left-to-right ordering is enforced. The selector
		// 'toolbar search icon' matches the treePath 'search toolbar icon' despite the reversed parent order.
		expect(filterSelectors(selectors, 'search toolbar icon')).toEqual(['toolbar search icon']);
	});

	it('matches selectors that repeat the same segment more times than it appears in the treePath', () => {
		const selectors = {
			'search search icon': {},
		};

		// QUIRK: because segments are matched independently with no adjacency or consumption tracking
		// (mergeProps.ts:323-340), both 'search' segments match the single 'search' entry in the treePath.
		expect(filterSelectors(selectors, 'search icon')).toEqual(['search search icon']);
	});
});

describe('filterSelectors with an empty treePath', () => {
	it('matches every single-segment selector and rejects multi-segment selectors', () => {
		const selectors = {
			icon: {},
			pagination: {},
			'a icon': {},
		};

		// With treePath '' the componentType is '' so key.endsWith('') is true for every selector
		// (mergeProps.ts:310); single-segment selectors then pass (no mid-path segments to check), while
		// 'a icon' fails because segment 'a' is not found in the empty treePath.
		expect(filterSelectors(selectors, '')).toEqual(['icon', 'pagination']);
	});
});

describe('sortSelectors prefix weights', () => {
	it('sorts base-responsive (*(M)) selectors AFTER plain user override selectors', () => {
		const data = ['(M)select', 'select', '*(M)select', '*select'];
		const expected = ['*select', 'select', '*(M)select', '(M)select'];

		// QUIRK: the weight formula (mergeProps.ts:256-267) gives '*select' 0, 'select' 1000, '*(M)select' 2000,
		// and '(M)select' 3000, so the base-responsive selector '*(M)select' sorts AFTER the plain user override
		// 'select' — raw sort order alone would let base theme responsive props beat user overrides. Only the
		// base/override bucket split inside mergeProps (mergeProps.ts:80-81) rescues the intended priority for
		// globalTheme.components; step 4 for props.theme.components (mergeProps.ts:154) has no such split.
		expect(data.sort(sortSelectors)).toEqual(expected);
	});
});

describe('sortSelectors first segment weight and stability', () => {
	it('gives single-segment named selectors (with a dot) the same weight as unnamed ones, preserving insertion order', () => {
		// The first segment contributes (0 * 2) ** n === 0 regardless of whether it contains a '.'
		// (mergeProps.ts:259), so 'toolbar.top' and 'toolbar' weigh the same (1000 each) and the
		// comparator returns 0 — Array.prototype.sort stability keeps whichever order they arrived in.
		expect(['toolbar.top', 'toolbar'].sort(sortSelectors)).toEqual(['toolbar.top', 'toolbar']);
		expect(['toolbar', 'toolbar.top'].sort(sortSelectors)).toEqual(['toolbar', 'toolbar.top']);
	});
});

describe('sortSelectors with comma-separated selector keys', () => {
	it('weighs a comma-separated key as one long space-split string, sorting it after its individual parts', () => {
		const data = ['*carousel icon, *banner icon', '*icon', '*carousel icon'];
		const expected = ['*icon', '*carousel icon', '*carousel icon, *banner icon'];

		// sortSelectors has no comma handling — '*carousel icon, *banner icon' splits on spaces into four
		// segments ('*carousel', 'icon,', '*banner', 'icon') weighing 0 + 2 + 4 + 6 = 12 (mergeProps.ts:256-267),
		// so the combined key sorts after '*carousel icon' (weight 2) even though it targets the same components.
		expect(data.sort(sortSelectors)).toEqual(expected);
	});
});

describe('filterSelectors comma-separated selector formats', () => {
	it('matches a comma-separated key without a space after the comma and returns the original key', () => {
		const selectors = {
			'select,button': {},
		};

		expect(filterSelectors(selectors, 'button')).toEqual(['select,button']);
	});

	it('matches a comma-separated key with a space after the comma and returns the original key', () => {
		const selectors = {
			'select, button': {},
		};

		expect(filterSelectors(selectors, 'button')).toEqual(['select, button']);
	});
});
