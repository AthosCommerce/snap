// Part of the mergeProps characterization suite. This file covers the final respread exceptions
// (applyFinalRespreadExceptions) for customComponent and storybook treePaths: authored JSX props /
// story controls have the final say at EVERY depth of those subtrees, and both respreads exclude
// `theme` so the enriched theme (name/variables/activeBreakpoint/theme props map) is kept for
// children instead of being clobbered by the raw props.theme. customComponent detection is a
// segment test ('customComponent' or 'customComponent-*'), not a substring match.

import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps final respread exception for customComponent treePaths (mergeProps.ts applyFinalRespreadExceptions())', () => {
	const componentType = 'button';
	const globalTheme = {
		type: 'templates',
		name: 'g',
		components: {
			button: { disabled: true },
		},
	};

	it('respreads passed props over the user-override selector when treePath contains customComponent', () => {
		const parentThemeObj = { some: 'parentTheme' };
		const properties = {
			disabled: false,
			treePath: 'customComponent',
			theme: parentThemeObj,
		};
		// @ts-ignore - plain object theme and untyped button props
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// the respread in applyFinalRespreadExceptions() fires because the treePath has a
		// 'customComponent' segment, so the raw passed prop beats the globalTheme user-override
		// selector ('button' without *) that had already set disabled to true.
		expect((props as any).disabled).toBe(false);
		expect(props.treePath).toBe('customComponent button');
	});

	it('keeps the enriched theme through the customComponent respread even when props.theme is passed', () => {
		const parentThemeObj = { some: 'parentTheme' };
		const properties = {
			disabled: false,
			treePath: 'customComponent',
			theme: parentThemeObj,
		};
		// @ts-ignore - plain object theme and untyped button props
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// QUIRK[final-respread-keeps-enriched-theme]: the respread excludes `theme`, so the
		// enriched theme built by enrichThemeMeta()/finalizeThemeForChildren() (name, variables,
		// activeBreakpoint, combined THEME_PROPS_MAP) survives for the custom subtree instead of
		// being replaced by the raw props.theme reference.
		expect(props.theme).not.toBe(parentThemeObj);
		expect((props.theme as any).name).toBe('g');
		expect((props.theme as any).some).toBe('parentTheme');
		expect((props.theme as any)[THEME_PROPS_MAP_SYMBOL]).toBeInstanceOf(Map);
		expect((props.theme as any)[THEME_PROPS_MAP_SYMBOL].get('disabled')).toBe(true);
	});

	it('does not respread for a non-matching treePath: theme selector wins and the enriched theme is kept', () => {
		const parentThemeObj = { some: 'parentTheme' };
		const properties = {
			disabled: false,
			treePath: 'other',
			theme: parentThemeObj,
		};
		// @ts-ignore - plain object theme and untyped button props
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		expect((props as any).disabled).toBe(true);
		expect((props.theme as any).name).toBe('g');
		expect(props.theme).not.toBe(parentThemeObj);
		expect(props.treePath).toBe('other button');
	});

	it('keeps the enriched theme through the respread when props has no theme key', () => {
		const properties = {
			disabled: false,
			treePath: 'customComponent',
		};
		// @ts-ignore - untyped button props
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// The respread at mergeProps.ts applyFinalRespreadExceptions() still fires (props win on disabled), but since props has no
		// 'theme' key the spread cannot clobber the enriched theme built at mergeProps.ts enrichThemeMeta().
		expect((props as any).disabled).toBe(false);
		expect((props as any).theme.name).toBe('g');
		expect(props.treePath).toBe('customComponent button');
	});
});

describe('mergeProps final respread exception for storybook treePaths (mergeProps.ts applyFinalRespreadExceptions())', () => {
	const componentType = 'select';
	const globalTheme = {
		type: 'templates',
		name: GLOBAL_THEME_NAME,
		components: {
			select: { separator: 'theme' },
		},
	};

	it('fires at 2 treePath segments: passed props beat the theme selector', () => {
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'storybook',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		expect(props.treePath).toBe('storybook select');
		expect(props.separator).toBe('props');
	});

	it('fires at 3+ treePath segments: passed props beat the theme selector at every nesting depth', () => {
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'storybook layout',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// Storybook-priority fix: the respread fires for ANY storybook-rooted treePath, so props
		// forwarded into nested components (story controls/args flowing through subProps) keep the
		// final say instead of losing to theme selectors once nested.
		expect(props.treePath).toBe('storybook layout select');
		expect(props.separator).toBe('props');
	});

	it('keeps the enriched theme through the storybook respread even when props.theme is passed', () => {
		const parentThemeObj = { some: 'parentTheme' };
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'storybook layout',
			theme: parentThemeObj as any,
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// Unlike the customComponent respread (which restores the raw props.theme reference), the
		// storybook respread excludes `theme`, so the enriched theme built by the templates branch
		// (name/variables/activeBreakpoint/theme props map) survives for children.
		expect(props.separator).toBe('props');
		expect(props.theme).not.toBe(parentThemeObj);
		expect((props.theme as any).name).toBe(GLOBAL_THEME_NAME);
		expect((props.theme as any).some).toBe('parentTheme');
	});

	it('a treePath starting with "storybooks" (plural) does NOT trigger the storybook respread', () => {
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'storybooks',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// the condition requires the 'storybook' prefix to be its own leading segment
		// (startsWith('storybook ')), so lookalike first segments no longer match
		expect(props.treePath).toBe('storybooks select');
		expect(props.separator).toBe('theme');
	});
});

describe('mergeProps final respread exception customComponent segment matching (mergeProps.ts applyFinalRespreadExceptions())', () => {
	const componentType = 'select';
	const globalTheme = {
		type: 'templates',
		name: GLOBAL_THEME_NAME,
		components: {
			select: { separator: 'theme' },
		},
	};

	it('a treePath containing customComponent inside a longer word does NOT trigger the respread', () => {
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'wrappedcustomComponentThing',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// detection is a segment test: a segment must be exactly 'customComponent' or start with
		// 'customComponent-' (what CustomComponentWrapper injects) — substrings embedded inside a
		// larger token no longer match.
		expect(props.treePath).toBe('wrappedcustomComponentThing select');
		expect(props.separator).toBe('theme');
	});

	it('respreads passed props when a customComponent- segment appears mid-path at any depth', () => {
		// Mirrors production CustomComponentWrapper, which injects 'customComponent-<Type>' as a segment.
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'search customComponent-Result thing',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// the segment test in applyFinalRespreadExceptions() matches 'customComponent-Result' at
		// any position in the treePath, letting the passed prop beat the theme selector for the
		// whole custom subtree.
		expect(props.treePath).toBe('search customComponent-Result thing select');
		expect(props.separator).toBe('props');
	});

	it('provenance respread works across the customComponent boundary (enriched theme carries the combined map)', () => {
		// step 1: the custom component wrapper level tracks a theme-derived value in its map
		const wrapperTheme = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			components: {
				'customComponent-Result': { color: 'red' },
				'*badge': { color: 'blue' },
			},
		};
		// @ts-ignore
		const wrapperResult = mergeProps('customComponent-Result', wrapperTheme as Theme, {}, { treePath: 'search' } as any);
		expect((wrapperResult as any).color).toBe('red');
		// the enriched theme now carries the combined map (it is no longer clobbered by the respread)
		const wrapperMap = (wrapperResult.theme as any)?.[THEME_PROPS_MAP_SYMBOL];
		expect(wrapperMap).toBeInstanceOf(Map);
		expect(wrapperMap.get('color')).toBe('red');

		// step 2: a child inside the custom subtree receives the forwarded theme-derived value and
		// the enriched theme; the T2 respread restores it over the child's own base theme
		// @ts-ignore
		const childResult = mergeProps('badge', wrapperTheme as Theme, {}, {
			treePath: wrapperResult.treePath,
			color: (wrapperResult as any).color,
			theme: wrapperResult.theme,
		} as any);
		expect((childResult as any).color).toBe('red');
	});

	it('globalTheme.variables and activeBreakpoint reach children through the customComponent respread', () => {
		const variables = { colors: { primary: '#123456' } };
		const themeWithVariables = {
			type: 'templates',
			name: GLOBAL_THEME_NAME,
			activeBreakpoint: 'mobile',
			variables,
			components: {
				select: { separator: 'theme' },
			},
		};
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'customComponent-Thing',
			theme: { some: 'parentTheme' } as any,
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, themeWithVariables as Theme, {}, properties);

		expect(props.separator).toBe('props');
		expect((props.theme as any).variables).toBe(variables);
		expect((props.theme as any).activeBreakpoint).toBe('mobile');
	});
});
