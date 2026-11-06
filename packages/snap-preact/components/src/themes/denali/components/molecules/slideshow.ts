import { css } from '@emotion/react';
import type { SlideshowProps, SlideshowTemplatesLegalProps } from '../../../../components/Molecules/Slideshow';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Slideshow component
const slideshowStyleScript = ({ theme }: SlideshowProps) => {
	const variables = theme?.variables;
	const secondary = variables?.colors?.secondary || custom.colors.black;

	return css({
		'.ss__slideshow__navigation .ss__button': {
			width: '32px',
			height: '32px',
			padding: 0,
			borderRadius: '50%',
			color: secondary,
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				border: `2px solid ${secondary}`,
				backgroundColor: custom.colors.white,
			},
			'&:not(.ss__button--disabled):hover': {
				backgroundColor: custom.colors.gray01,
			},
			'.ss__icon': {
				position: 'relative',
			},
		},
		// a chevron's weight sits toward its point - nudge it that way to look centered
		'.ss__slideshow__navigation--prev .ss__button .ss__icon': {
			left: '-1px',
		},
		'.ss__slideshow__navigation--next .ss__button .ss__icon': {
			left: '1px',
		},
		// dots are buttons - out-specify the pill button styles
		'.ss__slideshow__pagination .ss__button.ss__slideshow__dot': {
			width: '8px',
			height: '8px',
			padding: 0,
			opacity: 1,
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				border: 0,
				background: custom.colors.controlBorder,
			},
			'&.ss__slideshow__dot--active': {
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					background: variables?.colors?.accent,
				},
			},
		},
	});
};

// Slideshow component props
export const slideshow: ThemeComponent<'slideshow', SlideshowProps, SlideshowTemplatesLegalProps> = {
	default: {
		slideshow: {
			themeStyleScript: slideshowStyleScript,
		},
	},
};
