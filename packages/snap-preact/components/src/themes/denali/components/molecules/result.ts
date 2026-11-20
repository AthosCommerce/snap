import { css } from '@emotion/react';
import type { ResultProps, ResultTemplatesLegalProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Result component
const resultStyleScript = ({ theme }: ResultProps) => {
	const variables = theme?.variables;

	return css({
		// grid cards: every image is centered in a square, so cards in a row line up whatever the photo's shape
		// (the component's wrapper otherwise stretches to the row and the quickview icon floats under short photos)
		'&.ss__result--grid .ss__result__image-wrapper': {
			flex: '0 0 auto',
			aspectRatio: '1 / 1',
			'& > a, .ss__overlay-badge, .ss__image': {
				height: '100%',
			},
			'.ss__image': {
				alignItems: 'center',
				// the image fills the square - round the photo itself
				img: {
					borderRadius: '20px',
				},
			},
		},
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
