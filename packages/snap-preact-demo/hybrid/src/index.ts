import { SnapHybrid } from '@athoscommerce/snap-preact';
import type { SnapTemplatesConfig, SnapConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { afterStore, mutateResultsURL } from '../../snap/src/middleware/plugins/afterStore';
import { ContentSkel } from '../../snap/src/components/Content/Skel';
import { SidebarSkel } from '../../snap/src/components/Sidebar/Skel';
import { getContext } from '@athoscommerce/snap-toolbox';
import { SearchRequestModelFilterTypeEnum } from '@athoscommerce/snapi-types';
import { globalStyles } from '../../templates/src/styles';
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
				function: (data: any) => console.log('added to cart!', data),
			},
		},
	},
	components: {
		result: {
			CustomResult: async () => (await import('../../templates/src/components/Result')).CustomResult,
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

const context = getContext(['collection']);
const backgroundFilters = [];

if (context.collection?.handle) {
	// set background filter
	if (context.collection.handle != 'all') {
		backgroundFilters.push({
			field: 'collection_handle',
			value: context.collection.handle,
			//todo should we kill this enum?
			type: 'value' as SearchRequestModelFilterTypeEnum,
			background: true,
		});
	}
}

/*
    configuration and instantiation
 */

let snapConfig: SnapConfig = {
	mode: 'development', // should be removed for 'production' usage
	url: {
		parameters: {
			core: {
				query: { name: 'q' },
			},
		},
	},
	client: {
		globals: {
			siteId,
		},
		config: clientConfig,
	},
	instantiators: {
		recommendation: {
			components: {
				Recs: async () => {
					return (await import('../../snap/src/components/Recommendations/Recs/Recs')).Recs;
				},
				Carousel: async () => {
					return (await import('../../snap/src/components/Recommendations/Recs/Recs')).Recs;
				},
				Bundle: async () => {
					return (await import('../../snap/src/components/Recommendations/Bundles/Bundles')).Bundles;
				},
				Default: async () => {
					return (await import('../../snap/src/components/Recommendations/Recs/Recs')).Recs;
				},
				Email: async () => {
					return (await import('../../snap/src/components/Recommendations/Email/Email')).Email;
				},
			},

			config: {
				// branch: BRANCHNAME,
				branch: 'production',
				plugins: [[mutateResultsURL]],
			},
		},
	},
	controllers: {
		search: [
			{
				config: {
					id: 'search_snap',
					plugins: [[afterStore], [mutateResultsURL]],
					settings: {
						infinite: {
							backfill: 5,
						},
						redirects: {
							singleResult: false,
						},
						restorePosition: {
							enabled: true,
						},
						pagination: {
							pageSizeOptions: [
								{
									value: 12,
									label: 'Show 12',
								},
								{
									value: 24,
									label: 'Show 24',
								},
								{
									value: 48,
									label: 'Show 48',
								},
								{
									value: 72,
									label: 'Show 72',
								},
							],
						},
					},
					globals: {
						filters: backgroundFilters,
					},
				},
				targeters: [
					{
						selector: '#athos-content',
						hideTarget: true,
						renderAfterSearch: true,
						skeleton: () => ContentSkel,
						component: async () => {
							return (await import('../../snap/src/components/Content/Content')).Content;
						},
					},
					{
						selector: '#athos-sidebar',
						hideTarget: true,
						renderAfterSearch: true,
						skeleton: () => SidebarSkel,
						component: async () => {
							return (await import('../../snap/src/components/Sidebar/Sidebar')).Sidebar;
						},
					},
				],
			},
		],
		autocomplete: [
			{
				config: {
					id: 'autocomplete_snap',
					selector: 'input.athos-ac',
					plugins: [[mutateResultsURL]],
					settings: {
						trending: {
							limit: 5,
						},
						history: {
							limit: 5,
						},
					},
				},
				targeters: [
					{
						selector: 'input.athos-ac',
						hideTarget: true,
						component: async () => {
							return (await import('../../snap/src/components/Autocomplete/Autocomplete')).Autocomplete;
						},
					},
				],
			},
		],
		finder: [
			{
				config: {
					id: 'finder',
					url: '/hybrid/',
					fields: [
						{
							field: 'collection_name',
							label: 'Collection',
						},
						{
							field: 'color',
							label: 'Color',
						},
					],
				},
				targeters: [
					{
						name: 'finder',
						selector: '#athos-finder',
						component: async () => {
							return (await import('../../snap/src/components/Finder/Finder')).Finder;
						},
					},
				],
			},
			{
				config: {
					id: 'finder_hierarchy',
					url: '/hybrid/',
					fields: [
						{
							field: 'ss_category_hierarchy',
						},
					],
				},
				targeters: [
					{
						name: 'finder_hierarchy',
						selector: '#athos-finder-hierarchy',
						component: async () => {
							return (await import('../../snap/src/components/Finder/Finder')).Finder;
						},
					},
				],
			},
		],
	},
};

if (window.mergeSnapConfig) {
	templatesConfig = deepmerge(templatesConfig as object, window.mergeSnapConfig, { arrayMerge: combineMerge });
	snapConfig = deepmerge(snapConfig, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapHybrid({
	templatesConfig: templatesConfig as SnapTemplatesConfig,
	snapConfig: snapConfig as SnapConfig,
});
