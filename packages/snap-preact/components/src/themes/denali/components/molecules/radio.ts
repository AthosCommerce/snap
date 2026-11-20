import { css } from '@emotion/react';
import type { RadioProps, RadioTemplatesLegalProps } from '../../../../components/Molecules/Radio';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Radio component
const radioStyleScript = ({ size, native, color, theme }: RadioProps) => {
	const variables = theme?.variables;

	if (native) {
		return css({
			width: size,
			height: size,
			display: 'flex',
			justifyContent: 'center',

			'.ss__radio__input': {
				height: `calc(${size} - 30%)`,
				width: `calc(${size} - 30%)`,
				margin: 'auto',
			},
		});
	}

	return css({
		border: `2px solid ${custom.colors.controlBorder}`,
		borderRadius: '50%',
		backgroundColor: custom.colors.white,
		'&:not(.ss__radio--active) .ss__radio__icon': {
			opacity: 0,
		},
		'.ss__radio__icon': {
			...custom.styles.indicator(color || variables?.colors?.accent),
		},
		'&.ss__radio--disabled': {
			opacity: 0.3,
		},
	});
};

// Radio component props
export const radio: ThemeComponent<'radio', RadioProps, RadioTemplatesLegalProps> = {
	default: {
		radio: {
			themeStyleScript: radioStyleScript,
			checkedIcon: 'circle',
			unCheckedIcon: 'circle',
			size: '18px',
		},
		'radio icon': {
			width: 'calc(50% + 1px)',
			height: 'calc(50% + 1px)',
		},
	},
};
