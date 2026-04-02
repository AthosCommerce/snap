import { css } from '@emotion/react';
import type { PaginationProps, PaginationTemplatesLegalProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = (props: PaginationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	const paginationStyles = css({
		...custom.styles.boxSizing('pagination', props?.treePath, props?.name),
		nav: {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			justifyContent: 'center',
			gap: `${custom.spacing.x4}px`,
			'.ss__pagination__page, span': {
				padding: 0,
				fontSize: '16px',
				color: variables?.colors?.text,
			},
			'.ss__pagination__page': {
				minWidth: '1px',
				minHeight: '1px',
				'&.ss__pagination__page--active': {
					...custom.styles.activeText(variables?.colors?.primary),
				},
			},
			'.ss__pagination__page--previous, .ss__pagination__page--next': {
				lineHeight: `10px`,
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			nav: {
				gap: `${custom.spacing.x2}px`,
				'.ss__pagination__page, span': {
					fontSize: '14px',
				},
			},
		},
	});

	return paginationStyles;
};

// Pagination component props
export const pagination: ThemeComponent<'pagination', PaginationProps, PaginationTemplatesLegalProps> = {
	default: {
		pagination: {
			themeStyleScript: paginationStyleScript,
		},
		'pagination icon': {
			size: `${custom.sizes.icon12}px`,
			color: custom.colors.primary,
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
