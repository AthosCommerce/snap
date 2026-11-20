import { css } from '@emotion/react';
import type { QuickviewModalProps, QuickviewModalTemplatesLegalProps } from '../../../../components/Templates/QuickviewModal';
import { ThemeComponent } from '../../../../providers';
import { quickviewSharedStyles } from './quickviewShared';

// CSS in JS style script for the QuickviewModal component
const quickviewModalStyleScript = ({ theme }: QuickviewModalProps) => {
	return css({
		...quickviewSharedStyles(theme),
		// a rounded card, like the facet and CTA cards
		'&.ss__quickview-modal .ss__modal__content': {
			borderRadius: '30px',
			overflow: 'hidden',
		},
	});
};

// QuickviewModal component props
export const quickviewModal: ThemeComponent<'quickviewModal', QuickviewModalProps, QuickviewModalTemplatesLegalProps> = {
	default: {
		quickviewModal: {
			themeStyleScript: quickviewModalStyleScript,
		},
	},
};
