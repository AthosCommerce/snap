import { css } from '@emotion/react';
import type { OverlayBadgeProps, OverlayBadgeTemplatesLegalProps } from '../../../../components/Molecules/OverlayBadge';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const overlayBadgeStyleScript = (props: OverlayBadgeProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// overlay badge styles
	const overlayBadgeStyles = css({
		...custom.styles.boxSizing('overlayBadge', props?.treePath, props?.name),
		'.ss__overlay-badge__grid-wrapper': {
			zIndex: 1,
			gap: `${custom.spacing.x2}px`,
			bottom: 'auto',
			'.ss__overlay-badge__grid-wrapper__slot': {
				gap: `${custom.spacing.x1}px`,
			},
		},
	});

	return overlayBadgeStyles;
};

// OverlayBadge component props
export const overlayBadge: ThemeComponent<'overlayBadge', OverlayBadgeProps, OverlayBadgeTemplatesLegalProps> = {
	default: {
		overlayBadge: {
			themeStyleScript: overlayBadgeStyleScript,
		},
	},
};
