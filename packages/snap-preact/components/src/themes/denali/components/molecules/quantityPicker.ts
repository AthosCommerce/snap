import { css } from '@emotion/react';
import type { QuantityPickerProps, QuantityPickerTemplatesLegalProps } from '../../../../components/Molecules/QuantityPicker';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the QuantityPicker component
const quantityPickerStyleScript = ({}: QuantityPickerProps) => {
	return css({
		'.ss__quantity-picker__controls-wrapper': {
			gap: '5px',
			'.ss__button.ss__quantity-picker__button': {
				width: '32px',
				height: '32px',
				padding: 0,
				borderRadius: '50%',
				justifyContent: 'center',
			},
			'.ss__quantity-picker__input': {
				height: '32px',
				padding: '0 5px',
				border: `1px solid ${custom.colors.controlBorder}`,
				borderRadius: '3px',
				backgroundColor: custom.colors.white,
				color: 'inherit',
				// the number input's spin buttons reserve width and push the centered value left
				appearance: 'textfield',
				MozAppearance: 'textfield',
				'&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
					appearance: 'none',
					margin: 0,
				},
			},
		},
	});
};

// QuantityPicker component props
export const quantityPicker: ThemeComponent<'quantityPicker', QuantityPickerProps, QuantityPickerTemplatesLegalProps> = {
	default: {
		quantityPicker: {
			themeStyleScript: quantityPickerStyleScript,
		},
	},
};
