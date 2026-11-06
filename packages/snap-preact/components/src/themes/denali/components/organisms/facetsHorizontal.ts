import { css } from '@emotion/react';
import type { FacetsHorizontalProps, FacetsHorizontalTemplatesLegalProps } from '../../../../components/Organisms/FacetsHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facets component
const facetsHorizontalStyleScript = ({ theme }: FacetsHorizontalProps) => {
	const variables = theme?.variables;

	return css({
		paddingBottom: '10px',

		'& .ss__facets-horizontal__header': {
			alignItems: 'center',
			'& .ss__facets-horizontal__header__dropdown': {
				margin: '0',

				'& .ss__dropdown__button__heading': {
					color: variables?.colors?.secondary,
					fontWeight: 'bold',

					'& .ss__icon': {
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

				'&.ss__dropdown--open': {
					'& .ss__dropdown__button__heading': {
						'& .ss__icon': {
							transform: 'rotate(180deg)',
						},
					},
				},

				'.ss__dropdown__content': {
					borderBottomLeftRadius: '20px',
					borderBottomRightRadius: '20px',
				},
				'.ss__facet': {
					marginBottom: '0px',
				},
			},
		},
		'& .ss__facets-horizontal__header__dropdown': {
			'&.ss__dropdown--open': {
				'& .ss__dropdown__button': {
					boxShadow: '0 6px 12px 1px #0000001f',
				},
				'& .ss__dropdown__content': {
					boxShadow: '0 6px 12px 1px #0000001f',
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
