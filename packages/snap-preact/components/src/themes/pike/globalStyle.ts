import type { ThemeGlobalStyleScript } from '../../providers';
import { custom } from './custom';

// text entry fields - every focus on these is :focus-visible (a caret means typing), mouse or keyboard
const textFields = 'textarea, input:not([type="checkbox"], [type="radio"], [type="button"], [type="submit"], [type="reset"])';

// Global styles injected at the `.ss__theme__pike` scope.
// Use this for styling that should apply broadly rather than configuring each component individually.
export const globalStyle: ThemeGlobalStyleScript = ({ variables }) => {
	const focusColor = custom.utils.focusColor(variables?.colors?.secondary);

	return {
		'&, *, *:before, *:after': {
			boxSizing: 'border-box',
		},
		// keyboard focus ring - `[ss-a11y]` raises specificity above the rule useA11y injects for those elements
		[`& :focus-visible:not(${textFields}), & [ss-a11y]:focus-visible:not(${textFields})`]: {
			...custom.styles.focusRing(focusColor),
		},
		// text fields show focus with a stronger edge instead of the ring, so mouse users see no ring
		[`& :is(${textFields}):focus`]: {
			...custom.styles.fieldFocus(focusColor),
		},
	};
};
