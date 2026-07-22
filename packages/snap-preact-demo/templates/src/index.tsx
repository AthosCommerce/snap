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
	// 'translations': {
	// 	'en': {
	// 		'search': {
	// 			toggleSidebarButtonText: {
	// 				value: (data: { sidebarOpenState: boolean }) => {
	// 					if (data.sidebarOpenState) {
	// 						return 'Close Sidebar';
	// 					}
	// 					return 'Open Sidebar';
	// 				},
	// 			}
	// 		},
	// 	},
	// },
	theme: {
		extends: 'base',
		style: globalStyles,
		overrides: {
			default: {
				// 'toolbar.top': {
				// 	layout: [['_', 'searchHeader', '_'],['button.sidebar-toggle'], ['banner.header']],
				// },
				// 'button.sidebar-toggle': {
				// 	icon: {
				// 		svg: <svg ss-path="storybook icon" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className="ss__icon ss__icon--filter ss-rss44f"><path d="M25.519 21.889c0 0-0.241-4.089-0.241-4.089s0-13.471 0-13.471c0.002-1.162-0.005-2.636 0.825-3.553 1.104-1.224 3.156-0.929 4.022 0.435 0.498 0.787 0.443 1.744 0.445 2.636 0 0 0 25.258 0 25.258s-5.052 0-5.052 0c0 0 0-7.217 0-7.217zM42.358 3.848c0.019-1.576 0.281-3.476 2.165-3.794 2.798-0.471 3.125 2.24 3.127 4.275 0 0 0 11.546 0 11.546s-2.646-0.233-2.646-0.233c0 0-2.646 0.233-2.646 0.233s0-12.028 0-12.028zM8.44 3.848c0.014-1.181 0.147-2.442 1.229-3.163 1.484-0.986 3.286-0.156 3.825 1.479 0.322 0.984 0.238 2.545 0.238 3.608 0 0 0 6.014 0 6.014s-2.646-0.197-2.646-0.197c0 0-2.646 0.197-2.646 0.197s0-7.938 0-7.938zM13.010 13.556c5.509 1.855 5.477 10.377-1.203 11.551-5.121 0.902-8.455-5.015-5.867-9.23 0.907-1.475 2.314-2.151 3.943-2.535 1.176-0.166 1.985-0.171 3.127 0.214zM46.207 28.993c-5.564 1.051-8.874-4.833-6.348-9.028 1.046-1.737 2.533-2.357 4.424-2.774 7.57-0.883 9.36 10.399 1.924 11.802zM13.732 26.46c0 0 0 24.536 0 24.536-0.002 1.215-0.067 3.079-0.844 4.063-1.066 1.352-3.094 1.222-3.984-0.226-0.496-0.808-0.462-1.958-0.464-2.875 0 0 0-25.499 0-25.499s5.292 0 5.292 0zM33.219 33.436c1.936 3.286-0.019 8.15-3.851 8.821-1.169 0.207-3.019 0.135-4.089-0.402-4.71-2.355-4.39-9.803 1.443-11.193 2.673-0.375 5.056 0.33 6.497 2.774zM45.004 30.77c0 0 2.646-0.221 2.646-0.221s0 21.409 0 21.409c-0.002 1.034 0.034 2.215-0.649 3.074-0.977 1.224-3.017 1.224-3.993 0-0.637-0.799-0.645-1.867-0.649-2.834 0 0 0-21.65 0-21.65s2.646 0.221 2.646 0.221zM27.684 43.998c0 0 2.887-0.219 2.887-0.219s0 8.66 0 8.66c-0.022 1.758-0.654 3.861-2.887 3.517-1.912-0.296-2.384-2.114-2.406-3.757 0 0 0-8.419 0-8.419s2.406 0.219 2.406 0.219z"></path></svg>
				// 	}
				// },
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
				component: 'SearchCollapsible',
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
};

if (window.mergeSnapConfig) {
	templatesConfig = deepmerge(templatesConfig, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(templatesConfig);
