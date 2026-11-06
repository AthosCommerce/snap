import { css } from '@emotion/react';
import type { ButtonProps, ButtonTemplatesLegalProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Button component
const buttonStyleScript = ({ backgroundColor, borderColor, color, theme }: ButtonProps) => {
	const variables = theme?.variables;
	const secondary = variables?.colors?.secondary || custom.colors.black;
	const activeColors = custom.utils.activeColors(backgroundColor || secondary);
	const fill = backgroundColor ? activeColors[0] : custom.colors.white;
	const outline = borderColor || (backgroundColor ? activeColors[0] : secondary);
	const text = color || (backgroundColor ? activeColors[1] : secondary);

	return css({
		backgroundColor: fill,
		borderRadius: '2em',
		padding: '10px 15px',
		color: text,
		border: `2px solid ${outline}`,

		'.ss__icon': {
			fill: 'currentColor',
			stroke: 'currentColor',
		},

		'&:not(.ss__button--disabled):hover': {
			backgroundColor: backgroundColor ? fill : custom.colors.gray01,
			opacity: backgroundColor ? 0.8 : 1,
		},
		// native buttons get no disabled styles from the component
		'&.ss__button--disabled': {
			opacity: 0.7,
			cursor: 'not-allowed',
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
