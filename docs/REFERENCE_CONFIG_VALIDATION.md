## Config Validation & Linting

Snap Templates configurations are verified by two cooperating layers:

1. **The TypeScript compiler** checks the config's shape and its theme override typing: unknown keys, wrong value types, and invalid override selectors and props. A configuration with any of these will not compile, except in the cases listed under [Checking limitations](#checking-limitations). No tooling setup is required beyond wrapping the config in `validateTemplatesConfig` (or `validateTemplatesConfigUnlocked`).
2. **The Snap config ESLint rules** put the override errors the compiler reports on the exact line of the mistake, and list what is valid there (all of this except the mixed comma-group check needs [typed linting](#setting-up-the-eslint-rules)). They also check how parts of the config relate to each other, which the compiler can't: that `customComponent` and `resultComponent` values name a registered (or built-in) component, that [tabs](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#tabs) are configured consistently, and that layout overrides still render the merchandising banners (see [Layout banner check](#layout-banner-check)). Without the linter, the compiler still rejects shape and override mistakes, but those relationship checks don't run at all.

This page is the reference for how each layer works, how to read the errors, and how to set up the linter. For guide-level usage, see [Templates Config](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md) and [Templates Theming](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md).

### How the compiler checks the config

Wrapping the config in `validateTemplatesConfig` makes TypeScript verify the configuration. Write the config as an object literal inside the `validateTemplatesConfig(...)` call; the result can then be passed straight to `new SnapTemplates(...)` or assigned to a variable first — both report the same errors in the same places. The checking happens at two moments:

1. **While you type** — your IDE suggests the available keys, selectors, and props (except props under open-named selectors like `facet.<field>`). Mistakes the IDE can see are flagged on the exact line: unknown keys outside `theme.overrides`, unknown breakpoint names under `theme.overrides`, wrong value types (except under open-named selectors), and an override object whose props are all unknown.
2. **When the config is used** — the parts of `theme.overrides` the IDE cannot see while typing are verified where the config is passed to `new SnapTemplates(...)`: misspelled override selectors, misspelled props next to valid ones, comma-separated selector groups that mix component types, and all props (names and value types) under open-named selectors like `facet.<field>` or `recommendation.<profile>` (whose site-specific names cannot be suggested ahead of time). If anything is wrong, that line errors.

Where each mistake is reported:

| Mistake | Example | Reported at | Error |
| --- | --- | --- | --- |
| Unknown key outside `theme.overrides` | `search: { targets: [...], bogus: 1 }` | the key | `TS2353` |
| Unknown breakpoint name | `overrides: { phone: { ... } }` | the key | `TS2353` |
| Wrong value type outside `theme.overrides` | `theme: { extends: 'blank' }` | the key (`extends`) | `TS2322` |
| Wrong value type on a prop of a named selector (`image`, `carousel icon.next`, also inside `$children`) | `image: { lazy: 'yes' }` | the prop (`lazy`) | `TS2322` or `TS2820` |
| Override object whose props are all unknown | `image: { lazyy: true }` | the prop | `TS2561` or `TS2353` |
| Unknown prop next to a valid prop | `image: { lazy: false, lazyy: true }` | `new SnapTemplates(...)` | `TS2345` (`InvalidThemeOverrides<...>`) |
| Unknown or misspelled selector | `imagee: { lazy: false }` | `new SnapTemplates(...)` | `TS2345` (`InvalidThemeOverrides<...>`) |
| Comma group that mixes component types | `'search, searchHorizontal': { ... }` | `new SnapTemplates(...)` | `TS2345` (`InvalidThemeOverrides<...>`) |
| Any unknown prop or wrong value type under an open-named selector | `'facet.price': { showTicks: false }` | `new SnapTemplates(...)` | `TS2345` (`InvalidThemeOverrides<...>`) |

The exact messages are listed under [Error message reference](#error-message-reference).

Errors can arrive in two rounds. When a breakpoint map (`default`, `mobile`, ...) has an error that is reported on its own line, TypeScript skips the `new SnapTemplates(...)` check for that breakpoint, and may instead report other unknown props in that breakpoint on their own lines. After you fix the line errors, new errors for that breakpoint can appear at `new SnapTemplates(...)`. Other breakpoints are not affected.

Why two moments: each breakpoint map under `theme.overrides` is inferred by the function, which is what keeps its checking off the editor's completion path and typing fast. Inferred values do not receive TypeScript's excess-property checking, so their keys are verified through the function's return type instead. Everything else in the config is an ordinary concrete type and is checked the ordinary way. A config or `theme.overrides` object built in a separate variable and then passed in is checked differently — see [Checking limitations](#checking-limitations).

### Reading the type errors

An invalid `theme.overrides` collapses the config's type into an error carrier, and the `new SnapTemplates(config)` line reports it. The carrier names what failed. Read the errors inside-out: the object inside the carrier mirrors your overrides' structure (breakpoint, then selector, then props), but only contains the breakpoints and selectors that failed. When the config is assigned to a variable, that variable has the carrier type, so hovering over it in your IDE shows the carrier too.

Theme override problems report through `InvalidThemeOverrides<...>`. Inside it:

- Each bad prop carries a `ThemeOverrideInvalidProp<"propName">` marker.
- Under an open-named selector such as `facet.price`, the other props show the type they expect (handy when a prop name is right but its value is the wrong type). Under a named selector such as `image`, the other props show `unknown`, because their values were already checked on their own lines.
- An unknown selector shows `{ 'unknown theme override selector': never; }` (inside `$children` it is printed as `ThemeOverrideUnknownSelector`).
- A comma group that mixes component types shows the mixed kinds.

TypeScript truncates long types in the message: a long union prints as `... 43 more ...`, and a marker can print as `ThemeOverrideInvalidProp<...>` — the prop name is still the key in front of it (`showTicks:` below). The messages below are copied from `tsc` output; each is one line, wrapped here for reading:

```
error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { 'facet.price': { clearAllIcon:
"angle-down" | "angle-left" | "angle-right" | "angle-up" | "bag" | "ban" | "bullet" | "bullet-o" |
"check" | "check-thin" | "chevron-down" | ... 43 more ... | undefined; showTicks:
ThemeOverrideInvalidProp<...>; }; }; }>' is not assignable to parameter of type
'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.
```

Comma-separated selector groups that mix component types report the mixed kinds (see [Grouping Selectors with Commas](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md#grouping-selectors-with-commas)):

```
error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { 'search, searchHorizontal': {
'comma-separated selectors must all target the same component type, but this group mixes':
"search" | "searchHorizontal"; }; }; }>' is not assignable to parameter of type
'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.
```

### Setting up the ESLint rules

> [!TIP]
> Projects initialized with `snapfu` come with all of this prewired. The [preact-templates scaffold](https://github.com/AthosCommerce/snapfu-scaffold-preact-templates) enables the recommended rules on all TypeScript files, and typed linting for the config entry point. The setup below is only needed for projects configured by hand.

Register the plugin and enable its recommended rules in your ESLint flat config, scoped to the file(s) that author the config:

```js
// eslint.config.js
const snapConfigPlugin = require('@athoscommerce/snap-preact/eslintplugin');

module.exports = [
	// ... your existing config
	{
		files: ['src/index.ts', 'src/index.tsx'],
		plugins: {
			'snap-config': snapConfigPlugin,
		},
		rules: {
			...snapConfigPlugin.configs.recommended.rules,
		},
	},
];
```

Spreading `configs.recommended.rules` keeps the rules and their severities in step with your installed `@athoscommerce/snap-preact` version: new rules apply automatically when you upgrade. To change one rule's severity, set it after the spread, for example `'snap-config/hidden-layout-banners': 'off'`.

With just that, the rules check everything they can from the code alone:

| Rule                                | Checks                                                                                                                                                                                                                                                                | Severity |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `snap-config/component-references`  | `customComponent` values reference a component registered in the matching `components` section. `resultComponent` and `globalResultComponent` values are `Result`, `OverlayResult`, or registered in `components.result`.                                             | error    |
| `snap-config/tabs`                  | Tab configurations are consistent: unique ids, a unique `siteId` and `param` per tab within a feature, and matching `siteId`/`param` pairs across search and autocomplete. See [Tabs](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#tabs). | error    |
| `snap-config/override-selectors`    | Comma-separated override selectors all target the same component type. With typed linting (below), also unknown selectors and invalid props.                                                                                                                          | error    |
| `snap-config/layout-banners`        | Overridden search and autocomplete layouts still render every merchandising banner the default layouts render. See [Layout banner check](#layout-banner-check).                                                                                                       | error    |
| `snap-config/hidden-layout-banners` | Hide props such as `hideSidebar` don't stop a banner from rendering. See [Layout banner check](#layout-banner-check).                                                                                                                                                 | warning  |

> [!NOTE]
> Older configs enable a single `snap-config/validate-config` rule. It still works, as a deprecated alias that runs the checks it always had: `component-references`, `tabs` and `override-selectors`. The layout banner checks are newer and only come from `configs.recommended`, so upgrading `@athoscommerce/snap-preact` does not add the banner checks to a config that still uses the alias. Switch to `configs.recommended` to get them, and don't enable both, or every problem is reported twice.

Adding **typed linting** unlocks the rest — the checks that need to know the real component prop types. Point `parserOptions.project` at your `tsconfig.json` for the config-authoring files:

```js
	{
		files: ['src/index.ts', 'src/index.tsx'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
			},
		},
	},
```

The typed linting block above assumes your existing config already parses these files with `@typescript-eslint/parser`.

This adds pinpoint squiggles to `override-selectors` for the checks the compiler reports at the use site:

- Unknown theme override selectors, including inside `$children`
- Unknown props on any override selector — including open-named selectors such as `facet.<field>`, where the IDE cannot offer autocompletion
- Wrong value types on props under open-named selectors (value types under other selectors are already reported by the compiler on their own line, so the rule leaves them alone)

The rule does not check the props of an override that sets `customComponent`, and does not check props under the open-named `calloutBadge.<name>` and `productDetail.<name>` selectors (the compiler still does).

Example messages (copied from ESLint's JSON output):

```
"DNE" is not a valid prop for the "result" override (result resolves to ThemeComponentCascade<ResultTemplatesLegalProps, ThemeComponentsRestricted>). Must be one of: hideBadge, hideTitle, hideImage, hidePricing, hideRating, hideVariantSelections, hideAddToCartButton, hideQuickviewButton, addToCartButtonText, onAddToCartClick, onQuickviewClick, addToCartButtonSuccessText, addToCartButtonSuccessTimeout, detailSlot, fallback, layout, truncateTitle, onClick.

"search, searchHorizontal" mixes component types (search vs searchHorizontal). Comma-separated selectors must all target the same component type, since the override props resolve against that component.
```

> [!NOTE]
> Typed linting makes ESLint build a TypeScript program from your `tsconfig.json`, which is slower than plain linting, so scope it to the few files that actually author the config rather than your whole project.

### Layout banner check

Merchandising banners returned by the API render only where a template's layouts place them:

- **Search templates:** `banner.header`, `banner.banner` and `banner.footer` go in the toolbar layouts, and `banner.left` goes in the sidebar layout.
- **Autocomplete templates:** the `content` module renders the header, banner and footer banners, and `facets` renders the left banner. Explicit `banner.*` modules can be placed anywhere.

The default layouts already place the banners. A `layout` set in `theme.overrides` replaces the default for that toolbar, sidebar or template, so it can leave a banner with nowhere to render.

For every search and autocomplete template in `targets`, at every breakpoint, the rules work out which banners the default layouts render and which ones still render with your overrides applied. Each override that drops a banner is reported:

- **`layout-banners` reports an error** for:
  - a `layout` that leaves a banner out.
  - an autocomplete `column1`–`column4` override without a `layout`. The override replaces the whole column object, including its default `layout`.
- **`hidden-layout-banners` reports a warning** for a hide prop that hides a banner: `hideSidebar`, `hideTopToolbar`, `hideMiddleToolbar`, `hideBottomToolbar` or `excludeBanners`. Hiding a toolbar or the sidebar is often deliberate, and `banner.left` can only render in the sidebar, so this is a warning rather than an error.

Moving a banner to another layout of the same template is fine. So is overriding one layout while the banner lives in a layout you didn't change. When several overrides drop the same banner, each one is reported; an override that leaves the banner alone never is.

With two or more tabs in `search.tabs` or `autocomplete.tabs`, each tab's template is checked separately, so tab-specific selectors such as `search.products toolbar.top` are covered.

An example `layout-banners` message (one line, wrapped here for reading):

```
The "layout" set by the "toolbar.top" override leaves 'banner.header' out of every
layout of Search (all breakpoints), so those merchandising banners returned by the
API will not render. Add them to this layout or another layout of the template.
```

Values the rules can't read from the code are assumed to keep every banner, so they are never reported. That covers spreads (including a spread after a property, which may replace it), variables, a `customComponent` on a search toolbar or sidebar (it is assumed to render every banner, so a banner dropped from the template's other toolbars or sidebar isn't reported either; a `customComponent` on the template itself is not treated this way), a target `component` or tab `id` that isn't a string literal, and `layoutOptions` whose `overrides` change a layout or hide prop (which option is selected decides what renders). When the rules can't tell which theme `theme.extends` names (a variable, or a spread in `theme` that may set it), they skip the config entirely, because each theme has its own default layouts. Custom template components registered in `components.search` or `components.autocomplete` are not checked either.

### Checking limitations

- Only the last segment of a tree path selector determines which component is checked — a typo in an earlier segment (e.g. `'facett.price facetSlider'`) is not caught.
- Open-named selectors like `facet.price` do not get IDE autocompletion for their props, because their names are site-specific. If you get a prop wrong, the compiler error names the bad prop, and the ESLint rule (with typed linting) also lists the valid props; they are also documented in the Storybook component library.
- Selectors that name a template target instance — such as `search.<targetName>` — are not prop-checked at all; their contents are intentionally left open.
- On an override that sets `customComponent` (unlocked configs), the other props are not checked.
- Values typed as `any` (for example, config merged in from an untyped source) are not checked.
- Overrides under the top-level `currencies` key are checked as ordinary types, so props under open-named selectors there are not checked.
- Inside `layoutOptions` (on the search templates), misspellings are not caught: a misspelled option key next to valid ones (`defualt: true`), a misspelled selector under `overrides.components` (`'serch results'`), and a misspelled prop next to a valid one (`columns: 4, columnz: 3`) all compile without an error. Wrong value types there are still caught (`columns: 'four'` reports `TS2322` on its line).
- The layout banner checks don't compare a `mobileDisplayAt` width (such as `'991px'`) against the breakpoints. When it's set, an override that only targets the mobile slideout sidebar (`slideout sidebar`) isn't checked.
- The ESLint rules only read a config written as an object literal inside `validateTemplatesConfig(...)` or `validateTemplatesConfigUnlocked(...)`, passed inline to `new SnapTemplates(...)`, or assigned to a variable annotated `: SnapTemplatesConfig`. They don't read a `theme.overrides` object kept in a separate variable, or a config variable written with `satisfies`.
- The full compiler checks need the config object written inside the `validateTemplatesConfig(...)` call. A config object (or `theme.overrides` object) assigned to a plain variable first and then passed in is checked differently:
  - Unknown keys outside `theme.overrides`, and unknown breakpoint names, are not flagged.
  - String values are widened to `string`, so valid values of props that only accept certain strings are rejected — for example `'facet.price': { clearAllIcon: 'cog' }` errors at `new SnapTemplates(...)`, and `facet: { clearAllIcon: 'cog' }` errors where the variable is passed in.
  - Selectors and props inside `theme.overrides` are still checked. Mistakes the table above reports at `new SnapTemplates(...)` are still reported there; mistakes it reports on their own line are reported where the variable is passed in instead.

  Add `satisfies SnapTemplatesConfig` to the variable to keep the string values and get the unknown keys and breakpoint names flagged at the declaration (`as const` on a `theme.overrides` variable also keeps the string values). Don't annotate the variable as `const templatesConfig: SnapTemplatesConfig = {...}` instead: with an annotation, misspelled selectors are still flagged at the declaration, but props under open-named selectors and mixed comma groups are no longer checked at all.

  ```ts
  import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
  import type { SnapTemplatesConfig } from '@athoscommerce/snap-preact';

  const templatesConfig = {
  	config: { platform: 'other' },
  	theme: { extends: 'base' },
  } satisfies SnapTemplatesConfig;

  new SnapTemplates(validateTemplatesConfig(templatesConfig));
  ```

### Error message reference

Exact messages, so you can search this page for an error you got. TypeScript messages are copied from `tsc` output with the file name and position removed; the types inside them come from the probe configs and will show your own selectors and props. Where TypeScript truncates a type, the message contains `...` exactly as shown.

#### TypeScript errors at `new SnapTemplates(...)`

All of these are `TS2345` errors whose argument type starts with `InvalidThemeOverrides<`. See [Reading the type errors](#reading-the-type-errors) for the long `facet.price` and mixed-group examples.

```
error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { image: { lazy: unknown; lazyy: ThemeOverrideInvalidProp<"lazyy">; }; }; }>' is not assignable to parameter of type 'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.

error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { imagee: { 'unknown theme override selector': never; }; }; }>' is not assignable to parameter of type 'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.

error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { 'facet.price': { showTicks: ThemeOverrideInvalidProp<"showTicks">; }; }; }>' is not assignable to parameter of type 'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.

error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { carousel: { $children: { 'icon.next': { icon: unknown; bogus: ThemeOverrideInvalidProp<"bogus">; }; 'iconn.prev': ThemeOverrideUnknownSelector; }; }; }; }>' is not assignable to parameter of type 'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.

error TS2345: Argument of type 'InvalidThemeOverrides<{ default: { sortBy: { hideLabel: unknown; customComponent: ThemeOverrideInvalidProp<"customComponent">; }; }; }>' is not assignable to parameter of type 'SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked'.
```

The last one is `customComponent` in a locked config (`validateTemplatesConfig`); `validateTemplatesConfigUnlocked` reports the same marker for `customComponent` on `result`.

#### TypeScript errors on the line of the mistake

```
error TS2353: Object literal may only specify known properties, and 'bogusTop' does not exist in type 'SnapTemplatesConfigInput<Partial<ThemeComponentsRestricted>, Partial<ThemeComponentsRestricted>, Partial<ThemeComponentsRestricted>, Partial<...>>'.

error TS2353: Object literal may only specify known properties, and 'bogusTheme' does not exist in type 'Omit<TemplatesStoreThemeConfigLocked, "overrides"> & { overrides?: { default?: Partial<ThemeComponentsRestricted> | undefined; mobile?: Partial<...> | undefined; tablet?: Partial<...> | undefined; desktop?: Partial<...> | undefined; } | undefined; }'.

error TS2353: Object literal may only specify known properties, and 'phone' does not exist in type '{ default?: { image: { lazy: false; }; } | undefined; mobile?: Partial<ThemeComponentsRestricted> | undefined; tablet?: Partial<ThemeComponentsRestricted> | undefined; desktop?: Partial<...> | undefined; }'.

error TS2561: Object literal may only specify known properties, but 'lazyy' does not exist in type 'ThemeComponentCascade<ImageTemplatesLegalProps, ThemeComponentsRestricted>'. Did you mean to write 'lazy'?

error TS2322: Type 'string' is not assignable to type 'boolean | undefined'.

error TS2820: Type '"angle-rightt"' is not assignable to type '"angle-down" | "angle-left" | "angle-right" | "angle-up" | "bag" | "ban" | "bullet" | "bullet-o" | "check" | "check-thin" | "chevron-down" | "chevron-left" | "chevron-right" | ... 41 more ... | undefined'. Did you mean '"angle-right"'?

error TS2322: Type '"blank"' is not assignable to type '"base" | "pike"'.
```

In order: an unknown top-level key, an unknown `theme` key, an unknown breakpoint name (the `default?:` part shows your own `default` map), an override object whose only prop is unknown, a wrong value type (`image: { lazy: 'yes' }`), a misspelled icon name, and an unknown `theme.extends` value.

#### ESLint messages

Each rule's messages, with the parts that change shown as `{{ name }}` placeholders exactly as they appear in the rule source:

| Rule | Message |
| --- | --- |
| `component-references` | `"{{ value }}" is not a valid customComponent for "{{ componentType }}". Must be one of: {{ validKeys }}.` |
| `component-references` | `"{{ value }}" is not a valid customComponent. No keys found in components.{{ componentType }}.` |
| `component-references` | `"{{ value }}" is not a valid resultComponent. Must be one of: {{ validKeys }}.` |
| `component-references` | `"{{ value }}" is not a valid globalResultComponent. Must be one of: {{ validKeys }}.` |
| `tabs` | `Tab id {{ id }} is used by more than one tab controller. Every search/autocomplete tab id must be unique, since it becomes the controller id.` |
| `tabs` | `Tab {{ id }} uses siteId {{ siteId }}, which is already used by another tab in {{ feature }}.tabs. Tabs within the same feature must target unique siteIds.` |
| `tabs` | `Tab {{ id }} uses param {{ param }}, which is already used by another tab in {{ feature }}.tabs. Tabs within the same feature must use unique params, since the param identifies the tab in the URL and namespaces its URL state.` |
| `tabs` | `Tab {{ id }} (siteId {{ siteId }}) uses param {{ param }}, but other tabs sharing siteId {{ siteId }} use param {{ expectedParam }}. Tab controllers across search and autocomplete that share a siteId must use the same param.` |
| `tabs` | `Tab {{ id }} (param {{ param }}) uses siteId {{ siteId }}, but other tabs sharing param {{ param }} use siteId {{ expectedSiteId }}. Tab controllers across search and autocomplete that share a param must use the same siteId.` |
| `override-selectors` | `"{{ selector }}" mixes component types ({{ kinds }}). Comma-separated selectors must all target the same component type, since the override props resolve against that component.` |
| `override-selectors` (typed) | `"{{ selector }}" is not a valid theme override selector ("{{ segment }}" does not resolve to any component).` |
| `override-selectors` (typed) | `"{{ value }}" is not a valid prop for the "{{ selector }}" override ({{ componentType }} resolves to {{ typeName }}). Must be one of: {{ validKeys }}.` |
| `override-selectors` (typed) | `"{{ value }}" on the "{{ selector }}" override ({{ typeName }}) expects type {{ expectedType }}, but got {{ actualType }}.` |
| `layout-banners` | `The "{{ prop }}" set by the "{{ selector }}" override leaves {{ banners }} out of every layout of {{ where }}, so those merchandising banners returned by the API will not render. Add them to this layout or another layout of the template.` |
| `hidden-layout-banners` | `The "{{ prop }}" set by the "{{ selector }}" override stops {{ banners }} from rendering in {{ where }}, so those merchandising banners returned by the API will not render.` |

The `tabs` messages print string values in double quotes (`Tab id "products" ...`) and other expressions in backticks. A config that still enables the deprecated `snap-config/validate-config` rule reports the `component-references`, `tabs` and `override-selectors` messages under that rule's name.

Real examples:

```
"Missing" is not a valid customComponent for "sortBy". Must be one of: CustomSortBy.
"X" is not a valid customComponent. No keys found in components.pagination.
"Nope2" is not a valid resultComponent. Must be one of: Result, OverlayResult, SearchResult.
Tab id "products" is used by more than one tab controller. Every search/autocomplete tab id must be unique, since it becomes the controller id.
Tab "acA" (siteId "aaa") uses param "q", but other tabs sharing siteId "aaa" use param "p". Tab controllers across search and autocomplete that share a siteId must use the same param.
"imagee" is not a valid theme override selector ("imagee" does not resolve to any component).
"clearAllIcon" on the "facet.size" override (FacetTemplatesLegalProps) expects type "close" | "filter" | "search" | "circle" | "angle-up" | "angle-down" | "angle-left" | "angle-right" | "bag" | "ban" | "check" | "check-thin" | "chevron-up" | "chevron-down" | ... 40 more ... | undefined, but got 5.
The "hideSidebar" set by the "search" override stops 'banner.left' from rendering in Search (all breakpoints), so those merchandising banners returned by the API will not render.
The "column3" set by the "autocompleteFixed" override leaves 'banner.header', 'banner.banner', 'banner.footer' out of every layout of AutocompleteFixed (default, tablet, desktop), so those merchandising banners returned by the API will not render. Add them to this layout or another layout of the template.
```
