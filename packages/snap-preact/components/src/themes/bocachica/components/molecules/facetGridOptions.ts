import { css } from '@emotion/react';
import type { FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { colord } from 'colord';

// CSS in JS style script for the FacetGridOptions component

const facetGridOptionsStyleScript = ({ theme }: FacetGridOptionsProps) => {
	const variables = theme?.variables;
	const backgroundColorObj = colord(variables?.colors?.primary || '#000');
	const colorObj = backgroundColorObj.isDark() ? colord('#fff') : colord('#000');

	return css({
		'& .ss__facet-grid-options__option': {
			border: `1px solid ${backgroundColorObj.toHex()}`,
			borderRadius: '3px',
			'&.ss__facet-grid-options__option--filtered': {
				background: backgroundColorObj.toHex(),
				color: colorObj.toHex(),
			},
			'&:hover:not(.ss__facet-grid-options__option--filtered)': {
				cursor: 'pointer',
			},
		},
	});
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps> = {
	default: {
		facetGridOptions: {
			themeStyleScript: facetGridOptionsStyleScript,
			gapSize: '5px',
			columns: 5,
		},
	},
};
