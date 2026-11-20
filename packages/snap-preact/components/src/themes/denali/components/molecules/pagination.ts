import { css } from '@emotion/react';
import type { PaginationProps, PaginationTemplatesLegalProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = ({ theme }: PaginationProps) => {
	const variables = theme?.variables;

	return css({
		// every chip (numbers and arrows) is the same height, its content centered
		'& .ss__pagination__page': {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			boxSizing: 'border-box',
			height: '33px',
			minWidth: '33px',
			verticalAlign: 'middle',
			border: `1px solid ${custom.colors.gray02}`,
			borderRadius: '10px',
			background: custom.colors.white,
			padding: '0 10px',
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
			pages: 3,
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
