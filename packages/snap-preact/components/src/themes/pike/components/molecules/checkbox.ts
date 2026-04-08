import { css } from '@emotion/react';
import type { CheckboxProps, CheckboxTemplatesLegalProps } from '../../../../components/Molecules/Checkbox';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const darkGray = custom.utils.darkenColor();

// CSS in JS style script for the Checkbox component
const checkboxStyleScript = (props: CheckboxProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		position: 'relative',
		top: '-1px',
	});

	// default checkbox styles
	const defaultCheckboxStyles = css([
		sharedStyles,
		{
			...custom.styles.box('', 0),
			...custom.styles.boxSizing('checkbox', props?.treePath, props?.name),
			'&.ss__checkbox--active': {
				borderColor: darkGray,
			},
			'&.ss__checkbox--disabled': {
				...custom.styles.disabled(),
			},
		},
	]);

	// native checkbox styles
	const nativeCheckboxStyles = css([
		sharedStyles,
		{
			margin: 0,
			padding: 0,
			width: props?.size ? props.size : `${custom.sizes.icon16}px`,
			height: props?.size ? props.size : `${custom.sizes.icon16}px`,
			lineHeight: 1,
			cursor: 'pointer',
			...custom.styles.boxSizing('checkbox', props?.treePath, props?.name),
			'&.ss__checkbox--disabled': {
				...custom.styles.disabled(),
			},
		},
	]);

	return props?.native ? nativeCheckboxStyles : defaultCheckboxStyles;
};

// Checkbox component props
export const checkbox: ThemeComponent<'checkbox', CheckboxProps, CheckboxTemplatesLegalProps> = {
	default: {
		checkbox: {
			themeStyleScript: checkboxStyleScript,
			icon: custom.icons.check,
			size: `${custom.sizes.icon16}px`,
			color: custom.colors.primary,
		},
		'checkbox icon': {
			width: `calc(50% + 1px)`,
			height: `calc(50% + 1px)`,
		},
	},
};
