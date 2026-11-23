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
		// the callout badge and rating get the same space beneath them as the title and price
		'.ss__result__details .ss__result__callout-badge': {
			marginBottom: '5px',
		},
		'.ss__result__details .ss__result__rating': {
			marginBottom: '10px',
		},
		// in a list row the details are left aligned - so are the badge and rating, which center themselves, and a
		// short row of swatches (centered under a grid card's title and price by the prop below)
		'&.ss__result--list .ss__result__details': {
			'.ss__result__callout-badge, .ss__result__rating, .ss__swatches .ss__slideshow__track--centered': {
				justifyContent: 'flex-start',
			},
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
		// swatches that fit without the carousel sit centered, like the title and price above them
		'result swatches slideshow': {
			centerInsufficientSlides: true,
		},
	},
};
