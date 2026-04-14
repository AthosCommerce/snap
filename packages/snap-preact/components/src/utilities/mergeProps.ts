import type { ComponentProps } from '../types';
import type { Theme, ThemeComponents } from '../providers';

// Symbol to track prop-value pairs that originated from theme configuration
const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

export function mergeProps<GenericComponentProps extends ComponentProps>(
	componentType: string,
	globalTheme: Theme,
	defaultProps: Partial<GenericComponentProps>,
	props: GenericComponentProps
): GenericComponentProps {
	/*

		production behaviour:
		
		1. start with default props
		2. spreads global theme props of component
		3. spreads standard props (directly passed via JSX) - these may be provided by the integration or sub-props
		4. spreads component theme props of component

		templates behaviour:
		
		1. start with default props
		2. spreads standard props (directly passed via JSX) - these may be provided by the integration or sub-props
		3. spreads component theme props of component and named component
		4. spreads global theme props of component and named component
		5. ensure templates theme variables pass on in `theme`
		6. if treepath contains 'custom' do #2 again

	*/

	const theme = props.theme;
	const componentName = props?.name || defaultProps.name;

	let treePath = props.treePath || defaultProps.treePath || '';

	treePath += `${treePath ? ' ' : ''}${componentType}`;

	// start with defaultProps
	let mergedProps = {
		...defaultProps,
	};

	if (!globalTheme?.name) {
		// add globalTheme props if they exist
		const globalComponent = globalTheme?.components && globalTheme.components[componentType as keyof typeof globalTheme.components];

		if (globalComponent) {
			mergedProps = mergeThemeProps(globalComponent, mergedProps) as Partial<GenericComponentProps>;
		}

		// normal props
		mergedProps = {
			...mergedProps,
			...props,
			treePath,
		};

		// add theme props if they exist
		const themeComponent = theme?.components && theme.components[componentType as keyof typeof theme.components];
		if (themeComponent) {
			mergedProps = mergeThemeProps(themeComponent, mergedProps) as Partial<GenericComponentProps>;
		}
	} else {
		// normal props
		mergedProps = {
			...mergedProps,
			...props,
		};

		treePath += componentName?.match(/^[A-Z,a-z,-]+$/) ? `.${componentName}` : '';

		// component props from the theme
		// add globalTheme props for components with selector matches if they exist
		const filteredGlobalApplicableSelectors = filterSelectors(globalTheme?.components || {}, treePath);
		const globalApplicableSelectors = filteredGlobalApplicableSelectors.sort(sortSelectors);

		// Split selectors into base theme (with *) and user overrides (without *)
		const baseThemeSelectors = globalApplicableSelectors.filter((s) => s.includes('*'));
		const userOverrideSelectors = globalApplicableSelectors.filter((s) => !s.includes('*'));

		// 1. Apply base theme props first, tracking which props are set by SPECIFIC selectors
		// Specific selectors are those with multiple path segments (like 'facet icon.collapse')
		// Props set by specific selectors should NOT be overridden by parent's passed values
		const propsSetBySpecificSelectors = new Set<string>();

		baseThemeSelectors.forEach((selector) => {
			const componentProps = globalTheme.components?.[selector as keyof typeof globalTheme.components];
			if (componentProps) {
				// Check if this is a "specific" selector (has parent component in path)
				// Remove the * prefix and responsive suffixes for checking
				const cleanSelector = selector
					.replace(/^\*/, '')
					.replace(/\([MDT]\)$/, '')
					.trim();
				const isSpecificSelector = cleanSelector.split(' ').length > 1;

				if (isSpecificSelector) {
					// Track which props are set by specific selectors
					Object.keys(componentProps).forEach((key) => propsSetBySpecificSelectors.add(key));
				}

				mergedProps = mergeThemeProps(componentProps, mergedProps) as Partial<GenericComponentProps>;
			}
		});

		// 2. Respread props whose VALUES originated from a parent's theme.
		// This ensures theme-derived props from parent beat child's base theme,
		// BUT skip props that were set by SPECIFIC selectors (like 'facet icon.collapse')
		// User overrides (applied next) will still have the final say.
		const parentThemePropsMap = (props.theme as any)?.[THEME_PROPS_MAP_SYMBOL];
		if (parentThemePropsMap instanceof Map && parentThemePropsMap.size > 0) {
			const propsToRespread: Partial<GenericComponentProps> = {};
			const parentThemeValuesArray = Array.from(parentThemePropsMap.values());

			for (const key of Object.keys(props) as Array<keyof GenericComponentProps>) {
				// Skip meta props
				if (key === 'treePath' || key === 'theme' || key === 'name') continue;

				// Skip props that were set by a specific selector in child's theme
				if (propsSetBySpecificSelectors.has(key as string)) continue;

				const propValue = (props as any)[key];
				// Only respread if the VALUE came from a parent's theme (check all parent theme values)
				if (propValue !== undefined && parentThemeValuesArray.indexOf(propValue) !== -1) {
					(propsToRespread as any)[key] = propValue;
				}
			}

			if (Object.keys(propsToRespread).length > 0) {
				mergedProps = {
					...mergedProps,
					...propsToRespread,
				};
			}
		}

		// 3. Apply user overrides.
		// Pass preserveExistingMapKeys=true so that props already tracked in the theme map
		// (e.g. from baseThemeSelectors) keep their theme-derived value in the map.
		// New props introduced only by user overrides are still added to the map.
		userOverrideSelectors.forEach((selector) => {
			const componentProps = globalTheme.components?.[selector as keyof typeof globalTheme.components];
			if (componentProps) {
				mergedProps = mergeThemeProps(componentProps, mergedProps, true) as Partial<GenericComponentProps>;
			}
		});

		// 4. Apply props.theme component overrides last.
		// These come from parent-injected theme data (e.g. layout option overrides set by useLayoutOptions)
		// and must win over global user overrides because they represent a more specific context.
		// e.g. `searchCollapsible results: { columns: 6 }` beats a global `results: { columns: 5 }` override.
		const themeApplicableSelectors = filterSelectors(theme?.components || {}, treePath).sort(sortSelectors);
		themeApplicableSelectors.forEach((selector) => {
			const componentProps = theme?.components?.[selector as keyof typeof globalTheme.components];
			if (componentProps) {
				mergedProps = mergeThemeProps(componentProps, mergedProps) as Partial<GenericComponentProps>;
			}
		});

		// tacking on name and variables to `theme`
		mergedProps = {
			...mergedProps,
			theme: {
				...mergedProps.theme,
				name: globalTheme.name,
			},
			treePath,
		};

		if ((props as any).lang) {
			(mergedProps as any).lang = (props as any).lang;
		}

		if (globalTheme.variables && mergedProps.theme) {
			mergedProps.theme.variables = globalTheme.variables;
		}

		// Store current theme prop-value pairs on props.theme so they travel to children
		const currentThemePropsMap: Map<string, any> = (mergedProps as any)[THEME_PROPS_MAP_SYMBOL] || new Map();
		if (currentThemePropsMap.size > 0 && mergedProps.theme) {
			// Merge with any existing parent theme values
			const combinedThemePropsMap = new Map(currentThemePropsMap);
			if (parentThemePropsMap instanceof Map) {
				parentThemePropsMap.forEach((val, key) => {
					if (!combinedThemePropsMap.has(key)) {
						combinedThemePropsMap.set(key, val);
					}
				});
			}
			(mergedProps.theme as any)[THEME_PROPS_MAP_SYMBOL] = combinedThemePropsMap;
		}

		if (treePath && (treePath.indexOf('customComponent') > -1 || (treePath.startsWith('storybook') && treePath.split(' ').length == 2))) {
			mergedProps = {
				...mergedProps,
				...props,
				treePath,
			};
		}
	}

	return mergedProps as GenericComponentProps;
}

function mergeThemeProps(
	componentThemeProps: Partial<ComponentProps>,
	mergedProps: Partial<ComponentProps>,
	preserveExistingMapKeys = false
): Partial<ComponentProps> {
	// add theme props if they exist
	if (componentThemeProps) {
		// Track prop-value pairs that came from theme (for detecting theme-derived props in children).
		// When preserveExistingMapKeys is true (used for user overrides), existing map entries are not
		// overwritten — only new keys are added. This preserves original theme-derived values in the
		// map so child components can correctly identify which props came from the theme.
		const existingThemePropsMap: Map<string, any> = (mergedProps as any)[THEME_PROPS_MAP_SYMBOL] || new Map();
		for (const [key, value] of Object.entries(componentThemeProps)) {
			// Only track primitive values and non-null objects (skip functions, undefined, etc.)
			if (value !== undefined && value !== null && typeof value !== 'function') {
				if (!preserveExistingMapKeys || !existingThemePropsMap.has(key)) {
					existingThemePropsMap.set(key, value);
				}
			}
		}

		mergedProps = {
			...mergedProps,
			...componentThemeProps,
		};

		(mergedProps as any)[THEME_PROPS_MAP_SYMBOL] = existingThemePropsMap;
	}

	return mergedProps;
}

// sort function is necessary in order for the user overrides to take priority over the base theme and also for responsive overrides
// weights are used in the reduce initial value
// priority is: Base - * < Override < Responsive - "(M)" || "(T)" || "(D)" [regex find responsive matches]
export function sortSelectors(a: string, b: string): number {
	const aWeight = a
		.split(' ')
		.map((selector, i) => (i * 2) ** (selector.includes('.') ? 2 : 1))
		.reduce((acc, val) => acc + val, (a.includes('*') ? 0 : 1000) + (a.match(/\([MDT]\)/) ? 2000 : 0));
	const bWeight = b
		.split(' ')
		.map((selector, i) => (i * 2) ** (selector.includes('.') ? 2 : 1))
		.reduce((acc, val) => acc + val, (b.includes('*') ? 0 : 1000) + (b.match(/\([MDT]\)/) ? 2000 : 0));

	return aWeight - bWeight;
}

export function filterSelectors(themeComponents: ThemeComponents, treePath: string): string[] {
	let selectors = Object.keys(themeComponents);
	const paths = treePath.split(' ');
	const componentTypeAndName = paths.slice(-1).pop() ?? '';
	const [componentType, componentName] = componentTypeAndName.split('.');

	const mappedSplitTreePath = paths.map((path) => {
		const [type, name] = path.split('.');
		return {
			type,
			name,
			path,
		};
	});

	if (componentName) {
		selectors = selectors.filter((key) => {
			const keys = key.split(' ');
			const lastkey = keys[keys.length - 1].replace(/\*?(\([MDT]\))?/g, '');
			if (lastkey == componentType || lastkey == `${componentType}.${componentName}`) {
				return true;
			}
		});
	} else {
		selectors = selectors.filter((key) => key.endsWith(componentType));
	}
	return selectors.filter((selector) => {
		// when considering matches, we do not care about the base theme prefix "*" nor the responsive prefix "(M)" || "(T)" || "(D)"
		// these are automatically added by the ThemeStore in Snap Templates in order to preserve merge ordering of these overrides
		const split = selector
			.replace(/\*?(\([MDT]\))?/g, '')
			.split(' ')
			.slice(0, -1);

		if (split.length == 0) return true;

		for (let s = 0; s < split.length; s++) {
			let prevIndex = -1;
			const value = split[s];

			for (let i = prevIndex == -1 ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
				const pathValue = mappedSplitTreePath[i];

				if (value === pathValue.path || value === pathValue.type) {
					prevIndex = s;
					break;
				}
			}

			if (prevIndex == -1) {
				// selector path not found at all - selector is invalid
				return false;
			}
		}

		return true;
	});
}
