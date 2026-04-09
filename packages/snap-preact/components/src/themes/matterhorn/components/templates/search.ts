import { css } from '@emotion/react';
import type { SearchProps, SearchTemplatesLegalProps } from '../../../../components/Templates/Search';
import { searchThemeComponentProps } from '../../../themeComponents/search';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchStyleScript = (props: SearchProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		'&.ss__search--sidebar-open': {
			'.ss__button': {
				'.ss__icon--filter': {
					transform: 'rotate(-180deg)',
				},
				'.ss__icon--filters': {
					circle: {
						'&:last-child': {
							transform: 'translateX(-35%)',
						},
						transform: 'translateX(35%)',
					},
				},
			},
		},
		'.ss__search__header-section, .ss__search__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
			},
		},
		'.ss__search__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search__sidebar, .ss__search__content': {
				minWidth: '1px',
			},
			'.ss__search__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__search__main-section': {
				'.ss__toolbar': {
					'.ss__select': {
						flex: '1 1 0%',
					},
				},
			},
		},
	});
};

// Search component props come from Template export
export const search: ThemeComponent<'search', SearchProps, SearchTemplatesLegalProps> = {
	default: {
		...searchThemeComponentProps.default,
		search: {
			...(searchThemeComponentProps.default?.['search'] || {}),
			themeStyleScript: searchStyleScript,
		},
		'search filterSummary': {
			type: 'list',
		},
	},
	mobile: {
		...searchThemeComponentProps.mobile,
	},
	tablet: {
		...searchThemeComponentProps.tablet,
	},
	desktop: {
		...searchThemeComponentProps.desktop,
	},
};
