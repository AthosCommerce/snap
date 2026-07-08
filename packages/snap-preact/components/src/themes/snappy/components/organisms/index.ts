import { ThemeResponsiveComplete } from '../../../../providers';

// ORGANISMS Imports
import { facet } from './facet';
import { facetsHorizontal } from './facetsHorizontal';
import { filterSummary } from './filterSummary';
import { noResults } from './noResults';
import { sidebar } from './sidebar';
import { termsList } from './termsList';
import { toolbar } from './toolbar';
import { autocomplete } from './autocomplete';

export const organisms: ThemeResponsiveComplete = {
	default: {
		...autocomplete.default,
		...facet.default,
		...facetsHorizontal.default,
		...filterSummary.default,
		...noResults.default,
		...sidebar.default,
		...toolbar.default,
		...termsList.default,
	},
	mobile: {
		...autocomplete.mobile,
		...facet.mobile,
		...facetsHorizontal.mobile,
		...filterSummary.mobile,
		...noResults.mobile,
		...sidebar.mobile,
		...toolbar.mobile,
		...termsList.mobile,
	},
	tablet: {
		...autocomplete.tablet,
		...facet.tablet,
		...facetsHorizontal.tablet,
		...filterSummary.tablet,
		...noResults.tablet,
		...sidebar.tablet,
		...toolbar.tablet,
		...termsList.tablet,
	},
	desktop: {
		...autocomplete.desktop,
		...facet.desktop,
		...facetsHorizontal.desktop,
		...filterSummary.desktop,
		...noResults.desktop,
		...sidebar.desktop,
		...toolbar.desktop,
		...termsList.desktop,
	},
};
