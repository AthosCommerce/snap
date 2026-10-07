import { css } from '@emotion/react';
import type { SidebarProps, SidebarTemplatesLegalProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const panelPadding = custom.spacing.x4;
const closeIcon = custom.sizes.icon14; // matches the quickview close icon
const closeInset = custom.spacing.x2; // hit area padding around the close icon (to its left, above and below)
const closeSize = closeIcon + closeInset * 2;

// CSS in JS style script for the Sidebar component
const sidebarStyleScript = (props: SidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	// the close and footer buttons are only shown when the sidebar is a panel (the search slideout)
	const isPanel = !props?.hideCloseButton || !props?.hideApplyButton || !props?.hideClearButton;

	// sidebar styles
	const sidebarStyles = css({
		...(isPanel
			? {
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100%',
					padding: `${panelPadding}px ${panelPadding}px 0`,
			  }
			: {}),
		'.ss__sidebar__title': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			...custom.styles.headerText(variables?.colors?.primary, '20px'),
			lineHeight: 1.2,
		},
		// an empty header (hidden title, no close button) takes no space
		'.ss__sidebar__header:not(:has(.ss__sidebar__title, .ss__sidebar__header__close-button))': {
			display: 'none',
		},
		// control height row, so the title centers on the toolbar row beside the sidebar
		'.ss__sidebar__header': {
			alignItems: 'center',
			gap: `${custom.spacing.x4}px`,
			minHeight: `${custom.sizes.height}px`,
			// matches the search content gap, so the first facet lines up with the first result row
			margin: `0 0 ${custom.spacing.x4}px 0`,
			'.ss__sidebar__title': {
				margin: 0,
			},
			// icon button - the hit area stays inside the content box and the icon sits at its right edge,
			// flush with the content edge
			'.ss__sidebar__header__close-button': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				flex: '0 0 auto',
				width: `${closeSize}px`,
				height: `${closeSize}px`,
				margin: '0 0 0 auto',
				padding: 0,
				lineHeight: 0,
				color: 'inherit',
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					border: 0,
					backgroundColor: 'transparent',
				},
			},
		},
		// pinned to the bottom of the panel so the actions stay reachable while scrolling facets
		'.ss__sidebar__footer:empty': {
			display: 'none',
		},
		'.ss__sidebar__footer': {
			position: 'sticky',
			bottom: 0,
			zIndex: 6, // above facet dropdown content (5)
			margin: `auto -${panelPadding}px 0`,
			padding: `${panelPadding}px`,
			gap: `${custom.spacing.x2}px`,
			backgroundColor: custom.colors.white,
			borderTop: `1px solid ${custom.colors.gray02}`,
			'.ss__button': {
				flex: '1 1 0%',
				minWidth: '1px',
			},
			// secondary action - outlined rather than filled
			'.ss__sidebar__footer__clear-button': {
				color: 'inherit',
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					borderColor: custom.colors.controlBorder,
					backgroundColor: custom.colors.white,
				},
			},
		},
		'.ss__sidebar__inner': {
			marginBottom: isPanel ? `${custom.spacing.x6}px` : '',
			'.ss__layout': {
				gap: `${custom.spacing.x6}px`,
			},
			'.ss__select': {
				width: '100%',
				'.ss__dropdown .ss__dropdown__content': {
					zIndex: 7, // above the sticky footer
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
			closeButtonIcon: custom.icons.close,
		},
		'sidebar button.close icon': {
			size: `${closeIcon}px`,
		},
	},
};
