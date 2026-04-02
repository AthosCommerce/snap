// import { css } from '@emotion/react';
import type { ErrorHandlerProps, ErrorHandlerTemplatesLegalProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the RadioList component
// const errorHandlerStyleScript = () => {
// };

// ErrorHandler component props
export const errorHandler: ThemeComponent<'errorHandler', ErrorHandlerProps, ErrorHandlerTemplatesLegalProps> = {
	default: {
		errorHandler: {
			// themeStyleScript: ErrorHandlerStyleScript,
		},
	},
};
