import { css } from '@emotion/react';
import type { QuantityPickerProps, QuantityPickerTemplatesLegalProps } from '../../../../components/Molecules/QuantityPicker';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const buttonSelectors = '.ss__quantity-picker__controls-wrapper .ss__button.ss__quantity-picker__button';

// CSS in JS style script for the QuantityPicker component
const quantityPickerStyleScript = (props: QuantityPickerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// a quantity stepper is a neutral control - one box (like a select) with icon buttons
	const quantityPickerStyles = css({
		flexWrap: 'wrap',
		gap: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
		maxWidth: '100%',
		'&.ss__quantity-picker--disabled': {
			opacity: 1,
			'.ss__quantity-picker__controls-wrapper': {
				...custom.styles.disabled(),
			},
			[buttonSelectors]: {
				opacity: 1,
			},
		},
		'.ss__quantity-picker__label': {
			...custom.styles.baseText(),
			fontWeight: custom.fonts.weight01,
		},
		'.ss__quantity-picker__controls-wrapper': {
			gap: 0,
			height: `${custom.sizes.height}px`,
			...custom.styles.box(undefined, 0),
		},
		[`& ${buttonSelectors}`]: {
			width: `${custom.sizes.height - 2}px`,
			height: '100%',
			padding: 0,
			color: 'inherit',
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				border: 0,
				backgroundColor: 'transparent',
			},
		},
		'.ss__quantity-picker__input': {
			width: `${custom.spacing.x8 + custom.spacing.x2}px`,
			height: '100%',
			padding: `0 ${custom.spacing.x1}px`,
			border: 0,
			backgroundColor: 'transparent',
			color: 'inherit',
			fontSize: '14px',
			textAlign: 'center',
			appearance: 'textfield',
			MozAppearance: 'textfield',
			'&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
				appearance: 'none',
				margin: 0,
			},
		},
	});

	return quantityPickerStyles;
};

// QuantityPicker component props
export const quantityPicker: ThemeComponent<'quantityPicker', QuantityPickerProps, QuantityPickerTemplatesLegalProps> = {
	default: {
		quantityPicker: {
			themeStyleScript: quantityPickerStyleScript,
		},
		'quantityPicker button icon': {
			size: `${custom.sizes.icon12}px`,
		},
		'quantityPicker button.decrement icon': {
			icon: custom.icons.minus,
		},
		'quantityPicker button.increment icon': {
			icon: custom.icons.plus,
		},
	},
};
