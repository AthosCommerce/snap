import { css } from '@emotion/react';
import type { QuickviewSlideoutProps } from '../../../../components/Templates/QuickviewSlideout';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import { quickviewSharedStyleScript } from './quickviewShared';

// CSS in JS style script for the QuickviewSlideout component
const quickviewSlideoutStyleScript = (props: QuickviewSlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css([quickviewSharedStyleScript(props)]);
};

// QuickviewSlideout component props
export const quickviewSlideout: ThemeComponent<'quickviewSlideout', QuickviewSlideoutProps, Partial<QuickviewSlideoutProps>> = {
	default: {
		quickviewSlideout: {
			themeStyleScript: quickviewSlideoutStyleScript,
			overlayColor: custom.colors.overlay,
		},
		'quickviewSlideout button.close icon': {
			icon: custom.icons.close,
			size: `${custom.sizes.icon14}px`,
		},
	},
};
