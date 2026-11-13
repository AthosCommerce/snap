import { css } from '@emotion/react';
import type {
	RecommendationBundleVerticalProps,
	RecommendationBundleVerticalTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleVertical';
import { recommendationBundleVerticalThemeComponentProps } from '../../../themeComponents/recommendationBundleVertical';
import { ThemeComponent } from '../../../../providers';
import { bundleSelectorSharedStyles } from './recommendationBundleShared';
// CSS in JS style script for the RecommendationBundle component
const recommendationBundleVerticalStyleScript = ({ theme }: RecommendationBundleVerticalProps) => {
	return css({
		...bundleSelectorSharedStyles('ss__recommendation-bundle-vertical', theme),
	});
};

// RecommendationBundleVertical component props come from Template export
export const recommendationBundleVertical: ThemeComponent<
	'recommendationBundleVertical',
	RecommendationBundleVerticalProps,
	RecommendationBundleVerticalTemplatesLegalProps
> = {
	default: {
		...recommendationBundleVerticalThemeComponentProps.default,
		recommendationBundleVertical: {
			...(recommendationBundleVerticalThemeComponentProps.default?.['recommendationBundleVertical'] || {}),
			themeStyleScript: recommendationBundleVerticalStyleScript,
		},
	},
	mobile: recommendationBundleVerticalThemeComponentProps.mobile,
	desktop: recommendationBundleVerticalThemeComponentProps.desktop,
	tablet: recommendationBundleVerticalThemeComponentProps.tablet,
};
