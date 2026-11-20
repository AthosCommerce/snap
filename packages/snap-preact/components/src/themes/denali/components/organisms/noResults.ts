import { css } from '@emotion/react';
import type { NoResultsProps, NoResultsTemplatesLegalProps } from '../../../../components/Organisms/NoResults';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the NoResults component
const noResultsStyleScript = ({ theme }: NoResultsProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__no-results__suggestions__title, .ss__no-results__contact__title, .ss__no-results__recommendations .ss__recommendation__title': {
			color: variables?.colors?.secondary,
		},
		a: {
			color: variables?.colors?.primary,
		},
	});
};

// NoResults component props
export const noResults: ThemeComponent<'noResults', NoResultsProps, NoResultsTemplatesLegalProps> = {
	default: {
		noResults: {
			themeStyleScript: noResultsStyleScript,
		},
	},
};
