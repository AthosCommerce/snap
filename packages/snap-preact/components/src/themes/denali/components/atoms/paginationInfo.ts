import { css } from '@emotion/react';
import type { PaginationInfoProps, PaginationInfoTemplatesLegalProps } from '../../../../components/Atoms/PaginationInfo';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the PaginationInfo component
const paginationInfoStyleScript = ({}: PaginationInfoProps) => {
	return css({});
};

// PaginationInfo component props
export const paginationInfo: ThemeComponent<'paginationInfo', PaginationInfoProps, PaginationInfoTemplatesLegalProps> = {
	default: {
		paginationInfo: {
			themeStyleScript: paginationInfoStyleScript,
		},
	},
};
