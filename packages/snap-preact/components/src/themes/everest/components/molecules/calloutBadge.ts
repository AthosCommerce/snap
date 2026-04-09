import { css } from '@emotion/react';
import type { CalloutBadgeProps, CalloutBadgeTemplatesLegalProps } from '../../../../components/Molecules/CalloutBadge';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const calloutBadgeStyleScript = () => {
	return css({
		gap: `${custom.spacing.x2}px`,
		'& > div': {
			padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			lineHeight: 1,
			span: {
				fontSize: custom.utils.convertPxToEm(12),
			},
		},
		'.ss__badge-text': {
			padding: `0`,
		},
	});
};

// CalloutBadge component props
export const calloutBadge: ThemeComponent<'calloutBadge', CalloutBadgeProps, CalloutBadgeTemplatesLegalProps> = {
	default: {
		calloutBadge: {
			themeStyleScript: calloutBadgeStyleScript,
			limit: 3,
		},
	},
};
