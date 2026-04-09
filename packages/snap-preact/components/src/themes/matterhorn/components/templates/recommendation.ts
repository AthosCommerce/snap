import { css } from '@emotion/react';
import type { RecommendationProps, RecommendationTemplatesLegalProps } from '../../../../components/Templates/Recommendation';
import { recommendationThemeComponentProps } from '../../../themeComponents/recommendation';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Recommendation component
const recommendationStyleScript = (props: RecommendationProps) => {
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const arrowSizes = {
		default: 32,
		tablet: 28,
		mobile: 24,
	};

	return css({
		margin: `${custom.spacing.x8}px 0`,
		'.ss__recommendation__title': {
			fontSize: custom.utils.convertPxToEm(22),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
			textAlign: 'center',
			margin: `0 0 ${custom.spacing.x4}px 0`,
		},
		'.ss__carousel': {
			padding: `0 ${custom.spacing.x4 + arrowSizes.default}px`,
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__carousel': {
				padding: `0 ${custom.spacing.x4 + arrowSizes.tablet}px`,
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					width: `${arrowSizes.tablet}px`,
					height: `${arrowSizes.tablet}px`,
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			position: 'relative',
			'.ss__recommendation__title': {
				textAlign: 'left',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				paddingRight: `${arrowSizes.mobile * 2 + custom.spacing.x1 + custom.spacing.x4}px`,
			},
			'.ss__carousel': {
				padding: 0,
				position: 'static',
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '4.5px',
					bottom: 'auto',
					left: 'auto',
					width: `${arrowSizes.mobile}px`,
					height: `${arrowSizes.mobile}px`,
				},
				'.ss__carousel__prev-wrapper': {
					right: `${arrowSizes.mobile + custom.spacing.x1}px`,
				},
				'.ss__carousel__next-wrapper': {
					right: 0,
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__recommendation__title': {
				fontSize: custom.utils.convertPxToEm(18),
			},
			'.ss__carousel': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: 0,
				},
			},
		},
	});
};

// Recommendation component props come from Template export
export const recommendation: ThemeComponent<'recommendation', RecommendationProps, RecommendationTemplatesLegalProps> = {
	default: {
		...recommendationThemeComponentProps.default,
		recommendation: {
			...(recommendationThemeComponentProps.default?.['recommendation'] || {}),
			themeStyleScript: recommendationStyleScript,
			spaceBetween: custom.spacing.x4,
		},
	},
	mobile: {
		...recommendationThemeComponentProps.mobile,
		recommendation: {
			...(recommendationThemeComponentProps.mobile?.['recommendation'] || {}),
			spaceBetween: custom.spacing.x2,
		},
		'recommendation icon.prev': {
			size: `${custom.sizes.icon08}px`,
		},
		'recommendation icon.next': {
			size: `${custom.sizes.icon08}px`,
		},
	},
	tablet: {
		...recommendationThemeComponentProps.tablet,
		recommendation: {
			...(recommendationThemeComponentProps.tablet?.['recommendation'] || {}),
			spaceBetween: custom.spacing.x4,
		},
		'recommendation icon.prev': {
			size: `${custom.sizes.icon10}px`,
		},
		'recommendation icon.next': {
			size: `${custom.sizes.icon10}px`,
		},
	},
	desktop: {
		...recommendationThemeComponentProps.desktop,
		recommendation: {
			...(recommendationThemeComponentProps.desktop?.['recommendation'] || {}),
			spaceBetween: custom.spacing.x4,
		},
	},
};
