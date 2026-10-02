import { css } from '@emotion/react';
import type { BreadcrumbsProps, BreadcrumbsTemplatesLegalProps } from '../../../../components/Atoms/Breadcrumbs';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Breadcrumbs component
const breadcrumbsStyleScript = (props: BreadcrumbsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// breadcrumbs styles
	const breadcrumbsStyles = css({
		'.ss__breadcrumbs__crumbs': {
			// crumbs stay on one line each - the trail wraps, and only the current (last) crumb breaks
			flexWrap: 'wrap',
			gap: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			margin: 0,
			padding: 0,
			'&, li': {
				listStyle: 'none',
			},
			li: {
				display: 'block',
				padding: 0,
				fontSize: '14px',
				whiteSpace: 'nowrap',
				'&:last-child': {
					whiteSpace: 'normal',
					minWidth: 0,
					...custom.styles.activeText(variables?.colors?.primary),
				},
				a: {
					fontSize: 'inherit',
				},
			},
		},
	});

	return breadcrumbsStyles;
};

// Breadcrumbs component props
export const breadcrumbs: ThemeComponent<'breadcrumbs', BreadcrumbsProps, BreadcrumbsTemplatesLegalProps> = {
	default: {
		breadcrumbs: {
			themeStyleScript: breadcrumbsStyleScript,
			separator: false,
			separatorIcon: custom.icons.arrowRight,
		},
		'breadcrumbs icon': {
			size: `${custom.sizes.icon10}px`,
		},
	},
};
