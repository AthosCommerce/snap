import { css } from '@emotion/react';
import type { SlideoutProps, SlideoutTemplatesLegalProps } from '../../../../components/Molecules/Slideout';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Slideout component
const slideoutStyleScript = (props: SlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// slideout styles - the panel content owns its padding (sidebar, quickview, autocomplete), so
	// spacing is not doubled up and edge-to-edge parts (sticky footers, dividers) can reach the edges
	const slideoutStyles = css({
		padding: 0,
	});

	return slideoutStyles;
};

// Slideout component props
export const slideout: ThemeComponent<'slideout', SlideoutProps, SlideoutTemplatesLegalProps> = {
	default: {
		slideout: {
			themeStyleScript: slideoutStyleScript,
			overlayColor: custom.colors.overlay,
		},
	},
};
