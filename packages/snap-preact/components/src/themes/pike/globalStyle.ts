import type { ThemeGlobalStyleScript } from '../../providers';

// Global styles injected at the `.ss__theme__pike` scope.
// Use this for styling that should apply broadly rather than configuring each component individually.
export const globalStyle: ThemeGlobalStyleScript = ({}) => ({
	'&, *, *:before, *:after': {
		boxSizing: 'border-box',
	},
});
