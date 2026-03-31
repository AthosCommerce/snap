import { css } from '@emotion/react';
import type { SlideshowProps, SlideshowTemplatesLegalProps } from '../../../../components/Molecules/Slideshow';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const slideshowSpacing = custom.spacing.x2;
const slideshowButtonSize = 32;
const slideshowPaginationSize = 12;
const slideshowPaginationSpacing = slideshowSpacing + slideshowPaginationSize;
const activeColors = custom.utils.activeColors();
const buttonColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the Slideshow component
const slideshowStyleScript = (props: SlideshowProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// slideshow styles
	const slideshowStyles = css({
		position: 'relative',
		width: '100%',
		minWidth: '1px',
		...custom.styles.boxSizing('slideshow', props?.treePath, props?.name),
		'&:has(.ss__slideshow__pagination)': {
			paddingBottom: `${slideshowPaginationSpacing}px`,
			'.ss__slideshow__navigation--prev, .ss__slideshow__navigation--next': {
				top: `-${slideshowPaginationSpacing}px`,
			},
		},
		'.ss__slideshow__container': {
			width: 'auto',
			margin: `0 -${slideshowSpacing / 2}px`,
		},
		'.ss__slideshow__navigation--prev, .ss__slideshow__navigation--next': {
			width: `${slideshowButtonSize}px`,
			height: `${slideshowButtonSize}px`,
			top: 0,
			bottom: 0,
			margin: 'auto',
			transform: 'none',
			'.ss__button': {
				flexFlow: 'column nowrap',
				padding: 0,
				width: '100%',
				height: '100%',
				lineHeight: 1,
				color: fontColor,
				[`&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled`]: {
					border: `1px solid ${buttonColor}`,
					backgroundColor: buttonColor,
				},
			},
		},
		'.ss__slideshow__navigation--prev': {
			'.ss__button .ss__icon': {
				left: '-1.5px',
			},
		},
		'.ss__slideshow__navigation--next': {
			'.ss__button .ss__icon': {
				right: '-1.5px',
			},
		},
		'.ss__slideshow__pagination': {
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			margin: 'auto',
			width: 'auto',
			gap: `${custom.spacing.x1}px`,
			'.ss__slideshow__dot': {
				opacity: 1,
				flex: '0 1 auto',
				width: `${slideshowPaginationSize}px`,
				height: `${slideshowPaginationSize}px`,
				lineHeight: `${slideshowPaginationSize}px`,
				minWidth: '1px',
				margin: 0,
				...custom.styles.box('', 0, false),
			},
			'.ss__slideshow__dot--active': {
				backgroundColor: variables?.colors?.primary,
				borderColor: variables?.colors?.primary,
			},
		},
	});

	return slideshowStyles;
};

// Slideshow component props
export const slideshow: ThemeComponent<'slideshow', SlideshowProps, SlideshowTemplatesLegalProps> = {
	default: {
		slideshow: {
			themeStyleScript: slideshowStyleScript,
			gap: slideshowSpacing,
			centerInsufficientSlides: false,
		},
		'slideshow button icon': {
			size: `${custom.sizes.icon12}px`,
		},
		'slideshow button.prev icon': {
			icon: custom.icons.arrowLeft,
		},
		'slideshow button.next icon': {
			icon: custom.icons.arrowRight,
		},
	},
};
