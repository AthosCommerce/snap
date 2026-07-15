import { css } from '@emotion/react';
import type { VariantSelectionProps, VariantSelectionTemplatesLegalProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the VariantSelection component
const variantSelectionStyleScript = ({ theme }: VariantSelectionProps) => {
	const variables = theme?.variables;

	return css({
		// Button styling (applies from root div context)
		'.ss__variant-selection__dropdown': {
			'.ss__dropdown__button': {
				borderRadius: '25px',
				fontWeight: 'initial',
				padding: '10px 5px 10px 15px',
				boxShadow: 'none',
				background: variables?.colors?.accent,
				color: variables?.colors?.primary,

				'&:hover': {
					background: variables?.colors?.accent,
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
			},
		},

		'&.ss__variant-selection__options': {
			margin: '0',
			padding: '0',
			background: 'white',
			border: 'none',
			borderRadius: '0 0 25px 25px',
			boxShadow: '0 6px 12px 1px #0000001f',

			'.ss__variant-selection__option': {
				padding: '6px 15px',
				listStyle: 'none',
				color: variables?.colors?.secondary,
				background: 'white',

				'&.ss__variant-selection__option--selected': {
					fontWeight: 'bold',
					background: variables?.colors?.accent,
				},
				'&:hover': {
					background: variables?.colors?.accent,
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
