import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps, FacetHierarchyOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.colors.gray04;

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = (props: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		'.ss__facet-hierarchy-options__option': {
			...custom.styles.baseText(),
			gap: `${custom.spacing.x1}px`,
			padding: 0,
			'.ss__facet-hierarchy-options__option__value': {
				margin: 0,
				'.ss__facet-hierarchy-options__option__value__count': {
					position: 'relative',
					top: '-1px',
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: '10px',
					color: lightGray,
				},
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--return': {
			'.ss__icon': {
				padding: 0,
			},
		},
		'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
			...custom.styles.activeText(variables?.colors?.primary),
		},
	});

	// facet hierarchy list styles
	const facetHierarchyListStyles = css([
		sharedStyles,
		{
			'.ss__facet-hierarchy-options__option': {
				margin: `0 0 ${custom.spacing.x1}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
			'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
				'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': {
					paddingLeft: `${custom.spacing.x6}px`,
				},
			},
		},
	]);

	// facet hierarchy horizontal styles
	const facetHierarchyHorizontalStyles = css([
		sharedStyles,
		{
			...custom.styles.columns(),
			'.ss__facet-hierarchy-options__option': {
				minWidth: '1px',
				margin: 0,
				'&.ss__facet-hierarchy-options__option--return, &.ss__facet-hierarchy-options__option--filtered': {
					gridColumn: '1 / -1',
				},
				'&.ss__facet-hierarchy-options__option--return': {
					display: 'flex',
					alignItems: 'center',
				},
				'.ss__facet-hierarchy-options__option__value': {
					display: 'block',
					...custom.styles.textOverflow(),
				},
			},
		},
	]);

	return props?.horizontal ? facetHierarchyHorizontalStyles : facetHierarchyListStyles;
};

// FacetHierarchyOptions component props
export const facetHierarchyOptions: ThemeComponent<'facetHierarchyOptions', FacetHierarchyOptionsProps, FacetHierarchyOptionsTemplatesLegalProps> = {
	default: {
		facetHierarchyOptions: {
			themeStyleScript: facetHierarchyOptionsStyleScript,
			returnIcon: custom.icons.arrowLeft,
		},
		'facetHierarchyOptions icon': {
			size: `${custom.sizes.icon12}px`,
		},
	},
};
