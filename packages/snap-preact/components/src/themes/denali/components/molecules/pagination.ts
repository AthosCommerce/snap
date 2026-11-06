import { css } from '@emotion/react';
import type { PaginationProps, PaginationTemplatesLegalProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = ({ theme }: PaginationProps) => {
	const variables = theme?.variables;

	return css({
		'& .ss__pagination__page': {
			border: `1px solid ${custom.colors.gray02}`,
			borderRadius: '10px',
			background: custom.colors.white,
			padding: '5px 10px',
			margin: '0px 5px',
			color: 'inherit',

			'&:hover': {
				background: custom.colors.gray01,
			},
			'&.ss__pagination__page--active': {
				...custom.styles.activeText(variables?.colors?.primary),
				borderColor: variables?.colors?.secondary,
			},
		},
		'& .ss__pagination__page--previous, & .ss__pagination__page--next': {
			display: 'inline-flex',
			alignItems: 'center',
			verticalAlign: 'top',
			'.ss__icon': {
				...custom.styles.indicator(variables?.colors?.accent),
			},
		},
	});
};

// Pagination component props
export const pagination: ThemeComponent<'pagination', PaginationProps, PaginationTemplatesLegalProps> = {
	default: {
		pagination: {
			themeStyleScript: paginationStyleScript,
			hideFirst: true,
			hideLast: true,
			hideEllipsis: true,
			pages: 1,
		},
		'pagination icon': {
			size: '12px',
		},
		'pagination icon.prev': {
			icon: 'angle-left',
		},
		'pagination icon.next': {
			icon: 'angle-right',
		},
	},
};
