import { css } from '@emotion/react';
import type { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../../../components/Templates/SearchCollapsible';
import { searchCollapsibleThemeComponentProps } from '../../../themeComponents/searchCollapsible';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchCollapsibleStyleScript = (props: SearchCollapsibleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// search collapsible styles
	const searchCollapsibleStyles = css({
		...custom.styles.boxSizing('searchCollapsible', props?.treePath, props?.name),
		'&:not(:has(.ss__no-results))': {
			'.ss__search-collapsible__header-section': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				'.ss__toolbar': {
					'.ss__layout__row:has(.ss__search-header)': {
						margin: `0 0 ${custom.spacing.x4}px 0`,
						'.ss__search-header': {
							textAlign: 'center',
						},
					},
				},
			},
		},
		'.ss__search-collapsible__header-section, .ss__search-collapsible__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
		},
		'.ss__search-collapsible__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-collapsible__sidebar, .ss__search-collapsible__content': {
				minWidth: '1px',
			},
			'.ss__search-collapsible__sidebar': {
				flex: '0 1 auto',
				'.ss__sidebar': {
					width: '250px',
				},
			},
			'.ss__search-collapsible__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'&:not(:has(.ss__no-results))': {
				'.ss__search-collapsible__header-section': {
					margin: 0,
					'.ss__toolbar': {
						'.ss__layout__row:has(.ss__search-header)': {
							flexWrap: 'nowrap',
							'.ss__search-header': {
								textAlign: 'left',
								'&:has(.ss__search-header__subtitle)': {
									'.ss__search-header__title': {
										padding: `0 ${custom.spacing.x1}px 0 0`,
										'&:after': {
											content: '"."',
										},
									},
								},
								'.ss__search-header__title, .ss__search-header__subtitle': {
									display: 'inline',
								},
								'.ss__search-header__title': {
									fontSize: '16px',
								},
								'.ss__search-header__subtitle': {
									fontSize: '14px',
								},
							},
						},
					},
				},
			},
			'&:not(.ss__search-collapsible--sidebar-open)': {
				'&:has(.ss__list__option--selected[title*="2"])': {
					'.ss__results-grid': {
						gridTemplateColumns: 'repeat(3, 1fr)',
					},
				},
				'&:has(.ss__list__option--selected[title*="3"])': {
					'.ss__results-grid': {
						gridTemplateColumns: 'repeat(4, 1fr)',
					},
				},
				'&:has(.ss__list__option--selected[title*="4"])': {
					'.ss__results-grid': {
						gridTemplateColumns: 'repeat(5, 1fr)',
					},
				},
			},
		},
	});

	return searchCollapsibleStyles;
};

export const searchCollapsible: ThemeComponent<'searchCollapsible', SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps> = {
	default: {
		...searchCollapsibleThemeComponentProps.default,
		searchCollapsible: {
			...(searchCollapsibleThemeComponentProps.default?.['searchCollapsible'] || {}),
			themeStyleScript: searchCollapsibleStyleScript,
		},
		'searchCollapsible sidebar': {
			hideTitleText: true,
		},
		'searchCollapsible button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'searchCollapsible filterSummary': {
			type: 'list',
		},
	},
	mobile: {
		...searchCollapsibleThemeComponentProps.mobile,
		searchCollapsible: {
			...(searchCollapsibleThemeComponentProps.mobile?.['searchCollapsible'] || {}),
		},
	},
	tablet: {
		...searchCollapsibleThemeComponentProps.tablet,
		searchCollapsible: {
			...(searchCollapsibleThemeComponentProps.tablet?.['searchCollapsible'] || {}),
		},
	},
	desktop: {
		...searchCollapsibleThemeComponentProps.desktop,
		searchCollapsible: {
			...(searchCollapsibleThemeComponentProps.desktop?.['searchCollapsible'] || {}),
			layoutOptions: [
				{
					value: 1,
					label: '3 wide',
					default: true,
					icon: 'layout-grid-3',
					overrides: {
						components: {
							'searchCollapsible results': {
								columns: 3,
							},
						},
					},
				},
				{
					value: 2,
					label: '2 wide',
					icon: 'layout-grid-2',
					overrides: {
						components: {
							'searchCollapsible results': {
								columns: 2,
							},
						},
					},
				},
			],
		},
	},
};
