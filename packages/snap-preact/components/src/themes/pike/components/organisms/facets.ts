import { css } from '@emotion/react';
import type { FacetsProps, FacetsTemplatesLegalProps } from '../../../../components/Organisms/Facets';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facets component
const facetsStyleScript = (props: FacetsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// facets styles
	const facetsStyles = css({
		...custom.styles.boxSizing('facets', props?.treePath, props?.name),
		'&.ss__facets': {
			display: 'block',
			width: 'auto',
			'.ss__facet': {
				margin: `0 0 ${custom.spacing.x6}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
	});

	return facetsStyles;
};

// Facets component props
export const facets: ThemeComponent<'facets', FacetsProps, FacetsTemplatesLegalProps> = {
	default: {
		facets: {
			themeStyleScript: facetsStyleScript,
		},
	},
};
