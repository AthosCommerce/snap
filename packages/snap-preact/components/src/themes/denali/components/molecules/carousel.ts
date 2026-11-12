import { css } from '@emotion/react';
import type { CarouselProps, CarouselTemplatesLegalProps } from '../../../../components/Molecules/Carousel';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Carousel component
const carouselStyleScript = ({ theme }: CarouselProps) => {
	const variables = theme?.variables;
	const secondary = variables?.colors?.secondary || custom.colors.black;

	return css({
		'.ss__carousel__prev, .ss__carousel__next': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '32px',
			height: '32px',
			padding: 0,
			borderRadius: '50%',
			border: `2px solid ${secondary}`,
			backgroundColor: custom.colors.white,
			color: secondary,
			'.ss__icon': {
				fill: 'currentColor',
				stroke: 'currentColor',
				position: 'relative',
			},
		},
		// a chevron's weight sits toward its point - nudge it that way to look centered
		'.ss__carousel__prev .ss__icon': {
			left: '-1px',
		},
		'.ss__carousel__next .ss__icon': {
			left: '1px',
		},
		// vertical carousels point up and down - nudge that way instead
		'&.ss__carousel-vertical': {
			// the dots are a 36px column beside the slides (component sizes) - keep the arrows centered on the slides
			'&:has(.swiper-pagination) .ss__carousel__prev-wrapper, &:has(.swiper-pagination) .ss__carousel__next-wrapper': {
				paddingRight: '36px',
			},
			'.ss__carousel__prev .ss__icon, .ss__carousel__next .ss__icon': {
				left: 0,
			},
			'.ss__carousel__prev .ss__icon': {
				top: '-1px',
			},
			'.ss__carousel__next .ss__icon': {
				top: '1px',
			},
		},
		'.swiper-pagination-bullet': {
			background: custom.colors.controlBorder,
			opacity: 1,
			'&.swiper-pagination-bullet-active': {
				background: variables?.colors?.accent,
			},
		},
		'.swiper-scrollbar': {
			backgroundColor: custom.colors.gray01,
			'.swiper-scrollbar-drag': {
				backgroundColor: variables?.colors?.accent,
			},
		},
	});
};

// Carousel component props
export const carousel: ThemeComponent<'carousel', CarouselProps, CarouselTemplatesLegalProps> = {
	default: {
		carousel: {
			themeStyleScript: carouselStyleScript,
		},
	},
};
