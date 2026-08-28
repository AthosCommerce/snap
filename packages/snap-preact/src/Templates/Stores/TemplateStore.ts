import type { h } from 'preact';
import { observable, makeObservable } from 'mobx';
import {
	type SearchStoreConfigSettings,
	type SearchStoreConfig,
	type AutocompleteStoreConfigSettings,
	type AutocompleteStoreConfig,
	type QuickviewConfig,
} from '@athoscommerce/snap-store-mobx';
import { StorageStore, StorageType } from '@athoscommerce/snap-toolbox';
import { ThemeStore, ThemeStoreThemeConfig } from './ThemeStore';
import { TargetStore } from './TargetStore';
import { TabManagerStore } from './TabManagerStore';
import { CurrencyCodes, CurrencyCodeInput, LanguageCodes, LanguageCodeInput, LibraryImports, LibraryStore } from './LibraryStore';
import { debounce } from '@athoscommerce/snap-toolbox';
import type { PluginFunction, SearchTabConfig, AutocompleteTabConfig, AbstractController, TabConfig } from '@athoscommerce/snap-controller';
import type {
	PluginAddToCartConfig as PluginShopifyAddToCartConfig,
	PluginBackgroundFiltersConfig as PluginShopifyBackgroundFiltersConfig,
	PluginMutateResultsConfig as PluginShopifyMutateResultsConfig,
} from '@athoscommerce/snap-platforms/shopify';
import type {
	PluginAddToCartConfig as PluginMagento2AddToCartConfig,
	PluginBackgroundFiltersConfig as PluginMagento2BackgroundFiltersConfig,
	PluginBaseConfig as PluginMagento2BaseConfig,
} from '@athoscommerce/snap-platforms/magento2';
import type {
	PluginAddToCartConfig as PluginBigCommerceAddToCartConfig,
	PluginBackgroundFiltersConfig as PluginBigcommerceBackgroundFiltersConfig,
} from '@athoscommerce/snap-platforms/bigcommerce';
import type {
	PluginAddToCartConfig,
	PluginBackgroundFiltersConfig,
	PluginKlaviyoEventsConfig,
	PluginLoggerConfig,
	PluginScrollToTopConfig,
} from '@athoscommerce/snap-platforms/common';
import type {
	ThemeResponsiveComplete,
	ThemeResponsiveCompleteUnlocked,
	LangComponentOverrides,
	ThemeComponentsRestricted,
	ThemeMinimal,
	ThemeOverrides,
	ThemeVariablesPartial,
	ComponentTypePropsMap,
	TemplateCustomComponentTypes,
	TemplateDefaultComponentTypes,
} from '../../../components/src';
import type { GlobalThemeStyleScript, IntegrationPlatforms } from '../../types';
import type { ClientConfig } from '@athoscommerce/snap-client';
import { RecommendationInstantiatorConfigSettings } from '../../Instantiators/RecommendationInstantiator';
import type { PluginMarketsConfig } from '@athoscommerce/snap-platforms/shopify';
export type TemplateThemeTypes = 'library' | 'local';
export type TemplateTypes = 'search' | 'autocomplete' | `recommendation/${RecsTemplateTypes}`;

// TODO: tabbing, finder
export type SearchTargetConfig = {
	selector: string;
	component: keyof LibraryImports['component']['search'];
};

export type AutocompleteTargetConfig = {
	selector?: string;
	inputSelector: string;
	component: keyof LibraryImports['component']['autocomplete'];
};

export type QuickviewTargetConfig = {
	selector?: string;
	component: keyof LibraryImports['component']['quickview'];
};

export type RecommendationDefaultTargetConfig = {
	component: keyof LibraryImports['component']['recommendation']['default'];
};
export type RecommendationEmailTargetConfig = {
	component: keyof LibraryImports['component']['recommendation']['email'];
};
export type RecommendationBundleTargetConfig = {
	component: keyof LibraryImports['component']['recommendation']['bundle'];
};

export type { TemplateDefaultComponentTypes, TemplateCustomComponentTypes } from '../../../components/src';

export type RecsTemplateTypes = 'bundle' | 'default' | 'email';

type ComponentLibraryType =
	| keyof LibraryImports['component']['autocomplete']
	| keyof LibraryImports['component']['search']
	| keyof LibraryImports['component']['recommendation']['default']
	| keyof LibraryImports['component']['recommendation']['bundle']
	| keyof LibraryImports['component']['recommendation']['email'];

export type TemplateTarget = {
	type: TemplateTypes;
	selector?: string;
	component: ComponentLibraryType | (string & NonNullable<unknown>);
};

export type TemplatesStoreSettings = {
	editMode: boolean;
};

export type TemplatesStoreDependencies = {
	storage: StorageStore;
};

type WindowProperties = {
	innerWidth: number;
};

type TemplatesStoreThemeConfigLocked = {
	extends: keyof LibraryImports['theme'];
	globalResultComponent?: string;
	style?: GlobalThemeStyleScript;
	variables?: ThemeVariablesPartial;
	overrides?: ThemeResponsiveComplete;
};

type TemplatesStoreThemeConfigUnlocked = Omit<TemplatesStoreThemeConfigLocked, 'overrides'> & {
	overrides?: ThemeResponsiveCompleteUnlocked;
};

// Typed component function: returns a component that accepts the mapped props type
type TypedComponentFunction<P> = () => Promise<(props: P) => h.JSX.Element | null> | ((props: P) => h.JSX.Element | null);

export type TemplateStoreComponentConfigLocked = {
	[K in TemplateDefaultComponentTypes]?: {
		[componentName: string]: TypedComponentFunction<ComponentTypePropsMap[K]>;
	};
};

export type TemplateStoreComponentConfigUnlocked = {
	[K in TemplateCustomComponentTypes]?: {
		[componentName: string]: TypedComponentFunction<ComponentTypePropsMap[K]>;
	};
};

export type CommonPlugins = {
	backgroundFilters?: PluginBackgroundFiltersConfig;
	scrollToTop?: PluginScrollToTopConfig;
	logger?: PluginLoggerConfig;
	addToCart?: PluginAddToCartConfig;
	klaviyoEvents?: PluginKlaviyoEventsConfig;
};
export type ShopifyPlugins = {
	backgroundFilters?: PluginShopifyBackgroundFiltersConfig;
	mutateResults?: PluginShopifyMutateResultsConfig;
	addToCart?: PluginShopifyAddToCartConfig;
	markets?: PluginMarketsConfig;
};

export type BigCommercePlugins = {
	backgroundFilters?: PluginBigcommerceBackgroundFiltersConfig;
	addToCart?: PluginBigCommerceAddToCartConfig;
};

export type Magento2Plugins = {
	base?: PluginMagento2BaseConfig;
	backgroundFilters?: PluginMagento2BackgroundFiltersConfig;
	addToCart?: PluginMagento2AddToCartConfig;
};

export type CustomPluginConfig = {
	function: PluginFunction;
	args?: any[];
};

export type CustomPlugins = {
	[key: string]: CustomPluginConfig;
};

export type PluginsConfigsLocked = {
	common?: CommonPlugins;
	shopify?: ShopifyPlugins;
	bigCommerce?: BigCommercePlugins;
	magento2?: Magento2Plugins;
};

export type PluginsConfigsUnlocked = PluginsConfigsLocked & {
	custom?: CustomPlugins;
};

export type TemplatesSearchTabConfigLocked = SearchTabConfig & { plugins?: PluginsConfigsLocked };
export type TemplatesSearchTabConfigUnlocked = SearchTabConfig & { plugins?: PluginsConfigsUnlocked };
export type TemplatesAutocompleteTabConfigLocked = AutocompleteTabConfig & { plugins?: PluginsConfigsLocked };
export type TemplatesAutocompleteTabConfigUnlocked = AutocompleteTabConfig & { plugins?: PluginsConfigsUnlocked };

export type TemplatesStoreConfig = TemplatesStoreConfigLocked | TemplatesStoreConfigUnlocked;

export type TemplatesStoreConfigLocked = {
	components?: TemplateStoreComponentConfigLocked;
	config?: {
		siteId?: string;
		currency?: CurrencyCodeInput;
		language?: LanguageCodeInput;
		platform?: IntegrationPlatforms;
		client?: ClientConfig;
	};
	plugins?: PluginsConfigsLocked;
	translations?: {
		[currencyName in LanguageCodes]?: LangComponentOverrides;
	};
	theme: TemplatesStoreThemeConfigLocked;
	search?: {
		tabs?: TemplatesSearchTabConfigLocked[];
		targets: SearchTargetConfig[];
		globals?: SearchStoreConfig['globals'];
		settings?: SearchStoreConfigSettings;
		plugins?: PluginsConfigsLocked;
	};
	autocomplete?: {
		tabs?: TemplatesAutocompleteTabConfigLocked[];
		targets: AutocompleteTargetConfig[];
		action?: string;
		globals?: AutocompleteStoreConfig['globals'];
		settings?: AutocompleteStoreConfigSettings;
		plugins?: PluginsConfigsLocked;
	};
	quickview?: {
		targets: QuickviewTargetConfig[];
		settings?: QuickviewConfig;
	};
	recommendation?: {
		email?: {
			[profileComponentName: string]: RecommendationEmailTargetConfig;
		};
		default?: {
			[profileComponentName: string]: RecommendationDefaultTargetConfig;
		};
		bundle?: {
			[profileComponentName: string]: RecommendationBundleTargetConfig;
		};
		settings?: RecommendationInstantiatorConfigSettings;
		plugins?: PluginsConfigsLocked;
	};
};

// Full version that allows all component props in theme overrides (for Snap integration migration path)
export type TemplatesStoreConfigUnlocked = Omit<
	TemplatesStoreConfigLocked,
	'unlocked' | 'theme' | 'components' | 'plugins' | 'search' | 'autocomplete' | 'recommendation'
> & {
	unlocked: true;
	theme: TemplatesStoreThemeConfigUnlocked;
	components?: TemplateStoreComponentConfigUnlocked;
	plugins?: PluginsConfigsUnlocked;
	search?: Omit<NonNullable<TemplatesStoreConfigLocked['search']>, 'plugins' | 'tabs'> & {
		plugins?: PluginsConfigsUnlocked;
		tabs?: TemplatesSearchTabConfigUnlocked[];
	};
	autocomplete?: Omit<NonNullable<TemplatesStoreConfigLocked['autocomplete']>, 'plugins' | 'tabs'> & {
		plugins?: PluginsConfigsUnlocked;
		tabs?: TemplatesAutocompleteTabConfigUnlocked[];
	};
	recommendation?: Omit<NonNullable<TemplatesStoreConfigLocked['recommendation']>, 'plugins'> & {
		plugins?: PluginsConfigsUnlocked;
	};
};

const RESIZE_DEBOUNCE = 100;
export const TEMPLATE_STORE_KEY = 'athos-templates';

export type TemplatesStoreParams = {
	config: TemplatesStoreConfig;
	settings?: TemplatesStoreSettings;
};

export class TemplatesStore {
	loading = false;
	config: TemplatesStoreConfig;
	storage: StorageStore;
	language: LanguageCodes;
	currency: CurrencyCodes;
	platform: IntegrationPlatforms;
	settings: TemplatesStoreSettings;
	dependencies: TemplatesStoreDependencies;

	targets: {
		search: TargetStore[];
		autocomplete: TargetStore[];
		recommendation: {
			[key in RecsTemplateTypes]: TargetStore[];
		};
	};

	themes: {
		local: {
			[themeName: string]: ThemeStore;
		};
		library: {
			[themeName: string]: ThemeStore;
		};
	};

	library: LibraryStore;

	window: WindowProperties = { innerWidth: 0 };

	private tabManagers: { search?: TabManagerStore; autocomplete?: TabManagerStore } = {};

	constructor(params: TemplatesStoreParams) {
		const { config, settings } = params || {};
		this.config = config;

		this.platform = config.config?.platform || 'other';

		this.storage = new StorageStore({ type: StorageType.local, key: TEMPLATE_STORE_KEY });

		this.dependencies = {
			storage: this.storage,
		};
		this.settings = settings || { editMode: false };

		this.targets = {
			search: [],
			autocomplete: [],
			recommendation: {
				bundle: [],
				default: [],
				email: [],
			},
		};

		this.themes = {
			local: {},
			library: {},
		};
		this.library = new LibraryStore({ components: config.components, unlocked: (config as TemplatesStoreConfigUnlocked).unlocked || false });

		const configLanguage = this.config.config?.language?.toLowerCase() as LanguageCodes | undefined;
		const configCurrency = this.config.config?.currency?.toLowerCase() as CurrencyCodes | undefined;

		if (configLanguage && !(configLanguage in this.library.import.language)) {
			console.warn(`Snap Templates: unknown language code "${this.config.config?.language}" - using "en"`);
		}
		if (configCurrency && !(configCurrency in this.library.import.currency)) {
			console.warn(`Snap Templates: unknown currency code "${this.config.config?.currency}" - using "usd"`);
		}

		this.language =
			(this.settings.editMode && this.storage.get('overrides.config.language')) ||
			(configLanguage && configLanguage in this.library.import.language && configLanguage) ||
			'en';
		this.currency =
			(this.settings.editMode && this.storage.get('overrides.config.currency')) ||
			(configCurrency && configCurrency in this.library.import.currency && configCurrency) ||
			'usd';

		// import locale selections
		const importCurrency = this.library.import.currency[this.currency as keyof typeof this.library.import.currency]();
		const importLanguage = this.library.import.language[this.language as keyof typeof this.library.import.language]();

		// configure window properties and add event listeners
		if (window) {
			this.setInnerWidth(window.innerWidth);
			const debouncedHandleResize = debounce(() => {
				this.setInnerWidth(window.innerWidth);
			}, RESIZE_DEBOUNCE);

			window.addEventListener('resize', debouncedHandleResize);
		}

		// theme loading promise
		this.loading = true;
		const themePromises: Promise<void>[] = [];

		// setup local themes
		const themeConfiguration = config.theme;
		// add promise
		const themeDefer = new Deferred();
		themePromises.push(themeDefer.promise);

		// import theme dependencies
		const themeImports = [importCurrency, importLanguage, this.library.import.theme[themeConfiguration.extends]()];

		Promise.all(themeImports).then(() => {
			const base = this.library.themes[themeConfiguration.extends];
			const overrides = themeConfiguration.overrides || {};
			const variables = themeConfiguration.variables || {};
			const currency = this.library.locales.currencies[this.currency] || {};
			const language = this.library.locales.languages[this.language] || {};
			const languageOverrides = transformTranslationsToTheme((this.config.translations && this.config.translations[this.language]) || {});

			const translatedOverrides: ThemeOverrides = {
				components: overrides.default,
				responsive: {
					mobile: overrides.mobile,
					tablet: overrides.tablet,
					desktop: overrides.desktop,
				},
			};

			const themeConfig: ThemeStoreThemeConfig = {
				name: 'global',
				style: themeConfiguration.style,
				type: 'local',
				base,
				overrides: translatedOverrides,
				variables,
				currency,
				language,
				languageOverrides,
				innerWidth: this.window.innerWidth,
			};

			if (this.settings.editMode) {
				const themeOverrides: ThemeVariablesPartial = this.storage.get('overrides.theme.variables') || {};
				themeConfig.editorOverrides = { variables: themeOverrides || {} };
			}

			this.addTheme(themeConfig);

			themeDefer.resolve();
		});

		Promise.all(themePromises).then(() => {
			this.loading = false;
		});

		makeObservable(this, {
			loading: observable,
			targets: observable,
			themes: observable,
		});
	}

	public addTarget(target: TemplateTarget): TargetStore | undefined {
		if (target.selector) {
			const targetArray = getTargetArray(this.targets, target.type);
			if (!targetArray) {
				return;
			}

			const newTarget = new TargetStore({
				target: { ...target, index: targetArray.length },
			});

			targetArray.push(newTarget);

			return newTarget;
		}
	}

	public getTarget(type: TemplateTypes, targetIndex: number): TargetStore | undefined {
		return getTargetArray(this.targets, type)?.[targetIndex];
	}

	// one store per controller type
	public getTabManager(type: 'search' | 'autocomplete', controllers: { [id: string]: AbstractController }): TabManagerStore | undefined {
		const tabs = this.config[type]?.tabs;

		if (!tabs || tabs.length < 2) {
			return undefined;
		}
		const mappedTabs: TabConfig[] = tabs.map((tab) => ({
			id: tab.id,
			param: tab.param,
			siteId: tab.siteId,
			label: tab.label,
			default: tab.default,
			prefetch: (tab as TemplatesSearchTabConfigUnlocked).prefetch,
		}));

		if (!this.tabManagers[type]) {
			const tabControllers = tabs.map((tab) => controllers[tab.id]).filter((controller) => Boolean(controller));

			this.tabManagers[type] = new TabManagerStore(mappedTabs, tabControllers);
		}

		return this.tabManagers[type];
	}

	public addTheme(config: ThemeStoreThemeConfig) {
		const theme = new ThemeStore({
			config,
			dependencies: this.dependencies,
			settings: this.settings,
		});
		const themeLocation = this.themes[config.type as keyof typeof this.themes] || {};
		themeLocation[config.name] = theme;
	}

	private setInnerWidth(innerWidth: number) {
		if (this.window.innerWidth === innerWidth) return;

		this.window.innerWidth = innerWidth;
		for (const themeName in this.themes.local) {
			const theme = this.themes.local[themeName];
			theme.setInnerWidth(this.window.innerWidth);
		}
		for (const themeName in this.themes.library) {
			const theme = this.themes.library[themeName];
			theme.setInnerWidth(this.window.innerWidth);
		}
	}

	public getThemeStore(themeName?: string): ThemeStore | undefined {
		if (themeName) {
			return this.themes.local[themeName] || this.themes.library[themeName];
		}
	}

	public async setCurrency(currencyCode: CurrencyCodeInput) {
		const code = currencyCode?.toLowerCase() as CurrencyCodes;
		if (code in this.library.import.currency) {
			await this.library.import.currency[code]();
			const currency = this.library.locales.currencies[code];

			if (currency) {
				this.currency = code;
				this.storage.set('overrides.config.currency', this.currency);
				for (const themeName in this.themes.local) {
					const theme = this.themes.local[themeName];
					theme.setCurrency(currency);
				}
				for (const themeName in this.themes.library) {
					const theme = this.themes.library[themeName];
					theme.setCurrency(currency);
				}
			}
		} else {
			console.warn(`Snap Templates: unknown currency code "${currencyCode}" - currency not changed`);
		}
	}

	public async setLanguage(languageCode: LanguageCodeInput) {
		const code = languageCode?.toLowerCase() as LanguageCodes;
		if (code in this.library.import.language) {
			await this.library.import.language[code]();
			const language = this.library.locales.languages[code];

			if (language) {
				this.language = code;
				this.storage.set('overrides.config.language', this.language);
				for (const themeName in this.themes.local) {
					const theme = this.themes.local[themeName];
					theme.setLanguage(language);
				}
				for (const themeName in this.themes.library) {
					const theme = this.themes.library[themeName];
					theme.setLanguage(language);
				}
			}
		} else {
			console.warn(`Snap Templates: unknown language code "${languageCode}" - language not changed`);
		}
	}

	public async preLoad() {
		// preload the library
		this.loading = true;
		await this.library.preLoad();

		// build out the library themes
		this.themes.library = {};
		for (const themeName in this.library.themes) {
			const theme = this.library.themes[themeName];
			const themeConfig: ThemeStoreThemeConfig = {
				name: themeName,
				type: 'library',
				base: theme,
				language: this.library.locales.languages[this.language] || {},
				languageOverrides: transformTranslationsToTheme((this.config.translations && this.config.translations[this.language]) || {}),
				currency: this.library.locales.currencies[this.currency] || {},
				innerWidth: this.window.innerWidth,
			};
			if (this.settings.editMode) {
				const themeOverrides: ThemeVariablesPartial = this.storage.get('overrides.theme.variables') || {};
				themeConfig.editorOverrides = { variables: themeOverrides || {} };
			}
			this.addTheme(themeConfig);
		}
		this.loading = false;
	}
}

function getTargetArray(targets: TemplatesStore['targets'], type: TemplateTypes): TargetStore[] | undefined {
	const [category, subcategory] = type.split('/');
	if (category === 'recommendation' && subcategory) {
		return targets.recommendation[subcategory as RecsTemplateTypes];
	}
	if (category === 'search' || category === 'autocomplete') {
		return targets[category];
	}
	return undefined;
}

export function transformTranslationsToTheme(translations: LangComponentOverrides): ThemeMinimal {
	const components: ThemeComponentsRestricted = {};

	Object.keys(translations).forEach((component) => {
		components[component as keyof typeof components] = {
			// @ts-ignore - don't know which component it may be
			lang: translations[component as keyof typeof translations],
		};
	});

	return {
		components,
	};
}

class Deferred {
	promise: Promise<any>;
	resolve: any;
	reject: any;

	constructor() {
		this.promise = new Promise((resolve, reject) => {
			this.reject = reject;
			this.resolve = resolve;
		});
	}
}
