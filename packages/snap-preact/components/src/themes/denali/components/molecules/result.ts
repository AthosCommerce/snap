import { css } from '@emotion/react';
import type { ResultProps, ResultTemplatesLegalProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Result component
const resultStyleScript = ({ theme }: ResultProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__result__details a': {
			color: 'inherit',
		},
		'.ss__result__details__variant-selection': {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},
		'&.ss__result--sale .ss__result__details__pricing .ss__result__price:not(.ss__price--strike)': {
			'&, span': {
				color: variables?.colors?.primary,
			},
		},
	});
};

// Result component props
export const result: ThemeComponent<'result', ResultProps, ResultTemplatesLegalProps> = {
	default: {
		result: {
			themeStyleScript: resultStyleScript,
		},
	},
};
