// Part of the mergeProps characterization suite pinning CURRENT behavior ahead of a planned refactor.
// Scope: templates branch — selector priority semantics, the parent-theme respread (step 2), and
// comma-separated selectors end-to-end (mergeProps.ts lines 76-160).
// QUIRK comments flag behavior that is pinned as-is but looks unintended; the refactor is verified
// against these tests, so they assert what the code DOES, not what it should do.

import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps templates - parent theme respread (step 2) matches by value only', () => {
	it('respreads passed prop when its value matches ANY parent theme map value (value-only match), overriding the child base theme under an unrelated key', () => {
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

		// QUIRK: the respread check at mergeProps.ts:126 is `parentThemeValuesArray.indexOf(propValue)` —
		// it compares the prop VALUE against ALL values in the parent theme map and ignores map keys
		// entirely, so the child base theme's `visible: false` is overridden purely because `true`
		// equals the value of the UNRELATED parent map key 'startOpen'. The existing tests at
		// mergeProps.test.ts:966-1125 carry comments claiming key+value matching, but their assertions
		// pass either way because they never put the colliding key into the child's base theme; this
		// test is the discriminating case.
		expect((props as any).visible).toBe(true);
		// the unrelated base theme prop is untouched by the respread
		expect((props as any).icon).toBe('ban');
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
		// respread at mergeProps.ts:126, the base theme selector (applied at mergeProps.ts:88-106,
		// after the normal props spread at mergeProps.ts:67-70) wins over the passed prop
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

		// both keys lack '*' so both land in the userOverrideSelectors bucket (mergeProps.ts:81);
		// sortSelectors weighs 'select' at 1000 and '(M)select' at 3000, so '(M)select' applies last
		expect(props.separator).toBe('resp');
	});
});

describe('mergeProps templates - props.theme.components (step 4) has no base/override bucket split', () => {
	it('applies props.theme.components selectors in pure sortSelectors order: *(M)select (weight 2000) beats select (weight 1000)', () => {
		const componentType = 'select';
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
		};
		const properties: Partial<SelectProps> = {
			theme: {
				components: {
					[componentType]: { separator: 'user' },
					// @ts-ignore - selector key not in ThemeComponents type
					'*(M)select': { separator: 'baseResp' },
				},
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, {}, properties);

		// QUIRK: step 4 at mergeProps.ts:154-160 applies props.theme.components selectors in raw
		// sortSelectors order with NO base/user-override bucket split (unlike globalTheme.components,
		// which splits at mergeProps.ts:80-81). '*(M)select' (weight 2000) sorts after 'select'
		// (weight 1000) and wins — the OPPOSITE outcome of the same two keys placed in
		// globalTheme.components, where the bucket split makes the user override win (pinned at
		// mergeProps.test.ts:840).
		expect(props.separator).toBe('baseResp');
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

		// filterSelectors expands 'select, button' into parts (mergeProps.ts:275-284) and returns
		// the ORIGINAL joined key for lookup, so the grouped value applies to select
		expect((props as any).separator).toBe('x');
	});

	it('classifies a comma-separated BASE selector as specific, blocking the parent-theme respread', () => {
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

		// QUIRK: cleanSelector at mergeProps.ts:93-97 only strips a leading '*' (and a trailing
		// responsive marker), so the comma key '*select, *button' still contains a space and splits
		// into 2 segments, classifying it as a "specific" selector. That adds 'separator' to
		// propsSetBySpecificSelectors, so the respread is skipped at mergeProps.ts:122 and the base
		// theme value wins over the parent-theme-derived value — even though the selector is a flat
		// group, not a multi-segment path.
		expect(props.separator).toBe('base');
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
		// "specific", and the respread at mergeProps.ts:126 restores the parent-theme-derived value
		// over the base theme. Grouping the same base selector with a comma ('*select, *button')
		// flips this outcome for an identical theme value.
		expect(props.separator).toBe('parent');
	});

	it('sorts a comma-separated key by the weight of the whole joined string: grouped selector beats an identical individual one', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				// the comma key is deliberately declared FIRST: if weights were computed per comma part
				// (2 vs 2, equal), stable sort would keep it first and 'a' would win — so this test
				// fails unless the whole-joined-string weight (12 > 2) pushes the comma key last
				'*carousel icon, *banner icon': { icon: 'b' },
				'*carousel icon': { icon: 'a' },
			},
		};

		// @ts-ignore
		const props = mergeProps('icon', globalTheme, {}, { treePath: 'carousel' } as any);

		// QUIRK: sortSelectors at mergeProps.ts:256-264 computes weight on the whole joined key —
		// '*carousel icon, *banner icon' splits into 4 space-segments (weight 12) while
		// '*carousel icon' has 2 (weight 2) — so the comma key sorts after and its value wins,
		// meaning a grouped selector outranks an identical individual selector.
		expect((props as any).icon).toBe('b');
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

		// QUIRK: the responsive-marker strip at mergeProps.ts:95 is anchored to the END of the string
		// (/\([MDT]\)$/) but responsive markers are PREFIXES ('*(M)facet select'), so the strip never
		// fires — it is dead code. Classification as "specific" still happens anyway because the
		// segment count at mergeProps.ts:97 is 2 regardless ('(M)facet' + 'select'), so 'separator'
		// is protected from the respread and the base theme value wins over the parent-theme-derived
		// value.
		expect(props.separator).toBe('resp-specific');
	});
});
