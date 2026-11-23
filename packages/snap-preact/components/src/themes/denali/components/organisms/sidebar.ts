import { css } from '@emotion/react';
import type { SidebarProps, SidebarTemplatesLegalProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Sidebar component
const sidebarStyleScript = ({ theme, treePath }: SidebarProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);
	// a sidebar rendered in a slideout (`... slideout sidebar` in the tree path) fills the panel and pins its footer
	const inSlideout = /\bslideout\b/.test(treePath || '');
	const applyColors = roles.brandFill;

	return css({
		boxSizing: 'border-box',
		width: '100%',
		margin: '0 40px 0 0',
		// at least as tall as the panel's content area (the panel floats 10px off the viewport and pads 10px), so a
		// short list of facets still leaves the footer at the bottom
		...(inSlideout
			? {
					display: 'flex',
					flexDirection: 'column',
					minHeight: 'calc(100vh - 40px)',
			  }
			: {}),

		'& .ss__sidebar__title': {
			color: roles.structure,
		},

		'& .ss__sidebar__header': {
			alignItems: 'center',

			// even space above and below the header row (margins sit on the children so an empty header collapses) -
			// the same as the close button's, so the two center on one line
			'& .ss__sidebar__title': {
				margin: '10px 0',
			},

			// a quiet icon button, not a pill - the same as the quickview's close button
			'& .ss__sidebar__header__close-button': {
				lineHeight: '0px',
				// 20px from the slideout panel's top and right edges, like the other slideouts' close buttons
				margin: '10px 10px 10px 0',
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					border: 0,
					borderRadius: '50%',
					padding: '8px',
					backgroundColor: 'transparent',
				},
				'&:not(.ss__button--disabled):hover': {
					backgroundColor: custom.colors.gray01,
				},
			},
		},

		// the footer buttons span the panel as one row - Apply is the filled primary action and Clear All the outlined
		// secondary beside it, so a lone Apply is a full-width bar rather than a small pill adrift in the middle
		// - always at the bottom of the panel: after the facets when they fill it, and pushed down to the panel's
		// bottom edge when they do not
		'& .ss__sidebar__footer': {
			gap: '10px',
			marginTop: 'auto',
			'& .ss__button': {
				flex: '1 1 0%',
				padding: '12px 15px',
				textAlign: 'center',
				'.ss__button__content': {
					justifyContent: 'center',
				},
			},
			'& .ss__sidebar__footer__apply-button': {
				'&, &:not(.ss__button--disabled):hover': {
					backgroundColor: applyColors[0],
					borderColor: applyColors[0],
					color: applyColors[1],
				},
				'&:not(.ss__button--disabled):hover': {
					opacity: 0.8,
				},
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
			hideClearButtonWithoutFilters: true,
		},
		'sidebar button.close icon': {
			size: 16,
		},
	},
};
