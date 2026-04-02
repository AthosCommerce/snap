import { SnapTemplates } from '@athoscommerce/snap-preact';
import { globalStyles } from './styles';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import type { SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import { url } from '@athoscommerce/snap-toolbox';
import { StorageStore } from '@athoscommerce/snap-store-mobx';
import { getContext } from '@athoscommerce/snap-toolbox';

// storage for custom configuration
const configStore = new StorageStore({ type: 'local', key: 'ss-demo-config' });

/*
	configuration and instantiation
 */

let siteId = 'ck4bj7';
let chatWidgetId = 'test-mattel-demo';

const context = getContext(['siteId', 'searchOrigin', 'chatOrigin', 'chatWidgetId']);

// grab siteId out of the URL
const urlObj = url(window.location.href);
const urlSiteIdParam = urlObj.params.query.siteId || urlObj.params.query.siteid;
const urlSearchOriginParam = urlObj.params.query.searchOrigin;
const urlChatOriginParam = urlObj.params.query.chatOrigin;
const urlChatWidgetIdParam = urlObj.params.query.chatWidgetId;

// custom siteId
if (urlSiteIdParam && urlSiteIdParam.match(/[a-zA-Z0-9]{6}/)) {
	siteId = urlSiteIdParam;
	configStore.set('siteId', siteId);

	// clear previously stored storage
	window.localStorage.removeItem('ss-history');
	window.sessionStorage.removeItem('ss-controller-search');
	window.sessionStorage.removeItem('ss-controller-autocomplete');
} else if (context.siteId) {
	siteId = context.siteId;
} else {
	// use siteId from storage
	const storedSiteId = configStore.get('siteId');
	if (storedSiteId) siteId = storedSiteId;
}

// custom search origin
let customSearchOrigin = `https://${siteId}.a.searchspring.io`;
if (urlSearchOriginParam) {
	customSearchOrigin = urlSearchOriginParam;
	configStore.set('origin', urlSearchOriginParam);
} else if (context.searchOrigin) {
	customSearchOrigin = context.searchOrigin;
} else {
	const storedOrigin = configStore.get('origin');
	if (storedOrigin) customSearchOrigin = storedOrigin;
}

// custom chat origin
let customChatOrigin;
if (urlChatOriginParam) {
	customChatOrigin = urlChatOriginParam;
	configStore.set('chatOrigin', urlChatOriginParam);
} else if (context.chatOrigin) {
	customChatOrigin = context.chatOrigin;
} else {
	const storedOrigin = configStore.get('chatOrigin');
	if (storedOrigin) customChatOrigin = storedOrigin;
}

// custom chat widget id
if (urlChatWidgetIdParam) {
	chatWidgetId = urlChatWidgetIdParam;
	configStore.set('chatWidgetId', chatWidgetId);
} else if (context.chatWidgetId) {
	chatWidgetId = context.chatWidgetId;
} else {
	const storedChatWidgetId = configStore.get('chatWidgetId');
	if (storedChatWidgetId) chatWidgetId = storedChatWidgetId;
}

const clientConfig = {
	meta: {
		origin: customSearchOrigin,
	},
	search: {
		origin: customSearchOrigin,
	},
	recommend: {
		origin: customSearchOrigin,
	},
	suggest: {
		origin: customSearchOrigin,
		paths: {
			suggest: '/api/suggest/query',
			trending: '/api/suggest/trending',
		},
	},
	chat: {
		origin: 'https://asklo-backend.service-qa.ksearchnet.com',
	},
};

if (customChatOrigin) {
	clientConfig.chat = {
		origin: customChatOrigin,
	};
}

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
		siteId,
		mode: 'development', // should be removed for 'production' usage
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
		resultComponent: 'CustomResult',
		variables: {
			// breakpoints: {
			// 	mobile: 767,
			// 	tablet: 1024,
			// 	desktop: 1280,
			// },
			colors: {
				primary: '#1d498f',
				secondary: '#202223',
				accent: '#333333',
			},
		},
		style: globalStyles,
		overrides: {
			default: {},
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
		settings: {
			widgetId: chatWidgetId,
		},
		targets: [
			{
				selector: 'body',
				component: 'Chat',
			},
		],
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
