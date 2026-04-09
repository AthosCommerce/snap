import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps, FacetHierarchyOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.utils.lightenColor();

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = (props: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile as number;
	const tabletBp = variables?.breakpoints?.tablet as number;

	// shared styles
	const sharedStyles = css({
		...custom.styles.boxSizing('facetHierarchyOptions', props?.treePath, props?.name),
		'.ss__facet-hierarchy-options__option': {
			...custom.styles.baseText(variables?.colors?.text),
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
			flexFlow: 'row wrap',
			gap: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			'.ss__facet-hierarchy-options__option': {
				flex: '0 1 auto',
				width: `calc((100% - ${custom.spacing.x2}px) / 2)`,
				minWidth: '1px',
				margin: 0,
				'&.ss__facet-hierarchy-options__option--return, &.ss__facet-hierarchy-options__option--filtered': {
					width: '100%',
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
		{
			[`${custom.utils.getBp(mobileBp)}`]: {
				'.ss__facet-hierarchy-options__option': {
					width: `calc((100% - ${custom.spacing.x2 * 2}px) / 3)`,
				},
			},
		},
		{
			[`${custom.utils.getBp(tabletBp)}`]: {
				'.ss__facet-hierarchy-options__option': {
					width: `calc((100% - ${custom.spacing.x2 * 3}px) / 4)`,
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
