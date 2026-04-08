import { css } from '@emotion/react';
import type { FacetProps, FacetTemplatesLegalProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facet component
const facetStyleScript = (props: FacetProps) => {
	const variables = props?.theme?.variables;

	return css({
		'&.ss__facet--collapsed': {
			'.ss__facet__header': {
				'.ss__icon': {
					transform: 'rotate(0deg)',
				},
			},
		},
		'&.ss__facet--showing-all': {
			'.ss__facet__options': {
				maxHeight: `490px`,
				overflowY: 'auto',
				overflowX: 'hidden',
				paddingRight: `${custom.spacing.x2}px`,
			},
		},
		'.ss__facet__header': {
			gap: `${custom.spacing.x2}px`,
			fontSize: custom.utils.convertPxToEm(16),
			fontWeight: custom.fonts.weight02,
			'.ss__icon': {
				transition: 'transform ease 0.5s',
				transform: 'rotate(180deg)',
				width: `${custom.sizes.icon12}px`,
				height: `${custom.sizes.icon12}px`,
				fill: variables?.colors?.primary,
				stroke: variables?.colors?.primary,
			},
		},
		'.ss__facet__options': {
			marginTop: 0,
			maxHeight: 'none',
			overflow: 'visible',
			'&::-webkit-scrollbar': {
				width: '8px',
				height: '8px',
			},
			'&::-webkit-scrollbar-track': {
				backgroundColor: custom.colors.gray01,
			},
			'&::-webkit-scrollbar-thumb': {
				backgroundColor: custom.colors.gray02,
			},
		},
		'.ss__facet__show-more-less': {
			margin: `${custom.spacing.x2}px 0 0 0`,
			fontWeight: custom.fonts.weight01,
			color: variables?.colors?.primary,
			'.ss__icon': {
				position: 'relative',
				top: '-0.5px',
				marginRight: `${custom.spacing.x1}px`,
				width: `${custom.sizes.icon10}px`,
				height: `${custom.sizes.icon10}px`,
			},
		},
	});
};

// Facet component props
export const facet: ThemeComponent<'facet', FacetProps, FacetTemplatesLegalProps> = {
	default: {
		facet: {
			themeStyleScript: facetStyleScript,
			iconCollapse: custom.icons.arrowDown,
			iconExpand: custom.icons.arrowDown,
			iconOverflowMore: custom.icons.plus,
			iconOverflowLess: custom.icons.minus,
		},
	},
};
