// Part of the mergeProps characterization suite pinning CURRENT behavior ahead of a planned refactor.
// This file covers the final respread exceptions for customComponent and storybook treePaths.
// The customComponent respread is pinned as-is (QUIRK comments flag behavior that looks unintended).
// The storybook respread reflects the Storybook-priority fix: props provided via story controls/args
// have the final say at EVERY depth of a storybook-rooted tree, and the respread keeps the enriched
// theme (name/variables/activeBreakpoint/theme props map) instead of restoring the raw props.theme.

import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { mergeProps } from './mergeProps';

const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

describe('mergeProps final respread exception for customComponent treePaths (mergeProps.ts:196-202)', () => {
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

		// QUIRK: the '...props' respread at mergeProps.ts:200 fires because treePath contains 'customComponent'
		// (mergeProps.ts:196), so the raw passed prop beats the globalTheme user-override selector ('button' without *)
		// that had already set disabled to true.
		expect((props as any).disabled).toBe(false);
		expect(props.treePath).toBe('customComponent button');
	});

	it('replaces the enriched theme with the raw props.theme reference, losing name and theme props map', () => {
		const parentThemeObj = { some: 'parentTheme' };
		const properties = {
			disabled: false,
			treePath: 'customComponent',
			theme: parentThemeObj,
		};
		// @ts-ignore - plain object theme and untyped button props
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// QUIRK: the '...props' respread at mergeProps.ts:200 discards the freshly built theme object
		// (constructed at mergeProps.ts:163-179 with name/variables/activeBreakpoint and stamped with the
		// THEME_PROPS_MAP at mergeProps.ts:193), restoring the raw props.theme reference instead.
		expect(props.theme).toBe(parentThemeObj);
		expect((props.theme as any).name).toBeUndefined();
		expect((props.theme as any)[THEME_PROPS_MAP_SYMBOL]).toBeUndefined();
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

		// The respread at mergeProps.ts:200 still fires (props win on disabled), but since props has no
		// 'theme' key the spread cannot clobber the enriched theme built at mergeProps.ts:163-171.
		expect((props as any).disabled).toBe(false);
		expect((props as any).theme.name).toBe('g');
		expect(props.treePath).toBe('customComponent button');
	});
});

describe('mergeProps final respread exception for storybook treePaths (mergeProps.ts:203-215)', () => {
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

describe('mergeProps final respread exception customComponent substring matching (mergeProps.ts:196-202)', () => {
	const componentType = 'select';
	const globalTheme = {
		type: 'templates',
		name: GLOBAL_THEME_NAME,
		components: {
			select: { separator: 'theme' },
		},
	};

	it('a treePath containing customComponent inside a longer word triggers the respread', () => {
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'wrappedcustomComponentThing',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// QUIRK: the condition at mergeProps.ts:196 uses treePath.indexOf('customComponent') > -1, a
		// substring check with no segment boundaries, so 'customComponent' embedded anywhere inside a
		// larger token ('wrappedcustomComponentThing') also triggers the respread.
		expect(props.treePath).toBe('wrappedcustomComponentThing select');
		expect(props.separator).toBe('props');
	});

	it('respreads passed props when customComponent appears in a middle segment at any depth', () => {
		// Mirrors production CustomComponentWrapper, which injects 'customComponent-<Type>' as a segment.
		const properties: Partial<SelectProps> = {
			separator: 'props',
			treePath: 'search customComponent-Result thing',
		};
		// @ts-ignore - plain object globalTheme
		const props = mergeProps(componentType, globalTheme as Theme, {}, properties);

		// The indexOf check at mergeProps.ts:196 matches 'customComponent' at any position in the
		// treePath, so the respread fires even when the segment is deep in the path and suffixed
		// ('customComponent-Result'), letting the passed prop beat the theme selector.
		expect(props.treePath).toBe('search customComponent-Result thing select');
		expect(props.separator).toBe('props');
	});
});
