import { css } from '@emotion/react';
import type { TabSelectionProps, TabSelectionTemplatesLegalProps } from '../../../../components/Molecules/TabSelection';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the TabSelection component
const tabSelectionStyleScript = ({ theme }: TabSelectionProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__tab-selection__title': {
			color: variables?.colors?.secondary,
		},
		'.ss__tab-selection__tabs .ss__button.ss__tab-selection__button': {
			color: custom.colors.gray03,
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				borderColor: custom.colors.gray02,
				backgroundColor: custom.colors.white,
			},
			'&:not(.ss__button--disabled):hover': {
				backgroundColor: custom.colors.gray01,
			},
			'&.ss__tab-selection__button--active': {
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					fontWeight: 'bold',
					color: variables?.colors?.primary,
					borderColor: variables?.colors?.secondary,
				},
			},
			'.ss__tab-selection__button__count': {
				marginLeft: '5px',
				fontSize: '12px',
				fontWeight: 'normal',
				color: custom.colors.gray03,
			},
		},
	});
};

// TabSelection component props
export const tabSelection: ThemeComponent<'tabSelection', TabSelectionProps, TabSelectionTemplatesLegalProps> = {
	default: {
		tabSelection: {
			themeStyleScript: tabSelectionStyleScript,
		},
	},
};
