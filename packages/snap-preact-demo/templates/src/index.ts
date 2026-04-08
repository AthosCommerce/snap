import { SnapTemplates, SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { globalStyles } from './styles';
import { getDemoConfig } from '../../shared/demoConfig';

const { siteId, clientConfig } = getDemoConfig();

let templatesConfig: SnapTemplatesConfig = {
	unlocked: true,
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
			default: {},
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
	templatesConfig = deepmerge(templatesConfig as object, window.mergeSnapConfig, { arrayMerge: combineMerge }) as SnapTemplatesConfig;
}

new SnapTemplates(templatesConfig);
