import { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../components/Templates/SearchCollapsible';
import { ThemeComponent } from '../../providers';

export const searchCollapsibleThemeComponentProps: ThemeComponent<'searchCollapsible', SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps> =
	{
		default: {
			searchCollapsible: {
				layoutOptions: [
					{
						value: 1,
						label: '4 wide',
						default: true,
						icon: 'layout-grid-4',
						overrides: {
							components: {
								'searchCollapsible results': {
									columns: 4,
								},
							},
						},
					},
					{
						value: 2,
						label: '3 wide',
						icon: 'layout-grid-3',
						overrides: {
							components: {
								'searchCollapsible results': {
									columns: 3,
								},
							},
						},
					},
				],
				hideToggleSidebarButton: false,
				toggleSidebarStartClosed: true,
			},
			'searchCollapsible button.sidebar-toggle': {
				icon: 'filters',
			},

			'searchCollapsible toolbar.top': {
				layout: [
					['banner.header'],
					// ['_', 'searchHeader', '_'],
					['banner.banner'],
					['button.sidebar-toggle', 'searchHeader', '_', 'perPage', 'sortBy', 'layoutSelector'],
				],
			},

			'searchCollapsible layoutSelector': {
				type: 'list',
				hideLabel: true,
				hideOptionLabels: true,
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
				layout: [['banner.header'], ['_', 'searchHeader', '_'], ['banner.banner'], ['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector']],
			},
			'searchCollapsible results': {
				columns: 2,
			},

			searchCollapsible: {
				layoutOptions: [
					{
						value: 3,
						label: '3 wide',
						icon: 'layout-grid-3',
						overrides: {
							components: {
								'searchCollapsible results': {
									columns: 3,
								},
							},
						},
					},
					{
						value: 4,
						label: '2 wide',
						default: true,
						icon: 'layout-grid-2',
						overrides: {
							components: {
								'searchCollapsible results': {
									columns: 2,
								},
							},
						},
					},
				],
			},
		},

		tablet: {
			'searchCollapsible toolbar.top': {
				layout: [
					['_', 'searchHeader', '_'],
					['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector'],
				],
			},
			'searchCollapsible results': {
				columns: 3,
			},
		},
		desktop: {},
	};
