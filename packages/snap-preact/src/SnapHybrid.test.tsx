import 'whatwg-fetch';

import { version } from '@athoscommerce/snap-toolbox';

import { SnapHybrid } from './SnapHybrid';
import { createSnapConfig } from './Templates/SnapTemplates';
import { TemplatesStore } from './Templates/Stores/TemplateStore';

import type { SnapConfig } from './Snap';
import type { SnapTemplatesConfig } from './Templates/SnapTemplates';
import type { PluginFunction } from '@athoscommerce/snap-controller';

const baseTemplatesConfig: SnapTemplatesConfig = {
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	theme: {
		extends: 'base',
	},
	search: {
		targets: [
			{
				selector: '#templates-search',
				component: 'Search',
			},
		],
		settings: {
			variants: {
				showDisabledSelectionValues: true,
			},
		},
	},
	autocomplete: {
		targets: [
			{
				selector: 'input.templates-ac',
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
	recommendation: {
		default: {
			SnapTemplatesRecommendationCarousel: { component: 'Recommendation' },
		},
		bundle: {
			SnapTemplatesBundleDefault: { component: 'RecommendationBundle' },
		},
	},
};

const baseSnapConfig: SnapConfig = {
	mode: 'development',
	client: {
		globals: {
			siteId: '8uyt2m',
		},
	},
	controllers: {
		search: [
			{
				config: {
					id: 'search_snap',
					settings: {
						infinite: {
							backfill: 5,
						},
						redirects: {
							singleResult: false,
						},
					},
				},
				targeters: [
					{
						selector: '#snap-content',
						hideTarget: true,
						component: () => () => null,
					},
				],
			},
		],
		autocomplete: [
			{
				config: {
					id: 'autocomplete_snap',
					selector: 'input.snap-ac',
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
						selector: 'input.snap-ac',
						component: () => () => null,
					},
				],
			},
		],
	},
};

describe('SnapHybrid merge', () => {
	beforeEach(() => {
		delete window.athos;
		document.body.innerHTML = '<script id="athos-context"></script>';
	});

	it('creates a SnapHybrid instance', () => {
		const snap = new SnapHybrid({
			templatesConfig: { ...baseTemplatesConfig },
			snapConfig: { ...baseSnapConfig },
		});

		expect(snap).toBeDefined();
		expect(snap.client).toBeDefined();
		expect(snap.tracker).toBeDefined();
		expect(snap.logger).toBeDefined();
	});

	describe('controller merge (array concatenation)', () => {
		it('has search controllers from both configs', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const searchControllers = config.controllers?.search;

			expect(searchControllers).toBeDefined();
			// templates creates one search controller, snap config adds another - arrays are concatenated
			expect(searchControllers!.length).toBe(2);

			// first entry is from templates (id: 'search')
			expect(searchControllers![0].config.id).toBe('search');
			// second entry is from snap config (id: 'search_snap')
			expect(searchControllers![1].config.id).toBe('search_snap');
		});

		it('has autocomplete controllers from both configs', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const acControllers = config.controllers?.autocomplete;

			expect(acControllers).toBeDefined();
			expect(acControllers!.length).toBe(2);

			expect(acControllers![0].config.id).toBe('autocomplete');
			expect(acControllers![1].config.id).toBe('autocomplete_snap');
		});

		it('preserves templates search controller settings', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const templatesSearchController = config.controllers!.search![0];

			expect((templatesSearchController.config.settings as any).variants?.showDisabledSelectionValues).toBe(true);
		});

		it('preserves snap search controller settings', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const snapSearchController = config.controllers!.search![1];

			expect((snapSearchController.config.settings as any).infinite?.backfill).toBe(5);
			expect((snapSearchController.config.settings as any).redirects?.singleResult).toBe(false);
		});

		it('preserves templates autocomplete controller settings', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const templatesAcController = config.controllers!.autocomplete![0];

			expect((templatesAcController.config.settings as any).trending.limit).toBe(6);
			expect((templatesAcController.config.settings as any).history.limit).toBe(6);
		});

		it('preserves snap autocomplete controller settings', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const snapAcController = config.controllers!.autocomplete![1];

			expect((snapAcController.config.settings as any).trending.limit).toBe(5);
			expect((snapAcController.config.settings as any).history.limit).toBe(5);
		});

		it('handles snap config with only search controllers (no templates search)', () => {
			const templatesConfigNoSearch = {
				...baseTemplatesConfig,
				search: undefined,
			};

			const snap = new SnapHybrid({
				templatesConfig: templatesConfigNoSearch,
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const searchControllers = config.controllers?.search;

			expect(searchControllers).toBeDefined();
			expect(searchControllers!.length).toBe(1);
			expect(searchControllers![0].config.id).toBe('search_snap');
		});

		it('handles templates config with only search controllers (no snap search)', () => {
			const snapConfigNoSearch: SnapConfig = {
				...baseSnapConfig,
				controllers: {
					autocomplete: baseSnapConfig.controllers?.autocomplete,
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: snapConfigNoSearch,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const searchControllers = config.controllers?.search;

			expect(searchControllers).toBeDefined();
			expect(searchControllers!.length).toBe(1);
			expect(searchControllers![0].config.id).toBe('search');
		});

		it('concatenates targeters arrays within controllers independently', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;

			// Templates search controller targeters
			const templatesTargeters = config.controllers?.search![0].targeters;
			expect(templatesTargeters).toBeDefined();
			expect(templatesTargeters!.some((t) => t.selector === '#templates-search')).toBe(true);

			// Snap search controller targeters
			const snapTargeters = config.controllers?.search![1].targeters;
			expect(snapTargeters).toBeDefined();
			expect(snapTargeters!.some((t) => t.selector === '#snap-content')).toBe(true);
		});
	});

	describe('recommendation instantiator merge', () => {
		it('merges recommendation instantiator config', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsConfig = config.instantiators?.recommendation;

			expect(recsConfig).toBeDefined();
			expect(recsConfig!.config).toBeDefined();
		});

		it('includes templates default recommendation component mappings', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsComponents = config.instantiators?.recommendation?.components;

			expect(recsComponents).toBeDefined();
			expect(recsComponents!['SnapTemplatesRecommendationCarousel']).toBeDefined();
		});

		it('includes templates bundle recommendation component mappings', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsComponents = config.instantiators?.recommendation?.components;

			expect(recsComponents!['SnapTemplatesBundleDefault']).toBeDefined();
		});

		it('merges snap recommendation components with templates components', () => {
			const snapConfigWithRecs: SnapConfig = {
				...baseSnapConfig,
				instantiators: {
					recommendation: {
						components: {
							CustomRec: {
								component: () => () => null,
								onTarget: () => {},
							},
						},
						config: {
							branch: 'staging',
						},
					},
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: snapConfigWithRecs,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsComponents = config.instantiators?.recommendation?.components;

			// templates components should be present
			expect(recsComponents!['SnapTemplatesRecommendationCarousel']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleDefault']).toBeDefined();
			// snap components should also be present
			expect(recsComponents!['CustomRec']).toBeDefined();
		});

		it('snap recommendation config overrides templates recommendation config for scalar values', () => {
			const snapConfigWithRecs: SnapConfig = {
				...baseSnapConfig,
				instantiators: {
					recommendation: {
						components: {},
						config: {
							branch: 'staging',
						},
					},
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: snapConfigWithRecs,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;

			// snap config branch 'staging' should override templates default 'production'
			expect(config.instantiators?.recommendation?.config.branch).toBe('staging');
		});

		it('includes built-in templates recommendation component mappings from defaults', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsComponents = config.instantiators?.recommendation?.components;

			// The createSnapConfig function merges defaults: Grid, Email, BundleEasyAdd, BundleList, BundleVertical
			expect(recsComponents!['SnapTemplatesRecommendationGrid']).toBeDefined();
			expect(recsComponents!['SnapTemplatesEmailDefault']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleEasyAdd']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleList']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleVertical']).toBeDefined();
		});
	});

	describe('plugins merge', () => {
		it('templates search controller has plugins from createPlugins', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const templatesSearchPlugins = config.controllers?.search![0].config.plugins;

			expect(templatesSearchPlugins).toBeDefined();
			expect(Array.isArray(templatesSearchPlugins)).toBe(true);
			expect(templatesSearchPlugins!.length).toBeGreaterThan(0);
		});

		it('templates autocomplete controller has plugins from createPlugins', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const templatesAcPlugins = config.controllers?.autocomplete![0].config.plugins;

			expect(templatesAcPlugins).toBeDefined();
			expect(Array.isArray(templatesAcPlugins)).toBe(true);
			expect(templatesAcPlugins!.length).toBeGreaterThan(0);
		});

		it('recommendation instantiator has plugins from createPlugins', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsPlugins = config.instantiators?.recommendation?.config.plugins;

			expect(recsPlugins).toBeDefined();
			expect(Array.isArray(recsPlugins)).toBe(true);
			expect(recsPlugins!.length).toBeGreaterThan(0);
		});

		it('snap search controller plugins merge with templates plugins via array concatenation', () => {
			const customPlugin: PluginFunction = () => {};

			const snapConfigWithPlugins: SnapConfig = {
				...baseSnapConfig,
				controllers: {
					search: [
						{
							config: {
								id: 'search_snap',
								plugins: [[customPlugin, {}]],
								settings: {},
							},
						},
					],
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: snapConfigWithPlugins,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;

			// templates controller should still have its plugins
			const templatesPlugins = config.controllers?.search![0].config.plugins;
			expect(templatesPlugins!.length).toBeGreaterThan(0);

			// snap controller should have its own plugins
			const snapPlugins = config.controllers?.search![1].config.plugins;
			expect(snapPlugins).toBeDefined();
			expect(snapPlugins!.some((p) => p[0] === customPlugin)).toBe(true);
		});

		it('recommendation instantiator plugins concat when snap config also has plugins', () => {
			const customPlugin: PluginFunction = () => {};

			const snapConfigWithRecsPlugins: SnapConfig = {
				...baseSnapConfig,
				instantiators: {
					recommendation: {
						components: {},
						config: {
							branch: 'production',
							plugins: [[customPlugin, {}]],
						},
					},
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: snapConfigWithRecsPlugins,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			const recsPlugins = config.instantiators?.recommendation?.config.plugins;

			expect(recsPlugins).toBeDefined();
			// should include both templates plugins and snap plugins (concatenated)
			expect(recsPlugins!.some((p) => p[0] === customPlugin)).toBe(true);
			// should also include the templates built-in plugins
			expect(recsPlugins!.length).toBeGreaterThan(1);
		});
	});

	describe('client and tracker config', () => {
		it('sets hybrid initiator on client config', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			expect(config.client?.config?.initiator).toBe(`athos/snap/preact/hybrid/${version}`);
		});

		it('sets hybrid initiator on tracker config', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			expect(config.tracker?.config?.initiator).toBe(`athos/snap/preact/hybrid/${version}`);
			expect(config.tracker?.config?.framework).toBe('snap/hybrid');
		});

		it('merges client globals from both configs', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			expect(config.client?.globals?.siteId).toBe('8uyt2m');
		});
	});

	describe('mode and features', () => {
		it('snap config mode is present in merged config', () => {
			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			expect(config.mode).toBe('development');
		});

		it('templates features are present in merged config', () => {
			const templatesConfigWithFeatures: SnapTemplatesConfig = {
				...baseTemplatesConfig,
				features: {
					integratedSpellCorrection: true,
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: templatesConfigWithFeatures,
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			expect((config.features as any)?.integratedSpellCorrection).toBe(true);
		});
	});

	describe('edge cases', () => {
		it('handles snap config with no controllers', () => {
			const snapConfigMinimal: SnapConfig = {
				client: {
					globals: {
						siteId: '8uyt2m',
					},
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: { ...baseTemplatesConfig },
				snapConfig: snapConfigMinimal,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;

			// should still have the templates controllers
			expect(config.controllers?.search).toBeDefined();
			expect(config.controllers?.search!.length).toBe(1);
			expect(config.controllers?.search![0].config.id).toBe('search');
		});

		it('handles templates config with no controllers', () => {
			const templatesConfigMinimal: SnapTemplatesConfig = {
				unlocked: true,
				config: {
					siteId: '8uyt2m',
					platform: 'other',
				},
				theme: {
					extends: 'base',
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: templatesConfigMinimal,
				snapConfig: { ...baseSnapConfig },
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;

			// should still have the snap controllers
			expect(config.controllers?.search).toBeDefined();
			expect(config.controllers?.search!.length).toBe(1);
			expect(config.controllers?.search![0].config.id).toBe('search_snap');
		});

		it('handles empty controllers objects from both sides', () => {
			const templatesConfigMinimal: SnapTemplatesConfig = {
				unlocked: true,
				config: {
					siteId: '8uyt2m',
					platform: 'other',
				},
				theme: {
					extends: 'base',
				},
			};

			const snapConfigMinimal: SnapConfig = {
				client: {
					globals: {
						siteId: '8uyt2m',
					},
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: templatesConfigMinimal,
				snapConfig: snapConfigMinimal,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			expect(config.controllers).toBeDefined();
		});

		it('url config from snap overrides templates url config', () => {
			const templatesConfigWithUrl: SnapTemplatesConfig = {
				...baseTemplatesConfig,
				url: {
					parameters: {
						core: {
							query: { name: 'search' },
						},
					},
				},
			};

			const snapConfigWithUrl: SnapConfig = {
				...baseSnapConfig,
				url: {
					parameters: {
						core: {
							query: { name: 'q' },
						},
					},
				},
			};

			const snap = new SnapHybrid({
				templatesConfig: templatesConfigWithUrl,
				snapConfig: snapConfigWithUrl,
			});

			// @ts-ignore - accessing private property
			const config: SnapConfig = snap.config;
			// deepmerge with objects: snap (source) values override templates (target) for scalars
			expect(config.url?.parameters?.core?.query?.name).toBe('q');
		});
	});

	describe('createSnapConfig verification', () => {
		it('createSnapConfig generates expected structure from templates config', () => {
			const templatesStore = new TemplatesStore({ config: baseTemplatesConfig });
			const snapConfig = createSnapConfig(baseTemplatesConfig, templatesStore);

			// should have client with siteId
			expect(snapConfig.client?.globals?.siteId).toBe('8uyt2m');

			// should have search controller with id "search"
			expect(snapConfig.controllers?.search).toBeDefined();
			expect(snapConfig.controllers?.search!.length).toBe(1);
			expect(snapConfig.controllers?.search![0].config.id).toBe('search');

			// should have autocomplete controller with id "autocomplete"
			expect(snapConfig.controllers?.autocomplete).toBeDefined();
			expect(snapConfig.controllers?.autocomplete!.length).toBe(1);
			expect(snapConfig.controllers?.autocomplete![0].config.id).toBe('autocomplete');

			// should have recommendation instantiator
			expect(snapConfig.instantiators?.recommendation).toBeDefined();
			expect(snapConfig.instantiators?.recommendation?.components).toBeDefined();
		});

		it('createSnapConfig includes default recommendation component mappings', () => {
			const templatesStore = new TemplatesStore({ config: baseTemplatesConfig });
			const snapConfig = createSnapConfig(baseTemplatesConfig, templatesStore);

			const recsComponents = snapConfig.instantiators?.recommendation?.components;

			// defaults added by createSnapConfig
			expect(recsComponents!['SnapTemplatesRecommendationCarousel']).toBeDefined();
			expect(recsComponents!['SnapTemplatesRecommendationGrid']).toBeDefined();
			expect(recsComponents!['SnapTemplatesEmailDefault']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleDefault']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleEasyAdd']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleList']).toBeDefined();
			expect(recsComponents!['SnapTemplatesBundleVertical']).toBeDefined();
		});

		it('createSnapConfig sets templates initiator and framework', () => {
			const templatesStore = new TemplatesStore({ config: baseTemplatesConfig });
			const snapConfig = createSnapConfig(baseTemplatesConfig, templatesStore);

			expect(snapConfig.client?.config?.initiator).toBe(`athos/snap/preact/templates/${version}`);
			expect(snapConfig.tracker?.config?.framework).toBe('snap/templates');
		});
	});
});
