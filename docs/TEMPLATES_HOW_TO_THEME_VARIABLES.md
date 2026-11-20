## Using Theme Variables in Styles

Theme breakpoint values (set in `theme.variables.breakpoints`, merged over the extended theme's own values) are available inside both the global `theme.style` function (as `variables.breakpoints`) and component-level style scripts (as `props.theme.variables.breakpoints`). Using them ensures your media queries always stay in sync with the responsive overrides defined in your theme configuration.

### Global Styles with Breakpoints

The `theme.style` function receives an object with the theme's `name` and `variables`, giving you access to `variables.breakpoints`. Use template literals to build Emotion-compatible media query keys. Type the function with `GlobalThemeStyleScript` from `@athoscommerce/snap-preact`; `ThemeVariables` comes from `@athoscommerce/snap-preact/components`.

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import type { GlobalThemeStyleScript } from '@athoscommerce/snap-preact';
import type { ThemeVariables } from '@athoscommerce/snap-preact/components';

export const globalStyles: GlobalThemeStyleScript = (theme: { name?: string; variables: ThemeVariables }) => {
	const { variables } = theme;

	return {
		// Base styles — apply at all sizes
		'.ss__result__details__title': {
			fontSize: '14px',
		},

		// Tablet and below
		[`@media (max-width: ${variables.breakpoints.tablet}px)`]: {
			'.ss__result__details__title': {
				fontSize: '13px',
			},
			'.ss__search__sidebar': {
				width: '220px',
			},
		},

		// Mobile and below
		[`@media (max-width: ${variables.breakpoints.mobile}px)`]: {
			'.ss__result__details__title': {
				fontSize: '12px',
			},
		},
	};
};

new SnapTemplates(validateTemplatesConfig({
	...
	theme: {
		extends: 'pike',
		variables: {
			breakpoints: { 
				mobile: 768, 
				tablet: 1024, 
				desktop: 1280 
			},
		},
		style: globalStyles,
	},
	...
}));
```
