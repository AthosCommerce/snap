import { css } from '@emotion/react';
import type { SwatchesProps, SwatchesTemplatesLegalProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

const defaultSwatchesSize = 28;
const swatchesSpacing = 5;

// CSS in JS style script for the Swatches component
const swatchesStyleScript = (props: SwatchesProps) => {
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		'.ss__swatches__slideshow__swatch': {
			border: `1px solid ${custom.colors.controlBorder}`,
			borderRadius: '3px',
			overflow: 'hidden',
			'&.ss__swatches__slideshow__swatch--selected': {
				border: `2px solid ${variables?.colors?.secondary}`,
			},
			'.ss__image': {
				borderRadius: 'inherit',
			},
		},
		'.ss__slideshow .ss__slideshow__navigation .ss__button': {
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				border: 0,
				borderRadius: 0,
				padding: 0,
				backgroundColor: 'transparent',
				...custom.styles.indicator(variables?.colors?.accent),
			},
		},
	});
	const swatchesCarouselStyles = css([
		sharedStyles,
		{
			'.ss__slideshow': {
				display: 'flex',
				alignItems: 'center',
				gap: `${swatchesSpacing}px`,
				// width 0 (not auto) so the swatches never set the card's min width - they overflow into the arrows
				'.ss__slideshow__container': {
					flex: '1 1 0%',
					minWidth: 0,
					width: 0,
				},
				'.ss__slideshow__navigation--prev, .ss__slideshow__navigation--next': {
					position: 'static',
					flex: '0 0 auto',
					transform: 'none',
					'.ss__button': {
						width: '16px',
						height: `${defaultSwatchesSize}px`,
						justifyContent: 'center',
					},
				},
				'.ss__slideshow__navigation--prev': {
					order: -1,
				},
			},
		},
	]);
	const swatchesGridStyles = css([
		sharedStyles,
		{
			// flow tiles inline - the component's grid rows stretch them to the row height
			'.ss__grid .ss__grid__options': {
				display: 'flex',
				flexFlow: 'row wrap',
				alignItems: 'center',
				gap: `${swatchesSpacing}px`,
				// the component's row-height spacer
				'&:before': {
					display: 'none',
				},
				'.ss__grid__option': {
					flex: '0 0 auto',
					width: `${defaultSwatchesSize}px`,
					margin: 0,
				},
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
