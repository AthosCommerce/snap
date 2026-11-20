import { css } from '@emotion/react';
import type { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../../../components/Templates/SearchCollapsible';
import { searchCollapsibleThemeComponentProps } from '../../../themeComponents/searchCollapsible';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Search component
const searchCollapsibleStyleScript = ({ sidebarWidth, mobileDisplayAt }: SearchCollapsibleProps) => {
	// the toggle's column ends where the results start, so the pagination info lines up with the first result:
	// the sidebar's 40px margin and the 20px content gap, less the toolbar row's own 10px gap
	const _sidebarWidth = sidebarWidth ? `calc(${sidebarWidth} + 50px)` : undefined;

	return css({
		'.ss__toolbar .ss__layout__sidebar-toggle-button-wrapper': {
			marginRight: _sidebarWidth ? 'inherit' : 'auto',
			width: _sidebarWidth ? _sidebarWidth : 'inherit',
		},
		// the sidebar is a slideout below `mobileDisplayAt` - there is no sidebar column to line up with, and the
		// reserved width would push the sort by onto its own row
		...(typeof mobileDisplayAt == 'string' && {
			[`@media (max-width: ${mobileDisplayAt})`]: {
				'.ss__toolbar .ss__layout__sidebar-toggle-button-wrapper': {
					width: 'auto',
				},
			},
		}),
	});
};

// Search component props come from Template export
export const searchCollapsible: ThemeComponent<'searchCollapsible', SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps> = {
	default: {
		...searchCollapsibleThemeComponentProps.default,
		searchCollapsible: {
			...(searchCollapsibleThemeComponentProps.default?.['searchCollapsible'] || {}),
			themeStyleScript: searchCollapsibleStyleScript,
		},
		// a wider mobile facet slideout (the component caps it at 90% of the viewport)
		'searchCollapsible slideout': {
			width: '400px',
		},
		// the slideout sidebar keeps its title at every breakpoint the slideout is used (`mobileDisplayAt`)
		'searchCollapsible slideout sidebar': {
			hideTitleText: false,
		},
	},
	mobile: searchCollapsibleThemeComponentProps.mobile,
	desktop: searchCollapsibleThemeComponentProps.desktop,
	tablet: searchCollapsibleThemeComponentProps.tablet,
};
