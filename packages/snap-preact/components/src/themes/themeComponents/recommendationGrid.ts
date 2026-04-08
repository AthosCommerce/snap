import { RecommendationGridProps, RecommendationGridTemplatesLegalProps } from '../../components/Templates/RecommendationGrid';
import { ThemeComponent } from '../../providers';

export const recommendationGridThemeComponentProps: ThemeComponent<
	'recommendationGrid',
	RecommendationGridProps,
	RecommendationGridTemplatesLegalProps
> = {
	default: {},
	mobile: {},
	tablet: {},
	desktop: {},
};
