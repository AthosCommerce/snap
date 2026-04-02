import { css } from '@emotion/react';
import type { FacetListOptionsProps, FacetListOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const checkboxSpacing = custom.sizes.icon16 + custom.spacing.x2;

	return css({
		'.ss__facet-list-options__option': {
			display: 'block',
			position: 'relative',
			margin: `0 0 ${custom.spacing.x1}px 0`,
			color: variables?.colors?.text,
			padding: props?.hideCheckbox ? `` : `0 0 0 ${checkboxSpacing}px`,
			'&:last-of-type': {
				marginBottom: 0,
			},
			'.ss__checkbox, .ss__radio': {
				position: 'absolute',
				top: '1.5px',
				left: 0,
			},
			'.ss__facet-list-options__option__value': {
				margin: 0,
				'.ss__facet-list-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: custom.utils.convertPxToEm(10),
					color: lightGray,
				},
			},
		},
		'.ss__facet-list-options__option.ss__facet-list-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
		},
	});
};

// FacetListOptions component props
export const facetListOptions: ThemeComponent<'facetListOptions', FacetListOptionsProps, FacetListOptionsTemplatesLegalProps> = {
	default: {
		facetListOptions: {
			themeStyleScript: facetListOptionsStyleScript,
			respectSingleSelect: true,
		},
	},
};
