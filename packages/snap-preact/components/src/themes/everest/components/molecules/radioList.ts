import { css } from '@emotion/react';
import type { RadioListProps, RadioListTemplatesLegalProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RadioList component
const radioListStyleScript = (props: RadioListProps) => {
	const variables = props?.theme?.variables;

	return css({
		'.ss__radio-list__title, .ss__radio-list__options-wrapper .ss__radio-list__option': {
			padding: 0,
			margin: `0 0 ${custom.spacing.x1}px 0`,
		},
		'.ss__radio-list__title': {
			display: 'block',
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			lineHeight: 1,
		},
		'.ss__radio-list__options-wrapper': {
			'.ss__radio-list__option': {
				gap: `${custom.spacing.x2}px`,
				'&:last-of-type': {
					marginBottom: 0,
				},
				'.ss__radio-list__option__icon, .ss__radio-list__option__label': {
					padding: 0,
				},
			},
			'.ss__radio-list__option--selected': {
				fontWeight: custom.fonts.weight01,
				color: variables?.colors?.primary,
			},
		},
	});
};

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps, RadioListTemplatesLegalProps> = {
	default: {
		radioList: {
			themeStyleScript: radioListStyleScript,
			hideOptionLabels: false,
		},
	},
};
