import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = ({}: AutocompleteSlideoutProps) => {
	return css({
		...autocompleteSharedStyles,
		'.ss__autocomplete__button--see-more': {
			margin: '10px 0px',
			border: '0px',
		},
	});
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
		},
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
	mobile: autocompleteSlideoutThemeComponentProps.mobile,
	desktop: {
		...autocompleteSlideoutThemeComponentProps.desktop,
		// the shared desktop props set 3 columns - keep the slideout's 2 columns at every width above mobile
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
	tablet: {
		...autocompleteSlideoutThemeComponentProps.tablet,
		// the shared tablet props set no grid here - keep the default layer's grid over the theme's tablet `recommendationGrid` columns
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
};
