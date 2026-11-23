import { css } from '@emotion/react';
import type { NoResultsProps, NoResultsTemplatesLegalProps } from '../../../../components/Organisms/NoResults';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the NoResults component
const noResultsStyleScript = ({ theme }: NoResultsProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return css({
		'.ss__no-results__suggestions__title, .ss__no-results__contact__title, .ss__no-results__recommendations .ss__recommendation__title': {
			color: roles.structure,
		},
		a: {
			color: roles.structure,
		},
		// suggestions and contacts are gray rounded cards, like the autocomplete's no results message
		'.ss__no-results__suggestions, .ss__no-results__contact': {
			boxSizing: 'border-box',
			maxWidth: '600px',
			margin: '0 0 20px',
			padding: '15px 20px',
			borderRadius: '20px',
			backgroundColor: custom.colors.gray01,
			'h3, h4': {
				margin: '0 0 5px',
				fontSize: '14px',
				fontWeight: 'bold',
			},
			'ul, p': {
				margin: 0,
			},
			ul: {
				paddingLeft: '18px',
			},
			li: {
				padding: '2px 0',
			},
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
