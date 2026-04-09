// import { css } from '@emotion/react';
import type { RatingProps, RatingTemplatesLegalProps } from '../../../../components/Molecules/Rating';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Rating component
// const ratingStyleScript = () => {
// };

// Rating component props
export const rating: ThemeComponent<'rating', RatingProps, RatingTemplatesLegalProps> = {
	default: {
		rating: {
			// themeStyleScript: ratingStyleScript,
		},
	},
};
