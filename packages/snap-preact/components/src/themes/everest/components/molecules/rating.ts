import { css } from '@emotion/react';
import type { RatingProps, RatingTemplatesLegalProps } from '../../../../components/Molecules/Rating';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Rating component
const ratingStyleScript = (props: RatingProps) => {
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	return css({
		flexWrap: 'wrap',
		gap: `${custom.spacing.x1}px`,
		lineHeight: 1,
		'.ss__rating__icons': {
			'.ss__rating__stars': {
				margin: '0 -1px',
				'.ss__rating__stars__star': {
					margin: '0 1px',
				},
			},
			'.ss__rating__stars--empty': {
				'.ss__rating__stars__star .ss__icon': {
					fill: darkGray,
					stroke: darkGray,
				},
			},
			'.ss__rating__stars--full': {
				'.ss__rating__stars__star .ss__icon': {
					fill: variables?.colors?.primary,
					stroke: variables?.colors?.primary,
				},
			},
		},
		'.ss__rating__count, .ss__rating__text': {
			fontSize: custom.utils.convertPxToEm(12),
			color: variables?.colors?.text,
		},
	});
};

// Rating component props
export const rating: ThemeComponent<'rating', RatingProps, RatingTemplatesLegalProps> = {
	default: {
		rating: {
			themeStyleScript: ratingStyleScript,
			emptyIcon: 'star',
			fullIcon: 'star',
		},
		'rating icon': {
			size: `${custom.sizes.icon14}px`,
		},
	},
};
