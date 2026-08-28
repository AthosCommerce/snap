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
					discussProductIcon: { icon: 'chat' },
					hideQuickviewButton: false,
				},
				chatButton: {
					children: 'Ask AI',
				},
				chat: {
					// keep the floating bubble launcher alongside the inline ChatButton
					hideBubble: false,
				},
			},
		},
	},
	recommendation: {
		settings: {
			branch: 'production',
		},
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
	chat: {
		targets: [
			{
				// appended beside the search form (not inside it, which would move the box the
				// autocomplete overlay anchors to); ordered left of the form via website.css
				selector: '.ss__demo__search',
				component: 'ChatButton',
			},
			{
				selector: 'body',
				component: 'Chat',
			},
		],
		settings: {
			quickview: {
				enabled: true,
				displayFields: ['category', 'brand', 'color', 'price', 'rating', 'available', 'description'],
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
});

if (window.mergeSnapConfig) {
	templatesConfig = deepmerge(templatesConfig, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(templatesConfig);
