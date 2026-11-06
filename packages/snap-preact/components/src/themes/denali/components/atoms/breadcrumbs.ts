import { css } from '@emotion/react';
import type { BreadcrumbsProps, BreadcrumbsTemplatesLegalProps } from '../../../../components/Atoms/Breadcrumbs';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Breadcrumbs component
const breadcrumbsStyleScript = ({ theme }: BreadcrumbsProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__breadcrumbs__crumbs': {
			flexWrap: 'wrap',
			alignItems: 'center',
			'.ss__breadcrumbs__crumbs__crumb:last-child': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			'.ss__breadcrumbs__crumbs__separator': {
				...custom.styles.indicator(variables?.colors?.accent),
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
			separatorIcon: 'angle-right',
		},
		'breadcrumbs icon': {
			size: '10px',
		},
	},
};
