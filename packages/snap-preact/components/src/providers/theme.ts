import { createContext, h, type ComponentChildren } from 'preact';
import { useContext, useLayoutEffect, useRef, useState } from 'preact/hooks';
import {
	ThemeComponents,
	ThemeComponentsRestricted,
	ThemeComponentsRestrictedWithCustomComponent,
	ThemeComponentTemplateOverrides,
} from './themeComponents';
export type { ThemeComponentsRestrictedWithCustomComponent } from './themeComponents';
import { ListOption } from '../types';

import { css, Global, useTheme, withTheme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';

export { css, useTheme, withTheme };

export const defaultTheme: Theme = {
	variables: {
		breakpoints: {
			mobile: 540,
			tablet: 767,
			desktop: 1200,
		},
		colors: {
			primary: '#3A23AD',
			secondary: '#4c3ce2',
			accent: '#00cee1',
		},
	},
};

export type ThemeVariableBreakpoints = {
	mobile: number;
	tablet: number;
	desktop: number;
};
type ThemeVaraibleColors = {
	primary: string;
	secondary: string;
	accent: string;
};

export type ThemeVariables = {
	breakpoints: ThemeVariableBreakpoints;
	colors: ThemeVaraibleColors;
};

export type ThemeVariablesPartial = {
	breakpoints?: Partial<ThemeVariableBreakpoints>;
	colors?: Partial<ThemeVaraibleColors>;
	custom?: {
		[key: string]: any;
	};
};

export type ThemeLayoutOption = Omit<ListOption, 'overrides'> & { overrides?: ThemeMinimal };

export type Theme = {
	name?: string;
	variables?: ThemeVariables;
	responsive?: ThemeResponsive;
	components?: ThemeComponents;
	overrides?: ThemeOverrides;
	activeBreakpoint?: ResponsiveKeys;
	globalStyle?: ThemeGlobalStyleScript;
};

export type ThemeComponent<Template extends string, Props extends LegalProps, LegalProps> = {
	default?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
	mobile?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
	tablet?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
	desktop?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
};

// Global style function defined inside a theme — injected at the `.ss__theme__${name}` scope
export type ThemeGlobalStyleScript = (props: { name?: string; variables: ThemeVariables }) => Record<string, any>;

export type ThemeComplete = Required<Omit<Theme, 'overrides' | 'activeBreakpoint' | 'components' | 'globalStyle'>> & {
	components: ThemeComponentsRestricted;
	type: 'templates'; // Used as a flag in components to provide backwards compatibility
	globalStyle?: ThemeGlobalStyleScript; // Optional global CSS injected at theme scope (alternative to per-component overrides in `components`)
};

export type ThemeResponsive = {
	mobile?: ThemeComponentsRestricted;
	tablet?: ThemeComponentsRestricted;
	desktop?: ThemeComponentsRestricted;
};

export type ThemeResponsiveComplete = ThemeResponsive & { default?: ThemeComponentsRestricted };

// Unlocked versions that allow all component props (for Snap integration migration path)
export type ThemeResponsiveUnlocked = {
	mobile?: ThemeComponentsRestrictedWithCustomComponent;
	tablet?: ThemeComponentsRestrictedWithCustomComponent;
	desktop?: ThemeComponentsRestrictedWithCustomComponent;
};

export type ThemeResponsiveCompleteUnlocked = ThemeResponsiveUnlocked & { default?: ThemeComponentsRestrictedWithCustomComponent };

export type ResponsiveKeys = 'default' | 'desktop' | 'tablet' | 'mobile';

export type ThemePartial = Omit<Theme, 'variables' | 'name' | 'components'> & {
	variables?: ThemeVariablesPartial;
	components?: ThemeComponentsRestricted;
};
export type ThemeOverrides = { components?: ThemeComponentsRestricted; responsive?: ThemeResponsive };

export type ThemeMinimal = { components?: ThemeComponentsRestricted };

type ThemeProviderTheme = Omit<Theme, 'variables'> & {
	variables?: ThemeVariables | ThemeVariablesPartial;
};

type ThemeProviderProps = {
	theme: ThemeProviderTheme;
	children?: ComponentChildren;
};

const ThemeGlobalStyleContext = createContext<string[]>([]);
const ThemeGlobalStyleRoots = new Map<string, Set<symbol>>();
const ThemeGlobalStyleOwners = new Map<string, symbol>();
const ThemeGlobalStyleListeners = new Set<() => void>();

const notifyThemeGlobalStyleListeners = () => {
	ThemeGlobalStyleListeners.forEach((listener) => listener());
};

const subscribeToThemeGlobalStyleChanges = (listener: () => void) => {
	ThemeGlobalStyleListeners.add(listener);
	return () => ThemeGlobalStyleListeners.delete(listener);
};

const ensureThemeGlobalStyleRoot = (themeName: string, rootId: symbol) => {
	const roots = ThemeGlobalStyleRoots.get(themeName) || new Set<symbol>();
	roots.add(rootId);
	ThemeGlobalStyleRoots.set(themeName, roots);

	if (!ThemeGlobalStyleOwners.has(themeName)) {
		ThemeGlobalStyleOwners.set(themeName, rootId);
	}
};

const unregisterThemeGlobalStyleRoot = (themeName: string, rootId: symbol) => {
	const roots = ThemeGlobalStyleRoots.get(themeName);
	if (!roots) {
		return;
	}

	roots.delete(rootId);

	if (!roots.size) {
		ThemeGlobalStyleRoots.delete(themeName);
		ThemeGlobalStyleOwners.delete(themeName);
		notifyThemeGlobalStyleListeners();
		return;
	}

	if (ThemeGlobalStyleOwners.get(themeName) === rootId) {
		const nextOwner = roots.values().next().value;
		if (nextOwner) {
			ThemeGlobalStyleOwners.set(themeName, nextOwner);
		}
		notifyThemeGlobalStyleListeners();
	}
};

const isThemeGlobalStyleOwner = (themeName: string, rootId: symbol) => ThemeGlobalStyleOwners.get(themeName) === rootId;

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
	const globalStyle = theme.globalStyle;
	const themeName = theme.name;
	const activeThemeGlobalStyles = useContext(ThemeGlobalStyleContext);
	const rootId = useRef(Symbol(themeName || 'theme-provider'));
	const [, setRegistryVersion] = useState(0);
	const themeVariables: ThemeVariables = {
		breakpoints: {
			...defaultTheme.variables!.breakpoints,
			...theme.variables?.breakpoints,
		},
		colors: {
			...defaultTheme.variables!.colors,
			...theme.variables?.colors,
		},
	};
	const shouldWrapWithThemeScope = Boolean(globalStyle && themeName && !activeThemeGlobalStyles.includes(themeName));
	const nextActiveThemeGlobalStyles = shouldWrapWithThemeScope && themeName ? [...activeThemeGlobalStyles, themeName] : activeThemeGlobalStyles;
	if (shouldWrapWithThemeScope && themeName) {
		ensureThemeGlobalStyleRoot(themeName, rootId.current);
	}
	const shouldRenderGlobalStyle = Boolean(shouldWrapWithThemeScope && themeName && isThemeGlobalStyleOwner(themeName, rootId.current));

	useLayoutEffect(() => {
		if (!shouldWrapWithThemeScope || !themeName) {
			return;
		}

		const unsubscribe = subscribeToThemeGlobalStyleChanges(() => setRegistryVersion((version) => version + 1));

		return () => {
			unsubscribe();
			unregisterThemeGlobalStyleRoot(themeName, rootId.current);
		};
	}, [shouldWrapWithThemeScope, themeName]);

	const scopedChildren = shouldWrapWithThemeScope && themeName ? h('div', { className: `ss__theme__${themeName}` }, children) : children;
	const providerChildren =
		shouldRenderGlobalStyle && globalStyle && themeName
			? [
					h(Global, {
						styles: css({
							[`.ss__theme__${themeName}`]: globalStyle({
								name: themeName,
								variables: themeVariables,
							}),
						}),
					}),
					scopedChildren,
			  ]
			: scopedChildren;

	return h(EmotionThemeProvider, {
		theme,
		children: h(ThemeGlobalStyleContext.Provider, { value: nextActiveThemeGlobalStyles }, providerChildren),
	});
};
