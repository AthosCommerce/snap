import { h, render } from 'preact';
import deepmerge from 'deepmerge';

import { Snap } from '../Snap';
import { TemplateSelect } from '../../components/src/components/Atoms/TemplateSelect';

import { DomTargeter, url, cookies, version, getContext } from '@athoscommerce/snap-toolbox';
import { TemplateTarget, TemplatesStore } from './Stores/TemplateStore';
import { TargetStore } from './Stores/TargetStore';
import { TAB_ID_DEFAULT_PARAM, getActiveTabConfig } from './Stores/TabManagerStore';
import { Client } from '@athoscommerce/snap-client';
import { Tracker } from '@athoscommerce/snap-tracker';

import type { ThemeComponentsRestrictedSelectors, ThemeComponentsRestrictedSelectorsUnlocked } from '../../components/src/providers/themeComponents';
import type { Target } from '@athoscommerce/snap-toolbox';
import type { ClientGlobals } from '@athoscommerce/snap-client';
import type { TrackerGlobals } from '@athoscommerce/snap-tracker';
import { type AutocompleteStoreConfigSettings } from '@athoscommerce/snap-store-mobx';
import type { CoreMap, UrlTranslatorConfig } from '@athoscommerce/snap-url-manager';
import type { AutocompleteController, Controllers, PluginFunction, PluginGrouping, SearchController } from '@athoscommerce/snap-controller';
import type { RecommendationComponentObject, RecommendationInstantiatorConfig } from '../Instantiators/RecommendationInstantiator';
import type { SnapFeatures } from '../types';
import type { SnapConfig, ExtendedTarget } from '../Snap';
import type {
	AutocompleteTargetConfig,
	ChatTargetConfig,
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
	pluginKlaviyoEvents,
	PluginKlaviyoEventsConfig,
} from '@athoscommerce/snap-platforms/common';
import {
	pluginBackgroundFilters as pluginShopifyBackgroundFilters,
	PluginBackgroundFiltersConfig as PluginShopifyBackgroundFiltersConfig,
	pluginMutateResults as pluginShopifyMutateResults,
	PluginMutateResultsConfig as PluginShopifyMutateResultsConfig,
	pluginAddToCart as pluginShopifyAddToCart,
	PluginAddToCartConfig as PluginShopifyAddToCartConfig,
	PluginMarketsConfig as PluginShopifyMarketsConfig,
	pluginMarkets as pluginShopifyMarkets,
	shopifyMarketsPriceFormat,
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
import { applyChatTargetInject, combineMerge } from '../utils';

export const TEMPLATE_EDITOR_COOKIE = 'athosEditor';
export const TEMPLATE_EDITOR_UI_PARAM = 'athos-editor';

export type SnapTemplatesConfig = SnapTemplatesConfigLocked;
export type SnapTemplatesConfigUnlocked = TemplatesStoreConfigUnlocked & {
	unlocked: true;
	url?: UrlTranslatorConfig;
	features?: SnapFeatures;
};

export type SnapTemplatesConfigLocked = TemplatesStoreConfigLocked & {
	url?: UrlTranslatorConfig;
	features?: SnapFeatures;
};

type SnapTemplatesConfigThemeOverridesTyped<
	DefaultSelectors extends string,
	MobileSelectors extends string,
	TabletSelectors extends string,
	DesktopSelectors extends string
> = {
	default?: ThemeComponentsRestrictedSelectors<DefaultSelectors>;
	mobile?: ThemeComponentsRestrictedSelectors<MobileSelectors>;
	tablet?: ThemeComponentsRestrictedSelectors<TabletSelectors>;
	desktop?: ThemeComponentsRestrictedSelectors<DesktopSelectors>;
};

export function validateTemplatesConfig<
	DefaultSelectors extends string = never,
	MobileSelectors extends string = never,
	TabletSelectors extends string = never,
	DesktopSelectors extends string = never
>(
	config: Omit<SnapTemplatesConfig, 'theme'> & {
		theme: Omit<SnapTemplatesConfig['theme'], 'overrides'> & {
			overrides?: SnapTemplatesConfigThemeOverridesTyped<DefaultSelectors, MobileSelectors, TabletSelectors, DesktopSelectors>;
		};
	}
): SnapTemplatesConfig {
	return config;
}

type SnapTemplatesConfigThemeOverridesTypedUnlocked<
	DefaultSelectors extends string,
	MobileSelectors extends string,
	TabletSelectors extends string,
	DesktopSelectors extends string
> = {
	default?: ThemeComponentsRestrictedSelectorsUnlocked<DefaultSelectors>;
	mobile?: ThemeComponentsRestrictedSelectorsUnlocked<MobileSelectors>;
	tablet?: ThemeComponentsRestrictedSelectorsUnlocked<TabletSelectors>;
	desktop?: ThemeComponentsRestrictedSelectorsUnlocked<DesktopSelectors>;
};

export function validateTemplatesConfigUnlocked<
	DefaultSelectors extends string = never,
	MobileSelectors extends string = never,
	TabletSelectors extends string = never,
	DesktopSelectors extends string = never
>(
	config: Omit<SnapTemplatesConfigUnlocked, 'theme'> & {
		theme: Omit<SnapTemplatesConfigUnlocked['theme'], 'overrides'> & {
			overrides?: SnapTemplatesConfigThemeOverridesTypedUnlocked<DefaultSelectors, MobileSelectors, TabletSelectors, DesktopSelectors>;
		};
	}
): SnapTemplatesConfigUnlocked {
	return config;
}

type TemplatePlugins =
	// common
	| [typeof pluginBackgroundFilters, PluginBackgroundFiltersConfig]
	| [typeof pluginScrollToTop, PluginScrollToTopConfig]
	| [typeof pluginLogger, PluginLoggerConfig]
	| [typeof pluginAddToCart, PluginAddToCartConfig]
	| [typeof pluginKlaviyoEvents, PluginKlaviyoEventsConfig]
	// shopify
	| [typeof pluginShopifyBackgroundFilters, PluginShopifyBackgroundFiltersConfig]
	| [typeof pluginShopifyMutateResults, PluginShopifyMutateResultsConfig]
	| [typeof pluginShopifyAddToCart, PluginShopifyAddToCartConfig]
	| [typeof pluginShopifyMarkets, PluginShopifyMarketsConfig]
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

// tabs namespace their catalog specific url state - the query is shared so a single search spans every tab
export const TAB_PREFIXED_PARAMS: (keyof CoreMap)[] = ['filter', 'sort', 'pageSize', 'rq', 'page'];

const hasShopifyMarketsPluginConfig = (templateConfig: SnapTemplatesConfig | SnapTemplatesConfigUnlocked): boolean => {
	const pluginConfigs = [
		templateConfig.plugins?.shopify?.markets,
		templateConfig.search?.plugins?.shopify?.markets,
		templateConfig.autocomplete?.plugins?.shopify?.markets,
		templateConfig.recommendation?.plugins?.shopify?.markets,
	];

	return pluginConfigs.some((pluginConfig) => {
		return typeof pluginConfig?.token === 'string' && pluginConfig.token.length > 0;
	});
};

export const applyAutomaticThemeOverrides = (
	templateConfig: SnapTemplatesConfig | SnapTemplatesConfigUnlocked
): SnapTemplatesConfig | SnapTemplatesConfigUnlocked => {
	if (templateConfig.config?.platform !== 'shopify') {
		return templateConfig;
	}

	if (!hasShopifyMarketsPluginConfig(templateConfig)) {
		return templateConfig;
	}

	const defaultOverrides = templateConfig.theme?.overrides?.default as Record<string, unknown> | undefined;
	const priceOverride = defaultOverrides?.price as { format?: unknown } | undefined;

	if (typeof priceOverride?.format !== 'undefined') {
		return templateConfig;
	}

	let context: { format?: string } | undefined;
	try {
		context = getContext(['format']) as { format?: string };
	} catch {
		context = undefined;
	}
	const currencyFormat: string = context?.format || '${{amount}}';
	// todo: consider moving this inside of the plugin if possible. seems odd to have this happen outside of it.
	return deepmerge(templateConfig, {
		theme: {
			overrides: {
				default: {
					price: {
						format: (number: number | string) => shopifyMarketsPriceFormat(number, currencyFormat),
					},
				},
			},
		},
	});
};

export class SnapTemplates extends Snap {
	templates: TemplatesStore;
	constructor(config: SnapTemplatesConfig | SnapTemplatesConfigUnlocked) {
		const modifiedConfig = applyAutomaticThemeOverrides(config);
		let context: { editor?: { mode?: string } } = {};
		try {
			context = getContext(['editor']);
		} catch {
			context = {};
		}
		const { editor } = context;

		const urlParams = url(window.location.href);
		const editorCookieValue = cookies.get(TEMPLATE_EDITOR_COOKIE);
		const editUIMode = Boolean(
			(urlParams?.params?.query && TEMPLATE_EDITOR_UI_PARAM in urlParams.params.query) || editorCookieValue === 'ui' || editor?.mode === 'ui'
		);
		const editMode = Boolean(editorCookieValue) || editUIMode || Boolean(editor?.mode === 'headless');

		// handle "global" result component configuration
		if (modifiedConfig.theme.globalResultComponent) {
			(modifiedConfig as SnapTemplatesConfigUnlocked).theme.overrides = deepmerge(
				{ default: { result: { customComponent: modifiedConfig.theme.globalResultComponent } } },
				(modifiedConfig as SnapTemplatesConfigUnlocked).theme.overrides || {}
			);
		}

		const templatesStore = new TemplatesStore({ config: modifiedConfig, settings: { editMode } });

		const snapConfig = createSnapConfig(modifiedConfig, templatesStore);

		super(snapConfig, { templatesStore });

		this.templates = templatesStore;

		setTimeout(async () => {
			if (editMode) {
				// create templateditor store
				// preload the library
				await templatesStore.preLoad();

				// create editor store and register controllers
				const TemplateEditorStore = (await import('./Stores/TemplateEditor/TemplateEditorStore')).TemplateEditorStore;
				const templateEditorStore = new TemplateEditorStore({ templatesStore });

				// attach to the window object
				window.athos = window.athos || {};
				window.athos.editor = templateEditorStore;

				const searchController = this.getTemplateController('search') as SearchController | undefined;
				const autocompleteController = this.getTemplateController('autocomplete') as AutocompleteController | undefined;

				if (searchController) {
					templateEditorStore.registerController(searchController);
				}

				if (autocompleteController) {
					templateEditorStore.registerController(autocompleteController);
				}

				// render ui editor
				if (editUIMode) {
					cookies.set(TEMPLATE_EDITOR_COOKIE, 'ui');

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

								render(
									<TemplateEditor
										templatesStore={templatesStore}
										editorStore={templateEditorStore}
										snap={this}
										onRemoveClick={() => {
											cookies.unset(TEMPLATE_EDITOR_COOKIE);
											const urlState = url(window.location.href);
											delete urlState?.params.query[TEMPLATE_EDITOR_UI_PARAM];

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
				}
			}
		});
	}

	// when tabs are configured there is no controller using the `search` / `autocomplete` id -
	// the default tab controller is used instead
	public getTemplateController(type: 'search' | 'autocomplete'): Controllers | undefined {
		const tabs = this.templates.config[type]?.tabs;
		if (tabs?.length) {
			const defaultTab = tabs.filter((tab) => tab.default)[0] || tabs[0];
			return this.controllers[defaultTab.id];
		}

		return this.controllers[type];
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

	let mergedConfigs: SearchTargetConfig[];
	if (templatesStore.settings.editMode) {
		const overrideConfigs = (templatesStore.storage.get('overrides.targets.search') || []) as SearchTargetConfig[];
		mergedConfigs = deepmerge<SearchTargetConfig[]>(targetConfigs, overrideConfigs, { arrayMerge: combineMerge });
	} else {
		mergedConfigs = targetConfigs;
	}

	// loop through mergedConfigs ---
	return mergedConfigs.map((targetConfig) => {
		const target = templatesStore.addTarget({ ...targetConfig, type: 'search' });

		// const overrideTemplateStoreTarget = templatesStore.getTarget('search', target.index);
		// console.log("templatesStore", templatesStore)
		// console.log('selector', targetConfig.selector);
		// console.log('overrideTemplateStoreTarget', overrideTemplateStoreTarget);

		const targeter: ExtendedTarget = {
			selector: targetConfig.selector,
			autoRetarget: true,
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

export const createChatTargeters = (templateConfig: SnapTemplatesConfig, templatesStore: TemplatesStore): ExtendedTarget[] => {
	// initial target configs
	const targetConfigs = templateConfig.chat?.targets || [];

	let mergedConfigs: ChatTargetConfig[];
	if (templatesStore.settings.editMode) {
		const overrideConfigs = (templatesStore.storage.get('overrides.targets.chat') || []) as ChatTargetConfig[];
		mergedConfigs = deepmerge<ChatTargetConfig[]>(targetConfigs, overrideConfigs, { arrayMerge: combineMerge });
	} else {
		mergedConfigs = targetConfigs;
	}

	return mergedConfigs.map((targetConfig) => {
		const target = templatesStore.addTarget({ ...targetConfig, type: 'chat' });

		const targeter: ExtendedTarget = {
			selector: targetConfig.selector,
			// inline selectors (e.g. a nav slot) may render after DOMContentLoaded;
			// re-injection at already-targeted elements is prevented by DomTargeter
			autoRetarget: true,
			component: async () => {
				const componentImportPromises = [];
				componentImportPromises.push(templatesStore.library.import.component.chat[targetConfig.component]());

				await Promise.all(componentImportPromises);
				return TemplateSelect;
			},
			props: { target, templatesStore },
		};

		return applyChatTargetInject(targeter);
	});
};

export function createAutocompleteTargeters(templateConfig: SnapTemplatesConfig, templatesStore: TemplatesStore): ExtendedTarget[] {
	// initial target configs
	const targetConfigs = templateConfig.autocomplete?.targets || [];

	let mergedConfigs: AutocompleteTargetConfig[];
	if (templatesStore.settings.editMode) {
		const overrideConfigs = (templatesStore.storage.get('overrides.targets.autocomplete') || []) as AutocompleteTargetConfig[];
		mergedConfigs = deepmerge<AutocompleteTargetConfig[]>(targetConfigs, overrideConfigs, { arrayMerge: combineMerge });
	} else {
		mergedConfigs = targetConfigs;
	}

	// load target override from localstorage OR from the editorStore (would be better);

	return mergedConfigs.map((targetConfig) => {
		const target = templatesStore.addTarget({ ...targetConfig, type: 'autocomplete', selector: targetConfig.selector || targetConfig.inputSelector });
		const targeter: ExtendedTarget = {
			selector: targetConfig.selector || targetConfig.inputSelector,
			component: async () => {
				const componentImportPromises = [];
				componentImportPromises.push(templatesStore.library.import.component.autocomplete[targetConfig.component]());

				await Promise.all(componentImportPromises);
				return TemplateSelect;
			},
			props: {
				target,
				templatesStore,
				//only set input if selector and inputSelector are different. else bind to orinalElem
				...(targetConfig.selector && targetConfig.selector !== targetConfig.inputSelector ? { input: targetConfig.inputSelector } : {}),
			},
			autoRetarget: true,
			hideTarget: true,
			createControllerBeforeTargeting: templatesStore.settings.editMode,
		};

		return targeter;
	});
}

export function createQuickviewTargeters(templateConfig: SnapTemplatesConfig, templatesStore: TemplatesStore): ExtendedTarget[] {
	return (
		templateConfig.quickview?.targets?.map((targetConfig, index) => {
			// Quickview isn't part of the editable targets registry (it's appended to <body> and driven by the
			// QuickviewManager), so build a TargetStore directly rather than via addTarget. This lets the
			// component render through TemplateSelect — the same wrapper used by search/autocomplete — which
			// provides the global templates ThemeProvider. Without it the quickview renders outside the
			// templates theme, falling back to production-mode prop merging where theme overrides (e.g.
			// `quickviewLayout`) are silently dropped.
			const target = new TargetStore({
				target: { type: 'quickview' as TemplateTypes, selector: targetConfig.selector || 'body', component: targetConfig.component, index },
			});

			const targeter: ExtendedTarget = {
				selector: targetConfig.selector || 'body',
				inject: {
					action: 'append' as const,
					element: () => {
						const el = document.createElement('div');
						el.id = index === 0 ? 'athos-quickview' : `athos-quickview-${index}`;
						return el;
					},
				},
				component: async () => {
					await templatesStore.library.import.component.quickview[targetConfig.component]();
					return TemplateSelect;
				},
				props: { target, templatesStore },
			};

			return targeter;
		}) || []
	);
}

export function createRecommendationComponentMapping(
	templateConfig: SnapTemplatesConfig | SnapTemplatesConfigUnlocked,
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

function createTabServices(snapConfig: SnapConfig, siteId?: string) {
	const tabGlobals = {
		...snapConfig.client?.globals,
		siteId,
	} as ClientGlobals;

	return {
		client: new Client(tabGlobals, snapConfig.client?.config),
		tracker: new Tracker(tabGlobals as TrackerGlobals, snapConfig.tracker?.config),
	};
}

export function createSnapConfig(templateConfig: SnapTemplatesConfig | SnapTemplatesConfigUnlocked, templatesStore: TemplatesStore): SnapConfig {
	const initiatorPrefix = window?.athos?.managed ? `managed/` : '';
	const snapConfig: SnapConfig = {
		mode: templateConfig.config?.mode,
		features: templateConfig.features || DEFAULT_FEATURES,
		client: {
			globals: {},
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

	// add siteId if specified
	if (templateConfig.config?.siteId && snapConfig.client?.globals) {
		snapConfig.client.globals.siteId = templateConfig.config.siteId;
	}

	// add url configuration if specified
	if (templateConfig.url) {
		snapConfig.url = templateConfig.url;
	}

	/* SEARCH CONTROLLER */
	if (templateConfig.search && snapConfig.controllers) {
		const searchTabs = templateConfig.search.tabs || [];
		const searchTargeters = createSearchTargeters(templateConfig, templatesStore);
		const searchSettings = templateConfig.search.settings || {};
		const searchGlobals = templateConfig.search.globals || {};

		snapConfig.controllers.search = [];

		if (!searchTabs.length) {
			snapConfig.controllers.search.push({
				config: {
					id: 'search',
					plugins: createPlugins(templateConfig, templatesStore, 'search'),
					globals: searchGlobals,
					settings: searchSettings,
				},
				targeters: searchTargeters,
			});
		} else {
			// when tabs are configured, the tab controllers do all of the searching - an additional
			// non-tab controller would only produce a redundant API request, so the targeters are
			// attached to the active tab controller instead. targeting kicks off a search before the
			// TabManagerStore exists to gate redirects, so this must be the tab the shopper is viewing
			const targetedTab = getActiveTabConfig(searchTabs) || searchTabs[0];

			searchTabs.forEach((tab) => {
				const tabParam = tab.param;

				snapConfig.controllers!.search!.push({
					url: {
						settings: {
							// the query is shared across tabs - only per-catalog state is namespaced
							...(tabParam ? { corePrefix: tabParam, corePrefixParams: TAB_PREFIXED_PARAMS } : {}),
						},
						parameters: {
							custom: {
								[TAB_ID_DEFAULT_PARAM]: { type: 'query' as const },
							},
						},
					},
					config: {
						id: tab.id,
						plugins: tab.plugins ? createTabPlugins(tab.plugins, templatesStore) : createPlugins(templateConfig, templatesStore, 'search'),
						settings: {
							...deepmerge(searchSettings, tab.settings || {}),
						},
						globals: deepmerge(searchGlobals, tab.globals || {}),
					},
					services: createTabServices(snapConfig, tab.siteId),
					...(tab === targetedTab ? { targeters: searchTargeters } : {}),
				});
			});
		}
	}

	/* AUTOCOMPLETE CONTROLLER */
	if (templateConfig.autocomplete && snapConfig.controllers) {
		const autocompleteControllerSettings: AutocompleteStoreConfigSettings = deepmerge(
			DEFAULT_AUTOCOMPLETE_CONTROLLER_SETTINGS,
			templateConfig.autocomplete.settings || {}
		);

		const autocompleteSelector = templateConfig.autocomplete.targets.map((target) => target.inputSelector).join(', ');
		const autocompleteTabs = templateConfig.autocomplete.tabs || [];
		const autocompleteGlobals = templateConfig.autocomplete.globals || {};
		const autocompleteTargeters = createAutocompleteTargeters(templateConfig, templatesStore);

		// merge the responsive settings if there are any
		// if (templateConfig.config.theme.variables?.breakpoints && templateConfig.autocomplete.breakpointSettings) {
		// 	const mappedBreakpoints = mapBreakpoints(
		// 		templateConfig.config.theme.variables.breakpoints,
		// 		templateConfig.autocomplete.breakpointSettings || []
		// 	);
		// 	const breakpointSettings = getDisplaySettings(mappedBreakpoints) as AutocompleteStoreConfigSettings;
		// 	autocompleteControllerSettings = deepmerge(autocompleteControllerSettings, breakpointSettings);
		// }

		snapConfig.controllers.autocomplete = [];

		if (!autocompleteTabs.length) {
			snapConfig.controllers.autocomplete.push({
				config: {
					id: 'autocomplete',
					plugins: createPlugins(templateConfig, templatesStore, 'autocomplete'),
					selector: autocompleteSelector,
					action: templateConfig.autocomplete.action || '',
					globals: autocompleteGlobals,
					settings: autocompleteControllerSettings,
				},
				targeters: autocompleteTargeters,
			});
		} else {
			// when tabs are configured, every tab controller binds to the same input - an additional
			// non-tab controller would only produce redundant API requests, so the targeters are
			// attached to the default tab controller instead
			const defaultTab = autocompleteTabs.filter((tab) => tab.default)[0] || autocompleteTabs[0];

			autocompleteTabs.forEach((tab) => {
				const tabParam = tab.param;

				snapConfig.controllers!.autocomplete!.push({
					url: {
						settings: {
							// the query is shared across tabs - only per-catalog state is namespaced
							...(tabParam ? { corePrefix: tabParam, corePrefixParams: TAB_PREFIXED_PARAMS } : {}),
						},
						parameters: {
							custom: {
								[TAB_ID_DEFAULT_PARAM]: { type: 'query' as const },
							},
						},
						// every url the autocomplete builds must carry the tab it belongs to
						globals: [
							{
								param: TAB_ID_DEFAULT_PARAM,
								value: tab.param,
							},
						],
					},
					config: {
						id: tab.id,
						plugins: tab.plugins ? createTabPlugins(tab.plugins, templatesStore) : createPlugins(templateConfig, templatesStore, 'autocomplete'),
						selector: autocompleteSelector,
						action: templateConfig.autocomplete!.action || '',
						settings: deepmerge(autocompleteControllerSettings, tab.settings || {}),
						globals: deepmerge(autocompleteGlobals, tab.globals || {}),
					},
					services: createTabServices(snapConfig, tab.siteId),
					...(tab === defaultTab ? { targeters: autocompleteTargeters } : {}),
				});
			});
		}
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

	/* CHAT CONTROLLER */
	if (templateConfig.chat && snapConfig.controllers) {
		const chatControllerConfig = {
			config: {
				id: 'chat',
				plugins: createPlugins(templateConfig, templatesStore, 'chat'),
				settings: {
					languageCode: templatesStore.language,
					...(templateConfig.chat.settings || {}),
				},
			},
			targeters: createChatTargeters(templateConfig, templatesStore),
		};

		snapConfig.controllers.chat = [chatControllerConfig];
	}

	/* QUICKVIEW MANAGER — injects quickview component(s) into <body> when enabled */
	if (templateConfig.quickview) {
		const quickviewSettings = templateConfig.quickview?.settings;
		snapConfig.quickview = {
			config: {
				id: 'quickview',
				...(quickviewSettings ? { settings: quickviewSettings } : {}),
			},
			targeters: createQuickviewTargeters(templateConfig, templatesStore),
		};
	}

	return snapConfig;
}

export function createPlugins(
	templateConfig: SnapTemplatesConfig | SnapTemplatesConfigUnlocked,
	templatesStore: TemplatesStore,
	controllerType?: 'autocomplete' | 'search' | 'recommendation' | 'chat'
): PluginGrouping[] {
	const plugins: TemplatePluginGrouping = [];
	let controllerConfig;
	if (controllerType) {
		controllerConfig = templateConfig[controllerType] || {};
	}

	// backgroundFilters writes `config.globals.filters`, which the chat endpoint has no
	// field for — chat carries background filters via `settings.bgFilters` instead
	if (controllerType !== 'chat') {
		plugins.push([
			templatesStore.library.import.plugins.common.backgroundFilters,
			deepmerge(templateConfig.plugins?.common?.backgroundFilters || {}, controllerConfig?.plugins?.common?.backgroundFilters || {}),
		]);
	}
	plugins.push([
		templatesStore.library.import.plugins.common.scrollToTop,
		deepmerge(templateConfig.plugins?.common?.scrollToTop || {}, controllerConfig?.plugins?.common?.scrollToTop || {}),
	]);
	plugins.push([
		templatesStore.library.import.plugins.common.logger,
		deepmerge(templateConfig.plugins?.common?.logger || {}, controllerConfig?.plugins?.common?.logger || {}),
	]);
	const klaviyoEventsConfig = deepmerge(templateConfig.plugins?.common?.klaviyoEvents || {}, controllerConfig?.plugins?.common?.klaviyoEvents || {});
	if (klaviyoEventsConfig?.enabled === true) {
		plugins.push([templatesStore.library.import.plugins.common.klaviyoEvents, klaviyoEventsConfig]);
	}

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
			const marketsConfig = deepmerge(templateConfig.plugins?.shopify?.markets || {}, controllerConfig?.plugins?.shopify?.markets || {});
			//only push if token is defined and non-empty
			if (typeof (marketsConfig as any)?.token === 'string' && (marketsConfig as any).token.length > 0) {
				plugins.push([templatesStore.library.import.plugins.shopify.markets, marketsConfig]);
			}
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

// tab level plugins do not inherit global or controller level plugins - only the plugins configured on the tab are used
export function createTabPlugins(tabPlugins: PluginsConfigsUnlocked, templatesStore: TemplatesStore): PluginGrouping[] {
	const plugins = createPlugins({ plugins: tabPlugins } as SnapTemplatesConfigUnlocked, templatesStore);
	const customPluginFunctions = Object.values(tabPlugins.custom || {}).map((customPlugin) => customPlugin.function);

	// built-in plugins are always created - keep only the ones that were given configuration on the tab
	return plugins.filter(
		(plugin) => customPluginFunctions.includes(plugin[0] as PluginFunction) || Object.keys(plugin[1] || {}).length > 0
	) as PluginGrouping[];
}
