import { ThemeComplete, ThemeVariables } from '../../providers';
import { components } from './components';
import { responsive } from './responsive';
import { custom } from './custom';
import { globalStyle } from './globalStyle';

const pikeVariables: ThemeVariables = {
	breakpoints: {
		mobile: custom.breakpoints.mobile,
		tablet: custom.breakpoints.tablet,
		desktop: custom.breakpoints.desktop,
	},
	colors: {
		primary: custom.colors.primary,
		secondary: custom.colors.secondary,
		accent: custom.colors.accent,
	},
};

export const pike: ThemeComplete = {
	name: 'pike',
	variables: pikeVariables,
	components,
	responsive,
	type: 'templates',
	globalStyle,
};
