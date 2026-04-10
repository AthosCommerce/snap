import { version } from '@athoscommerce/snap-toolbox';
import { createPlugins, createSnapConfig, DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS, DEFAULT_FEATURES } from './SnapTemplates';
import type { SnapTemplatesConfig, SnapTemplatesConfigLocked, SnapTemplatesConfigUnlocked } from './SnapTemplates';
import { TemplatesStore } from './Stores/TemplateStore';
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

	const baseConfig: SnapTemplatesConfigLocked = {
		unlocked: false,
		...baseConfigValues,
	};

	it('should handle empty custom plugins', () => {
		const config: SnapTemplatesConfigLocked = {
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
				targets: [{ selector: '#autocomplete', component: 'AutocompleteFixed' }],
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
			unlocked: false,
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
				targets: [{ selector: '#autocomplete', component: 'AutocompleteFixed' }],
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
});

describe('createPlugins with built-in plugins', () => {
	const baseConfig: SnapTemplatesConfigLocked = {
		unlocked: false,
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
		const shopifyConfig: SnapTemplatesConfigLocked = {
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
		const bigCommerceConfig: SnapTemplatesConfigLocked = {
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
		const magento2Config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
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
});

describe('createSnapConfig additional coverage', () => {
	const baseConfig: SnapTemplatesConfigLocked = {
		unlocked: false,
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
		const config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
			...baseConfig,
			autocomplete: {
				targets: [{ selector: '#autocomplete', component: 'AutocompleteFixed' }],
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
		const config: SnapTemplatesConfigLocked = {
			...baseConfig,
			autocomplete: {
				targets: [{ selector: '#autocomplete', component: 'AutocompleteFixed' }],
			},
		};

		const templatesStore = new TemplatesStore({ config });
		const snapConfig = createSnapConfig(config, templatesStore);

		const autocompleteConfig = snapConfig.controllers?.autocomplete?.[0];
		expect(autocompleteConfig?.config?.settings?.trending?.limit).toBe(DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS.trending?.limit);
	});

	it('should construct autocomplete selector from target selectors', () => {
		const config: SnapTemplatesConfigLocked = {
			...baseConfig,
			autocomplete: {
				targets: [
					{ selector: '#autocomplete1', component: 'AutocompleteFixed' },
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
		const config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
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

	it('should create search controller with correct id', () => {
		const config: SnapTemplatesConfigLocked = {
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
		const config: SnapTemplatesConfigLocked = {
			...baseConfig,
			autocomplete: {
				targets: [{ selector: '#autocomplete', component: 'AutocompleteFixed' }],
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
		const config: SnapTemplatesConfigLocked = {
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
