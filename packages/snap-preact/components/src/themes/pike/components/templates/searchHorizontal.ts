import { css } from '@emotion/react';
import type { SearchHorizontalProps, SearchHorizontalTemplatesLegalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchHorizontalStyleScript = (props: SearchHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile ?? custom.breakpoints.mobile;

	// search horizontal styles
	const searchHorizontalStyles = css({
		'.ss__search-horizontal__header-section, .ss__search-horizontal__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
		},
		'.ss__search-horizontal__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-horizontal__content': {
				minWidth: '1px',
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
			// facets share a toolbar row (e.g. with sort by) - take the remaining width so the dropdown labels fit,
			// and no margin, which would offset them from the row's other (vertically centered) items
			'.ss__facets-horizontal': {
				flex: '1 1 0%',
				minWidth: 0,
				margin: 0,
			},
			'.ss__toolbar': {
				'.ss__layout__row': {
					// the facets fill the row themselves - a separator would take half the space and truncate their labels
					'&:has(.ss__facets-horizontal)': {
						// facets may wrap onto several lines - align the row's other items with the first line
						alignItems: 'flex-start',
						'.ss__layout__separator': {
							display: 'none',
						},
					},
					'.ss__layout__sidebar-toggle-button-wrapper': {
						'.ss__button': {
							width: '100%',
						},
					},
					'.ss__select': {
						flex: '1 1 0%',
					},
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__search-horizontal__main-section': {
				'.ss__toolbar': {
					'.ss__layout__sidebar-toggle-button-wrapper': {
						minWidth: '200px',
					},
				},
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__search-horizontal__main-section': {
				'.ss__toolbar': {
					'.ss__layout__row': {
						'.ss__select': {
							flex: '0 1 auto',
						},
					},
				},
			},
		},
	});

	return searchHorizontalStyles;
};

export const searchHorizontal: ThemeComponent<'searchHorizontal', SearchHorizontalProps, SearchHorizontalTemplatesLegalProps> = {
	default: {
		...searchHorizontalThemeComponentProps.default,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.default?.['searchHorizontal'] || {}),
			themeStyleScript: searchHorizontalStyleScript,
		},
		'searchHorizontal results': {
			columns: 5,
		},
	},
	mobile: {
		...searchHorizontalThemeComponentProps.mobile,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.mobile?.['searchHorizontal'] || {}),
		},
	},
	tablet: {
		...searchHorizontalThemeComponentProps.tablet,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.tablet?.['searchHorizontal'] || {}),
		},
	},
	desktop: {
		...searchHorizontalThemeComponentProps.desktop,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.desktop?.['searchHorizontal'] || {}),
		},
		'searchHorizontal results': {
			columns: 4,
		},
	},
};
