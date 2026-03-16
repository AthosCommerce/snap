import { SnapTemplates } from '@athoscommerce/snap-preact';
import { globalStyles } from './styles';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import type { SnapTemplatesConfig } from '@athoscommerce/snap-preact';
const siteId = 'atkzs2';

// const siteId = '8uyt2m';

// const clientConfig = {
// 	meta: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	search: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	recommend: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	suggest: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// };
let config: SnapTemplatesConfig = {
	config: {
		siteId: siteId,
		language: 'en',
		currency: 'usd',
		platform: 'other',
		// client: clientConfig
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
		extends: 'pike',
		//resultComponent: 'CustomResult',
		variables: {
			// breakpoints: {
			// 	mobile: 767,
			// 	tablet: 1024,
			// 	desktop: 1280,
			// },
			// colors: {
			// 	primary: '#6d7175',
			// 	secondary: '#202223',
			// 	accent: '#333333',
			// },
		},
		style: globalStyles,
		overrides: {
			default: {
				facet: {
					// iconColor: 'red'
				},
			},
		},
	},
	recommendation: {
		email: {
			Email: {
				component: 'RecommendationEmail',
				//resultComponent: 'EmailResult',
			},
		},
		default: {
			Default: {
				component: 'Recommendation',
			},
		},
		bundle: {
			Bundle: {
				component: 'RecommendationBundle',
			},
		},
	},
	search: {
		targets: [
			{
				selector: '#athos-layout',
				component: 'SearchCollapsible',
			},
		],
		settings: {
			variants: {
				showDisabledSelectionValues: true,
			},
			// infinite: {
			// 	backfill: 5,
			// },
		},
	},
	autocomplete: {
		targets: [
			{
				selector: 'input.athos-ac',
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
};

if (window.mergeSnapConfig) {
	config = deepmerge(config, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(config);

/*


Overrides are taking priority over the theme layouts (responsive) specified within the Search component - but they shouldn't be.
Look into:
			overrides: {
				'toolbar.top': {
					layout: [
						['Banner.header'],
					]
				},
				'toolbar.middle': {
					layout: [
						['_', 'Pagination'],
						['Pagination'],
						['Pagination'],
						['Pagination'],
						['Pagination'],
						['Banner.banner']
					]
				},
			},

*/
