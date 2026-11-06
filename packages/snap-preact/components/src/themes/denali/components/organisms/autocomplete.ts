import { css } from '@emotion/react';
import { autocompleteThemeComponentProps } from '../../../themeComponents/autocomplete';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteProps, AutocompleteTemplatesLegalProps } from '../../../../components/Organisms/Autocomplete';

// CSS in JS style script for the Search component
const autocompleteStyleScript = ({}: AutocompleteProps) => {
	return css({});
};

export const autocomplete: ThemeComponent<'autocomplete', AutocompleteProps, AutocompleteTemplatesLegalProps> = {
	default: {
		...autocompleteThemeComponentProps.default,
		autocomplete: {
			...(autocompleteThemeComponentProps.default?.['autocomplete'] || {}),
			themeStyleScript: autocompleteStyleScript,
		},
	},
	mobile: autocompleteThemeComponentProps.mobile,
	desktop: autocompleteThemeComponentProps.desktop,
	tablet: autocompleteThemeComponentProps.tablet,
};
