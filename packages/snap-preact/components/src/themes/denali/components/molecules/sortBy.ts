import type { SortByProps, SortByTemplatesLegalProps } from '../../../../components/Molecules/SortBy';
import { ThemeComponent } from '../../../../providers';

// SortBy component props
export const sortBy: ThemeComponent<'sortBy', SortByProps, SortByTemplatesLegalProps> = {
	// the dropdown takes its look from the select theme
	default: {},
	mobile: {
		'sortBy select': {
			separator: '',
		},
	},
};
