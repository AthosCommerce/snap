/**
 * Layout banner resolution shared by the layout-banners and hidden-layout-banners rules.
 *
 * Merchandising banners returned by the API only render where a template's layouts place them
 * ('banner.header' in a toolbar, 'content' in an autocomplete column, ...). The default layouts
 * place them, but a `theme.overrides` layout replaces the default wholesale, and TypeScript can't
 * require banners without also pinning where they go. So this check statically resolves every
 * used search/autocomplete template's layouts at every breakpoint - once from the defaults alone
 * and once with the user's overrides applied - and reports overrides that leave a banner the
 * defaults rendered with nowhere to render.
 *
 * Comparing against the defaults (rather than requiring every banner everywhere) means:
 *  - moving a banner to another layout of the same template is fine, since it still renders
 *  - overriding one layout never reports banners that live in a layout the user didn't touch
 *  - banners a default layout doesn't render either (SearchHorizontal's sidebar is hidden on
 *    desktop, autocomplete's 'mobile' layout has no facets) are never required
 *
 * The resolution mirrors the runtime (see packages/snap-preact/AGENTS.md): ThemeStore's layers
 * and `$children` flattening, mergeProps' selector matching and weights, and the template
 * internals that place banners. Anything that can't be resolved statically (spreads, variables,
 * non-literal targets) fails open - it's assumed to render every banner.
 */

const { findProperty, getPropertyName } = require('./ast.cjs');

// unresolvable value - treated as rendering every banner
const UNKNOWN = Symbol('unknown');
// set on a static object whose literal had a spread or computed key - keys not listed may still be set
const OPEN_KEYS = Symbol('openKeys');

const BANNERS = ['header', 'banner', 'footer', 'left'];
const BREAKPOINTS = ['default', 'mobile', 'tablet', 'desktop'];
// ascending widths - 'default' is active when the viewport is wider than every breakpoint
const BREAKPOINT_ORDER = ['mobile', 'tablet', 'desktop', 'default'];

// ThemeStore layer weights - see selectorWeight in components/src/utilities/mergeProps.ts
const LAYER_WEIGHT = { baseDefault: 0, baseBreakpoint: 1000, userDefault: 2000, userBreakpoint: 3000 };

// ---------------------------------------------------------------------------------------------
// Default layouts - these mirror the source and must change with it
// ---------------------------------------------------------------------------------------------

// components/src/components/Templates/Search/Search.tsx (subProps). SearchCollapsible and
// SearchHorizontal render <Search alias="..."> so they share these, rooted at their alias.
const SEARCH_TEMPLATES = { Search: 'search', SearchCollapsible: 'searchCollapsible', SearchHorizontal: 'searchHorizontal' };
const SEARCH_TOOLBAR_LAYOUTS = {
	top: () => [['banner.header'], ['searchHeader', '_']],
	middle: (isMobile) =>
		isMobile
			? [['tabSelection'], ['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
			: [['tabSelection'], ['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
	bottom: () => [['banner.footer'], ['_', 'pagination', '_']],
};
const SEARCH_SIDEBAR_LAYOUT = [['filterSummary'], ['facets'], ['banner.left']];
// Search's default mobileDisplayAt is the tablet breakpoint: the mobile sidebar (in a slideout,
// at '<alias> slideout sidebar') renders at the mobile and tablet breakpoints
const SEARCH_MOBILE_DISPLAY_AT = { upTo: 'tablet' };

// components/src/components/Templates/Autocomplete*/Autocomplete*.tsx (defaultProps.layout and
// the treePath segment each passes to AutocompleteLayout)
const AUTOCOMPLETE_TEMPLATES = {
	AutocompleteModal: { alias: 'autocompleteModal', wrapper: 'modal', layout: [['c1', 'c2', 'c3']] },
	AutocompleteFixed: { alias: 'autocompleteFixed', wrapper: 'modal', layout: [['c1', 'c2', 'c3']] },
	AutocompleteSlideout: {
		alias: 'autocompleteSlideout',
		wrapper: 'slideout',
		layout: [['button.see-more'], ['termsList'], ['tabSelection'], ['content']],
	},
};
// components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx (defaultProps and
// the prebuilt string layouts)
const AUTOCOMPLETE_LAYOUT_COLUMNS = {
	column1: { layout: ['termsList'] },
	column2: { layout: ['facets'] },
	column3: { layout: [['tabSelection'], ['content'], ['_', 'button.see-more']] },
};
const AUTOCOMPLETE_PREBUILT_LAYOUTS = {
	terms: [['termsList'], ['no-results'], ['_', 'button.see-more']],
	mobile: [['termsList'], ['content'], ['_', 'button.see-more']],
	tablet: [['c1', 'c3']],
	desktop: [['c1', 'c2', 'c3']],
};

// components/src/themes/themeComponents/*.ts - spread by every theme. Only layout-relevant props.
const SHARED_THEME_SELECTORS = {
	default: {
		'searchCollapsible toolbar.top': {
			layout: [['banner.header'], ['searchHeader'], ['banner.banner'], ['button.sidebar-toggle', 'paginationInfo', '_', 'perPage', 'sortBy']],
		},
		'searchCollapsible toolbar.middle': { layout: [] },
		'searchCollapsible toolbar.bottom': { layout: [['banner.footer'], ['_', 'pagination', '_']] },
		searchHorizontal: { hideSidebar: true },
		'searchHorizontal toolbar.top': { layout: [['_', 'searchHeader', '_'], ['banner.header']] },
		'searchHorizontal toolbar.middle': {
			layout: [['filterSummary'], ['facetsHorizontal', '_', 'sortBy'], ['banner.banner'], ['paginationInfo', '_']],
		},
		'searchHorizontal toolbar.bottom': { layout: [['banner.footer'], ['_', 'pagination', '_']] },
		'searchHorizontal sidebar': { layout: ['filterSummary', 'facets', 'banner.left'] },
	},
	mobile: {
		'searchCollapsible toolbar.top': { layout: [['banner.header'], ['searchHeader', '_']] },
		'searchCollapsible toolbar.middle': { layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']] },
		searchHorizontal: { hideSidebar: false },
		'searchHorizontal toolbar.top': { layout: [['banner.header'], ['searchHeader', '_']] },
		'searchHorizontal toolbar.middle': { layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']] },
		autocompleteFixed: { layout: 'mobile' },
		autocompleteModal: { layout: 'mobile' },
		autocompleteSlideout: { layout: 'mobile' },
	},
	tablet: {
		'searchCollapsible toolbar.top': { layout: [['banner.header'], ['searchHeader', '_']] },
		'searchCollapsible toolbar.middle': { layout: [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']] },
		autocompleteFixed: { layout: [['c1', 'c3']] },
		autocompleteModal: { layout: [['c1', 'c3']] },
	},
	desktop: {},
};

// components/src/themes/<theme>/components/templates/*.ts - per-theme changes to the shared
// selectors above, merged over them per selector. Themes not listed only use the shared ones.
const THEME_SELECTORS = {
	pike: {
		default: {
			search: { mobileDisplayAt: { upTo: 'mobile' } },
			autocompleteFixed: { layout: 'desktop' },
			autocompleteModal: { layout: 'desktop' },
			autocompleteSlideout: { layout: 'mobile' },
		},
		mobile: {
			autocompleteFixed: { layout: 'mobile' },
			autocompleteModal: { layout: 'mobile' },
			autocompleteSlideout: { layout: 'mobile' },
		},
		tablet: {
			autocompleteFixed: { layout: 'desktop' },
			autocompleteModal: { layout: 'desktop' },
			autocompleteSlideout: { layout: 'mobile' },
		},
		desktop: {
			autocompleteFixed: { layout: 'desktop' },
			autocompleteModal: { layout: 'desktop' },
			autocompleteSlideout: { layout: 'mobile' },
		},
	},
};

const SEARCH_TEMPLATE_PROPS = ['hideSidebar', 'hideTopToolbar', 'hideMiddleToolbar', 'hideBottomToolbar', 'mobileDisplayAt'];
const SEARCH_SLOT_PROPS = ['layout', 'customComponent'];
const AUTOCOMPLETE_PROPS = ['layout', 'column1', 'column2', 'column3', 'column4', 'excludeBanners'];
// props that hide banners rather than lay them out. Hiding is often deliberate, so these are
// reported by the separate hidden-layout-banners rule, which projects run as a warning.
const HIDING_PROPS = new Set(['hideSidebar', 'hideTopToolbar', 'hideMiddleToolbar', 'hideBottomToolbar', 'excludeBanners']);

// the components and props that decide where banners render - a theme setting any of these must
// be mirrored in the tables above (checked against the real themes by
// components/src/themes/layoutBannerDefaults.test.ts)
const BANNER_LAYOUT_COMPONENTS = [
	...Object.values(SEARCH_TEMPLATES),
	'toolbar',
	'sidebar',
	...Object.values(AUTOCOMPLETE_TEMPLATES).map(({ alias }) => alias),
	'autocompleteLayout',
];
const BANNER_LAYOUT_PROPS = [...SEARCH_TEMPLATE_PROPS, 'layout', ...AUTOCOMPLETE_PROPS.filter((prop) => prop !== 'layout')];

/**
 * Report theme overrides that stop a merchandising banner the default layouts render from
 * rendering, for every search/autocomplete template the config targets. `kind` picks which
 * overrides get reported: 'layout' for layouts and columns that leave a banner out
 * (missingLayoutBanners), 'hidden' for hide props (hiddenLayoutBanners).
 */
function validateLayoutBanners(configObjectExpression, context, kind) {
	const theme = readObjectProperty(configObjectExpression, 'theme');
	if (!theme || theme === UNKNOWN) return;
	const overrides = readObjectProperty(theme, 'overrides');
	if (!overrides || overrides === UNKNOWN) return;

	const userLayers = collectUserLayers(overrides);
	if (!userLayers) return;

	// themes differ in their default layouts, so without knowing which one there's nothing to compare against
	const themeName = extendedThemeName(theme);
	if (themeName === UNKNOWN) return;
	const baseLayers = buildBaseLayers(themeName);

	// one check per template root - a template rendered under several tabs is checked once per tab
	const checks = [];
	for (const { template, tab } of collectUsedTemplates(configObjectExpression, 'search', SEARCH_TEMPLATES)) {
		const root = templateRoot(SEARCH_TEMPLATES[template], tab);
		checks.push({
			template,
			tab,
			props: [...SEARCH_TEMPLATE_PROPS, ...SEARCH_SLOT_PROPS],
			evaluate: (selectors, breakpoint) => evaluateSearch(root, breakpoint, selectors),
		});
	}
	for (const { template, tab } of collectUsedTemplates(configObjectExpression, 'autocomplete', AUTOCOMPLETE_TEMPLATES)) {
		const definition = { ...AUTOCOMPLETE_TEMPLATES[template], alias: templateRoot(AUTOCOMPLETE_TEMPLATES[template].alias, tab) };
		checks.push({ template, tab, props: AUTOCOMPLETE_PROPS, evaluate: (selectors) => evaluateAutocomplete(definition, selectors) });
	}
	if (checks.length === 0) return;

	// culprit (entry + prop) -> { entry, prop, missing: Map<banner, Map<check, Set<breakpoint>>> }
	const culprits = new Map();

	for (const breakpoint of BREAKPOINTS) {
		if (userLayers.opaque.has(breakpoint)) continue;

		const baseSelectors = selectorsFor(baseLayers, null, breakpoint);
		const allSelectors = selectorsFor(baseLayers, userLayers, breakpoint);

		for (const check of checks) {
			const expected = check.evaluate(baseSelectors, breakpoint);
			const actual = check.evaluate(allSelectors, breakpoint);
			const missing = BANNERS.filter((banner) => expected.has(banner) && !actual.has(banner));
			if (missing.length === 0) continue;

			const setters = userSetters(allSelectors, check.props);
			for (const banner of missing) {
				for (const { entry, prop } of blameSetters(check, breakpoint, allSelectors, setters, banner)) {
					const key = setterKey(entry, prop);
					if (!culprits.has(key)) culprits.set(key, { entry, prop, missing: new Map() });
					const byCheck = culprits.get(key).missing;
					if (!byCheck.has(banner)) byCheck.set(banner, new Map());
					if (!byCheck.get(banner).has(check)) byCheck.get(banner).set(check, new Set());
					byCheck.get(banner).get(check).add(breakpoint);
				}
			}
		}
	}

	for (const { entry, prop, missing } of culprits.values()) {
		if (HIDING_PROPS.has(prop) !== (kind === 'hidden')) continue;

		const banners = BANNERS.filter((banner) => missing.has(banner));
		const where = new Map();
		for (const banner of banners) {
			for (const [check, breakpoints] of missing.get(banner)) {
				if (!where.has(check)) where.set(check, new Set());
				breakpoints.forEach((breakpoint) => where.get(check).add(breakpoint));
			}
		}

		const propNode = entry.propNodes[prop];
		context.report({
			node: propNode ? propNode.key : entry.keyNode,
			messageId: kind === 'hidden' ? 'hiddenLayoutBanners' : 'missingLayoutBanners',
			data: {
				prop,
				selector: entry.selector,
				banners: banners.map((banner) => `'banner.${banner}'`).join(', '),
				where: describeWhere(where, checks),
			},
		});
	}
}

/**
 * The user override props to blame for a banner that no longer renders. Starting from the
 * defaults - every user setter of the template's layout props removed, so the banner renders -
 * the setters are added back one at a time, and each one the banner doesn't survive is blamed
 * (and left out again). That blames every override that drops the banner from where the defaults
 * render it, including one a more specific override shadows, and never one that leaves it alone.
 */
function blameSetters(check, breakpoint, selectors, setters, banner) {
	const removed = new Set(setters.map(({ entry, prop }) => setterKey(entry, prop)));
	// the banner renders with no user setters at all, unless something unblameable dropped it
	if (!check.evaluate(withoutProps(selectors, removed), breakpoint).has(banner)) return [];

	const blamed = [];
	for (const setter of setters) {
		const key = setterKey(setter.entry, setter.prop);
		removed.delete(key);
		if (!check.evaluate(withoutProps(selectors, removed), breakpoint).has(banner)) {
			removed.add(key);
			blamed.push(setter);
		}
	}
	return blamed;
}

/**
 * Every user override entry setting one of `props`, in layer and source order, as a blame
 * candidate. UNKNOWN values already count as rendering everything, so they're never to blame,
 * and entries targeting no banner layout component can't change a template's banners.
 */
function userSetters(selectors, props) {
	const setters = [];
	for (const { entry, source } of selectors) {
		if (source !== 'user' || !entry.parts.some(targetsBannerLayout)) continue;
		for (const prop of props) {
			if (Object.prototype.hasOwnProperty.call(entry.props, prop) && entry.props[prop] !== UNKNOWN) setters.push({ entry, prop });
		}
	}
	return setters;
}

function setterKey(entry, prop) {
	return `${entry.id} ${prop}`;
}

/** Whether a selector (no comma) targets a component whose props decide where banners render. */
function targetsBannerLayout(selector) {
	return BANNER_LAYOUT_COMPONENTS.includes(selector.trim().split(' ').pop().split('.')[0]);
}

// ---------------------------------------------------------------------------------------------
// Template evaluation: which banners render for one template at one breakpoint
// ---------------------------------------------------------------------------------------------

/**
 * Banners rendered by a Search/SearchCollapsible/SearchHorizontal template (rooted at `root`, its
 * alias plus any tab name): its three toolbars and its sidebar, unless hidden.
 */
function evaluateSearch(root, breakpoint, selectors) {
	const resolve = (treePath, start, names) => resolveProps(treePath, start, selectors, names);

	// the selected layout option's overrides apply over every theme selector (useLayoutOptions) -
	// when the user's options can change a layout, which option is selected decides what renders
	const { layoutOptions } = resolve(root, defaultsFor(['layoutOptions'], {}), ['layoutOptions']);
	if (layoutOptions.source === 'user' && layoutOptionsTouchBanners(layoutOptions.value)) return new Set(BANNERS);

	const templateProps = resolve(root, defaultsFor(SEARCH_TEMPLATE_PROPS, { mobileDisplayAt: SEARCH_MOBILE_DISPLAY_AT }), SEARCH_TEMPLATE_PROPS);
	const isHidden = (name) => templateProps[name].value === true;

	const banners = new Set();
	// an unresolvable mobileDisplayAt could be either - evaluate both and keep whatever renders in either
	for (const isMobile of isMobileAt(breakpoint, templateProps.mobileDisplayAt.value)) {
		const slots = [
			{ hiddenBy: 'hideTopToolbar', treePath: `${root} toolbar.top`, layout: SEARCH_TOOLBAR_LAYOUTS.top(isMobile) },
			{ hiddenBy: 'hideMiddleToolbar', treePath: `${root} toolbar.middle`, layout: SEARCH_TOOLBAR_LAYOUTS.middle(isMobile) },
			{ hiddenBy: 'hideBottomToolbar', treePath: `${root} toolbar.bottom`, layout: SEARCH_TOOLBAR_LAYOUTS.bottom(isMobile) },
			{ hiddenBy: 'hideSidebar', treePath: isMobile ? `${root} slideout sidebar` : `${root} sidebar`, layout: SEARCH_SIDEBAR_LAYOUT },
		];
		for (const slot of slots) {
			if (isHidden(slot.hiddenBy)) continue;
			const slotProps = resolve(slot.treePath, defaultsFor(SEARCH_SLOT_PROPS, { layout: slot.layout }), SEARCH_SLOT_PROPS);
			// a customComponent replaces the toolbar/sidebar - what it renders is unknown
			const layout = slotProps.customComponent.value === undefined ? slotProps.layout.value : UNKNOWN;
			layoutModuleBanners(layout).forEach((banner) => banners.add(banner));
		}
	}

	return banners;
}

/**
 * Banners rendered by an Autocomplete* template (`alias` here is its root: the alias plus any tab
 * name). The template's props (layout, columns, excludeBanners) are passed through to
 * AutocompleteLayout, whose own selectors apply on top.
 */
function evaluateAutocomplete({ alias, wrapper, layout }, selectors) {
	const templateProps = resolveProps(
		alias,
		defaultsFor(AUTOCOMPLETE_PROPS, { layout, ...AUTOCOMPLETE_LAYOUT_COLUMNS }),
		selectors,
		AUTOCOMPLETE_PROPS
	);
	const props = resolveProps(`${alias} ${wrapper} autocompleteLayout`, templateProps, selectors, AUTOCOMPLETE_PROPS);

	return autocompleteBanners(props);
}

/**
 * Whether a Search template's `layoutOptions` can change where banners render: any option whose
 * overrides set a layout-relevant prop on a banner layout component, nest `$children`, or can't
 * be read statically.
 */
function layoutOptionsTouchBanners(options) {
	if (options === undefined || options === null) return false;
	if (!Array.isArray(options)) return true;

	// a value that can't be read, or an object literal whose spread may set `key`
	const opaque = (value, key) => value === UNKNOWN || Boolean(value && typeof value === 'object' && value[OPEN_KEYS] && !(key in value));

	return options.some((option) => {
		if (!option || typeof option !== 'object') return option === UNKNOWN;
		if (opaque(option, 'overrides')) return true;
		const { overrides } = option;
		if (overrides === undefined || overrides === null) return false;
		if (typeof overrides !== 'object' || opaque(overrides, 'components')) return true;
		const { components } = overrides;
		if (components === undefined || components === null) return false;
		if (typeof components !== 'object' || components === UNKNOWN || components[OPEN_KEYS]) return true;

		return Object.entries(components).some(([selector, props]) => {
			if (!props || typeof props !== 'object' || props === UNKNOWN || props[OPEN_KEYS] || '$children' in props) return true;
			return selector.split(/\s*,\s*/).some(targetsBannerLayout) && BANNER_LAYOUT_PROPS.some((prop) => prop in props);
		});
	});
}

/** Banners an AutocompleteLayout renders - see findModule in AutocompleteLayout.tsx. */
function autocompleteBanners(props) {
	const excludeBanners = props.excludeBanners.value === true;
	const banners = new Set();
	const addAll = () => BANNERS.forEach((banner) => banners.add(banner));

	const visit = (module, depth) => {
		if (module === UNKNOWN) return addAll();
		if (Array.isArray(module)) return module.forEach((child) => visit(child, depth));
		if (typeof module !== 'string') return;

		const column = /^c([1-4])$/.exec(module);
		if (column) {
			const value = props[`column${column[1]}`].value;
			if (value === UNKNOWN || (value && value[OPEN_KEYS] && !('layout' in value))) return addAll();
			// columns rendered from inside a column are possible but never nest deeply
			if (value && Array.isArray(value.layout) && depth < 4) value.layout.forEach((child) => visit(child, depth + 1));
			else if (value && value.layout === UNKNOWN) addAll();
			return;
		}
		// 'content' and 'facets' render banners implicitly, explicit banner.* modules always render
		if (module === 'content' && !excludeBanners) ['header', 'banner', 'footer'].forEach((banner) => banners.add(banner));
		if ((module === 'facets' || module === 'facetsHorizontal') && !excludeBanners) banners.add('left');
		if (module.startsWith('banner.') && BANNERS.includes(module.slice(7))) banners.add(module.slice(7));
	};

	let layout = props.layout.value;
	// an unsupported prebuilt name falls back to an empty layout
	if (typeof layout === 'string') layout = AUTOCOMPLETE_PREBUILT_LAYOUTS[layout] || [];
	if (layout === UNKNOWN || Array.isArray(layout)) visit(layout, 0);

	return banners;
}

/** Banners in a toolbar/sidebar layout - Layout.tsx renders every banner.* module. */
function layoutModuleBanners(layout) {
	if (layout === UNKNOWN) return new Set(BANNERS);
	const banners = new Set();
	const visit = (module) => {
		if (module === UNKNOWN) BANNERS.forEach((banner) => banners.add(banner));
		else if (Array.isArray(module)) module.forEach(visit);
		else if (typeof module === 'string' && module.startsWith('banner.') && BANNERS.includes(module.slice(7))) banners.add(module.slice(7));
	};
	if (Array.isArray(layout)) layout.forEach(visit);
	return banners;
}

/**
 * Whether Search renders its mobile layout (sidebar in a slideout) at a breakpoint. Returns the
 * possible values - both when mobileDisplayAt can't be resolved statically.
 */
function isMobileAt(breakpoint, mobileDisplayAt) {
	if (mobileDisplayAt && typeof mobileDisplayAt === 'object' && mobileDisplayAt.upTo) {
		return [BREAKPOINT_ORDER.indexOf(breakpoint) <= BREAKPOINT_ORDER.indexOf(mobileDisplayAt.upTo)];
	}
	if (mobileDisplayAt === true) return [true];
	if (!mobileDisplayAt && mobileDisplayAt !== UNKNOWN) return [false];
	return [true, false];
}

// ---------------------------------------------------------------------------------------------
// Selector resolution - mirrors ThemeStore + mergeProps
// ---------------------------------------------------------------------------------------------

/**
 * Resolve `names` for the component at `treePath`: start from `start`, then apply every
 * matching selector's props in weight order (later wins). Each resolved value carries its
 * source so blame can be traced back to the user override entry that set it.
 */
function resolveProps(treePath, start, selectors, names) {
	const matches = [];
	selectors.forEach((selector, order) => {
		// a comma group applies once per matching part, weighed by the part that matched
		for (const part of selector.entry.parts) {
			if (selectorMatches(part, treePath)) matches.push({ selector, order, weight: selector.layerWeight + segmentWeight(part) });
		}
	});
	matches.sort((a, b) => a.weight - b.weight || a.order - b.order);

	const resolved = { ...start };
	for (const { selector } of matches) {
		const { props } = selector.entry;
		for (const name of names) {
			if (Object.prototype.hasOwnProperty.call(props, name)) {
				resolved[name] = { value: props[name], source: selector.source, entry: selector.entry, prop: name };
			} else if (props[OPEN_KEYS]) {
				resolved[name] = { value: UNKNOWN, source: selector.source, entry: selector.entry, prop: name };
			}
		}
	}
	return resolved;
}

/**
 * Whether one selector (no comma) applies to a treePath: its last segment names the component
 * (type or type.name), and its other segments appear among the ancestors in order.
 */
function selectorMatches(selector, treePath) {
	const segments = selector.split(' ');
	const last = segments.pop();
	const path = treePath.split(' ');
	const component = path.pop();
	const [componentType, componentName] = component.split('.');
	if (last !== componentType && !(componentName && last === component)) return false;

	let cursor = 0;
	for (const segment of segments) {
		let found = false;
		for (let i = cursor; i < path.length; i++) {
			if (segment === path[i] || segment === path[i].split('.')[0]) {
				cursor = i + 1;
				found = true;
				break;
			}
		}
		if (!found) return false;
	}
	return true;
}

/** Specificity part of mergeProps' selectorWeight - deeper and named segments weigh more. */
function segmentWeight(selector) {
	return selector.split(' ').reduce((weight, segment, i) => weight + ((i + 1) * 2) ** (segment.includes('.') ? 2 : 1), 0);
}

/** The selectors in play at a breakpoint, in layer order. `userLayers` is null for the defaults alone. */
function selectorsFor(baseLayers, userLayers, breakpoint) {
	const selectors = baseLayers.default.map((entry) => ({ entry, source: 'base', layerWeight: LAYER_WEIGHT.baseDefault }));
	if (breakpoint !== 'default') {
		baseLayers[breakpoint].forEach((entry) => selectors.push({ entry, source: 'base', layerWeight: LAYER_WEIGHT.baseBreakpoint }));
	}
	if (userLayers) {
		userLayers.default.forEach((entry) => selectors.push({ entry, source: 'user', layerWeight: LAYER_WEIGHT.userDefault }));
		if (breakpoint !== 'default') {
			userLayers[breakpoint].forEach((entry) => selectors.push({ entry, source: 'user', layerWeight: LAYER_WEIGHT.userBreakpoint }));
		}
	}
	return selectors;
}

/** The same selectors with the `removed` setters (setterKey) dropped - "what if these overrides didn't set them". */
function withoutProps(selectors, removed) {
	if (removed.size === 0) return selectors;
	return selectors.map((selector) => {
		const names = Object.keys(selector.entry.props).filter((prop) => removed.has(setterKey(selector.entry, prop)));
		if (names.length === 0) return selector;
		const props = { ...selector.entry.props };
		names.forEach((prop) => delete props[prop]);
		return { ...selector, entry: { ...selector.entry, props } };
	});
}

function defaultsFor(names, values) {
	const resolved = {};
	for (const name of names) resolved[name] = { value: values[name], source: 'default' };
	return resolved;
}

function buildBaseLayers(themeName) {
	const themeSelectors = THEME_SELECTORS[themeName] || {};
	const layers = {};
	for (const breakpoint of BREAKPOINTS) {
		const shared = SHARED_THEME_SELECTORS[breakpoint];
		const theme = themeSelectors[breakpoint] || {};
		layers[breakpoint] = Array.from(new Set([...Object.keys(shared), ...Object.keys(theme)])).map((selector) => ({
			id: `base ${breakpoint} ${selector}`,
			selector,
			parts: [selector],
			props: { ...shared[selector], ...theme[selector] },
			propNodes: {},
		}));
	}
	return layers;
}

// ---------------------------------------------------------------------------------------------
// Reading the config
// ---------------------------------------------------------------------------------------------

/**
 * The user's override entries per breakpoint, flattened like ThemeStore does (`$children` nested
 * selectors joined with spaces, comma parts cross-multiplied). A selector reached more than once
 * (written directly and through `$children`, say) is merged into one entry the way ThemeStore
 * merges it: in the first one's position, with later props winning. A breakpoint whose selector
 * map can't be read statically (a spread, a computed key, not an object literal) is marked opaque
 * and skipped; when `default` is opaque nothing can be checked, so null is returned.
 */
function collectUserLayers(overridesObjectExpression) {
	if (overridesObjectExpression.properties.some((prop) => prop.type !== 'Property' || getStaticPropertyName(prop) === null)) return null;

	let nextId = 0;
	const layers = { opaque: new Set() };

	for (const breakpoint of BREAKPOINTS) {
		layers[breakpoint] = [];
		const breakpointProp = findProperty(overridesObjectExpression, breakpoint);
		if (!breakpointProp) continue;

		const selectorMap = unwrapTs(breakpointProp.value);
		// flattened selector -> entry, in first-reached order like ThemeStore's flattened object
		const entries = selectorMap.type === 'ObjectExpression' ? new Map() : null;
		const addEntry = (selector, parts, props, propNodes, keyNode) => {
			const existing = entries.get(selector);
			if (!existing) {
				entries.set(selector, { id: nextId++, selector, parts, props, propNodes, keyNode });
				return;
			}
			// a spread in the later props may replace any earlier prop it doesn't list after itself
			if (props[OPEN_KEYS]) Object.keys(existing.props).forEach((name) => !(name in props) && (existing.props[name] = UNKNOWN));
			Object.assign(existing.props, props);
			Object.assign(existing.propNodes, propNodes);
		};
		const flatten = (mapNode, parentParts) => {
			for (const prop of mapNode.properties) {
				const key = prop.type === 'Property' ? getStaticPropertyName(prop) : null;
				if (key === null) return false;

				const parts = key.split(/\s*,\s*/);
				const fullParts = parentParts ? parentParts.flatMap((parent) => parts.map((part) => `${parent} ${part}`)) : parts;
				const value = unwrapTs(prop.value);
				const props = value.type === 'ObjectExpression' ? staticValueOf(value) : { [OPEN_KEYS]: true };
				const propNodes = {};
				if (value.type === 'ObjectExpression') {
					for (const valueProp of value.properties) {
						if (valueProp.type === 'Property' && getStaticPropertyName(valueProp) !== null) propNodes[getStaticPropertyName(valueProp)] = valueProp;
					}
				}

				delete props.$children;
				const childrenProp = propNodes.$children;
				delete propNodes.$children;
				addEntry(fullParts.join(', '), fullParts, props, propNodes, prop.key);

				if (childrenProp) {
					const children = unwrapTs(childrenProp.value);
					if (children.type !== 'ObjectExpression' || !flatten(children, fullParts)) return false;
				}
			}
			return true;
		};

		if (!entries || !flatten(selectorMap, null)) {
			if (breakpoint === 'default') return null;
			layers.opaque.add(breakpoint);
			continue;
		}
		layers[breakpoint] = Array.from(entries.values());
	}

	return layers;
}

/**
 * The library theme named by `theme.extends`, or UNKNOWN when it can't be read statically: a
 * non-literal value, or a spread (or computed key) after it that may replace it. `extends` is
 * required by the config type, so a missing one is read as 'base'.
 */
function extendedThemeName(themeObjectExpression) {
	const prop = readProperty(themeObjectExpression, 'extends');
	if (prop === undefined) return 'base';
	const name = prop === UNKNOWN ? UNKNOWN : staticValueOf(prop.value);
	return typeof name === 'string' ? name : UNKNOWN;
}

/**
 * Built-in templates config.<feature>.targets renders, once per tab they render under (`tab` is
 * the tab id, or null without tabs). Anything that can't be read statically - the targets, a
 * target's component, the tabs - makes the whole feature unknown, so nothing is checked for it.
 * Custom (registered) components are skipped - their layouts are unknown.
 */
function collectUsedTemplates(configObjectExpression, feature, templates) {
	const featureConfig = readObjectProperty(configObjectExpression, feature);
	if (!featureConfig || featureConfig === UNKNOWN) return [];
	const targetsProp = readProperty(featureConfig, 'targets');
	if (!targetsProp || targetsProp === UNKNOWN) return [];
	const targets = unwrapTs(targetsProp.value);
	if (targets.type !== 'ArrayExpression') return [];

	const used = new Set();
	for (const element of targets.elements) {
		const target = element && unwrapTs(element);
		if (!target || target.type !== 'ObjectExpression') return [];
		const componentProp = readProperty(target, 'component');
		const component = componentProp && componentProp !== UNKNOWN ? staticValueOf(componentProp.value) : UNKNOWN;
		if (typeof component !== 'string') return [];
		if (Object.prototype.hasOwnProperty.call(templates, component)) used.add(component);
	}

	const tabs = tabIds(featureConfig);
	if (tabs === UNKNOWN) return [];
	return Array.from(used).flatMap((template) => tabs.map((tab) => ({ template, tab })));
}

/**
 * The tabs a feature's template renders under. With two or more tabs, TemplateSelect passes the
 * active tab's id as the template's `name` (see getTabManager and TemplateSelect.tsx), so each
 * tab renders it under its own treePath root. Returns the tab ids, [null] for a single untabbed
 * render, or UNKNOWN when the tabs can't be read statically.
 */
function tabIds(featureConfig) {
	const tabsProp = readProperty(featureConfig, 'tabs');
	if (tabsProp === undefined) return [null];
	if (tabsProp === UNKNOWN) return UNKNOWN;

	const tabs = staticValueOf(tabsProp.value);
	if (tabs === undefined) return [null];
	if (!Array.isArray(tabs) || tabs.includes(UNKNOWN)) return UNKNOWN;
	if (tabs.length < 2) return [null];

	const ids = tabs.map((tab) => (tab && typeof tab === 'object' ? tab.id : UNKNOWN));
	return ids.every((id) => typeof id === 'string') ? ids : UNKNOWN;
}

/**
 * A template's treePath root: its alias, plus the tab name TemplateSelect gives it - the tab id
 * lowercased, which mergeProps only appends when it's a valid name (QUIRK[name-regex-silent-drop]).
 */
function templateRoot(alias, tab) {
	const name = tab === null ? '' : tab.toLowerCase();
	return /^[A-Za-z0-9-]+$/.test(name) ? `${alias}.${name}` : alias;
}

/**
 * A static JS value for an expression: literals, arrays and object literals, with UNKNOWN
 * standing in for anything else (and OPEN_KEYS marking object literals with spreads).
 */
function staticValueOf(node) {
	if (!node) return undefined;
	node = unwrapTs(node);

	switch (node.type) {
		case 'Literal':
			return node.value;
		case 'TemplateLiteral':
			return node.expressions.length === 0 ? node.quasis[0].value.cooked : UNKNOWN;
		case 'Identifier':
			return node.name === 'undefined' ? undefined : UNKNOWN;
		case 'ArrayExpression':
			return node.elements.map((element) => (!element ? undefined : element.type === 'SpreadElement' ? UNKNOWN : staticValueOf(element)));
		case 'ObjectExpression': {
			const value = {};
			for (const prop of node.properties) {
				const name = prop.type === 'Property' ? getStaticPropertyName(prop) : null;
				if (name !== null) {
					value[name] = staticValueOf(prop.value);
					continue;
				}
				// a spread (or computed key) may set any key, overriding the ones listed before it
				value[OPEN_KEYS] = true;
				Object.keys(value).forEach((key) => (value[key] = UNKNOWN));
			}
			return value;
		}
		default:
			return UNKNOWN;
	}
}

/** `x as const`, `x satisfies T` and `x!` all read the inner expression. */
function unwrapTs(node) {
	while (node && (node.type === 'TSAsExpression' || node.type === 'TSSatisfiesExpression' || node.type === 'TSNonNullExpression')) {
		node = node.expression;
	}
	return node;
}

/**
 * The property `name` of an object literal as the runtime reads it - the last one wins: its
 * Property node, undefined when it's absent, or UNKNOWN when a spread (or computed key) after it
 * - or anywhere, when it's absent - may set it.
 */
function readProperty(objectExpression, name) {
	let result;
	for (const prop of objectExpression.properties) {
		const key = prop.type === 'Property' ? getStaticPropertyName(prop) : null;
		if (key === null) result = UNKNOWN;
		else if (key === name) result = prop;
	}
	return result;
}

/** readProperty for a value that must be an object literal to be read: its ObjectExpression, undefined, or UNKNOWN. */
function readObjectProperty(objectExpression, name) {
	const prop = readProperty(objectExpression, name);
	if (prop === undefined || prop === UNKNOWN) return prop;
	const value = unwrapTs(prop.value);
	return value.type === 'ObjectExpression' ? value : UNKNOWN;
}

/** A property's static key, or null when it is computed from an expression - which could be any key. */
function getStaticPropertyName(property) {
	return property.computed && property.key.type !== 'Literal' ? null : getPropertyName(property);
}

function describeBreakpoints(breakpoints) {
	if (breakpoints.size === BREAKPOINTS.length) return 'all breakpoints';
	return BREAKPOINTS.filter((breakpoint) => breakpoints.has(breakpoint)).join(', ');
}

/**
 * Where banners went missing, for a message: "Search (mobile)", or per tab - "Search on the
 * products tab (all breakpoints)" - unless every tab of the template lost them at the same
 * breakpoints, which reads as the plain template.
 */
function describeWhere(where, checks) {
	const parts = [];
	for (const template of new Set(Array.from(where.keys(), (check) => check.template))) {
		const templateChecks = checks.filter((check) => check.template === template);
		const described = templateChecks.map((check) => (where.has(check) ? describeBreakpoints(where.get(check)) : null));
		// untabbed, or every tab lost them at the same breakpoints - the tabs don't matter to the message
		if (described.every((text) => text === described[0])) {
			parts.push(`${template} (${described[0]})`);
			continue;
		}
		templateChecks.forEach((check, i) => described[i] && parts.push(`${template} on the ${check.tab} tab (${described[i]})`));
	}
	return parts.join(', ');
}

module.exports = {
	validateLayoutBanners,
	// exported for the theme drift test
	buildBaseLayers,
	BANNER_LAYOUT_COMPONENTS,
	BANNER_LAYOUT_PROPS,
};
