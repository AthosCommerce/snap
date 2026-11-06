import { ThemeComplete, ThemeVariables } from '../../providers';
import { components } from './components';
import { responsive } from './responsive';

// monochrome by default - every color follows the page color (see custom.ts for what each drives)
const denaliVariables: ThemeVariables = {
	breakpoints: {
		mobile: 767,
		tablet: 991,
		desktop: 1299,
	},
	colors: {
		primary: 'currentColor',
		secondary: 'currentColor',
		accent: 'currentColor',
	},
};

export const denali: ThemeComplete = {
	name: 'denali',
	variables: denaliVariables,
	components,
	responsive,
	type: 'templates',
};
