import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = ({ theme }: FacetPaletteOptionsProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__facet-palette-options__option': {
			'&:hover': {
				cursor: 'pointer',
				'.ss__facet-palette-options__option__palette': {
					opacity: 0.7,
				},
				'.ss__facet-palette-options__option__wrapper': {
					borderColor: 'transparent !important',
				},
			},
			'.ss__facet-palette-options__option__wrapper': {
				borderRadius: '50%',
				overflow: 'hidden',
				padding: '0px',
			},

			'.ss__facet-palette-options__option__palette': {
				border: `2px solid ${custom.colors.controlBorder}`,
				'.ss__facet-palette-options__icon': {
					opacity: 1,
					stroke: 'gray',
					strokeWidth: '2px',
				},
			},

			'&.ss__facet-palette-options__option--filtered .ss__facet-palette-options__option__value': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			'.ss__facet-palette-options__option__value__count': {
				color: custom.colors.gray03,
			},
		},

		'&.ss__facet-palette-options--grid': {
			'.ss__facet-palette-options__option__wrapper': {
				aspectRatio: '1 / 1',

				'.ss__facet-palette-options__option__palette': {
					aspectRatio: '1 / 1',
					paddingTop: 'initial',
				},
			},

			'.ss__facet-palette-options__option--filtered': {
				'.ss__facet-palette-options__option__wrapper': {
					border: '0px',
					aspectRatio: '1 / 1',

					'.ss__facet-palette-options__option__palette': {
						border: `2px solid ${custom.colors.controlBorder}`,
						aspectRatio: '1 / 1',
					},
				},
			},
		},
	});
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps> = {
	default: {
		facetPaletteOptions: {
			themeStyleScript: facetPaletteStyleScript,
			// auto-fill: as many 44px+ columns as the container fits (sidebar, slideout or dropdown)
			columns: 0,
			gridSize: '44px',
			gapSize: '6px',
			hideLabel: true,
			hideIcon: false,
		},

		'facetPaletteOptions icon': {
			size: '50%',
			icon: 'check-thin',
		},
	},
};
