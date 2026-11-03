import { css } from '@emotion/react';
import type { QuickviewModalProps } from '../../../../components/Templates/QuickviewModal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import { quickviewSharedStyleScript, quickviewCloseClearance, quickviewCloseTitleOffset } from './quickviewShared';

// CSS in JS style script for the QuickviewModal component
const quickviewModalStyleScript = (props: QuickviewModalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([
		quickviewSharedStyleScript(props),
		{
			// square panel on the overlay - Pike uses borders rather than rounded, shadowed cards
			'&.ss__quickview-modal .ss__modal__content': {
				borderRadius: 0,
				boxShadow: 'none',
			},
			// side by side columns (QuickviewLayout's 768px breakpoint) - the close icon shares the top row
			// with the title instead of reserving a header strip above the image
			'@media (min-width: 768px)': {
				'.ss__quickview .ss__quickview__content:has(> .ss__quickview__close + .ss__quickview__row > .ss__quickview__column ~ .ss__quickview__column)':
					{
						paddingTop: `${custom.spacing.x4}px`,
						'& > .ss__button.ss__quickview__close': {
							top: `${quickviewCloseTitleOffset}px`,
						},
						'.ss__quickview__title': {
							paddingRight: `${quickviewCloseClearance}px`,
						},
					},
			},
		},
	]);
};

// QuickviewModal component props
export const quickviewModal: ThemeComponent<'quickviewModal', QuickviewModalProps, Partial<QuickviewModalProps>> = {
	default: {
		quickviewModal: {
			themeStyleScript: quickviewModalStyleScript,
		},
		'quickviewModal button.close icon': {
			icon: custom.icons.close,
			size: `${custom.sizes.icon14}px`,
		},
	},
};
