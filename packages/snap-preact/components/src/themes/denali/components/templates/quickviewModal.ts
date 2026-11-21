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
				overflow: 'hidden',
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
