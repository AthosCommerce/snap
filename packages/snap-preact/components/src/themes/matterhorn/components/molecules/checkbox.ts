import { css } from '@emotion/react';
import type { CheckboxProps, CheckboxTemplatesLegalProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	// shared checkbox styles
	const sharedStyles = css({
		position: 'relative',
		top: '-1px',
	});
	const sharedDefaultStyles = css({
		border: `1px solid ${custom.colors.gray02}`,
		'&, *': {
			boxSizing: 'border-box',
		},
		'.ss__icon': {
			width: '8px',
			height: '8px',
		},
		'&.ss__checkbox--active': {
			borderColor: darkGray,
			'.ss__icon': {
				fill: variables?.colors?.primary,
				stroke: variables?.colors?.primary,
			},
		},
	});
	const disabledStyles = css({
		'&.ss__checkbox--disabled': {
			opacity: 0.65,
			'&, & *': {
				cursor: 'not-allowed',
			},
		},
	});

	// default checkbox styles
	const defaultStyles = css([
		sharedStyles,
		sharedDefaultStyles,
		{
			backgroundColor: custom.colors.gray01,
		},
		disabledStyles,
	]);

	// native checkbox styles
	const nativeStyles = css([
		sharedStyles,
		{
			width: `${custom.sizes.icon16}px`,
			height: `${custom.sizes.icon16}px`,
			border: `1px solid ${custom.colors.gray02}`,
			cursor: 'pointer',
		},
		disabledStyles,
	]);

	// return checkbox styles
	if (props?.native) {
		return nativeStyles;
	} else {
		return defaultStyles;
	}
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps, CheckboxTemplatesLegalProps> = {
	default: {
		checkbox: {
			themeStyleScript: checkboxStyleScript,
			icon: custom.icons.check,
			size: `${custom.sizes.icon16}px`,
		},
	},
};
