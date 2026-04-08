import { css } from '@emotion/react';
import type { SearchHeaderProps, SearchHeaderTemplatesLegalProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = (props: SearchHeaderProps) => {
	const variables = props?.theme?.variables;

	return css({
		em: {
			fontStyle: 'normal',
		},
		'.ss__search-header__title': {
			margin: 0,
			fontSize: custom.utils.convertPxToEm(22),
			fontWeight: custom.fonts.weight02,
			textTransform: custom.fonts.transform,
			color: variables?.colors?.secondary,
		},
		'.ss__search-header__subtitle': {
			margin: `${custom.spacing.x2}px 0 0 0`,
			fontSize: custom.utils.convertPxToEm(16),
			fontWeight: 400,
			color: variables?.colors?.text,
			a: {
				color: variables?.colors?.secondary,
			},
		},
		'.ss__search-header__results-query': {
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
