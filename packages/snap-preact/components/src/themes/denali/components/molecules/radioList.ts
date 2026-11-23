import { css } from '@emotion/react';
import type { RadioListProps, RadioListTemplatesLegalProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RadioList component
const radioListStyleScript = ({ hideOptionRadios, hideOptionLabels, horizontal, theme }: RadioListProps) => {
	const variables = theme?.variables;

	return css({
		'& .ss__radio-list__title': {
			color: variables?.colors?.secondary,
		},
		'& .ss__radio-list__option--selected': {
			...custom.styles.activeText(variables?.colors?.primary),
		},
		// a horizontal list wraps rather than squeezing its options or running out of its container
		...(horizontal
			? {
					'& .ss__radio-list__options-wrapper': { flexWrap: 'wrap' },
					'& .ss__radio-list__option': { flex: '0 0 auto' },
			  }
			: {}),
		// text-only options are rounded rows - gray on hover, with the selected one outlined like the active tab
		...(hideOptionRadios && !hideOptionLabels
			? {
					'& .ss__radio-list__option': {
						flex: horizontal ? '0 0 auto' : undefined,
						border: '2px solid transparent',
						borderRadius: '14px',
						padding: '4px 12px',
						'&:hover': {
							backgroundColor: custom.colors.gray01,
						},
						'&.ss__radio-list__option--selected': {
							backgroundColor: 'transparent',
							borderColor: variables?.colors?.secondary,
						},
					},
			  }
			: {}),
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
