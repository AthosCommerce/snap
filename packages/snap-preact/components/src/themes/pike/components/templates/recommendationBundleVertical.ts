import { css } from '@emotion/react';
import type {
	RecommendationBundleVerticalProps,
	RecommendationBundleVerticalTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleVertical';
import { recommendationBundleVerticalThemeComponentProps } from '../../../themeComponents/recommendationBundleVertical';
import { ThemeComponent } from '../../../../providers';
import { recommendationCTAStyleScript } from './recommendationCTA';
import { custom } from '../../custom';

// static variables
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];
const seedBadgeHeight = 22;
const checkboxHeight = 16;

// CSS in JS style script for the RecommendationBundleVertical component
const recommendationBundleVerticalStyleScript = (props: RecommendationBundleVerticalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// bundle vertical shared styles
	const sharedStyles = css({
		'.ss__recommendation-bundle-vertical__wrapper__cta': {
			...recommendationCTAStyleScript(props, 'bundle-vertical'),
		},
	});

	// bundle vertical styles
	const bundleVerticalStyles = css({
		margin: `${custom.spacing.x4}px 0`,
		...custom.styles.boxSizing('recommendationBundleVertical', props?.treePath, props?.name),
		'.ss__recommendation-profile-tracker': {
			'& > *': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
		'.ss__recommendation-bundle-vertical__title': {
			...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		},
		'.ss__recommendation-bundle-vertical__wrapper': {
			gap: `${custom.spacing.x2}px`,
			'.ss__recommendation-bundle-vertical__wrapper__selector': {
				'&.ss__recommendation-bundle-vertical__wrapper__selector--seed': {
					'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper .ss__result': {
						'&:has(.ss__overlay-badge__grid-wrapper__slot--right) .ss__overlay-badge .ss__overlay-badge__grid-wrapper .ss__overlay-badge__grid-wrapper__slot--right':
							{
								paddingTop: `${checkboxHeight + custom.spacing.x2}px`,
							},
						'&:has(.ss__overlay-badge__grid-wrapper__slot--left) .ss__overlay-badge .ss__overlay-badge__grid-wrapper .ss__overlay-badge__grid-wrapper__slot--left':
							{
								paddingTop: `${seedBadgeHeight + custom.spacing.x2}px`,
							},
					},
				},
				'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper': {
					margin: 0,
					'&:has(.ss__result--grid)': {
						'.ss__checkbox': {
							top: '5px',
							right: '5px',
						},
					},
					'&:has(.ss__result--list)': {
						'.ss__checkbox': {
							top: '5px',
							right: '5px',
						},
					},
					'ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper__seed-badge, .ss__checkbox': {
						position: 'absolute',
						zIndex: '5px',
					},
					'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper__seed-badge': {
						top: '5px',
						left: '5px',
						backgroundColor: activeColor,
						fontSize: '12px',
						fontWeight: custom.fonts.weight01,
						color: fontColor,
						height: `${seedBadgeHeight}px`,
						lineHeight: `${seedBadgeHeight}px`,
						padding: `0 ${custom.spacing.x2}px`,
					},
					'.ss__result': {
						'&:has(.ss__overlay-badge__grid-wrapper__slot--right) .ss__overlay-badge .ss__overlay-badge__grid-wrapper .ss__overlay-badge__grid-wrapper__slot--right':
							{
								paddingTop: `${checkboxHeight + custom.spacing.x2}px`,
							},
					},
					'.ss__result.ss__result--grid': {
						...custom.styles.resultCompact('grid'),
					},
					'.ss__result.ss__result--list': {
						...custom.styles.resultCompact(),
					},
				},
			},
		},
		'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal': {
			'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal__icon__wrapper': {
				display: 'none',
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__recommendation-bundle-vertical__wrapper .ss__recommendation-bundle-vertical__wrapper__selector .ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper:has(.ss__result--list) .ss__checkbox':
				{
					right: 'auto',
					left: `calc(33.33% - ${custom.spacing.x4}px)`,
				},
		},
	});

	// recommendation bundle vertical styles
	const recommendationBundleVerticalStyles = css([sharedStyles, bundleVerticalStyles]);

	return recommendationBundleVerticalStyles;
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
			ctaButtonText: 'Add Selected',
			ctaButtonSuccessText: 'Added!',
			separatorIcon: false,
			separatorIconSeedOnly: false,
			limit: 8,
		},
		'recommendationBundleVertical checkbox icon': {
			color: custom.colors.primary,
		},
		'recommendationBundleVertical icon.bundle-cart': {
			size: `${custom.sizes.icon16 * 2}px`,
			icon: custom.icons.bag,
			color: custom.colors.secondary,
		},
		'recommendationBundleVertical result': {
			layout: 'list',
		},
	},
	mobile: {
		...recommendationBundleVerticalThemeComponentProps.mobile,
		recommendationBundleVertical: {
			...(recommendationBundleVerticalThemeComponentProps.mobile?.['recommendationBundleVertical'] || {}),
		},
	},
	tablet: {
		...recommendationBundleVerticalThemeComponentProps.tablet,
		recommendationBundleVertical: {
			...(recommendationBundleVerticalThemeComponentProps.tablet?.['recommendationBundleVertical'] || {}),
		},
	},
	desktop: {
		...recommendationBundleVerticalThemeComponentProps.desktop,
		recommendationBundleVertical: {
			...(recommendationBundleVerticalThemeComponentProps.desktop?.['recommendationBundleVertical'] || {}),
		},
	},
};
