import { css } from '@emotion/react';
import type { GalleryProps, GalleryTemplatesLegalProps } from '../../../../components/Molecules/Gallery';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Gallery component
const galleryStyleScript = (props: GalleryProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// full screen lightbox - square toolbar buttons and Pike type on the dark backdrop
	const galleryStyles = css({
		// the gallery portals outside the theme scope (no global focus ring) and sits on a dark backdrop
		'& :focus-visible, & [ss-a11y]:focus-visible': {
			...custom.styles.focusRing(custom.colors.white),
		},
		'.ss__gallery__toolbar': {
			gap: `${custom.spacing.x1}px`,
			padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
		},
		'.ss__gallery__button': {
			...custom.styles.borderRadius(0),
			width: `${custom.sizes.height + custom.spacing.x1}px`,
			height: `${custom.sizes.height + custom.spacing.x1}px`,
		},
		'.ss__gallery__counter': {
			padding: 0,
			fontSize: '14px',
			fontWeight: custom.fonts.weight01,
		},
	});

	return galleryStyles;
};

// Gallery component props
export const gallery: ThemeComponent<'gallery', GalleryProps, GalleryTemplatesLegalProps> = {
	default: {
		gallery: {
			themeStyleScript: galleryStyleScript,
		},
		'gallery button icon': {
			size: `${custom.sizes.icon14}px`,
		},
		'gallery button.zoom-out icon': {
			icon: custom.icons.minus,
		},
		'gallery button.zoom-in icon': {
			icon: custom.icons.plus,
		},
		'gallery button.close icon': {
			icon: custom.icons.close,
		},
		'gallery button.prev icon': {
			icon: custom.icons.arrowLeft,
			size: `${custom.sizes.icon16}px`,
		},
		'gallery button.next icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon16}px`,
		},
	},
};
