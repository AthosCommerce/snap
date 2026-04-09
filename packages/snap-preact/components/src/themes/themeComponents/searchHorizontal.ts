import { SearchHorizontalProps, SearchHorizontalTemplatesLegalProps } from '../../components/Templates/SearchHorizontal';
import { ThemeComponent } from '../../providers';

export const searchHorizontalThemeComponentProps: ThemeComponent<'searchHorizontal', SearchHorizontalProps, SearchHorizontalTemplatesLegalProps> = {
	default: {
		searchHorizontal: {
			hideSidebar: true,
		},
		'searchHorizontal toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['filterSummary'], ['facetsHorizontal'], ['paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
		'searchHorizontal toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
		'searchHorizontal facetsHorizontal': {
			limit: 9,
		},
		'searchHorizontal mobileSidebar': {
			layout: ['filterSummary', 'facets', 'banner.left'],
		},
	},

	mobile: {
		'searchHorizontal toolbar.middle': {
			layout: [['paginationInfo', '_', 'mobileSidebar'], ['sortBy', 'perPage'], ['banner.banner']],
		},
		'searchHorizontal facetsHorizontal': {
			limit: 4,
		},
		'searchHorizontal results': {
			columns: 2,
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
