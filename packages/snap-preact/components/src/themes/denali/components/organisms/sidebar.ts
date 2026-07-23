import { css } from '@emotion/react';
import type { SidebarProps, SidebarTemplatesLegalProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Sidebar component
const sidebarStyleScript = ({ theme }: SidebarProps) => {
	const variables = theme?.variables;

	return css({
		boxSizing: 'border-box',
		width: '100%',
		margin: '0 40px 0 0',

		'& .ss__sidebar__title': {
			color: variables?.colors?.primary,
		},

		'& .ss__sidebar__header': {
			'& .ss__sidebar__header__close-button': {
				lineHeight: '0px',
				padding: '10px',
			},
		},
	});
};

// Sidebar component props
export const sidebar: ThemeComponent<'sidebar', SidebarProps, SidebarTemplatesLegalProps> = {
	default: {
		sidebar: {
			themeStyleScript: sidebarStyleScript,
			hideTitleText: true,
		},
	},
	mobile: {
		sidebar: {
			hideTitleText: false,
		},

		'sidebar button.close icon': {
			size: 10,
		},
	},
};
