import { css } from '@emotion/react';
import type { ToolbarProps, ToolbarTemplatesLegalProps } from '../../../../components/Organisms/Toolbar';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Toolbar component
const toolbarStyleScript = () => {
	return css({});
};

// Toolbar component props
export const toolbar: ThemeComponent<'toolbar', ToolbarProps, ToolbarTemplatesLegalProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
	},
};
