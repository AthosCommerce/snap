import type { ComponentProps } from '../types';
import type { Theme, ThemeComplete, ThemeComponents } from '../providers';

/*
	mergeProps resolves the final props for a component from its default props, its JSX props,
	and the theme(s) in play. It runs on EVERY render of every component (~76 call sites):

		mergeProps(componentType, globalTheme, defaultProps, properties)

	- componentType: hardcoded per component ('select', 'icon', ...); becomes a treePath segment
	- globalTheme: from useTheme() (Emotion context); Snap Templates themes carry `type: 'templates'`
	- defaultProps: component-defined defaults (usually includes treePath from useTreePath())
	- properties: raw JSX props — integration-authored or a parent's subProps

	CLASSIC mode (globalTheme.type !== 'templates') — priority lowest → highest:
		1. defaultProps
		2. globalTheme.components[componentType] (exact key lookup — no selectors)
		3. JSX props (+ computed treePath)
		4. props.theme.components[componentType] (exact key lookup — no selectors)

	TEMPLATES mode — priority lowest → highest:
		1. defaultProps
		2. JSX props
		3. global base theme selectors ('*'-prefixed keys, added by ThemeStore for the theme library)
		4. parent-theme-derived respread (passed props whose values came from an ancestor's theme)
		5. global user override selectors (no '*' — project config overrides)
		6. props.theme.components selectors (parent-injected, e.g. layout option overrides)
		7. exceptions: customComponent and storybook-rooted paths respread raw props
		   (excl. theme — the enriched theme is kept for the subtree)

	NOTE: application order is NOT priority order — the respreads (4 and 7) re-apply earlier
	values over later layers. Follow the numbered step functions (T1–T8) below in order.

	Behavior is pinned by the characterization suite (mergeProps*.test.ts — 6 files, 102 tests).
	Change behavior only together with a test change in the same review.

	QUIRK REGISTRY — grep "QUIRK[<id>]" to find the source contract and every pinning test:
	[respread-value-identity]              T2 matches same-key values for all types; cross-key (renamed forwarding) for strings/objects only
	[map-untracked-spreads]                mergeThemeProps spreads undefined/null/function values but never tracks them
	[final-respread-keeps-enriched-theme]  T8 respreads exclude theme, keeping the enriched theme for the subtree
	[symbol-map-reference-propagation]     parent map travels BY REFERENCE via T5's theme spread when the child map is
	                                       empty; T7's combined map goes only on merged.theme (top-level map differs)
	[name-fallback-empty-string]           componentName uses `||`, so a name of '' falls back to defaultProps.name
	[name-regex-silent-drop]               names failing /^[A-Za-z0-9-]+$/ are silently omitted from the treePath
	[stale-treepath-until-enrichment]      templates merged.treePath keeps the PARENT's value until T5 attaches the
	                                       computed one
*/

// Symbol to track prop-value pairs that originated from theme configuration
const THEME_PROPS_MAP_SYMBOL = Symbol.for('__themePropsMap__');

export function mergeProps<GenericComponentProps extends ComponentProps>(
	componentType: string,
	globalTheme: Theme,
	defaultProps: Partial<GenericComponentProps>,
	props: GenericComponentProps
): GenericComponentProps {
	let treePath = props.treePath || defaultProps.treePath || '';
	treePath += `${treePath ? ' ' : ''}${componentType}`;

	if (!isTemplatesTheme(globalTheme)) {
		return mergeClassicLayers(componentType, globalTheme, defaultProps, props, treePath) as GenericComponentProps;
	}

	const ctx = createTemplatesContext(componentType, globalTheme, defaultProps, props, treePath);

	// QUIRK[stale-treepath-until-enrichment]: unlike the classic branch, this spread deliberately
	// does NOT set the computed treePath; merged.treePath stays stale (the parent's value from
	// props/defaultProps) until enrichThemeMeta (T5) attaches the computed one.
	let merged: Partial<ComponentProps> = {
		...defaultProps,
		...props,
	};

	merged = applyGlobalBaseSelectors(merged, ctx); // T1: base `*` selectors (+ "specific" tracking)
	merged = respreadParentThemeDerivedProps(merged, ctx); // T2: parent-theme-derived props win back
	merged = applyGlobalOverrideSelectors(merged, ctx); // T3: user overrides (no `*`)
	merged = applyParentThemeSelectors(merged, ctx); // T4: props.theme.components (no bucket split)
	merged = enrichThemeMeta(merged, ctx); // T5: theme.name/activeBreakpoint + treePath
	merged = restoreLangProp(merged, ctx); // T6: lang always wins from raw props
	merged = finalizeThemeForChildren(merged, ctx); // T7: theme.variables + combined THEME_PROPS_MAP
	merged = applyFinalRespreadExceptions(merged, ctx); // T8: customComponent / storybook respreads

	return merged as GenericComponentProps;
}

function isTemplatesTheme(globalTheme: Theme): boolean {
	return (globalTheme as ThemeComplete)?.type === 'templates';
}

/**
 * CLASSIC mode merge — globalTheme has no `type: 'templates'` (plain Snap integrations,
 * defaultTheme, or no ThemeProvider at all).
 *
 * Layers (lowest → highest): defaultProps → globalTheme.components[componentType] →
 * JSX props (+ treePath) → props.theme.components[componentType].
 * Only exact componentType keys are looked up — selector-style keys ('*x', '(M)x',
 * 'search x', comma groups) are ignored entirely in this mode.
 */
function mergeClassicLayers(
	componentType: string,
	globalTheme: Theme,
	defaultProps: Partial<ComponentProps>,
	props: ComponentProps,
	treePath: string
): Partial<ComponentProps> {
	const theme = props.theme;

	let mergedProps: Partial<ComponentProps> = {
		...defaultProps,
	};

	// add globalTheme props if they exist
	const globalComponent = globalTheme?.components && globalTheme.components[componentType as keyof typeof globalTheme.components];
	if (globalComponent) {
		mergedProps = mergeThemeProps(globalComponent, mergedProps);
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
		mergedProps = mergeThemeProps(themeComponent, mergedProps);
	}

	return mergedProps;
}

/**
 * Everything the templates pipeline steps need, computed once up front.
 * `propsSetBySpecificSelectors` is the one piece of cross-step state: WRITTEN by T1,
 * READ by T2.
 */
interface TemplatesMergeContext {
	componentType: string;
	globalTheme: Theme;
	/** raw props as passed by the caller — read by T2 (respread) and T8 (exceptions); never mutated */
	props: ComponentProps;
	/** computed treePath INCLUDING the `.name` suffix appended for valid names */
	treePath: string;
	/** props.theme captured before any merging */
	parentTheme: Theme | undefined;
	/** parent's THEME_PROPS_MAP_SYMBOL map; undefined unless it is an actual Map */
	parentThemePropsMap: Map<string, any> | undefined;
	/**
	 * globalTheme.components matches for this treePath, sorted by the matched part's weight
	 * and split into buckets. Comma groups contribute one entry per matching part, so a
	 * group applies exactly like the equivalent individual selectors.
	 */
	globalBaseSelectors: MatchedSelector[]; // matched part contains '*'
	globalOverrideSelectors: MatchedSelector[]; // matched part has no '*'
	/** keys set by multi-segment ("specific") base selectors — written by T1, read by T2 */
	propsSetBySpecificSelectors: Set<string>;
}

function createTemplatesContext(
	componentType: string,
	globalTheme: Theme,
	defaultProps: Partial<ComponentProps>,
	props: ComponentProps,
	treePath: string
): TemplatesMergeContext {
	// QUIRK[name-fallback-empty-string]: `||` coerces an empty-string props.name to
	// defaultProps.name for the treePath suffix, while the name prop itself stays ''.
	const componentName = props?.name || defaultProps.name;

	// QUIRK[name-regex-silent-drop]: names with characters outside [A-Za-z0-9-] (spaces,
	// underscores, dots) are silently omitted from the treePath — selectors targeting such
	// names can never match.
	treePath += componentName?.match(/^[A-Za-z0-9-]+$/) ? `.${componentName}` : '';

	// selectors from the global theme that apply to this component's treePath, in weight order
	// of the part that actually matched (memoized per components-object + treePath). Raw sort
	// order equals layer priority (see selectorWeight); the base/override bucket split exists
	// solely as the interleaving point for the T2 respread (base < respread < overrides).
	const { baseSelectors, overrideSelectors } = getSelectorMatches(globalTheme?.components, treePath);

	const rawParentThemePropsMap = (props.theme as any)?.[THEME_PROPS_MAP_SYMBOL];

	return {
		componentType,
		globalTheme,
		props,
		treePath,
		parentTheme: props.theme,
		parentThemePropsMap: rawParentThemePropsMap instanceof Map ? rawParentThemePropsMap : undefined,
		globalBaseSelectors: baseSelectors,
		globalOverrideSelectors: overrideSelectors,
		propsSetBySpecificSelectors: new Set<string>(),
	};
}

/**
 * T1 — Apply base theme selectors ('*'-prefixed) from the global theme, lowest weight first.
 * Reads: ctx.globalBaseSelectors, ctx.globalTheme.
 * Writes: ctx.propsSetBySpecificSelectors (consumed by T2).
 *
 * "Specific" selectors are those with multiple path segments (like 'facet icon.collapse');
 * props they set must NOT be overridden by the parent's passed values in T2.
 */
function applyGlobalBaseSelectors(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	ctx.globalBaseSelectors.forEach(({ original, matchedPart }) => {
		const componentProps = ctx.globalTheme.components?.[original as keyof ThemeComponents];
		if (componentProps) {
			// specificity is classified on the comma part that MATCHED (a comma group behaves
			// exactly like its individual selectors); strip the layer prefixes before counting
			// path segments ('*(M)facet select' → 'facet select' → specific)
			const cleanSelector = matchedPart
				.replace(/^\*/, '')
				.replace(/^\([MDT]\)/, '')
				.trim();
			const isSpecificSelector = cleanSelector.split(' ').length > 1;

			if (isSpecificSelector) {
				Object.keys(componentProps).forEach((key) => ctx.propsSetBySpecificSelectors.add(key));
			}

			merged = mergeThemeProps(componentProps, merged);
		}
	});

	return merged;
}

/**
 * T2 — Respread passed props whose VALUES originated from a parent's theme.
 * This ensures theme-derived props from the parent beat the child's base theme,
 * BUT skips props that were set by "specific" selectors (T1). User overrides (T3)
 * still get the final say.
 * Reads: ctx.props, ctx.parentThemePropsMap, ctx.propsSetBySpecificSelectors.
 * Skips meta keys: treePath, theme, name (note: unlike lang in T6, name set by a theme
 * selector is never restored from props).
 *
 * QUIRK[respread-value-identity]: a prop counts as parent-theme-derived when the parent
 * map has the SAME key with the identical value (any type), or — to support renamed-prop
 * forwarding (parent `overlayColor` forwarded to the child as `color`) — when its value is
 * identical to ANY parent map value and the value is a string or an object. Booleans and
 * numbers never match cross-key: they collide with unrelated theme values far too easily
 * to be treated as provenance.
 */
function respreadParentThemeDerivedProps(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	if (ctx.parentThemePropsMap && ctx.parentThemePropsMap.size > 0) {
		const propsToRespread: Partial<ComponentProps> = {};
		const parentThemeValues = getParentThemeValuesSet(ctx.parentThemePropsMap);

		for (const key of Object.keys(ctx.props)) {
			// Skip meta props
			if (key === 'treePath' || key === 'theme' || key === 'name') continue;

			// Skip props that were set by a specific selector in the child's theme
			if (ctx.propsSetBySpecificSelectors.has(key)) continue;

			const propValue = (ctx.props as any)[key];
			if (propValue === undefined) continue;

			// same-key match: the parent's theme set this exact prop to this exact value
			const sameKeyMatch = ctx.parentThemePropsMap.get(key) === propValue;
			// cross-key match: renamed-prop forwarding — restricted to strings and (non-null)
			// objects; booleans/numbers collide too easily to be treated as theme provenance
			const crossKeyMatch =
				(typeof propValue === 'string' || (typeof propValue === 'object' && propValue !== null)) && parentThemeValues.has(propValue);

			if (sameKeyMatch || crossKeyMatch) {
				(propsToRespread as any)[key] = propValue;
			}
		}

		if (Object.keys(propsToRespread).length > 0) {
			merged = {
				...merged,
				...propsToRespread,
			};
		}
	}

	return merged;
}

/**
 * T3 — Apply user override selectors (no '*') from the global theme, lowest weight first.
 * Reads: ctx.globalOverrideSelectors, ctx.globalTheme.
 *
 * preserveExistingMapKeys=true so props already tracked in the theme map (from T1) keep
 * their theme-derived value in the map; new keys introduced only by user overrides are
 * still added. Child components use the map to identify theme-derived values.
 */
function applyGlobalOverrideSelectors(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	ctx.globalOverrideSelectors.forEach(({ original }) => {
		const componentProps = ctx.globalTheme.components?.[original as keyof ThemeComponents];
		if (componentProps) {
			merged = mergeThemeProps(componentProps, merged, true);
		}
	});

	return merged;
}

/**
 * T4 — Apply props.theme.components selector overrides last. These come from
 * parent-injected theme data (e.g. layout option overrides set by useLayoutOptions) and
 * must win over global user overrides because they represent a more specific context —
 * e.g. `searchCollapsible results: { columns: 6 }` beats a global `results: { columns: 5 }`.
 * Reads: ctx.parentTheme, ctx.treePath.
 *
 * Selectors here are applied in raw sorted order with no bucket split; since raw sort
 * order equals layer priority (see selectorWeight), this matches the effective
 * globalTheme.components ordering.
 */
function applyParentThemeSelectors(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	const { matches } = getSelectorMatches(ctx.parentTheme?.components, ctx.treePath);
	matches.forEach(({ original }) => {
		const componentProps = ctx.parentTheme?.components?.[original as keyof ThemeComponents];
		if (componentProps) {
			merged = mergeThemeProps(componentProps, merged);
		}
	});

	return merged;
}

/**
 * T5 — Build the child-facing `theme` (name + activeBreakpoint) and attach the computed
 * treePath (see QUIRK[stale-treepath-until-enrichment] at the pipeline).
 *
 * QUIRK[symbol-map-reference-propagation] (part 1): the `...merged.theme` spread copies
 * enumerable SYMBOL keys too — when this component has no theme-derived props of its own,
 * this is how the PARENT's THEME_PROPS_MAP travels to children by reference (T7's guard
 * won't replace it). Note `name` is written even when globalTheme.name is undefined (the
 * key is present with value undefined).
 */
function enrichThemeMeta(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	return {
		...merged,
		theme: {
			...merged.theme,
			name: ctx.globalTheme.name,
			...(ctx.globalTheme.activeBreakpoint ? { activeBreakpoint: ctx.globalTheme.activeBreakpoint } : {}),
		},
		treePath: ctx.treePath,
	};
}

/**
 * T6 — Directly-passed `lang` always survives theme overrides (mutates `merged` in place).
 * The theme-provided lang value remains tracked in the theme props map.
 */
function restoreLangProp(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	if ((ctx.props as any).lang) {
		(merged as any).lang = (ctx.props as any).lang;
	}

	return merged;
}

/**
 * T7 — Finalize the child-facing theme: share globalTheme.variables (by REFERENCE — it
 * overwrites any props.theme.variables) and store the combined theme prop-value map on
 * merged.theme so it travels to children.
 *
 * QUIRK[symbol-map-reference-propagation] (part 2): the combined map (this component's
 * entries win; parent extras appended) is attached ONLY to merged.theme. The top-level
 * merged[THEME_PROPS_MAP_SYMBOL] set by mergeThemeProps keeps this component's own entries
 * — the two maps intentionally differ. When this component has NO theme entries of its
 * own, no combined map is built at all (size guard) and the parent's map reference from
 * T5 remains.
 */
function finalizeThemeForChildren(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	if (ctx.globalTheme.variables && merged.theme) {
		merged.theme.variables = ctx.globalTheme.variables;
	}

	const currentThemePropsMap: Map<string, any> = (merged as any)[THEME_PROPS_MAP_SYMBOL] || new Map();
	if (currentThemePropsMap.size > 0 && merged.theme) {
		// Merge with any existing parent theme values
		const combinedThemePropsMap = new Map(currentThemePropsMap);
		if (ctx.parentThemePropsMap) {
			ctx.parentThemePropsMap.forEach((val, key) => {
				if (!combinedThemePropsMap.has(key)) {
					combinedThemePropsMap.set(key, val);
				}
			});
		}
		(merged.theme as any)[THEME_PROPS_MAP_SYMBOL] = combinedThemePropsMap;
	}

	return merged;
}

/**
 * T8 — Final respread exceptions: subtrees where authored JSX props must beat theme merges.
 *
 * customComponent paths (a treePath segment of exactly 'customComponent' or prefixed
 * 'customComponent-', as injected by CustomComponentWrapper): the custom component
 * author's props win at every depth of the subtree.
 *
 * storybook-rooted paths: story controls/args must have the final say at every depth.
 *
 * QUIRK[final-respread-keeps-enriched-theme]: both respreads exclude `theme` from the raw
 * props, keeping the enriched theme built by T5–T7 (name, variables, activeBreakpoint,
 * combined theme props map) so children still receive full theme context.
 */
function applyFinalRespreadExceptions(merged: Partial<ComponentProps>, ctx: TemplatesMergeContext): Partial<ComponentProps> {
	const treePath = ctx.treePath;
	if (!treePath) return merged;

	const isCustomComponentPath = treePath.split(' ').some((segment) => segment === 'customComponent' || segment.startsWith('customComponent-'));
	const isStorybookPath = treePath.startsWith('storybook ');

	if (isCustomComponentPath || isStorybookPath) {
		const propsWithoutTheme: Partial<ComponentProps> = { ...ctx.props };
		delete propsWithoutTheme.theme;
		merged = {
			...merged,
			...propsWithoutTheme,
			treePath,
		};
	}

	return merged;
}

/**
 * Merge one selector's theme props over the accumulated props, tracking prop-value pairs
 * that came from theme configuration (children use the map to detect theme-derived props).
 *
 * When preserveExistingMapKeys is true (used for user overrides in T3), existing map
 * entries are not overwritten — only new keys are added — preserving original
 * theme-derived values in the map.
 *
 * QUIRK[map-untracked-spreads]: undefined/null/function values are SPREAD onto the merged
 * props (an explicit `undefined` clobbers an earlier value with the key kept present — a
 * shipped theming idiom for clearing defaults) but are never tracked in the map; the map
 * (possibly empty) is attached unconditionally.
 */
function mergeThemeProps(
	componentThemeProps: Partial<ComponentProps>,
	mergedProps: Partial<ComponentProps>,
	preserveExistingMapKeys = false
): Partial<ComponentProps> {
	// add theme props if they exist
	if (componentThemeProps) {
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

/*
	==========================================================================================
	Selector matching & ordering
	==========================================================================================
	Selector keys in templates themes look like:
		'select'                      user override for every select
		'*select'                     base theme (ThemeStore prefixes base components with '*')
		'*(M)select'                  base theme, mobile breakpoint layer
		'(M)select'                   user override, mobile breakpoint layer
		'search toolbar select'       ancestor-scoped
		'facet icon.collapse'         named component
		'a icon, b icon'              comma group (matches when any part matches)
*/

/**
 * Weight of a single (non-comma) selector. Higher weight = applied later = wins.
 *   layer prefix: base '*' = 0, base responsive '*(M|T|D)' = 1000,
 *                 user override = 2000, user override responsive '(M|T|D)' = 3000
 *   — raw sort order therefore equals the intended layer priority (base < base-responsive
 *   < override < override-responsive); the T1/T3 bucket split no longer changes ordering
 *   and exists solely as the interleaving point for the T2 respread.
 *   per segment (1-based): ((i + 1) * 2) ** (segment has '.name' ? 2 : 1) — deeper paths
 *   sort later, and a named segment always outweighs its unnamed twin at the same position
 *   (including the first: 'icon.next' (4) beats 'icon' (2) deterministically).
 *
 * Comma keys are weighed by their FIRST part as a representative — parts of a comma group
 * share the same layer prefix (ThemeStore prefixes each part uniformly) and target the same
 * component type (enforced by lint). The merge pipeline sorts comma groups by the part that
 * actually MATCHED the treePath (see matchSelectors), which is exact even when parts have
 * different path depths.
 */
function selectorWeight(key: string): number {
	const selector = key.includes(',') ? key.split(/\s*,\s*/)[0] : key;
	const prefixWeight = (selector.includes('*') ? 0 : 2000) + (selector.match(/\([MDT]\)/) ? 1000 : 0);

	return selector
		.split(' ')
		.map((segment, i) => ((i + 1) * 2) ** (segment.includes('.') ? 2 : 1))
		.reduce((acc, val) => acc + val, prefixWeight);
}

/**
 * Comparator ordering selectors so later-applied (higher-priority) selectors sort last.
 * See selectorWeight for the weight model. Equal weights keep insertion order (stable sort).
 */
export function sortSelectors(a: string, b: string): number {
	return selectorWeight(a) - selectorWeight(b);
}

/**
 * Expand comma-separated selector keys into individual entries, preserving the original
 * key for value lookup. Splits on comma with optional surrounding whitespace to handle
 * both 'a, b' and 'a,b' formats.
 */
function expandCommaSelectors(selectors: string[]): { original: string; selector: string }[] {
	const expandedSelectors: { original: string; selector: string }[] = [];
	for (const key of selectors) {
		if (key.includes(',')) {
			const parts = key.split(/\s*,\s*/);
			for (const part of parts) {
				expandedSelectors.push({ original: key, selector: part });
			}
		} else {
			expandedSelectors.push({ original: key, selector: key });
		}
	}

	return expandedSelectors;
}

/** A selector match: the original theme key (for value lookup) and the comma part that matched. */
interface MatchedSelector {
	original: string;
	matchedPart: string;
}

const DEV_MODE = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';
// dev-mode legacy-match warnings are emitted once per selector/treePath pair
const warnedLegacySelectors = new Set<string>();

/**
 * Return every selector part that applies to the given treePath, in first-match order.
 * Comma groups yield one entry PER MATCHING PART (each carrying the original key for value
 * lookup), so a comma group behaves exactly like the equivalent individual selectors —
 * including sort position and specificity classification by the matched part.
 *
 * Matching phases: expand comma groups → match the LAST selector segment against the
 * component type/name (exact, after stripping the '*'/'(M|T|D)' layer prefixes) → verify
 * the OTHER (ancestor) segments appear in the treePath's ancestors as an ordered
 * subsequence: left to right, each segment matching strictly after the previous one, and
 * never matching the final (component) segment. Non-adjacent (descendant) matches are
 * allowed; duplicated selector segments require genuinely duplicated treePath segments.
 *
 * In dev mode, a selector that only matches under the legacy rules (unordered, duplicate-
 * tolerant) logs a console warning so out-of-order merchant selectors surface immediately.
 */
function matchSelectors(themeComponents: ThemeComponents, treePath: string): MatchedSelector[] {
	const expandedSelectors = expandCommaSelectors(Object.keys(themeComponents));

	const paths = treePath.split(' ');
	const componentTypeAndName = paths.slice(-1).pop() ?? ''; // `?? ''` satisfies TS only; split(' ') always yields ≥1 element
	const [componentType, componentName] = componentTypeAndName.split('.');

	const mappedSplitTreePath = paths.map((path) => {
		const [type, name] = path.split('.');
		return {
			type,
			name,
			path,
		};
	});

	// ancestor segments must appear in order, each strictly after the previous match, and may
	// only match treePath segments BEFORE the component itself (the last segment)
	const matchesAncestorsOrdered = (split: string[]): boolean => {
		let cursor = 0;
		for (let s = 0; s < split.length; s++) {
			const value = split[s];
			let found = false;

			for (let i = cursor; i < mappedSplitTreePath.length - 1; i++) {
				const pathValue = mappedSplitTreePath[i];

				if (value === pathValue.path || value === pathValue.type) {
					cursor = i + 1;
					found = true;
					break;
				}
			}

			if (!found) return false;
		}

		return true;
	};

	// the pre-fix matching rules: every segment present ANYWHERE in the treePath (unordered,
	// duplicate-tolerant, component segment included) — used only for the dev-mode warning
	const matchesAncestorsLegacy = (split: string[]): boolean => {
		for (let s = 0; s < split.length; s++) {
			const value = split[s];
			let found = false;

			for (let i = 0; i < mappedSplitTreePath.length; i++) {
				const pathValue = mappedSplitTreePath[i];

				if (value === pathValue.path || value === pathValue.type) {
					found = true;
					break;
				}
			}

			if (!found) return false;
		}

		return true;
	};

	let filtered: { original: string; selector: string }[];

	if (componentName) {
		filtered = expandedSelectors.filter(({ selector: key }) => {
			const keys = key.split(' ');
			const lastkey = keys[keys.length - 1].replace(/\*?(\([MDT]\))?/g, '');
			if (lastkey == componentType || lastkey == `${componentType}.${componentName}`) {
				return true;
			}
		});
	} else {
		filtered = expandedSelectors.filter(({ selector: key }) => {
			// exact last-segment compare after stripping the layer prefixes ('*'/'(M|T|D)') —
			// mirrors the named branch; a selector for a longer type sharing a suffix
			// ('multiselect') no longer leaks onto a shorter type ('select')
			const keys = key.split(' ');
			const lastkey = keys[keys.length - 1].replace(/\*?(\([MDT]\))?/g, '');
			return lastkey === componentType;
		});
	}

	const matched = filtered.filter(({ selector }) => {
		// when considering matches, we do not care about the base theme prefix "*" nor the responsive prefix "(M)" || "(T)" || "(D)"
		// these are automatically added by the ThemeStore in Snap Templates in order to preserve merge ordering of these overrides
		const split = selector
			.replace(/\*?(\([MDT]\))?/g, '')
			.split(' ')
			.slice(0, -1);

		if (split.length == 0) return true;

		const matches = matchesAncestorsOrdered(split);

		if (DEV_MODE && !matches && matchesAncestorsLegacy(split)) {
			const warnKey = `${selector}|${treePath}`;
			if (!warnedLegacySelectors.has(warnKey)) {
				warnedLegacySelectors.add(warnKey);
				// eslint-disable-next-line no-console
				console.warn(
					`Snap Templates: theme selector '${selector}' does not match treePath '${treePath}' — ` +
						`ancestor segments must appear in the same order as the component tree. ` +
						`This selector would have matched under the previous (unordered) rules; reorder its segments to restore it.`
				);
			}
		}

		return matches;
	});

	return matched.map(({ original, selector }) => ({ original, matchedPart: selector }));
}

/** Memoized selector matching for one (themeComponents, treePath) pair. */
interface SelectorMatchEntry {
	/** raw matches in first-match order (the public filterSelectors view) */
	rawMatches: MatchedSelector[];
	/** matches sorted by the matched part's weight (the pipeline view) */
	matches: MatchedSelector[];
	/** sorted subset whose matched part contains '*' */
	baseSelectors: MatchedSelector[];
	/** sorted subset whose matched part has no '*' */
	overrideSelectors: MatchedSelector[];
}

const EMPTY_SELECTOR_MATCHES: SelectorMatchEntry = { rawMatches: [], matches: [], baseSelectors: [], overrideSelectors: [] };

// PERF: selector matching is pure in (themeComponents, treePath) and runs on every render of
// every component, so results are memoized per components-object reference. Theme objects are
// replaced (not mutated) when a theme changes — ThemeStore's computed getter emits fresh
// objects — so a WeakMap keyed on the components object invalidates naturally and cannot leak.
// The cached arrays are shared: callers must never mutate them.
const selectorMatchCache = new WeakMap<object, Map<string, SelectorMatchEntry>>();

function getSelectorMatches(themeComponents: ThemeComponents | undefined, treePath: string): SelectorMatchEntry {
	if (!themeComponents) return EMPTY_SELECTOR_MATCHES;

	// allocation-free emptiness check (common case: themes without components)
	let isEmpty = true;
	for (const key in themeComponents) {
		if (key) {
			isEmpty = false;
			break;
		}
	}
	if (isEmpty) return EMPTY_SELECTOR_MATCHES;

	let byPath = selectorMatchCache.get(themeComponents);
	if (!byPath) {
		byPath = new Map();
		selectorMatchCache.set(themeComponents, byPath);
	}

	let entry = byPath.get(treePath);
	if (!entry) {
		const rawMatches = matchSelectors(themeComponents, treePath);
		// decorate-sort-undecorate: weights are computed once per match instead of per comparison
		const matches = rawMatches
			.map((match) => ({ match, weight: selectorWeight(match.matchedPart) }))
			.sort((a, b) => a.weight - b.weight)
			.map(({ match }) => match);
		entry = {
			rawMatches,
			matches,
			baseSelectors: matches.filter(({ matchedPart }) => matchedPart.includes('*')),
			overrideSelectors: matches.filter(({ matchedPart }) => !matchedPart.includes('*')),
		};
		byPath.set(treePath, entry);
	}

	return entry;
}

// PERF: a parent's finished theme props map is shared by reference with every child, so the
// value Set for the T2 cross-key lookup is built once per map. NaN is excluded to preserve
// strict-equality semantics (Set.has would match NaN; the previous indexOf never did).
const parentThemeValuesSetCache = new WeakMap<Map<string, any>, Set<any>>();

function getParentThemeValuesSet(parentThemePropsMap: Map<string, any>): Set<any> {
	let values = parentThemeValuesSetCache.get(parentThemePropsMap);
	if (!values) {
		const built = new Set<any>();
		parentThemePropsMap.forEach((value) => {
			if (value === value) {
				built.add(value);
			}
		});
		parentThemeValuesSetCache.set(parentThemePropsMap, built);
		values = built;
	}

	return values;
}

/**
 * Return the theme component keys whose selector applies to the given treePath, in
 * first-match order, deduplicated back to original keys (a comma group returns the whole
 * original key once when any of its parts match). Callers sort the result with
 * sortSelectors. The merge pipeline uses getSelectorMatches directly for exact per-part
 * comma semantics; this deduplicated view is the public API (also used by ThemeStore).
 */
export function filterSelectors(themeComponents: ThemeComponents, treePath: string): string[] {
	const seen = new Set<string>();
	const result: string[] = [];
	for (const { original } of getSelectorMatches(themeComponents, treePath).rawMatches) {
		if (!seen.has(original)) {
			seen.add(original);
			result.push(original);
		}
	}

	return result;
}
