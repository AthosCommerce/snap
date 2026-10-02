import { css } from '@emotion/react';
import type { QuickviewModalProps } from '../../../../components/Templates/QuickviewModal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import { quickviewSharedStyleScript } from './quickviewShared';

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
