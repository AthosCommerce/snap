import type {
	RecommendationBundleEasyAddProps,
	RecommendationBundleEasyAddTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleEasyAdd';
import { recommendationBundleEasyAddThemeComponentProps } from '../../../themeComponents/recommendationBundleEasyAdd';
import { ThemeComponent } from '../../../../providers';

export const recommendationBundleEasyAdd: ThemeComponent<
	'recommendationBundleEasyAdd',
	RecommendationBundleEasyAddProps,
	RecommendationBundleEasyAddTemplatesLegalProps
> = recommendationBundleEasyAddThemeComponentProps;
