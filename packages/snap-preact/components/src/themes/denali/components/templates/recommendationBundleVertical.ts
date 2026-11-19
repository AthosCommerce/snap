import { css } from '@emotion/react';
import type {
	RecommendationBundleVerticalProps,
	RecommendationBundleVerticalTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleVertical';
import { recommendationBundleVerticalThemeComponentProps } from '../../../themeComponents/recommendationBundleVertical';
import { ThemeComponent } from '../../../../providers';
import { bundleListRowSharedStyles, bundleSelectorSharedStyles } from './recommendationBundleShared';
// CSS in JS style script for the RecommendationBundle component
const recommendationBundleVerticalStyleScript = ({ theme }: RecommendationBundleVerticalProps) => {
	return css({
		...bundleListRowSharedStyles('ss__recommendation-bundle-vertical', theme),
		...bundleSelectorSharedStyles('ss__recommendation-bundle-vertical', theme),
		'.ss__recommendation-bundle-vertical__wrapper': {
			gap: '15px',
		},
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
		// image left, details right - a grid card fills the full width with a full-width square image
		'recommendationBundleVertical result': {
			layout: 'list',
		},
	},
	mobile: recommendationBundleVerticalThemeComponentProps.mobile,
	desktop: recommendationBundleVerticalThemeComponentProps.desktop,
	tablet: recommendationBundleVerticalThemeComponentProps.tablet,
};
