import { css } from '@emotion/react';
import { ThemeComponent } from '../../../../providers';
import type { ToolbarProps, ToolbarTemplatesLegalProps } from '../../../../components/Organisms/Toolbar';
import { custom } from '../../custom';

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = (props: ToolbarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile as number;

	// toolbar styles
	const toolbarStyles = css({
		// same anatomy as the select it sits beside - label left, icon right, 10px inset
		'.ss__layout__sidebar-toggle-button-wrapper .ss__button': {
			justifyContent: 'space-between',
			gap: `${custom.spacing.x2}px`,
			padding: `0 ${custom.spacing.x2}px`,
			'.ss__button__content': {
				textAlign: 'left',
				justifyContent: 'flex-start',
			},
		},
		'.ss__layout': {
			'&, .ss__layout__row': {
				gap: `${custom.spacing.x2}px`,
			},
		},
		'.ss__pagination-info': {
			fontSize: props?.name == 'bottom' ? '16px' : '18px',
		},
		'.ss__banner': {
			margin: `${custom.spacing.x2}px 0`,
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__pagination-info': {
				fontSize: props?.name == 'bottom' ? '14px' : '16px',
			},
		},
	});

	return toolbarStyles;
};

// Toolbar component props
export const toolbar: ThemeComponent<'toolbar', ToolbarProps, ToolbarTemplatesLegalProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
		'toolbar filterSummary': {
			title: `Current Filters:`,
		},
		'toolbar button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'toolbar button.sidebar-toggle icon': {
			size: `${custom.sizes.icon14}px`,
		},
	},
};
