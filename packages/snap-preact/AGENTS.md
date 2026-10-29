# snap-preact: how Snap Templates theming resolves

Applies to `src/Templates/**`, `components/src/**` and `eslint/**`. The root `AGENTS.md` and `components/AGENTS.md` apply as well.

Read this before changing a theme, a template's default layout, selector matching, or the Snap config lint rules (`eslint/`). It's the part of the codebase that most often has to be re-derived from source. The behavior is pinned by `components/src/utilities/mergeProps*.test.ts` and `src/Templates/Stores/ThemeStore.test.ts`. If this file disagrees with those tests, the tests are right, so fix this file.

## Where things live

| Concern                                                                                  | File                                                                                                                                               |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Config → theme layers, breakpoints, `$children` flattening, selector prefixing           | `src/Templates/Stores/ThemeStore.tsx`                                                                                                              |
| `theme.overrides` → ThemeStore input (`default` → `components`, the rest → `responsive`) | `src/Templates/Stores/TemplateStore.ts` (`translatedOverrides`)                                                                                    |
| Per-component prop resolution: selector matching, weights, layer order                   | `components/src/utilities/mergeProps.ts` (its header comment is the spec)                                                                          |
| Theme objects                                                                            | `components/src/themes/<theme>/`. Shared defaults that every theme spreads live in `components/src/themes/themeComponents/*.ts`                    |
| Override typing (which props are legal per selector)                                     | `components/src/providers/themeComponents.ts` (the `*TemplatesLegalProps` types)                                                                   |
| Static lint mirror of all of the above                                                   | `eslint/src/rules/*.cjs` (one file per rule), sharing `eslint/src/utils/` (config detection, AST helpers, and `banners.cjs` for the banner checks) |

## Layers and prefixes

`ThemeStore` rewrites every selector key so that all layers can share one `theme.components` map:

| Layer                               | Key prefix               | Weight |
| ----------------------------------- | ------------------------ | ------ |
| Base theme (`theme.extends`)        | `*`                      | 0      |
| Base theme at the active breakpoint | `*(M)` / `*(T)` / `*(D)` | 1000   |
| User `theme.overrides.default`      | none                     | 2000   |
| User `theme.overrides.<breakpoint>` | `(M)` / `(T)` / `(D)`    | 3000   |

- **Only the active breakpoint's layer is applied** on top of `default`. `getActiveBreakpoint` picks the smallest breakpoint whose value is `>= innerWidth`. Wider than every breakpoint means `default`, so `default` is both the base for all widths and the "wide desktop" state.
- **`$children` is flattened** into space-joined selectors: `search: { $children: { 'toolbar.top': {...} } }` becomes `'search toolbar.top'`. Comma parts are cross-multiplied, so `'a, b': { $children: { c } }` becomes `'a c, b c'`.
- Layers are combined with `deepmerge` and a custom `arrayMerge`. Arrays such as `layout` are effectively **replaced**, not concatenated.

## treePath

`mergeProps(componentType, …)` appends `componentType` (plus `.name` when the component has a valid `name` prop) to the parent's treePath.

- Templates render with no root `TreePathProvider`, so the **root segment is the template's alias**: `search`, `searchCollapsible`, `searchHorizontal`, `autocompleteModal`, and so on. `SearchCollapsible` and `SearchHorizontal` render `<Search alias="…">`, so their subtree is rooted at the alias, not at `search`.
- **With two or more tabs, the root is named after the active tab.** `getTabManager` only creates a tab manager for 2+ tabs, and then `TemplateSelect` passes the active tab's id, lowercased, as the template's `name`. So the root becomes `search.products`, and its children `search.products toolbar.top`. A tab id with characters outside `[A-Za-z0-9-]` is silently dropped from the treePath. Plain `search toolbar.top` still matches every tab, because ancestor segments match by type.
- Templates inject extra segments in some places. Selectors have to account for these:
  - Search toolbars: `<alias> toolbar.top|middle|bottom`.
  - Search sidebar: `<alias> sidebar` on desktop. Below `mobileDisplayAt` it becomes `<alias> slideout sidebar`. `mobileDisplayAt` defaults to the tablet breakpoint, and pike sets it to the mobile breakpoint.
  - Autocomplete layout: `autocompleteModal modal autocompleteLayout`, `autocompleteFixed modal autocompleteLayout`, `autocompleteSlideout slideout autocompleteLayout`.

## Selector matching (`matchSelectors`)

- The **last** segment must equal the component's type, or `type.name`, after the `*` and `(M|T|D)` prefixes are stripped. `toolbar` matches every toolbar, while `toolbar.top` matches only the top one.
- Every other segment must appear among the component's **ancestors, in order**. The ancestors don't have to be adjacent, and each segment can match either the full ancestor segment or its type. `search toolbar.top` does **not** match `searchCollapsible toolbar.top`.
- Comma groups match when any part matches, and they are weighed by the part that matched.

## Priority

The weight is the layer weight plus, for each segment, `((i + 1) * 2) ** (named ? 2 : 1)`, where `i` is the segment's index. Higher weight is applied later and wins. What follows from that:

- **Any user override beats any base-theme selector, whatever its specificity.** A user's bare `toolbar.top` beats the theme's `*searchCollapsible toolbar.top`.
- A user breakpoint override beats the user `default` override.
- Within a layer, deeper selectors and named segments win.

`mergeProps` order in templates mode, lowest to highest (see the header in `mergeProps.ts` for the full T1–T8 detail):

1. Component `defaultProps`
2. JSX props from the parent (a template's `subProps`, e.g. `Search.tsx` passing `layout` to its toolbars)
3. Base `*` selectors
4. Parent-theme-derived respread
5. User override selectors
6. `props.theme.components` selectors injected by a parent (e.g. `layoutOptions[].overrides`)
7. Final respread exceptions (T8), which re-apply raw props over every layer above:
   - `customComponent` paths respread the raw props at every depth.
   - Storybook-rooted paths (`storybook <type>`) respread the story's full args at the subtree root. Deeper in the subtree, only keys provably forwarded from those args are respread.
   - Both keep the enriched `theme` built by the earlier steps rather than the raw one.

Separately, a directly passed `lang` always survives the theme layers (T6).

**Each selector's props are spread shallowly.** If a user overrides `autocompleteModal: { column2: { width: '200px' } }`, the whole `column2` object is replaced and the default `column2.layout` is lost.

## Where default layouts come from

A component's effective default layout comes from up to three places, and all of them need checking:

1. **Template internals**, which are not exported:
   - `Search.tsx` `subProps`: toolbar and sidebar layouts. The middle toolbar's layout depends on `isMobile`.
   - `AutocompleteLayout.tsx`: `defaultProps` holds `layout` (`[['c1', 'c2', 'c3']]`) and `column1`–`column3`. The prebuilt string layouts `terms`/`mobile`/`tablet`/`desktop` are not in `defaultProps`; the render body expands them into module arrays after `mergeProps`.
   - The `defaultProps.layout` of each template.
2. **`themes/themeComponents/*.ts`**: per-template, per-breakpoint layouts and `hideSidebar` toggles. Every theme spreads these.
3. **Per-theme files**. For example, pike sets the autocomplete `layout` to `'desktop'`/`'mobile'`, including `'desktop'` on tablet, and sets `search.mobileDisplayAt`.

### Banners in layouts

Merchandising banners only render where a layout puts them. There is no TypeScript guarantee, so the lint rules check that user overrides don't drop banners the defaults render. `layout-banners` reports layouts that leave a banner out as errors. `hidden-layout-banners` reports hide props such as `hideSidebar` and `excludeBanners` that hide one. It's a warning in `configs.recommended`, because hiding is often deliberate. Both rules share `eslint/src/utils/banners.cjs`, which fails open: anything it can't resolve statically, including a `theme.extends` it can't read, is not reported.

- **Search** (`Layout.tsx`):
  - Toolbars can render `banner.header`, `banner.banner` and `banner.footer`. The `left` banner is not a legal toolbar module.
  - The sidebar can render only `banner.left`.
  - `hideSidebar` and `hide{Top,Middle,Bottom}Toolbar` remove a slot entirely.
- **Autocomplete** (`AutocompleteLayout.tsx`):
  - Any `banner.*` module can go anywhere, inside columns too.
  - `content` implicitly renders header, banner and footer.
  - `facets` and `facetsHorizontal` implicitly render left.
  - `excludeBanners` turns off the implicit banners. Explicit `banner.*` modules still render.
- **FacetsHorizontal has its own overflow sidebar** at `… facetsHorizontal sidebar`. It shows `banner.left` by default, and snappy removes it. That sidebar only renders when the facets overflow, so the lint rule doesn't count it as a place where banners render.
- **Not every shipped default renders every banner.** SearchHorizontal hides the sidebar, and with it `left`, except on mobile. The autocomplete `mobile` layout and the base tablet `[['c1', 'c3']]` layout have no `facets`, so they render no `left`. AutocompleteSlideout never renders `left`.

**Keep the lint rules in sync.** The default-layout tables in `eslint/src/utils/banners.cjs` mirror the sources listed above. Update them in the same PR whenever a template's default layout, a `themeComponents` layout, or a theme's layout or hide prop changes.

- `components/src/themes/layoutBannerDefaults.test.ts` fails when a theme drifts from the tables.
- Template internals such as `Search.tsx` `subProps` and the `AutocompleteLayout` defaults are not covered by that test, so check them by hand.

## The lint plugin (`eslint/`)

The plugin is exported as `@athoscommerce/snap-preact/eslintplugin`, and projects register it as `snap-config`.

- **One rule per file** in `eslint/src/rules/`. Each rule finds configs with `createConfigVisitors` from `eslint/src/utils/config-visitors.cjs`. Each rule has a test file in `eslint/tests/`, except `hidden-layout-banners`, which is tested in `layout-banners.test.cjs`.
- **Projects spread `configs.recommended.rules`** rather than listing rules. That's how a new rule or a severity change reaches projects with a snap-preact bump alone, with no scaffold change. So a new rule goes in `index.cjs` under both `rules` and `configs.recommended`. `eslint/tests/plugin.test.cjs` fails if it's missing from the recommended config.
- **`validate-config` is a deprecated alias.** For older project configs that still enable it by name, it runs exactly the checks it always had: `component-references`, `tabs` and `override-selectors`. That way upgrading snap-preact never adds errors to those projects. Don't add new rules to it, and don't put it in `configs.recommended`, or every problem gets reported twice.
