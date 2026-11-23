import { css } from '@emotion/react';
import type { ToolbarProps, ToolbarTemplatesLegalProps } from '../../../../components/Organisms/Toolbar';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = ({ name }: ToolbarProps) => {
	return css({
		// the toolbar under the results (pagination, load more) stands clear of the last row of cards
		marginTop: name == 'bottom' ? '20px' : undefined,
	});
};

// Toolbar component props - the sidebar toggle is a Denali button (an outlined pill in the secondary color)
export const toolbar: ThemeComponent<'toolbar', ToolbarProps, ToolbarTemplatesLegalProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
		'toolbar button.sidebar-toggle': {
			icon: 'filters',
		},
	},
};
