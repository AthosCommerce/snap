import { css } from '@emotion/react';
import type { SearchHeaderProps, SearchHeaderTemplatesLegalProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = ({ theme }: SearchHeaderProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return css({
		'.ss__search-header__title': {
			color: roles.structure,
			marginBottom: 0,
			fontWeight: 'initial',
			fontSize: '25px',
		},
		'.ss__search-header__subtitle': {
			fontWeight: 'initial',
			fontSize: '16px',
		},
		// the query, and the original and corrected queries of a spelling correction, are highlights
		'.ss__search-header__results-query, .ss__search-header__subtitle em': {
			color: roles.highlight,
		},
		// a did you mean suggestion is a text action
		'.ss__search-header__subtitle a': {
			color: roles.structure,
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
