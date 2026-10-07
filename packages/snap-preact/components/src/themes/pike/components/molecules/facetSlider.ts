import { css } from '@emotion/react';
import type { FacetSliderProps, FacetSliderTemplatesLegalProps } from '../../../../components/Molecules/FacetSlider';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// slider options
const slider = {
	handles: 20, // handle size
	handleInner: 8, // handle inner size - keep the same parity as `handles` so the dot centers on a whole pixel
	values: 14, // values size
	bar: 6, // bar size
	ticks: 17, // size of ticks
	valuesPosition: 'top', // position of slider values (top or bottom)
	valuesAlign: 'sides', // alignment of slider values (sides or center)
};

// value settings
const valuesTop = slider.valuesPosition == 'top' ? true : false;
const valuesSides = slider.valuesAlign == 'sides' ? true : false;

// spacing and size calculations
const handlesSizeHalf = (slider.handles - slider.bar) / 2;
const handlesSpacing = slider.handles + custom.spacing.x2;
const ticksSpacing = slider.ticks + custom.spacing.x1;
const stickySpacing = slider.values + custom.spacing.x2;
const handlesPlusSticky = handlesSizeHalf + stickySpacing;
const ticksPlusSticky = ticksSpacing + stickySpacing;
// slider is inset by half a handle (plus the 4px focus ring) so handles at the ends stay inside the facet,
// which clips overflow
const handlesInset = slider.handles / 2 + 4;

// CSS in JS style script for the FacetSlider component
const facetSliderStyleScript = (props: FacetSliderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const hasTicks = props?.showTicks ? true : false;
	const hasStickyHandles = props?.stickyHandleLabel ? true : false;
	const trackBorderColor = props?.trackColor != custom.colors.gray01 ? custom.utils.darkenColor(props.trackColor, 0.25) : custom.colors.controlBorder;
	const activeColors = custom.utils.activeColors(props?.handleColor || variables?.colors?.secondary || custom.colors.secondary);

	// values font styles
	const valuesStyles = css({
		fontSize: `${slider.values}px`,
		lineHeight: `${slider.values}px`,
	});

	// shared styles
	const sharedStyles = css({
		margin: 'auto',
		'.ss__facet-slider__slider button, .ss__facet-slider__labels label': {
			margin: 0,
			padding: 0,
			'&:focus:not(:focus-visible)': {
				outline: 0,
			},
		},
		'.ss__facet-slider__slider': {
			display: 'block',
			top: 0,
			width: `calc(100% - ${handlesInset * 2}px)`,
			height: `${slider.bar}px`,
			'.ss__facet-slider__segment, .ss__facet-slider__rail, .ss__facet-slider__handles': {
				height: '100%',
			},
			'.ss__facet-slider__tick': {
				'&:before, .ss__facet-slider__tick__label': {
					transform: 'translate(-50%, 0)',
				},
				'&:before': {
					top: `${slider.ticks / 2}px`,
					backgroundColor: custom.colors.gray02,
				},
				'.ss__facet-slider__tick__label': {
					top: `${slider.ticks}px`,
					fontSize: '10px',
					lineHeight: 1,
					color: props?.tickTextColor || custom.colors.gray04,
				},
			},
			'.ss__facet-slider__segment': {
				border: `1px solid ${trackBorderColor}`,
				...custom.styles.borderRadius(slider.bar),
			},
			'.ss__facet-slider__rail': {
				...custom.styles.borderRadius(slider.bar),
			},
			'.ss__facet-slider__handles': {
				position: 'relative',
				button: {
					// ring the round handle, not the (differently sized) button hit area
					'&:focus-visible': {
						outline: 'none !important',
						'.ss__facet-slider__handle': {
							...custom.styles.focusRing(custom.utils.focusColor(variables?.colors?.secondary)),
						},
					},
					'.ss__facet-slider__handle': {
						transform: 'none',
						width: `${slider.handles}px`,
						height: `${slider.handles}px`,
						lineHeight: `${slider.handles}px`,
						'&:after': {
							width: `${slider.handleInner}px`,
							height: `${slider.handleInner}px`,
							backgroundColor: activeColors[1],
						},
						'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
							backgroundColor: 'transparent',
							'&': {
								...valuesStyles,
							},
						},
					},
				},
			},
		},
		'.ss__facet-slider__labels': {
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			justifyContent: valuesSides ? '' : 'center',
			'.ss__facet-slider__label': {
				'&': {
					...valuesStyles,
				},
				'&:after': {
					display: valuesSides ? 'none' : '',
					padding: `0 ${custom.spacing.x1}px`,
				},
				'& ~ .ss__facet-slider__label': {
					marginLeft: valuesSides ? 'auto' : '',
				},
			},
		},
	});

	// spacing styles for different configurations
	// note: default for facet slider is no ticks, no stick handles, values bottom
	let spacingStyles = css({});

	if (hasTicks && hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${valuesTop ? handlesPlusSticky : handlesSizeHalf}px ${handlesInset}px ${valuesTop ? ticksSpacing : ticksPlusSticky}px`,
				'.ss__facet-slider__handles button .ss__facet-slider__handle': {
					'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
						top: valuesTop ? `auto` : `${handlesSizeHalf + ticksPlusSticky - slider.bar}px`,
						bottom: valuesTop ? `${handlesSpacing}px` : ``,
					},
				},
			},
		});
	} else if (hasTicks && !hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${handlesSizeHalf}px ${handlesInset}px ${ticksSpacing}px`,
			},
			'.ss__facet-slider__labels': {
				order: valuesTop ? -1 : '',
				margin: `${valuesTop ? 0 : custom.spacing.x2}px 0 ${valuesTop ? custom.spacing.x2 : 0}px 0`,
			},
		});
	} else if (!hasTicks && hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${valuesTop ? handlesPlusSticky : handlesSizeHalf}px ${handlesInset}px ${valuesTop ? handlesSizeHalf : handlesPlusSticky}px`,
				'.ss__facet-slider__handles button .ss__facet-slider__handle': {
					'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
						top: valuesTop ? 'auto' : `${handlesSpacing}px`,
						bottom: valuesTop ? `${handlesSpacing}px` : ``,
					},
				},
			},
		});
	} else {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${handlesSizeHalf}px ${handlesInset}px`,
			},
			'.ss__facet-slider__labels': {
				order: valuesTop ? -1 : '',
				margin: `${valuesTop ? 0 : custom.spacing.x2}px 0 ${valuesTop ? custom.spacing.x2 : 0}px 0`,
			},
		});
	}

	// facet slider styles
	const facetSliderStyles = css([sharedStyles, spacingStyles]);

	return facetSliderStyles;
};

// FacetSlider component props
export const facetSlider: ThemeComponent<'facetSlider', FacetSliderProps, FacetSliderTemplatesLegalProps> = {
	default: {
		facetSlider: {
			themeStyleScript: facetSliderStyleScript,
			trackColor: custom.colors.gray01,
		},
	},
};
