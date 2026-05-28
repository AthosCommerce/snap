import { css } from '@emotion/react';
import type { CheckboxProps, CheckboxTemplatesLegalProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { colord } from 'colord';

// CSS in JS style script for the Checkbox component

const checkboxStyleScript = ({ color, theme }: CheckboxProps) => {
	const variables = theme?.variables;
	const backgroundColorObj = colord(color || variables?.colors?.primary || '#000');
	const backgroundTextColorObj = backgroundColorObj.isDark() ? colord('#fff') : colord('#000');

	return css({
		border: `1px solid ${backgroundColorObj.toHex()}`,
		borderRadius: '3px',
		'&.ss__checkbox--active': {
			backgroundColor: backgroundColorObj.toHex(),
			'.ss__icon': {
				fill: backgroundTextColorObj.toHex(),
				stroke: backgroundTextColorObj.toHex(),
			},
		},
		'&.ss__checkbox--disabled': {
			opacity: 0.3,
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
