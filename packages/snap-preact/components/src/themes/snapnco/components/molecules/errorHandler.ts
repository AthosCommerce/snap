import type { ErrorHandlerProps, ErrorHandlerTemplatesLegalProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';

// ErrorHandler component props
export const errorHandler: ThemeComponent<'errorHandler', ErrorHandlerProps, ErrorHandlerTemplatesLegalProps> = {
	default: {
		errorHandler: {
			// themeStyleScript: ErrorHandlerStyleScript,
		},
	},
};
