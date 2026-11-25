import { css } from '@emotion/react';
import type { FacetProps, FacetTemplatesLegalProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facet component
const facetStyleScript = ({ color, theme }: FacetProps) => {
	const variables = theme?.variables;

	return css({
		// the tablet layer includes its breakpoint, so this starts a pixel above it
		[`@media (min-width: ${Number(variables?.breakpoints.tablet) + 1}px)`]: {
			'&.ss__facet--showing-all': {
				'& .ss__facet__options': {
					maxHeight: '600px',
				},
			},
		},

		'& .ss__facet__dropdown': {
			background: custom.colors.gray01,
			borderRadius: '30px',
			// the padding is on the header and options, not the card - the whole header row toggles the facet
			'.ss__dropdown__button': {
				padding: '20px',
			},
			'&.ss__dropdown--open .ss__dropdown__button': {
				paddingBottom: 0,
			},
			'.ss__dropdown__content': {
				boxSizing: 'border-box',
				padding: '0 20px 20px',
				background: custom.colors.gray01,
				// the content now reaches the card's edge - round it with the card, so its fill doesn't square the corners
				borderRadius: 'inherit',
			},
			'& .ss__facet__dropdown__icon': {
				transition: 'transform ease .5s',
				...custom.styles.indicator(color || variables?.colors?.secondary),
			},
			'&.ss__dropdown--open': {
				'& .ss__facet__dropdown__icon': {
					transition: 'transform ease .5s',
					transform: 'rotate(180deg)',
				},
			},
		},
		'& .ss__facet__header': {
			color: color || variables?.colors?.secondary,
			fontWeight: 'bold',
			borderBottom: '0px',
			padding: 0,
			// a text action, not a pill button - underlined and lighter than the title it sits beside
			'& .ss__facet__header__clear-all': {
				color: 'inherit',
				fontWeight: 'normal',
				textDecoration: 'underline',
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
			// pill inputs, like the quantity picker's
			border: `1px solid ${custom.colors.controlBorder}`,
			borderRadius: '2em',
			overflow: 'hidden',
			backgroundColor: custom.colors.white,
		},
		'& .ss__facet__show-more-less': {
			margin: '8px 5px',
			textAlign: 'center',
			...custom.styles.activeText(color || variables?.colors?.secondary),

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
