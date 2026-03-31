import { css } from '@emotion/react';
import type { RecommendationGridProps, RecommendationGridTemplatesLegalProps } from '../../../../components/Templates/RecommendationGrid';
import { recommendationGridThemeComponentProps } from '../../../themeComponents/recommendationGrid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationGridStyleScript = (props: RecommendationGridProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		margin: `${custom.spacing.x8}px 0`,
		maxHeight: 'none',
		'.ss__recommendation-grid__title': {
			fontSize: custom.utils.convertPxToEm(22),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
			textAlign: 'center',
			margin: `0 0 ${custom.spacing.x4}px 0`,
		},
		'.ss__recommendation-grid__results': {
			overflowX: 'auto',
			'&::-webkit-scrollbar': {
				width: '8px',
				height: '8px',
			},
			'&::-webkit-scrollbar-track': {
				backgroundColor: custom.colors.gray01,
			},
			'&::-webkit-scrollbar-thumb': {
				backgroundColor: custom.colors.gray02,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__recommendation-grid__title': {
				textAlign: 'left',
			},
		},
	});
};

// RecommendationGrid component props come from Template export
export const recommendationGrid: ThemeComponent<'recommendationGrid', RecommendationGridProps, RecommendationGridTemplatesLegalProps> = {
	default: {
		...recommendationGridThemeComponentProps.default,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.default?.['recommendationGrid'] || {}),
			themeStyleScript: recommendationGridStyleScript,
			gapSize: `${custom.spacing.x6}px ${custom.spacing.x4}px`,
			columns: 4,
		},
	},
	mobile: {
		...recommendationGridThemeComponentProps.mobile,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.mobile?.['recommendationGrid'] || {}),
			gapSize: `${custom.spacing.x6}px ${custom.spacing.x2}px`,
			columns: 2,
		},
	},
	tablet: {
		...recommendationGridThemeComponentProps.tablet,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.tablet?.['recommendationGrid'] || {}),
			columns: 3,
		},
	},
	desktop: {
		...recommendationGridThemeComponentProps.desktop,
	},
};
