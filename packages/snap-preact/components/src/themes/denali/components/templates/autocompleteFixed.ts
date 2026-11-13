import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = ({}: AutocompleteSlideoutProps) => {
	return css({
		...autocompleteSharedStyles,
		'.ss__autocomplete__button--see-more': {
			margin: '10px',
		},
		// the results column of a fixed panel is narrow - the text uses the full card width
		'.ss__autocomplete__content .ss__results .ss__result__details': {
			paddingLeft: 0,
			paddingRight: 0,
		},
	});
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
		},

		'autocompleteFixed recommendationGrid': {
			columns: 4,
			rows: 2,
		},
		// the layout's default 3 columns overflow the results column of a fixed panel (it is as wide as the input)
		'autocompleteFixed results': {
			columns: 2,
			rows: 2,
			gapSize: '10px',
		},
	},
	mobile: autocompleteFixedThemeComponentProps.mobile,
	desktop: autocompleteFixedThemeComponentProps.desktop,
	tablet: {
		...autocompleteFixedThemeComponentProps.tablet,
		// the shared tablet props set no grid here, and the default layer's 4 columns overflow the tablet panel
		'autocompleteFixed recommendationGrid': {
			columns: 3,
			rows: 2,
		},
	},
};
