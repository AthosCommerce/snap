import { css } from '@emotion/react';
import type { SortByProps, SortByTemplatesLegalProps } from '../../../../components/Molecules/SortBy';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SortBy component
const sortByStyleScript = (props: SortByProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// sortBy styles
	const sortByStyles = css({
		...custom.styles.boxSizing('sortBy', props?.treePath, props?.name),
	});

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
