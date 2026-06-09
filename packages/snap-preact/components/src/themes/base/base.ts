import { ThemeComplete, ThemeVariables } from '../../providers';
import { responsive } from './responsive';
import { components } from './components';

const baseVariables: ThemeVariables = {
	breakpoints: {
		mobile: 767,
		tablet: 1024,
		desktop: 1400,
	},
	colors: {
		primary: 'currentColor',
		secondary: 'currentColor',
		accent: 'currentColor',
	},
};

export const base: ThemeComplete = {
	name: 'base',
	variables: baseVariables,
	components,
	responsive,
	type: 'templates',
};
