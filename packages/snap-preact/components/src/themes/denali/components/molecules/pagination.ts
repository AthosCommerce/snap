import { css } from '@emotion/react';
import type { PaginationProps, PaginationTemplatesLegalProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = ({ theme }: PaginationProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return css({
		// every chip (numbers and arrows) is the same height, its content centered - a round chip with the theme's
		// 2px outline, pale until it is the current page, like the tabs
		'& .ss__pagination__page': {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			boxSizing: 'border-box',
			height: '32px',
			minWidth: '32px',
			verticalAlign: 'middle',
			border: `2px solid ${custom.colors.gray02}`,
			borderRadius: '2em',
			background: custom.colors.white,
			// 8px each side makes a single digit or a lone chevron exactly as wide as the chip is tall - a circle.
			// longer page numbers and text buttons widen it into a pill
			padding: '0 8px',
			margin: '0px 5px',
			color: 'inherit',

			'&:hover': {
				background: custom.colors.gray01,
			},
			'&.ss__pagination__page--active': {
				...custom.styles.activeText(roles.brand),
				borderColor: roles.brand,
			},
		},
		'& .ss__pagination__page--previous, & .ss__pagination__page--next': {
			'.ss__icon': {
				...custom.styles.indicator(roles.structure),
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
