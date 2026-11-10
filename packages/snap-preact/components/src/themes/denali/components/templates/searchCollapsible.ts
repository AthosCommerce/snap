import { css } from '@emotion/react';
import type { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../../../components/Templates/SearchCollapsible';
import { searchCollapsibleThemeComponentProps } from '../../../themeComponents/searchCollapsible';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Search component
const searchCollapsibleStyleScript = ({ sidebarWidth }: SearchCollapsibleProps) => {
	const _sidebarWidth = sidebarWidth ? `calc(${sidebarWidth} + 1.5em)` : undefined;

	return css({
		'.ss__toolbar .ss__layout__sidebar-toggle-button-wrapper': {
			marginRight: _sidebarWidth ? 'inherit' : 'auto',
			width: _sidebarWidth ? _sidebarWidth : 'inherit',
		},
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
	},
	mobile: searchCollapsibleThemeComponentProps.mobile,
	desktop: searchCollapsibleThemeComponentProps.desktop,
	tablet: searchCollapsibleThemeComponentProps.tablet,
};
