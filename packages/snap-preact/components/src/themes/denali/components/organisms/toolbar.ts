import type { ToolbarProps, ToolbarTemplatesLegalProps } from '../../../../components/Organisms/Toolbar';
import { ThemeComponent } from '../../../../providers';

// Toolbar component props - the sidebar toggle is a Denali button (an outlined pill in the secondary color)
export const toolbar: ThemeComponent<'toolbar', ToolbarProps, ToolbarTemplatesLegalProps> = {
	default: {
		'toolbar button.sidebar-toggle': {
			icon: 'filters',
		},
	},
};
