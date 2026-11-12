import { css } from '@emotion/react';
import type { FacetSliderProps, FacetSliderTemplatesLegalProps } from '../../../../components/Molecules/FacetSlider';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetSlider component
const facetSliderStyleScript = ({
	railColor,
	trackColor,
	handleColor,
	valueTextColor,
	handleDraggingColor,
	showTicks,
	stickyHandleLabel,
	theme,
}: FacetSliderProps) => {
	const variables = theme?.variables;
	const activeColors = custom.utils.activeColors(handleColor || variables?.colors?.secondary || custom.colors.black);

	return css({
		marginBottom: showTicks && stickyHandleLabel ? '22px' : showTicks || stickyHandleLabel ? '10px' : '5px',

		'& .ss__facet-slider__slider': {
			height: '5px',
		},

		'& .ss__facet-slider__rail': {
			background: railColor || variables?.colors?.accent,
		},

		'& .ss__facet-slider__segment': {
			background: trackColor || custom.colors.gray01,
			borderRadius: '3px',
		},

		'& .ss__facet-slider__handles': {
			'& button': {
				'& .ss__facet-slider__handle': {
					background: activeColors[0],
					color: valueTextColor || 'inherit',

					'&.ss__facet-slider__handle--active': {
						background: handleDraggingColor || activeColors[0],
					},
				},
				'& .ss__facet-slider__handle:after': {
					background: 'none',
				},
			},
		},

		'& .ss__facet-slider__labels': {
			color: valueTextColor || 'inherit',
		},
	});
};

// FacetSlider component props
export const facetSlider: ThemeComponent<'facetSlider', FacetSliderProps, FacetSliderTemplatesLegalProps> = {
	default: {
		facetSlider: {
			themeStyleScript: facetSliderStyleScript,
		},
	},
};
