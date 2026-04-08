import { css } from '@emotion/react';
import type { SearchHeaderProps, SearchHeaderTemplatesLegalProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = (props: SearchHeaderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// search header styles
	const searchHeaderStyles = css({
		...custom.styles.boxSizing('searchHeader', props?.treePath, props?.name),
		em: {
			fontStyle: 'normal',
		},
		'.ss__search-header__title': {
			margin: 0,
			...custom.styles.headerText(variables?.colors?.secondary, '22px'),
			'& ~ .ss__search-header__subtitle': {
				marginTop: `${custom.spacing.x2}px`,
			},
		},
		'.ss__search-header__subtitle': {
			margin: 0,
			fontSize: '16px',
			fontWeight: 400,
			color: variables?.colors?.text,
			a: {
				color: variables?.colors?.primary,
			},
		},
		'.ss__search-header__results-query': {
			color: variables?.colors?.primary,
		},
	});

	return searchHeaderStyles;
};

// SearchHeader component props
export const searchHeader: ThemeComponent<'searchHeader', SearchHeaderProps, SearchHeaderTemplatesLegalProps> = {
	default: {
		searchHeader: {
			themeStyleScript: searchHeaderStyleScript,
		},
	},
};
