import { css } from '@emotion/react';
import type { SidebarProps, SidebarTemplatesLegalProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Sidebar component
const sidebarStyleScript = (props: SidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// sidebar styles
	const sidebarStyles = css({
		...custom.styles.boxSizing('sidebar', props?.treePath, props?.name),
		'.ss__sidebar__title': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '20px'),
		},
		'.ss__sidebar__inner': {
			'.ss__layout': {
				gap: `${custom.spacing.x6}px`,
			},
			'.ss__select': {
				width: '100%',
				'.ss__dropdown .ss__dropdown__content': {
					zIndex: 6,
				},
			},
		},
	});

	return sidebarStyles;
};

// Sidebar component props
export const sidebar: ThemeComponent<'sidebar', SidebarProps, SidebarTemplatesLegalProps> = {
	default: {
		sidebar: {
			themeStyleScript: sidebarStyleScript,
		},
	},
};
