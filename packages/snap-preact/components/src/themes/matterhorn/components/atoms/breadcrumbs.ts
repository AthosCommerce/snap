import { css } from '@emotion/react';
import type { BreadcrumbsProps, BreadcrumbsTemplatesLegalProps } from '../../../../components/Atoms/Breadcrumbs';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Breadcrumbs component
const breadcrumbsStyleScript = (props: BreadcrumbsProps) => {
	const variables = props?.theme?.variables;

	return css({
		'.ss__breadcrumbs__crumbs': {
			margin: `0 -${custom.spacing.x1}px`,
			'&, li': {
				listStyle: 'none',
			},
			'&, a': {
				color: variables?.colors?.text,
			},
			li: {
				display: 'block',
				padding: `0 ${custom.spacing.x1}px`,
				'&:last-of-type': {
					color: variables?.colors?.primary,
					fontWeight: custom?.fonts?.weight01,
				},
			},
			'.ss__breadcrumbs__crumbs__separator': {
				'.ss__icon': {
					width: `${custom.sizes.icon10}px`,
					height: `${custom.sizes.icon10}px`,
				},
			},
		},
	});
};

// Breadcrumbs component props
export const breadcrumbs: ThemeComponent<'breadcrumbs', BreadcrumbsProps, BreadcrumbsTemplatesLegalProps> = {
	default: {
		breadcrumbs: {
			themeStyleScript: breadcrumbsStyleScript,
			separator: false,
			separatorIcon: custom.icons.arrowRight,
		},
	},
};
