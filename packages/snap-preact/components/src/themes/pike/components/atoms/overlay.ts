import { css } from '@emotion/react';
import type { OverlayProps, OverlayTemplatesLegalProps } from '../../../../components/Atoms/Overlay';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Overlay component
const overlayStyleScript = (props: OverlayProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// overlay styles
	const overlayStyles = css({
		cursor: 'pointer',
		...custom.styles.boxSizing('overlay', props?.treePath, props?.name),
	});

	return overlayStyles;
};

// Overlay component props
export const overlay: ThemeComponent<'overlay', OverlayProps, OverlayTemplatesLegalProps> = {
	default: {
		overlay: {
			themeStyleScript: overlayStyleScript,
			color: custom.colors.overlay,
		},
	},
};
