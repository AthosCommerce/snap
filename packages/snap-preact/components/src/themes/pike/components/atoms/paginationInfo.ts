import { css } from '@emotion/react';
import type { PaginationInfoProps, PaginationInfoTemplatesLegalProps } from '../../../../components/Atoms/PaginationInfo';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationInfoStyleScript = (props: PaginationInfoProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// pagination info styles
	const paginationInfoStyles = css({
		...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		...custom.styles.boxSizing('paginationInfo', props?.treePath, props?.name),
	});

	return paginationInfoStyles;
};

// PaginationInfo component props
export const paginationInfo: ThemeComponent<'paginationInfo', PaginationInfoProps, PaginationInfoTemplatesLegalProps> = {
	default: {
		paginationInfo: {
			themeStyleScript: paginationInfoStyleScript,
		},
	},
};
