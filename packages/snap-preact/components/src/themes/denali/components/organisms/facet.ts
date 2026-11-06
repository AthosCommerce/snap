import { css } from '@emotion/react';
import type { FacetProps, FacetTemplatesLegalProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facet component
const facetStyleScript = ({ color, theme }: FacetProps) => {
	const variables = theme?.variables;

	return css({
		[`@media (min-width: ${variables?.breakpoints.tablet}px)`]: {
			'&.ss__facet--showing-all': {
				'& .ss__facet__options': {
					maxHeight: '600px',
				},
			},
		},

		'& .ss__facet__dropdown': {
			background: custom.colors.gray01,
			padding: '20px',
			borderRadius: '30px',

			'& .ss__facet__dropdown__icon': {
				transition: 'transform ease .5s',
				...custom.styles.indicator(variables?.colors?.accent),
			},
			'&.ss__dropdown--open': {
				'& .ss__facet__dropdown__icon': {
					transition: 'transform ease .5s',
					transform: 'rotate(180deg)',
				},
			},
			'.ss__dropdown__content': {
				background: custom.colors.gray01,
			},
		},
		'& .ss__facet__header': {
			color: color || variables?.colors?.secondary,
			fontWeight: 'initial',
			borderBottom: '0px',
			// a text action, not a pill button
			'& .ss__facet__header__clear-all': {
				color: 'inherit',
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					padding: 0,
					border: 0,
					backgroundColor: 'transparent',
				},
			},
		},
		'& .ss__facet__options': {
			maxHeight: '400px',

			'&::-webkit-scrollbar': {
				width: '8px',
			},
			'&::-webkit-scrollbar-track': {
				background: custom.colors.gray02,
			},
			'&::-webkit-scrollbar-thumb': {
				background: custom.colors.gray03,
			},
		},
		'& .ss__facet__range-inputs .ss__facet__range-input': {
			border: `1px solid ${custom.colors.controlBorder}`,
			borderRadius: '3px',
			overflow: 'hidden',
		},
		'& .ss__facet__show-more-less': {
			margin: '8px 5px',
			textAlign: 'center',
			...custom.styles.activeText(color || variables?.colors?.primary),

			span: {
				borderBottom: '1px solid currentColor',
			},
		},
	});
};

// Facet component props
export const facet: ThemeComponent<'facet', FacetProps, FacetTemplatesLegalProps> = {
	default: {
		facet: {
			themeStyleScript: facetStyleScript,
			iconCollapse: 'angle-down',
			iconExpand: 'angle-down',
			iconOverflowMore: undefined,
			iconOverflowLess: undefined,
			showMoreText: 'View More',
			showLessText: 'View Less',
		},
	},
};
