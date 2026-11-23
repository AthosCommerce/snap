import { css } from '@emotion/react';
import type { FacetListOptionsProps, FacetListOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = ({ horizontal, theme }: FacetListOptionsProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);
	const activeColors = roles.brandFill;

	return css({
		'& .ss__facet-list-options__option': {
			margin: horizontal ? '0 5px 5px 0' : '0 0 5px 0',
			color: 'inherit',
			textDecoration: 'none',

			'&:hover': {
				cursor: 'pointer',
			},
			'&.ss__facet-list-options__option--filtered': {
				...custom.styles.activeText(roles.brand),
			},
			// horizontal options are chips, with the same outline, hover and filled selected state as the grid options
			...(horizontal
				? {
						border: `1px solid ${custom.colors.controlBorder}`,
						borderRadius: '2em',
						padding: '0.5em 1em',
						'&:hover:not(.ss__facet-list-options__option--filtered)': {
							cursor: 'pointer',
							background: custom.colors.gray02,
						},
						'&.ss__facet-list-options__option--filtered': {
							background: activeColors[0],
							borderColor: activeColors[0],
							...custom.styles.activeText(activeColors[1]),
							// counts are muted gray elsewhere - on the fill they follow its text
							'& .ss__facet-list-options__option__value .ss__facet-list-options__option__value__count': {
								color: 'inherit',
							},
						},
				  }
				: {}),
			'& .ss__facet-list-options__option__value': {
				'& .ss__facet-list-options__option__value__count': {
					fontSize: 'inherit',
					marginLeft: '5px',
					color: custom.colors.gray03,
				},
			},
		},
	});
};

// FacetListOptions component props
export const facetListOptions: ThemeComponent<'facetListOptions', FacetListOptionsProps, FacetListOptionsTemplatesLegalProps> = {
	default: {
		facetListOptions: {
			themeStyleScript: facetListOptionsStyleScript,
		},
	},
};
