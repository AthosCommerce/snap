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
		...custom.styles.boxSizing('breadcrumbs', props?.treePath, props?.name),
		'.ss__breadcrumbs__crumbs': {
			gap: `${custom.spacing.x2}px`,
			'&, li': {
				listStyle: 'none',
			},
			'&, a': {
				color: variables?.colors?.text,
			},
			li: {
				display: 'block',
				padding: 0,
				'&:last-child': {
					...custom.styles.activeText(variables?.colors?.primary),
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
