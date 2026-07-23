import { css } from '@emotion/react';
import type { SwatchesProps, SwatchesTemplatesLegalProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';

const defaultSwatchesSize = 28;
const swatchesSpacing = 5;

// CSS in JS style script for the Swatches component
const swatchesStyleScript = (props: SwatchesProps) => {
	// shared styles
	const sharedStyles = css({});
	const swatchesCarouselStyles = css([
		sharedStyles,
		{
			'.ss__slideshow': {},
		},
	]);
	const swatchesGridStyles = css([
		sharedStyles,
		{
			'.ss__grid .ss__grid__options .ss__grid__option:not(.ss__grid__show-more-wrapper)': {
				// maxWidth: `px`,
			},
		},
	]);
	return props?.type == 'grid' ? swatchesGridStyles : swatchesCarouselStyles;
};

// Swatches component props
export const swatches: ThemeComponent<'swatches', SwatchesProps, SwatchesTemplatesLegalProps> = {
	default: {
		swatches: {
			themeStyleScript: swatchesStyleScript,
		},
		'swatches slideshow': {
			slideWidth: defaultSwatchesSize,
			gap: swatchesSpacing,
			centerInsufficientSlides: false,
		},
		'swatches grid': {
			columns: 4,
			rows: 1,
		},
	},
};
