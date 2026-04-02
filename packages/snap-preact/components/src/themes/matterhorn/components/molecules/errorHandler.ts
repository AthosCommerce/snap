import { css } from '@emotion/react';
import type { ErrorHandlerProps, ErrorHandlerTemplatesLegalProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the ErrorHandler component
const errorHandlerStyleScript = (props: ErrorHandlerProps) => {
	const variables = props?.theme?.variables;

	return css({
		'.ss__error-handler__message': {
			display: 'block',
			flex: `1 1 0%`,
			color: variables?.colors?.text,
			'.ss__icon': {
				position: 'relative',
				top: '2px',
			},
		},
		'.ss__error-handler__button': {
			gap: 0,
			flex: `0 1 auto`,
			padding: `0 ${custom.spacing.x1}px`,
			height: '25px',
			lineHeight: '25px',
		},
	});
};

// ErrorHandler component props
export const errorHandler: ThemeComponent<'errorHandler', ErrorHandlerProps, ErrorHandlerTemplatesLegalProps> = {
	default: {
		errorHandler: {
			themeStyleScript: errorHandlerStyleScript,
		},
		'errorHandler icon': {
			size: `${custom.sizes.icon14}px`,
		},
	},
};
