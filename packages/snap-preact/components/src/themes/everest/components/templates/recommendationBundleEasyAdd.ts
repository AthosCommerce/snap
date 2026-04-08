import { css } from '@emotion/react';
import type {
	RecommendationBundleEasyAddProps,
	RecommendationBundleEasyAddTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleEasyAdd';
import { recommendationBundleEasyAddThemeComponentProps } from '../../../themeComponents/recommendationBundleEasyAdd';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundleEasyAdd component
const recommendationBundleEasyAddStyleScript = (props: RecommendationBundleEasyAddProps) => {
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
		'.ss__recommendation-bundle-easy-add__title': {
			fontSize: custom.utils.convertPxToEm(18),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__recommendation-bundle-easy-add__wrapper': {
			flexFlow: 'row nowrap',
			gap: `${custom.spacing.x4}px`,
			'& > div': {
				width: '50%',
				minWidth: '1px',
				flex: '0 1 auto',
				boxSizing: 'border-box',
			},
			'.ss__recommendation-bundle-easy-add__wrapper__selector__result-wrapper, .ss__recommendation-bundle-easy-add__wrapper__cta': {
				margin: 0,
			},
		},
		'.ss__recommendation-bundle-easy-add__wrapper__cta': {
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
			'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal': {
				color: variables?.colors?.text,
				'& > *': {
					lineHeight: 1,
					margin: `0 0 ${custom.spacing.x2}px 0`,
					'&:last-child': {
						marginBottom: 0,
					},
				},
				'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__icon__wrapper': {
					'.ss__icon': {
						fill: variables?.colors?.secondary,
						stroke: variables?.colors?.secondary,
					},
				},
				'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__title': {
					display: 'block',
					fontWeight: custom.fonts.weight02,
				},
				'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__prices': {
					label: {
						margin: 0,
						padding: 0,
						'& ~ label': {
							paddingLeft: `${custom.spacing.x1}px`,
						},
					},
					'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__strike': {
						color: lightGray,
						'*': {
							color: 'inherit',
						},
					},
					'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__price': {
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
			'.ss__recommendation-bundle-easy-add__wrapper': {
				flexFlow: 'row wrap',
				'& > div': {
					width: 'auto',
					flex: '1 1 100%',
				},
			},
		},
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
			ctaInline: true,
		},
		'recommendationBundleEasyAdd icon.bundle-cart': {
			icon: custom.icons.bag,
			size: `${custom.sizes.icon16 * 2}px`,
		},
	},
	mobile: {
		...recommendationBundleEasyAddThemeComponentProps.mobile,
	},
	tablet: {
		...recommendationBundleEasyAddThemeComponentProps.tablet,
	},
	desktop: {
		...recommendationBundleEasyAddThemeComponentProps.desktop,
	},
};
