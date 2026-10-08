import { css } from '@emotion/react';
import type { OverlayResultProps, OverlayResultTemplatesLegalProps } from '../../../../components/Molecules/OverlayResult';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const overlayText = custom.colors.white;
const overlayMuted = 'rgba(255, 255, 255, 0.7)';
const overlayBorder = 'rgba(255, 255, 255, 0.6)';
const overlayPadding = custom.spacing.x8;
// fades in over the top padding, then stays solid behind the details however tall they grow
const overlayBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.75) ${overlayPadding}px, rgba(0, 0, 0, 0.75) 100%)`;

// CSS in JS style script for the OverlayResult component
const overlayResultStyleScript = (props: OverlayResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// overlay result styles - the image matches the Result component (square, bordered); details sit on the overlay
	const overlayResultStyles = css({
		border: `1px solid ${custom.colors.gray02}`,
		'.ss__overlay-result__image-wrapper': {
			'.ss__image': {
				position: 'relative',
				height: 0,
				padding: '0 0 100% 0',
				overflow: 'hidden',
				img: {
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					margin: 'auto',
					width: '100%',
					height: '100%',
					objectFit: 'contain',
					objectPosition: 'center center',
				},
			},
		},
		'.ss__overlay-result__details': {
			// above the overlay badges - tall details (rating, buttons) can reach the top of the image
			zIndex: 2,
			padding: `${overlayPadding}px ${custom.spacing.x2}px ${custom.spacing.x2}px`,
			gap: `${custom.spacing.x1}px`,
			...custom.styles.baseText(overlayText),
			'.ss__callout-badge, .ss__rating': {
				justifyContent: 'flex-start',
			},
			'& :focus-visible, & [ss-a11y]:focus-visible': {
				...custom.styles.focusRing(overlayText),
			},
			'.ss__overlay-result__details__title, .ss__overlay-result__details__pricing, .ss__overlay-result__rating': {
				margin: 0,
			},
			'.ss__overlay-result__details__title': {
				maxWidth: '100%',
				a: {
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					WebkitLineClamp: '2',
					overflow: 'hidden',
				},
			},
			'.ss__overlay-result__details__extra-inner': {
				display: 'flex',
				flexFlow: 'column nowrap',
				gap: `${custom.spacing.x1}px`,
				'& > *': {
					margin: 0,
				},
			},
			'.ss__overlay-result__details__pricing': {
				'.ss__overlay-result__price': {
					fontSize: '16px',
					'&:not(.ss__price--strike)': {
						fontWeight: custom.fonts.weight01,
					},
				},
				'.ss__price--strike': {
					fontSize: '14px',
					'&, span': {
						color: overlayMuted,
					},
				},
				'.ss__overlay-result__price ~ .ss__overlay-result__price': {
					paddingLeft: `${custom.spacing.x1}px`,
				},
			},
			'.ss__rating': {
				'.ss__rating__count, .ss__rating__text': {
					color: overlayText,
				},
			},
			// controls inside the overlay invert the neutral box (light text on the overlay)
			'.ss__variant-selection .ss__dropdown': {
				'.ss__dropdown__button': {
					color: overlayText,
					borderColor: overlayBorder,
					backgroundColor: 'transparent',
				},
			},
			'.ss__overlay-result__button--addToCart': {
				width: '100%',
				marginTop: `${custom.spacing.x1}px`,
			},
		},
	});

	return overlayResultStyles;
};

// OverlayResult component props
export const overlayResult: ThemeComponent<'overlayResult', OverlayResultProps, OverlayResultTemplatesLegalProps> = {
	default: {
		overlayResult: {
			themeStyleScript: overlayResultStyleScript,
			overlayBackground,
		},
		'overlayResult rating icon.star--empty': {
			color: overlayMuted,
		},
	},
};
