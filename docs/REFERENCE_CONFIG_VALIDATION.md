## Config Validation & Linting

Snap Templates configurations are verified by two cooperating layers:

1. **The TypeScript compiler** checks the config's shape and its theme override typing: unknown keys, wrong value types, and invalid override selectors and props. A configuration with any of these will not compile. No tooling setup is required beyond wrapping the config in `validateTemplatesConfig` (or `validateTemplatesConfigUnlocked`).
2. **The Snap config ESLint rules** put the override errors the compiler reports on the exact line of the mistake, and list what is valid there. They also check how parts of the config relate to each other, which the compiler can't: that `customComponent` and `resultComponent` values name a registered (or built-in) component, that [tabs](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#tabs) are configured consistently, and that layout overrides still render the merchandising banners (see [Layout banner check](#layout-banner-check)). Without the linter, the compiler still rejects shape and override mistakes, but those relationship checks don't run at all.

This page is the reference for how each layer works, how to read the errors, and how to set up the linter. For guide-level usage, see [Templates Config](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md) and [Templates Theming](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md).

### How the compiler checks the config

Wrapping the config in `validateTemplatesConfig` makes TypeScript verify the entire configuration. The checking happens at two moments:

1. **While you type** — your IDE suggests the available keys, selectors, and props. Unknown keys anywhere in the config (including unknown breakpoint names under `theme.overrides`) and wrong value types on props the IDE can type are flagged on the exact line, with TypeScript's standard `Object literal may only specify known properties` message.
2. **When the config is used** — the parts of `theme.overrides` the IDE cannot see while typing are verified where the config is passed to `new SnapTemplates(...)`: misspelled override selectors, misspelled props next to valid ones, and all props under open-named selectors like `facet.<field>` (whose site-specific names cannot be suggested ahead of time). If anything is wrong, that line errors.

Why two moments: each breakpoint map under `theme.overrides` is inferred by the function, which is what keeps its checking off the editor's completion path and typing fast. Inferred values do not receive TypeScript's excess-property checking, so their keys are verified through the function's return type instead. Everything else in the config is an ordinary concrete type and is checked the ordinary way. The `theme.overrides` object can be written inline or assigned to a variable first — both are checked.

### Reading the type errors

An invalid `theme.overrides` collapses the config's type into an error carrier, and the `new SnapTemplates(config)` line reports it. The carrier names exactly what failed. Read the errors inside-out: the object inside the carrier mirrors your overrides' structure, but only contains the entries that failed. Hovering over the config variable in your IDE shows the same details.

Theme override problems report through `InvalidThemeOverrides<...>`. Each bad prop carries a `ThemeOverrideInvalidProp<...>` marker, while valid props show the type they expect (handy when a prop name is right but its value is the wrong type):

```
Argument of type 'InvalidThemeOverrides<{ default: { 'facet.price': {
	clearAllIcon: "angle-down" | "angle-left" | ...; showTicks: ThemeOverrideInvalidProp<"showTicks">;
} } }>' is not assignable to parameter of type 'SnapTemplatesConfig'
```

Comma-separated selector groups that mix component types report the mixed kinds (see [Grouping Selectors with Commas](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md#grouping-selectors-with-commas)):

```
Argument of type 'InvalidThemeOverrides<{ default: { 'search, searchHorizontal': {
	'comma-separated selectors must all target the same component type, but this group mixes':
		"search" | "searchHorizontal" } } }>' is not assignable to ...
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
> Older configs enable a single `snap-config/validate-config` rule. It still works, as a deprecated alias that runs every rule above except `hidden-layout-banners`, but switch to `configs.recommended`. Don't enable both, or every problem is reported twice.

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

This adds pinpoint squiggles to `override-selectors` for the checks the compiler reports at the use site:

- Unknown theme override selectors
- Invalid or mistyped props on any override selector — including open-named selectors such as `facet.<field>`, where the IDE cannot offer autocompletion

Example messages:

```
"DNE" is not a valid prop for the "result" override (result resolves to
ThemeComponentCascade<ResultTemplatesLegalProps, ...>). Must be one of: hideBadge,
hideTitle, hideImage, hidePricing, ...

"search, searchHorizontal" mixes component types (search vs searchHorizontal).
Comma-separated selectors must all target the same component type, since the
override props resolve against that component.
```

> [!NOTE]
> Typed linting builds a TypeScript program for each matched file, so scope it to the few files that actually author the config rather than your whole project.

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

Moving a banner to another layout of the same template is fine. So is overriding one layout while the banner lives in a layout you didn't change.

```
The "layout" set by the "toolbar.top" override leaves 'banner.header' out of every
layout of Search (all breakpoints), so those merchandising banners returned by the
API will not render. Add them to this layout or another layout of the template.
```

Values the rules can't read from the code are assumed to keep every banner, so they are never reported. That covers spreads, variables, a `customComponent` override, and a target `component` that isn't a string literal. When the rules can't tell which theme `theme.extends` names (a variable, or a spread in `theme` that may set it), they skip the config entirely, because each theme has its own default layouts. Custom template components registered in `components.search` or `components.autocomplete` are not checked either.

### Checking limitations

- Only the last segment of a tree path selector determines which component is checked — a typo in an earlier segment (e.g. `'facett.price facetSlider'`) is not caught.
- Open-named selectors like `facet.price` do not get IDE autocompletion for their props, because their names are site-specific. If you get a prop wrong, the error and the ESLint rule list the valid props; they are also documented in the Storybook component library.
- Selectors that name a template target instance — such as `search.<targetName>` — are not prop-checked at all; their contents are intentionally left open.
- Values typed as `any` (for example, config merged in from an untyped source) are not checked.
- Unknown keys outside `theme.overrides` are flagged when the config is written inline in the call (standard TypeScript excess-property checking). A config object assigned to a variable first is still checked for value types and for its `theme.overrides`, but not for unknown keys elsewhere — add `satisfies SnapTemplatesConfig` to the variable to get those flagged at the declaration:

  ```ts
  const templatesConfig = {
  	config: { platform: 'other' },
  	theme: { extends: 'base' },
  } satisfies SnapTemplatesConfig;

  new SnapTemplates(validateTemplatesConfig(templatesConfig));
  ```
