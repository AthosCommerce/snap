import { ThemeComponents, ThemeComponentsRestricted, ThemeComponentTemplateOverrides } from './themeComponents';
import { ListOption } from '../types';

export { css, useTheme, withTheme, ThemeProvider } from '@emotion/react';

export const defaultTheme: Theme = {
	variables: {
		breakpoints: {
			mobile: 540,
			tablet: 767,
			desktop: 1200,
		},
		colors: {
			text: '#222222',
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
	text?: string;
	primary: string;
	secondary: string;
	accent: string;
};

export type ThemeVariables = {
	breakpoints: ThemeVariableBreakpoints;
	colors: ThemeVaraibleColors;
};

export type ThemeVariablesPartial = {
	breakpoints?: ThemeVariableBreakpoints;
	colors?: ThemeVaraibleColors;
	custom?: {
		[key: string]: any;
	};
};

export type ThemeLayoutOption = Omit<ListOption, 'overrides'> & { overrides?: ThemeMinimal };

export type Theme = {
	name?: string; // Used as a flag in components to provide backwards compatability
	variables?: ThemeVariables;
	responsive?: ThemeResponsive;
	components?: ThemeComponents;
	overrides?: ThemeOverrides;
	activeBreakpoint?: ResponsiveKeys;
};

export type ThemeComponent<Template extends string, Props extends LegalProps, LegalProps> = {
	default?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
	mobile?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
	tablet?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
	desktop?: ThemeComponentTemplateOverrides<Template, Props, LegalProps>;
};

export type ThemeComplete = Required<Omit<Theme, 'overrides' | 'activeBreakpoint' | 'components'>> & { components: ThemeComponentsRestricted };

export type ThemeResponsive = {
	mobile?: ThemeComponentsRestricted;
	tablet?: ThemeComponentsRestricted;
	desktop?: ThemeComponentsRestricted;
};

export type ThemeResponsiveComplete = ThemeResponsive & { default?: ThemeComponentsRestricted };

// Full versions that allow all component props (for Snap integration migration path)
export type ThemeResponsiveFull = {
	mobile?: ThemeComponents;
	tablet?: ThemeComponents;
	desktop?: ThemeComponents;
};

export type ThemeResponsiveCompleteFull = ThemeResponsiveFull & { default?: ThemeComponents };

export type ResponsiveKeys = 'default' | 'desktop' | 'tablet' | 'mobile';

export type ThemePartial = Omit<Theme, 'variables' | 'name' | 'components'> & {
	variables?: ThemeVariablesPartial;
	components?: ThemeComponentsRestricted;
};
export type ThemeOverrides = { components?: ThemeComponentsRestricted; responsive?: ThemeResponsive };

export type ThemeMinimal = { components?: ThemeComponentsRestricted };
