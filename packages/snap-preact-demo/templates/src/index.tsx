import { SnapTemplates, SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { globalStyles } from './styles';
import { getDemoConfig } from '../../shared/demoConfig';

const { siteId, clientConfig } = getDemoConfig();

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
		extends: 'base',
		style: globalStyles,
		overrides: {
			default: {
				result: {
					hideQuickviewButton: false,
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
	},
	search: {
		targets: [
			{
				selector: '#athos-layout',
				component: 'Search',
			},
		],
		settings: {
			quickview: {
				displayFields: ['color', 'price', 'ss_gender', 'status', 'tags_category', 'vendor'],
			},
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
