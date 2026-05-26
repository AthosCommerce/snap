import { SnapTemplates, SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { globalStyles } from './styles';
import { getDemoConfig } from '../../shared/demoConfig';

const { siteId, clientConfig } = getDemoConfig();

// const siteId = '8uyt2m';
// const clientConfig = {
// 	meta: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	search: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	autocomplete: {
// 		requesters: {
// 			suggest: {
// 				origin: `https://${siteId}.a.searchspring.io`,
// 			},
// 			legacy: {
// 				origin: `https://${siteId}.a.searchspring.io`,
// 			},
// 		},
// 	},
// 	finder: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	recommend: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 		paths: {
// 			recommend: `/boost/${siteId}/recommend`,
// 		},
// 	},
// 	suggest: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// };

let templatesConfig: SnapTemplatesConfig = {
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
		extends: 'pike',
		variables: {
			// breakpoints: {
			// 	mobile: 767,
			// 	tablet: 1024,
			// 	desktop: 1280,
			// },
			colors: {
				primary: '#1D4990',
				secondary: '#1D4990',
				accent: '#5ED1B3', // #CDE9DF
			},
		},
		style: globalStyles,
		overrides: {
			default: {
				autocompleteFixed: {
					width: '1000px',
					// column1: {
					// 	width: '200px',
					// }
				},
				'search facet': {
					rangeInputs: true,
				},
				'facet.collection-name': {
					// iconColor: 'red'
					searchable: true,
				},
			},
		},
	},
	recommendation: {
		email: {
			Email: {
				component: 'RecommendationEmail',
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
				component: 'Search',
			},
		],
		settings: {
			variants: {
				// showDisabledSelectionValues: true,
			},
			// infinite: {
			// 	backfill: 5,
			// },
		},
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
};

if (window.mergeSnapConfig) {
	templatesConfig = deepmerge(templatesConfig, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(templatesConfig);
