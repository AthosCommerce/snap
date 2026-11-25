import { css } from '@emotion/react';
import type { CheckboxProps, CheckboxTemplatesLegalProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = ({ color, iconColor, theme }: CheckboxProps) => {
	const variables = theme?.variables;

	return css({
		border: `2px solid ${color || custom.colors.controlBorder}`,
		borderRadius: '5px',
		backgroundColor: custom.colors.white,
		'.ss__checkbox__icon': {
			...custom.styles.indicator(iconColor || variables?.colors?.primary),
		},
		// a checked box takes the brand color on its outline as well as its check
		'&.ss__checkbox--active': {
			borderColor: color || variables?.colors?.primary,
		},
		'&.ss__checkbox--disabled': {
			opacity: 0.4,
		},
	});
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps, CheckboxTemplatesLegalProps> = {
	default: {
		checkbox: {
			themeStyleScript: checkboxStyleScript,
			size: '18px',
		},
	},
};
