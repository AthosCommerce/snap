import { css } from '@emotion/react';
import type { SearchHorizontalProps, SearchHorizontalTemplatesLegalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchHorizontalStyleScript = (props: SearchHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// search horizontal styles
	const searchHorizontalStyles = css({
		...custom.styles.boxSizing('searchHorizontal', props?.treePath, props?.name),
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
			'.ss__facets-horizontal': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
			},
			'.ss__toolbar': {
				'.ss__layout__row': {
					'&:has(.ss__mobile-sidebar)': {
						'.ss__mobile-sidebar': {
							minWidth: '1px',
							'.ss__mobile-sidebar__slideout__button': {
								width: '100%',
							},
						},
					},
					'&:has(.ss__select)': {
						'.ss__select': {
							flex: '1 1 0%',
						},
					},
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__search-horizontal__main-section': {
				'.ss__toolbar': {
					'.ss__layout__row:has(.ss__mobile-sidebar)': {
						'.ss__mobile-sidebar': {
							minWidth: '200px',
						},
					},
				},
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__search-horizontal__main-section': {
				'.ss__toolbar': {
					'.ss__layout__row:has(.ss__select)': {
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
