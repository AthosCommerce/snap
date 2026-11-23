import type { PerPageProps, PerPageTemplatesLegalProps } from '../../../../components/Molecules/PerPage';
import { ThemeComponent } from '../../../../providers';

// PerPage component props
export const perPage: ThemeComponent<'perPage', PerPageProps, PerPageTemplatesLegalProps> = {
	default: {
		// the dropdown takes its look from the select theme
		perPage: {
			label: '',
		},
	},
	mobile: {
		'perPage select': {
			separator: '',
		},
	},
};
