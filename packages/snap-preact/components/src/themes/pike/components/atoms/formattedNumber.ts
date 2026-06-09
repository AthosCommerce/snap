import { css } from '@emotion/react';
import type { FormattedNumberProps, FormattedNumberTemplatesLegalProps } from '../../../../components/Atoms/FormattedNumber';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FormattedNumber component
const formattedNumberStyleScript = (props: FormattedNumberProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// formatted number styles
	const formattedNumberStyles = css({});

	return formattedNumberStyles;
};

// FormattedNumber component props
export const formattedNumber: ThemeComponent<'formattedNumber', FormattedNumberProps, FormattedNumberTemplatesLegalProps> = {
	default: {
		formattedNumber: {
			themeStyleScript: formattedNumberStyleScript,
		},
	},
};
