import { css } from '@emotion/react';
import type { RecommendationBundleProps, RecommendationBundleTemplatesLegalProps } from '../../../../components/Templates/RecommendationBundle';
import { recommendationBundleThemeComponentProps } from '../../../themeComponents/recommendationBundle';
import { ThemeComponent } from '../../../../providers';
import { recommendationCTAStyleScript } from './recommendationCTA';
import { custom } from '../../custom';

// static variables
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];
const seedBadgeHeight = 22;
const checkboxHeight = 16;

// CSS in JS style script for the RecommendationBundle component
const recommendationBundleStyleScript = (props: RecommendationBundleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	// bundle shared styles
	const sharedStyles = css({
		'.ss__recommendation-bundle__wrapper__cta': {
			...recommendationCTAStyleScript(props, 'bundle', `${custom.spacing.x4}px`),
		},
	});

	// bundle styles
	const bundleStyles = css({
		margin: `${custom.spacing.x8}px 0`,
		...custom.styles.boxSizing('recommendationBundle', props?.treePath, props?.name),
		'.ss__recommendation-bundle__title, .ss__recommendation-bundle__description': {
			margin: `0 0 ${custom.spacing.x4}px 0`,
		},
		'.ss__recommendation-bundle__title': {
			...custom.styles.headerText(variables?.colors?.secondary, '18px'),
		},
		'.ss__recommendation-bundle__description': {
			fontSize: '14px',
			fontWeight: 'normal',
			color: variables?.colors?.text,
		},
		'.ss__recommendation-bundle__wrapper': {
			flexFlow: 'row wrap',
			width: 'auto',
			maxWidth: 'none',
			margin: `0 -${custom.spacing.x1}px`,
			'& > *': {
				flex: '0 1 auto',
				width: 'auto',
				minWidth: '1px',
			},
			'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__carousel': {
				flex: '1 1 0%',
				padding: `0 ${custom.spacing.x1}px`,
			},
			'.ss__recommendation-bundle__wrapper__cta': {
				marginTop: 0,
				flex: '1 1 100%',
			},
			'.ss__recommendation-bundle__wrapper__carousel': {
				'.ss__recommendation__carousel >': {
					'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
						bottom: `calc(10.15rem - ${custom.spacing.x4}px)`,
					},
				},
			},
			'.ss__result-tracker, .ss__recommendation-bundle__wrapper__selector, .ss__recommendation-bundle__wrapper__selector .ss__recommendation-bundle__wrapper__selector__result-wrapper, .ss__result':
				{
					height: '100%',
					margin: 0,
				},
			'.ss__recommendation-bundle__wrapper__selector': {
				'&.ss__recommendation-bundle__wrapper__selector--seed': {
					width: 'auto !important',
					'.ss__recommendation-bundle__wrapper__selector__result-wrapper .ss__result': {
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
				'.ss__recommendation-bundle__wrapper__selector__result-wrapper': {
					'ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge, .ss__checkbox': {
						position: 'absolute',
						zIndex: '5px',
					},
					'.ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
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
					'.ss__checkbox': {
						top: '5px',
						right: '5px',
					},
					'.ss__result': {
						'&:has(.ss__overlay-badge__grid-wrapper__slot--right) .ss__overlay-badge .ss__overlay-badge__grid-wrapper .ss__overlay-badge__grid-wrapper__slot--right':
							{
								paddingTop: `${checkboxHeight + custom.spacing.x2}px`,
							},
					},
				},
			},
		},
		'.ss__recommendation-bundle__wrapper__cta': {
			margin: `${custom.spacing.x4}px 0 0 0`,
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__recommendation-bundle__title': {
				fontSize: '22px',
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__recommendation-bundle__wrapper': {
				flexFlow: `row nowrap`,
				margin: props?.ctaInline ? 0 : `0 -${custom.spacing.x2}px`,
				'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__carousel': {
					padding: props?.ctaInline ? `0 ${custom.spacing.x4}px 0 0` : `0 ${custom.spacing.x2}px`,
				},
				'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__cta': {
					flex: '0 1 auto',
					width: props?.ctaInline ? `25%` : `33.33%`,
				},
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'.ss__recommendation-bundle__title, .ss__recommendation-bundle__description': {
				textAlign: 'center',
			},
			'.ss__recommendation-bundle__wrapper': {
				'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__cta': {
					width: props?.ctaInline ? `20%` : `25%`,
				},
			},
		},
	});

	// recommendation bundle styles
	const recommendationBundleStyles = css([sharedStyles, bundleStyles]);

	return recommendationBundleStyles;
};

// RecommendationBundle component props come from Template export
export const recommendationBundle: ThemeComponent<'recommendationBundle', RecommendationBundleProps, RecommendationBundleTemplatesLegalProps> = {
	default: {
		...recommendationBundleThemeComponentProps.default,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.default?.['recommendationBundle'] || {}),
			themeStyleScript: recommendationBundleStyleScript,
			ctaButtonText: 'Add Selected',
			ctaButtonSuccessText: 'Added!',
			separatorIcon: false,
			separatorIconSeedOnly: false,
		},
		'recommendationBundle checkbox icon': {
			color: custom.colors.primary,
		},
		'recommendationBundle icon.bundle-cart': {
			size: `${custom.sizes.icon16 * 2}px`,
			icon: custom.icons.bag,
			color: custom.colors.secondary,
		},
		'recommendationBundle carousel': {
			spaceBetween: custom.spacing.x4,
		},
		'recommendationBundle carousel icon.prev': {
			size: `${custom.sizes.icon12}px`,
		},
		'recommendationBundle carousel icon.next': {
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...recommendationBundleThemeComponentProps.mobile,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.mobile?.['recommendationBundle'] || {}),
		},
		'recommendationBundle carousel': {
			spaceBetween: 0,
		},
	},
	tablet: {
		...recommendationBundleThemeComponentProps.tablet,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.tablet?.['recommendationBundle'] || {}),
		},
		'recommendationBundle carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
	desktop: {
		...recommendationBundleThemeComponentProps.desktop,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.desktop?.['recommendationBundle'] || {}),
		},
		'recommendationBundle carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
};
