import { css } from '@emotion/react';
import type { ButtonProps, ButtonTemplatesLegalProps } from '../../../../components/Atoms/Button';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const buttonDisabledSelectors = '&.ss__button--disabled';

// CSS in JS style script for the Button component
const buttonStyleScript = (props: ButtonProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const activeColors = custom.utils.activeColors(props?.backgroundColor);
	const buttonColor = activeColors[0];
	const borderColor = props?.borderColor ? props.borderColor : activeColors[0];
	const fontColor = props?.color ? props.color : activeColors[1];

	// shared styles
	const sharedStyles = css([
		{
			cursor: 'pointer',
			padding: `0 ${custom.spacing.x4}px`,
			justifyContent: 'center',
			fontSize: '14px',
			fontWeight: custom.fonts.weight01,
			textAlign: 'center',
			textTransform: custom.fonts.transform,
			color: fontColor,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			...custom.styles.borderRadius(),
			...custom.styles.boxSizing('button', props?.treePath, props?.name),
			'&[active="true"], &:has([active="true"])': {
				'.ss__icon': {
					'&.ss__icon--filter': {
						transform: 'rotate(-180deg)',
					},
					'&.ss__icon--filters': {
						circle: {
							'&:last-child': {
								transform: 'translateX(-35%)',
							},
							transform: 'translateX(35%)',
						},
					},
				},
			},
			[buttonDisabledSelectors]: {
				...custom.styles.disabled(),
			},
			'.ss__button__content': {
				'&:has(span)': {
					display: 'inline-flex',
					flexFlow: 'row nowrap',
					alignItems: 'center',
					gap: `${custom.spacing.x1}px`,
					span: {
						...custom.styles.textOverflow(),
					},
				},
				'&:not(:has(span))': {
					...custom.styles.textOverflow(),
				},
				'&, *': {
					minWidth: '1px',
				},
			},
			[`&, &:hover, &:not(.ss__button--disabled):hover, ${buttonDisabledSelectors}`]: {
				border: `1px solid ${borderColor}`,
				backgroundColor: buttonColor,
			},
			'.ss__icon.ss__icon--filters': {
				fill: buttonColor,
			},
		},
	]);

	// default button styles
	const defaultButtonStyles = sharedStyles;

	// native button styles
	const nativeButtonStyles = css([
		{
			display: 'inline-flex',
			alignItems: 'center',
			gap: `${custom.spacing.x1}px`,
			position: 'relative',
			outline: 0,
		},
		sharedStyles,
	]);

	return props?.native ? nativeButtonStyles : defaultButtonStyles;
};

// Button component props
export const button: ThemeComponent<'button', ButtonProps, ButtonTemplatesLegalProps> = {
	default: {
		button: {
			themeStyleScript: buttonStyleScript,
		},
		'button icon': {
			size: `${custom.sizes.icon12}px`,
		},
	},
};
