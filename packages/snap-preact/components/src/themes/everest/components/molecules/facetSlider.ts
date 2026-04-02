import { css } from '@emotion/react';
import type { FacetSliderProps, FacetSliderTemplatesLegalProps } from '../../../../components/Molecules/FacetSlider';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetSlider component
const facetSliderStyleScript = (props: FacetSliderProps) => {
	// slider options
	const slider = {
		handles: 20, // handle size
		values: 14, // values size
		bar: 6, // bar size
		ticks: 17, // size of ticks
		valuesPosition: 'top', // position of slider values (top or bottom)
		valuesAlign: 'sides', // alignment of slider values (sides or center)
	};

	const variables = props?.theme?.variables;
	const fontColor = props?.valueTextColor || variables?.colors?.text;
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);
	const valuesTop = slider.valuesPosition == 'top' ? true : false;
	const valuesSides = slider.valuesAlign == 'sides' ? true : false;
	const hasTicks = props?.showTicks ? true : false;
	const hasStickyHandles = props?.stickyHandleLabel ? true : false;
	const handleColor = new Color(props?.handleColor || variables?.colors?.primary || undefined);
	const handleInnerColor =
		handleColor.isDark() || handleColor.hex().toLowerCase() == '#d15120'
			? Color(custom.colors.white || undefined)
			: Color(custom.colors.black || undefined);

	// values font styles
	const valuesStyles = css({
		fontSize: custom.utils.convertPxToEm(slider.values),
		lineHeight: `${slider.values}px`,
		color: fontColor,
	});

	// shared slider styles
	const sharedStyles = css({
		'&, *': {
			boxSizing: 'border-box',
		},
		'&, .ss__facet-slider__slider': {
			margin: 'auto',
		},
		'.ss__facet-slider__slider button, .ss__facet-slider__labels label': {
			margin: 0,
			padding: 0,
			'&:focus': {
				outline: 0,
			},
		},
		'.ss__facet-slider__slider': {
			display: 'block',
			top: 0,
			width: '100%',
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
					backgroundColor: darkGray,
				},
				'.ss__facet-slider__tick__label': {
					top: `${slider.ticks}px`,
					color: props?.tickTextColor || variables?.colors?.text,
					lineHeight: 1,
				},
			},
			'.ss__facet-slider__segment': {
				backgroundColor: props?.trackColor || custom.colors.gray01,
				border: `1px solid ${props?.trackColor || custom.colors.gray02}`,
				borderRadius: `${slider.bar}px`,
			},
			'.ss__facet-slider__rail': {
				backgroundColor: props?.railColor || variables?.colors?.secondary,
				border: `1px solid ${props?.railColor || variables?.colors?.secondary}`,
			},
			'.ss__facet-slider__handles': {
				position: 'relative',
				margin: `0 ${slider.handles / 2 - 2}px`,
				button: {
					'.ss__facet-slider__handle': {
						transform: 'none',
						width: `${slider.handles}px`,
						height: `${slider.handles}px`,
						lineHeight: `${slider.handles}px`,
						backgroundColor: handleColor.hex(),
						border: `1px solid ${handleColor.hex()}`,
						'&:after': {
							width: `${slider.handles / 4}px`,
							height: `${slider.handles / 4}px`,
							backgroundColor: handleInnerColor.hex(),
							border: `1px solid ${handleInnerColor.hex()}`,
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

	// spacing and size calculations
	const handlesSizeHalf = (slider.handles - slider.bar) / 2;
	const handlesSpacing = slider.handles + custom.spacing.x2;
	const ticksSpacing = slider.ticks + custom.spacing.x1;
	const stickySpacing = slider.values + custom.spacing.x2;
	const handlesPlusSticky = handlesSizeHalf + stickySpacing;
	const ticksPlusSticky = ticksSpacing + stickySpacing;

	// spacing styles for different configurations
	// note: default for facet slider is no ticks, no stick handles, values bottom
	let spacingStyles = css({});

	if (hasTicks && hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${valuesTop ? handlesPlusSticky : handlesSizeHalf}px auto ${valuesTop ? ticksSpacing : ticksPlusSticky}px auto`,
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
				margin: `${handlesSizeHalf}px auto ${ticksSpacing}px auto`,
			},
			'.ss__facet-slider__labels': {
				order: valuesTop ? -1 : '',
				margin: `${valuesTop ? 0 : custom.spacing.x2}px 0 ${valuesTop ? custom.spacing.x2 : 0}px 0`,
			},
		});
	} else if (!hasTicks && hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${valuesTop ? handlesPlusSticky : handlesSizeHalf}px auto ${valuesTop ? handlesSizeHalf : handlesPlusSticky}px auto`,
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
				margin: `${handlesSizeHalf}px auto`,
			},
			'.ss__facet-slider__labels': {
				order: valuesTop ? -1 : '',
				margin: `${valuesTop ? 0 : custom.spacing.x2}px 0 ${valuesTop ? custom.spacing.x2 : 0}px 0`,
			},
		});
	}

	return css([sharedStyles, spacingStyles]);
};

// FacetSlider component props
export const facetSlider: ThemeComponent<'facetSlider', FacetSliderProps, FacetSliderTemplatesLegalProps> = {
	default: {
		facetSlider: {
			themeStyleScript: facetSliderStyleScript,
		},
	},
};
