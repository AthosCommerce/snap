import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = ({ theme, hideIcon }: FacetPaletteOptionsProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__facet-palette-options__option': {
			// options are links - keep the site's link color off them (the selected ring is `currentColor`)
			color: 'inherit',
			'&:hover': {
				cursor: 'pointer',
				'.ss__facet-palette-options__option__palette': {
					opacity: 0.7,
				},
			},
			// no hover ring - a ring means selected
			'&:hover:not(.ss__facet-palette-options__option--filtered) .ss__facet-palette-options__option__wrapper': {
				borderColor: 'transparent !important',
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
					strokeWidth: '2px',
					// the check contrasts with its swatch - black on light colors, white on dark ones
					...custom.styles.indicator(custom.colors.black),
					stroke: custom.colors.black,
				},
			},
			'&.ss__facet-palette-options__option--dark .ss__facet-palette-options__icon': {
				...custom.styles.indicator(custom.colors.white),
				stroke: custom.colors.white,
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

			// without the check (`hideIcon`, e.g. the small autocomplete swatches) the selected swatch sits in a
			// white ring with a dark outline, like the selected swatch on a result card
			'.ss__facet-palette-options__option--filtered': {
				'.ss__facet-palette-options__option__wrapper': {
					...(hideIcon
						? {
								// important, to hold against the component's hover ring color
								border: `2px solid ${variables?.colors?.primary} !important`,
								padding: '2px',
								backgroundColor: custom.colors.white,
						  }
						: { border: '0px' }),
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
			// auto-fill: as many 32px+ columns as the container fits, each stretching to share the row - six across
			// the desktop sidebar's facet card
			columns: 0,
			gridSize: '42px',
			gapSize: '6px',
			hideLabel: true,
			hideIcon: false,
		},

		'facetPaletteOptions icon': {
			size: '50%',
			icon: 'check-thin',
		},
	},
	// where facets are in the touch slideout the swatches keep a 44px tap target
	mobile: {
		facetPaletteOptions: {
			gridSize: '44px',
		},
	},
	tablet: {
		facetPaletteOptions: {
			gridSize: '44px',
		},
	},
};
