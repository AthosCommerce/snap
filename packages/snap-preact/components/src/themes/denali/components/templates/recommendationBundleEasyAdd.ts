import { css } from '@emotion/react';
import type {
	RecommendationBundleEasyAddProps,
	RecommendationBundleEasyAddTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleEasyAdd';
import { recommendationBundleEasyAddThemeComponentProps } from '../../../themeComponents/recommendationBundleEasyAdd';
import { ThemeComponent } from '../../../../providers';
import { bundleListRowSharedStyles } from './recommendationBundleShared';
// CSS in JS style script for the RecommendationBundle component
const recommendationBundleEasyAddStyleScript = ({ theme }: RecommendationBundleEasyAddProps) => {
	return css({
		...bundleListRowSharedStyles('ss__recommendation-bundle-easy-add', theme),
	});
};

// RecommendationBundleEasyAdd component props come from Template export
export const recommendationBundleEasyAdd: ThemeComponent<
	'recommendationBundleEasyAdd',
	RecommendationBundleEasyAddProps,
	RecommendationBundleEasyAddTemplatesLegalProps
> = {
	default: {
		...recommendationBundleEasyAddThemeComponentProps.default,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.default?.['recommendationBundleEasyAdd'] || {}),
			themeStyleScript: recommendationBundleEasyAddStyleScript,
		},
		// image left, details right - a grid card fills the full width with a full-width square image
		'recommendationBundleEasyAdd result': {
			layout: 'list',
		},
	},
	mobile: recommendationBundleEasyAddThemeComponentProps.mobile,
	desktop: recommendationBundleEasyAddThemeComponentProps.desktop,
	tablet: recommendationBundleEasyAddThemeComponentProps.tablet,
};
