import { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../components/Templates/SearchCollapsible';
import { ThemeComponent } from '../../providers';

export const searchCollapsibleThemeComponentProps: ThemeComponent<'searchCollapsible', SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps> =
	{
		default: {
			searchCollapsible: {
				hideToggleSidebarButton: false,
				toggleSidebarStartClosed: true,
			},
			'searchCollapsible button.sidebar-toggle': {
				icon: 'filters',
			},

			'searchCollapsible toolbar.top': {
				layout: [['banner.header'], ['searchHeader'], ['banner.banner'], ['button.sidebar-toggle', 'paginationInfo', '_', 'perPage', 'sortBy']],
			},
			'searchCollapsible toolbar.middle': {
				layout: [],
			},

			'searchCollapsible toolbar.bottom': {
				layout: [['banner.footer'], ['_', 'pagination', '_']],
			},

			'searchCollapsible results': {
				columns: 4,
			},
		},
		mobile: {
			'searchCollapsible toolbar.top': {
				layout: [['banner.header'], ['searchHeader', '_']],
			},
			'searchCollapsible toolbar.middle': {
				layout: [['paginationInfo', '_'], ['mobileSidebar', '_', 'sortBy'], ['banner.banner']],
			},
			'searchCollapsible results': {
				columns: 2,
			},
		},

		tablet: {
			'searchCollapsible toolbar.top': {
				layout: [['banner.header'], ['searchHeader', '_']],
			},
			'searchCollapsible toolbar.middle': {
				layout: [['paginationInfo', '_'], ['mobileSidebar', '_', 'sortBy'], ['banner.banner']],
			},
			'searchCollapsible results': {
				columns: 3,
			},
		},
		desktop: {},
	};
