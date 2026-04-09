import { css } from '@emotion/react';
import type {
	RecommendationBundleListProps,
	RecommendationBundleListTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleList';
import { recommendationBundleListThemeComponentProps } from '../../../themeComponents/recommendationBundleList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundleEasyAdd component
const recommendationBundleListStyleScript = (props: RecommendationBundleListProps) => {
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
		'.ss__recommendation-bundle-list__title': {
			fontSize: custom.utils.convertPxToEm(18),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__recommendation-bundle-list__wrapper': {
			flexFlow: 'row wrap',
			margin: `0 -${custom.spacing.x1}px`,
			'&, & > div': {
				boxSizing: 'border-box',
			},
			'& > div': {
				width: '50%',
				minWidth: '1px',
				flex: '0 1 auto',
				padding: `0 ${custom.spacing.x1}px`,
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
			'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
				margin: 0,
				gap: `${custom.spacing.x2}px`,
				'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox, .ss__result': {
					minWidth: '1px',
				},
				'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': {
					flex: '0 1 auto',
				},
				'.ss__result': {
					flex: '1 1 0%',
					'.ss__result__image-wrapper': {
						display: 'none',
					},
					'.ss__result__details': {
						gap: 0,
					},
				},
			},
		},
		'.ss__recommendation-bundle-list__wrapper__cta': {
			'.ss__recommendation-bundle-list__wrapper__cta__inner': {
				'& > *': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
					lineHeight: 1,
				},
				'.ss__recommendation-bundle-list__wrapper__cta__inner__images': {
					flexFlow: 'row nowrap',
					gap: `${custom.spacing.x2 + custom.sizes.icon12}px`,
					'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': {
						flex: '1 1 0%',
						minWidth: '1px',
						padding: 0,
						'.ss__icon': {
							top: 0,
							bottom: 0,
							right: `-${custom.spacing.x2 / 2 + custom.sizes.icon12}px`,
							margin: 'auto 0',
							fill: variables?.colors?.secondary,
							stroke: variables?.colors?.secondary,
						},
					},
				},
				'.ss__recommendation-bundle-list__wrapper__cta__subtotal': {
					padding: `${custom.spacing.x4}px`,
					backgroundColor: custom.colors.gray01,
					border: `1px solid ${custom.colors.gray02}`,
					'& > *': {
						lineHeight: 1,
						margin: `0 0 ${custom.spacing.x2}px 0`,
						'&:last-child': {
							marginBottom: 0,
						},
					},
					'.ss__recommendation-bundle-list__wrapper__cta__subtotal__icon__wrapper': {
						'.ss__icon': {
							fill: variables?.colors?.secondary,
							stroke: variables?.colors?.secondary,
						},
					},
					'.ss__recommendation-bundle-list__wrapper__cta__subtotal__title': {
						display: 'block',
						fontWeight: custom.fonts.weight02,
					},
					'.ss__recommendation-bundle-list__wrapper__cta__subtotal__prices': {
						margin: `${custom.spacing.x1}px 0 0 0`,
						label: {
							margin: 0,
							padding: 0,
							'& ~ label': {
								paddingLeft: `${custom.spacing.x1}px`,
							},
						},
						'.ss__recommendation-bundle-list__wrapper__cta__subtotal__strike': {
							color: lightGray,
							'*': {
								color: 'inherit',
							},
						},
						'.ss__recommendation-bundle-list__wrapper__cta__subtotal__price': {
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
			'.ss__recommendation-bundle-list__cta__button__wrapper': {
				margin: `${custom.spacing.x4}px 0`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__recommendation-bundle-list__wrapper': {
				'& > div': {
					width: 'auto',
					flex: '1 1 100%',
				},
			},
		},
	});
};

// RecommendationBundleList component props come from Template export
export const recommendationBundleList: ThemeComponent<
	'recommendationBundleList',
	RecommendationBundleListProps,
	RecommendationBundleListTemplatesLegalProps
> = {
	default: {
		...recommendationBundleListThemeComponentProps.default,
		recommendationBundleList: {
			...(recommendationBundleListThemeComponentProps.default?.['recommendationBundleList'] || {}),
			themeStyleScript: recommendationBundleListStyleScript,
			separatorIconSeedOnly: false,
		},
		'recommendationBundleList icon.bundle-cart-separator': {
			icon: custom.icons.plus,
			size: `${custom.sizes.icon12}px`,
		},
		'recommendationBundleList icon.bundle-cart': {
			icon: custom.icons.bag,
			size: `${custom.sizes.icon16 * 2}px`,
		},
		'recommendationBundleList result': {
			hideImage: true,
			hideBadge: true,
		},
	},
	mobile: {
		...recommendationBundleListThemeComponentProps.mobile,
	},
	tablet: {
		...recommendationBundleListThemeComponentProps.tablet,
	},
	desktop: {
		...recommendationBundleListThemeComponentProps.desktop,
	},
};
