import { css } from '@emotion/react';
import type { RadioProps, RadioTemplatesLegalProps } from '../../../../components/Molecules/Radio';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Radio component
const radioStyleScript = (props: RadioProps) => {
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	// shared radio styles
	const sharedDefaultStyles = css({
		border: `1px solid ${custom.colors.gray02}`,
		'&, & .ss__icon': {
			borderRadius: '50%',
		},
		'.ss__icon': {
			display: 'none',
		},
		'&.ss__radio--active': {
			borderColor: darkGray,
			'.ss__icon': {
				display: 'block',
				fill: variables?.colors?.primary,
				stroke: variables?.colors?.primary,
			},
		},
	});
	const disabledStyles = css({
		'&.ss__radio--disabled': {
			opacity: 0.65,
			'&, & *': {
				cursor: 'not-allowed',
			},
		},
	});

	// default radio styles
	const defaultStyles = css([
		sharedDefaultStyles,
		{
			backgroundColor: custom.colors.gray01,
		},
		disabledStyles,
	]);

	// native radio styles
	const nativeStyles = css([
		{
			lineHeight: 0,
			'.ss__radio__input': {
				width: `${custom.sizes.icon16}px`,
				height: `${custom.sizes.icon16}px`,
				border: `1px solid ${custom.colors.gray02}`,
				cursor: 'pointer',
			},
		},
		disabledStyles,
	]);

	// return radio styles
	if (props?.native) {
		return nativeStyles;
	} else {
		return defaultStyles;
	}
};

// Radio component props
export const radio: ThemeComponent<'radio', RadioProps, RadioTemplatesLegalProps> = {
	default: {
		radio: {
			themeStyleScript: radioStyleScript,
			size: `${custom.sizes.icon14}px`,
		},
		'radio icon': {
			icon: 'square',
			size: `${custom.sizes.icon10 - 2}px`,
		},
	},
};
