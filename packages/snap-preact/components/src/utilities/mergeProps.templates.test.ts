/*
	mergeProps characterization suite (templates branch) — pins the CURRENT behavior of mergeProps
	ahead of a planned refactor. Expected values in this file were captured by running the code,
	not from documentation or intent. QUIRK comments flag behavior that is pinned as-is but looks
	unintended. Scope: treePath/name handling, lang, output theme shape, and THEME_PROPS_MAP
	propagation (mergeProps.ts lines 33-38, 65-72, 162-194).
*/

import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps templates componentName fallback (treePath naming)', () => {
	const globalTheme = {
		type: 'templates',
		name: GLOBAL_THEME_NAME,
	};

	it('uses defaultProps.name for the treePath suffix when props.name is absent', () => {
		const defaultProps: Partial<SelectProps> = { name: 'dflt' };
		const properties: Partial<SelectProps> = {};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, defaultProps, properties);
		expect(props.treePath).toBe('select.dflt');
		expect(props.name).toBe('dflt');
	});

	it('uses defaultProps.name for the treePath suffix when props.name is an empty string, while result.name stays empty', () => {
		const defaultProps: Partial<SelectProps> = { name: 'fallback' };
		const properties: Partial<SelectProps> = { name: '' };
		// @ts-ignore
		const props = mergeProps('select', globalTheme, defaultProps, properties);
		// QUIRK: mergeProps.ts:34 computes componentName as `props?.name || defaultProps.name`, so an
		// empty-string props.name is coerced to defaultProps.name for the treePath suffix. The result.name
		// prop remains '' from the props spread, so treePath and name disagree.
		expect(props.treePath).toBe('select.fallback');
		expect(props.name).toBe('');
	});

	it('uses props.name over defaultProps.name for the treePath suffix when both are non-empty', () => {
		const defaultProps: Partial<SelectProps> = { name: 'b' };
		const properties: Partial<SelectProps> = { name: 'a' };
		// @ts-ignore
		const props = mergeProps('select', globalTheme, defaultProps, properties);
		expect(props.treePath).toBe('select.a');
		expect(props.name).toBe('a');
	});
});

describe('mergeProps templates name regex rejection', () => {
	it.each(['has space', 'under_score', 'dot.name'])('omits the treePath name suffix when name is %p, while result.name is preserved', (name) => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
		};

		const properties: Partial<SelectProps> = { name };
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		// QUIRK: mergeProps.ts:72 only appends `.${componentName}` when the name matches
		// /^[A-Za-z0-9-]+$/, so names with spaces, underscores, or dots are silently dropped from the
		// treePath while the name prop itself is kept.
		expect(props.treePath).toBe('select');
		expect(props.name).toBe(name);
	});

	it('never applies a globalTheme selector targeting a name rejected by the regex (select.under_score)', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'select.under_score': { separator: 'themed-separator' },
			},
		};
		const properties: Partial<SelectProps> = { name: 'under_score' };
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		// QUIRK: because mergeProps.ts:72 silently rejects 'under_score' from the treePath, the treePath
		// stays 'select' and filterSelectors can never match the 'select.under_score' selector — theme
		// overrides keyed by such names are unreachable.
		expect(props.separator).toBeUndefined();
		expect(props.treePath).toBe('select');
		expect(props.name).toBe('under_score');
	});
});

describe('mergeProps templates treePath fallbacks', () => {
	const globalTheme = {
		type: 'templates',
		name: GLOBAL_THEME_NAME,
	};

	it('prefixes defaultProps.treePath when props.treePath is absent', () => {
		const defaultProps: Partial<SelectProps> = { treePath: 'search' };
		const properties: Partial<SelectProps> = {};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, defaultProps, properties);
		expect(props.treePath).toBe('search select');
	});

	it('props.treePath beats defaultProps.treePath', () => {
		const defaultProps: Partial<SelectProps> = { treePath: 'search' };
		const properties: Partial<SelectProps> = { treePath: 'auto' };
		// @ts-ignore
		const props = mergeProps('select', globalTheme, defaultProps, properties);
		expect(props.treePath).toBe('auto select');
	});
});

describe('mergeProps templates lang handling', () => {
	const globalTheme = {
		type: 'templates',
		name: GLOBAL_THEME_NAME,
		components: {
			select: {
				lang: { search: 'themed' },
			},
		},
	};

	it('respreads props.lang over theme-provided lang (reference equal) while the symbol map keeps the theme lang value', () => {
		const propsLang = { search: 'from-props' };
		const properties: Partial<SelectProps> = { lang: propsLang } as any;
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		expect((props as any).lang).toBe(propsLang);
		const themeMap = (props.theme as any)?.[THEME_PROPS_MAP_SYMBOL];
		expect(themeMap).toBeInstanceOf(Map);
		expect(themeMap.get('lang')).toBe(globalTheme.components.select.lang);
	});

	it('keeps theme-provided lang (reference equal) when props.lang is absent', () => {
		const properties: Partial<SelectProps> = {};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		expect((props as any).lang).toBe(globalTheme.components.select.lang);
	});
});

describe('mergeProps templates output theme shape', () => {
	it('adds an own name key with value undefined to result.theme when globalTheme has no name, and props.theme.variables survives', () => {
		const propsVariables = { colors: { primary: '#111111' } };
		const globalTheme = {
			type: 'templates',
		};
		const properties: Partial<SelectProps> = {
			theme: { variables: propsVariables } as any,
		};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		// QUIRK: mergeProps.ts:167 unconditionally writes `name: globalTheme.name` onto the output theme,
		// so when the globalTheme has no name the result theme gains an own 'name' key whose value is
		// undefined (visible to hasOwnProperty / spread) rather than omitting the key.
		expect(Object.prototype.hasOwnProperty.call(props.theme, 'name')).toBe(true);
		expect(props.theme?.name).toBeUndefined();
		expect((props.theme as any).variables).toBe(propsVariables);
	});

	it('shares globalTheme.variables by reference and clobbers props.theme.variables when globalTheme.variables exists', () => {
		const globalVariables = { colors: { primary: '#222222' } };
		const propsVariables = { colors: { primary: '#111111' } };
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			variables: globalVariables,
		};
		const properties: Partial<SelectProps> = {
			theme: { variables: propsVariables } as any,
		};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		// QUIRK: mergeProps.ts:177-179 assigns globalTheme.variables directly onto the output theme, so
		// the exact same variables object is shared by reference across every merged result (not cloned),
		// and it unconditionally clobbers any variables supplied via props.theme.
		expect((props.theme as any).variables).toBe(globalVariables);
		expect((props.theme as any).variables).not.toBe(propsVariables);
	});
});

describe('mergeProps templates THEME_PROPS_MAP_SYMBOL propagation to children', () => {
	it('carries the parent symbol map to result.theme as the SAME reference when no theme-derived props apply', () => {
		const parentMap = new Map<string, any>([['a', 1]]);
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
		};
		const properties: Partial<SelectProps> = {
			theme: { [THEME_PROPS_MAP_SYMBOL]: parentMap } as any,
		};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		// QUIRK: with no theme props applied the combining block at mergeProps.ts:182-194 is skipped
		// (currentThemePropsMap.size is 0), but the spread at mergeProps.ts:166 copies symbol keys from
		// props.theme — so the child result shares the parent's Map instance rather than getting a copy.
		expect((props.theme as any)[THEME_PROPS_MAP_SYMBOL]).toBe(parentMap);
	});

	it('builds a NEW combined map on result.theme (child wins shared keys, parent extras appended) while the top-level map keeps only child entries', () => {
		const parentMap = new Map<string, any>([
			['a', 1],
			['color', 'red'],
		]);
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*overlay': { color: 'blue' },
			},
		};
		// @ts-ignore
		const props = mergeProps(
			'overlay',
			globalTheme,
			{},
			{
				theme: { [THEME_PROPS_MAP_SYMBOL]: parentMap } as any,
			}
		);
		expect((props as any).color).toBe('blue');

		const themeMap = (props.theme as any)[THEME_PROPS_MAP_SYMBOL];
		expect(themeMap).toBeInstanceOf(Map);
		expect(themeMap).not.toBe(parentMap);
		expect(Array.from(themeMap.entries())).toEqual([
			['color', 'blue'],
			['a', 1],
		]);

		const topLevelMap = (props as any)[THEME_PROPS_MAP_SYMBOL];
		expect(topLevelMap).toBeInstanceOf(Map);
		expect(topLevelMap).not.toBe(themeMap);
		// QUIRK: mergeProps.ts:182-194 stores the combined map (child entries first, parent extras
		// appended) only on result.theme, while the top-level result[THEME_PROPS_MAP_SYMBOL] written by
		// mergeThemeProps keeps only the child's own theme entries — the two maps diverge on the same
		// result object.
		expect(Array.from(topLevelMap.entries())).toEqual([['color', 'blue']]);
	});
});

describe('mergeProps templates theme selectors setting the name prop', () => {
	it('lets a base theme selector overwrite name while treePath keeps the original props.name (respread skip-list never restores name)', () => {
		const globalTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { name: 'themed' },
			},
		};
		const parentMap = new Map<string, any>([['x', 'orig']]);
		const properties: Partial<SelectProps> = {
			name: 'orig',
			theme: { [THEME_PROPS_MAP_SYMBOL]: parentMap } as any,
		};
		// @ts-ignore
		const props = mergeProps('select', globalTheme, {}, properties);
		// QUIRK: the respread skip-list at mergeProps.ts:119 excludes 'name', so a theme-set name is never
		// restored from props even when the props value matches a parent theme map value (unlike lang,
		// which gets restored at mergeProps.ts:173-175). Meanwhile treePath was already computed from the
		// original props.name at mergeProps.ts:34 and :72, so result.name and result.treePath disagree.
		expect(props.name).toBe('themed');
		expect(props.treePath).toBe('select.orig');
	});
});
