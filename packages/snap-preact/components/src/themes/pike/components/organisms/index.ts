import { ThemeResponsiveComplete } from '../../../../providers';

// ORGANISMS Imports
import { autocomplete } from './autocomplete';
import { facet } from './facet';
import { facets } from './facets';
import { facetsHorizontal } from './facetsHorizontal';
import { filterSummary } from './filterSummary';
import { mobileSidebar } from './mobileSidebar';
import { noResults } from './noResults';
import { results } from './results';
import { sidebar } from './sidebar';
import { termsList } from './termsList';
import { toolbar } from './toolbar';

export const organisms = {
	default: {
		...autocomplete.default,
		...facet.default,
		...facets.default,
		...facetsHorizontal.default,
		...filterSummary.default,
		...mobileSidebar.default,
		...noResults.default,
		...results.default,
		...sidebar.default,
		...toolbar.default,
		...termsList.default,
	},
	mobile: {
		...autocomplete.mobile,
		...facet.mobile,
		...facets.mobile,
		...facetsHorizontal.mobile,
		...filterSummary.mobile,
		...mobileSidebar.mobile,
		...noResults.mobile,
		...results.mobile,
		...sidebar.mobile,
		...toolbar.mobile,
		...termsList.mobile,
	},
	tablet: {
		...autocomplete.tablet,
		...facet.tablet,
		...facets.tablet,
		...facetsHorizontal.tablet,
		...filterSummary.tablet,
		...mobileSidebar.tablet,
		...noResults.tablet,
		...results.tablet,
		...sidebar.tablet,
		...toolbar.tablet,
		...termsList.tablet,
	},
	desktop: {
		...autocomplete.desktop,
		...facet.desktop,
		...facets.desktop,
		...facetsHorizontal.desktop,
		...filterSummary.desktop,
		...mobileSidebar.desktop,
		...noResults.desktop,
		...results.desktop,
		...sidebar.desktop,
		...toolbar.desktop,
		...termsList.desktop,
	},
} as unknown as ThemeResponsiveComplete;
