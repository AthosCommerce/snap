import { css } from '@emotion/react';
import type {
	RecommendationBundleVerticalProps,
	RecommendationBundleVerticalTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleVertical';
import { recommendationBundleVerticalThemeComponentProps } from '../../../themeComponents/recommendationBundleVertical';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundleVertical component
const recommendationBundleVerticalStyleScript = (props: RecommendationBundleVerticalProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		margin: `${custom.spacing.x4}px 0`,
		'.ss__recommendation-profile-tracker': {
			'& > *': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
		'.ss__recommendation-bundle-vertical__title': {
			fontSize: custom.utils.convertPxToEm(18),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__recommendation-bundle-vertical__wrapper': {
			gap: `${custom.spacing.x4}px`,
			'& > div': {
				minWidth: '1px',
				flex: '1 1 100%',
			},
			'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper': {
				margin: 0,
				'&, .ss__result': {
					position: 'relative',
				},
				'&:has(.ss__overlay-badge)': {
					'.ss__result': {
						'.ss__overlay-badge .ss__overlay-badge__grid-wrapper': {
							top: '25px',
						},
					},
				},
				'.ss__checkbox': {
					top: '5px',
					right: '5px',
				},
				'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper__seed-badge': {
					top: '5px',
					left: '5px',
					backgroundColor: variables?.colors?.primary,
					fontSize: custom.utils.convertPxToEm(14),
					fontWeight: custom.fonts.weight01,
					lineHeight: `24px`,
					color: custom.colors.white,
					padding: `0 ${custom.spacing.x2}px`,
				},
			},
		},
		'.ss__recommendation-bundle-vertical__wrapper__cta': {
			padding: `${custom.spacing.x4}px`,
			width: 'auto',
			display: 'flex',
			flexFlow: 'column nowrap',
			justifyContent: 'center',
			alignItems: 'center',
			gap: `${custom.spacing.x4}px`,
			backgroundColor: custom.colors.gray01,
			border: `1px solid ${custom.colors.gray02}`,
			'& > *': {
				flex: '0 1 auto',
				minWidth: '1px',
			},
			'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal': {
				color: variables?.colors?.text,
				'& > *': {
					lineHeight: 1,
					margin: `0 0 ${custom.spacing.x2}px 0`,
					'&:last-child': {
						marginBottom: 0,
					},
				},
				'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal__icon__wrapper': {
					'.ss__icon': {
						fill: variables?.colors?.secondary,
						stroke: variables?.colors?.secondary,
					},
				},
				'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal__title': {
					display: 'block',
					fontWeight: custom.fonts.weight02,
				},
				'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal__prices': {
					label: {
						margin: 0,
						padding: 0,
						'& ~ label': {
							paddingLeft: `${custom.spacing.x1}px`,
						},
					},
					'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal__strike': {
						color: lightGray,
						'*': {
							color: 'inherit',
						},
					},
					'.ss__recommendation-bundle-vertical__wrapper__cta__subtotal__price': {
						fontSize: custom.utils.convertPxToEm(16),
						fontWeight: custom.fonts.weight01,
						color: variables?.colors?.primary,
						'*': {
							color: 'inherit',
						},
					},
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__recommendation-bundle-vertical__wrapper': {
				'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper': {
					'.ss__recommendation-bundle-vertical__wrapper__selector__result-wrapper__seed-badge': {
						fontSize: custom.utils.convertPxToEm(12),
						lineHeight: `20px`,
					},
				},
			},
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
		'recommendationBundleVertical icon.bundle-cart': {
			icon: custom.icons.bag,
			size: `${custom.sizes.icon16 * 2}px`,
		},
		'recommendationBundleVertical icon.bundle-selector': {
			icon: custom.icons.plus,
			size: `${custom.sizes.icon14}px`,
		},
	},
	mobile: {
		...recommendationBundleVerticalThemeComponentProps.mobile,
	},
	tablet: {
		...recommendationBundleVerticalThemeComponentProps.tablet,
	},
	desktop: {
		...recommendationBundleVerticalThemeComponentProps.desktop,
	},
};
