import { css } from '@emotion/react';
import type { CarouselProps, CarouselTemplatesLegalProps } from '../../../../components/Molecules/Carousel';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const carouselOptions = {
	spacing: custom.spacing.x2,
	button: 32, // size of previous next buttons
	pagination: 12, // size of pagination bullets
	scrollbar: 6, // size of scrollbar
};
const activeColors = custom.utils.activeColors();
const buttonColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the Carousel component
const carouselStyleScript = (props: CarouselProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// spacing and position variables for features
	let spacing = 0;
	if (props?.pagination && props?.scrollbar) {
		spacing = carouselOptions.spacing * 2 + carouselOptions.pagination + carouselOptions.scrollbar;
	} else if (props?.pagination && !props?.scrollbar) {
		spacing = carouselOptions.spacing + carouselOptions.pagination;
	} else if (!props?.pagination && props?.scrollbar) {
		spacing = carouselOptions.spacing + carouselOptions.scrollbar;
	}

	// carousel styles
	const carouselStyles = css({
		position: 'relative',
		width: '100%',
		minWidth: '1px',
		...custom.styles.boxSizing('carousel', props?.treePath, props?.name),
		'.ss__carousel__prev-wrapper--hidden > div, .ss__carousel__next-wrapper--hidden > div': {
			...custom.styles.disabled(),
		},
		'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
			width: `${carouselOptions.button}px`,
			height: `${carouselOptions.button}px`,
			display: 'block',
			position: 'absolute',
			top: 0,
			bottom: spacing ? `${spacing}px` : 0,
			zIndex: 2,
			margin: 'auto',
			'& > div': {
				display: 'flex',
				flexFlow: 'column nowrap',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 0,
				width: '100%',
				height: '100%',
				lineHeight: 1,
				backgroundColor: buttonColor,
				color: fontColor,
			},
			'.swiper-button-disabled': {
				...custom.styles.disabled(),
			},
		},
		'.ss__carousel__prev-wrapper': {
			left: 0,
			'& > div .ss__icon': {
				left: '-1.5px',
			},
		},
		'.ss__carousel__next-wrapper': {
			right: 0,
			'& > div .ss__icon': {
				right: '-1.5px',
			},
		},
		'.swiper-container': {
			margin: '0 auto',
			paddingBottom: spacing ? `${spacing}px` : '',
			'& > .swiper-wrapper': {
				'& > .swiper-slide': {
					'& > *, .ss__result': {
						padding: 0,
						margin: 0,
						width: 'auto',
						height: '100%',
					},
				},
			},
			'& > .swiper-pagination': {
				position: 'absolute',
				bottom: props?.scrollbar ? `${carouselOptions.scrollbar + custom.spacing.x2}px` : 0,
				left: 0,
				right: 0,
				margin: 'auto',
				gap: `${custom.spacing.x1}px`,
				'.swiper-pagination-bullet': {
					opacity: 1,
					flex: '0 1 auto',
					width: `${carouselOptions.pagination}px`,
					height: `${carouselOptions.pagination}px`,
					lineHeight: `${carouselOptions.pagination}px`,
					minWidth: '1px',
					margin: 0,
					...custom.styles.box('', 0, false),
				},
				'.swiper-pagination-bullet-active': {
					backgroundColor: variables?.colors?.primary,
					borderColor: variables?.colors?.primary,
				},
			},
			'& > .swiper-scrollbar': {
				height: `${carouselOptions.scrollbar}px`,
				overflow: 'hidden',
				backgroundColor: custom.colors.gray01,
				...custom.styles.borderRadius(carouselOptions.scrollbar, 'px'),
				'&:after': {
					content: '""',
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 1,
					margin: 'auto',
					border: `1px solid ${custom.colors.gray02}`,
				},
				'.swiper-scrollbar-drag': {
					zIndex: 2,
					backgroundColor: variables?.colors?.primary,
				},
			},
		},
		'.swiper-grid-column': {
			'& > .swiper-wrapper': {
				flexFlow: 'row wrap',
				'& > .swiper-slide': {
					height: 'auto !important',
					marginTop: '0 !important',
					marginBottom: `${custom.spacing.x4}px`,
				},
			},
		},
	});

	return carouselStyles;
};

// Carousel component props
export const carousel: ThemeComponent<'carousel', CarouselProps, CarouselTemplatesLegalProps> = {
	default: {
		carousel: {
			themeStyleScript: carouselStyleScript,
			speed: 600,
			spaceBetween: carouselOptions.spacing,
			autoAdjustSlides: false,
			centerInsufficientSlides: false,
		},
		'carousel icon': {
			size: `${custom.sizes.icon08}px`,
		},
		'carousel icon.prev': {
			icon: custom.icons.arrowLeft,
		},
		'carousel icon.next': {
			icon: custom.icons.arrowRight,
		},
	},
};
