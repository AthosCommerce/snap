import { css } from '@emotion/react';
import type { SwatchesProps, SwatchesTemplatesLegalProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// Swatch carousel sizes and spacing
const swatchSize = 30;
const swatchSpacing = custom.spacing.x1;

// CSS in JS style script for the Swatches component
const swatchesStyleScript = (props: SwatchesProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary || undefined);
	const fontColor =
		activeColor.isDark() || activeColor.hex().toLowerCase() == '#d15120'
			? Color(custom.colors.white || undefined)
			: Color(custom.colors.black || undefined);
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	// shared styles for swatches
	const sharedStyles = css({
		margin: 0,
	});

	// carousel styles
	const carouselStyles = css([
		sharedStyles,
		{
			margin: 0,
			'.ss__carousel': {
				'& > div': {
					minWidth: '1px',
					flex: '0 1 auto',
				},
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					position: 'static',
					bottom: 0,
					width: `${swatchSize}px`,
					height: `${swatchSize}px`,
				},
				'.ss__carousel__prev-wrapper': {
					margin: `0 ${swatchSpacing}px 0 0`,
				},
				'.ss__carousel__next-wrapper': {
					margin: `0 0 0 ${swatchSpacing}px`,
				},
				'.swiper-container': {
					maxWidth: `calc(100% - ${swatchSize * 2 + swatchSpacing * 2}px)`,
					'& > .swiper-wrapper': {
						'& > .swiper-slide': {
							overflow: 'hidden',
							width: `${swatchSize}px`,
							height: `${swatchSize}px`,
							'&:has(.ss__swatches__carousel__swatch.ss__swatches__carousel__swatch--unavailable)': {
								'&:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: 0,
									bottom: 0,
									margin: 'auto',
									width: '100%',
									height: '1px',
									borderTop: `3px solid ${darkGray}`,
									transform: 'rotate(-45deg)',
								},
							},
						},
					},
				},
				'.swiper-container > .swiper-wrapper > .swiper-slide > *, .ss__swatches__carousel__swatch': {
					height: `${swatchSize}px`,
					lineHeight: 0,
					border: 0,
				},
				'.ss__swatches__carousel__swatch': {
					position: 'relative',
					aspectRatio: 1,
					color: variables?.colors?.text,
					overflow: 'hidden',
					'&, &:before, &:after, *': {
						boxSizing: 'border-box',
					},
					'&:before, &:after': {
						content: '""',
						display: 'block',
						width: 'auto',
						height: 'auto',
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						transform: 'none',
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
					'&.ss__swatches__carousel__swatch--dark, &:has(.ss__swatches__carousel__swatch__inner--grey)': {
						'.ss__swatches__carousel__swatch__inner': {
							'.ss__swatches__carousel__swatch__value': {
								color: fontColor.hex(),
							},
						},
					},
					'&.ss__swatches__carousel__swatch--selected': {
						'&:before': {
							opacity: 1,
						},
						'&:after': {
							opacity: 0.3,
						},
						'&:has(.ss__swatches__carousel__swatch__inner:not([style]))': {
							backgroundColor: activeColor.hex(),
							'&:after': {
								borderColor: activeColor.hex(),
								opacity: 1,
							},
							'.ss__swatches__carousel__swatch__inner': {
								'.ss__swatches__carousel__swatch__value': {
									color: fontColor.hex(),
								},
							},
						},
						'&:has(.ss__swatches__carousel__swatch__inner .ss__image)': {
							backgroundColor: 'transparent',
							'&:after': {
								borderColor: custom.colors.black,
								opacity: 0.3,
							},
							'.ss__swatches__carousel__swatch__inner': {
								'.ss__swatches__carousel__swatch__value': {
									color: variables?.colors?.text,
								},
							},
						},
						'.ss__swatches__carousel__swatch__inner': {
							'.ss__swatches__carousel__swatch__value': {
								fontWeight: custom.fonts.weight01,
							},
						},
					},
					'&.ss__swatches__carousel__swatch--disabled, &.ss__swatches__carousel__swatch--unavailable': {
						opacity: 1,
						cursor: 'not-allowed',
						pointerEvents: 'none',
						'.ss__swatches__carousel__swatch__inner:after': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							zIndex: 3,
							margin: 'auto',
							backgroundColor: darkGray.replace('#', ''),
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center center',
							backgroundImage: `url("data:image/svg+xml,%3Csvg style=%27transform: rotate%28-45deg%29%27 xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 56 56%27 preserveAspectRatio=%27xMinYMid%27%3E%3Cpath fill=%27%23${darkGray.replace(
								'#',
								''
							)}%27 d=%27M0 23.297h56v9.406h-56v-9.406z%27 /%3E%3C/svg%3E")`,
						},
					},
					'.ss__swatches__carousel__swatch__inner': {
						'&[style*="url"]': {
							backgroundRepeat: 'no-repeat !important',
							backgroundSize: 'cover !important',
							backgroundPosition: 'center !important',
						},
						'.ss__image': {
							img: {
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
							},
						},
						'.ss__swatches__carousel__swatch__value': {
							display: 'block',
							position: 'absolute',
							zIndex: 2,
							maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
							maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
							overflow: 'hidden',
							textAlign: 'center',
							fontSize: custom.utils.convertPxToEm(12),
							lineHeight: 1,
						},
					},
				},
			},
		},
	]);

	// grid styles
	const gridStyles = css([
		sharedStyles,
		{
			'.ss__grid': {
				'.ss__grid__options': {
					'.ss__grid__option:not(.ss__grid__show-more-wrapper)': {
						width: `${swatchSize}px`,
						maxHeight: `${swatchSize}px`,
					},
				},
			},
		},
	]);

	// return swatch styles
	if (props?.type == 'grid') {
		return gridStyles;
	} else {
		return carouselStyles;
	}
};

// Swatches component props
export const swatches: ThemeComponent<'swatches', SwatchesProps, SwatchesTemplatesLegalProps> = {
	default: {
		swatches: {
			themeStyleScript: swatchesStyleScript,
		},
		'swatches carousel': {
			autoAdjustSlides: false,
			centerInsufficientSlides: false,
			slidesPerView: 'auto',
			slidesPerGroup: 3,
			spaceBetween: `${swatchSpacing}px`,
		},
	},
	desktop: {
		'swatches carousel': {
			slidesPerView: 'auto',
			slidesPerGroup: 2,
			spaceBetween: `${swatchSpacing}px`,
		},
	},
};
