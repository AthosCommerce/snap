# Component standards

Applies to `src/components/**` and `src/themes/**`. The root `AGENTS.md` standards apply as well.

This file lives outside `src/` on purpose: `docs/generateFeed.js` publishes every `.md` file under `src/` to the public docs feed. Don't add markdown under `src/` other than component `readme.md` files.

## Anatomy

Model a new component on an existing one of the same kind (e.g. `src/components/Molecules/Checkbox`) rather than inventing structure. A component directory holds `X.tsx`, `index.ts`, `readme.md`, `X.stories.tsx` and `X.test.tsx`.

- **Props:** `mergeProps('name', globalTheme, defaultProps, properties)`. Defaults go in `defaultProps`, not in scattered `||` fallbacks.
- **Styles:** `const styling = mergeStyles(props, defaultStyles)`, spread as `{...styling}` on the root element. `styling` already carries the consumer's `style`, `styleScript` and theme styles, plus `ss-name` and `ss-path`. Never set `style` or `css` on the root element after the spread (it overrides consumer styles), and don't pass non-prop values into `mergeStyles`.
- **Sub-components:** build a `subProps` object with an `internalClassName`, inherited values wrapped in `defined({ ... })`, `theme: props.theme` and `treePath`. Children add themselves to the tree path; don't append to it manually.
- **Registration:** register prop types (`XProps`, `XTemplatesLegalProps`) in `src/providers/themeComponents.ts`. Components usable in Snap Templates are also registered in `packages/snap-preact/src/Templates/Stores/LibraryStore.ts`. Don't register twice, or re-export something already exported elsewhere.

## Default styles are minimal

- **Function, not look.** Default styles cover layout and behavior. Colors, backgrounds, borders, radii and fonts belong to themes and theme variables (`theme.variables.colors.primary`). Don't add hardcoded colors to default styles.
- **Only generate what applies.** Skip styles a prop makes irrelevant (e.g. pseudo-element content when a custom icon is supplied), and don't hardcode icon fills or strokes that override the `color` prop.
- **Real layout.** Use a wrapper element rather than centering with margins. Derive sizes and timings from props (e.g. `transitionSpeed`) instead of hardcoding them.
- **Themes (`src/themes/*`):** don't repeat responsive blocks. A setting every theme would need belongs in the component default.

## Classnames and targeting

Integrators style and target components by classname, so classnames are part of the public interface.

- **`ss__block__element--modifier`** with kebab-case segments, where the block is the component name: `ss__checkbox`, `ss__checkbox__icon`, `ss__checkbox--disabled`. No generic (`ss__active`) or abbreviated (`atc`) names.
- **Modifiers go on the component root,** not on inner elements. Use one modifier per state: no opposite pairs (`--visible` alongside `--hidden`), and don't repeat a parent's modifier on its children.
- **Every element an integrator might style gets a class.** No classless or purposeless wrapper elements.
- **Theme-scoped and portal classes** come from the active theme name, not a hardcoded one.
- Renaming or removing a released classname is a breaking change.

## Text and lang

- **No hardcoded user-facing text in markup,** including separators and punctuation (a range `-`, count parentheses, "Clear all"). Route it through the component's `lang` prop: a typed `XLang` interface, an English default in the component's `defaultLang`, merged with `useLang`.
- **Translations:** when a component's lang keys change, update the language files in `packages/snap-preact/src/Templates/Stores/library/languages/*.ts`.

## Semantics and accessibility

- **Use the right element:** `button` for actions, `label` only for form controls, headings at the correct level, and `div` rather than `p` where site CSS can bleed in.
- **List-style controls get roles:** `listbox`/`option`, `radiogroup`, `aria-selected`. Keep `aria-disabled` in sync with state, and don't put a11y attributes on non-focusable elements.
- **Overlays** (modals, slideouts) trap focus, close on Escape and return focus when closed.
- **Hidden means not rendered.** A component hidden by its props renders nothing, not an empty container.

## Documentation (readme, stories and tests)

- **`readme.md`** documents every prop with an example and lists the sub-components. It changes in the same PR as the props type.
- **Stories:** put defaults in `Story.args` and spread `{...args}` last, so controls can change every prop. argTypes defaults match the component's real defaults. Don't mutate store data to fake a state; use a query or a background filter.
- **Tests** cover the behavior of each new prop, not just that the component renders.
