import { css } from '@emotion/react';
import type { SearchHorizontalProps, SearchHorizontalTemplatesLegalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchHorizontalStyleScript = (props: SearchHorizontalProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		'.ss__search-horizontal__header-section, .ss__search-horizontal__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
				'.ss__layout__row': {
					'&:has(.ss__facets-horizontal)': {
						alignItems: 'flex-start',
						'& > *': {
							minWidth: '1px',
							flex: '0 1 auto',
						},
						'.ss__facets-horizontal': {
							flex: '1 1 0%',
						},
					},
				},
			},
		},
		'.ss__search-horizontal__header-section': {
			'.ss__search-header': {
				textAlign: 'center',
			},
		},
		'.ss__search-horizontal__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-horizontal__sidebar, .ss__search-horizontal__content': {
				minWidth: '1px',
			},
			'.ss__search-horizontal__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-horizontal__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__search-horizontal__main-section': {
				'.ss__toolbar': {
					'.ss__select': {
						flex: '1 1 0%',
					},
				},
			},
		},
	});
};

export const searchHorizontal: ThemeComponent<'searchHorizontal', SearchHorizontalProps, SearchHorizontalTemplatesLegalProps> = {
	default: {
		...searchHorizontalThemeComponentProps.default,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.default?.['searchHorizontal'] || {}),
			themeStyleScript: searchHorizontalStyleScript,
		},
	},
	mobile: {
		...searchHorizontalThemeComponentProps.mobile,
	},
	tablet: {
		...searchHorizontalThemeComponentProps.tablet,
	},
	desktop: {
		...searchHorizontalThemeComponentProps.desktop,
	},
};
