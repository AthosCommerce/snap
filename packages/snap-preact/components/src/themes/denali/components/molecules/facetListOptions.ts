import { css } from '@emotion/react';
import type { FacetListOptionsProps, FacetListOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = ({ horizontal, theme }: FacetListOptionsProps) => {
	const variables = theme?.variables;

	return css({
		'& .ss__facet-list-options__option': {
			margin: horizontal ? '0 5px 5px 0' : '0 0 5px 0',
			color: 'inherit',
			border: horizontal ? `1px solid ${variables?.colors?.secondary}` : undefined,
			borderRadius: horizontal ? '2em' : undefined,
			padding: horizontal ? '0.5em 1em' : undefined,
			textDecoration: 'none',

			'&:hover': {
				cursor: 'pointer',
			},
			'&.ss__facet-list-options__option--filtered': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
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
