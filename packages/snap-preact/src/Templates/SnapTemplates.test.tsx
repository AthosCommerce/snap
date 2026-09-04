import { waitFor } from '@testing-library/preact';
import { version } from '@athoscommerce/snap-toolbox';
import {
	createAutocompleteTargeters,
	createPlugins,
	createSearchTargeters,
	createSnapConfig,
	DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS,
	DEFAULT_FEATURES,
	SnapTemplates,
} from './SnapTemplates';
import type { SnapTemplatesConfig, SnapTemplatesConfigUnlocked } from './SnapTemplates';
import { TemplatesStore } from './Stores/TemplateStore';
import { TargetStore } from './Stores/TargetStore';
import { TemplateSelect } from '../../components/src/components/Atoms/TemplateSelect';
import { TAB_ID_DEFAULT_PARAM } from './Stores/TabManagerStore';
import type { PluginFunction } from '@athoscommerce/snap-controller';

describe('createPlugins with custom plugins', () => {
	const baseConfigValues = {
		config: {
			platform: 'other' as const,
			siteId: 'test123',
		},
		theme: {
			extends: 'base' as const,
		},
	};

	const baseConfig: SnapTemplatesConfig = {
		...baseConfigValues,
	};

	it('should handle empty custom plugins', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			plugins: {},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// Should have default plugins but no custom ones
		expect(plugins).toBeDefined();
		expect(Array.isArray(plugins)).toBe(true);
	});

	it('should include custom plugin function from global plugins config', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					myCustomPlugin: {
						function: customPluginFn,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// Find the custom plugin in the plugins array
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
		expect(customPluginEntry![0]).toBe(customPluginFn);
	});

	it('should include multiple custom plugins', () => {
		const customPluginFn1: PluginFunction = jest.fn();
		const customPluginFn2: PluginFunction = jest.fn();
		const customPluginFn3: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					pluginOne: {
						function: customPluginFn1,
					},
					pluginTwo: {
						function: customPluginFn2,
					},
					pluginThree: {
						function: customPluginFn3,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// All three custom plugins should be included
		expect(plugins.find((plugin) => plugin[0] === customPluginFn1)).toBeDefined();
		expect(plugins.find((plugin) => plugin[0] === customPluginFn2)).toBeDefined();
		expect(plugins.find((plugin) => plugin[0] === customPluginFn3)).toBeDefined();
	});

	it('should pass args to custom plugin function', () => {
		const customPluginFn: PluginFunction = jest.fn();
		const pluginArgs = ['arg1', { key: 'value' }, 42];

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					myPluginWithArgs: {
						function: customPluginFn,
						args: pluginArgs,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// Find the custom plugin in the plugins array
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
		expect(customPluginEntry![0]).toBe(customPluginFn);
		// Args should be spread after the function
		expect(customPluginEntry![1]).toBe('arg1');
		expect(customPluginEntry![2]).toEqual({ key: 'value' });
		expect(customPluginEntry![3]).toBe(42);
	});

	it('should handle custom plugin without args', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					myPluginNoArgs: {
						function: customPluginFn,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// Find the custom plugin in the plugins array
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
		expect(customPluginEntry![0]).toBe(customPluginFn);
		// Should only have the function, no additional args
		expect(customPluginEntry!.length).toBe(1);
	});

	it('should include custom plugins from controller-specific config', () => {
		const globalPluginFn: PluginFunction = jest.fn();
		const searchPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					globalPlugin: {
						function: globalPluginFn,
					},
				},
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				plugins: {
					custom: {
						searchPlugin: {
							function: searchPluginFn,
						},
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore, 'search');

		// Both global and search-specific plugins should be included
		expect(plugins.find((plugin) => plugin[0] === globalPluginFn)).toBeDefined();
		expect(plugins.find((plugin) => plugin[0] === searchPluginFn)).toBeDefined();
	});

	it('should merge custom plugins from global and autocomplete config', () => {
		const globalPluginFn: PluginFunction = jest.fn();
		const autocompletePluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					globalPlugin: {
						function: globalPluginFn,
					},
				},
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				plugins: {
					custom: {
						autocompletePlugin: {
							function: autocompletePluginFn,
						},
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore, 'autocomplete');

		// Both global and autocomplete-specific plugins should be included
		expect(plugins.find((plugin) => plugin[0] === globalPluginFn)).toBeDefined();
		expect(plugins.find((plugin) => plugin[0] === autocompletePluginFn)).toBeDefined();
	});

	it('should merge custom plugins from global and recommendation config', () => {
		const globalPluginFn: PluginFunction = jest.fn();
		const recommendationPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					globalPlugin: {
						function: globalPluginFn,
					},
				},
			},
			recommendation: {
				default: {
					Default: { component: 'Recommendation' },
				},
				plugins: {
					custom: {
						recommendationPlugin: {
							function: recommendationPluginFn,
						},
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore, 'recommendation');

		// Both global and recommendation-specific plugins should be included
		expect(plugins.find((plugin) => plugin[0] === globalPluginFn)).toBeDefined();
		expect(plugins.find((plugin) => plugin[0] === recommendationPluginFn)).toBeDefined();
	});

	it('should skip custom plugin entries without a function property', () => {
		const validPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			plugins: {
				custom: {
					validPlugin: {
						function: validPluginFn,
					},
					invalidPlugin: {} as any,
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// Valid plugin should be included
		expect(plugins.find((plugin) => plugin[0] === validPluginFn)).toBeDefined();

		// Should not throw and should handle invalid entry gracefully
		expect(plugins.length).toBeGreaterThan(0);
	});

	it('should handle custom plugins at runtime even with unlocked false config', () => {
		const customPluginFn: PluginFunction = jest.fn();

		// Note: TypeScript will error on this, but runtime should handle it
		// This tests that the runtime code doesn't crash with unexpected config
		const config = {
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			plugins: {
				custom: {
					myCustomPlugin: {
						function: customPluginFn,
					},
				},
			},
		} as SnapTemplatesConfig;

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore);

		// Custom plugin should still work at runtime even if types don't allow it
		// This tests the runtime behavior
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
	});
});

describe('createSnapConfig with custom plugins', () => {
	it('should pass custom plugins to search controller config', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			plugins: {
				custom: {
					myCustomPlugin: {
						function: customPluginFn,
					},
				},
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// Check that search controller has plugins array with our custom plugin
		const searchControllerConfig = snapConfig.controllers?.search?.[0];
		expect(searchControllerConfig).toBeDefined();
		expect(searchControllerConfig?.config?.plugins).toBeDefined();

		const plugins = searchControllerConfig?.config?.plugins || [];
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
	});

	it('should pass custom plugins to autocomplete controller config', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				plugins: {
					custom: {
						autocompletePlugin: {
							function: customPluginFn,
						},
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// Check that autocomplete controller has plugins array with our custom plugin
		const autocompleteControllerConfig = snapConfig.controllers?.autocomplete?.[0];
		expect(autocompleteControllerConfig).toBeDefined();
		expect(autocompleteControllerConfig?.config?.plugins).toBeDefined();

		const plugins = autocompleteControllerConfig?.config?.plugins || [];
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
	});

	it('should pass custom plugins to recommendation instantiator config', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			recommendation: {
				default: {
					Default: { component: 'Recommendation' },
				},
				plugins: {
					custom: {
						recommendationPlugin: {
							function: customPluginFn,
						},
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// Check that recommendation instantiator has plugins array with our custom plugin
		const recsConfig = snapConfig.instantiators?.recommendation;
		expect(recsConfig).toBeDefined();
		expect(recsConfig?.config?.plugins).toBeDefined();

		const plugins = recsConfig?.config?.plugins || [];
		const customPluginEntry = plugins.find((plugin) => plugin[0] === customPluginFn);
		expect(customPluginEntry).toBeDefined();
	});

	it('should pass custom plugins and base settings to search tab controller configs', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			plugins: {
				custom: {
					myCustomPlugin: {
						function: customPluginFn,
					},
				},
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				settings: {
					infinite: { backfill: 5 },
				},
				tabs: [{ id: 'tabbed', siteId: 'abc123', param: 'tabbed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// no additional non-tab controller is created - the tab controller owns the targeters
		expect(snapConfig.controllers?.search?.length).toBe(1);

		const tabControllerConfig = snapConfig.controllers?.search?.[0];
		expect(tabControllerConfig?.config?.id).toBe('tabbed');
		expect(tabControllerConfig?.targeters?.length).toBe(1);

		const plugins = tabControllerConfig?.config?.plugins || [];
		expect(plugins.find((plugin) => plugin[0] === customPluginFn)).toBeDefined();

		// inherits base settings while retaining tab specific overrides
		expect(tabControllerConfig?.config?.settings?.infinite?.backfill).toBe(5);

		// redirect settings are left to the controller defaults - the TabManagerStore gates them per tab
		expect(tabControllerConfig?.config?.settings?.redirects).toBeUndefined();
	});

	it('should attach the targeters to the default tab controller', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				tabs: [
					{ id: 'first', siteId: 'abc123', param: 'first' },
					{ id: 'second', siteId: 'abc123', param: 'second', default: true },
				],
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				tabs: [
					{ id: 'acFirst', siteId: 'abc123', param: 'first' },
					{ id: 'acSecond', siteId: 'abc123', param: 'second', default: true },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// only the tab controllers are created
		expect(snapConfig.controllers?.search?.map((controller) => controller.config?.id)).toEqual(['first', 'second']);
		expect(snapConfig.controllers?.autocomplete?.map((controller) => controller.config?.id)).toEqual(['acFirst', 'acSecond']);

		expect(snapConfig.controllers?.search?.[0]?.targeters).toBeUndefined();
		expect(snapConfig.controllers?.search?.[1]?.targeters?.length).toBe(1);

		expect(snapConfig.controllers?.autocomplete?.[0]?.targeters).toBeUndefined();
		expect(snapConfig.controllers?.autocomplete?.[1]?.targeters?.length).toBe(1);
	});

	it('should attach the search targeters to the tab the url marks as active', () => {
		const originalLocation = window.location.href;
		window.history.replaceState(null, '', `/?${TAB_ID_DEFAULT_PARAM}=blog`);

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				tabs: [
					{ id: 'products', siteId: 'abc123', param: 'prod', default: true },
					{ id: 'blog', siteId: 'xyz789', param: 'blog' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// the targeted controller searches before the TabManagerStore can gate redirects, so it
		// must be the tab the shopper is viewing rather than the default tab
		expect(snapConfig.controllers?.search?.[0]?.targeters).toBeUndefined();
		expect(snapConfig.controllers?.search?.[1]?.targeters?.length).toBe(1);

		window.history.replaceState(null, '', originalLocation);
	});

	it('should apply the corePrefix from each tab param', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				tabs: [
					{ id: 'products', siteId: 'abc123', param: 'prod' },
					{ id: 'blog', siteId: 'xyz789', param: 'blog' },
				],
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				tabs: [
					{ id: 'acProducts', siteId: 'abc123', param: 'prod' },
					{ id: 'acBlog', siteId: 'xyz789', param: 'blog' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		expect(snapConfig.controllers?.search?.[0]?.url?.settings?.corePrefix).toBe('prod');
		expect(snapConfig.controllers?.search?.[1]?.url?.settings?.corePrefix).toBe('blog');

		// an autocomplete tab configured with the same param as a search tab shares its namespace
		expect(snapConfig.controllers?.autocomplete?.[0]?.url?.settings?.corePrefix).toBe('prod');
		expect(snapConfig.controllers?.autocomplete?.[1]?.url?.settings?.corePrefix).toBe('blog');
	});

	it('should only prefix per-catalog params so the query stays shared across tabs', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				tabs: [
					{ id: 'products', siteId: 'abc123', param: 'prod' },
					{ id: 'blog', siteId: 'xyz789', param: 'blog' },
				],
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				tabs: [{ id: 'acProducts', siteId: 'abc123', param: 'prod' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		expect(snapConfig.controllers?.search?.[0]?.url?.settings?.corePrefixParams).toEqual(['filter', 'sort', 'pageSize', 'rq', 'page']);
		expect(snapConfig.controllers?.autocomplete?.[0]?.url?.settings?.corePrefixParams).toEqual(['filter', 'sort', 'pageSize', 'rq', 'page']);
	});

	it('should register the tab param as a custom query parameter', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				tabs: [{ id: 'products', siteId: 'abc123', param: 'prod' }],
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				tabs: [{ id: 'acProducts', siteId: 'abc123', param: 'prod' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		expect(snapConfig.controllers?.search?.[0]?.url?.parameters?.custom).toEqual({ [TAB_ID_DEFAULT_PARAM]: { type: 'query' } });
		expect(snapConfig.controllers?.autocomplete?.[0]?.url?.parameters?.custom).toEqual({ [TAB_ID_DEFAULT_PARAM]: { type: 'query' } });
	});

	it('should carry each autocomplete tab param in its url globals', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				tabs: [
					{ id: 'acProducts', siteId: 'abc123', param: 'prod' },
					{ id: 'acBlog', siteId: 'xyz789', param: 'blog' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// every url an autocomplete tab builds carries its own param, so submitting from a tab lands
		// on the search tab configured with the matching param
		expect(snapConfig.controllers?.autocomplete?.[0]?.url?.globals).toEqual([{ param: TAB_ID_DEFAULT_PARAM, value: 'prod' }]);
		expect(snapConfig.controllers?.autocomplete?.[1]?.url?.globals).toEqual([{ param: TAB_ID_DEFAULT_PARAM, value: 'blog' }]);
	});

	it('should pass custom plugins, action and base settings to autocomplete tab controller configs', () => {
		const customPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				action: '/search',
				settings: {
					trending: { limit: 7 },
				},
				plugins: {
					custom: {
						autocompletePlugin: {
							function: customPluginFn,
						},
					},
				},
				tabs: [{ id: 'tabbed', siteId: 'abc123', param: 'tabbed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		// no additional non-tab controller is created - the tab controller owns the targeters
		expect(snapConfig.controllers?.autocomplete?.length).toBe(1);

		const tabControllerConfig = snapConfig.controllers?.autocomplete?.[0];
		expect(tabControllerConfig?.config?.id).toBe('tabbed');
		expect(tabControllerConfig?.targeters?.length).toBe(1);

		const plugins = tabControllerConfig?.config?.plugins || [];
		expect(plugins.find((plugin) => plugin[0] === customPluginFn)).toBeDefined();

		expect(tabControllerConfig?.config?.action).toBe('/search');
		expect(tabControllerConfig?.config?.selector).toBe('#autocomplete');
		expect(tabControllerConfig?.config?.settings?.trending?.limit).toBe(7);
	});

	it('should only use tab plugins when a search tab specifies its own plugins', () => {
		const globalPluginFn: PluginFunction = jest.fn();
		const tabPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			plugins: {
				custom: {
					globalPlugin: {
						function: globalPluginFn,
					},
				},
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				tabs: [
					{ id: 'inherits', siteId: 'abc123', param: 'inherits' },
					{ id: 'overrides', siteId: 'abc123', param: 'overrides', plugins: { custom: { tabPlugin: { function: tabPluginFn } } } },
					{ id: 'none', siteId: 'abc123', param: 'none', plugins: {} },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const inheritingTabPlugins = snapConfig.controllers?.search?.[0]?.config?.plugins || [];
		const overridingTabPlugins = snapConfig.controllers?.search?.[1]?.config?.plugins || [];
		const emptyTabPlugins = snapConfig.controllers?.search?.[2]?.config?.plugins || [];

		// no tab plugins - inherits global plugins
		expect(inheritingTabPlugins.find((plugin) => plugin[0] === globalPluginFn)).toBeDefined();

		// tab plugins - only the tab plugins are used
		expect(overridingTabPlugins.find((plugin) => plugin[0] === globalPluginFn)).toBeUndefined();
		expect(overridingTabPlugins.find((plugin) => plugin[0] === tabPluginFn)).toBeDefined();
		expect(overridingTabPlugins.length).toBe(1);

		// empty tab plugins - no plugins are used
		expect(emptyTabPlugins.length).toBe(0);
	});

	it('should only use tab plugins when an autocomplete tab specifies its own plugins', () => {
		const globalPluginFn: PluginFunction = jest.fn();
		const tabPluginFn: PluginFunction = jest.fn();

		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: {
				platform: 'other',
				siteId: 'test123',
			},
			theme: {
				extends: 'base',
			},
			plugins: {
				custom: {
					globalPlugin: {
						function: globalPluginFn,
					},
				},
			},
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				tabs: [
					{ id: 'inherits', siteId: 'abc123', param: 'inherits' },
					{ id: 'overrides', siteId: 'abc123', param: 'overrides', plugins: { custom: { tabPlugin: { function: tabPluginFn } } } },
					{ id: 'none', siteId: 'abc123', param: 'none', plugins: {} },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const inheritingTabPlugins = snapConfig.controllers?.autocomplete?.[0]?.config?.plugins || [];
		const overridingTabPlugins = snapConfig.controllers?.autocomplete?.[1]?.config?.plugins || [];
		const emptyTabPlugins = snapConfig.controllers?.autocomplete?.[2]?.config?.plugins || [];

		expect(inheritingTabPlugins.find((plugin) => plugin[0] === globalPluginFn)).toBeDefined();

		expect(overridingTabPlugins.find((plugin) => plugin[0] === globalPluginFn)).toBeUndefined();
		expect(overridingTabPlugins.find((plugin) => plugin[0] === tabPluginFn)).toBeDefined();
		expect(overridingTabPlugins.length).toBe(1);

		expect(emptyTabPlugins.length).toBe(0);
	});
});

describe('per currency component overrides', () => {
	const configFor = (currency: 'AED' | 'USD') =>
		({
			config: {
				platform: 'other',
				siteId: 'test123',
				currency,
			},
			theme: {
				extends: 'base',
			},
			currencies: {
				aed: {
					price: {
						symbol: 'د.إ',
						symbolAfter: true,
					},
				},
			},
		} as SnapTemplatesConfig);

	it('layers the configured overrides on top of the built-in currency locale', async () => {
		const store = new TemplatesStore({ config: configFor('AED') });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		const price = store.themes.local.global.theme.components?.price;

		// the locale ships 'AED ' as a leading abbreviation - the site prefers the native sign, trailing
		expect(price?.symbol).toBe('د.إ');
		expect(price?.symbolAfter).toBe(true);
		// untouched props still come from the locale layer
		expect(price?.code).toBe('AED');
	});

	it('does not apply overrides belonging to another currency', async () => {
		const store = new TemplatesStore({ config: configFor('USD') });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		const price = store.themes.local.global.theme.components?.price;

		expect(price?.symbol).toBe('$');
		expect(price?.symbolAfter).toBeFalsy();
	});

	it('swaps the overrides when the currency changes at runtime', async () => {
		const store = new TemplatesStore({ config: configFor('USD') });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		expect(store.themes.local.global.theme.components?.price?.symbol).toBe('$');

		await store.setCurrency('AED');

		// the overrides are keyed by currency, so they have to follow setCurrency - this is the path the
		// shopify currency plugin takes
		expect(store.themes.local.global.theme.components?.price?.symbol).toBe('د.إ');
		expect(store.themes.local.global.theme.components?.price?.symbolAfter).toBe(true);

		await store.setCurrency('USD');

		expect(store.themes.local.global.theme.components?.price?.symbol).toBe('$');
		expect(store.themes.local.global.theme.components?.price?.symbolAfter).toBeFalsy();
	});

	it('accepts uppercase currency keys', async () => {
		const store = new TemplatesStore({
			config: {
				...configFor('AED'),
				currencies: { AED: { price: { symbol: 'X' } } },
			} as SnapTemplatesConfig,
		});
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		expect(store.themes.local.global.theme.components?.price?.symbol).toBe('X');
	});

	it('is overridden by theme overrides, which remain the final say', async () => {
		const store = new TemplatesStore({
			config: {
				...configFor('AED'),
				theme: {
					extends: 'base',
					overrides: {
						default: {
							price: {
								symbol: 'THEME',
							},
						},
					},
				},
			} as SnapTemplatesConfig,
		});
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		expect(store.themes.local.global.theme.components?.price?.symbol).toBe('THEME');
		// props the theme override does not set still come from the currency overrides
		expect(store.themes.local.global.theme.components?.price?.symbolAfter).toBe(true);
	});
});

describe('translation overrides follow the active language', () => {
	const config = {
		config: {
			platform: 'other',
			siteId: 'test123',
			language: 'EN',
		},
		theme: {
			extends: 'base',
		},
		translations: {
			en: {
				filterSummary: {
					title: 'English Title',
				},
			},
			fr: {
				filterSummary: {
					title: 'Titre Français',
				},
			},
		},
	} as SnapTemplatesConfig;

	it('applies the overrides for the configured language', async () => {
		const store = new TemplatesStore({ config });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		expect(store.themes.local.global.theme.components?.filterSummary?.lang?.title).toBe('English Title');
	});

	it('swaps the overrides when the language changes at runtime', async () => {
		const store = new TemplatesStore({ config });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		expect(store.themes.local.global.theme.components?.filterSummary?.lang?.title).toBe('English Title');

		await store.setLanguage('FR');

		// setLanguage used to swap only the language locale and leave the previous language's
		// `translations` in place, so this stayed on 'English Title'
		expect(store.language).toBe('fr');
		expect(store.themes.local.global.theme.components?.filterSummary?.lang?.title).toBe('Titre Français');

		await store.setLanguage('EN');

		expect(store.themes.local.global.theme.components?.filterSummary?.lang?.title).toBe('English Title');
	});

	it('drops the overrides when the new language has none configured, falling through to its locale', async () => {
		const store = new TemplatesStore({ config });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		await store.setLanguage('DE');
		const title = store.themes.local.global.theme.components?.filterSummary?.lang?.title;

		expect(store.language).toBe('de');
		// no `translations.de` is configured, so the german locale's own value shows through
		expect(title).not.toBe('English Title');
		expect(title).toStrictEqual({ value: 'Aktuelle Filter' });
	});
});

describe('shopify markets price formatting', () => {
	const marketsConfig: SnapTemplatesConfigUnlocked = {
		unlocked: true,
		config: {
			platform: 'shopify',
			siteId: 'test123',
			currency: 'SEK',
		},
		theme: {
			extends: 'base',
		},
		plugins: {
			shopify: {
				markets: {
					token: 'token',
				},
			},
		},
	};

	it('does not install a price formatter - the currency locale drives formatting instead', async () => {
		const store = new TemplatesStore({ config: marketsConfig });
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		const price = store.themes.local.global.theme.components?.price;

		// the format function used to be derived from `shop.money_format`, which only ever described the
		// store's base currency - the currency locale is now the single source of price formatting
		expect(price?.format).toBeUndefined();
		// the locale carries the separating space, since the symbol trails the amount
		expect(price?.symbol).toBe('\u00A0kr');
		expect(price?.symbolAfter).toBe(true);
		expect(price?.code).toBe('SEK');
	});

	it('still honors an explicitly configured price formatter', async () => {
		const existingFormat = jest.fn(() => 'formatted');
		const store = new TemplatesStore({
			config: {
				...marketsConfig,
				theme: {
					extends: 'base',
					overrides: {
						default: {
							price: {
								format: existingFormat,
							},
						},
					},
				},
			},
		});
		await waitFor(() => expect(store.themes.local.global).toBeDefined());

		expect(store.themes.local.global.theme.components?.price?.format).toBe(existingFormat);
	});
});

describe('createPlugins with built-in plugins', () => {
	const baseConfig: SnapTemplatesConfig = {
		config: {
			platform: 'other',
			siteId: 'test123',
		},
		theme: {
			extends: 'base',
		},
	};

	it('should include common plugins (backgroundFilters, scrollToTop, logger)', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const plugins = createPlugins(baseConfig, templatesStore);

		// Should have common plugins included
		expect(plugins.length).toBeGreaterThanOrEqual(3);

		// Plugins should be arrays with function and config
		plugins.forEach((plugin) => {
			expect(Array.isArray(plugin)).toBe(true);
			expect(plugin.length).toBeGreaterThanOrEqual(1);
		});
	});

	it('should include shopify-specific plugins when platform is shopify', () => {
		const shopifyConfig: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'shopify',
			},
		};

		const templatesStore = new TemplatesStore({ config: shopifyConfig });
		const plugins = createPlugins(shopifyConfig, templatesStore);

		// Should have common plugins + shopify-specific plugins (backgroundFilters, mutateResults, addToCart)
		expect(plugins.length).toBeGreaterThan(3);
	});

	it('should include bigCommerce-specific plugins when platform is bigCommerce', () => {
		const bigCommerceConfig: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'bigCommerce',
			},
		};

		const templatesStore = new TemplatesStore({ config: bigCommerceConfig });
		const plugins = createPlugins(bigCommerceConfig, templatesStore);

		// Should have common plugins + bigCommerce-specific plugins (backgroundFilters, addToCart)
		expect(plugins.length).toBeGreaterThan(3);
	});

	it('should include magento2-specific plugins when platform is magento2', () => {
		const magento2Config: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'magento2',
			},
		};

		const templatesStore = new TemplatesStore({ config: magento2Config });
		const plugins = createPlugins(magento2Config, templatesStore);

		// Should have common plugins + magento2-specific plugins (base, backgroundFilters, addToCart)
		expect(plugins.length).toBeGreaterThan(3);
	});

	it('should merge global and controller-specific configs for built-in plugins', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			plugins: {
				common: {
					scrollToTop: {
						enabled: true,
					},
				},
			},
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				plugins: {
					common: {
						scrollToTop: {
							enabled: false,
						},
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const plugins = createPlugins(config, templatesStore, 'search');

		// Should have merged plugins - controller-specific config should override global
		expect(plugins.length).toBeGreaterThanOrEqual(3);
	});

	it('should include addToCart plugin for other platform', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const plugins = createPlugins(baseConfig, templatesStore);

		// Platform 'other' should include common addToCart plugin
		// Common plugins: backgroundFilters, scrollToTop, logger, addToCart
		expect(plugins.length).toBeGreaterThanOrEqual(4);
	});

	it('should not include the shopify currency plugin unless it is enabled', () => {
		const shopifyConfig: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'shopify',
			},
		};

		const templatesStore = new TemplatesStore({ config: shopifyConfig });
		const currencyPlugin = templatesStore.library.import.plugins.shopify.currency;

		expect(createPlugins(shopifyConfig, templatesStore).find((plugin) => plugin[0] === currencyPlugin)).toBeUndefined();

		const disabledConfig: SnapTemplatesConfig = { ...shopifyConfig, plugins: { shopify: { currency: { enabled: false } } } };
		expect(createPlugins(disabledConfig, templatesStore).find((plugin) => plugin[0] === currencyPlugin)).toBeUndefined();
	});

	it('should enable the shopify currency plugin alongside the markets plugin', () => {
		const shopifyConfig: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'shopify',
			},
			plugins: {
				shopify: {
					markets: {
						token: 'token',
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config: shopifyConfig });
		const plugins = createPlugins(shopifyConfig, templatesStore);
		const currencyPlugin = plugins.find((plugin) => plugin[0] === templatesStore.library.import.plugins.shopify.currency);

		// markets converts price values into the storefront currency - without the currency plugin those values
		// would be displayed with the symbol and separators of the configured currency instead
		expect(currencyPlugin).toBeDefined();
		expect(currencyPlugin![1]).toEqual({ enabled: true });
		expect(currencyPlugin![2]).toBe(templatesStore);
	});

	it('should respect an explicit opt out of the currency plugin when markets is configured', () => {
		const shopifyConfig: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'shopify',
			},
			plugins: {
				shopify: {
					markets: {
						token: 'token',
					},
					currency: {
						enabled: false,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config: shopifyConfig });
		const plugins = createPlugins(shopifyConfig, templatesStore);

		expect(plugins.find((plugin) => plugin[0] === templatesStore.library.import.plugins.shopify.currency)).toBeUndefined();
	});

	it('should include the shopify currency plugin with the templates store when enabled', () => {
		const shopifyConfig: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				platform: 'shopify',
			},
			plugins: {
				shopify: {
					currency: {
						enabled: true,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config: shopifyConfig });
		const plugins = createPlugins(shopifyConfig, templatesStore);
		const currencyPlugin = plugins.find((plugin) => plugin[0] === templatesStore.library.import.plugins.shopify.currency);

		expect(currencyPlugin).toBeDefined();
		expect(currencyPlugin![1]).toEqual({ enabled: true });
		// the plugin lives in snap-platforms and cannot import the templates store - it is passed in as an argument
		expect(currencyPlugin![2]).toBe(templatesStore);
	});
});

describe('createSnapConfig additional coverage', () => {
	const baseConfig: SnapTemplatesConfig = {
		config: {
			platform: 'other',
			siteId: 'test123',
		},
		theme: {
			extends: 'base',
		},
	};

	it('should set default features when not provided', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const snapConfig = createSnapConfig(baseConfig, templatesStore);

		expect(snapConfig.features).toEqual(DEFAULT_FEATURES);
	});

	it('should use provided features when specified', () => {
		const customFeatures = { integratedSpellCorrection: true };
		const config: SnapTemplatesConfig = {
			...baseConfig,
			features: customFeatures,
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		expect(snapConfig.features).toEqual(customFeatures);
	});

	it('should configure client with siteId and initiator', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const snapConfig = createSnapConfig(baseConfig, templatesStore);

		expect(snapConfig.client?.globals?.siteId).toBe('test123');
		expect(snapConfig.client?.config?.initiator).toBe(`athos/snap/preact/templates/${version}`);
	});

	it('should pass through client config when provided', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			config: {
				...baseConfig.config,
				client: {
					mode: 'production',
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		expect(snapConfig.client?.config?.mode).toBe('production');
	});

	it('should configure tracker with framework', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const snapConfig = createSnapConfig(baseConfig, templatesStore);

		expect(snapConfig.tracker?.config?.framework).toBe('snap/templates');
	});

	it('should pass through URL configuration when provided', () => {
		const urlConfig = {
			parameters: {
				core: {
					query: { name: 'q' },
				},
			},
		};
		const config: SnapTemplatesConfig = {
			...baseConfig,
			url: urlConfig,
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		expect(snapConfig.url).toEqual(urlConfig);
	});

	it('should not include URL config when not provided', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const snapConfig = createSnapConfig(baseConfig, templatesStore);

		expect(snapConfig.url).toBeUndefined();
	});

	it('should merge DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS with provided settings', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
				settings: {
					trending: {
						limit: 10,
					},
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const autocompleteConfig = snapConfig.controllers?.autocomplete?.[0];
		// Custom settings should override defaults
		expect(autocompleteConfig?.config?.settings?.trending?.limit).toBe(10);
	});

	it('should use DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS when no settings provided', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const autocompleteConfig = snapConfig.controllers?.autocomplete?.[0];
		expect(autocompleteConfig?.config?.settings?.trending?.limit).toBe(DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS.trending?.limit);
	});

	it('should construct autocomplete selector from target selectors', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [
					{ inputSelector: '#autocomplete1', component: 'AutocompleteFixed' },
					{ selector: '#autocomplete2', inputSelector: '#search-input', component: 'AutocompleteFixed' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const autocompleteConfig = snapConfig.controllers?.autocomplete?.[0];
		// selector should be joined from inputSelector (if present) or selector
		expect(autocompleteConfig?.config?.selector).toBe('#autocomplete1, #search-input');
	});

	it('should include default recommendation components', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			recommendation: {
				default: {
					MyCustomRec: { component: 'Recommendation' },
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const recsConfig = snapConfig.instantiators?.recommendation;
		const componentNames = Object.keys(recsConfig?.components || {});

		// Should include default components
		expect(componentNames).toContain('SnapTemplatesRecommendationCarousel');
		expect(componentNames).toContain('SnapTemplatesRecommendationGrid');
		expect(componentNames).toContain('SnapTemplatesEmailDefault');
		expect(componentNames).toContain('SnapTemplatesBundleDefault');
		expect(componentNames).toContain('SnapTemplatesBundleEasyAdd');
		expect(componentNames).toContain('SnapTemplatesBundleList');
		expect(componentNames).toContain('SnapTemplatesBundleVertical');
		// Should also include custom component
		expect(componentNames).toContain('MyCustomRec');
	});

	it('should set recommendation branch to production by default', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			recommendation: {
				default: {
					Default: { component: 'Recommendation' },
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const recsConfig = snapConfig.instantiators?.recommendation;
		expect(recsConfig?.config?.branch).toBe('production');
	});

	it('should allow overriding recommendation branch', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			recommendation: {
				default: {
					Default: { component: 'Recommendation' },
				},
				settings: {
					branch: 'staging',
				},
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const recsConfig = snapConfig.instantiators?.recommendation;
		expect(recsConfig?.config?.branch).toBe('staging');
	});

	it('should not create search controller when search config not provided', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const snapConfig = createSnapConfig(baseConfig, templatesStore);

		expect(snapConfig.controllers?.search).toBeUndefined();
	});

	it('should not create autocomplete controller when autocomplete config not provided', () => {
		const templatesStore = new TemplatesStore({ config: baseConfig });
		const snapConfig = createSnapConfig(baseConfig, templatesStore);

		expect(snapConfig.controllers?.autocomplete).toBeUndefined();
	});

	it('createSnapConfig passes quickview settings through to the manager config', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			quickview: {
				targets: [{ component: 'QuickviewSlideout' }],
				settings: { displayFields: [{ field: 'color' }] },
			},
		};
		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const def = snapConfig.quickview!;
		expect(def.config!.id).toBe('quickview');
		expect(def.config!.settings?.displayFields).toEqual([{ field: 'color' }]);
		expect(def.targeters).toHaveLength(1);
		expect(def.targeters?.[0].selector).toBe('body');
	});

	it('createSnapConfig creates a targeter per configured quickview target', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			quickview: {
				targets: [{ component: 'QuickviewModal' }, { selector: '#custom-qv', component: 'QuickviewSlideout' }],
			},
		};
		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const def = snapConfig.quickview!;
		expect(def.targeters).toHaveLength(2);
		expect(def.targeters?.[0].selector).toBe('body');
		expect(def.targeters?.[1].selector).toBe('#custom-qv');
	});

	it('renders quickview targets through TemplateSelect so the templates ThemeProvider wraps the component', async () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			quickview: {
				targets: [{ component: 'QuickviewSlideout' }],
			},
		};
		const templatesStore = new TemplatesStore({ config });

		// Stub the dynamic component import so resolving the targeter doesn't pull in the real
		// quickview component tree (Carousel → swiper ESM, which jest can't transform here).
		templatesStore.library.import.component.quickview.QuickviewSlideout = jest.fn().mockResolvedValue(undefined) as any;

		const snapConfig = createSnapConfig(config, templatesStore);

		const targeter = snapConfig.quickview!.targeters![0];

		// TemplateSelect is the wrapper that provides the global templates ThemeProvider — without it
		// theme overrides (e.g. `quickviewLayout`) are dropped because the component falls back to
		// production-mode prop merging.
		const Component = await targeter.component!();
		expect(Component).toBe(TemplateSelect);

		// TemplateSelect resolves the theme/component from these props.
		const props = targeter.props as { target: TargetStore; templatesStore: TemplatesStore };
		expect(props.templatesStore).toBe(templatesStore);
		expect(props.target).toBeInstanceOf(TargetStore);
		expect(props.target.component).toBe('QuickviewSlideout');
		expect(props.target.theme).toEqual({ location: 'local', name: 'global' });
	});

	it('should create search controller with correct id', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const searchConfig = snapConfig.controllers?.search?.[0];
		expect(searchConfig?.config?.id).toBe('search');
	});

	it('should create autocomplete controller with correct id', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const autocompleteConfig = snapConfig.controllers?.autocomplete?.[0];
		expect(autocompleteConfig?.config?.id).toBe('autocomplete');
	});

	it('should pass search settings to controller config', () => {
		const customSettings = {
			infinite: {
				backfill: 5,
			},
		};
		const config: SnapTemplatesConfig = {
			...baseConfig,
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
				settings: customSettings,
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const searchConfig = snapConfig.controllers?.search?.[0];
		expect(searchConfig?.config?.settings).toEqual(customSettings);
	});
});

describe('SnapTemplatesConfigUnlocked theme overrides typing', () => {
	it('should allow arbitrary props on open named selectors (regression: WithCustomComponent narrowing)', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: { siteId: 'test', platform: 'other' },
			theme: {
				extends: 'base',
				overrides: {
					default: {
						'recommendation.similar': {
							slidesPerView: 3,
						},
						'recommendation.similar carousel': {
							slidesPerView: 3,
						},
					},
				},
			},
		};

		expect(config.theme.overrides?.default?.['recommendation.similar carousel']).toBeDefined();
		expect(config.theme.overrides?.default?.['recommendation.similar']).toBeDefined();
	});

	it('should still allow customComponent on open named selectors', () => {
		const config: SnapTemplatesConfigUnlocked = {
			unlocked: true,
			config: { siteId: 'test', platform: 'other' },
			theme: {
				extends: 'base',
				overrides: {
					default: {
						'recommendation.similar carousel': {
							customComponent: 'MyCustomCarousel',
						},
						'recommendation.similar': {
							customComponent: 'MyCustomComponent',
						},
					},
				},
			},
		};

		expect(config.theme.overrides?.default?.['recommendation.similar carousel']).toBeDefined();
		expect(config.theme.overrides?.default?.['recommendation.similar']).toBeDefined();
	});
});

describe('createAutocompleteTargeters props.input', () => {
	const baseConfig: SnapTemplatesConfig = {
		config: { platform: 'other', siteId: 'test123' },
		theme: { extends: 'base' },
	};

	it('omits props.input when only inputSelector is provided (no explicit selector)', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ inputSelector: '.search-input', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].props).not.toHaveProperty('input');
	});

	it('omits props.input when selector equals inputSelector', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ selector: '.search-input', inputSelector: '.search-input', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].props).not.toHaveProperty('input');
	});

	it('sets props.input to inputSelector when selector differs from inputSelector', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ selector: '#ac-container', inputSelector: '.search-input', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].props?.input).toBe('.search-input');
	});

	it('handles multiple targets independently — class selector targets omit props.input, separate-container targets set it', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [
					// class selector matching multiple inputs: selector omitted, originalElem used per element
					{ inputSelector: '.search-input', component: 'AutocompleteFixed' },
					// separate injection container: props.input must point back to the input
					{ selector: '#ac-dropdown', inputSelector: '#header-search', component: 'AutocompleteFixed' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(2);

		// First targeter uses originalElem (the matched .search-input element itself) — no override needed
		expect(targeters[0].props).not.toHaveProperty('input');

		// Second targeter renders into a separate node; originalElem is #ac-dropdown, not the input
		expect(targeters[1].props?.input).toBe('#header-search');
	});
});

describe('createSearchTargeters autoRetarget and hideTarget', () => {
	const baseConfig: SnapTemplatesConfig = {
		config: { platform: 'other', siteId: 'test123' },
		theme: { extends: 'base' },
	};

	it('sets autoRetarget to true by default', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createSearchTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].autoRetarget).toBe(true);
	});

	it('sets hideTarget to true by default', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			search: {
				targets: [{ selector: '#search', component: 'Search' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createSearchTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].hideTarget).toBe(true);
	});

	it('applies autoRetarget and hideTarget to all search targeters', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			search: {
				targets: [
					{ selector: '#search-1', component: 'Search' },
					{ selector: '#search-2', component: 'Search' },
					{ selector: '#search-3', component: 'Search' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createSearchTargeters(config, templatesStore);

		expect(targeters).toHaveLength(3);
		targeters.forEach((targeter) => {
			expect(targeter.autoRetarget).toBe(true);
			expect(targeter.hideTarget).toBe(true);
		});
	});
});

describe('createAutocompleteTargeters autoRetarget and hideTarget', () => {
	const baseConfig: SnapTemplatesConfig = {
		config: { platform: 'other', siteId: 'test123' },
		theme: { extends: 'base' },
	};

	it('sets autoRetarget to true by default', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ inputSelector: '.search-input', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].autoRetarget).toBe(true);
	});

	it('sets hideTarget to true by default', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [{ inputSelector: '.search-input', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(1);
		expect(targeters[0].hideTarget).toBe(true);
	});

	it('applies autoRetarget and hideTarget to all autocomplete targeters', () => {
		const config: SnapTemplatesConfig = {
			...baseConfig,
			autocomplete: {
				targets: [
					{ inputSelector: '.search-input-1', component: 'AutocompleteFixed' },
					{ inputSelector: '.search-input-2', component: 'AutocompleteFixed' },
				],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const targeters = createAutocompleteTargeters(config, templatesStore);

		expect(targeters).toHaveLength(2);
		targeters.forEach((targeter) => {
			expect(targeter.autoRetarget).toBe(true);
			expect(targeter.hideTarget).toBe(true);
		});
	});
});

describe('globalResultComponent configuration', () => {
	const baseConfigValues = {
		config: {
			platform: 'other' as const,
			siteId: 'test123',
		},
		theme: {
			extends: 'base' as const,
		},
	};

	it('should apply one global result renderer across templates', () => {
		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			theme: {
				extends: 'base',
				globalResultComponent: 'CustomResult',
			},
		};

		new SnapTemplates(config);

		// Internally this is represented as a global result customComponent override.
		expect(config.theme.overrides?.default?.result?.customComponent).toBe('CustomResult');
	});

	it('should merge global result renderer with existing overrides', () => {
		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			theme: {
				extends: 'base',
				globalResultComponent: 'CustomResult',
				overrides: {
					default: {
						'recommendation.similar': {
							slidesPerView: 3,
						},
					},
				},
			},
		};

		new SnapTemplates(config);

		expect(config.theme.overrides?.default?.result?.customComponent).toBe('CustomResult');
		expect((config.theme.overrides?.default?.['recommendation.similar'] as any)?.slidesPerView).toBe(3);
	});

	it('should not override an existing result override', () => {
		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			theme: {
				extends: 'base',
				globalResultComponent: 'GlobalResult',
				overrides: {
					default: {
						result: {
							customComponent: 'SpecificResult',
						},
					},
				},
			},
		};

		new SnapTemplates(config);

		// The specific override should take precedence over the global one (because it's merged second)
		expect(config.theme.overrides?.default?.result?.customComponent).toBe('SpecificResult');
	});

	it('should apply globalResultComponent without overrides object', () => {
		const config: SnapTemplatesConfigUnlocked = {
			...baseConfigValues,
			unlocked: true,
			theme: {
				extends: 'base',
				globalResultComponent: 'CustomResult',
			},
		};

		new SnapTemplates(config);

		expect(config.theme.overrides?.default?.result?.customComponent).toBe('CustomResult');
		expect(config.theme.overrides?.default).toBeDefined();
	});

	it('should not add overrides if globalResultComponent is not specified', () => {
		const config: SnapTemplatesConfig = {
			...baseConfigValues,
			theme: {
				extends: 'base',
			},
		};

		new SnapTemplates(config);
		expect((config as SnapTemplatesConfigUnlocked).theme.overrides).toBeUndefined();
		expect((config as SnapTemplatesConfigUnlocked).theme.overrides).toBeUndefined();
	});
});

describe('SnapTemplates tab managers', () => {
	const tabbedConfig: SnapTemplatesConfigUnlocked = {
		unlocked: true,
		config: {
			platform: 'other',
			siteId: 'test123',
		},
		theme: {
			extends: 'base',
		},
		search: {
			targets: [{ selector: '#search', component: 'Search' }],
			tabs: [
				{ id: 'products', siteId: 'abc123', param: 'prod' },
				{ id: 'blog', siteId: 'xyz789', param: 'blog' },
			],
		},
		autocomplete: {
			targets: [{ inputSelector: '#autocomplete', component: 'AutocompleteFixed' }],
			tabs: [
				{ id: 'acProducts', siteId: 'abc123', param: 'prod' },
				{ id: 'acBlog', siteId: 'xyz789', param: 'blog' },
			],
		},
	};

	it('returns the same store for every target of a controller type', () => {
		const snap = new SnapTemplates(tabbedConfig);
		const { templates, controllers } = snap;

		expect(templates.getTabManager('search', controllers)).toBe(templates.getTabManager('search', controllers));
		expect(templates.getTabManager('autocomplete', controllers)).toBe(templates.getTabManager('autocomplete', controllers));
		expect(templates.getTabManager('search', controllers)).not.toBe(templates.getTabManager('autocomplete', controllers));
	});

	it('returns nothing when there are fewer than two tabs', () => {
		const snap = new SnapTemplates({
			...tabbedConfig,
			search: { ...tabbedConfig.search!, tabs: [{ id: 'products', siteId: 'abc123', param: 'prod' }] },
			autocomplete: { ...tabbedConfig.autocomplete!, tabs: undefined },
		});

		expect(snap.templates.getTabManager('search', snap.controllers)).toBeUndefined();
		expect(snap.templates.getTabManager('autocomplete', snap.controllers)).toBeUndefined();
	});
});

describe('SnapTemplates siteId context fallback', () => {
	afterEach(() => {
		delete window.athos;
		document.body.innerHTML = '';
	});

	it('uses context siteId when template config omits config.siteId', () => {
		document.body.innerHTML = `<script id="athos-context">siteId = 'siteid';</script>`;

		const config = {
			config: {
				platform: 'other' as const,
			},
			theme: {
				extends: 'base' as const,
			},
		} as SnapTemplatesConfig;

		const snap = new SnapTemplates(config);

		expect((snap.client as any).globals.siteId).toBe('siteid');
	});
});
