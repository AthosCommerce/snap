import deepmerge from 'deepmerge';

// import { Snap, TemplatesStore } from '@athoscommerce/snap-preact';
import { Snap } from '@athoscommerce/snap-preact';

import { getContext } from '@athoscommerce/snap-toolbox';
// import { afterSearch } from './middleware/plugins/afterSearch';
import { afterStore, mutateResultsURL } from './middleware/plugins/afterStore';
import { combineMerge } from './middleware/functions';
import { ContentSkel } from './components/Content/Skel';
import { SidebarSkel } from './components/Sidebar/Skel';
import { getDemoConfig } from '../../shared/demoConfig';

import './styles/custom.scss';
import type { SearchRequestModelFilterTypeEnum } from '@athoscommerce/snapi-types';

const { siteId, clientConfig } = getDemoConfig();

const context = getContext(['collection']);
const backgroundFilters = [];

if (context.collection?.handle) {
	// set background filter
	if (context.collection.handle != 'all') {
		backgroundFilters.push({
			field: 'collection_handle',
			value: context.collection.handle,
			type: 'value' as SearchRequestModelFilterTypeEnum,
			background: true,
		});
	}
}

/*
	configuration and instantiation
 */

let config: SnapConfig = {
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
					return (await import('./components/Recommendations/Recs/Recs')).Recs;
				},
				Carousel: async () => {
					return (await import('./components/Recommendations/Recs/Recs')).Recs;
				},
				Bundle: async () => {
					return (await import('./components/Recommendations/Bundles/Bundles')).Bundles;
				},
				Default: async () => {
					return (await import('./components/Recommendations/Recs/Recs')).Recs;
				},
				Email: async () => {
					return (await import('./components/Recommendations/Email/Email')).Email;
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
					id: 'search',
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
							return (await import('./components/Content/Content')).Content;
						},
					},
					{
						selector: '#athos-sidebar',
						hideTarget: true,
						renderAfterSearch: true,
						skeleton: () => SidebarSkel,
						component: async () => {
							return (await import('./components/Sidebar/Sidebar')).Sidebar;
						},
					},
				],
			},
		],
		autocomplete: [
			{
				config: {
					id: 'autocomplete',
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
							return (await import('./components/Autocomplete/Autocomplete')).Autocomplete;
						},
					},
				],
			},
		],
		finder: [
			{
				config: {
					id: 'finder',
					url: '/snap/',
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
							return (await import('./components/Finder/Finder')).Finder;
						},
					},
				],
			},
			{
				config: {
					id: 'finder_hierarchy',
					url: '/snap/',
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
							return (await import('./components/Finder/Finder')).Finder;
						},
					},
				],
			},
		],
	},
};

// used to add config settings from cypress e2e tests
if (window.mergeSnapConfig) {
	config = deepmerge(config, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new Snap(config);
