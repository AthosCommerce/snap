import { css } from '@emotion/react';
import type { RecommendationBundleProps, RecommendationBundleTemplatesLegalProps } from '../../../../components/Templates/RecommendationBundle';
import { recommendationBundleThemeComponentProps } from '../../../themeComponents/recommendationBundle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationBundleStyleScript = (props: RecommendationBundleProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		margin: `${custom.spacing.x8}px 0`,
		'.ss__recommendation-bundle__title': {
			fontSize: custom.utils.convertPxToEm(22),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
			margin: `0 0 ${custom.spacing.x4}px 0`,
		},
		'.ss__recommendation-bundle__wrapper': {
			flexFlow: `row nowrap`,
			margin: `0 -${custom.spacing.x2}px`,
			'& > *': {
				flex: '0 1 auto',
				minWidth: '1px',
				padding: `0 ${custom.spacing.x2}px`,
				boxSizing: 'border-box',
			},
			'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__cta': {
				width: `20%`,
			},
			'.ss__recommendation-bundle__wrapper__carousel': {
				width: `60%`,
			},
		},
		'.ss__recommendation-result-tracker, .ss__recommendation-bundle__wrapper__selector, .ss__recommendation-bundle__wrapper .ss__recommendation-bundle__wrapper__selector__result-wrapper':
			{
				height: '100%',
				margin: 0,
			},
		'.ss__recommendation-bundle__wrapper__seed-container': {
			'.ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
				top: '5px',
				left: '5px',
				backgroundColor: variables?.colors?.primary,
				fontSize: custom.utils.convertPxToEm(12),
				fontWeight: custom.fonts.weight01,
				lineHeight: `20px`,
				color: custom.colors.white,
				padding: `0 ${custom.spacing.x2}px`,
			},
		},
		'.ss__recommendation-bundle__wrapper__selector': {
			width: 'auto !important',
		},
		'.ss__recommendation-bundle__wrapper__selector__result-wrapper, .ss__carousel .swiper-container > .swiper-wrapper > .swiper-slide': {
			'.ss__result': {
				width: '100%',
				flex: '1 1 0%',
			},
		},
		'.ss__recommendation-bundle__wrapper__selector__result-wrapper': {
			display: 'flex',
			flexFlow: `column wrap`,
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
		},
		'.ss__icon--plus': {
			display: 'none',
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			margin: 'auto 0',
			fill: variables?.colors?.secondary,
			stroke: variables?.colors?.secondary,
		},
		'.ss__recommendation-bundle__wrapper__cta': {
			position: 'relative',
			paddingTop: `${custom.spacing.x4}px`,
			paddingBottom: `${custom.spacing.x4}px`,
			display: 'flex',
			flexFlow: 'column nowrap',
			justifyContent: 'center',
			alignItems: 'center',
			gap: `${custom.spacing.x4}px`,
			'& > *': {
				flex: '0 1 auto',
				minWidth: '1px',
				margin: `0 ${custom.spacing.x2}px 0 ${custom.spacing.x4}px`,
			},
			'.ss__recommendation-bundle__wrapper__cta__subtotal, .ss__recommendation-bundle__wrapper__cta__button': {
				position: 'relative',
				zIndex: 2,
			},
			'.ss__recommendation-bundle__wrapper__cta__subtotal': {
				color: variables?.colors?.text,
				'& > *': {
					lineHeight: 1,
					margin: `0 0 ${custom.spacing.x2}px 0`,
					'&:last-child': {
						marginBottom: 0,
					},
				},
				'.ss__recommendation-bundle__wrapper__cta__subtotal__icon__wrapper': {
					'.ss__icon': {
						fill: variables?.colors?.secondary,
						stroke: variables?.colors?.secondary,
					},
				},
				'.ss__recommendation-bundle__wrapper__cta__subtotal__title': {
					display: 'block',
					fontWeight: custom.fonts.weight02,
				},
				'.ss__recommendation-bundle__wrapper__cta__subtotal__prices': {
					margin: `${custom.spacing.x1}px 0 0 0`,
					label: {
						margin: 0,
						padding: 0,
						'& ~ label': {
							paddingLeft: `${custom.spacing.x1}px`,
						},
					},
					'.ss__recommendation-bundle__wrapper__cta__subtotal__strike': {
						color: lightGray,
						'*': {
							color: 'inherit',
						},
					},
					'.ss__recommendation-bundle__wrapper__cta__subtotal__price': {
						fontSize: custom.utils.convertPxToEm(16),
						fontWeight: custom.fonts.weight01,
						color: variables?.colors?.primary,
						'*': {
							color: 'inherit',
						},
					},
				},
			},
			'&:after': {
				content: '""',
				display: 'block',
				backgroundColor: custom.colors.gray01,
				border: `1px solid ${custom.colors.gray02}`,
				boxSizing: 'border-box',
				position: 'absolute',
				top: 0,
				left: '10px',
				right: 0,
				bottom: 0,
				zIndex: 1,
				margin: 'auto',
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__recommendation-bundle__wrapper': {
				'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__cta': {
					width: `25%`,
				},
				'.ss__recommendation-bundle__wrapper__carousel': {
					width: `50%`,
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__recommendation-bundle__wrapper': {
				flexFlow: 'row wrap',
				width: 'auto',
				maxWidth: 'none',
				margin: `0 -${custom.spacing.x1}px`,
				'& > *': {
					padding: `0 ${custom.spacing.x1}px`,
				},
				'.ss__recommendation-bundle__wrapper__seed-container, .ss__recommendation-bundle__wrapper__carousel': {
					width: `50%`,
				},
			},
			'.ss__recommendation-bundle__wrapper__cta': {
				width: 'auto',
				margin: `${custom.spacing.x4}px 0 0 0`,
				padding: `${custom.spacing.x4}px`,
				'& > *': {
					margin: 0,
				},
				'&:after': {
					left: 0,
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__recommendation-bundle__title': {
				fontSize: custom.utils.convertPxToEm(18),
			},
		},
	});
};

// RecommendationBundle component props come from Template export
export const recommendationBundle: ThemeComponent<'recommendationBundle', RecommendationBundleProps, RecommendationBundleTemplatesLegalProps> = {
	default: {
		...recommendationBundleThemeComponentProps.default,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.default?.['recommendationBundle'] || {}),
			themeStyleScript: recommendationBundleStyleScript,
		},
		'recommendationBundle icon.bundle-cart': {
			icon: custom.icons.bag,
			size: `${custom.sizes.icon16 * 2}px`,
		},
		'recommendationBundle icon.bundle-selector': {
			icon: custom.icons.plus,
			size: `${custom.sizes.icon14}px`,
		},
		'recommendationBundle carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
	mobile: {
		...recommendationBundleThemeComponentProps.mobile,
		'recommendationBundle carousel': {
			spaceBetween: 0,
		},
	},
	tablet: {
		...recommendationBundleThemeComponentProps.tablet,
		'recommendationBundle carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
	desktop: {
		...recommendationBundleThemeComponentProps.desktop,
		'recommendationBundle carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
};
