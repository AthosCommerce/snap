import { css } from '@emotion/react';
import type { PaginationProps, PaginationTemplatesLegalProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = (props: PaginationProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		nav: {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			justifyContent: 'center',
			lineHeight: 1,
			'.ss__pagination__page, span': {
				padding: `0 ${custom.spacing.x1}px`,
				fontSize: custom.utils.convertPxToEm(14),
				color: variables?.colors?.text,
			},
			'.ss__pagination__page': {
				minWidth: '1px',
				minHeight: '1px',
			},
			'.ss__pagination__page--active': {
				color: variables?.colors?.primary,
			},
			'.ss__pagination__page--previous, .ss__pagination__page--next': {
				lineHeight: `${custom.sizes.icon12}px`,
				'.ss__icon': {
					fill: variables?.colors?.primary,
					stroke: variables?.colors?.primary,
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			nav: {
				'.ss__pagination__page, span': {
					padding: `0 ${custom.spacing.x2}px`,
					fontSize: custom.utils.convertPxToEm(16),
				},
				'.ss__pagination__page--previous, .ss__pagination__page--next': {
					lineHeight: `${custom.sizes.icon14}px`,
				},
			},
		},
	});
};

// Pagination component props
export const pagination: ThemeComponent<'pagination', PaginationProps, PaginationTemplatesLegalProps> = {
	default: {
		pagination: {
			themeStyleScript: paginationStyleScript,
		},
		'pagination icon': {
			size: `${custom.sizes.icon12}px`,
		},
		'pagination icon.prev': {
			icon: custom.icons.arrowLeft,
		},
		'pagination icon.next': {
			icon: custom.icons.arrowRight,
		},
	},
	mobile: {
		'pagination icon': {
			size: `${custom.sizes.icon14}px`,
		},
	},
};
