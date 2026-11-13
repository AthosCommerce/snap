import { css } from '@emotion/react';
import type { VariantSelectionProps, VariantSelectionTemplatesLegalProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the VariantSelection component
const variantSelectionStyleScript = ({ theme }: VariantSelectionProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__variant-selection__dropdown': {
			'.ss__dropdown__button': {
				borderRadius: '25px',
				fontWeight: 'initial',
				padding: '10px 5px 10px 15px',
				boxShadow: 'none',
				background: custom.colors.gray01,
				color: 'inherit',

				'&:hover': {
					background: custom.colors.gray01,
				},

				// a long selection truncates rather than wrapping the pill onto a second line
				'.ss__dropdown__button-wrapper': {
					minWidth: 0,
					whiteSpace: 'nowrap',
					'.ss__dropdown__button-wrapper__selection': {
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					},
				},
				'.ss__variant-selection__icon': {
					flex: '0 0 auto',
				},
			},
			'&.ss__dropdown--open .ss__dropdown__button': {
				borderRadius: '25px 25px 0 0',
				boxShadow: '0 6px 12px 1px #0000001f',
				zIndex: '10001',
				position: 'relative',
			},
			'.ss__variant-selection__icon': {
				marginLeft: '15px',
				marginRight: '5px',
				...custom.styles.indicator(variables?.colors?.accent),
			},
		},

		'&.ss__variant-selection__options': {
			margin: '0',
			padding: '0',
			background: custom.colors.white,
			border: 'none',
			borderRadius: '0 0 25px 25px',
			boxShadow: '0 6px 12px 1px #0000001f',

			'.ss__variant-selection__option': {
				padding: '6px 15px',
				listStyle: 'none',
				color: 'inherit',
				background: custom.colors.white,

				'&.ss__variant-selection__option--selected': {
					...custom.styles.activeText(variables?.colors?.primary),
					background: custom.colors.gray01,
				},
				'&:hover': {
					background: custom.colors.gray01,
				},
			},
		},
	});
};

// VariantSelection component props
export const variantSelection: ThemeComponent<'variantSelection', VariantSelectionProps, VariantSelectionTemplatesLegalProps> = {
	default: {
		variantSelection: {
			themeStyleScript: variantSelectionStyleScript,
		},
	},
};
