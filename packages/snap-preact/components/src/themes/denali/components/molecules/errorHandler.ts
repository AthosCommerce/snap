import { css } from '@emotion/react';
import type { ErrorHandlerProps, ErrorHandlerTemplatesLegalProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the ErrorHandler component
const errorHandlerStyleScript = ({}: ErrorHandlerProps) => {
	return css({
		// a rounded card without the component's left accent bar - the tint and icon carry the severity
		borderRadius: '20px',
		borderLeft: 0,
		padding: '5px 10px',
		// retry is a text button on the tinted card, not a white pill
		'& .ss__error-handler__button': {
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				border: '2px solid currentColor',
				backgroundColor: 'transparent',
			},
		},
	});
};

// ErrorHandler component props
export const errorHandler: ThemeComponent<'errorHandler', ErrorHandlerProps, ErrorHandlerTemplatesLegalProps> = {
	default: {
		errorHandler: {
			themeStyleScript: errorHandlerStyleScript,
		},
	},
};
