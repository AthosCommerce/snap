import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps, FacetHierarchyOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = ({ horizontal, theme }: FacetHierarchyOptionsProps) => {
	const variables = theme?.variables;
	const activeColors = custom.utils.activeColors(variables?.colors?.primary || custom.colors.black);

	// shared styles
	const sharedStyles = css({
		'.ss__facet-hierarchy-options__option': {
			color: 'inherit',
			'&.ss__facet-hierarchy-options__option--return': {
				'&:before, .ss__icon': {
					...custom.styles.indicator(variables?.colors?.secondary),
				},
			},
			'&.ss__facet-hierarchy-options__option--filtered': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			'.ss__facet-hierarchy-options__option__value__count': {
				color: custom.colors.gray04,
			},
		},
	});

	const horizontalStyles = css([
		sharedStyles,
		{
			// chips, with the same outline, hover and filled selected state as the grid options
			'.ss__facet-hierarchy-options__option': {
				border: `1px solid ${custom.colors.controlBorder}`,
				borderRadius: '2em',
				padding: '0.5em 1em',
				'&:hover:not(.ss__facet-hierarchy-options__option--filtered)': {
					background: custom.colors.gray02,
				},
				'&.ss__facet-hierarchy-options__option--filtered': {
					marginRight: '2em',
					background: activeColors[0],
					borderColor: activeColors[0],
					...custom.styles.activeText(activeColors[1]),
					'.ss__facet-hierarchy-options__option__value__count': {
						color: 'inherit',
					},
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
