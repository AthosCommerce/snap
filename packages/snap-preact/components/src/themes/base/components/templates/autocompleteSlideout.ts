import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = ({}: AutocompleteSlideoutProps) => {
	return css({});
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
		},
	},
	mobile: autocompleteSlideoutThemeComponentProps.mobile,
	desktop: autocompleteSlideoutThemeComponentProps.desktop,
	tablet: autocompleteSlideoutThemeComponentProps.tablet,
};
