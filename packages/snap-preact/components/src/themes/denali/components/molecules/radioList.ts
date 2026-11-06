import { css } from '@emotion/react';
import type { RadioListProps, RadioListTemplatesLegalProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RadioList component
const radioListStyleScript = ({ hideOptionRadios, hideOptionLabels, theme }: RadioListProps) => {
	const variables = theme?.variables;

	return css({
		'& .ss__radio-list__title': {
			color: variables?.colors?.secondary,
		},
		'& .ss__radio-list__option--selected': {
			...custom.styles.activeText(variables?.colors?.primary),
		},
		// icon-only options: mute the unselected icons
		...(hideOptionRadios && hideOptionLabels
			? {
					'& .ss__radio-list__option:not(.ss__radio-list__option--selected) .ss__radio-list__option__icon': {
						...custom.styles.indicator(custom.colors.gray03),
					},
			  }
			: {}),
	});
};

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps, RadioListTemplatesLegalProps> = {
	default: {
		radioList: {
			themeStyleScript: radioListStyleScript,
		},
	},
};
