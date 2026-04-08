import { css } from '@emotion/react';
import type { FacetsProps, FacetsTemplatesLegalProps } from '../../../../components/Organisms/Facets';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Facets component
const facetsStyleScript = (props: FacetsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&.ss__facets': {
			display: 'block',
			width: 'auto',
		},
	});
};

// Facets component props
export const facets: ThemeComponent<'facets', FacetsProps, FacetsTemplatesLegalProps> = {
	default: {
		facets: {
			themeStyleScript: facetsStyleScript,
		},
	},
};
