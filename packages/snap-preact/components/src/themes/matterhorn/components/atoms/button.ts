import { css } from '@emotion/react';
import type { ButtonProps, ButtonTemplatesLegalProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the Button component
const buttonStyleScript = (props: ButtonProps) => {
	const variables = props?.theme?.variables;
	const buttonDisabledSelectors = '&.ss__button--disabled';
	const buttonSelector = `&, &:hover, &:not(.ss__button--disabled):hover, ${buttonDisabledSelectors}`;
	const buttonColor = new Color(props?.backgroundColor || variables?.colors?.primary || undefined);
	const fontColor = buttonColor.isDark() || buttonColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	// shared button styles
	const disabledStyles = css({
		[buttonDisabledSelectors]: {
			opacity: 0.65,
			'&, & *': {
				cursor: 'not-allowed',
			},
		},
	});

	// default styles
	const defaultStyles = css([
		{
			boxSizing: 'border-box',
			cursor: 'pointer',
			display: 'inline-flex',
			alignItems: 'center',
			gap: `${custom.spacing.x1}px`,
			position: 'relative',
			padding: `0 ${custom.spacing.x4}px`,
			color: fontColor.hex(),
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight01,
			textAlign: 'center',
			textTransform: custom.fonts.transform,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			[buttonSelector]: {
				border: `1px solid ${buttonColor.hex()}`,
				borderRadius: `${custom.sizes.radius}px`,
				backgroundColor: buttonColor.hex(),
			},
			'.ss__icon': {
				width: `${custom.sizes.icon12}px`,
				height: `${custom.sizes.icon12}px`,
				flex: `0 0 ${custom.sizes.icon12}px`,
			},
			'.ss__icon--filters': {
				circle: {
					fill: buttonColor.hex(),
				},
			},
		},
		disabledStyles,
	]);

	return defaultStyles;
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps, ButtonTemplatesLegalProps> = {
	default: {
		button: {
			themeStyleScript: buttonStyleScript,
			native: false,
		},
	},
};
