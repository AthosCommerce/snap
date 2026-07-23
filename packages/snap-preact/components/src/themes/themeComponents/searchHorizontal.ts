import { SearchHorizontalProps, SearchHorizontalTemplatesLegalProps } from '../../components/Templates/SearchHorizontal';
import { ThemeComponent } from '../../providers';

export const searchHorizontalThemeComponentProps: ThemeComponent<'searchHorizontal', SearchHorizontalProps, SearchHorizontalTemplatesLegalProps> = {
	default: {
		searchHorizontal: {
			hideSidebar: true,
		},
		'searchHorizontal toolbar.top': {
			layout: [['_', 'searchHeader', '_'], ['banner.header']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['filterSummary'], ['facetsHorizontal', '_', 'sortBy'], ['banner.banner'], ['paginationInfo', '_']],
		},
		'searchHorizontal toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
		'searchHorizontal facetsHorizontal': {
			limit: 9,
		},
		'searchHorizontal sidebar': {
			layout: ['filterSummary', 'facets', 'banner.left'],
		},
	},

	mobile: {
		searchHorizontal: {
			hideSidebar: false,
		},
		'searchHorizontal toolbar.top': {
			layout: [['banner.header'], ['searchHeader', '_']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']],
		},
		'searchHorizontal results': {
			columns: 2,
		},
		'searchHorizontal filterSummary': {
			hideTitle: false,
		},
	},
	tablet: {
		'searchHorizontal facetsHorizontal': {
			limit: 5,
		},
		'searchHorizontal results': {
			columns: 3,
		},
	},

	desktop: {
		'searchHorizontal facetsHorizontal': {
			limit: 7,
		},
	},
};
