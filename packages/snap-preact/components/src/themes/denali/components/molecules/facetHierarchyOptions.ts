import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps, FacetHierarchyOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = ({ horizontal, theme }: FacetHierarchyOptionsProps) => {
	const variables = theme?.variables;

	// shared styles
	const sharedStyles = css({
		'.ss__facet-hierarchy-options__option': {
			color: 'inherit',
			'&.ss__facet-hierarchy-options__option--return': {
				'&:before, .ss__icon': {
					...custom.styles.indicator(variables?.colors?.accent),
				},
			},
			'&.ss__facet-hierarchy-options__option--filtered': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			'.ss__facet-hierarchy-options__option__value__count': {
				color: custom.colors.gray03,
			},
		},
	});

	const horizontalStyles = css([
		sharedStyles,
		{
			'.ss__facet-hierarchy-options__option': {
				border: `1px solid ${variables?.colors?.secondary}`,
				borderRadius: '2em',
				padding: '0.5em 1em',
				'&.ss__facet-hierarchy-options__option--filtered': {
					marginRight: '2em',
				},
			},
		},
	]);

	return horizontal ? horizontalStyles : sharedStyles;
};

// FacetHierarchyOptions component props
export const facetHierarchyOptions: ThemeComponent<'facetHierarchyOptions', FacetHierarchyOptionsProps, FacetHierarchyOptionsTemplatesLegalProps> = {
	default: {
		facetHierarchyOptions: {
			themeStyleScript: facetHierarchyOptionsStyleScript,
		},
	},
};
