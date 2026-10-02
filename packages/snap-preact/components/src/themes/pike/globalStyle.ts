import type { ThemeGlobalStyleScript } from '../../providers';
import { custom } from './custom';

// Global styles injected at the `.ss__theme__pike` scope.
// Use this for styling that should apply broadly rather than configuring each component individually.
export const globalStyle: ThemeGlobalStyleScript = ({ variables }) => ({
	'&, *, *:before, *:after': {
		boxSizing: 'border-box',
	},
	// keyboard focus ring - `[ss-a11y]` raises specificity above the rule useA11y injects for those elements
	'& :focus-visible, & [ss-a11y]:focus-visible': {
		...custom.styles.focusRing(custom.utils.focusColor(variables?.colors?.secondary)),
	},
});
