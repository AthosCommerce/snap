import { css } from '@emotion/react';
import type { QuickviewModalProps, QuickviewModalTemplatesLegalProps } from '../../../../components/Templates/QuickviewModal';
import { ThemeComponent } from '../../../../providers';
import { quickviewSharedStyles } from './quickviewShared';

// CSS in JS style script for the QuickviewModal component
const quickviewModalStyleScript = ({ theme }: QuickviewModalProps) => {
	// an array, not a spread - the shared styles and the ones below both nest under `.ss__quickview`
	return css([
		quickviewSharedStyles(theme),
		{
			// a rounded card, like the facet and CTA cards
			'&.ss__quickview-modal .ss__modal__content': {
				borderRadius: '30px',
				// clips to the rounded corners and still scrolls when the content is taller than the card's 90vh cap
				overflow: 'auto',
			},
			// on a phone the layout stacks and the image would be a full width square, taller than everything under
			// it - it is capped to under a third of the screen so the details fit without scrolling, and the card
			// floats 10px clear of the screen edges with the height that frees up, like the autocomplete modal
			[`@media (max-width: ${theme?.variables?.breakpoints?.mobile}px)`]: {
				'&.ss__quickview-modal .ss__modal__content': {
					width: 'calc(100vw - 20px)',
					maxWidth: 'calc(100vw - 20px)',
					maxHeight: 'calc(100vh - 20px)',
				},
				// capping the slideshow's width caps the square image's height, and keeps its badges on its corners
				'.ss__quickview .ss__quickview__slideshow': {
					width: '100%',
					maxWidth: '30vh',
					margin: '0 auto',
				},
			},
			// the close button sits 20px from the card's top and right edges, like the slideouts' close buttons
			'.ss__quickview .ss__button.ss__quickview__close': {
				top: '20px',
				right: '20px',
			},
		},
	]);
};

// QuickviewModal component props
export const quickviewModal: ThemeComponent<'quickviewModal', QuickviewModalProps, QuickviewModalTemplatesLegalProps> = {
	default: {
		quickviewModal: {
			themeStyleScript: quickviewModalStyleScript,
		},
	},
};
