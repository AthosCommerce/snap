import { ThemeResponsiveComplete } from '../../../../providers';
import { autocomplete } from './autocomplete';

// ORGANISMS Imports

export const organisms = {
	default: {
		...autocomplete.default,
	},
	mobile: {
		...autocomplete.mobile,
	},
	tablet: {
		...autocomplete.tablet,
	},
	desktop: {
		...autocomplete.desktop,
	},
} as unknown as ThemeResponsiveComplete;
