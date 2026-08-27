import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { globalStyles } from './styles';
import { getDemoConfig } from '../../shared/demoConfig';

const { siteId, clientConfig } = getDemoConfig();

let templatesConfig = validateTemplatesConfig({
	config: {
		siteId: siteId,
		language: 'en',
		currency: 'usd',
		platform: 'other',
		client: clientConfig,
	},

	plugins: {
		common: {
			addToCart: {
				function: (data) => console.log('added to cart!', data),
			},
		},
	},
	components: {
		result: {
			CustomResult: async () => (await import('./components/Result')).CustomResult,
		},
	},
	theme: {
		extends: 'base',
		style: globalStyles,
		overrides: {
			default: {
				result: {
					hideQuickviewButton: false,
				},
				badgeImage: {
					$children: {
						badgeRectangle: {
							$children: {
								icon: {
									color: 'red',
								},
								'toolbar.middle': {
									toggleSideBarButton: {},
								},
							},
						},
					},
				},
				'facet.color': {
					$children: {
						facet: {
							// color: 5
						},
					},
					// color: 5,
					// hi: 'mom'
					color: 'red',
					// hi: 'mom',
				},
			},
		},
	},
	quickview: {
		targets: [
			{
				component: 'QuickviewModal',
			},
		],
		settings: {
			displayFields: [{ field: 'price', type: 'price' }, { field: 'color' }, { field: 'size' }],
		},
	},
	search: {
		targets: [
			{
				selector: '#athos-layout',
				component: 'Search',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				inputSelector: 'input.athos-ac',
				component: 'AutocompleteFixed',
			},
		],
		settings: {
			history: {
				limit: 6,
				showResults: true,
			},
			trending: {
				limit: 6,
				showResults: true,
			},
		},
	},
});

if (window.mergeSnapConfig) {
	templatesConfig = deepmerge(templatesConfig, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(templatesConfig);
