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

				// a gray rounded card under the pill, like the sidebar facets and the open sort by list
				'.ss__dropdown__content': {
					backgroundColor: custom.colors.gray01,
					borderRadius: '20px',
					boxShadow: 'none',
					marginTop: '8px',
					'.ss__checkbox': {
						backgroundColor: custom.colors.white,
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
