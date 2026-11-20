import { css } from '@emotion/react';
import type {
	RecommendationBundleListProps,
	RecommendationBundleListTemplatesLegalProps,
} from '../../../../components/Templates/RecommendationBundleList';
import { recommendationBundleListThemeComponentProps } from '../../../themeComponents/recommendationBundleList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

const prefix = '.ss__recommendation-bundle-list';

// CSS in JS style script for the RecommendationBundleList component
const recommendationBundleListStyleScript = ({ theme }: RecommendationBundleListProps) => {
	const variables = theme?.variables;

	return css({
		margin: '20px 0',
		// the tracker renders the list after the cta - space them with a gap
		'.ss__recommendation-profile-tracker': {
			display: 'flex',
			flexDirection: 'column',
			gap: '20px',
			'& > *': {
				margin: 0,
			},
		},
		[`${prefix}__title`]: {
			color: variables?.colors?.secondary,
		},

		// the selected products and the subtotal are one card, its images capped so they stay a preview
		[`${prefix}__wrapper__cta`]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '15px',
			boxSizing: 'border-box',
			padding: '20px',
			backgroundColor: custom.colors.gray01,
			borderRadius: '30px',
			[`${prefix}__wrapper__cta__inner`]: {
				width: '100%',
			},
			[`${prefix}__wrapper__cta__inner__images`]: {
				display: 'flex',
				justifyContent: 'center',
				gap: '30px',
				maxWidth: '560px',
				margin: '0 auto 15px',
				[`${prefix}__wrapper__cta__inner__image-wrapper`]: {
					position: 'relative',
					flex: '1 1 0%',
					minWidth: 0,
					maxWidth: '200px',
					padding: 0,
					'.ss__icon': {
						...custom.styles.indicator(variables?.colors?.accent),
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: '-21px',
						margin: 'auto 0',
					},
				},
			},
			[`${prefix}__wrapper__cta__subtotal`]: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '5px',
				[`${prefix}__wrapper__cta__subtotal__title`]: {
					color: variables?.colors?.secondary,
				},
				[`${prefix}__wrapper__cta__subtotal__price`]: {
					fontSize: '18px',
					fontWeight: 'bold',
				},
				[`${prefix}__wrapper__cta__subtotal__strike`]: {
					color: custom.colors.gray03,
				},
				[`${prefix}__wrapper__cta__subtotal__icon__wrapper`]: {
					display: 'none',
				},
			},
		},

		// the list: checkbox beside the title, two columns once there is room
		[`${prefix}__wrapper`]: {
			display: 'grid',
			gridTemplateColumns: '1fr',
			gap: '20px 30px',
			[`@media (min-width: ${variables?.breakpoints?.mobile}px)`]: {
				gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
			},
			[`${prefix}__wrapper__selector__result-wrapper`]: {
				display: 'flex',
				alignItems: 'flex-start',
				gap: '10px',
				margin: 0,
				[`${prefix}__wrapper__selector__result-wrapper__checkbox`]: {
					flex: '0 0 auto',
					position: 'static',
				},
				'.ss__result': {
					flex: '1 1 0%',
					minWidth: 0,
					textAlign: 'left',
					'.ss__result__details': {
						padding: 0,
						textAlign: 'left',
					},
					'.ss__slideshow__track, .ss__grid .ss__grid__options': {
						justifyContent: 'flex-start',
					},
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
		},
	},
	mobile: recommendationBundleListThemeComponentProps.mobile,
	desktop: recommendationBundleListThemeComponentProps.desktop,
	tablet: recommendationBundleListThemeComponentProps.tablet,
};
