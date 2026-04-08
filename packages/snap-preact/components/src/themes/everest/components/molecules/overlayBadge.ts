import { css } from '@emotion/react';
import type { OverlayBadgeProps, OverlayBadgeTemplatesLegalProps } from '../../../../components/Molecules/OverlayBadge';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const overlayBadgeStyleScript = () => {
	return css({
		'.ss__overlay-badge__grid-wrapper': {
			gap: `${custom.spacing.x1}px`,
			bottom: 'auto',
			'.ss__overlay-badge__grid-wrapper__slot': {
				gap: 0,
				'& > div': {
					padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
					lineHeight: 1,
					span: {
						fontSize: custom.utils.convertPxToEm(12),
					},
				},
			},
		},
	});
};

// OverlayBadge component props
export const overlayBadge: ThemeComponent<'overlayBadge', OverlayBadgeProps, OverlayBadgeTemplatesLegalProps> = {
	default: {
		overlayBadge: {
			themeStyleScript: overlayBadgeStyleScript,
			limit: 3,
		},
	},
};
