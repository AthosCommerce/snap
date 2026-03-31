import { css } from '@emotion/react';
import type { RecommendationProps, RecommendationTemplatesLegalProps } from '../../../../components/Templates/Recommendation';
import { recommendationThemeComponentProps } from '../../../themeComponents/recommendation';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const arrowSizes = {
	default: 24,
	mobile: 28,
	tablet: 32,
};
const carouselOptions = {
	spacing: custom.spacing.x2,
	button: 32, // size of previous next buttons
	pagination: 12, // size of pagination bullets
	scrollbar: 6, // size of scrollbar
};

// CSS in JS style script for the Recommendation component
const recommendationStyleScript = (props: RecommendationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// spacing and position variables for features
	let spacing = 0;
	if (props?.pagination && props?.scrollbar) {
		spacing = carouselOptions.spacing * 2 + carouselOptions.pagination + carouselOptions.scrollbar;
	} else if (props?.pagination && !props?.scrollbar) {
		spacing = carouselOptions.spacing + carouselOptions.pagination;
	} else if (!props?.pagination && props?.scrollbar) {
		spacing = carouselOptions.spacing + carouselOptions.scrollbar;
	}

	// recommendation styles
	const recommendationStyles = css({
		margin: `${custom.spacing.x8}px 0`,
		position: 'relative',
		...custom.styles.boxSizing('recommendation', props?.treePath, props?.name),
		'.ss__recommendation__title, .ss__recommendation__description': {
			margin: `0 0 ${custom.spacing.x4}px 0`,
		},
		'.ss__recommendation__title': {
			paddingRight: `${arrowSizes.default * 2 + custom.spacing.x1 + custom.spacing.x2}px`,
			...custom.styles.headerText(variables?.colors?.secondary, '18px'),
			...custom.styles.textOverflow(),
		},
		'.ss__recommendation__description': {
			fontSize: '14px',
			fontWeight: 'normal',
			color: variables?.colors?.text,
		},
		'.ss__carousel': {
			position: 'static',
			'& >': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '1px',
					bottom: 'auto',
					left: 'auto',
					width: `${arrowSizes.default}px`,
					height: `${arrowSizes.default}px`,
				},
				'.ss__carousel__prev-wrapper': {
					right: `${arrowSizes.default + custom.spacing.x1}px`,
				},
				'.ss__carousel__next-wrapper': {
					right: 0,
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__recommendation__title': {
				fontSize: '22px',
			},
			'.ss__carousel': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '4.5px',
				},
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__carousel': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '2.5px',
					width: `${arrowSizes.mobile}px`,
					height: `${arrowSizes.mobile}px`,
				},
				'.ss__carousel__prev-wrapper': {
					right: `${arrowSizes.mobile + custom.spacing.x1}px`,
				},
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'.ss__recommendation__title, .ss__recommendation__description': {
				textAlign: 'center',
			},
			'.ss__carousel': {
				position: 'relative',
				padding: `0 ${custom.spacing.x4 + arrowSizes.tablet}px`,
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: 0,
					bottom: `calc(10.15rem + ${spacing - custom.spacing.x4}px)`,
					width: `${arrowSizes.tablet}px`,
					height: `${arrowSizes.tablet}px`,
				},
				'.ss__carousel__prev-wrapper': {
					right: `auto`,
					left: 0,
				},
			},
		},
	});

	return recommendationStyles;
};

// Recommendation component props come from Template export
export const recommendation: ThemeComponent<'recommendation', RecommendationProps, RecommendationTemplatesLegalProps> = {
	default: {
		...recommendationThemeComponentProps.default,
		recommendation: {
			...(recommendationThemeComponentProps.default?.['recommendation'] || {}),
			themeStyleScript: recommendationStyleScript,
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x4,
		},
		'recommendation carousel icon.prev': {
			size: `${custom.sizes.icon12}px`,
		},
		'recommendation carousel icon.next': {
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...recommendationThemeComponentProps.mobile,
		recommendation: {
			...(recommendationThemeComponentProps.mobile?.['recommendation'] || {}),
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x2,
		},
		'recommendation carousel icon.prev': {
			size: `${custom.sizes.icon08}px`,
		},
		'recommendation carousel icon.next': {
			size: `${custom.sizes.icon08}px`,
		},
	},
	tablet: {
		...recommendationThemeComponentProps.tablet,
		recommendation: {
			...(recommendationThemeComponentProps.tablet?.['recommendation'] || {}),
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x4,
		},
		'recommendation carousel icon.prev': {
			size: `${custom.sizes.icon10}px`,
		},
		'recommendation carousel icon.next': {
			size: `${custom.sizes.icon10}px`,
		},
	},
	desktop: {
		...recommendationThemeComponentProps.desktop,
		recommendation: {
			...(recommendationThemeComponentProps.desktop?.['recommendation'] || {}),
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
};
