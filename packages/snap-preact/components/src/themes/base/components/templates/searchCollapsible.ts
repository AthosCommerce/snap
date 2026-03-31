import { css } from '@emotion/react';
import type { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../../../components/Templates/SearchCollapsible';
import { searchCollapsibleThemeComponentProps } from '../../../themeComponents/searchCollapsible';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Search component
const searchCollapsibleStyleScript = ({ theme }: SearchCollapsibleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;
	const sidebarWidth = 'calc(270px + 1.5em)';

	return css({
		'.ss__toolbar .ss__button--sidebar-toggle-button-wrapper': {
			marginRight: sidebarWidth ? 'inherit' : 'auto',
			width: sidebarWidth ? sidebarWidth : 'inherit',
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
	},
	mobile: searchCollapsibleThemeComponentProps.mobile,
	desktop: searchCollapsibleThemeComponentProps.desktop,
	tablet: searchCollapsibleThemeComponentProps.tablet,
};
