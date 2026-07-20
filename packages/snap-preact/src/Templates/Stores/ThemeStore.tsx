import { h } from 'preact';
import { observable, makeObservable, toJS, computed } from 'mobx';
import deepmerge from 'deepmerge';
import { isPlainObject } from 'is-plain-object';
import { TemplateThemeTypes, type TemplatesStoreSettings, type TemplatesStoreDependencies } from './TemplateStore';

import {
	ThemeMinimal,
	type ThemeGlobalStyleScript,
	ThemeVariablesPartial,
	type Theme,
	ThemePartial,
	ThemeOverrides,
	ThemeVariableBreakpoints,
	ThemeComponentsRestricted,
	ResponsiveKeys,
	ThemeComplete,
} from '../../../components/src';
import { sortSelectors, filterSelectors } from '../../../components/src/utilities/mergeProps';
import type { GlobalThemeStyleScript } from '../../types';

export type ThemeStoreThemeConfig = {
	name: string;
	type: TemplateThemeTypes;
	base: ThemeComplete;
	overrides?: ThemeOverrides;
	editorOverrides?: ThemePartial;
	variables?: ThemeVariablesPartial;
	currency: ThemeMinimal;
	language: ThemeMinimal;
	languageOverrides: ThemeMinimal;
	innerWidth?: number;
	style?: GlobalThemeStyleScript;
};

type ThemeStoreConfig = {
	config: ThemeStoreThemeConfig;
	dependencies: TemplatesStoreDependencies;
	settings: TemplatesStoreSettings;
};

export class ThemeStore {
	public name: string;
	public type: string;
	private style?: GlobalThemeStyleScript;

	private dependencies: TemplatesStoreDependencies;
	private base: ThemeComplete;
	private overrides: ThemeOverrides;
	editorOverrides: ThemePartial;
	variables: ThemeVariablesPartial;
	currency: ThemeMinimal;
	language: ThemeMinimal;
	languageOverrides: ThemeMinimal;
	innerWidth?: number;
	editMode: boolean;

	constructor(params: ThemeStoreConfig) {
		const { config, dependencies, settings } = params;
		this.dependencies = dependencies;
		this.editMode = settings.editMode;

		const { name, style, type, base, overrides, editorOverrides, variables, currency, language, languageOverrides, innerWidth } = config;

		// Prefix base + normalize override selector keys into ThemeStore-OWNED copies. `base` is a
		// shared library theme object (the same instance is reused to build multiple ThemeStores),
		// so it must NOT be mutated in place — build fresh objects instead. prefixComponentKeys /
		// normalizeCommaSeparatedKeys already return new objects; here we just avoid reassigning
		// onto the shared inputs.
		const prefixedBase = { ...base };
		prefixedBase.components = prefixComponentKeys('*', base.components);
		if (base.responsive) {
			prefixedBase.responsive = {
				mobile: prefixComponentKeys('*(M)', base.responsive.mobile),
				tablet: prefixComponentKeys('*(T)', base.responsive.tablet),
				desktop: prefixComponentKeys('*(D)', base.responsive.desktop),
			};
		}

		const prefixedOverrides = { ...(overrides || {}) };
		if (overrides?.responsive) {
			prefixedOverrides.responsive = {
				mobile: prefixComponentKeys('(M)', overrides.responsive.mobile),
				tablet: prefixComponentKeys('(T)', overrides.responsive.tablet),
				desktop: prefixComponentKeys('(D)', overrides.responsive.desktop),
			};
		}
		// Normalize comma-separated selectors in override default components (no prefix needed, but commas need normalizing)
		if (overrides?.components) {
			prefixedOverrides.components = normalizeCommaSeparatedKeys(overrides.components);
		}

		this.name = name;
		this.type = type;
		this.base = prefixedBase;
		this.overrides = prefixedOverrides;
		this.editorOverrides = editorOverrides || {};
		this.variables = variables || {};
		this.currency = currency;
		this.language = language;
		this.languageOverrides = languageOverrides;
		this.innerWidth = innerWidth;
		this.style = style;

		makeObservable(this, {
			name: observable,
			variables: observable,
			currency: observable,
			language: observable,
			editorOverrides: observable,
			innerWidth: observable,
			// memoized breakpoint band. `theme` depends on THIS computed, not on `innerWidth`
			// directly, so a resize that stays within the same band (a common case) recomputes
			// this cheap primitive to the same value and does NOT invalidate the expensive theme
			// merge below.
			activeBreakpoint: computed,
			theme: computed, // make theme getter a computed property (memoized)
		});
	}

	// Current breakpoint band derived from innerWidth. Kept as its own computed so that
	// within-band resizes (which return the same string) do not invalidate the `theme` computed.
	public get activeBreakpoint(): ResponsiveKeys {
		// const breakpoints = this.variables.breakpoints || this.base.variables?.breakpoints;
		const breakpoints: ThemeVariableBreakpoints = deepmerge.all<ThemeVariableBreakpoints>([
			this.base.variables.breakpoints,
			this.variables.breakpoints || {},
			(this.editMode && this.editorOverrides?.variables?.breakpoints) || {},
		]);

		return getActiveBreakpoint(this.innerWidth, breakpoints);
	}

	public get theme(): Theme {
		/*
			Themes consist of layers which are deep merged together in order (last merge has highest priority)
				1. base theme
				2. base theme responsive breakpoints
				3. currency
				4. language
				5. language translation overrides
				6. theme overrides
				7. theme overrides at responsive breakpoints
				8. altered theme variables
				9. stored theme editor overrides
				10. stored theme editor overrides at responsive breakpoints
		*/

		const activeBreakpoint = this.activeBreakpoint;

		// overrides breakpoint is index file responsive overrides that match current breakpoint
		const overrideBreakpoint = getOverridesAtActiveBreakpoint(activeBreakpoint, this.overrides);

		// currently selected theme layer for current breakpoint
		const baseBreakpoint = getOverridesAtActiveBreakpoint(activeBreakpoint, this.base);

		// overrides is index file default overrides
		const overrides = { ...this.overrides };

		const themeOverrides = mergeThemeLayers(overrides, overrideBreakpoint, {
			variables: toJS(this.variables),
		} as ThemePartial) as ThemePartial;

		// PERF: deepmerge.all deep-clones its accumulator on EVERY layer, so passing the large base
		// theme as the first of 7 layers re-clones it ~6x per rebuild. Instead, merge the small
		// (non-base) layers together first, then do a SINGLE merge with base — base is deep-cloned
		// once. Output is identical: last-wins deep object/array merge is associative for these
		// layers (verified by the theme-getter tests below, which pin full theme output).
		const overlay = mergeThemeLayers(baseBreakpoint, this.currency, this.language, this.languageOverrides, themeOverrides, {
			activeBreakpoint: activeBreakpoint,
		});

		let theme: Theme = mergeThemeLayers(this.base, overlay) as Theme;

		/*
			Ensure 'theme' prop has overrides applied to it
			- separate the "base" theme from "overrides"
			- inspect the "base" theme object for keys that have a 'theme' property
			- if the 'theme' property exists, merge overrides for matching keys in overrides
		*/

		// loop through all components
		for (const componentName in theme.components) {
			const component = theme.components[componentName as keyof typeof theme.components];
			const themeComponents = component?.theme?.components;
			// if a component has a theme property with components
			if (themeComponents) {
				for (const themeComponentName in themeComponents) {
					const themeComponentsApplicableSelectors = filterSelectors(
						(themeOverrides.components as any) || {},
						`${componentName} ${themeComponentName}`
					).sort(sortSelectors);
					themeComponentsApplicableSelectors.forEach((selector) => {
						const themeComponentPropsOverrides = themeOverrides.components![selector as keyof typeof themeOverrides.components];
						if (themeComponentPropsOverrides) {
							const themeComponentProps = themeComponents[themeComponentName as keyof typeof themeComponents];
							// @ts-ignore - hard to type this
							themeComponents[themeComponentName as keyof typeof themeComponents] = { ...themeComponentProps, ...themeComponentPropsOverrides };
						}
					});
				}
			}
		}

		// TemplateEditor overrides
		if (this.editMode) {
			// PERF: same single-clone pattern — pre-merge the small editor layers, then one merge
			// with the (large) theme instead of cloning the theme twice.
			const editorOverrideBreakpoint = getOverridesAtActiveBreakpoint(activeBreakpoint, this.editorOverrides);
			const editorOverlay = mergeThemeLayers(this.editorOverrides, editorOverrideBreakpoint);
			theme = mergeThemeLayers(theme as ThemePartial, editorOverlay) as Theme;
		}

		const activeStyleFns = [this.base.globalStyle, this.style].filter(Boolean) as ThemeGlobalStyleScript[];
		if (activeStyleFns.length > 0) {
			theme.globalStyle = ({ name, variables }) => Object.assign({}, ...activeStyleFns.map((fn) => fn({ name, variables })));
		}

		// change the theme name to match the ThemeStore theme name
		theme.name = this.name;
		return theme;
	}

	public setInnerWidth(innerWidth: number) {
		this.innerWidth = innerWidth;
	}

	public setCurrency(currency: ThemeMinimal) {
		this.currency = currency;
	}

	public setLanguage(language: ThemeMinimal) {
		this.language = language;
	}

	public setEditorOverrides(overrides: ThemePartial) {
		this.editorOverrides = overrides;
	}
}

export function mergeThemeLayers(...layers: (ThemePartial | Theme)[]): ThemePartial {
	return deepmerge.all(layers, { arrayMerge: arrayMerge });
}

export function getActiveBreakpoint(width: number | undefined, breakpoints: ThemeVariableBreakpoints | undefined): ResponsiveKeys {
	let breakpoint: ResponsiveKeys | undefined;

	if (Number.isInteger(width) && breakpoints) {
		Object.keys(breakpoints).forEach((bp) => {
			if (width! <= breakpoints[bp as keyof typeof breakpoints]) {
				if (!breakpoint || breakpoints[breakpoint as keyof typeof breakpoints] > breakpoints[bp as keyof typeof breakpoints]) {
					breakpoint = bp as ResponsiveKeys;
				}
			}
		});
	}
	return breakpoint || 'default';
}

export function getOverridesAtActiveBreakpoint(activeBreakpoint: ResponsiveKeys, theme: ThemePartial): ThemePartial {
	let overrides: ThemePartial = {};

	if (activeBreakpoint && theme.responsive) {
		overrides = (theme.responsive && (theme.responsive as any)[activeBreakpoint]) || {};
	}
	return { components: overrides };
}

const arrayMerge = (target: any, source: any, options: any) => {
	// trim off any excess array entries
	const destination = target.slice(0, source.length);

	source.forEach((item: any, index: any) => {
		if (typeof destination[index] === 'undefined') {
			destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
		} else if (isPlainObject(item)) {
			destination[index] = deepmerge(target[index], item, options);
		} else {
			destination[index] = item;
		}
	});

	return destination;
};

function prefixComponentKeys(prefix: string, components?: ThemeComponentsRestricted): ThemePartial {
	// TODO: remove any?
	const newComponents: any = {};

	if (components) {
		Object.keys(components).forEach((key) => {
			// Handle comma-separated selectors by prefixing each individual selector
			// Split on comma with optional surrounding whitespace, normalize to ', '
			if (key.includes(',')) {
				const prefixedKey = key
					.split(/\s*,\s*/)
					.map((part) => {
						// does the part already have the prefix?
						if (part.indexOf(prefix) === 0) return part;
						return `${prefix}${part}`;
					})
					.join(', ');
				newComponents[prefixedKey as keyof typeof newComponents] = components![key as keyof typeof components];
				return;
			}
			//does the key already have the prefix? - this is needed when using the editor.
			if (key.indexOf(prefix) === 0) {
				newComponents[key as keyof typeof newComponents] = components![key as keyof typeof components];
				return;
			}
			// add the prefix to the key
			newComponents[`${prefix}${key}` as keyof typeof newComponents] = components![key as keyof typeof components];
		});
	}

	return newComponents;
}

function normalizeCommaSeparatedKeys(components: ThemeComponentsRestricted): ThemeComponentsRestricted {
	const newComponents: any = {};

	Object.keys(components).forEach((key) => {
		if (key.includes(',')) {
			const normalized = key.split(/\s*,\s*/).join(', ');
			newComponents[normalized] = components[key as keyof typeof components];
		} else {
			newComponents[key] = components[key as keyof typeof components];
		}
	});

	return newComponents;
}
