import { css } from '@emotion/react';
import type { SearchHeaderProps, SearchHeaderTemplatesLegalProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = ({ theme }: SearchHeaderProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__search-header__title': {
			color: variables?.colors?.secondary,
			marginBottom: 0,
			fontWeight: 'initial',
			fontSize: '25px',
		},
		'.ss__search-header__subtitle': {
			fontWeight: 'initial',
			fontSize: '16px',
		},
		'.ss__search-header__results-query, .ss__search-header__subtitle a': {
			color: variables?.colors?.primary,
		},
	});
};

// SearchHeader component props
export const searchHeader: ThemeComponent<'searchHeader', SearchHeaderProps, SearchHeaderTemplatesLegalProps> = {
	default: {
		searchHeader: {
			themeStyleScript: searchHeaderStyleScript,
		},
	},
};
