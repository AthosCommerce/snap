import { css } from '@emotion/react';
import type { ToolbarProps, ToolbarTemplatesLegalProps } from '../../../../components/Organisms/Toolbar';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Toolbar component
const toolbarStyleScript = ({ theme }: ToolbarProps) => {
	const variables = theme?.variables;
	return css({
		'.ss__layout__sidebar-toggle-button-wrapper .ss__button': {
			color: variables?.colors.secondary,
			borderColor: variables?.colors.accent,

			'&:hover': {
				background: variables?.colors.accent,
			},
		},
	});
};

// Toolbar component props
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
