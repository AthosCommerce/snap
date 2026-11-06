import { css } from '@emotion/react';
import type { RecommendationBundleProps, RecommendationBundleTemplatesLegalProps } from '../../../../components/Templates/RecommendationBundle';
import { recommendationBundleThemeComponentProps } from '../../../themeComponents/recommendationBundle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationBundleStyleScript = ({ theme }: RecommendationBundleProps) => {
	const variables = theme?.variables;
	const activeColors = custom.utils.activeColors(variables?.colors?.secondary || custom.colors.black);

	return css({
		margin: '20px 0',

		'.ss__recommendation-bundle__wrapper__selector': {
			'& .ss__recommendation-bundle__wrapper__selector__result-wrapper__seed-badge': {
				backgroundColor: activeColors[0],
				color: activeColors[1],
				padding: '0px 5px',
				borderRadius: '3px',
			},
		},

		// cards fill their slide (the carousel equalizes slides to the tallest) with the variant selections
		// pinned to the bottom, so every card and the CTA share one bottom edge
		'.ss__recommendation-bundle__wrapper': {
			'.ss__result-tracker, .ss__recommendation-bundle__wrapper__selector, .ss__recommendation-bundle__wrapper__selector__result-wrapper, .ss__result':
				{
					height: '100%',
				},
			'.ss__result': {
				display: 'flex',
				flexDirection: 'column',
				// the component lets the image grow - keep the slack in the details
				'.ss__result__image-wrapper': {
					flex: '0 0 auto',
				},
				'.ss__result__details': {
					display: 'flex',
					flexDirection: 'column',
					flex: '1 1 auto',
					'.ss__result__details__variant-selection': {
						marginTop: 'auto',
					},
				},
			},
		},

		// the CTA is a full-height card with its content centered on the carousel
		'.ss__recommendation-bundle__wrapper__cta': {
			alignSelf: 'stretch',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '15px',
			boxSizing: 'border-box',
			padding: '20px',
			backgroundColor: custom.colors.gray01,
			borderRadius: '30px',
			// a gutter from the carousel's next arrow without changing the component's column width
			borderLeft: '15px solid transparent',
			backgroundClip: 'padding-box',

			'.ss__recommendation-bundle__wrapper__cta__subtotal': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '5px',

				'.ss__recommendation-bundle__wrapper__cta__subtotal__title': {
					color: variables?.colors?.secondary,
				},
				'.ss__recommendation-bundle__wrapper__cta__subtotal__price': {
					fontSize: '18px',
					fontWeight: 'bold',
				},
				'.ss__recommendation-bundle__wrapper__cta__subtotal__strike': {
					color: custom.colors.gray03,
				},
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
	},
	mobile: recommendationBundleThemeComponentProps.mobile,
	desktop: recommendationBundleThemeComponentProps.desktop,
	tablet: recommendationBundleThemeComponentProps.tablet,
};
