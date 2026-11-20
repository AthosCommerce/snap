import { css } from '@emotion/react';
import { autocompleteModalThemeComponentProps } from '../../../themeComponents/autocompleteModal';
import { ThemeComponent } from '../../../../providers';
import { autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteModalProps, AutocompleteModalTemplatesLegalProps } from '../../../../components/Templates/AutocompleteModal';

// CSS in JS style script for the Search component
const autocompleteModalStyleScript = ({}: AutocompleteModalProps) => {
	return css({
		...autocompleteSharedStyles,
		'.ss__autocomplete__button--see-more': {
			margin: '10px',
		},
	});
};

export const autocompleteModal: ThemeComponent<'autocompleteModal', AutocompleteModalProps, AutocompleteModalTemplatesLegalProps> = {
	default: {
		...autocompleteModalThemeComponentProps.default,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal'] || {}),
			themeStyleScript: autocompleteModalStyleScript,
		},
		'autocompleteModal recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
	mobile: autocompleteModalThemeComponentProps.mobile,
	desktop: autocompleteModalThemeComponentProps.desktop,
	tablet: {
		...autocompleteModalThemeComponentProps.tablet,
		// the shared tablet props set no grid here - keep the default layer's grid over the theme's tablet `recommendationGrid` columns
		'autocompleteModal recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
};
