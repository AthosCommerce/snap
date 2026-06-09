import { css } from '@emotion/react';
import type { SortByProps, SortByTemplatesLegalProps } from '../../../../components/Molecules/SortBy';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the SortBy component
const sortByStyleScript = (props: SortByProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// sortBy styles
	const sortByStyles = css({});

	return sortByStyles;
};

// SortBy component props
export const sortBy: ThemeComponent<'sortBy', SortByProps, SortByTemplatesLegalProps> = {
	default: {
		sortBy: {
			themeStyleScript: sortByStyleScript,
		},
	},
};
