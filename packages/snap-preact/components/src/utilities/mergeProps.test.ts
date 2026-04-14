import { OverlayProps, SlideoutProps, Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { sortSelectors, filterSelectors, mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps function without theme name', () => {
	it('merges defaultProps', () => {
		const componentType = 'select';
		const globalTheme = {};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
			treePath: 'select',
		});
	});
	it('merges global theme', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: true,
			treePath: 'select',
			unrelatedProp: 1,
			[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
				['startOpen', true],
				['unrelatedProp', 1],
			]),
		});
	});
	it('merges properties', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconClose: 'cog',
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'cog',
			separator: ': ',
			startOpen: true,
			className: 'additonal-className',
			unrelatedProp: 1,
			treePath: 'select',
			[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
				['startOpen', true],
				['unrelatedProp', 1],
			]),
		});
	});

	it('merges nested theme on properties', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconClose: 'cog',
			theme: {
				components: {
					[componentType]: {
						// @ts-ignore - different prop value
						startOpen: '2',
						unrelatedProp: 2,
					},
					otherComponent: {
						shouldNotExist: 2,
					},
				},
			},
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'cog',
			separator: ': ',
			startOpen: true,
			className: 'additonal-className',
			unrelatedProp: 1,
			treePath: 'select',
			theme: properties.theme,
			...properties.theme?.components![componentType],
			[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
				['startOpen', '2'],
				['unrelatedProp', 2],
			]),
		});
	});
});

describe('filterSelectors handles names and treepath correctly', () => {
	it('removes selectors not within the treePath', () => {
		const treePath = `recommendationBundle result price.price-msrp`;

		const selectors = {
			//garbage
			pagination: {},
			icon: {},

			//valid
			price: {},
			'price.price-msrp': {},
			'result price.price-msrp': {},
			'recommendationBundle result price.price-msrp': {},
			'recommendationBundle price.price-msrp': {},

			//invalid
			'search price': {},
			'autocomplete price': {},
			'price.bundle-strike-price': {},
			'recommendationBundle carousel result price': {},
			'recommendationBundle price.bundle-strike-price': {},
			'recommendationBundle price.bundle-price': {},
			'recommendation price.price-msrp': {},
			'price.bundle-strike-price-msrp': {},
		};
		const expected = [
			'price',
			'price.price-msrp',
			'result price.price-msrp',
			'recommendationBundle result price.price-msrp',
			'recommendationBundle price.price-msrp',
		];

		expect(filterSelectors(selectors, treePath)).toEqual(expected);
	});
});

describe('mergeProps function with theme name', () => {
	it('has named theme with variables, layoutOptions, and treePath', () => {
		const componentType = 'select';
		const globalTheme: Theme = {
			name: GLOBAL_THEME_NAME,
			variables: {
				breakpoints: { mobile: 540, tablet: 767, desktop: 1200 },
				colors: {
					primary: '#3A23AD',
					secondary: '#00cee1',
					accent: '#4c3ce2',
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			theme: {
				name: globalTheme.name,
				variables: globalTheme.variables,
			},
			treePath: componentType,
		});
	});

	it('globalTheme components overrides defaultProps', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			startOpen: true,
			unrelatedProp: 1,
			theme: {
				name: globalTheme.name,
				[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
					['startOpen', true],
					['unrelatedProp', 1],
				]),
			},
			treePath: componentType,
			[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
				['startOpen', true],
				['unrelatedProp', 1],
			]),
		});
	});

	it('properties overrides defaultProps', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconOpen: 'cog',
			startOpen: true,
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			theme: {
				name: globalTheme.name,
			},
			treePath: componentType,
		});
	});
	it('globalTheme overrides properties', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				[componentType]: {
					startOpen: '1',
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconOpen: 'cog',
			startOpen: true,
		};
		// @ts-ignore - globalTheme.startOpen as a string to make sure it is being used
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			startOpen: '1',
			unrelatedProp: 1,
			theme: {
				name: globalTheme.name,
				[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
					['startOpen', '1'],
					['unrelatedProp', 1],
				]),
			},
			treePath: componentType,
			[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
				['startOpen', '1'],
				['unrelatedProp', 1],
			]),
		});
	});

	it('nested theme on properties', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				[componentType]: {
					startOpen: '1',
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconOpen: 'cog',
			startOpen: true,
			theme: {
				components: {
					[componentType]: {
						// @ts-ignore - different prop value
						startOpen: '2',
					},
					otherComponent: {
						shouldNotExist: 2,
					},
				},
			},
		};
		// @ts-ignore - globalTheme.startOpen as a string to make sure it is being used
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			startOpen: '2',
			unrelatedProp: 1,
			theme: {
				name: globalTheme.name,
				...properties.theme,
				[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
					['startOpen', '2'],
					['unrelatedProp', 1],
				]),
			},
			treePath: componentType,
			[THEME_PROPS_MAP_SYMBOL]: new Map<string, any>([
				['startOpen', '2'],
				['unrelatedProp', 1],
			]),
		});
	});

	it('nested treePath and named component', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
		};

		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {
			treePath: 'button',
			name: 'first',
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			theme: {
				name: globalTheme.name,
			},
			treePath: `button ${componentType}.first`,
		});
	});

	it('nested treePath and named component with dash', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
		};

		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {
			treePath: 'button',
			name: 'first-button',
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			theme: {
				name: globalTheme.name,
			},
			treePath: `button ${componentType}.first-button`,
		});
	});
});
describe('sortSelectors function', () => {
	it('orders strings by spaces', () => {
		const expected = [
			'search',
			'search toolbar',
			'search toolbar.top',
			'search toolbar.bottom',
			'search toolbar perPage',
			'search toolbar.top perPage',
			'search toolbar.bottom perPage',
			'search toolbar perPage.named',
			'search toolbar.top perPage.named',
		];
		const data = [
			'search toolbar.top perPage',
			'search toolbar perPage',
			'search toolbar.top perPage.named',
			'search toolbar perPage.named',
			'search',
			'search toolbar',
			'search toolbar.top',
			'search toolbar.bottom',
			'search toolbar.bottom perPage',
		];
		expect(data.sort(sortSelectors)).toEqual(expected);
	});
});
describe('mergeProps function with theme name - prop merge order (templates behavior)', () => {
	it('user override selector (no *) beats base theme selector (* prefixed)', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { startOpen: true, separator: 'base' },
				select: { startOpen: false, separator: 'override' },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {};
		// @ts-ignore - globalTheme components use *-prefixed keys
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props.startOpen).toBe(false);
		expect(props.separator).toBe('override');
	});

	it('props.theme.components overrides beat globalTheme user override selectors', () => {
		// Simulates layout option overrides (injected via useLayoutOptions into props.theme.components)
		// winning over global user overrides in globalTheme.components (no * prefix)
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				select: { startOpen: false },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {
			theme: {
				components: {
					select: { startOpen: true },
				},
			},
		};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props.startOpen).toBe(true);
	});

	it('props.theme.components overrides beat globalTheme base theme selectors (* prefixed)', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { startOpen: false },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {
			theme: {
				components: {
					select: { startOpen: true },
				},
			},
		};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props.startOpen).toBe(true);
	});

	it('parent-theme-derived props beat child base theme (* selector)', () => {
		// When a parent component passes a prop whose value came from the parent's theme
		// (tracked via THEME_PROPS_MAP_SYMBOL on props.theme), that value should win
		// over the child's base theme (* prefixed) value.
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { startOpen: false },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const parentThemePropsMap = new Map([['startOpen', true]]);
		const properties: Partial<SelectProps> = {
			startOpen: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props.startOpen).toBe(true);
	});

	it('parent-theme-derived props do NOT beat child user override selectors (no *)', () => {
		// User overrides in globalTheme (no * prefix) should still win over
		// a parent's theme-derived value respread.
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				select: { startOpen: false },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const parentThemePropsMap = new Map([['startOpen', true]]);
		const properties: Partial<SelectProps> = {
			startOpen: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props.startOpen).toBe(false);
	});

	it('specific selectors (multi-segment path) beat parent-theme-derived props', () => {
		// A specific base-theme selector like '*facet select' has isSpecificSelector=true,
		// so the respread step skips props that were set by it.
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*facet select': { startOpen: false },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const parentThemePropsMap = new Map([['startOpen', true]]);
		const properties: Partial<SelectProps> = {
			treePath: 'facet',
			startOpen: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props.startOpen).toBe(false);
	});

	it('parent-theme-derived value travels to child via THEME_PROPS_MAP_SYMBOL even when prop name changes (slideout overlayColor → overlay color)', () => {
		// Slideout's base theme (*slideout) sets overlayColor:'red', which is tracked in THEME_PROPS_MAP_SYMBOL.
		// The slideout component passes its overlayColor down to the overlay child as `color`.
		// Overlay's base theme (*overlay) independently sets color:'blue'.
		// The respread step detects that 'red' is a value tracked in the parent's THEME_PROPS_MAP_SYMBOL,
		// so it restores color:'red', which wins over the child's base theme color:'blue'.
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*slideout': { overlayColor: 'red' },
				'*overlay': { color: 'blue' },
			},
		};
		const defaultProps: Partial<SlideoutProps> = {};

		// Step 1: slideout mergeProps — base theme sets overlayColor:'red', tracked in THEME_PROPS_MAP_SYMBOL
		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, defaultProps, {});
		expect((slideoutResult as any).overlayColor).toBe('red');
		expect((slideoutResult.theme as any)?.[THEME_PROPS_MAP_SYMBOL]?.get('overlayColor')).toBe('red');

		// Step 2: slideout renders <Overlay color={props.overlayColor} theme={props.theme} />
		// 'red' is a value tracked in the parent theme map, so the respread step restores it
		// over the child's base theme (*overlay) value of 'blue'.
		// @ts-ignore
		const overlayResult = mergeProps(
			'overlay',
			globalTheme,
			{},
			{
				color: (slideoutResult as any).overlayColor,
				theme: slideoutResult.theme,
			}
		);

		expect((overlayResult as any).color).toBe('red');
	});

	it('parent theme props do not override other child theme props if values match', () => {
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*slideout': { otherProp: true },
				'*overlay': { prop: false },
			},
		};
		const defaultProps: Partial<SlideoutProps> = {};

		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, defaultProps, {});
		expect((slideoutResult as any).otherProp).toBe(true);
		expect((slideoutResult.theme as any)?.[THEME_PROPS_MAP_SYMBOL]?.get('otherProp')).toBe(true);

		const overlayDefaults: any = {
			prop: true,
		};

		// @ts-ignore
		const overlayResult = mergeProps('overlay', globalTheme, overlayDefaults, {
			propY: true,
			propX: false,
			otherProp: (slideoutResult as any).otherProp,
			theme: slideoutResult.theme,
		});

		expect((overlayResult as any).prop).toBe(false);

		expect((overlayResult as any).propY).toBe(true);
		expect((overlayResult as any).propX).toBe(false);
	});

	it('user override on child (overlay: {color: orange}) beats base theme and parent-theme-derived respread', () => {
		// Same setup as above, but a user override (no *) directly on overlay sets color:'orange'.
		// Priority order: *overlay base('blue') < respread parent-theme-derived('red') < overlay user override('orange')
		// So 'orange' should win over everything.
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*slideout': { overlayColor: 'red' },
				'*overlay': { color: 'blue' },
				overlay: { color: 'orange' },
			},
		};

		// Step 1: slideout mergeProps — overlayColor:'red' tracked in THEME_PROPS_MAP_SYMBOL
		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, {}, {}) as any;
		expect((slideoutResult as any).overlayColor).toBe('red');

		// Step 2: overlay receives parent-theme-derived 'red' as color.
		// Base theme sets 'blue', respread restores 'red', then user override 'orange' wins last.
		// @ts-ignore
		const overlayResult = mergeProps(
			'overlay',
			globalTheme,
			{},
			{
				color: (slideoutResult as any).overlayColor,
				theme: slideoutResult.theme,
			}
		);

		expect((overlayResult as any).color).toBe('orange');
	});

	it('responsive mobile theme overrides take priority over default theme overrides', () => {
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*slideout': { otherProp: true },
				'*(M)slideout': { otherProp: false },
			},
		};
		const defaultProps: Partial<SlideoutProps> = {};

		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, defaultProps, {});
		expect((slideoutResult as any).otherProp).toBe(false);
	});

	it('responsive tablet theme overrides take priority over default theme overrides', () => {
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*slideout': { otherProp: true },
				'*(T)slideout': { otherProp: false },
			},
		};
		const defaultProps: Partial<SlideoutProps> = {};

		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, defaultProps, {});
		expect((slideoutResult as any).otherProp).toBe(false);
	});

	it('responsive desktop theme overrides take priority over default theme overrides', () => {
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*slideout': { otherProp: true },
				'*(D)slideout': { otherProp: false },
			},
		};
		const defaultProps: Partial<SlideoutProps> = {};

		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, defaultProps, {});
		expect((slideoutResult as any).otherProp).toBe(false);
	});

	it('user provided overrides take priority over responsive theme overrides', () => {
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				slideout: { otherProp: true },
				'*(M)slideout': { otherProp: false },
			},
		};
		const defaultProps: Partial<SlideoutProps> = {};

		// @ts-ignore
		const slideoutResult = mergeProps('slideout', globalTheme, defaultProps, {});
		expect((slideoutResult as any).otherProp).toBe(true);
	});

	it('specific selector (*facet dropdown icon.collapse) beats general base theme (*icon) via sortSelectors weight', () => {
		// *icon sets icon:'cog' — general, low specificity weight
		// *facet dropdown icon.collapse sets icon:'ban' — specific multi-segment path, higher weight
		// sortSelectors orders more-specific selectors last so they are applied last and win.
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { icon: 'cog' },
				'*facet dropdown icon.collapse': { icon: 'ban' },
			},
		};
		// @ts-ignore
		const props = mergeProps('icon', globalTheme, {}, {
			name: 'collapse',
			treePath: 'facet dropdown',
		} as any);

		expect((props as any).icon).toBe('ban');
	});

	it('THEME_PROPS_MAP_SYMBOL tracks base theme value even after user override changes the prop', () => {
		// mergeThemeProps is called with preserveExistingMapKeys=true for user overrides,
		// so the map entry set by the base theme (* selector) is NOT overwritten by the
		// user override value. This lets child components correctly identify theme-derived values.
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { startOpen: true },
				select: { startOpen: false },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		// User override wins on the actual prop
		expect(props.startOpen).toBe(false);
		// But THEME_PROPS_MAP_SYMBOL retains the base theme value
		const themeMap = (props as any)[THEME_PROPS_MAP_SYMBOL];
		expect(themeMap).toBeInstanceOf(Map);
		expect(themeMap.get('startOpen')).toBe(true);
	});

	it('new keys added only by user override are still tracked in THEME_PROPS_MAP_SYMBOL', () => {
		// preserveExistingMapKeys=true only protects EXISTING keys; keys that are NEW
		// in the user override (not present in base theme) should still be added to the map.
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { startOpen: true },
				select: { startOpen: false, iconOpen: 'cog' },
			},
		};
		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		const themeMap = (props as any)[THEME_PROPS_MAP_SYMBOL];
		expect(themeMap).toBeInstanceOf(Map);
		// iconOpen was not in base theme, so user override adds it to the map
		expect(themeMap.has('iconOpen')).toBe(true);
		expect(themeMap.get('iconOpen')).toBe('cog');
		// startOpen keeps the base theme value in the map
		expect(themeMap.get('startOpen')).toBe(true);
	});

	it('full priority chain: defaultProps < base(*) < parent-theme-derived < user override < props.theme.components', () => {
		// Verifies all four merge steps interact correctly in one scenario
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { startOpen: false, separator: 'base' },
				select: { startOpen: true, separator: 'user-override' },
			},
		};
		const defaultProps: Partial<SelectProps> = {
			startOpen: false,
			separator: 'default',
			iconClose: 'angle-up',
		};
		// separator: parent-theme-derived value should beat base(*) but not user-override
		const parentThemePropsMap = new Map([['separator', 'parent-theme']]);
		const properties: Partial<SelectProps> = {
			separator: 'parent-theme',
			theme: {
				components: {
					// layout option override wins over everything
					select: { startOpen: false },
				},
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};
		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		// startOpen: props.theme.components (false) beats user override (true)
		expect(props.startOpen).toBe(false);
		// separator: user override ('user-override') beats parent-theme-derived ('parent-theme')
		expect(props.separator).toBe('user-override');
		// iconClose: only in defaultProps, not overridden anywhere
		expect(props.iconClose).toBe('angle-up');
	});
});

describe('respread logic - primitive value collision regression', () => {
	it('does NOT misclassify a non-theme boolean prop as theme-derived when the value collides with a parent theme value', () => {
		// Bug: the old respread logic checked `parentThemeValuesArray.indexOf(propValue)`,
		// so ANY prop with value `true` was treated as theme-derived if ANY parent theme
		// prop happened to be `true` — even for unrelated keys.
		const componentType = 'icon';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				// child's base theme sets `icon` to 'ban'
				'*icon': { icon: 'ban' },
			},
		};
		const defaultProps = {};

		// Parent theme had `startOpen: true` tracked in its theme map.
		// The child receives `visible: true` as a directly-passed prop (NOT from theme).
		// Because both are `true`, the old value-only indexOf check would misclassify
		// `visible` as theme-derived and respread it, potentially overriding the child's
		// base theme for unrelated props.
		const parentThemePropsMap = new Map<string, any>([['startOpen', true]]);
		const properties = {
			visible: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);

		// `visible` was NOT in the parent theme map (only `startOpen` was), so it should
		// not be respread. The child's base theme `icon: 'ban'` should remain intact.
		expect((props as any).icon).toBe('ban');
		// `visible` should still be present from the normal props spread
		expect((props as any).visible).toBe(true);
	});

	it('does NOT misclassify a non-theme number prop when the value collides with a parent theme number', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*select': { separator: 'base-sep' },
			},
		};
		const defaultProps: Partial<SelectProps> = {};

		// Parent theme had `columns: 3` tracked in its theme map.
		// The child receives `limit: 3` as a directly-passed prop (NOT from theme).
		const parentThemePropsMap = new Map<string, any>([['columns', 3]]);
		const properties: Partial<SelectProps> = {
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};
		(properties as any).limit = 3;

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);

		// `limit` was NOT a key in the parent theme map — only `columns` was.
		// Even though both have value 3, `limit` must not be respread.
		expect(props.separator).toBe('base-sep');
	});

	it('correctly identifies theme-derived props by key match even for primitive values', () => {
		// When the parent theme map contains key `startOpen` with value `true`,
		// and the child also receives `startOpen: true`, it IS theme-derived (key+value match).
		const componentType = 'icon';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { icon: 'ban' },
			},
		};
		const defaultProps = {};

		const parentThemePropsMap = new Map<string, any>([['startOpen', true]]);
		const properties = {
			startOpen: true,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);

		// `startOpen` is in the parent theme map with the same value, so it IS theme-derived
		// and should be respread (winning over child's base theme).
		expect((props as any).startOpen).toBe(true);
	});

	it('correctly identifies theme-derived object props by reference equality', () => {
		// Object references are safe to match by value — they are unique references.
		const componentType = 'icon';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { icon: 'ban' },
			},
		};
		const defaultProps = {};

		const sharedStyleObj = { color: 'red', fontSize: 14 };
		// Parent theme tracked `style` pointing to the same object reference.
		// Even though the child receives it under a DIFFERENT key (`customStyle`),
		// object reference matching should detect it as theme-derived.
		const parentThemePropsMap = new Map<string, any>([['style', sharedStyleObj]]);
		const properties = {
			customStyle: sharedStyleObj,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);

		// Object reference match — the same object was in the parent theme map
		expect((props as any).customStyle).toBe(sharedStyleObj);
	});

	it('does NOT match different objects with identical content as theme-derived', () => {
		// Two different object instances with the same content should NOT match
		// via reference equality (they are separate allocations).
		const componentType = 'icon';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				'*icon': { icon: 'ban' },
			},
		};
		const defaultProps = {};

		const parentStyleObj = { color: 'red', fontSize: 14 };
		const childStyleObj = { color: 'red', fontSize: 14 }; // same content, different reference
		const parentThemePropsMap = new Map<string, any>([['style', parentStyleObj]]);
		const properties = {
			style: childStyleObj,
			theme: {
				[THEME_PROPS_MAP_SYMBOL]: parentThemePropsMap,
			} as any,
		};

		// @ts-ignore
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);

		// Key matches ('style' === 'style') but value does NOT match (different reference).
		// So `style` is NOT theme-derived. The child's base theme should apply normally.
		expect((props as any).icon).toBe('ban');
		expect((props as any).style).toBe(childStyleObj);
	});
});

describe('filterSelectors function', () => {
	it('removes selectors not within the treePath', () => {
		const treePath = `search toolbar.top pagination icon.next`;

		const selectors = {
			// selectors that are NOT applicable (should be filtered out)
			'*icon.prev': {},
			'*(T)icon.prev': {},
			pagination: {},
			'*(M)pagination': {},
			'search toolbar.top icon thing': {},
			'carousel icon.next': {},
			'facet icon': {},
			'search toolbar.top pagination dne icon.next': {},
			'search dne toolbar.top pagination icon.next': {},
			'*search dne toolbar.top pagination icon.next': {},
			'*search toolbar.top pagination icon.prev': {},
			'(M)search toolbar.top pagination icon.prev': {},

			// applicable selectors
			icon: {},
			'*icon': {},
			'icon.next': {},
			'*icon.next': {},
			'*(M)icon.next': {},
			'*(T)icon.next': {},
			'*(D)icon.next': {},
			'(M)icon.next': {},
			'(T)icon.next': {},
			'(D)icon.next': {},
			'pagination icon': {},
			'pagination icon.next': {},
			'toolbar.top icon.next': {},
			'search toolbar pagination icon': {},
			'search toolbar pagination icon.next': {},
			'search toolbar.top pagination icon': {},
			'search toolbar.top pagination icon.next': {},
			'*search toolbar.top pagination icon.next': {},
			'*(M)search toolbar.top pagination icon.next': {},
			'*(T)search toolbar.top pagination icon.next': {},
			'*(D)search toolbar.top pagination icon.next': {},
			'(M)search toolbar.top pagination icon.next': {},
			'(T)search toolbar.top pagination icon.next': {},
			'(D)search toolbar.top pagination icon.next': {},
		};
		const expected = [
			'icon',
			'*icon',
			'icon.next',
			'*icon.next',
			'*(M)icon.next',
			'*(T)icon.next',
			'*(D)icon.next',
			'(M)icon.next',
			'(T)icon.next',
			'(D)icon.next',
			'pagination icon',
			'pagination icon.next',
			'toolbar.top icon.next',
			'search toolbar pagination icon',
			'search toolbar pagination icon.next',
			'search toolbar.top pagination icon',
			'search toolbar.top pagination icon.next',
			'*search toolbar.top pagination icon.next',
			'*(M)search toolbar.top pagination icon.next',
			'*(T)search toolbar.top pagination icon.next',
			'*(D)search toolbar.top pagination icon.next',
			'(M)search toolbar.top pagination icon.next',
			'(T)search toolbar.top pagination icon.next',
			'(D)search toolbar.top pagination icon.next',
		];

		expect(filterSelectors(selectors, treePath)).toEqual(expected);
	});
});
