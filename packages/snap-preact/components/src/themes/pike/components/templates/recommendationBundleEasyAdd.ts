import { css } from '@emotion/react';
import type {
	RecommendationBundleEasyAddProps,
	RecommendationBundleEasyAddTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleEasyAdd';
import { recommendationBundleEasyAddThemeComponentProps } from '../../../themeComponents/recommendationBundleEasyAdd';
import { ThemeComponent } from '../../../../providers';
import { recommendationCTAStyleScript } from './recommendationCTA';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundleEasyAdd component
const recommendationBundleEasyAddStyleScript = (props: RecommendationBundleEasyAddProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	// bundle easy add shared styles
	const sharedStyles = css({
		'.ss__recommendation-bundle-easy-add__wrapper__cta': {
			...recommendationCTAStyleScript(props, 'bundle-easy-add'),
		},
	});

	// bundle easy add styles
	const bundleEasyAddStyles = css({
		margin: `${custom.spacing.x4}px 0`,
		...custom.styles.boxSizing('recommendationBundleEasyAdd', props?.treePath, props?.name),
		'.ss__recommendation-profile-tracker': {
			'& > *': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
		'.ss__recommendation-bundle-easy-add__title': {
			...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		},
		'.ss__recommendation-bundle-easy-add__wrapper': {
			display: 'block',
			'.ss__recommendation-bundle-easy-add__wrapper__selector': {
				'.ss__recommendation-bundle-easy-add__wrapper__selector__result-wrapper': {
					margin: 0,
					'.ss__result.ss__result--grid': {
						...custom.styles.resultCompact('grid'),
					},
					'.ss__result.ss__result--list': {
						...custom.styles.resultCompact(),
					},
				},
			},
			'.ss__recommendation-bundle-easy-add__wrapper__cta': {
				margin: `${custom.spacing.x2}px 0 0 0`,
			},
		},
		'.ss__recommendation-bundle-easy-add__wrapper__cta': {
			width: 'auto',
			'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal': {
				'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__icon__wrapper': {
					display: 'none',
				},
			},
		},
	});

	// recommendation bundle easy add styles
	const recommendationBundleEasyAddStyles = css([sharedStyles, bundleEasyAddStyles]);

	return recommendationBundleEasyAddStyles;
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
			ctaButtonText: 'Add Both to Cart',
			ctaButtonSuccessText: 'Added!',
		},
		'recommendationBundleEasyAdd checkbox icon': {
			color: custom.colors.primary,
		},
		'recommendationBundleEasyAdd icon.bundle-cart': {
			size: `${custom.sizes.icon16 * 2}px`,
			icon: custom.icons.bag,
			color: custom.colors.secondary,
		},
		'recommendationBundleEasyAdd result': {
			layout: 'list',
		},
	},
	mobile: {
		...recommendationBundleEasyAddThemeComponentProps.mobile,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.mobile?.['recommendationBundleEasyAdd'] || {}),
		},
	},
	tablet: {
		...recommendationBundleEasyAddThemeComponentProps.tablet,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.tablet?.['recommendationBundleEasyAdd'] || {}),
		},
	},
	desktop: {
		...recommendationBundleEasyAddThemeComponentProps.desktop,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.desktop?.['recommendationBundleEasyAdd'] || {}),
		},
	},
};
