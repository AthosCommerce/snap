import { css } from '@emotion/react';
import type { RecommendationEmailProps, RecommendationEmailTemplatesLegalProps } from '../../../../components/Templates/RecommendationEmail';
import { recommendationEmailThemeComponentProps } from '../../../themeComponents/recommendationEmail';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationEmail component
const recommendationEmailStyleScript = (props: RecommendationEmailProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	const recommendationEmailStyles = css({
		...custom.styles.boxSizing('recommendationEmail', props?.treePath, props?.name),
		padding: `0 0 ${custom.spacing.x6}px 0`,
		'&:has(.ss__rating)': {
			'.ss__recommendation-email__result-wrapper': {
				height: '465px',
			},
		},
		'&:has(.ss__callout-badge)': {
			'.ss__recommendation-email__result-wrapper': {
				height: '475px',
			},
		},
		'&:has(.ss__callout-badge):has(.ss__rating)': {
			'.ss__recommendation-email__result-wrapper': {
				height: '500px',
			},
		},
		'.ss__recommendation-email__result-wrapper': {
			width: '400px !important',
			height: '440px',
			margin: `0 0 ${custom.spacing.x6}px 0`,
			padding: `0 ${custom.spacing.x2}px`,
			overflow: 'hidden',
		},
		'.ss__result': {
			'&, &*': {
				textAlign: 'center',
			},
			'.ss__result__image-wrapper': {
				overflow: 'hidden',
			},
			'.ss__result__details': {
				'.ss__result__details__title a': {
					display: 'block',
					height: '20px',
					lineHeight: '20px',
					...custom.styles.textOverflow(),
				},
			},
		},
	});

	return recommendationEmailStyles;
};

// RecommendationEmail component props come from Template export
export const recommendationEmail: ThemeComponent<'recommendationEmail', RecommendationEmailProps, RecommendationEmailTemplatesLegalProps> = {
	default: {
		...recommendationEmailThemeComponentProps.default,
		recommendationEmail: {
			...(recommendationEmailThemeComponentProps.default?.['recommendationEmail'] || {}),
			themeStyleScript: recommendationEmailStyleScript,
		},
		'recommendationEmail result image': {
			lazy: false,
		},
	},
	mobile: {
		...recommendationEmailThemeComponentProps.mobile,
	},
	tablet: {
		...recommendationEmailThemeComponentProps.tablet,
	},
	desktop: {
		...recommendationEmailThemeComponentProps.desktop,
	},
};
