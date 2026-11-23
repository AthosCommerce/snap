import { css } from '@emotion/react';
import type { BreadcrumbsProps, BreadcrumbsTemplatesLegalProps } from '../../../../components/Atoms/Breadcrumbs';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Breadcrumbs component
const breadcrumbsStyleScript = ({ theme }: BreadcrumbsProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return css({
		'.ss__breadcrumbs__crumbs': {
			flexWrap: 'wrap',
			alignItems: 'center',
			'.ss__breadcrumbs__crumbs__crumb:last-child': {
				...custom.styles.activeText(roles.brand),
			},
			'.ss__breadcrumbs__crumbs__separator': {
				...custom.styles.indicator(roles.structure),
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
