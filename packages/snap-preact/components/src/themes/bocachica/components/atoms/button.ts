import { css } from '@emotion/react';
import type { ButtonProps, ButtonTemplatesLegalProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import Color from 'color';

// CSS in JS style script for the Button component
const buttonStyleScript = ({ backgroundColor, theme }: ButtonProps) => {
	const variables = theme?.variables;
	const hoverBackgroundColorObj = new Color(backgroundColor || variables?.colors.primary || undefined);
	const hoverColorObj = hoverBackgroundColorObj.isDark() ? Color('#fff') : Color('#000');

	return css({
		backgroundColor: backgroundColor || '#fff',
		borderRadius: '3px',
		'&:not(.ss__button--disabled):hover': {
			backgroundColor: hoverBackgroundColorObj.hex(),
			color: hoverColorObj.hex(),
			'.ss__icon': {
				fill: hoverColorObj.hex(),
				stroke: hoverColorObj.hex(),
			},
		},
	});
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps, ButtonTemplatesLegalProps> = {
	default: {
		button: {
			themeStyleScript: buttonStyleScript,
		},
	},
};
