// import { css } from '@emotion/react';
import type { RadioListProps, RadioListTemplatesLegalProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the RadioList component
// const radioListStyleScript = () => {
// };

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps, RadioListTemplatesLegalProps> = {
	default: {
		radioList: {
			// themeStyleScript: radioListStyleScript,
		},
	},
};
