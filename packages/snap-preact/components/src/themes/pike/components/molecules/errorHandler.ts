import { css } from '@emotion/react';
import type { ErrorHandlerProps, ErrorHandlerTemplatesLegalProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the ErrorHandler component
const errorHandlerStyleScript = (props: ErrorHandlerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// error handler styles
	const errorHandlerStyles = css({
		gap: `${custom.spacing.x2}px`,
		padding: `${custom.spacing.x2}px`,
		...custom.styles.boxSizing('errorHandler', props?.treePath, props?.name),
		'.ss__error-handler__message, .ss__error-handler__button': {
			gap: `${custom.spacing.x1}px`,
		},
		'.ss__error-handler__message': {
			padding: 0,
			flexFlow: 'row wrap',
			flex: `1 1 0%`,
			fontSize: '14px',
			color: variables?.colors?.text,
			'span, .ss__icon, .ss__error-handler__message__type': {
				margin: 0,
			},
			'.ss__icon': {
				top: '-0.5px',
				stroke: 'transparent',
			},
		},
		'.ss__error-handler__button': {
			flex: `0 1 auto`,
			margin: 0,
			padding: `0 ${custom.spacing.x2}px`,
			height: '28px',
			lineHeight: '28px',
			'.ss__button__content, .ss__icon': {
				margin: 0,
			},
		},
	});

	return errorHandlerStyles;
};

// ErrorHandler component props
export const errorHandler: ThemeComponent<'errorHandler', ErrorHandlerProps, ErrorHandlerTemplatesLegalProps> = {
	default: {
		errorHandler: {
			themeStyleScript: errorHandlerStyleScript,
		},
		'errorHandler icon': {
			width: `${custom.sizes.icon14}px`,
			height: `${custom.sizes.icon14}px`,
		},
	},
};
