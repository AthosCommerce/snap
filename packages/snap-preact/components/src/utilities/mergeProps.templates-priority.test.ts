// Part of the mergeProps characterization suite pinning CURRENT behavior ahead of a planned refactor.
// Scope: templates branch — selector priority semantics, the parent-theme respread (step 2), and
// comma-separated selectors end-to-end (applyGlobalBaseSelectors through applyParentThemeSelectors in mergeProps.ts).
// QUIRK comments flag behavior that is pinned as-is but looks unintended; the refactor is verified
// against these tests, so they assert what the code DOES, not what it should do.

import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps templates - parent theme respread (step 2) provenance matching', () => {
	it('does NOT respread a passed boolean prop whose value merely collides with an UNRELATED parent map value: child base theme wins', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { visible: false, icon: 'ban' },
			},
		};
		// parent theme map tracks 'startOpen' -> true; the child receives 'visible: true' as a
		// directly passed prop — a different key that merely shares the value `true`
		const parentThemePropsMap = new Map<string, any>([['startOpen', true]]);
		const properties = {
			visible: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps('icon', globalTheme as Theme, {}, properties);

		// respreadParentThemeDerivedProps() only respreads on a same-key match, or a cross-key
		// match for strings/objects (renamed-prop forwarding). Booleans never match cross-key,
		// so `visible: true` is NOT treated as theme-derived and the child base theme wins.
		expect((props as any).visible).toBe(false);
		expect((props as any).icon).toBe('ban');
	});

	it('respreads a passed boolean prop on a same-key match, beating the child base theme', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { visible: false, icon: 'ban' },
			},
		};
		// parent theme map tracks 'visible' -> true: same key AND identical value as the passed prop
		const parentThemePropsMap = new Map<string, any>([['visible', true]]);
		const properties = {
			visible: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps('icon', globalTheme as Theme, {}, properties);

		// same-key matching works for every value type, including booleans
		expect((props as any).visible).toBe(true);
		expect((props as any).icon).toBe('ban');
	});

	it('does NOT respread a passed number prop whose value collides cross-key with a parent map value: child base theme wins', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { limit: 10 },
			},
		};
		// parent map tracks 'columns' -> 3; the child receives 'limit: 3' — number collision under a different key
		const parentThemePropsMap = new Map<string, any>([['columns', 3]]);
		const properties = {
			limit: 3,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps('select', globalTheme as Theme, {}, properties);

		// numbers never match cross-key, so the child base theme's limit wins
		expect((props as any).limit).toBe(10);
	});

	it('respreads a passed string prop on a cross-key identity match (renamed-prop forwarding), beating the child base theme', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*overlay': { color: 'blue' },
			},
		};
		// mirrors Slideout forwarding its theme-derived overlayColor to Overlay as `color`:
		// the parent map key is 'overlayColor' but the child receives the value under 'color'
		const parentThemePropsMap = new Map<string, any>([['overlayColor', 'red']]);
		const properties = {
			color: 'red',
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps('overlay', globalTheme as Theme, {}, properties);

		// strings keep cross-key matching so renamed forwards stay theme-derived
		expect((props as any).color).toBe('red');
	});

	it('base theme beats the same directly-passed prop when no parent theme map is present (counterpart to the value-only respread)', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { visible: false, icon: 'ban' },
			},
		};
		const properties = {
			visible: true,
		};

		// @ts-ignore
		const props = mergeProps('icon', globalTheme, {}, properties);

		// same call as above minus the parent theme map: without a value collision to trigger the
		// respread at mergeProps.ts respreadParentThemeDerivedProps(), the base theme selector (applied at mergeProps.ts applyGlobalBaseSelectors(),
		// after the normal props spread at mergeProps.ts mergeProps() initial templates spread) wins over the passed prop
		expect((props as any).visible).toBe(false);
		expect((props as any).icon).toBe('ban');
	});
});

describe('mergeProps templates - globalTheme user override priority within the override bucket', () => {
	it('responsive user override ((M)select) beats plain user override (select) because sortSelectors weights (M) selectors +2000 within the same bucket', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				// '(M)select' is deliberately declared FIRST: if the +2000 responsive weight were lost,
				// equal weights plus stable sort would keep it first and 'plain' would win — so this
				// test fails unless the responsive weight itself pushes '(M)select' last
				'(M)select': { separator: 'resp' },
				[componentType]: { separator: 'plain' },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);

		// both keys lack '*' so both land in the userOverrideSelectors bucket (mergeProps.ts createTemplatesContext() bucket split);
		// sortSelectors weighs 'select' at 1000 and '(M)select' at 3000, so '(M)select' applies last
		expect(props.separator).toBe('resp');
	});
});

describe('mergeProps templates - props.theme.components (step 4) has no base/override bucket split', () => {
	it('applies props.theme.components selectors with the same layer priority as globalTheme: select (user) beats *(M)select (base-responsive)', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
		};
		const properties: Partial<SelectProps> = {
			theme: {
				components: {
					// base-responsive declared LAST so only the weight model (not insertion order)
					// can push the user override after it
					[componentType]: { separator: 'user' },
					// @ts-ignore - selector key not in ThemeComponents type
					'*(M)select': { separator: 'baseResp' },
				},
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// step 4 (mergeProps.ts applyParentThemeSelectors()) applies selectors in raw sorted order;
		// since the weight model orders base (*) < base-responsive (*(M)) < user override, the user
		// override wins — the SAME outcome as the identical keys in globalTheme.components (pinned
		// at mergeProps.test.ts 'user provided overrides take priority over responsive theme overrides').
		expect(props.separator).toBe('user');
	});

	it('applies props.theme.components base selector before plain selector: select (weight 1000) beats *select (weight 0)', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
		};
		const properties: Partial<SelectProps> = {
			theme: {
				components: {
					// 'select' is deliberately declared FIRST: with equal weights and stable sort the
					// base key would win, so this test fails unless the 1000-vs-0 weight difference
					// pushes 'select' last
					[componentType]: { separator: 'b' },
					// @ts-ignore - selector key not in ThemeComponents type
					'*select': { separator: 'a' },
				},
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// pure sortSelectors order: '*select' (0) applies first, 'select' (1000) applies last
		expect(props.separator).toBe('b');
	});
});

describe('mergeProps templates - comma-separated selectors end-to-end', () => {
	it('applies a comma-separated user override key when one of its parts matches the component', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'select, button': { separator: 'x' },
			},
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, {});

		// filterSelectors expands 'select, button' into parts (mergeProps.ts expandCommaSelectors()) and returns
		// the ORIGINAL joined key for lookup, so the grouped value applies to select
		expect((props as any).separator).toBe('x');
	});

	it('treats a comma-separated BASE selector exactly like its individual parts: it does NOT block the parent-theme respread', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*select, *button': { separator: 'base' },
			},
		};
		const parentThemePropsMap = new Map<string, any>([['separator', 'parent']]);
		const properties: Partial<SelectProps> = {
			separator: 'parent',
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// specificity is classified on the comma part that MATCHED (mergeProps.ts
		// applyGlobalBaseSelectors()): '*select' is a single-segment selector, so — exactly like
		// the non-comma '*select' in the next test — it is NOT "specific" and the parent-theme
		// respread restores the parent-derived value over the base theme.
		expect(props.separator).toBe('parent');
	});

	it('does NOT block the parent-theme respread for the equivalent non-comma base selector (*select): parent-theme-derived value wins', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { separator: 'base' },
			},
		};
		const parentThemePropsMap = new Map<string, any>([['separator', 'parent']]);
		const properties: Partial<SelectProps> = {
			separator: 'parent',
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// QUIRK: contrast with the previous test — '*select' cleans to a single segment so it is not
		// "specific", and the respread at mergeProps.ts respreadParentThemeDerivedProps() restores the parent-theme-derived value
		// over the base theme. Grouping the same base selector with a comma ('*select, *button')
		// flips this outcome for an identical theme value.
		expect(props.separator).toBe('parent');
	});

	it('classifies a comma part with multiple path segments as specific (blocking the respread), by the matched part', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*facet select, *toolbar select': { separator: 'base' },
			},
		};
		const parentThemePropsMap = new Map<string, any>([['separator', 'parent']]);
		const properties: Partial<SelectProps> = {
			treePath: 'facet',
			separator: 'parent',
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// the matched part '*facet select' has 2 path segments, so it IS specific — same as the
		// individual '*facet select' selector — and the respread is blocked
		expect(props.separator).toBe('base');
	});

	it('sorts a comma-separated key by its MATCHED part: a grouped selector ties with an identical individual one (insertion order wins)', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				// the comma key is declared FIRST: its matched part '*carousel icon' weighs the same
				// as the individual '*carousel icon', so the tie resolves by insertion order and the
				// LAST-declared identical selector wins — the same behavior as two duplicate plain keys
				'*carousel icon, *banner icon': { icon: 'b' },
				'*carousel icon': { icon: 'a' },
			},
		};

		// @ts-ignore
		const props = mergeProps('icon', globalTheme, {}, { treePath: 'carousel' } as any);

		// the pipeline sorts comma groups by the part that MATCHED the treePath (mergeProps.ts
		// matchSelectors() + selectorWeight()), so a grouped selector no longer outranks an
		// identical individual one purely for being grouped.
		expect((props as any).icon).toBe('a');
	});
});

describe('mergeProps templates - responsive-prefixed specific selectors and the respread', () => {
	it('blocks the parent-theme respread for a responsive-prefixed specific selector (*(M)facet select)', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*(M)facet select': { separator: 'resp-specific' },
			},
		};
		const parentThemePropsMap = new Map<string, any>([['separator', 'parent']]);
		const properties: Partial<SelectProps> = {
			treePath: 'facet',
			separator: 'parent',
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// QUIRK: the responsive-marker strip at mergeProps.ts applyGlobalBaseSelectors() cleanSelector is anchored to the END of the string
		// (/\([MDT]\)$/) but responsive markers are PREFIXES ('*(M)facet select'), so the strip never
		// fires — it is dead code. Classification as "specific" still happens anyway because the
		// segment count at mergeProps.ts applyGlobalBaseSelectors() cleanSelector is 2 regardless ('(M)facet' + 'select'), so 'separator'
		// is protected from the respread and the base theme value wins over the parent-theme-derived
		// value.
		expect(props.separator).toBe('resp-specific');
	});
});
