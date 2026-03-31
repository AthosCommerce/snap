import { css } from '@emotion/react';
import type {
	RecommendationBundleListProps,
	RecommendationBundleListTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleList';
import { recommendationBundleListThemeComponentProps } from '../../../themeComponents/recommendationBundleList';
import { ThemeComponent } from '../../../../providers';
import { recommendationCTAStyleScript } from './recommendationCTA';
import { custom } from '../../custom';

// static variables
const plusIconSize = custom.sizes.icon12;

// CSS in JS style script for the RecommendationBundleList component
const recommendationBundleListStyleScript = (props: RecommendationBundleListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	// bundle list shared styles
	const sharedStyles = css({
		'.ss__recommendation-bundle-list__wrapper__cta': {
			...recommendationCTAStyleScript(props, 'bundle-list'),
		},
	});

	// bundle list styles
	const bundleListStyles = css({
		margin: `${custom.spacing.x4}px 0`,
		...custom.styles.boxSizing('recommendationBundleList', props?.treePath, props?.name),
		'.ss__recommendation-profile-tracker': {
			'& > *': {
				margin: `${custom.spacing.x2}px 0 0 0`,
				'&:first-child': {
					marginTop: 0,
				},
			},
		},
		'.ss__recommendation-bundle-list__title': {
			...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		},
		'.ss__recommendation-bundle-list__wrapper': {
			flexFlow: 'row wrap',
			gap: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
			'& > *': {
				minWidth: '1px',
				width: 'auto',
				flex: '1 1 100%',
			},
			'.ss__recommendation-bundle-list__wrapper__selector': {
				'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
					alignItems: 'flex-start',
					gap: `${custom.spacing.x2}px`,
					margin: 0,
					'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox, .ss__result': {
						flex: '0 1 auto',
						minWidth: '1px',
					},
					'.ss__result': {
						flex: '1 1 0%',
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
		'.ss__recommendation-bundle-list__wrapper__cta': {
			'.ss__recommendation-bundle-list__wrapper__cta__inner': {
				'.ss__recommendation-bundle-list__wrapper__cta__inner__images': {
					position: 'relative',
					flexFlow: 'row nowrap',
					gap: `${custom.spacing.x4 + plusIconSize}px`,
					margin: `-${custom.spacing.x2}px -${custom.spacing.x2}px 0 -${custom.spacing.x2}px`,
					padding: `0 0 ${custom.spacing.x2}px 0`,
					backgroundColor: custom.colors.white,
					borderBottom: `1px solid ${custom.colors.gray02}`,
					'&:after': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: '-1px',
						bottom: 0,
						left: '-1px',
						right: '-1px',
						zIndex: 1,
						margin: 'auto',
						border: `1px solid ${custom.colors.white}`,
					},
					'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': {
						position: 'relative',
						zIndex: 2,
						flex: '1 1 0%',
						minWidth: '1px',
						padding: 0,
						'.ss__icon': {
							top: 0,
							bottom: 0,
							right: `-${custom.spacing.x2 + plusIconSize}px`,
							margin: 'auto 0',
						},
					},
				},
				'.ss__recommendation-bundle-list__wrapper__cta__subtotal': {
					marginTop: `${custom.spacing.x2}px`,
					'.ss__recommendation-bundle-list__wrapper__cta__subtotal__icon__wrapper': {
						display: 'none',
					},
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__recommendation-bundle-list__wrapper > *': {
				width: `calc((100% - ${custom.spacing.x4}px) / 2)`,
				flex: '0 1 auto',
			},
		},
	});

	// recommendation bundle list styles
	const recommendationBundleListStyles = css([sharedStyles, bundleListStyles]);

	return recommendationBundleListStyles;
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
			ctaButtonText: 'Add Selected',
			ctaButtonSuccessText: 'Added!',
			limit: 6,
		},
		'recommendationBundleList checkbox': {
			size: `${custom.sizes.icon16 + 2}px`,
		},
		'recommendationBundleList checkbox icon': {
			color: custom.colors.primary,
			size: `${custom.sizes.icon10}px`,
		},
		'recommendationBundleList icon.bundle-cart-separator': {
			size: `${plusIconSize}px`,
			icon: custom.icons.plus,
			color: custom.colors.secondary,
		},
		'recommendationBundleList icon.bundle-cart': {
			size: `${custom.sizes.icon16 * 2}px`,
			icon: custom.icons.bag,
			color: custom.colors.secondary,
		},
	},
	mobile: {
		...recommendationBundleListThemeComponentProps.mobile,
		recommendationBundleList: {
			...(recommendationBundleListThemeComponentProps.mobile?.['recommendationBundleList'] || {}),
		},
	},
	tablet: {
		...recommendationBundleListThemeComponentProps.tablet,
		recommendationBundleList: {
			...(recommendationBundleListThemeComponentProps.tablet?.['recommendationBundleList'] || {}),
		},
	},
	desktop: {
		...recommendationBundleListThemeComponentProps.desktop,
		recommendationBundleList: {
			...(recommendationBundleListThemeComponentProps.desktop?.['recommendationBundleList'] || {}),
		},
	},
};
