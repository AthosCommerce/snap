import { css } from '@emotion/react';
import type { SearchCollapsibleProps, SearchCollapsibleTemplatesLegalProps } from '../../../../components/Templates/SearchCollapsible';
import { searchCollapsibleThemeComponentProps } from '../../../themeComponents/searchCollapsible';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchCollapsibleStyleScript = (props: SearchCollapsibleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&.ss__search-collapsible--sidebar-open': {
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
		'.ss__search-collapsible__header-section, .ss__search-collapsible__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
			},
		},
		'.ss__search-collapsible__header-section': {
			'.ss__search-header': {
				textAlign: 'center',
			},
		},
		'.ss__search-collapsible__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-collapsible__sidebar, .ss__search-collapsible__content': {
				minWidth: '1px',
			},
			'.ss__search-collapsible__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-collapsible__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__toolbar': {
				'.ss__pagination-info': {
					fontSize: custom.utils.convertPxToEm(16),
				},
			},
		},
	});
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
	},
	tablet: {
		...searchCollapsibleThemeComponentProps.tablet,
	},
	desktop: {
		...searchCollapsibleThemeComponentProps.desktop,
	},
};
