import { css } from '@emotion/react';
import type { SearchProps, SearchTemplatesLegalProps } from '../../../../components/Templates/Search';
import { searchThemeComponentProps } from '../../../themeComponents/search';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchStyleScript = (props: SearchProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// search styles
	const searchStyles = css({
		...custom.styles.boxSizing('search', props?.treePath, props?.name),
		'.ss__search__header-section, .ss__search__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
		},
		'.ss__search__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search__sidebar, .ss__search__content': {
				minWidth: '1px',
			},
			'.ss__search__sidebar': {
				flex: '0 1 auto',
				'.ss__sidebar': {
					width: '250px',
				},
			},
			'.ss__search__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
			'.ss__toolbar': {
				'.ss__layout__row': {
					'&:has(.ss__pagination-info:last-child)': {
						flexDirection: 'row-reverse',
					},
					'&:has(.ss__mobile-sidebar)': {
						'.ss__mobile-sidebar': {
							minWidth: '1px',
							'.ss__mobile-sidebar__slideout__button': {
								width: '100%',
							},
						},
					},
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__search__main-section': {
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
			'.ss__search__main-section': {
				'.ss__toolbar': {
					'.ss__layout__row': {
						'&:has(.ss__select)': {
							'.ss__select': {
								flex: '1 1 0%',
							},
							'.ss__layout__separator': {
								display: 'none',
							},
						},
						'.ss__pagination-info': {
							flex: '1 1 100%',
							order: -1,
						},
					},
				},
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'.ss__search__main-section': {
				'.ss__toolbar': {
					'.ss__layout__row': {
						'&:has(.ss__select)': {
							'.ss__select': {
								flex: '0 1 auto',
							},
							'.ss__layout__separator': {
								display: 'block',
							},
						},
						'.ss__pagination-info': {
							flex: '1 1 0%',
							order: 0,
						},
					},
				},
			},
		},
	});

	return searchStyles;
};

// Search component props come from Template export
export const search: ThemeComponent<'search', SearchProps, SearchTemplatesLegalProps> = {
	default: {
		...searchThemeComponentProps.default,
		search: {
			...(searchThemeComponentProps.default?.['search'] || {}),
			themeStyleScript: searchStyleScript,
			mobileDisplayAt: `${custom.breakpoints.mobile}px`,
		},
	},
	mobile: {
		...searchThemeComponentProps.mobile,
		search: {
			...(searchThemeComponentProps.mobile?.['search'] || {}),
		},
	},
	tablet: {
		...searchThemeComponentProps.tablet,
		search: {
			...(searchThemeComponentProps.tablet?.['search'] || {}),
		},
		'search results': {
			columns: 2,
		},
	},
	desktop: {
		...searchThemeComponentProps.desktop,
		search: {
			...(searchThemeComponentProps.desktop?.['search'] || {}),
		},
		'search results': {
			columns: 3,
		},
	},
};
