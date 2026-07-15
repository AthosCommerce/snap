import { ThemeComplete, ThemeVariables } from '../../providers';
import { components } from './components';
import { responsive } from './responsive';

const denaliVariables: ThemeVariables = {
	breakpoints: {
		mobile: 767,
		tablet: 991,
		desktop: 1299,
	},
	colors: {
		primary: 'currentColor',
		secondary: '#000000',
		accent: '#efefef',
	},
};

export const denali: ThemeComplete = {
	name: 'denali',
	variables: denaliVariables,
	components,
	responsive,
	type: 'templates',
};
