import { css } from '@emotion/react';
import type { TabSelectionProps, TabSelectionTemplatesLegalProps } from '../../../../components/Molecules/TabSelection';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const tabSelectors = '.ss__tab-selection__tabs .ss__button.ss__tab-selection__button';
const underline = 2; // matches the facet header underline

// CSS in JS style script for the TabSelection component
const tabSelectionStyleScript = (props: TabSelectionProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const primary = variables?.colors?.primary;
	const activeColor = primary && primary != 'currentColor' ? primary : 'inherit';

	// tabs are text on a light rule - the active tab is bold with the Pike header underline
	const tabSelectionStyles = css({
		'.ss__tab-selection__title': {
			margin: `0 0 ${custom.spacing.x2}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		},
		'.ss__tab-selection__tabs': {
			flexWrap: 'wrap',
			gap: `0 ${custom.spacing.x4}px`,
			borderBottom: `1px solid ${custom.colors.gray02}`,
		},
		[`& ${tabSelectors}`]: {
			height: 'auto',
			padding: `${custom.spacing.x2}px 0`,
			margin: `0 0 -1px 0`,
			lineHeight: 1.5,
			fontWeight: 'normal',
			color: custom.colors.gray04,
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				border: 0,
				borderBottom: `${underline}px solid transparent`,
				backgroundColor: 'transparent',
			},
			'&:not(.ss__button--disabled):hover': {
				color: 'inherit',
			},
			'&.ss__tab-selection__button--active': {
				'&, &:hover': {
					fontWeight: custom.fonts.weight01,
					// inactive tabs are muted, so a `currentColor` primary must inherit the page color instead
					color: activeColor,
					borderBottomColor: 'currentColor',
				},
			},
			'.ss__tab-selection__button__count': {
				marginLeft: `${custom.spacing.x1}px`,
				fontSize: '12px',
				fontWeight: 'normal',
				color: custom.colors.gray04,
			},
		},
	});

	return tabSelectionStyles;
};

// TabSelection component props
export const tabSelection: ThemeComponent<'tabSelection', TabSelectionProps, TabSelectionTemplatesLegalProps> = {
	default: {
		tabSelection: {
			themeStyleScript: tabSelectionStyleScript,
		},
	},
};
