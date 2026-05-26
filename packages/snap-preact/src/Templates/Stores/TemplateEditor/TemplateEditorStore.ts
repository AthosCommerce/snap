import { AutocompleteStoreConfigSettings, SearchStoreConfigSettings } from '@athoscommerce/snap-store-mobx';
import { StorageStore, StorageType } from '@athoscommerce/snap-toolbox';
import { observable, makeObservable, toJS } from 'mobx';
import { colord } from 'colord';
import deepmerge from 'deepmerge';

import { TemplatesStore, TEMPLATE_STORE_KEY, TemplateTarget, SearchTargetConfig, AutocompleteTargetConfig } from '../TemplateStore';
import { AutocompleteController, SearchController } from '@athoscommerce/snap-controller';

import type { AbstractionGroup } from '../../../types';
import { ThemeVariables, ThemeVariablesPartial, ThemeResponsiveComplete, ThemePartial } from '../../../../components/src';
import { TargetStore } from '../TargetStore';
import { SnapTemplatesConfig } from '../../SnapTemplates';
import {
	configUI,
	themeUI,
	searchControllerUI,
	// searchTargetUI,
	autocompleteControllerUI,
	// autocompleteTargetUI,
	updateAutocompleteControllerState,
	searchTargetUI,
	autocompleteTargetUI,
} from './uiAbstractions';
import { CurrencyCodes, LanguageCodes } from '../LibraryStore';
import { combineMerge } from '../../../utils';

const THEME_VARIABLE_DEFAULTS: ThemeVariables = {
	breakpoints: {
		mobile: 600,
		tablet: 900,
		desktop: 1200,
	},
	colors: {
		primary: '#1D4990',
		secondary: '#6187ae',
		accent: '#00AEEF',
	},
};

export type EditorTabs = 'templates' | 'configuration';

type EditorStoredState = {
	hidden: boolean;
	activeTab: EditorTabs;
};

type EditorState = {
	activeDomSelector: string;
};

type EditorControllerConfigs = {
	search?: SearchStoreConfigSettings;
	autocomplete?: AutocompleteStoreConfigSettings;
};

type EditorTargets = {
	search: Partial<TemplateTarget>[];
	autocomplete: Partial<TemplateTarget>[];
};

type EditorInitialThemeConfig = {
	extends: string;
	variables: ThemeVariables;
	overrides?: ThemeResponsiveComplete;
};

type EditorOverridesThemeConfig = {
	extends?: string;
	variables?: ThemeVariablesPartial;
	overrides?: ThemeResponsiveComplete;
};

type SourceControl = {
	initial?: boolean;
	overrides?: boolean;
};

type GenerateTemplatesConfigOptions = {
	config?: boolean | SourceControl;
	theme?:
		| boolean
		| {
				extends?: boolean | SourceControl;
				variables?: boolean | SourceControl;
				overrides?: boolean | SourceControl;
		  };
	search?: boolean;
	autocomplete?: boolean;
	unlocked?: boolean;
};

export class TemplateEditorStore {
	storage: StorageStore;
	storedState: EditorStoredState = {
		hidden: false,
		activeTab: 'configuration',
	};
	state: EditorState = {
		activeDomSelector: '',
	};
	overrides: {
		config: SnapTemplatesConfig['config'];
		controller: EditorControllerConfigs;
		theme: EditorOverridesThemeConfig;
		targets: EditorTargets;
	} = {
		config: {},
		controller: {},
		theme: {},
		targets: {
			search: [],
			autocomplete: [],
		},
	};
	initial: {
		config: SnapTemplatesConfig['config'] & { language: LanguageCodes; currency: CurrencyCodes };
		controller: EditorControllerConfigs;
		theme: EditorInitialThemeConfig;
		targets: EditorTargets;
	} = {
		config: {
			language: 'en',
			currency: 'usd',
		},
		targets: {
			search: [],
			autocomplete: [],
		},
		controller: {},
		theme: {
			extends: 'base',
			variables: THEME_VARIABLE_DEFAULTS,
		},
	};

	tabs: EditorTabs[] = ['templates', 'configuration'];

	templatesStore: TemplatesStore;

	uiAbstractions: {
		templates: {
			config: AbstractionGroup[];
			theme: AbstractionGroup[];
		};
		controllers: {
			search: AbstractionGroup<SearchController>[];
			autocomplete: AbstractionGroup<AutocompleteController>[];
		};
		targets: {
			search?: AbstractionGroup<number>[];
			autocomplete?: AbstractionGroup<number>[];
		};
	} = {
		templates: {
			config: configUI(this),
			theme: themeUI(this),
		},
		controllers: {
			search: searchControllerUI(this),
			autocomplete: autocompleteControllerUI(this),
		},
		targets: {
			search: searchTargetUI(this),
			autocomplete: autocompleteTargetUI(this),
		},
	};

	constructor({ templatesStore }: { templatesStore: TemplatesStore }) {
		this.templatesStore = templatesStore;
		this.storage = new StorageStore({ type: StorageType.local, key: TEMPLATE_STORE_KEY });
		this.storedState = this.storage.get('editor') || this.storedState;

		this.initial.config = deepmerge(this.initial.config, templatesStore.config.config);
		this.initial.controller = {}; // set when registering controllers

		// set initial targets
		if (templatesStore.config.search?.targets) this.initial.targets.search = templatesStore.config.search?.targets;
		if (templatesStore.config.autocomplete?.targets) this.initial.targets.autocomplete = templatesStore.config.autocomplete?.targets;

		const themeConfig = JSON.parse(JSON.stringify(templatesStore.config.theme || {})) as SnapTemplatesConfig['theme'];
		delete themeConfig.style;
		this.initial.theme = deepmerge(this.initial.theme, themeConfig);

		// apply stored overrides (normalizes, persists, and triggers theme changes)
		const storedOverrides = this.storage.get('overrides') || {};
		this.setOverrides({
			config: storedOverrides.config,
			theme: storedOverrides.theme,
			search: {
				targets: storedOverrides.targets?.search,
				settings: storedOverrides.controller?.search,
			},
			autocomplete: {
				targets: storedOverrides.targets?.autocomplete,
				settings: storedOverrides.controller?.autocomplete,
			},
		});

		this.storage.set('initial', this.initial);

		makeObservable(this, {
			storedState: observable,
			state: observable,
			overrides: observable,
			initial: observable,
			uiAbstractions: observable,
		});

		// makeObservable(this.overrides.config, {
		// 	language: observable,
		// 	currency: observable,
		// });
	}

	switchTabs(tab: EditorTabs) {
		this.storedState.activeTab = tab;
		this.storage.set('editor', this.storedState);
	}

	toggleHide(hide: boolean) {
		this.storedState.hidden = hide;
		this.storage.set('editor', this.storedState);
	}

	setOverrides(overrides: {
		config?: SnapTemplatesConfig['config'];
		theme?: EditorOverridesThemeConfig;
		search?: { targets?: Partial<TemplateTarget>[]; settings?: SearchStoreConfigSettings };
		autocomplete?: { targets?: Partial<TemplateTarget>[]; settings?: AutocompleteStoreConfigSettings };
	}) {
		// normalize and set overrides, preventing empty objects
		this.overrides.config = overrides.config || {};
		this.overrides.controller = {
			search: overrides.search?.settings,
			autocomplete: overrides.autocomplete?.settings,
		};
		this.overrides.theme = overrides.theme || {};
		this.overrides.targets = {
			search: overrides.search?.targets || [],
			autocomplete: overrides.autocomplete?.targets || [],
		};

		// persist each section to storage
		this.storage.set('overrides.config', this.overrides.config);
		this.storage.set('overrides.controller', this.overrides.controller);
		this.storage.set('overrides.targets', this.overrides.targets);

		// apply language/currency overrides to the templates store
		const language = (this.overrides.config.language || this.initial.config.language) as LanguageCodes;
		const currency = (this.overrides.config.currency || this.initial.config.currency) as CurrencyCodes;
		this.templatesStore.setLanguage(language);
		this.templatesStore.setCurrency(currency);

		// re-apply controller configs with merged overrides
		// (skip if initial.controller hasn't been populated yet — registerController handles that case)
		(['search', 'autocomplete'] as const).forEach((type) => {
			const controller = window.athos?.controller?.[type];
			if (controller && this.initial.controller[type]) {
				// reset settings to initial values first, then merge overrides on top
				// (controller.config.settings already has old overrides baked in, so we can't use it as a base)
				const cleanConfig = { ...controller.config, settings: JSON.parse(JSON.stringify(this.initial.controller[type])) };
				const mergedConfig = deepmerge<any>(cleanConfig, {
					settings: this.overrides.controller[type] || {},
				});
				controller.setConfig(mergedConfig);
			}
		});

		// re-apply target overrides (component, selector, etc.)
		(['search', 'autocomplete'] as const).forEach((feature) => {
			const targetFeatureSet = this.templatesStore.targets[feature];
			const mergedTargets = deepmerge<EditorTargets[typeof feature]>(
				toJS(this.initial.targets[feature]) || [],
				toJS(this.overrides.targets[feature]) || [],
				{ arrayMerge: combineMerge }
			);
			targetFeatureSet.forEach((target, index) => {
				const mergedTarget = mergedTargets[index];
				if (mergedTarget) {
					Object.keys(mergedTarget).forEach((key) => {
						target.setValue(key, mergedTarget[key as keyof typeof mergedTarget] as string);
					});
				}
			});
		});

		// apply theme changes (also persists overrides.theme)
		this.setTheme(this.overrides.theme.extends ?? this.initial.theme.extends);
	}

	resetOverrides() {
		this.storage.set('overrides', undefined);
		this.setOverrides({});
	}

	setActiveDomSelector(selectorId: string | null) {
		if (selectorId?.length) {
			this.state.activeDomSelector = selectorId;
			this.toggleHide(true);
		} else {
			this.state.activeDomSelector = '';
			this.toggleHide(false);
		}
	}

	setConfigOverride(obj: { path: string[]; value: unknown }) {
		const { path, value } = obj;

		// grab the initial config value using the path provided
		const initialValue = path.reduce((acc: any, key) => {
			return acc && acc[key as keyof typeof acc];
		}, this.initial.config);

		const configOverrides = generateObject<SnapTemplatesConfig['config']>(path, value == initialValue ? undefined : value);

		const updatedOverrides = removeEmptyObjects(deepmerge(this.overrides.config || {}, configOverrides));
		this.overrides.config = updatedOverrides;
		this.storage.set('overrides.config', updatedOverrides);

		if (path[0] === 'language') {
			this.templatesStore.setLanguage((value || initialValue) as LanguageCodes).then(() => {
				this.storage.set('overrides.config', updatedOverrides);
			});
		} else if (path[0] === 'currency') {
			this.templatesStore.setCurrency((value || initialValue) as CurrencyCodes).then(() => {
				this.storage.set('overrides.config', updatedOverrides);
			});
		}
	}

	setTheme(themeName: string) {
		const updatedConfig: { extends?: string } = { extends: themeName };
		if (this.initial.theme.extends === themeName) {
			updatedConfig.extends = undefined;
		}

		this.overrides.theme = deepmerge(this.overrides.theme, updatedConfig);

		this.storage.set('overrides.theme', this.overrides.theme);

		// update initial variables from the newly selected theme's raw definition
		const themeDefinition = this.templatesStore.library.themes[themeName];
		if (themeDefinition) {
			const themeConfig = JSON.parse(JSON.stringify(this.templatesStore.config.theme || {})) as SnapTemplatesConfig['theme'];
			delete themeConfig.style;
			this.initial.theme.variables = deepmerge(themeDefinition.variables || {}, themeConfig.variables || {}) as ThemeVariables;
			// normalize colors to hexadecimal format
			Object.keys(this.initial.theme.variables.colors).forEach((key) => {
				const color = this.initial.theme.variables.colors[key as keyof typeof this.initial.theme.variables.colors];
				this.initial.theme.variables.colors[key as keyof typeof this.initial.theme.variables.colors] = colord(color || '#000').toHex();
			});
			this.storage.set('initial', this.initial);
		}

		// update all library themes with recomputed editor overrides based on the new theme's variables
		const mergedOverrides = deepmerge(this.initial.theme || {}, this.overrides.theme || {});
		const transformedMergedOverrides = transformThemeComponentOverrides(mergedOverrides);
		Object.keys(this.templatesStore.themes.library).forEach((libThemeName) => {
			const themeStore = this.templatesStore.themes.library[libThemeName];
			themeStore.setEditorOverrides(transformedMergedOverrides);
		});

		// loop through all targets in templateStore and call setTheme on them all
		Object.keys(this.templatesStore.targets).forEach((feature) => {
			// loop through all the features (search, autocomplete, recommendations)
			if (feature == 'recommendation') {
				const recommendationTargetObject = this.templatesStore.targets.recommendation;
				Object.keys(recommendationTargetObject).forEach((recType) => {
					const featureTargets = recommendationTargetObject[recType as keyof typeof recommendationTargetObject];
					featureTargets.forEach((target) => {
						target.setTheme(themeName, 'library');
					});
				});
			} else {
				const featureTargets = this.templatesStore.targets[feature as keyof typeof this.templatesStore.targets] as TargetStore[];
				featureTargets.forEach((target) => {
					target.setTheme(themeName, 'library');
				});
			}
		});
	}

	setThemeOverride = (obj: { path: string[]; value: unknown }) => {
		const { path, value } = obj;

		// grab the initial config value using the path provided
		const initialValue = path.reduce((acc: any, key) => {
			return acc && acc[key as keyof typeof acc];
		}, this.initial.theme);

		const themeConfigOverrides = generateObject<EditorOverridesThemeConfig>(path, value == initialValue ? undefined : value);

		this.overrides.theme = removeEmptyObjects(deepmerge(this.overrides.theme || {}, themeConfigOverrides || {}));
		this.storage.set('overrides.theme', this.overrides.theme);

		const mergedOverrides = deepmerge(this.initial.theme || {}, this.overrides.theme || {});

		const transformedMergedOverrides = transformThemeComponentOverrides(mergedOverrides);

		// update all themes with the new overrides
		Object.keys(this.templatesStore.themes.library).forEach((themeName) => {
			const themeStore = this.templatesStore.themes.library[themeName];
			themeStore.setEditorOverrides(transformedMergedOverrides);
		});
	};

	setControllerOverride<ControllerType extends SearchController | AutocompleteController>(obj: {
		path: string[];
		value?: unknown;
		controller: ControllerType;
	}) {
		const { path, value, controller } = obj;
		const type = controller.type as keyof EditorControllerConfigs;

		const controllerOverrides = {
			[type]: generateObject(path, value),
		};

		this.overrides.controller = deepmerge(this.overrides.controller || {}, controllerOverrides);

		// recursively remove empty objects and undefined values from this.overrides.controller
		this.overrides.controller = removeEmptyObjects(this.overrides.controller);

		this.storage.set(`overrides.controller.${type}`, this.overrides.controller[type]);

		const mergedConfig = deepmerge<any>(
			{
				settings: this.initial.controller[type] || {},
			},
			{
				settings: this.overrides.controller[type] || {},
			}
		);

		controller?.setConfig(mergedConfig);
	}

	// ['variables', 'colors', 'primary']
	// store.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value });
	// ['search', '[0]', 'selector']
	// store.setTargetOverride({ path: ['search', '[0]'], value });
	// store.setTargetOverride({ path: ['search', '[0]', 'selector'], value });
	// store.setTargetOverride({ path: ['search', '[0]'], value });  --- value = {...}
	setTargetOverride = (obj: { path: string[]; value: string | undefined }) => {
		const path = obj.path;
		let value = obj.value;

		/*
		this.initial.targets = {
			search: [
				{...},
				{...},
			]
		}
		*/

		const targetFeature = path[0] as 'search' | 'autocomplete';
		// const lastPath = path[path.length - 1];
		let targetIndex = -1;
		// grab the initial config value using the path provided
		const initialValue = path.reduce((acc: any, key) => {
			// handle array index access
			// e.g., [0], [1], etc.
			// if the key is in the format of [index], convert it to a number and access the array
			// otherwise, access the object property as usual
			try {
				const keyIndex = Number(key.replace(/^\[(\d+)\]$/, '$1'));
				if (Number.isNaN(keyIndex)) {
					// not an index position
					return acc && acc[key as keyof typeof acc];
				} else {
					// we have a string key - use it to set the accumulator
					targetIndex = keyIndex;
					return acc && acc[keyIndex];
				}
			} catch (error) {
				// handle error
				console.error('Error accessing path in initial targets:', error);
				return undefined;
			}
		}, this.initial.targets);

		const targetOverrides = generateObject<EditorTargets>(path, value == initialValue ? undefined : value);
		const merged = deepmerge(toJS(this.overrides.targets) || {}, toJS(targetOverrides) || {}, { arrayMerge: combineMerge });
		this.overrides.targets = removeEmptyObjects(merged);
		this.storage.set('overrides.targets', this.overrides.targets);

		// const plainInitial = convertObservableToPlain(this.initial.targets);
		// const plainOverrides = convertObservableToPlain(this.overrides.targets);
		const mergedOverrides = deepmerge<EditorTargets>(toJS(this.initial.targets) || {}, toJS(this.overrides.targets) || {}, {
			arrayMerge: combineMerge,
		});

		const finalPath = path[path.length - 1];

		if (finalPath == 'selector' && targetIndex > -1) {
			// if reset button was clicked value will be undefined
			if (typeof value == 'undefined') {
				value = initialValue;
			}

			// needs to have a value and some actual elem to find
			if (typeof value == 'string' && value.length > 1 && document.querySelector(value)) {
				const activeTargeterKey = Object.keys(window.athos.controller[targetFeature].targeters)[targetIndex];
				if (activeTargeterKey) {
					const oldSelector = window.athos.controller[targetFeature].targeters[activeTargeterKey].targets[0].selector;
					const elem = document.querySelector(oldSelector || '');

					if (targetFeature == 'search' && elem) {
						//create clone of elem with all attributes
						const clonedElement = elem.cloneNode(true);
						clonedElement.innerHTML = '';

						//inject clone right after elem
						elem.insertAdjacentElement('afterend', clonedElement);

						//delete elem so targeter can retarget an element thats already been targeted
						elem.remove();
					}

					window.athos.controller[targetFeature].targeters[activeTargeterKey].targets[0].selector = value;

					/*
						selector
						inputSelector
					
						targetSelector -> selector
						inputSelector (optional) -> inputSelector
						DomTargeter
							* selector = selector
							* props.input = inputSelector (optional)
					*/

					window.athos.controller[targetFeature].retarget();
				}
			}
		} else if (finalPath == 'inputSelector' && targetIndex > -1) {
			const activeTargeterKey = Object.keys(window.athos.controller[targetFeature].targeters)[targetIndex];
			window.athos.controller[targetFeature].targeters[activeTargeterKey].targets[0].props.input = value;
			window.athos.controller[targetFeature].retarget();
		}

		// if the component changed we need to tell the targetStore about it via:
		const targetFeatureSet = this.templatesStore.targets[targetFeature];
		if (targetFeatureSet && targetIndex != -1) {
			const target = targetFeatureSet[targetIndex as keyof typeof targetFeatureSet] as TargetStore;

			// if (target && lastPath) {
			// 	const finalValue = mergedOverrides[targetFeature][targetIndex]?.selector;
			// 	finalValue && target.setValue(lastPath, finalValue);
			// }

			// update values in target
			const mergedTarget = mergedOverrides[targetFeature][targetIndex];

			Object.keys(mergedTarget).forEach((key) => {
				const value = mergedTarget[key as keyof typeof mergedTarget] as string;
				target.setValue(key, value);
			});
		}
		// target.setComponent
	};

	registerController<ControllerType extends SearchController | AutocompleteController>(controller: ControllerType) {
		const settingsCopy = JSON.parse(JSON.stringify(controller.config.settings)) as SearchStoreConfigSettings | AutocompleteStoreConfigSettings;

		const type = controller.type as keyof EditorControllerConfigs;

		this.initial.controller[type] = settingsCopy;

		this.storage.set(`initial.controller.${type}`, this.initial.controller[type]);

		const mergedConfig = deepmerge<any>(controller.config, {
			settings: this.overrides.controller[type] || {},
		});

		controller.setConfig(mergedConfig);

		if (type === 'autocomplete') {
			updateAutocompleteControllerState(controller as AutocompleteController);
		}

		if (type === 'search') {
			// @ts-ignore - accessing a private property
			const clientGlobals = controller.client.config.globals || {};

			// controller globals > client globals > templates config
			const siteId = controller.config.globals?.siteId || clientGlobals?.siteId || this.templatesStore.config.config.siteId || '';

			if (this.initial.config.siteId != siteId) {
				this.storage.set('overrides.config.siteId', siteId);
			}
		}
	}

	getTargets() {
		const storeTargets = this.templatesStore.targets;
		const searchTargets = storeTargets.search.map((target) => ({
			type: 'search',
			target,
			template: target.component,
			selector: target.selector,
		}));
		const autocompleteTargets = storeTargets.autocomplete.map((target) => ({
			type: 'autocomplete',
			target,
			template: target.component,
			selector: target.selector,
		}));
		const recommendationBundleTargets = storeTargets.recommendation.bundle.map((target) => ({
			type: 'recommendation/bundle',
			target,
			template: target.component,
			selector: target.selector,
		}));
		const recommendationDefaultTargets = storeTargets.recommendation.default.map((target) => ({
			type: 'recommendation/default',
			target,
			template: target.component,
			selector: target.selector,
		}));
		const recommendationEmailTargets = storeTargets.recommendation.email.map((target) => ({
			type: 'recommendation/email',
			target,
			template: target.component,
			selector: target.selector,
		}));
		const targets = [
			...searchTargets,
			...autocompleteTargets,
			...recommendationBundleTargets,
			...recommendationDefaultTargets,
			...recommendationEmailTargets,
		];

		return targets;
	}

	generateTemplatesConfig(options?: GenerateTemplatesConfigOptions): SnapTemplatesConfig {
		const resolveSource = (opt: boolean | SourceControl | undefined): Required<SourceControl> => {
			if (opt === undefined || opt === true) return { initial: true, overrides: true };
			if (opt === false) return { initial: false, overrides: false };
			return { initial: opt.initial ?? true, overrides: opt.overrides ?? true };
		};

		const configOpt = resolveSource(options?.config);

		let themeExtendsOpt: Required<SourceControl>;
		let themeVariablesOpt: Required<SourceControl>;
		let themeOverridesOpt: Required<SourceControl>;

		if (options?.theme === undefined || options?.theme === true) {
			themeExtendsOpt = { initial: true, overrides: true };
			themeVariablesOpt = { initial: true, overrides: true };
			themeOverridesOpt = { initial: true, overrides: true };
		} else if (options?.theme === false) {
			themeExtendsOpt = { initial: false, overrides: false };
			themeVariablesOpt = { initial: false, overrides: false };
			themeOverridesOpt = { initial: false, overrides: false };
		} else {
			themeExtendsOpt = resolveSource(options.theme.extends);
			themeVariablesOpt = resolveSource(options.theme.variables);
			themeOverridesOpt = resolveSource(options.theme.overrides);
		}

		const includeTheme =
			themeExtendsOpt.initial ||
			themeExtendsOpt.overrides ||
			themeVariablesOpt.initial ||
			themeVariablesOpt.overrides ||
			themeOverridesOpt.initial ||
			themeOverridesOpt.overrides;

		const originalConfig = JSON.parse(JSON.stringify(this.templatesStore.config)) as SnapTemplatesConfig;
		delete originalConfig.search;
		delete originalConfig.autocomplete;
		delete originalConfig.recommendation;
		delete originalConfig.components;

		// selectively strip initial config
		if (!configOpt.initial) {
			delete (originalConfig as Partial<SnapTemplatesConfig>).config;
		}

		// selectively strip initial theme fields
		if (!includeTheme) {
			delete (originalConfig as Partial<SnapTemplatesConfig>).theme;
		} else if (originalConfig.theme) {
			if (!themeExtendsOpt.initial) delete (originalConfig.theme as Partial<typeof originalConfig.theme>).extends;
			if (!themeVariablesOpt.initial) delete originalConfig.theme.variables;
			if (!themeOverridesOpt.initial) delete originalConfig.theme.overrides;
		}

		const overrideConfig: Partial<SnapTemplatesConfig> = {};

		if (configOpt.overrides) {
			overrideConfig.config = (this.storage.get('overrides.config') || {}) as SnapTemplatesConfig['config'];
		}

		if (includeTheme) {
			const themeOverrideData = (this.storage.get('overrides.theme') || {}) as Record<string, unknown>;
			const filteredTheme: Record<string, unknown> = {};
			if (themeExtendsOpt.overrides && themeOverrideData.extends !== undefined) filteredTheme.extends = themeOverrideData.extends;
			if (themeVariablesOpt.overrides && themeOverrideData.variables !== undefined) filteredTheme.variables = themeOverrideData.variables;
			if (themeOverridesOpt.overrides && themeOverrideData.overrides !== undefined) filteredTheme.overrides = themeOverrideData.overrides;
			if (Object.keys(filteredTheme).length) {
				overrideConfig.theme = filteredTheme as SnapTemplatesConfig['theme'];
			}
		}

		const targets = this.getTargets();

		if (options?.search !== false) {
			const searchTargets = targets
				.filter((target) => target.type === 'search')
				.map(
					(target) =>
						({
							selector: target.selector,
							component: target.target.component,
						} as SearchTargetConfig)
				);

			if (searchTargets.length) {
				overrideConfig.search = {
					targets: searchTargets,
					settings: this.overrides.controller.search || {},
				};
			}
		}

		if (options?.autocomplete !== false) {
			const autocompleteTargets = targets
				.filter((target) => target.type === 'autocomplete')
				.map(
					(target) =>
						({
							selector: target.selector,
							component: target.target.component,
						} as AutocompleteTargetConfig)
				);

			if (autocompleteTargets.length) {
				overrideConfig.autocomplete = {
					targets: autocompleteTargets,
					settings: this.overrides.controller.autocomplete || {},
				};
			}
		}

		const config = deepmerge(originalConfig, overrideConfig);
		const cleaned = removeEmptyObjects(config) as Record<string, unknown>;

		if (!options?.unlocked) {
			delete cleaned.unlocked;
		}

		// reorder keys: unlocked, config, theme, search, autocomplete, then everything else
		const orderedKeys = ['unlocked', 'config', 'theme', 'search', 'autocomplete'];
		const ordered: Record<string, unknown> = {};
		for (const key of orderedKeys) {
			if (key in cleaned) {
				ordered[key] = cleaned[key];
			}
		}
		for (const key of Object.keys(cleaned)) {
			if (!(key in ordered)) {
				ordered[key] = cleaned[key];
			}
		}

		return ordered as SnapTemplatesConfig;
	}
}

function removeEmptyObjects(object: any) {
	// Create a recursive cleaning function that works with any object
	const cleanObj = (obj: any): any => {
		if (obj === null || typeof obj !== 'object') {
			return obj;
		}

		// Handle arrays differently from objects
		if (Array.isArray(obj)) {
			return obj
				.map((item) => cleanObj(item))
				.filter((item) => {
					// Keep non-null/undefined items
					if (item === null || item === undefined) return false;
					// Keep non-empty objects/arrays
					if (typeof item === 'object') {
						return Array.isArray(item) ? item.length > 0 : Object.keys(item).length > 0;
					}
					// Keep primitive values
					return true;
				});
		}

		// Handle regular objects
		const result: Record<string, any> = {};

		Object.entries(obj).forEach(([key, value]) => {
			// Skip undefined values
			if (value === undefined) return;

			if (value !== null && typeof value === 'object') {
				// Recursively clean nested objects/arrays
				const cleanedValue = cleanObj(value);

				// Only add non-empty objects/arrays
				if (Array.isArray(cleanedValue) ? cleanedValue.length > 0 : Object.keys(cleanedValue).length > 0) {
					result[key] = cleanedValue;
				}
			} else {
				// Keep non-object values
				result[key] = value;
			}
		});
		return result;
	};
	// Apply the cleaning function to our controller object
	return cleanObj(object);
}

function generateObject<T>(path: string[], value: unknown): T {
	// modify this function to handle array index access
	// e.g., [0], [1], etc.
	// if the key is in the format of [index], convert it to a number and create an array
	// otherwise, create an object property as usual
	// Example:
	// path = ['search', '[0]', 'selector'], value = '#new-selector'
	// returns { search: [ { selector: '#new-selector' } ] }
	// Example:
	// path = ['search', '[0]'], value = { selector: '#new-selector', component: 'Search' }
	// returns { search: [ { selector: '#new-selector', component: 'Search' } ] }
	// Example:
	// path = ['search', 'stuff', 'thing'], value = 'whatever'
	// returns { search: { stuff: { thing: 'whatever' } } }

	// Example:
	// path = ['[0]'], value = { selector: '#new-selector', component: 'Search' }
	// returns [ { selector: '#new-selector', component: 'Search' } ]
	// if (typeof value == 'undefined') return {} as T;

	return path
		.slice()
		.reverse()
		.reduce((res, key) => {
			// Check if key is array index notation like [0], [1], etc.
			const arrayIndexMatch = key.match(/^\[(\d+)\]$/);

			if (arrayIndexMatch) {
				// Extract the index number
				const index = parseInt(arrayIndexMatch[1], 10);
				// Create an array with the element at the specified index
				const arr: unknown[] = [];
				arr[index] = res;
				return arr;
			}

			// Regular object property
			return {
				[key]: res,
			};
		}, value) as T;
}

function transformThemeComponentOverrides(theme: { overrides?: ThemeResponsiveComplete; variables?: ThemeVariablesPartial }): ThemePartial {
	const { overrides, variables } = theme;
	const result: ThemePartial = {};

	if (variables) {
		result.variables = variables;
	}
	if (overrides?.default) {
		result.components = overrides.default;
	}
	if (overrides?.mobile || overrides?.tablet || overrides?.desktop) {
		result.responsive = {
			mobile: overrides?.mobile,
			tablet: overrides?.tablet,
			desktop: overrides?.desktop,
		};
	}

	return result;
}
