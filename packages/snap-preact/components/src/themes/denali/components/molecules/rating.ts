import { css } from '@emotion/react';
import type { RatingProps, RatingTemplatesLegalProps } from '../../../../components/Molecules/Rating';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Rating component
const ratingStyleScript = ({ theme }: RatingProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__rating__stars': {
			gap: '2px',
		},
		'.ss__rating__stars--full .ss__icon': {
			...custom.styles.indicator(variables?.colors?.accent),
		},
		'.ss__rating__stars--empty .ss__icon': {
			...custom.styles.indicator(custom.colors.controlBorder),
		},
		'.ss__rating__count, .ss__rating__text': {
			color: custom.colors.gray03,
		},
	});
};

// Rating component props
export const rating: ThemeComponent<'rating', RatingProps, RatingTemplatesLegalProps> = {
	default: {
		rating: {
			themeStyleScript: ratingStyleScript,
		},
	},
};
