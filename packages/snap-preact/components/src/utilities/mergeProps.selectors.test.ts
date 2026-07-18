// Part of the mergeProps characterization suite: these tests pin the CURRENT behavior of the
// exported filterSelectors and sortSelectors helpers (and one end-to-end mergeProps consequence)
// ahead of a planned refactor. Expectations were derived by executing the code, not from intent.
// QUIRK comments flag behavior that is pinned as-is but looks unintended.

import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { sortSelectors, filterSelectors, mergeProps } from './mergeProps';

describe('filterSelectors last-segment matching for unnamed components', () => {
	it('does NOT match a selector for a longer component type sharing a suffix (multiselect vs treePath select)', () => {
		const selectors = {
			multiselect: {},
		};

		// the unnamed branch compares the prefix-stripped last segment EXACTLY with componentType
		// (mergeProps.ts matchSelectors() unnamed branch), so 'multiselect' no longer leaks onto
		// the unrelated type 'select' via the shared suffix.
		expect(filterSelectors(selectors, 'select')).toEqual([]);
	});

	it('does NOT apply a suffix-colliding selector end-to-end via mergeProps in templates mode', () => {
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

		// theme props declared for 'multiselect' stay on multiselect — 'select' is unaffected
		expect(props.separator).toBeUndefined();
	});

	it('still matches layer-prefixed selectors exactly ("*select", "(M)select", "*(M)select" for treePath select)', () => {
		const selectors = {
			'*select': {},
			'(M)select': {},
			'*(M)select': {},
			'*multiselect': {},
		};

		// the exact compare strips the '*'/'(M|T|D)' layer prefixes first (the previous endsWith
		// stripped them implicitly), so prefixed base/responsive selectors keep matching
		expect(filterSelectors(selectors, 'select')).toEqual(['*select', '(M)select', '*(M)select']);
	});

	it('does NOT leak the suffix for named components (exact compare when treePath has a name)', () => {
		const selectors = {
			'multiselect.foo': {},
			multiselect: {},
		};

		// Named treePaths take the exact-compare branch (mergeProps.ts matchSelectors() named branch) where the last selector segment
		// must equal componentType or componentType.componentName, so no suffix leak occurs here.
		expect(filterSelectors(selectors, 'select.foo')).toEqual([]);
	});
});

describe('filterSelectors ordered mid-path segment matching', () => {
	it('does NOT match selectors whose ancestor segments appear in the treePath in the wrong order', () => {
		const selectors = {
			'toolbar search icon': {},
		};

		// ancestor segments must match as an ordered subsequence of the treePath
		// (mergeProps.ts matchSelectors() ordered ancestor matching), so 'toolbar search icon'
		// no longer matches the reversed treePath 'search toolbar icon'.
		expect(filterSelectors(selectors, 'search toolbar icon')).toEqual([]);
	});

	it('does NOT match selectors that repeat a segment more times than it appears in the treePath', () => {
		const selectors = {
			'search search icon': {},
		};

		// each ancestor match consumes its treePath segment (cursor moves strictly forward), so a
		// duplicated selector segment requires a genuinely duplicated treePath segment.
		expect(filterSelectors(selectors, 'search icon')).toEqual([]);
	});

	it('matches a repeated selector segment when the treePath genuinely repeats it', () => {
		const selectors = {
			'carousel carousel icon': {},
		};

		expect(filterSelectors(selectors, 'carousel carousel icon')).toEqual(['carousel carousel icon']);
	});

	it('still matches in-order, non-adjacent (descendant) ancestor segments', () => {
		const selectors = {
			'search pagination icon.next': {},
		};

		// descendant semantics preserved: 'toolbar.top' between 'search' and 'pagination' is fine
		expect(filterSelectors(selectors, 'search toolbar.top pagination icon.next')).toEqual(['search pagination icon.next']);
	});

	it('does NOT let an ancestor segment match the component (final) treePath segment itself', () => {
		const selectors = {
			'select select': {},
		};

		// 'select select' means a select inside a select; ancestors may only match segments
		// BEFORE the component itself, so a single trailing 'select' cannot satisfy both.
		expect(filterSelectors(selectors, 'facet select')).toEqual([]);
	});

	it('warns in dev mode when a selector only matches under the legacy (unordered) rules', () => {
		const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

		const selectors = {
			'pagination toolbar icon': {},
		};
		expect(filterSelectors(selectors, 'toolbar pagination icon')).toEqual([]);

		expect(warnSpy).toHaveBeenCalledTimes(1);
		expect(warnSpy.mock.calls[0][0]).toContain("theme selector 'pagination toolbar icon'");
		expect(warnSpy.mock.calls[0][0]).toContain('unordered');

		// the warning is deduplicated per selector/treePath pair
		filterSelectors(selectors, 'toolbar pagination icon');
		expect(warnSpy).toHaveBeenCalledTimes(1);

		warnSpy.mockRestore();
	});
});

describe('filterSelectors with an empty treePath', () => {
	it('matches nothing (no selector last segment equals the empty component type)', () => {
		const selectors = {
			icon: {},
			pagination: {},
			'a icon': {},
		};

		// with treePath '' the componentType is ''; the exact last-segment compare
		// (mergeProps.ts matchSelectors() unnamed branch) matches no real selector — previously
		// endsWith('') was true for every key and single-segment selectors leaked through.
		expect(filterSelectors(selectors, '')).toEqual([]);
	});
});

describe('sortSelectors prefix weights', () => {
	it('sorts by layer priority: base (*) < base-responsive (*(M)) < user override < responsive user override ((M))', () => {
		const data = ['(M)select', 'select', '*(M)select', '*select'];
		const expected = ['*select', '*(M)select', 'select', '(M)select'];

		// the weight model (mergeProps.ts selectorWeight()) gives '*select' 0+, '*(M)select' 1000+,
		// 'select' 2000+, '(M)select' 3000+ — raw sort order equals the intended layer priority,
		// so ALL base selectors (responsive included) sort before any user override. The T1/T3
		// bucket split inside mergeProps no longer changes ordering; it remains only as the
		// interleaving point for the parent-theme respread.
		expect(data.sort(sortSelectors)).toEqual(expected);
	});
});

describe('sortSelectors first segment weight and stability', () => {
	it('gives a single-segment named selector (with a dot) MORE weight than its unnamed twin, in both insertion orders', () => {
		// segments are weighed 1-based ((i + 1) * 2, mergeProps.ts selectorWeight()), so the first
		// segment contributes 2 unnamed vs 4 named — 'icon.next' vs 'icon' is deterministic and no
		// longer depends on object insertion order.
		expect(['toolbar.top', 'toolbar'].sort(sortSelectors)).toEqual(['toolbar', 'toolbar.top']);
		expect(['toolbar', 'toolbar.top'].sort(sortSelectors)).toEqual(['toolbar', 'toolbar.top']);
	});
});

describe('sortSelectors with comma-separated selector keys', () => {
	it('weighs a comma-separated key by its FIRST part, tying with an identical individual selector (insertion order wins)', () => {
		const data = ['*carousel icon, *banner icon', '*icon', '*carousel icon'];
		const expected = ['*icon', '*carousel icon, *banner icon', '*carousel icon'];

		// comma keys are weighed by their first part as a representative (mergeProps.ts
		// selectorWeight()): '*carousel icon, *banner icon' weighs the same as '*carousel icon'
		// (a grouped selector no longer outranks an identical individual one); the tie keeps
		// insertion order via sort stability. The merge pipeline itself sorts comma groups by the
		// part that actually MATCHED (mergeProps.ts matchSelectors()), which is exact even when
		// parts have different depths.
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
