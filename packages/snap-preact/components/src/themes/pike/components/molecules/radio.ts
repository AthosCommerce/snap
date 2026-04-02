import { css } from '@emotion/react';
import type { RadioProps, RadioTemplatesLegalProps } from '../../../../components/Molecules/Radio';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const darkGray = custom.utils.darkenColor();

// CSS in JS style script for the Radio component
const radioStyleScript = (props: RadioProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// default radio styles
	const defaultRadiosStyles = css([
		{
			position: 'relative',
			top: '-1px',
			...custom.styles.box('', 0),
			...custom.styles.borderRadius(50, '%'),
			...custom.styles.boxSizing('radio', props?.treePath, props?.name),
			'&.ss__radio--disabled': {
				...custom.styles.disabled(),
			},
			'&.ss__radio--active': {
				borderColor: darkGray,
				'.ss__icon': {
					opacity: 1,
				},
			},
			'.ss__icon': {
				opacity: 0,
			},
		},
	]);

	// native radio styles
	const nativeRadiosStyles = css([
		{
			lineHeight: 0,
			...custom.styles.boxSizing('radio', props?.treePath, props?.name),
			'&.ss__radio--disabled .ss__radio__input': {
				...custom.styles.disabled(),
			},
			'.ss__radio__input': {
				margin: 0,
				padding: 0,
				width: props?.size ? props.size : `${custom.sizes.icon16}px`,
				height: props?.size ? props.size : `${custom.sizes.icon16}px`,
				lineHeight: 1,
				cursor: 'pointer',
			},
		},
	]);

	return props?.native ? nativeRadiosStyles : defaultRadiosStyles;
};

// Radio component props
export const radio: ThemeComponent<'radio', RadioProps, RadioTemplatesLegalProps> = {
	default: {
		radio: {
			themeStyleScript: radioStyleScript,
			checkedIcon: 'circle',
			unCheckedIcon: 'circle',
			size: `${custom.sizes.icon16}px`,
			color: custom.colors.primary,
		},
		'radio icon': {
			width: `calc(50% + 1px)`,
			height: `calc(50% + 1px)`,
		},
	},
};
