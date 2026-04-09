import type { RecommendationGridProps, RecommendationGridTemplatesLegalProps } from '../../../../components/Templates/RecommendationGrid';
import { recommendationGridThemeComponentProps } from '../../../themeComponents/recommendationGrid';
import { ThemeComponent } from '../../../../providers';

export const recommendationGrid: ThemeComponent<'recommendationGrid', RecommendationGridProps, RecommendationGridTemplatesLegalProps> =
	recommendationGridThemeComponentProps;
