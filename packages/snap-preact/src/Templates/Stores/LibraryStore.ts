import { h } from 'preact';

import type { JSXComponent, Theme, ThemeComplete, ThemeMinimal } from '../../../components/src';
import { transformTranslationsToTheme, type TemplateCustomComponentTypes, type TemplateTypes } from './TemplateStore';
import type { TemplateStoreComponentConfigUnlocked } from './TemplateStore';
import type { PluginFunction } from '@athoscommerce/snap-controller';
import { pluginBackgroundFilters as shopifyPluginBackgroundFilters } from './library/plugins/shopify/pluginBackgroundFilters';
import { pluginMutateResults as shopifyPluginMutateResults } from './library/plugins/shopify/pluginMutateResults';
import { pluginAddToCart as shopifyPluginAddToCart } from './library/plugins/shopify/pluginAddToCart';
import { pluginAddToCart as bigCommercePluginAddToCart } from './library/plugins/bigCommerce/pluginAddToCart';
import { pluginAddToCart as magento2PluginAddToCart } from './library/plugins/magento2/pluginAddToCart';
import { pluginAddToCart as commonPluginAddToCart } from './library/plugins/common/pluginAddToCart';
import { pluginBackgroundFilters as bigCommercePluginBackgroundFilters } from './library/plugins/bigCommerce/pluginBackgroundFilters';
import { pluginBackgroundFilters as magento2PluginBackgroundFilters } from './library/plugins/magento2/pluginBackgroundFilters';
import { pluginBase as magento2PluginBase } from './library/plugins/magento2/pluginBase';
import { pluginBackgroundFilters } from './library/plugins/common/pluginBackgroundFilters';
import { pluginScrollToTop } from './library/plugins/common/pluginScrollToTop';
import { pluginLogger } from './library/plugins/common/pluginLogger';
import { CustomComponent } from './library/components/CustomComponent';

type LibraryComponentImport = {
	[componentName: string]: (args?: any) => Promise<JSXComponent>;
};

type LibraryComponentMap = {
	[componentName: string]: JSXComponent;
};

export type LibraryImports = {
	theme: {
		base: (args?: any) => Promise<ThemeComplete>;
		// bocachica: (args?: any) => Promise<ThemeComplete>;
		// everest: (args?: any) => Promise<ThemeComplete>;
		// matterhorn: (args?: any) => Promise<ThemeComplete>;
		pike: (args?: any) => Promise<ThemeComplete>;
		// snapnco: (args?: any) => Promise<ThemeComplete>;
		// snappy: (args?: any) => Promise<ThemeComplete>;
	};
	plugins: {
		shopify: {
			backgroundFilters: typeof shopifyPluginBackgroundFilters;
			mutateResults: typeof shopifyPluginMutateResults;
			addToCart: typeof shopifyPluginAddToCart;
		};
		bigcommerce: {
			backgroundFilters: PluginFunction;
			addToCart: typeof bigCommercePluginAddToCart;
		};
		magento2: {
			base: typeof magento2PluginBase;
			backgroundFilters: PluginFunction;
			addToCart: typeof magento2PluginAddToCart;
		};
		common: {
			backgroundFilters: typeof pluginBackgroundFilters;
			scrollToTop: typeof pluginScrollToTop;
			logger: typeof pluginLogger;
			addToCart: typeof commonPluginAddToCart;
		};
		custom?: {
			[name: string]: PluginFunction;
		};
	};
	component: {
		search: {
			Search: (args?: any) => Promise<JSXComponent>;
			SearchCollapsible: (args?: any) => Promise<JSXComponent>;
			SearchHorizontal: (args?: any) => Promise<JSXComponent>;
		};
		autocomplete: {
			AutocompleteFixed: (args?: any) => Promise<JSXComponent>;
			AutocompleteModal: (args?: any) => Promise<JSXComponent>;
			AutocompleteSlideout: (args?: any) => Promise<JSXComponent>;
		};
		recommendation: {
			bundle: {
				RecommendationBundle: (args?: any) => Promise<JSXComponent>;
				RecommendationBundleEasyAdd: (args?: any) => Promise<JSXComponent>;
				RecommendationBundleList: (args?: any) => Promise<JSXComponent>;
				RecommendationBundleVertical: (args?: any) => Promise<JSXComponent>;
			};
			default: {
				Recommendation: (args?: any) => Promise<JSXComponent>;
				RecommendationGrid: (args?: any) => Promise<JSXComponent>;
			};
			email: {
				RecommendationEmail: (args?: any) => Promise<JSXComponent>;
			};
		};
		badge: LibraryComponentImport;
		result: LibraryComponentImport & {
			Result: (args?: any) => Promise<JSXComponent>;
		};
		/* individual library components */
		badgeImage: LibraryComponentImport;
		badgePill: LibraryComponentImport;
		badgeRectangle: LibraryComponentImport;
		badgeText: LibraryComponentImport;
		breadcrumbs: LibraryComponentImport;
		button: LibraryComponentImport;
		dropdown: LibraryComponentImport;
		formattedNumber: LibraryComponentImport;
		icon: LibraryComponentImport;
		image: LibraryComponentImport;
		loadingBar: LibraryComponentImport;
		banner: LibraryComponentImport;
		inlineBanner: LibraryComponentImport;
		overlay: LibraryComponentImport;
		paginationInfo: LibraryComponentImport;
		slideshow: LibraryComponentImport;
		price: LibraryComponentImport;
		skeleton: LibraryComponentImport;
		modal: LibraryComponentImport;
		calloutBadge: LibraryComponentImport;
		carousel: LibraryComponentImport;
		checkbox: LibraryComponentImport;
		grid: LibraryComponentImport;
		layoutSelector: LibraryComponentImport;
		list: LibraryComponentImport;
		radio: LibraryComponentImport;
		errorHandler: LibraryComponentImport;
		facetGridOptions: LibraryComponentImport;
		facetHierarchyOptions: LibraryComponentImport;
		facetListOptions: LibraryComponentImport;
		facetPaletteOptions: LibraryComponentImport;
		facetSlider: LibraryComponentImport;
		filter: LibraryComponentImport;
		loadMore: LibraryComponentImport;
		overlayBadge: LibraryComponentImport;
		pagination: LibraryComponentImport;
		perPage: LibraryComponentImport;
		radioList: LibraryComponentImport;
		rating: LibraryComponentImport;
		searchInput: LibraryComponentImport;
		select: LibraryComponentImport;
		slideout: LibraryComponentImport;
		sortBy: LibraryComponentImport;
		swatches: LibraryComponentImport;
		variantSelection: LibraryComponentImport;
		terms: LibraryComponentImport;
		branchOverride: LibraryComponentImport;
		facet: LibraryComponentImport;
		facets: LibraryComponentImport;
		facetsHorizontal: LibraryComponentImport;
		filterSummary: LibraryComponentImport;
		noResults: LibraryComponentImport;
		results: LibraryComponentImport;
		searchHeader: LibraryComponentImport;
		sidebar: LibraryComponentImport;
		mobileSidebar: LibraryComponentImport;
		toolbar: LibraryComponentImport;
		termsList: LibraryComponentImport;
	};
	language: {
		[languageName in LanguageCodes]: () => Promise<ThemeMinimal>;
	};
	currency: {
		[currencyName in CurrencyCodes]: () => Promise<ThemeMinimal>;
	};
};
const DEFAULT_CUSTOM_COMPONENT_TYPES: TemplateCustomComponentTypes[] = ['result', 'badge'];

const ALL_CUSTOM_COMPONENT_TYPES: TemplateCustomComponentTypes[] = [
	'result',
	'badge',
	/* atoms */
	'badgeImage',
	'badgePill',
	'badgeRectangle',
	'badgeText',
	'breadcrumbs',
	'button',
	'dropdown',
	'formattedNumber',
	'icon',
	'image',
	'loadingBar',
	'banner',
	'inlineBanner',
	'overlay',
	'paginationInfo',
	'slideshow',
	'price',
	'skeleton',
	/* molecules */
	'modal',
	'calloutBadge',
	'carousel',
	'checkbox',
	'grid',
	'layoutSelector',
	'list',
	'radio',
	'errorHandler',
	'facetGridOptions',
	'facetHierarchyOptions',
	'facetListOptions',
	'facetPaletteOptions',
	'facetSlider',
	'filter',
	'loadMore',
	'overlayBadge',
	'pagination',
	'perPage',
	'radioList',
	'rating',
	'searchInput',
	'select',
	'slideout',
	'sortBy',
	'swatches',
	'variantSelection',
	'terms',
	/* organisms */
	'branchOverride',
	'facet',
	'facets',
	'facetsHorizontal',
	'filterSummary',
	'noResults',
	'results',
	'searchHeader',
	'sidebar',
	'mobileSidebar',
	'toolbar',
	'termsList',
];

type LibraryStoreConfig = {
	components?: TemplateStoreComponentConfigUnlocked;
	unlocked?: boolean;
};

export type CurrencyCodes = 'usd' | 'eur' | 'aud';
export type LanguageCodes = 'en' | 'fr' | 'es';

export class LibraryStore {
	themes: {
		[themeName: string]: ThemeComplete;
	} = {};

	components: {
		search: LibraryComponentMap;
		autocomplete: LibraryComponentMap;
		recommendation: {
			bundle: LibraryComponentMap;
			default: LibraryComponentMap;
			email: LibraryComponentMap;
		};
		badge: LibraryComponentMap;
		result: LibraryComponentMap;
		/* individual library components */
		badgeImage: LibraryComponentMap;
		badgePill: LibraryComponentMap;
		badgeRectangle: LibraryComponentMap;
		badgeText: LibraryComponentMap;
		breadcrumbs: LibraryComponentMap;
		button: LibraryComponentMap;
		dropdown: LibraryComponentMap;
		formattedNumber: LibraryComponentMap;
		icon: LibraryComponentMap;
		image: LibraryComponentMap;
		loadingBar: LibraryComponentMap;
		banner: LibraryComponentMap;
		inlineBanner: LibraryComponentMap;
		overlay: LibraryComponentMap;
		paginationInfo: LibraryComponentMap;
		slideshow: LibraryComponentMap;
		price: LibraryComponentMap;
		skeleton: LibraryComponentMap;
		modal: LibraryComponentMap;
		calloutBadge: LibraryComponentMap;
		carousel: LibraryComponentMap;
		checkbox: LibraryComponentMap;
		grid: LibraryComponentMap;
		layoutSelector: LibraryComponentMap;
		list: LibraryComponentMap;
		radio: LibraryComponentMap;
		errorHandler: LibraryComponentMap;
		facetGridOptions: LibraryComponentMap;
		facetHierarchyOptions: LibraryComponentMap;
		facetListOptions: LibraryComponentMap;
		facetPaletteOptions: LibraryComponentMap;
		facetSlider: LibraryComponentMap;
		filter: LibraryComponentMap;
		loadMore: LibraryComponentMap;
		overlayBadge: LibraryComponentMap;
		pagination: LibraryComponentMap;
		perPage: LibraryComponentMap;
		radioList: LibraryComponentMap;
		rating: LibraryComponentMap;
		searchInput: LibraryComponentMap;
		select: LibraryComponentMap;
		slideout: LibraryComponentMap;
		sortBy: LibraryComponentMap;
		swatches: LibraryComponentMap;
		variantSelection: LibraryComponentMap;
		terms: LibraryComponentMap;
		branchOverride: LibraryComponentMap;
		facet: LibraryComponentMap;
		facets: LibraryComponentMap;
		facetsHorizontal: LibraryComponentMap;
		filterSummary: LibraryComponentMap;
		noResults: LibraryComponentMap;
		results: LibraryComponentMap;
		searchHeader: LibraryComponentMap;
		sidebar: LibraryComponentMap;
		mobileSidebar: LibraryComponentMap;
		toolbar: LibraryComponentMap;
		termsList: LibraryComponentMap;
	} = {
		search: {},
		autocomplete: {},
		recommendation: {
			bundle: {},
			default: {},
			email: {},
		},
		badge: {},
		result: {},
		/* individual library components */
		badgeImage: {},
		badgePill: {},
		badgeRectangle: {},
		badgeText: {},
		breadcrumbs: {},
		button: {},
		dropdown: {},
		formattedNumber: {},
		icon: {},
		image: {},
		loadingBar: {},
		banner: {},
		inlineBanner: {},
		overlay: {},
		paginationInfo: {},
		slideshow: {},
		price: {},
		skeleton: {},
		modal: {},
		calloutBadge: {},
		carousel: {},
		checkbox: {},
		grid: {},
		layoutSelector: {},
		list: {},
		radio: {},
		errorHandler: {},
		facetGridOptions: {},
		facetHierarchyOptions: {},
		facetListOptions: {},
		facetPaletteOptions: {},
		facetSlider: {},
		filter: {},
		loadMore: {},
		overlayBadge: {},
		pagination: {},
		perPage: {},
		radioList: {},
		rating: {},
		searchInput: {},
		select: {},
		slideout: {},
		sortBy: {},
		swatches: {},
		variantSelection: {},
		terms: {},
		branchOverride: {},
		facet: {},
		facets: {},
		facetsHorizontal: {},
		filterSummary: {},
		noResults: {},
		results: {},
		searchHeader: {},
		sidebar: {},
		mobileSidebar: {},
		toolbar: {},
		termsList: {},
	};

	locales: {
		currencies: {
			[currencyName in CurrencyCodes]?: ThemeMinimal;
		};
		languages: {
			[languageName in LanguageCodes]?: ThemeMinimal;
		};
	} = {
		currencies: {},
		languages: {},
	};

	import: LibraryImports = {
		theme: {
			base: async () => {
				return this.themes.base || (this.themes.base = (await import('./library/themes/base')).base);
			},
			// bocachica: async () => {
			// 	return this.themes.bocachica || (this.themes.bocachica = (await import('./library/themes/bocachica')).bocachica);
			// },
			// everest: async () => {
			// 	return this.themes.everest || (this.themes.everest = (await import('../../../components/src/themes/everest/everest')).everest);
			// },
			// matterhorn: async () => {
			// 	return this.themes.matterhorn || (this.themes.matterhorn = (await import('../../../components/src/themes/matterhorn/matterhorn')).matterhorn);
			// },
			pike: async () => {
				return this.themes.pike || (this.themes.pike = (await import('../../../components/src/themes/pike/pike')).pike);
			},
			// snapnco: async () => {
			// 	return this.themes.snapnco || (this.themes.snapnco = (await import('./library/themes/snapnco')).snapnco);
			// },
			// snappy: async () => {
			// 	return this.themes.snappy || (this.themes.snappy = (await import('./library/themes/snappy')).snappy);
			// },
		},
		plugins: {
			shopify: {
				backgroundFilters: shopifyPluginBackgroundFilters,
				mutateResults: shopifyPluginMutateResults,
				addToCart: shopifyPluginAddToCart,
			},
			bigcommerce: {
				backgroundFilters: bigCommercePluginBackgroundFilters,
				addToCart: bigCommercePluginAddToCart,
			},
			magento2: {
				base: magento2PluginBase,
				backgroundFilters: magento2PluginBackgroundFilters,
				addToCart: magento2PluginAddToCart,
			},
			common: {
				backgroundFilters: pluginBackgroundFilters,
				scrollToTop: pluginScrollToTop,
				logger: pluginLogger,
				addToCart: commonPluginAddToCart,
			},
		},
		component: {
			autocomplete: {
				AutocompleteFixed: async () => {
					return (
						this.components.autocomplete.AutocompleteFixed ||
						(this.components.autocomplete.AutocompleteFixed = (await import('./library/components/AutocompleteFixed')).AutocompleteFixed)
					);
				},
				AutocompleteSlideout: async () => {
					return (
						this.components.autocomplete.AutocompleteSlideout ||
						(this.components.autocomplete.AutocompleteSlideout = (await import('./library/components/AutocompleteSlideout')).AutocompleteSlideout)
					);
				},
				AutocompleteModal: async () => {
					return (
						this.components.autocomplete.AutocompleteModal ||
						(this.components.autocomplete.AutocompleteModal = (await import('./library/components/AutocompleteModal')).AutocompleteModal)
					);
				},
			},
			search: {
				SearchCollapsible: async () => {
					return (
						this.components.search.SearchCollapsible ||
						(this.components.search.SearchCollapsible = (await import('./library/components/SearchCollapsible')).SearchCollapsible)
					);
				},
				Search: async () => {
					return this.components.search.Search || (this.components.search.Search = (await import('./library/components/Search')).Search);
				},
				SearchHorizontal: async () => {
					return (
						this.components.search.SearchHorizontal ||
						(this.components.search.SearchHorizontal = (await import('./library/components/SearchHorizontal')).SearchHorizontal)
					);
				},
			},
			recommendation: {
				bundle: {
					RecommendationBundle: async () => {
						return (
							this.components.recommendation.bundle.RecommendationBundle ||
							(this.components.recommendation.bundle.RecommendationBundle = (
								await import('./library/components/RecommendationBundle')
							).RecommendationBundle)
						);
					},
					RecommendationBundleEasyAdd: async () => {
						return (
							this.components.recommendation.bundle.RecommendationBundleEasyAdd ||
							(this.components.recommendation.bundle.RecommendationBundleEasyAdd = (
								await import('./library/components/RecommendationBundleEasyAdd')
							).RecommendationBundleEasyAdd)
						);
					},
					RecommendationBundleList: async () => {
						return (
							this.components.recommendation.bundle.RecommendationBundleList ||
							(this.components.recommendation.bundle.RecommendationBundleList = (
								await import('./library/components/RecommendationBundleList')
							).RecommendationBundleList)
						);
					},
					RecommendationBundleVertical: async () => {
						return (
							this.components.recommendation.bundle.RecommendationBundleVertical ||
							(this.components.recommendation.bundle.RecommendationBundleVertical = (
								await import('./library/components/RecommendationBundleVertical')
							).RecommendationBundleVertical)
						);
					},
				},
				default: {
					Recommendation: async () => {
						return (
							this.components.recommendation.default.Recommendation ||
							(this.components.recommendation.default.Recommendation = (await import('./library/components/Recommendation')).Recommendation)
						);
					},
					RecommendationGrid: async () => {
						return (
							this.components.recommendation.default.RecommendationGrid ||
							(this.components.recommendation.default.RecommendationGrid = (
								await import('./library/components/RecommendationGrid')
							).RecommendationGrid)
						);
					},
				},
				email: {
					RecommendationEmail: async () => {
						return (
							this.components.recommendation.email.RecommendationEmail ||
							(this.components.recommendation.email.RecommendationEmail = (
								await import('./library/components/RecommendationEmail')
							).RecommendationEmail)
						);
					},
				},
			},
			badge: {},
			result: {
				Result: async () => {
					return this.components.result.Result || (this.components.result.Result = (await import('./library/components/Result')).Result);
				},
			},
			/* individual library components */
			badgeImage: {},
			badgePill: {},
			badgeRectangle: {},
			badgeText: {},
			breadcrumbs: {},
			button: {},
			dropdown: {},
			formattedNumber: {},
			icon: {},
			image: {},
			loadingBar: {},
			banner: {},
			inlineBanner: {},
			overlay: {},
			paginationInfo: {},
			slideshow: {},
			price: {},
			skeleton: {},
			modal: {},
			calloutBadge: {},
			carousel: {},
			checkbox: {},
			grid: {},
			layoutSelector: {},
			list: {},
			radio: {},
			errorHandler: {},
			facetGridOptions: {},
			facetHierarchyOptions: {},
			facetListOptions: {},
			facetPaletteOptions: {},
			facetSlider: {},
			filter: {},
			loadMore: {},
			overlayBadge: {},
			pagination: {},
			perPage: {},
			radioList: {},
			rating: {},
			searchInput: {},
			select: {},
			slideout: {},
			sortBy: {},
			swatches: {},
			variantSelection: {},
			terms: {},
			branchOverride: {},
			facet: {},
			facets: {},
			facetsHorizontal: {},
			filterSummary: {},
			noResults: {},
			results: {},
			searchHeader: {},
			sidebar: {},
			mobileSidebar: {},
			toolbar: {},
			termsList: {},
		},
		language: {
			en: async () => {
				return this.locales.languages.en || (this.locales.languages.en = transformTranslationsToTheme((await import('./library/languages/en')).en));
			},
			fr: async () => {
				return this.locales.languages.fr || (this.locales.languages.fr = transformTranslationsToTheme((await import('./library/languages/fr')).fr));
			},
			es: async () => {
				return this.locales.languages.es || (this.locales.languages.es = transformTranslationsToTheme((await import('./library/languages/es')).es));
			},
		},
		currency: {
			usd: async () => {
				return this.locales.currencies.usd || (this.locales.currencies.usd = (await import('./library/currencies/usd')).usd);
			},
			eur: async () => {
				return this.locales.currencies.eur || (this.locales.currencies.eur = (await import('./library/currencies/eur')).eur);
			},
			aud: async () => {
				return this.locales.currencies.aud || (this.locales.currencies.aud = (await import('./library/currencies/aud')).aud);
			},
		},
	};

	allowedComponentTypes: TemplateCustomComponentTypes[];

	constructor(params?: LibraryStoreConfig) {
		const { components, unlocked } = params || {};
		this.allowedComponentTypes = unlocked ? ALL_CUSTOM_COMPONENT_TYPES : DEFAULT_CUSTOM_COMPONENT_TYPES;

		// allow for configuration to supply custom component imports
		if (components) {
			Object.keys(components).forEach((type) => {
				const componentsOfType = components[type as keyof typeof components];
				if (componentsOfType) {
					Object.keys(componentsOfType).forEach((component) => {
						this.addComponentImport(type as TemplateCustomComponentTypes, component, componentsOfType[component as keyof typeof components]);
					});
				}
			});
		}
	}

	getComponent(type: TemplateTypes, name: string): JSXComponent | undefined {
		const paths = type.split('/');
		paths.push(name);
		let importPath: any = this.components;
		for (let i = 0; i < paths.length; i++) {
			if (!importPath[paths[i]]) {
				return undefined;
			}
			importPath = importPath[paths[i]];
		}
		return importPath;
	}

	async addComponentImport(type: TemplateCustomComponentTypes, name: string, componentFn: (args?: any) => Promise<JSXComponent> | JSXComponent) {
		// only allow certain types based on unlocked status
		if (this.allowedComponentTypes.includes(type) && this.components[type]) {
			this.import.component[type][name] = async () => {
				return (
					this.components[type][name] ||
					(this.components[type][name] = await CustomComponent({
						type,
						name,
						componentFn,
					}))
				);
			};
		}
	}

	async preLoad() {
		// load everything
		const loadPromises: Promise<any>[] = [];
		Object.keys(this.import).forEach((importGroup) => {
			const importList = this.import[importGroup as keyof typeof this.import];

			Object.keys(importList).forEach((importName) => {
				if (importGroup === 'component') {
					if (importName === 'recommendation') {
						const componentSubType = (importList as LibraryStore['import']['component']).recommendation;
						Object.keys(componentSubType).forEach((type) => {
							const componentGroup = componentSubType[type as keyof typeof componentSubType] as { [componentName: string]: () => Promise<any> };
							Object.keys(componentGroup).forEach((componentName) => {
								loadPromises.push(componentGroup[componentName]());
							});
						});
					} else {
						const componentGroup = importList[importName as keyof typeof importList] as LibraryComponentImport;
						Object.keys(componentGroup).forEach((componentName) => {
							loadPromises.push(componentGroup[componentName]());
						});
					}
				} else if (importGroup === 'language' || importGroup === 'currency') {
					const importer = importList[importName as keyof typeof importList] as () => Promise<ThemeMinimal>;
					loadPromises.push(importer());
				} else if (importGroup === 'theme') {
					const importer = importList[importName as keyof typeof importList] as () => Promise<Theme>;
					loadPromises.push(importer());
				}
			});
		});

		return Promise.all(loadPromises);
	}
}
