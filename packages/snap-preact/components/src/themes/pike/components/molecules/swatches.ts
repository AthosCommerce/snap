import { css } from '@emotion/react';
import type { SwatchesProps, SwatchesTemplatesLegalProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const swatchesSpacing = custom.spacing.x1;
const swatchesSize = 28;
const swatchesSelector = 'ss__swatches__slideshow__swatch';
const darkSelector = `&.${swatchesSelector}--dark, &:has(.${swatchesSelector}__inner--grey), &:has(.${swatchesSelector}__inner--gray)`;
const imageSelector = '&:has(.ss__image)';
const urlSelector = '&[style*="url"]';
const styleSelector = '&[style], &:has(.ss__image)';
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the Swatches component
const swatchesStyleScript = (props: SwatchesProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		...custom.styles.boxSizing('swatches', props?.treePath, props?.name),
	});

	// swatches carousel styles
	const swatchesCarouselStyles = css([
		sharedStyles,
		{
			'.ss__slideshow': {
				display: 'flex',
				flexFlow: 'row wrap',
				gap: `${swatchesSpacing}px`,
				'& > *': {
					minWidth: '1px',
					flex: '1 1 100%',
				},
				'.ss__slideshow__sr-only': {
					order: -2,
				},
				'.ss__slideshow__container': {
					flex: '1 1 0%',
					margin: `0 -${swatchesSpacing / 2}px`,
					'.ss__slideshow__track': {
						'.ss__slideshow__slide': {
							'.ss__swatches__slideshow__swatch': {
								position: 'relative',
								height: `100%`,
								aspectRatio: 1,
								border: 0,
								'.ss__swatches__slideshow__swatch__inner': {
									position: 'relative',
									width: '100%',
									height: '100%',
									...custom.styles.box(variables?.colors?.text, `${custom.spacing.x1}px`),
									'&, .ss__swatches__slideshow__swatch__value': {
										overflow: 'hidden',
									},
									'.ss__swatches__slideshow__swatch__value': {
										maxWidth: '100%',
										maxHeight: '100%',
										textAlign: 'center',
										fontSize: '10px',
										lineHeight: 1,
									},
									[styleSelector]: {
										border: 0,
										backgroundColor: 'transparent',
										'&:before, &:after': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											bottom: 0,
											left: 0,
											right: 0,
											...custom.styles.borderRadius(),
										},
										'&:before': {
											border: `3px solid ${custom.colors.white}`,
											margin: '1px',
											opacity: 0,
										},
										'&:after': {
											border: `1px solid ${custom.colors.black}`,
											opacity: 0.15,
										},
										'.ss__swatches__slideshow__swatch__value': {
											...custom.styles.srOnly(),
										},
									},
									[`${urlSelector}, ${imageSelector}`]: {
										'&:before': {
											margin: 0,
											borderWidth: '4px',
										},
									},
									[urlSelector]: {
										backgroundRepeat: 'no-repeat !important',
										backgroundSize: 'cover !important',
										backgroundPosition: 'center !important',
									},
									[imageSelector]: {
										'&:before, &:after': {
											zIndex: 3,
										},
										'.ss__image, .ss__swatches__slideshow__swatch__value': {
											position: 'absolute',
										},
										'.ss__image': {
											top: 0,
											bottom: 0,
											left: 0,
											right: 0,
											zIndex: 1,
											img: {
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												objectPosition: 'center center',
											},
										},
										'.ss__swatches__slideshow__swatch__value': {
											zIndex: 2,
										},
									},
								},
								[darkSelector]: {
									'.ss__swatches__slideshow__swatch__inner': {
										color: fontColor,
									},
								},
								'&.ss__swatches__slideshow__swatch--disabled, &.ss__swatches__slideshow__swatch--unavailable': {
									opacity: 1,
									'&, &:before, &:after, *': {
										pointerEvents: 'unset',
										cursor: 'not-allowed !important',
									},
									'&:before': {
										maxWidth: `${swatchesSize - 4}px`,
										top: 0,
										bottom: 0,
										zIndex: 3,
										margin: 'auto 0',
										borderTop: `2px solid ${custom.colors.white}`,
										outlineColor: custom.colors.gray02,
										...custom.styles.borderRadius(3),
									},
									'.ss__swatches__slideshow__swatch__inner': {
										opacity: 0.65,
									},
								},
								'&.ss__swatches__slideshow__swatch--selected': {
									'.ss__swatches__slideshow__swatch__inner': {
										borderColor: activeColor,
										backgroundColor: activeColor,
										color: fontColor,
										[styleSelector]: {
											border: 0,
											backgroundColor: 'transparent',
											color: variables?.colors?.text,
											'&:before': {
												opacity: 1,
											},
											'&:after': {
												opacity: 0.3,
											},
										},
										'.ss__swatches__slideshow__swatch__value': {
											fontWeight: custom.fonts.weight01,
										},
									},
									[darkSelector]: {
										'.ss__swatches__slideshow__swatch__inner': {
											color: fontColor,
										},
									},
								},
							},
						},
					},
				},
				'.ss__slideshow__navigation--prev, .ss__slideshow__navigation--next': {
					flex: '0 1 auto',
					width: `${swatchesSize}px`,
					height: `${swatchesSize}px`,
					margin: 0,
					position: 'static',
				},
				'.ss__slideshow__navigation--prev': {
					order: -1,
				},
			},
		},
	]);

	// swatches grid styles
	const swatchesGridStyles = css([
		sharedStyles,
		{
			'.ss__grid .ss__grid__options .ss__grid__option:not(.ss__grid__show-more-wrapper)': {
				maxWidth: `${swatchesSize}px`,
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
			hideLabels: false,
		},
		'swatches slideshow': {
			slideWidth: swatchesSize,
			gap: swatchesSpacing,
			centerInsufficientSlides: false,
		},
		'swatches grid': {
			columns: 4,
			rows: 1,
		},
	},
};
