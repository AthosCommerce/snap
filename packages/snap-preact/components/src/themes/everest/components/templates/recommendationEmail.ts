import { css } from '@emotion/react';
import type { RecommendationEmailProps, RecommendationEmailTemplatesLegalProps } from '../../../../components/Templates/RecommendationEmail';
import { recommendationEmailThemeComponentProps } from '../../../themeComponents/recommendationEmail';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationEmail component
const recommendationEmailStyleScript = (props: RecommendationEmailProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		width: '400px !important',
		height: '680px',
		margin: `0 0 ${custom.spacing.x6}px 0`,
		padding: `0 ${custom.spacing.x2}px`,
		overflow: 'hidden',
		'.ss__result': {
			fontSize: '16px',
			'.ss__result__details .ss__result__details__title a': {
				display: 'block',
				height: '26px',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},
		},
	});
};

// RecommendationEmail component props come from Template export
export const recommendationEmail: ThemeComponent<'recommendationEmail', RecommendationEmailProps, RecommendationEmailTemplatesLegalProps> = {
	default: {
		...recommendationEmailThemeComponentProps.default,
		recommendationEmail: {
			...(recommendationEmailThemeComponentProps.default?.['recommendationEmail'] || {}),
			themeStyleScript: recommendationEmailStyleScript,
		},
		'recommendationEmail image': {
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
