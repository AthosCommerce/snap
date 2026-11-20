import { css } from '@emotion/react';
import type { FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = ({ theme }: FacetGridOptionsProps) => {
	const variables = theme?.variables;
	const activeColors = custom.utils.activeColors(variables?.colors?.secondary || custom.colors.black);

	return css({
		'& .ss__facet-grid-options__option': {
			// options are links - keep the site's link color off them
			color: 'inherit',
			border: `1px solid ${custom.colors.controlBorder}`,
			borderRadius: '3px',
			'&.ss__facet-grid-options__option--filtered': {
				background: activeColors[0],
				borderColor: activeColors[0],
				...custom.styles.activeText(activeColors[1]),
			},
			'&:hover:not(.ss__facet-grid-options__option--filtered)': {
				cursor: 'pointer',
				background: custom.colors.gray01,
			},
		},
	});
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps> = {
	default: {
		facetGridOptions: {
			themeStyleScript: facetGridOptionsStyleScript,
			// auto-fill: as many 44px+ columns as the container fits (sidebar, slideout or dropdown)
			columns: 0,
			gridSize: '44px',
			gapSize: '6px',
		},
	},
};
