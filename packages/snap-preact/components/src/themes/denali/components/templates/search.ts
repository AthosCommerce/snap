import { css } from '@emotion/react';
import type { SearchProps, SearchTemplatesLegalProps } from '../../../../components/Templates/Search';
import { searchThemeComponentProps } from '../../../themeComponents/search';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Search component
const searchStyleScript = ({ theme }: SearchProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Search component props come from Template export
export const search: ThemeComponent<'search', SearchProps, SearchTemplatesLegalProps> = {
	default: {
		...searchThemeComponentProps.default,
		search: {
			...(searchThemeComponentProps.default?.['search'] || {}),
			themeStyleScript: searchStyleScript,
		},
		// a wider mobile facet slideout (the component caps it at 90% of the viewport)
		'search slideout': {
			width: '400px',
		},
		// the slideout sidebar keeps its title at every breakpoint the slideout is used (`mobileDisplayAt`)
		'search slideout sidebar': {
			hideTitleText: false,
		},
	},
	mobile: searchThemeComponentProps.mobile,
	desktop: searchThemeComponentProps.desktop,
	tablet: searchThemeComponentProps.tablet,
};
