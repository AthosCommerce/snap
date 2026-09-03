## Config Validation & Linting

Snap Templates configurations are verified by two cooperating layers:

1. **The TypeScript compiler** is the authority: an invalid configuration will not compile. No tooling setup is required beyond wrapping the config in `validateTemplatesConfig` (or `validateTemplatesConfigUnlocked`).
2. **The `validate-config` ESLint rule** is an advisory layer that puts the error squiggle on the exact line of the mistake and lists what is valid there. If the linter is not set up (or a check cannot run), nothing goes unchecked — the compiler enforces the same rules; only the pinpoint squiggles are lost.

This page is the reference for how each layer works, how to read the errors, and how to set up the linter. For guide-level usage, see [Templates Config](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md) and [Templates Theming](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md).

### How the compiler checks the config

Wrapping the config in `validateTemplatesConfig` makes TypeScript verify the entire configuration. It does not matter whether the config object is written inline in the call or assigned to a variable first — both are fully checked.

The checking happens at two moments:

1. **While you type** — your IDE suggests the available keys, selectors, and props. On keys and selectors the IDE can type (most of them), a wrong value type is flagged immediately.
2. **When the config is used** — everything else is verified where the config is passed to `new SnapTemplates(...)`: unknown keys anywhere in the config, misspelled override selectors, unknown breakpoint keys, and all props under open-named selectors like `facet.<field>` (whose site-specific names cannot be suggested ahead of time). If anything is wrong, that line errors.

### Reading the type errors

An invalid config's type collapses into an error carrier, and the `new SnapTemplates(config)` line reports it. The carrier names exactly what failed. Read the errors inside-out: the object inside the carrier mirrors your config's structure, but only contains the entries that failed. Hovering over the config variable in your IDE shows the same details.

A typo'd key (anywhere in the config) reports through `InvalidConfigKeys<...>`, nested under its path:

```
Argument of type 'InvalidConfigKeys<{ config: { bogusKey: { 'unknown config key': "bogusKey" } } }>'
is not assignable to parameter of type 'SnapTemplatesConfig'
```

Theme override problems report through `InvalidThemeOverrides<...>`. Each bad prop carries a `ThemeOverrideInvalidProp<...>` marker, while valid props show the type they expect (handy when a prop name is right but its value is the wrong type):

```
Argument of type 'InvalidThemeOverrides<{ default: { 'facet.price': {
	clearAllIcon: "angle-down" | "angle-left" | ...; showTicks: ThemeOverrideInvalidProp<"showTicks">;
} } }>' is not assignable to parameter of type 'SnapTemplatesConfig'
```

Unknown breakpoint keys (anything other than `default`, `mobile`, `tablet`, `desktop`) report the valid options directly:

```
Argument of type 'InvalidThemeOverrides<{ bob: {
	'unknown breakpoint - expected default, mobile, tablet or desktop': "bob" } }>'
is not assignable to parameter of type 'SnapTemplatesConfig'
```

Comma-separated selector groups that mix component types report the mixed kinds (see [Grouping Selectors with Commas](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md#grouping-selectors-with-commas)):

```
Argument of type 'InvalidThemeOverrides<{ default: { 'search, searchHorizontal': {
	'comma-separated selectors must all target the same component type, but this group mixes':
		"search" | "searchHorizontal" } } }>' is not assignable to ...
```

### Setting up the `validate-config` ESLint rule

> [!TIP]
> Projects initialized with `snapfu` come with all of this prewired — the [preact-templates scaffold](https://github.com/AthosCommerce/snapfu-scaffold-preact-templates) enables the `validate-config` rule on all TypeScript files and typed linting for the config entry point out of the box. The setup below is only needed for projects configured by hand.

Register the plugin and enable the rule in your ESLint flat config, scoped to the file(s) that author the config:

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
			'snap-config/validate-config': 'error',
		},
	},
];
```

With just that, the rule checks everything it can from the code alone:

- `customComponent` values reference a component registered in the matching `components` section
- `resultComponent` and `globalResultComponent` values are `Result`, `OverlayResult`, or registered in `components.result`
- Tab configurations are consistent (unique ids, correct `siteId`/`param` pairing — see [Tabs](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_CONFIG.md#tabs))
- Comma-separated override selectors all target the same component type

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

This adds pinpoint squiggles for:

- Unknown keys anywhere in the config, with the list of valid keys for that spot
- Unknown theme override selectors and breakpoint names
- Invalid or mistyped props on any override selector — including open-named selectors such as `facet.<field>`, where the IDE cannot offer autocompletion

Example messages:

```
"DNE" is not a valid prop for the "result" override (result resolves to
ThemeComponentCascade<ResultTemplatesLegalProps, ...>). Must be one of: hideBadge,
hideTitle, hideImage, hidePricing, ...

"zzBogusSearch" is not a valid config key at "search". Valid keys: tabs, targets,
globals, settings, plugins.

"search, searchHorizontal" mixes component types (search vs searchHorizontal).
Comma-separated selectors must all target the same component type, since the
override props resolve against that component.
```

> [!NOTE]
> Typed linting builds a TypeScript program for each matched file, so scope it to the few files that actually author the config rather than your whole project.

### Checking limitations

- Only the last segment of a tree path selector determines which component is checked — a typo in an earlier segment (e.g. `'facett.price facetSlider'`) is not caught.
- Open-named selectors like `facet.price` do not get IDE autocompletion for their props, because their names are site-specific. If you get a prop wrong, the error and the ESLint rule list the valid props; they are also documented in the Storybook component library.
- Selectors that name a template target instance — such as `search.<targetName>` — are not prop-checked at all; their contents are intentionally left open.
- Values typed as `any` (for example, config merged in from an untyped source) are not checked.
