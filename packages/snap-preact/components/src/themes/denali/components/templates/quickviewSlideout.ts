import { css } from '@emotion/react';
import type { QuickviewSlideoutProps, QuickviewSlideoutTemplatesLegalProps } from '../../../../components/Templates/QuickviewSlideout';
import { ThemeComponent } from '../../../../providers';
import { quickviewSharedStyles } from './quickviewShared';

// CSS in JS style script for the QuickviewSlideout component
const quickviewSlideoutStyleScript = ({ theme }: QuickviewSlideoutProps) => {
	// an array, not a spread - the shared styles and the ones below both nest under `.ss__quickview`
	return css([
		quickviewSharedStyles(theme),
		{
			// the close button sits 20px from the panel's top and right edges, like the other slideouts' close buttons
			'.ss__quickview .ss__button.ss__quickview__close': {
				top: '10px',
				right: '12px',
			},
			// the content is at least as tall as the panel's content area (the panel floats 10px off the viewport and pads
			// 10px), so its last row can sit at the bottom of the panel
			'.ss__quickview': {
				display: 'flex',
				flexDirection: 'column',
				minHeight: 'calc(100vh - 40px)',
				'.ss__quickview__content': {
					flex: '1 1 auto',
					display: 'flex',
					flexDirection: 'column',
				},
			},
			// the more info bar sits at the bottom of the panel
			'.ss__quickview .ss__quickview__content > .ss__quickview__row:has(> .ss__quickview__go-to-product)': {
				marginTop: 'auto',
			},
		},
	]);
};

// QuickviewSlideout component props
export const quickviewSlideout: ThemeComponent<'quickviewSlideout', QuickviewSlideoutProps, QuickviewSlideoutTemplatesLegalProps> = {
	default: {
		quickviewSlideout: {
			themeStyleScript: quickviewSlideoutStyleScript,
			// from the left, like the sidebar and autocomplete slideouts - opened from the autocomplete slideout it
			// covers that panel rather than appearing on the far side of the screen
			slideDirection: 'left',
		},
	},
};
