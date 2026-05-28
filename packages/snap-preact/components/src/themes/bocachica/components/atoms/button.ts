import { css } from '@emotion/react';
import type { ButtonProps, ButtonTemplatesLegalProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { colord } from 'colord';

// CSS in JS style script for the Button component

const buttonStyleScript = ({ backgroundColor, theme }: ButtonProps) => {
	const variables = theme?.variables;
	const hoverBackgroundColorObj = colord(backgroundColor || variables?.colors?.primary || '#000');
	const hoverColorObj = hoverBackgroundColorObj.isDark() ? colord('#fff') : colord('#000');

	return css({
		backgroundColor: backgroundColor || '#fff',
		borderRadius: '3px',
		'&:not(.ss__button--disabled):hover': {
			backgroundColor: hoverBackgroundColorObj.toHex(),
			color: hoverColorObj.toHex(),
			'.ss__icon': {
				fill: hoverColorObj.toHex(),
				stroke: hoverColorObj.toHex(),
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
