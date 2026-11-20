import { css } from '@emotion/react';
import type { QuickviewSlideoutProps, QuickviewSlideoutTemplatesLegalProps } from '../../../../components/Templates/QuickviewSlideout';
import { ThemeComponent } from '../../../../providers';
import { quickviewSharedStyles } from './quickviewShared';

// CSS in JS style script for the QuickviewSlideout component
const quickviewSlideoutStyleScript = ({ theme }: QuickviewSlideoutProps) => {
	return css(quickviewSharedStyles(theme));
};

// QuickviewSlideout component props
export const quickviewSlideout: ThemeComponent<'quickviewSlideout', QuickviewSlideoutProps, QuickviewSlideoutTemplatesLegalProps> = {
	default: {
		quickviewSlideout: {
			themeStyleScript: quickviewSlideoutStyleScript,
		},
	},
};
