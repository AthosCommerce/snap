// Part of the mergeProps characterization suite: these tests pin the CURRENT behavior of the
// non-templates ("classic Snap") branch of mergeProps (mergeProps.ts lines 45-64) ahead of a
// planned refactor. QUIRK comments flag behavior that is pinned as-is but looks unintended.

import { Theme } from '..';
import { SelectProps } from '../components/Molecules/Select';
import { mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps non-templates branch - same-key precedence across layers', () => {
	it('directly passed props beat globalTheme component props for the same key', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					separator: 'theme',
				},
			},
		};
		const properties: Partial<SelectProps> = {
			separator: 'props',
		};
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);
		expect(props.separator).toBe('props');
	});

	it('props.theme component props beat directly passed props for the same key', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					separator: 'theme',
				},
			},
		};
		const properties: Partial<SelectProps> = {
			separator: 'props',
			theme: {
				components: {
					[componentType]: {
						separator: 'ptheme',
					},
				},
			},
		};
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);
		expect(props.separator).toBe('ptheme');
	});
});

describe('mergeProps non-templates branch - treePath construction', () => {
	it('appends componentType to props.treePath and does NOT append props.name', () => {
		const properties: Partial<SelectProps> = {
			treePath: 'search results',
			name: 'foo',
		};
		const props = mergeProps('select', {} as Theme, {}, properties);
		// QUIRK: the name is read (mergeProps.ts:34) and treePath is built (mergeProps.ts:36-38) in
		// shared pre-branch code, but the '.name' append only happens in the templates branch
		// (mergeProps.ts:72) — the non-templates branch never appends it, so 'foo' remains only as
		// a plain prop.
		expect(props.treePath).toBe('search results select');
		expect(props.name).toBe('foo');
	});

	it('falls back to defaultProps.treePath when props.treePath is not provided', () => {
		const defaultProps: Partial<SelectProps> = {
			treePath: 'header',
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps('select', {} as Theme, defaultProps, properties);
		expect(props.treePath).toBe('header select');
	});

	it('props.treePath beats defaultProps.treePath', () => {
		const defaultProps: Partial<SelectProps> = {
			treePath: 'search',
		};
		const properties: Partial<SelectProps> = {
			treePath: 'auto',
		};
		const props = mergeProps('select', {} as Theme, defaultProps, properties);
		expect(props.treePath).toBe('auto select');
	});
});

describe('mergeProps non-templates branch - selector-style globalTheme keys', () => {
	it('ignores selector-style keys entirely (filterSelectors is never called in this branch)', () => {
		const globalTheme = {
			components: {
				'*select': { starProp: 'star' },
				'(M)select': { responsiveProp: 'mobile' },
				'search select': { pathProp: 'path' },
				'select, button': { commaProp: 'comma' },
			},
		};
		// @ts-ignore - selector-style component keys
		const props = mergeProps('select', globalTheme as Theme, {}, {});
		// QUIRK: the non-templates branch looks up only the exact componentType key
		// (mergeProps.ts:47), so '*select', '(M)select', 'search select', and 'select, button'
		// are all silently ignored. (With this treePath the templates branch would match all of
		// them except 'search select', which requires a 'search' segment in the treePath.)
		expect((props as any).starProp).toBeUndefined();
		expect((props as any).responsiveProp).toBeUndefined();
		expect((props as any).pathProp).toBeUndefined();
		expect((props as any).commaProp).toBeUndefined();
		expect(props).toStrictEqual({ treePath: 'select' });
		expect((props as any)[THEME_PROPS_MAP_SYMBOL]).toBeUndefined();
		expect(Object.getOwnPropertySymbols(props)).not.toContain(THEME_PROPS_MAP_SYMBOL);
	});

	it('applies only the exact componentType key when both exact and selector-style keys exist', () => {
		const globalTheme = {
			components: {
				select: { exactProp: 'exact' },
				'*select': { starProp: 'star' },
			},
		};
		// @ts-ignore - selector-style component keys
		const props = mergeProps('select', globalTheme as Theme, {}, {});
		expect((props as any).exactProp).toBe('exact');
		expect((props as any).starProp).toBeUndefined();
		expect((props as any)[THEME_PROPS_MAP_SYMBOL]).toStrictEqual(new Map<string, any>([['exactProp', 'exact']]));
	});
});

describe('mergeProps non-templates branch - degenerate globalTheme', () => {
	it('routes undefined globalTheme to the non-templates branch and does not throw', () => {
		// QUIRK: (undefined as ThemeComplete)?.type !== 'templates' evaluates to true
		// (mergeProps.ts:45), so an undefined globalTheme silently takes the non-templates
		// branch and the optional chains at mergeProps.ts:47 skip theme merging entirely.
		const props = mergeProps('select', undefined as any, { a: 1 } as any, {} as any);
		expect(props).toStrictEqual({ a: 1, treePath: 'select' });
	});
});

describe('mergeProps non-templates branch - mergeThemeProps value handling', () => {
	const fn = () => 'clicked';
	const globalTheme = {
		components: {
			select: {
				separator: undefined,
				onClick: fn,
				nullProp: null,
			},
		},
	};
	const defaultProps: Partial<SelectProps> = {
		separator: ': ',
	};

	it('spreads an explicit undefined theme value over the defaultProps value (key stays present)', () => {
		// @ts-ignore - theme props with undefined/function/null values
		const props = mergeProps('select', globalTheme as Theme, defaultProps, {});
		// QUIRK: mergeThemeProps spreads componentThemeProps last (mergeProps.ts:242-245), and
		// object spread copies keys with explicit undefined values, so separator: undefined
		// clobbers the defaultProps value ': ' while the key remains present on the result.
		expect(props.separator).toBeUndefined();
		expect('separator' in props).toBe(true);
	});

	it('spreads function and null theme values onto props (function by reference)', () => {
		// @ts-ignore - theme props with undefined/function/null values
		const props = mergeProps('select', globalTheme as Theme, defaultProps, {});
		expect((props as any).onClick).toBe(fn);
		expect((props as any).nullProp).toBeNull();
	});

	it('attaches an empty THEME_PROPS_MAP_SYMBOL map when all theme values are undefined/null/function', () => {
		// @ts-ignore - theme props with undefined/function/null values
		const props = mergeProps('select', globalTheme as Theme, defaultProps, {});
		// QUIRK: mergeThemeProps only tracks values that are not undefined, not null, and not
		// functions (mergeProps.ts:235), so none of these theme values enter the map even though
		// all of them are spread onto the result; the empty map is still attached (mergeProps.ts:247).
		const themeMap = (props as any)[THEME_PROPS_MAP_SYMBOL];
		expect(themeMap).toBeInstanceOf(Map);
		expect(themeMap.size).toBe(0);
	});
});

describe('mergeProps non-templates branch - THEME_PROPS_MAP_SYMBOL tracking across both merges', () => {
	it('props.theme values overwrite globalTheme map entries (preserveExistingMapKeys is false for both merges)', () => {
		const globalTheme = {
			components: {
				select: { a: 1 },
			},
		};
		const properties: Partial<SelectProps> = {
			theme: {
				components: {
					// @ts-ignore - arbitrary theme props
					select: { a: 2, b: 3 },
				},
			},
		};
		const props = mergeProps('select', globalTheme as Theme, {}, properties);
		expect((props as any).a).toBe(2);
		expect((props as any).b).toBe(3);
		// Both mergeThemeProps calls in this branch (mergeProps.ts:50 and mergeProps.ts:63) use the
		// default preserveExistingMapKeys=false, so the props.theme value for 'a' overwrites the
		// globalTheme-derived entry in the map. (In the templates branch only the global user-override
		// selector merge at mergeProps.ts:146 passes preserveExistingMapKeys=true; its props.theme
		// merge at mergeProps.ts:158 overwrites map entries just like here.)
		const themeMap = (props as any)[THEME_PROPS_MAP_SYMBOL];
		expect(themeMap).toBeInstanceOf(Map);
		expect(themeMap.size).toBe(2);
		expect(themeMap.get('a')).toBe(2);
		expect(themeMap.get('b')).toBe(3);
	});
});
