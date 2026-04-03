import { h } from 'preact';
import { observable, makeObservable } from 'mobx';
import { StorageStore, StorageType } from '@athoscommerce/snap-store-mobx';
import { ThemeStore, ThemeStoreThemeConfig } from './ThemeStore';
import { TargetStore } from './TargetStore';
import { CurrencyCodes, LanguageCodes, LibraryImports, LibraryStore } from './LibraryStore';
import { debounce } from '@athoscommerce/snap-toolbox';
import type { PluginFunction } from '@athoscommerce/snap-controller';
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
	PluginLoggerConfig,
	PluginScrollToTopConfig,
} from '@athoscommerce/snap-platforms/common';
import type {
	ThemeResponsiveComplete,
	ThemeResponsiveCompleteUnlocked,
	LangComponentOverrides,
	ThemeComponents,
	ThemeMinimal,
	ThemeOverrides,
	ThemeVariablesPartial,
	// Component Props for typed component config
	ResultProps,
	OverlayBadgeProps,
	BadgeImageProps,
	BadgePillProps,
	BadgeRectangleProps,
	BadgeTextProps,
	BreadcrumbsProps,
	ButtonProps,
	DropdownProps,
	FormattedNumberProps,
	IconProps,
	ImageProps,
	LoadingBarProps,
	BannerProps,
	InlineBannerProps,
	OverlayProps,
	PaginationInfoProps,
	SlideshowProps,
	PriceProps,
	SkeletonProps,
	ModalProps,
	CalloutBadgeProps,
	CarouselProps,
	CheckboxProps,
	GridProps,
	LayoutSelectorProps,
	ListProps,
	RadioProps,
	ErrorHandlerProps,
	FacetGridOptionsProps,
	FacetHierarchyOptionsProps,
	FacetListOptionsProps,
	FacetPaletteOptionsProps,
	FacetSliderProps,
	FilterProps,
	LoadMoreProps,
	PaginationProps,
	PerPageProps,
	RadioListProps,
	RatingProps,
	SearchInputProps,
	SelectProps,
	SlideoutProps,
	SortByProps,
	SwatchesProps,
	VariantSelectionProps,
	TermsProps,
	BranchOverrideProps,
	FacetProps,
	FacetsProps,
	FacetsHorizontalProps,
	FilterSummaryProps,
	NoResultsProps,
	ResultsProps,
	SearchHeaderProps,
	SidebarProps,
	MobileSidebarProps,
	ToolbarProps,
	TermsListProps,
} from '../../../components/src';
import type { GlobalThemeStyleScript, IntegrationPlatforms } from '../../types';
import type { ClientConfig } from '@athoscommerce/snap-client';

export type TemplateThemeTypes = 'library' | 'local';
export type TemplateTypes = 'search' | 'autocomplete' | `recommendation/${RecsTemplateTypes}`;

export type TemplateDefaultComponentTypes = 'result' | 'badge';

export type TemplateCustomComponentTypes =
	| TemplateDefaultComponentTypes
	/* atoms */
	| 'badgeImage'
	| 'badgePill'
	| 'badgeRectangle'
	| 'badgeText'
	| 'breadcrumbs'
	| 'button'
	| 'dropdown'
	| 'formattedNumber'
	| 'icon'
	| 'image'
	| 'loadingBar'
	| 'banner'
	| 'inlineBanner'
	| 'overlay'
	| 'paginationInfo'
	| 'slideshow'
	| 'price'
	| 'skeleton'
	/* molecules */
	| 'modal'
	| 'calloutBadge'
	| 'carousel'
	| 'checkbox'
	| 'grid'
	| 'layoutSelector'
	| 'list'
	| 'radio'
	| 'errorHandler'
	| 'facetGridOptions'
	| 'facetHierarchyOptions'
	| 'facetListOptions'
	| 'facetPaletteOptions'
	| 'facetSlider'
	| 'filter'
	| 'loadMore'
	| 'overlayBadge'
	| 'pagination'
	| 'perPage'
	| 'radioList'
	| 'rating'
	| 'searchInput'
	| 'select'
	| 'slideout'
	| 'sortBy'
	| 'swatches'
	| 'variantSelection'
	| 'terms'
	/* organisms */
	| 'branchOverride'
	| 'facet'
	| 'facets'
	| 'facetsHorizontal'
	| 'filterSummary'
	| 'noResults'
	| 'results'
	| 'searchHeader'
	| 'sidebar'
	| 'mobileSidebar'
	| 'toolbar'
	| 'termsList';

export type RecsTemplateTypes = 'bundle' | 'default' | 'email';

export type TargetMap = { [targetId: string]: TargetStore };

type ComponentLibraryType =
	| keyof LibraryImports['component']['autocomplete']
	| keyof LibraryImports['component']['search']
	| keyof LibraryImports['component']['recommendation']['default']
	| keyof LibraryImports['component']['recommendation']['bundle']
	| keyof LibraryImports['component']['recommendation']['email'];

export type TemplateTarget = {
	selector?: string;
	component: ComponentLibraryType | (string & NonNullable<unknown>);
};

export type TemplatesStoreConfigSettings = {
	editMode: boolean;
};

export type TemplatesStoreDependencies = {
	storage: StorageStore;
};

type WindowProperties = {
	innerWidth: number;
};

type TemplateStoreThemeConfig = {
	extends: keyof LibraryImports['theme'];
	style?: GlobalThemeStyleScript;
	variables?: ThemeVariablesPartial;
	overrides?: ThemeResponsiveComplete;
};

type TemplateStoreThemeConfigUnlocked = Omit<TemplateStoreThemeConfig, 'overrides'> & {
	overrides?: ThemeResponsiveCompleteUnlocked;
};

// Component type to props mapping for typed component config
export type ComponentTypePropsMap = {
	result: ResultProps;
	badge: OverlayBadgeProps;
	badgeImage: BadgeImageProps;
	badgePill: BadgePillProps;
	badgeRectangle: BadgeRectangleProps;
	badgeText: BadgeTextProps;
	breadcrumbs: BreadcrumbsProps;
	button: ButtonProps;
	dropdown: DropdownProps;
	formattedNumber: FormattedNumberProps;
	icon: IconProps;
	image: ImageProps;
	loadingBar: LoadingBarProps;
	banner: BannerProps;
	inlineBanner: InlineBannerProps;
	overlay: OverlayProps;
	paginationInfo: PaginationInfoProps;
	slideshow: SlideshowProps;
	price: PriceProps;
	skeleton: SkeletonProps;
	modal: ModalProps;
	calloutBadge: CalloutBadgeProps;
	carousel: CarouselProps;
	checkbox: CheckboxProps;
	grid: GridProps;
	layoutSelector: LayoutSelectorProps;
	list: ListProps;
	radio: RadioProps;
	errorHandler: ErrorHandlerProps;
	facetGridOptions: FacetGridOptionsProps;
	facetHierarchyOptions: FacetHierarchyOptionsProps;
	facetListOptions: FacetListOptionsProps;
	facetPaletteOptions: FacetPaletteOptionsProps;
	facetSlider: FacetSliderProps;
	filter: FilterProps;
	loadMore: LoadMoreProps;
	overlayBadge: OverlayBadgeProps;
	pagination: PaginationProps;
	perPage: PerPageProps;
	radioList: RadioListProps;
	rating: RatingProps;
	searchInput: SearchInputProps;
	select: SelectProps;
	slideout: SlideoutProps;
	sortBy: SortByProps;
	swatches: SwatchesProps;
	variantSelection: VariantSelectionProps;
	terms: TermsProps;
	branchOverride: BranchOverrideProps;
	facet: FacetProps;
	facets: FacetsProps;
	facetsHorizontal: FacetsHorizontalProps;
	filterSummary: FilterSummaryProps;
	noResults: NoResultsProps;
	results: ResultsProps;
	searchHeader: SearchHeaderProps;
	sidebar: SidebarProps;
	mobileSidebar: MobileSidebarProps;
	toolbar: ToolbarProps;
	termsList: TermsListProps;
};

// Typed component function: returns a component that accepts the mapped props type
type TypedComponentFunction<P> = () => Promise<(props: P) => h.JSX.Element | null> | ((props: P) => h.JSX.Element | null);

export type TemplateStoreComponentConfig = {
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
};
export type ShopifyPlugins = {
	backgroundFilters?: PluginShopifyBackgroundFiltersConfig;
	mutateResults?: PluginShopifyMutateResultsConfig;
	addToCart?: PluginShopifyAddToCartConfig;
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

export type PluginsConfigs = {
	common?: CommonPlugins;
	shopify?: ShopifyPlugins;
	bigCommerce?: BigCommercePlugins;
	magento2?: Magento2Plugins;
};

export type PluginsConfigsUnlocked = PluginsConfigs & {
	custom?: CustomPlugins;
};

export type TemplateStoreConfigConfig = {
	unlocked?: boolean;
	components?: TemplateStoreComponentConfig;
	config: {
		siteId?: string;
		currency?: CurrencyCodes;
		language?: LanguageCodes;
		platform?: IntegrationPlatforms;
		client?: ClientConfig;
	};
	plugins?: PluginsConfigs;
	translations?: {
		[currencyName in LanguageCodes]?: LangComponentOverrides;
	};
	theme: TemplateStoreThemeConfig;
};

export type TemplateStoreConfigConfigUnlocked = Omit<TemplateStoreConfigConfig, 'theme' | 'components' | 'plugins'> & {
	theme: TemplateStoreThemeConfigUnlocked;
	components?: TemplateStoreComponentConfigUnlocked;
	plugins?: PluginsConfigsUnlocked;
};

const RESIZE_DEBOUNCE = 100;
export const TEMPLATE_STORE_KEY = 'athos-templates';

export type TemplateStoreConfig = {
	config: TemplateStoreConfigConfig;
	settings?: TemplatesStoreConfigSettings;
};

export class TemplatesStore {
	loading = false;
	config: TemplateStoreConfigConfig;
	storage: StorageStore;
	language: LanguageCodes;
	currency: CurrencyCodes;
	platform: IntegrationPlatforms;
	settings: TemplatesStoreConfigSettings;
	dependencies: TemplatesStoreDependencies;

	targets: {
		search: TargetMap;
		autocomplete: TargetMap;
		recommendation: {
			[key in RecsTemplateTypes]: TargetMap;
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

	constructor(params: TemplateStoreConfig) {
		const { config, settings } = params || {};
		this.config = config;

		this.platform = config.config.platform || 'other';

		this.storage = new StorageStore({ type: StorageType.local, key: TEMPLATE_STORE_KEY });

		this.dependencies = {
			storage: this.storage,
		};
		this.settings = settings || { editMode: false };

		this.targets = {
			search: {},
			autocomplete: {},
			recommendation: {
				bundle: {},
				default: {},
				email: {},
			},
		};

		this.themes = {
			local: {},
			library: {},
		};
		this.library = new LibraryStore({ components: config.components, unlocked: config.unlocked });

		this.language =
			(this.settings.editMode && this.storage.get('overrides.config.language')) ||
			(this.config.config?.language && this.config.config.language in this.library.import.language && this.config.config.language) ||
			'en';
		this.currency =
			(this.settings.editMode && this.storage.get('overrides.config.currency')) ||
			(this.config.config?.currency && this.config.config.currency in this.library.import.currency && this.config.config.currency) ||
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

	public addTarget(type: TemplateTypes, target: TemplateTarget): string | undefined {
		const targetId = target.selector || target.component;
		if (targetId) {
			const path = type.split('/');
			let targetPath: any = this.targets;
			for (let index = 0; index < path.length; index++) {
				if (!targetPath[path[index]]) {
					return;
				}
				targetPath = targetPath[path[index]];
			}
			(targetPath as TargetMap)[targetId] = new TargetStore({
				target,
				dependencies: this.dependencies,
				settings: this.settings,
			});

			if (this.settings.editMode) {
				// triggers a rerender for TemplateEditor
				this.targets = { ...this.targets };
			}
			return targetId;
		}
	}

	public getTarget(type: TemplateTypes, targetId: string): TargetStore | undefined {
		const path = type.split('/');
		path.push(targetId);
		let targetPath: any = this.targets;
		for (let index = 0; index < path.length; index++) {
			if (!targetPath[path[index]]) {
				return;
			}
			targetPath = targetPath[path[index]];
		}

		return targetPath;
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

	public async setCurrency(currencyCode: CurrencyCodes) {
		if (currencyCode in this.library.import.currency) {
			await this.library.import.currency[currencyCode]();
			const currency = this.library.locales.currencies[currencyCode];

			if (currency) {
				this.currency = currencyCode;
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
		}
	}

	public async setLanguage(languageCode: LanguageCodes) {
		if (languageCode in this.library.import.language) {
			await this.library.import.language[languageCode]();
			const language = this.library.locales.languages[languageCode];

			if (language) {
				this.language = languageCode;
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

export function transformTranslationsToTheme(translations: LangComponentOverrides): ThemeMinimal {
	const components: Partial<ThemeComponents> = {};

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
