import { css } from '@emotion/react';
import type { RecommendationGridProps, RecommendationGridTemplatesLegalProps } from '../../../../components/Templates/RecommendationGrid';
import { recommendationGridThemeComponentProps } from '../../../themeComponents/recommendationGrid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationGridStyleScript = (props: RecommendationGridProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet as number;
	const hasOverflow = props?.rows == 1 ? true : false;

	// shared styles
	const sharedStyles = css({
		margin: `${custom.spacing.x8}px 0`,
		maxHeight: 'none',
		...custom.styles.boxSizing('recommendationGrid', props?.treePath, props?.name),
		'.ss__recommendation-grid__title': {
			margin: `0 0 ${custom.spacing.x4}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '18px'),
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'.ss__recommendation-grid__title': {
				fontSize: '22px',
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'.ss__recommendation-grid__title': {
				textAlign: 'center',
			},
		},
	});

	// recommendation grid styles
	const recommendationGridStyles = css([sharedStyles]);

	// recommendation grid overflow styles
	const recommendationGridOverflowStyles = css([
		sharedStyles,
		{
			'.ss__recommendation-grid__results': {
				overflowX: 'auto',
				paddingBottom: `${custom.spacing.x2}px`,
				...custom.styles.scrollbar(),
				'& > div': {
					minWidth: '175px',
				},
			},
		},
	]);

	return hasOverflow ? recommendationGridOverflowStyles : recommendationGridStyles;
};

// RecommendationGrid component props come from Template export
export const recommendationGrid: ThemeComponent<'recommendationGrid', RecommendationGridProps, RecommendationGridTemplatesLegalProps> = {
	default: {
		...recommendationGridThemeComponentProps.default,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.default?.['recommendationGrid'] || {}),
			themeStyleScript: recommendationGridStyleScript,
			gapSize: `${custom.spacing.x4}px`,
			columns: 5,
		},
	},
	mobile: {
		...recommendationGridThemeComponentProps.mobile,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.mobile?.['recommendationGrid'] || {}),
			gapSize: `${custom.spacing.x4}px ${custom.spacing.x2}px`,
			columns: 2,
		},
	},
	tablet: {
		...recommendationGridThemeComponentProps.tablet,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.tablet?.['recommendationGrid'] || {}),
			columns: 3,
		},
	},
	desktop: {
		...recommendationGridThemeComponentProps.desktop,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.desktop?.['recommendationGrid'] || {}),
			columns: 4,
		},
	},
};
