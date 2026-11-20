## Language Translations

Snap Templates includes built-in language support for 15 languages - see [Supported Languages](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_LOCALIZATION.md#supported-languages) for the codes. The active language is set via `config.language` (default English; an unknown code logs a warning and falls back to English). The top-level `translations` property in your configuration lets you override or extend the text strings of any component that has translatable text, for a given language.

### How It Works

Components with translatable text have a `lang` object containing translatable strings. The `translations` config is keyed by language code (`'EN'` or `'en'`), then by component name. Each component entry contains named lang properties. Depending on the property, it accepts a `value` (static string or function), `attributes` (`aria-label`, `aria-valuetext`, `title`, `alt`, `placeholder` - each a string or function), or both; the types reject keys a property does not support.

When a `value` is a function, it receives a `data` object containing relevant component state — this allows dynamic text based on runtime conditions. `data` is typed per lang property, so a misspelled field is a type error. In Snap Templates, the `data` object also includes `activeBreakpoint`, the currently active responsive breakpoint (`'default' | 'desktop' | 'tablet' | 'mobile'`), so translations can vary by screen size. The exceptions are the `gallery`, `quickviewLayout`, `quickviewModal` and `quickviewSlideout` lang entries, which do not receive it.

### Basic Setup

Set `config.language` to one of the supported language codes (e.g. `'EN'`, `'FR'`), then provide overrides in the `translations` block:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

new SnapTemplates(validateTemplatesConfig({
	config: {
		siteId: 'abc123',
		language: 'EN',
		currency: 'USD',
		platform: 'other',
	},
	translations: {
		EN: {
			search: {
				toggleSidebarButtonText: {
					value: 'Filter Results',
				},
			},
			sidebar: {
				titleText: {
					value: 'Refine By',
				},
			},
		},
		FR: {
			search: {
				toggleSidebarButtonText: {
					value: 'Filtrer les résultats',
				},
			},
			sidebar: {
				titleText: {
					value: 'Affiner par',
				},
			},
		},
	},
	theme: {
		extends: 'pike',
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
}));
```

### Dynamic Translation Values

Translation values can be functions that receive component data, enabling conditional or interpolated text:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

new SnapTemplates(validateTemplatesConfig({
	config: {
		siteId: 'abc123',
		language: 'EN',
		platform: 'other',
	},
	translations: {
		EN: {
			search: {
				toggleSidebarButtonText: {
					value: (data: { sidebarOpenState: boolean }) => {
						if (data.sidebarOpenState) {
							return 'Close Sidebar';
						}
						return 'Open Sidebar';
					},
				},
			},
			autocompleteLayout: {
				seeMoreButton: {
					value: (data) =>
						`See ${data?.controller?.store?.pagination?.totalResults} result${
							data?.controller?.store?.pagination?.totalResults === 1 ? '' : 's'
						} for "${data?.controller?.store?.search?.query?.string}"`,
				},
			},
		},
	},
	theme: {
		extends: 'pike',
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
}));
```

### Responsive Translations

Since a `value` function's `data` argument includes `activeBreakpoint` (except for the gallery and quickview lang entries listed above), you can swap out text at different screen sizes without adding your own resize logic — just check `data.activeBreakpoint` inline:

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

new SnapTemplates(validateTemplatesConfig({
	config: {
		siteId: 'abc123',
		language: 'EN',
		platform: 'other',
	},
	translations: {
		EN: {
			search: {
				toggleSidebarButtonText: {
					value: (data) => (data.activeBreakpoint === 'mobile' ? 'Filters' : 'Filter Results'),
				},
			},
			autocompleteLayout: {
				seeMoreButton: {
					value: (data) =>
						data.activeBreakpoint === 'mobile'
							? 'See more'
							: `See ${data?.controller?.store?.pagination?.totalResults} results`,
				},
			},
		},
	},
	theme: {
		extends: 'pike',
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
}));
```

> [!NOTE]
> `activeBreakpoint` reflects the breakpoint thresholds of the extended theme, as overridden by `theme.variables.breakpoints` (see [Global Styles with Breakpoints](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_HOW_TO_THEME_VARIABLES.md#global-styles-with-breakpoints)). It is the smallest breakpoint whose threshold is at or above the current window width, and `'default'` when the width is above every threshold.

### Translation with HTML Attributes

Some lang entries support an `attributes` map for setting HTML attributes like `aria-label` or `placeholder`. This block goes at the top level of the config passed to `validateTemplatesConfig`:

```tsx
translations: {
	EN: {
		searchInput: {
			placeholderText: {
				attributes: {
					placeholder: 'Search our store...',
				},
			},
			closeSearchButton: {
				attributes: {
					'aria-label': 'Close search',
				},
			},
		},
	},
}
```

> [!NOTE]
> The active language is determined at initialization from `config.language`. If you need to support runtime language switching, call the `TemplatesStore.setLanguage()` method, exposed as `window.athos.templates.setLanguage('FR')`. It is async (it loads the language file), logs a warning and leaves the language unchanged for an unknown code, and outside the Template Editor the change does not persist across page loads.
