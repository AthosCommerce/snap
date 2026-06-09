import { css } from '@emotion/react';
import type { RatingProps, RatingTemplatesLegalProps } from '../../../../components/Molecules/Rating';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const darkGray = custom.utils.darkenColor();

// CSS in JS style script for the Rating component
const ratingStyleScript = (props: RatingProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// rating styles
	const ratingStyles = css({
		flexWrap: 'wrap',
		gap: `${custom.spacing.x1}px`,
		lineHeight: 1,
		'.ss__rating__icons': {
			'&, .ss__rating__stars .ss__rating__stars__star': {
				lineHeight: 0,
			},
			'.ss__rating__stars': {
				gap: '2px',
				gridTemplateColumns: 'repeat(5, 1fr)',
			},
		},
		'.ss__rating__count, .ss__rating__text': {
			fontSize: '12px',
		},
	});

	return ratingStyles;
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
		'rating icon.star--empty': {
			color: darkGray,
		},
	},
};
