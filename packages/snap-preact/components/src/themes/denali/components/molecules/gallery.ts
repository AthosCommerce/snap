import { css } from '@emotion/react';
import type { GalleryProps, GalleryTemplatesLegalProps } from '../../../../components/Molecules/Gallery';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Gallery component
const galleryStyleScript = () => {
	return css({
		'.ss__gallery__toolbar': {
			gap: '10px',
			padding: '20px',
		},
		'.ss__gallery__counter': {
			padding: 0,
			fontSize: '14px',
		},
		// zoom and the arrows are white discs with a dark icon, like the carousel's arrows on a light page
		'.ss__gallery__button, .ss__gallery__nav': {
			borderRadius: '50%',
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				border: 0,
				backgroundColor: custom.colors.white,
				backgroundImage: 'none',
				color: custom.colors.black,
				opacity: 1,
			},
			'&:not(.ss__button--disabled):hover': {
				backgroundColor: custom.colors.gray02,
			},
		},
		'.ss__gallery__button': {
			width: '36px',
			height: '36px',
		},
		// closing is a bare X, like the quickview's and the sidebar's close buttons - white on the dark backdrop
		'.ss__gallery__button.ss__gallery__close': {
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				backgroundColor: 'transparent',
				color: custom.colors.white,
			},
			'&:not(.ss__button--disabled):hover': {
				backgroundColor: '#ffffff26',
			},
		},
		// the arrows are buttons centered on the stage's edges, not full height strips
		'.ss__gallery__nav': {
			top: '50%',
			bottom: 'auto',
			width: '40px',
			height: '40px',
			transform: 'translateY(-50%)',
			'.ss__icon': {
				position: 'relative',
			},
		},
		'.ss__gallery__nav--prev': {
			left: '20px',
			// a chevron's weight sits toward its point - nudge it that way to look centered
			'.ss__icon': {
				left: '-1px',
			},
		},
		'.ss__gallery__nav--next': {
			right: '20px',
			'.ss__icon': {
				left: '1px',
			},
		},
		// rounded like the result and quickview images
		'.ss__gallery__image': {
			borderRadius: '20px',
		},
	});
};

// Gallery component props
export const gallery: ThemeComponent<'gallery', GalleryProps, GalleryTemplatesLegalProps> = {
	default: {
		gallery: {
			themeStyleScript: galleryStyleScript,
		},
		'gallery button icon': {
			size: '14px',
		},
		'gallery button.close icon': {
			icon: 'close-thin',
			size: '16px',
		},
	},
};
