import { css } from '@emotion/react';
import type { RecommendationGridProps, RecommendationGridTemplatesLegalProps } from '../../../../components/Templates/RecommendationGrid';
import { recommendationGridThemeComponentProps } from '../../../themeComponents/recommendationGrid';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the RecommendationGrid component
const recommendationGridStyleScript = ({ theme }: RecommendationGridProps) => {
	const variables = theme?.variables;

	return css({
		margin: '20px 0',
		'& .ss__recommendation-grid__title': {
			color: variables?.colors?.secondary,
		},
	});
};

// RecommendationGrid component props come from Template export
// without `columns` the component lays every result out in one row - match the recommendation carousel's slides per view
export const recommendationGrid: ThemeComponent<'recommendationGrid', RecommendationGridProps, RecommendationGridTemplatesLegalProps> = {
	default: {
		...recommendationGridThemeComponentProps.default,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.default?.['recommendationGrid'] || {}),
			themeStyleScript: recommendationGridStyleScript,
			columns: 5,
		},
	},
	mobile: {
		...recommendationGridThemeComponentProps.mobile,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.mobile?.['recommendationGrid'] || {}),
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
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.desktop?.['recommendationGrid'] || {}),
			columns: 4,
		},
	},
};
