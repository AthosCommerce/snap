import { css } from '@emotion/react';
import type { PaginationInfoProps, PaginationInfoTemplatesLegalProps } from '../../../../components/Atoms/PaginationInfo';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationInfoStyleScript = ({ theme }: PaginationInfoProps) => {
	const variables = theme?.variables;

	return css({
		fontWeight: custom.fonts.weight02,
		color: variables?.colors?.secondary,
	});
};

// PaginationInfo component props
export const paginationInfo: ThemeComponent<'paginationInfo', PaginationInfoProps, PaginationInfoTemplatesLegalProps> = {
	default: {
		paginationInfo: {
			themeStyleScript: paginationInfoStyleScript,
		},
	},
};
