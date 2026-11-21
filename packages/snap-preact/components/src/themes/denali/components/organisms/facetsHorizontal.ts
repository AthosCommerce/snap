import { css } from '@emotion/react';
import type { FacetsHorizontalProps, FacetsHorizontalTemplatesLegalProps } from '../../../../components/Organisms/FacetsHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facets component
const facetsHorizontalStyleScript = ({ theme }: FacetsHorizontalProps) => {
	const variables = theme?.variables;

	return css({
		// no extra space - the bar centers on the toolbar row beside sort by
		margin: 0,

		// one gray bubble around every trigger, the same height as the sort by pill beside it
		'& .ss__facets-horizontal__header': {
			alignItems: 'center',
			gap: 0,
			width: 'fit-content',
			maxWidth: '100%',
			padding: '0 4px',
			backgroundColor: custom.colors.gray01,
			borderRadius: '25px',
			// the overflow button that opens the sidebar is a label in the bubble too, not an outlined pill
			'& .ss__facets-horizontal__header__toggle-sidebar': {
				margin: '4px 0',
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					border: 0,
					borderRadius: '25px',
					padding: '6px 14px',
					backgroundColor: 'transparent',
				},
				'&:not(.ss__button--disabled):hover': {
					backgroundColor: custom.colors.white,
				},
			},
			'& .ss__facets-horizontal__header__dropdown': {
				margin: '0',

				// plain labels inside the bubble
				'& .ss__dropdown__button': {
					borderRadius: '25px',
					padding: '6px 10px 6px 14px',
					margin: '4px 0',
				},
				'& .ss__dropdown__button__heading': {
					display: 'flex',
					alignItems: 'center',
					gap: '15px',
					padding: 0,
					color: variables?.colors?.secondary,
					fontWeight: 'normal',

					'& .ss__icon': {
						width: '7px',
						height: '7px',
						padding: '5px',
						boxSizing: 'content-box',
						borderRadius: '50%',
						backgroundColor: custom.colors.white,
						transition: 'transform ease .5s',
						...custom.styles.indicator(variables?.colors?.accent),
					},
				},
				// a text action, not a pill button
				'& .ss__facet__header__clear-all': {
					color: 'inherit',
					'&, &:hover, &:not(.ss__button--disabled):hover': {
						padding: 0,
						border: 0,
						backgroundColor: 'transparent',
					},
				},

				// the open trigger is a white pill in the bubble, like the selected row of the open sort by list
				'&.ss__dropdown--open': {
					'& .ss__dropdown__button': {
						backgroundColor: custom.colors.white,
					},
					'& .ss__dropdown__button__heading': {
						'& .ss__icon': {
							transform: 'rotate(180deg)',
							backgroundColor: custom.colors.gray01,
						},
					},
					// out-specifies the component's open padding
					'& .ss__dropdown__content': {
						padding: '15px 20px',
					},
				},

				// a gray rounded card under the pill, like the sidebar facets and the open sort by list - it floats over
				// the results, so a soft shadow lifts it off the gray product images beneath
				'.ss__dropdown__content': {
					backgroundColor: custom.colors.gray01,
					borderRadius: '20px',
					boxShadow: '0 6px 12px 1px #0000001f',
					marginTop: '8px',
					'.ss__checkbox': {
						backgroundColor: custom.colors.white,
					},
				},
				// grids, palettes and sliders have no width of their own - without one the card shrinks to two tiles across
				'&:has(.ss__facet-grid-options, .ss__facet-palette-options, .ss__facet-slider) .ss__dropdown__content': {
					boxSizing: 'border-box',
					width: '260px',
					maxWidth: 'calc(100vw - 40px)',
				},
				// list and hierarchy options are inset rows with a hover fill, like the rows of the open sort by list
				// (the options container clips its overflow, so it is the container that widens to inset the rows)
				'.ss__facet__options:has(.ss__facet-list-options, .ss__facet-hierarchy-options)': {
					marginLeft: '-12px',
					marginRight: '-12px',
				},
				'.ss__facet-list-options__option, .ss__facet-hierarchy-options__option': {
					margin: '0 0 2px',
					padding: '6px 12px',
					borderRadius: '14px',
					'&:hover': {
						backgroundColor: custom.colors.gray02,
					},
				},
				'.ss__facet': {
					marginBottom: '0px',
				},
			},
		},
	});
};

// FacetsHorizontal component props
export const facetsHorizontal: ThemeComponent<'facetsHorizontal', FacetsHorizontalProps, FacetsHorizontalTemplatesLegalProps> = {
	default: {
		facetsHorizontal: {
			themeStyleScript: facetsHorizontalStyleScript,
			iconCollapse: 'angle-down',
			limit: 9,
		},
	},
	mobile: {
		facetsHorizontal: {
			limit: 0,
		},
	},
	tablet: {
		facetsHorizontal: {
			limit: 5,
		},
	},
	desktop: {
		facetsHorizontal: {
			limit: 7,
		},
	},
};
