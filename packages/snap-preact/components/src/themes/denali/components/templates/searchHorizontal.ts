import { css } from '@emotion/react';
import type { SearchHorizontalProps, SearchHorizontalTemplatesLegalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Search component
const searchHorizontalStyleScript = ({ theme }: SearchHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({
		// room between the title and the facet bar beneath it
		'& .ss__search-horizontal__header-section': {
			marginBottom: '15px',
			// the shared layout centers the title between two spacers - without the leading one it sits on the left
			// edge, in line with the facet bar and result count below it
			'.ss__layout__row:has(.ss__search-header) > .ss__layout__separator:first-child': {
				display: 'none',
			},
		},
	});
};

// Search component props come from Template export
export const searchHorizontal: ThemeComponent<'searchHorizontal', SearchHorizontalProps, SearchHorizontalTemplatesLegalProps> = {
	default: {
		...searchHorizontalThemeComponentProps.default,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.default?.['searchHorizontal'] || {}),
			themeStyleScript: searchHorizontalStyleScript,
		},
		// a wider mobile facet slideout (the component caps it at 90% of the viewport)
		'searchHorizontal slideout': {
			width: '400px',
		},
		// the slideout sidebar keeps its title at every breakpoint the slideout is used (`mobileDisplayAt`)
		'searchHorizontal slideout sidebar': {
			hideTitleText: false,
		},
		'searchHorizontal results': {
			columns: 5,
		},
	},
	mobile: {
		...searchHorizontalThemeComponentProps.mobile,
		'searchHorizontal results': {
			columns: 2,
		},
		'searchHorizontal filterSummary': {
			hideTitle: false,
		},
	},
	tablet: {
		...searchHorizontalThemeComponentProps.tablet,
		'searchHorizontal results': {
			columns: 3,
		},
	},
	desktop: {
		...searchHorizontalThemeComponentProps.desktop,
		'searchHorizontal results': {
			columns: 4,
		},
	},
};
