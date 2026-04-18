import { h, render } from 'preact';
import deepmerge from 'deepmerge';

import { Snap } from '../Snap';
import { TemplateSelect } from '../../components/src/components/Atoms/TemplateSelect';

import { DomTargeter, url, cookies, version } from '@athoscommerce/snap-toolbox';
import { TemplateTarget, TemplatesStore } from './Stores/TemplateStore';

import type { Target } from '@athoscommerce/snap-toolbox';
import { type AutocompleteStoreConfigSettings } from '@athoscommerce/snap-store-mobx';
import type { UrlTranslatorConfig } from '@athoscommerce/snap-url-manager';
import type { AutocompleteController, PluginFunction, PluginGrouping, SearchController } from '@athoscommerce/snap-controller';
import type { RecommendationComponentObject, RecommendationInstantiatorConfig } from '../Instantiators/RecommendationInstantiator';
import type { SnapFeatures } from '../types';
import type { SnapConfig, ExtendedTarget } from '../Snap';
import type {
	AutocompleteTargetConfig,
	CustomPlugins,
	PluginsConfigsUnlocked,
	RecsTemplateTypes,
	SearchTargetConfig,
	TemplatesStoreConfigLocked,
	TemplatesStoreConfigUnlocked,
	TemplateTypes,
} from './Stores/TemplateStore';

import {
	pluginBackgroundFilters,
	PluginBackgroundFiltersConfig,
	pluginScrollToTop,
	PluginScrollToTopConfig,
	pluginAddToCart,
	PluginAddToCartConfig,
	pluginLogger,
	PluginLoggerConfig,
} from '@athoscommerce/snap-platforms/common';
import {
	pluginBackgroundFilters as PluginShopifyBackgroundFilters,
	PluginBackgroundFiltersConfig as PluginShopifyBackgroundFiltersConfig,
	pluginMutateResults as pluginShopifyMutateResults,
	PluginMutateResultsConfig as PluginShopifyMutateResultsConfig,
	pluginAddToCart as pluginShopifyAddToCart,
	PluginAddToCartConfig as PluginShopifyAddToCartConfig,
} from '@athoscommerce/snap-platforms/shopify';
import {
	pluginAddToCart as pluginBigcommerceAddToCart,
	PluginAddToCartConfig as PluginBigCommerceAddToCartConfig,
	pluginBackgroundFilters as pluginBigcommerceBackgroundFilters,
	PluginBackgroundFiltersConfig as PluginBigcommerceBackgroundFiltersConfig,
} from '@athoscommerce/snap-platforms/bigcommerce';
import {
	pluginAddToCart as pluginMagento2AddToCart,
	AddToCartConfig as PluginMagento2AddToCartConfig,
	pluginBackgroundFilters as pluginMagento2BackgroundFilters,
	PluginBackgroundFiltersConfig as PluginMagento2BackgroundFiltersConfig,
	pluginBase as pluginMagento2Base,
	PluginBaseConfig as PluginMagento2BaseConfig,
} from '@athoscommerce/snap-platforms/magento2';
import { combineMerge } from '../utils';

export const TEMPLATE_EDIT_COOKIE = 'athosEditor';
export const TEMPLATE_EDITOR_PARAM = 'athos-editor';

export type SnapTemplatesConfig = (TemplatesStoreConfigLocked | TemplatesStoreConfigUnlocked) & {
	url?: UrlTranslatorConfig;
	features?: SnapFeatures;
};

type TemplatePlugins =
	// common
	| [typeof pluginBackgroundFilters, PluginBackgroundFiltersConfig]
	| [typeof pluginScrollToTop, PluginScrollToTopConfig]
	| [typeof pluginLogger, PluginLoggerConfig]
	| [typeof pluginAddToCart, PluginAddToCartConfig]
	// shopify
	| [typeof PluginShopifyBackgroundFilters, PluginShopifyBackgroundFiltersConfig]
	| [typeof pluginShopifyMutateResults, PluginShopifyMutateResultsConfig]
	| [typeof pluginShopifyAddToCart, PluginShopifyAddToCartConfig]
	// bigCommerce
	| [typeof pluginBigcommerceBackgroundFilters, PluginBigcommerceBackgroundFiltersConfig]
	| [typeof pluginBigcommerceAddToCart, PluginBigCommerceAddToCartConfig]
	// magento2
	| [typeof pluginMagento2Base, PluginMagento2BaseConfig]
	| [typeof pluginMagento2BackgroundFilters, PluginMagento2BackgroundFiltersConfig]
	| [typeof pluginMagento2AddToCart, PluginMagento2AddToCartConfig]
	// custom
	| [PluginFunction, ...unknown[]];

type TemplatePluginGrouping = TemplatePlugins[];

export const DEFAULT_FEATURES: SnapFeatures = {};

export const DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS: AutocompleteStoreConfigSettings = {
	trending: {
		limit: 5,
	},
};

export class SnapTemplates extends Snap {
	templates: TemplatesStore;
	constructor(config: SnapTemplatesConfig) {
		const urlParams = url(window.location.href);
		const editMode = Boolean((urlParams?.params?.query && TEMPLATE_EDITOR_PARAM in urlParams.params.query) || cookies.get(TEMPLATE_EDIT_COOKIE));

		const templatesStore = new TemplatesStore({ config, settings: { editMode } });

		const snapConfig = createSnapConfig(config, templatesStore);

		super(snapConfig, { templatesStore });

		this.templates = templatesStore;

		if (editMode) {
			cookies.set(TEMPLATE_EDIT_COOKIE, 'true');
			setTimeout(async () => {
				// preload the library
				await templatesStore.preLoad();

				new DomTargeter(
					[
						{
							selector: 'body',
							inject: {
								action: 'append',
								element: () => {
									const themeEditContainer = document.createElement('div');
									themeEditContainer.id = 'athos-template-editor';
									return themeEditContainer;
								},
							},
						},
					],
					async (target: Target, elem: Element) => {
						try {
							const TemplateEditor = (await import('../../components/src')).TemplatesEditor;
							const TemplateEditorStore = (await import('./Stores/TemplateEditor/TemplateEditorStore')).TemplateEditorStore;
							const templateEditorStore = new TemplateEditorStore({ templatesStore });

							const searchController = this.controllers['search'] as SearchController | undefined;
							const autocompleteController = this.controllers['autocomplete'] as AutocompleteController | undefined;

							if (searchController) {
								templateEditorStore.registerController(searchController);
							}

							if (autocompleteController) {
								templateEditorStore.registerController(autocompleteController);
							}

							render(
								<TemplateEditor
									templatesStore={templatesStore}
									editorStore={templateEditorStore}
									snap={this}
									onRemoveClick={() => {
										cookies.unset(TEMPLATE_EDIT_COOKIE);
										const urlState = url(window.location.href);
										delete urlState?.params.query[TEMPLATE_EDITOR_PARAM];

										const newUrl = urlState?.url();
										if (newUrl && newUrl != window.location.href) {
											window.location.href = newUrl;
										} else {
											window.location.reload();
										}
									}}
								/>,
								elem
							);
						} catch (error) {
							console.error('Error rendering TemplateEditor:', error);
						}
					}
				);
			});
		}
	}
}

export function mapBreakpoints<ControllerConfigSettings>(
	breakpointsKeys: number[],
	breakpointSettings: ControllerConfigSettings[]
): { [key: string]: ControllerConfigSettings | Record<string, never> } {
	return breakpointsKeys.reduce((mapping: { [key: string]: ControllerConfigSettings | Record<string, never> }, width: number, index: number) => {
		mapping[width.toString()] = breakpointSettings[index] || {};
		return mapping;
	}, {});
}

export const createSearchTargeters = (templateConfig: SnapTemplatesConfig, templatesStore: TemplatesStore): ExtendedTarget[] => {
	// initial target configs
	const targetConfigs = templateConfig.search?.targets || [];
	const overrideConfigs = (templatesStore.storage.get('overrides.targets.search') || []) as SearchTargetConfig[];

	// merge override targets with config
	const mergedConfigs = deepmerge<SearchTargetConfig[]>(targetConfigs, overrideConfigs, { arrayMerge: combineMerge });

	// loop through mergedConfigs ---
	return mergedConfigs.map((targetConfig, index) => {
		const target = templatesStore.addTarget({ ...targetConfig, index, type: 'search' });

		// const overrideTemplateStoreTarget = templatesStore.getTarget('search', target.index);
		// console.log("templatesStore", templatesStore)
		// console.log('selector', targetConfig.selector);
		// console.log('overrideTemplateStoreTarget', overrideTemplateStoreTarget);

		const targeter: ExtendedTarget = {
			selector: targetConfig.selector,
			hideTarget: true,
			component: async () => {
				const componentImportPromises = [];
				componentImportPromises.push(templatesStore.library.import.component.search[targetConfig.component]());

				await Promise.all(componentImportPromises);
				return TemplateSelect;
			},
			props: { target, templatesStore },
		};

		return targeter;
	});
};

export function createAutocompleteTargeters(templateConfig: SnapTemplatesConfig, templatesStore: TemplatesStore): ExtendedTarget[] {
	// initial target configs
	const targetConfigs = templateConfig.autocomplete?.targets || [];
	const overrideConfigs = (templatesStore.storage.get('overrides.targets.autocomplete') || []) as AutocompleteTargetConfig[];

	// merge override targets with config
	const mergedConfigs = deepmerge<AutocompleteTargetConfig[]>(targetConfigs, overrideConfigs, { arrayMerge: combineMerge });

	// load target override from localstorage OR from the editorStore (would be better);

	return mergedConfigs.map((targetConfig, index) => {
		const target = templatesStore.addTarget({ ...targetConfig, index, type: 'autocomplete' });
		const targeter: ExtendedTarget = {
			selector: targetConfig.selector,
			component: async () => {
				const componentImportPromises = [];
				componentImportPromises.push(templatesStore.library.import.component.autocomplete[targetConfig.component]());

				await Promise.all(componentImportPromises);
				return TemplateSelect;
			},
			props: { target, templatesStore },
			hideTarget: true,
			createControllerBeforeTargeting: templatesStore.settings.editMode,
		};

		// if (targetConfig.triggerSelector) targeter.props!.input = targetConfig.triggerSelector;

		return targeter;
	});
}

export function createRecommendationComponentMapping(
	templateConfig: SnapTemplatesConfig,
	templatesStore: TemplatesStore
): { [name: string]: RecommendationComponentObject } {
	// TODO: throw a warning if keys match inside each recommendation type
	return Object.keys(templateConfig.recommendation || {})
		.filter((key) => ['default', 'email', 'bundle'].includes(key))
		.reduce((mapping, type) => {
			const recsType = type as RecsTemplateTypes;
			Object.keys(templateConfig.recommendation![recsType] || {}).forEach((targetName, index) => {
				const type: TemplateTypes = `recommendation/${recsType}`;
				const targetConfig = {
					...(templateConfig.recommendation![recsType]![targetName] as TemplateTarget),
					index,
					type,
				};

				const mappedConfig: RecommendationComponentObject = {
					component: async () => {
						const componentImportPromises = [];
						switch (recsType) {
							case 'default': {
								const importLocation = templatesStore.library.import.component.recommendation.default;
								componentImportPromises.push(importLocation[targetConfig.component as keyof typeof importLocation]());
								break;
							}
							case 'bundle': {
								const importLocation = templatesStore.library.import.component.recommendation.bundle;
								componentImportPromises.push(importLocation[targetConfig.component as keyof typeof importLocation]());
								break;
							}
							case 'email': {
								const importLocation = templatesStore.library.import.component.recommendation.email;
								componentImportPromises.push(importLocation[targetConfig.component as keyof typeof importLocation]());
								break;
							}
						}

						await Promise.all(componentImportPromises);
						return TemplateSelect;
					},
					props: { templatesStore },
					onTarget: function (domTarget, elem, injectedElem, controller) {
						targetConfig.selector = `#${controller.id}`;
						this.props = this.props || {};
						this.props.target = templatesStore.addTarget(targetConfig);
					},
				};
				mapping[targetName] = mappedConfig;
			});
			return mapping;
		}, {} as { [name: string]: RecommendationComponentObject });
}

export function createSnapConfig(templateConfig: SnapTemplatesConfig, templatesStore: TemplatesStore): SnapConfig {
	const initiatorPrefix = window?.athos?.managed ? `managed/` : '';
	const snapConfig: SnapConfig = {
		features: templateConfig.features || DEFAULT_FEATURES,
		client: {
			globals: {
				siteId: templateConfig.config?.siteId,
			},
			config: {
				...(templateConfig.config?.client || {}),
				initiator: `athos/${initiatorPrefix}snap/preact/templates/${version}`,
			},
		},
		tracker: {
			config: {
				initiator: `athos/${initiatorPrefix}snap/preact/templates/${version}`,
				framework: 'snap/templates',
			},
		},
		instantiators: {},
		controllers: {},
	};

	// add url configuration if specified
	if (templateConfig.url) {
		snapConfig.url = templateConfig.url;
	}

	/* SEARCH CONTROLLER */
	if (templateConfig.search && snapConfig.controllers) {
		const searchControllerConfig = {
			config: {
				id: 'search',
				plugins: createPlugins(templateConfig, templatesStore, 'search'),
				settings: templateConfig.search.settings || {},
			},
			targeters: createSearchTargeters(templateConfig, templatesStore),
		};

		// merge the responsive settings if there are any
		// if (templateConfig.config.theme.variables?.breakpoints && templateConfig.search.breakpointSettings) {
		// 	const mappedBreakpoints = mapBreakpoints(templateConfig.config.theme.variables.breakpoints, templateConfig.search.breakpointSettings || []);
		// 	const breakpointSettings = getDisplaySettings(mappedBreakpoints) as SearchStoreConfigSettings;
		// 	searchControllerConfig.config.settings = deepmerge(searchControllerConfig.config.settings, breakpointSettings);
		// }

		snapConfig.controllers.search = [searchControllerConfig];
	}

	/* AUTOCOMPLETE CONTROLLER */
	if (templateConfig.autocomplete && snapConfig.controllers) {
		const autocompleteControllerSettings: AutocompleteStoreConfigSettings = deepmerge(
			DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS,
			templateConfig.autocomplete.settings || {}
		);

		const autocompleteControllerConfig = {
			config: {
				id: 'autocomplete',
				plugins: createPlugins(templateConfig, templatesStore, 'autocomplete'),
				selector: templateConfig.autocomplete.targets.map((target) => target.inputSelector || target.selector).join(', '),
				settings: autocompleteControllerSettings,
			},
			targeters: createAutocompleteTargeters(templateConfig, templatesStore),
		};

		// merge the responsive settings if there are any
		// if (templateConfig.config.theme.variables?.breakpoints && templateConfig.autocomplete.breakpointSettings) {
		// 	const mappedBreakpoints = mapBreakpoints(
		// 		templateConfig.config.theme.variables.breakpoints,
		// 		templateConfig.autocomplete.breakpointSettings || []
		// 	);
		// 	const breakpointSettings = getDisplaySettings(mappedBreakpoints) as AutocompleteStoreConfigSettings;
		// 	autocompleteControllerConfig.config.settings = deepmerge(autocompleteControllerConfig.config.settings, breakpointSettings);
		// }

		snapConfig.controllers.autocomplete = [autocompleteControllerConfig];
	}

	/* RECOMMENDATION INSTANTIATOR */
	const originalRecsConfig = templateConfig.recommendation || {};
	templateConfig.recommendation = deepmerge(
		{
			settings: {
				branch: 'production',
			},
			bundle: {
				SnapTemplatesBundleDefault: {
					component: 'RecommendationBundle',
				},
				SnapTemplatesBundleEasyAdd: {
					component: 'RecommendationBundleEasyAdd',
				},
				SnapTemplatesBundleList: {
					component: 'RecommendationBundleList',
				},
				SnapTemplatesBundleVertical: {
					component: 'RecommendationBundleVertical',
				},
			},
			default: {
				SnapTemplatesRecommendationCarousel: {
					component: 'Recommendation',
				},
				SnapTemplatesRecommendationGrid: {
					component: 'RecommendationGrid',
				},
			},
			email: {
				SnapTemplatesEmailDefault: {
					component: 'RecommendationEmail',
				},
			},
		},
		originalRecsConfig
	) as SnapTemplatesConfig['recommendation'];
	if (templateConfig.recommendation && snapConfig.instantiators) {
		const recommendationInstantiatorConfig: RecommendationInstantiatorConfig = {
			components: createRecommendationComponentMapping(templateConfig, templatesStore),
			config: {
				plugins: createPlugins(templateConfig, templatesStore, 'recommendation'),
				...templateConfig.recommendation?.settings!,
			},
		};

		// merge the responsive settings if there are any
		// if (templateConfig.config.theme.variables?.breakpoints && templateConfig.recommendation.breakpointSettings) {
		// 	const mappedBreakpoints = mapBreakpoints(
		// 		templateConfig.config.theme.variables.breakpoints,
		// 		templateConfig.recommendation.breakpointSettings || []
		// 	);
		// 	const breakpointSettings = getDisplaySettings(mappedBreakpoints);
		// 	recommendationInstantiatorConfig.config = deepmerge(recommendationInstantiatorConfig.config, breakpointSettings);
		// }

		snapConfig.instantiators.recommendation = recommendationInstantiatorConfig;
	}

	return snapConfig;
}

export function createPlugins(
	templateConfig: SnapTemplatesConfig,
	templatesStore: TemplatesStore,
	controllerType?: 'autocomplete' | 'search' | 'recommendation'
): PluginGrouping[] {
	const plugins: TemplatePluginGrouping = [];
	let controllerConfig;
	if (controllerType) {
		controllerConfig = templateConfig[controllerType] || {};
	}

	plugins.push([
		templatesStore.library.import.plugins.common.backgroundFilters,
		deepmerge(templateConfig.plugins?.common?.backgroundFilters || {}, controllerConfig?.plugins?.common?.backgroundFilters || {}),
	]);

	plugins.push([
		templatesStore.library.import.plugins.common.scrollToTop,
		deepmerge(templateConfig.plugins?.common?.scrollToTop || {}, controllerConfig?.plugins?.common?.scrollToTop || {}),
	]);
	plugins.push([
		templatesStore.library.import.plugins.common.logger,
		deepmerge(templateConfig.plugins?.common?.logger || {}, controllerConfig?.plugins?.common?.logger || {}),
	]);

	switch (templatesStore.platform) {
		case 'shopify':
			plugins.push([
				templatesStore.library.import.plugins.shopify.backgroundFilters,
				deepmerge(templateConfig.plugins?.shopify?.backgroundFilters || {}, controllerConfig?.plugins?.shopify?.backgroundFilters || {}),
			]);
			plugins.push([
				templatesStore.library.import.plugins.shopify.mutateResults,
				deepmerge(templateConfig.plugins?.shopify?.mutateResults || {}, controllerConfig?.plugins?.shopify?.mutateResults || {}),
			]);
			plugins.push([
				templatesStore.library.import.plugins.shopify.addToCart,
				deepmerge(templateConfig.plugins?.shopify?.addToCart || {}, controllerConfig?.plugins?.shopify?.addToCart || {}),
			]);
			break;
		case 'bigCommerce':
			plugins.push([
				templatesStore.library.import.plugins.bigcommerce.backgroundFilters,
				deepmerge(templateConfig.plugins?.bigCommerce?.backgroundFilters || {}, controllerConfig?.plugins?.bigCommerce?.backgroundFilters || {}),
			]);
			plugins.push([
				templatesStore.library.import.plugins.bigcommerce.addToCart,
				deepmerge(templateConfig.plugins?.bigCommerce?.addToCart || {}, controllerConfig?.plugins?.bigCommerce?.addToCart || {}),
			]);
			break;
		case 'magento2':
			plugins.push([
				templatesStore.library.import.plugins.magento2.base,
				deepmerge(templateConfig.plugins?.magento2?.base || {}, controllerConfig?.plugins?.magento2?.base || {}),
			]);
			plugins.push([
				templatesStore.library.import.plugins.magento2.backgroundFilters,
				deepmerge(templateConfig.plugins?.magento2?.backgroundFilters || {}, controllerConfig?.plugins?.magento2?.backgroundFilters || {}),
			]);
			plugins.push([
				templatesStore.library.import.plugins.magento2.addToCart,
				deepmerge(templateConfig.plugins?.magento2?.addToCart || {}, controllerConfig?.plugins?.magento2?.addToCart || {}),
			]);
			break;
		case 'other':
			plugins.push([
				templatesStore.library.import.plugins.common.addToCart,
				deepmerge(templateConfig.plugins?.common?.addToCart || {}, controllerConfig?.plugins?.common?.addToCart || {}),
			]);
		default:
			break;
	}

	// Handle custom plugins (only available when unlocked: true)
	const customPlugins: CustomPlugins = deepmerge(
		(templateConfig as { plugins?: PluginsConfigsUnlocked }).plugins?.custom || {},
		(controllerConfig as { plugins?: PluginsConfigsUnlocked })?.plugins?.custom || {}
	);

	Object.keys(customPlugins).forEach((pluginName) => {
		const customPlugin = customPlugins[pluginName];
		if (customPlugin?.function) {
			plugins.push([customPlugin.function, ...(customPlugin.args || [])]);
		}
	});

	return plugins as PluginGrouping[];
}
