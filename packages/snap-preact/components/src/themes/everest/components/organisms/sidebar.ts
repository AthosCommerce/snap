import { css } from '@emotion/react';
import type { SidebarProps, SidebarTemplatesLegalProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Sidebar component
const sidebarStyleScript = (props: SidebarProps) => {
	const variables = props?.theme?.variables;

	return css({
		'.ss__sidebar__title': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			fontSize: custom.utils.convertPxToEm(20),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__sidebar__inner': {
			'.ss__layout': {
				'&, .ss__layout__row': {
					display: 'block',
				},
				'.ss__layout__row': {
					minWidth: '1px',
					'& > div:only-child': {
						width: 'auto',
					},
				},
			},
			'.ss__layout .ss__layout__row, .ss__facets .ss__facet': {
				margin: `0 0 ${custom.spacing.x6}px 0`,
				'&:last-of-type': {
					marginBottom: 0,
				},
			},
			'.ss__filter-summary .ss__filter-summary__title, .ss__facets .ss__facet .ss__facet__header': {
				margin: ` 0 0 ${custom.spacing.x4}px 0`,
				padding: ` 0 0 ${custom.spacing.x2}px 0`,
				borderBottom: `2px solid ${variables?.colors?.primary}`,
				fontSize: custom.utils.convertPxToEm(16),
				fontWeight: custom.fonts.weight02,
				color: variables?.colors?.secondary,
			},
		},
	});
};

// Sidebar component props
export const sidebar: ThemeComponent<'sidebar', SidebarProps, SidebarTemplatesLegalProps> = {
	default: {
		sidebar: {
			themeStyleScript: sidebarStyleScript,
		},
		'sidebar toolbar filterSummary': {
			title: 'Current Filters',
		},
	},
};
