import { css } from '@emotion/react';
import { ThemeComponent } from '../../../../providers';
import { ToolbarProps, ToolbarTemplatesLegalProps } from '../../../../components/Organisms/Toolbar';
import { custom } from '../../custom';

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = (props: ToolbarProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		'.ss__layout': {
			gap: `${custom.spacing.x2}px`,
			margin: 0,
		},
		'&[class*="bottom"]': {
			'.ss__pagination-info': {
				fontSize: custom.utils.convertPxToEm(14),
			},
		},
		'.ss__pagination-info': {
			fontSize: custom.utils.convertPxToEm(16),
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__pagination-info': {
				fontSize: custom.utils.convertPxToEm(18),
			},
		},
		'& > .ss__layout > .ss__layout__row > .ss__filter-summary': {
			display: 'flex',
			flexFlow: 'row wrap',
			'.ss__filter-summary__title, .ss__filter-summary__filters': {
				minWidth: '1px',
			},
			'.ss__filter-summary__title': {
				flex: '0 1 auto',
				padding: `0 ${custom.spacing.x2}px 0 0`,
			},
			'.ss__filter-summary__filters': {
				flex: '1 1 0%',
			},
			'&.ss__filter-summary--inline': {
				'.ss__filter-summary__title': {
					paddingTop: `${custom.spacing.x1}px`,
					paddingBottom: `${custom.spacing.x1}px`,
				},
			},
			'&.ss__filter-summary--list': {
				'.ss__filter-summary__filters': {
					display: 'flex',
					flexFlow: 'row wrap',
					alignItems: 'center',
					gap: `${custom.spacing.x2}px`,
					'.ss__filter': {
						margin: 0,
					},
				},
			},
		},
	});
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
	},
};
