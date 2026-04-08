import { css } from '@emotion/react';
import type { FilterSummaryProps, FilterSummaryTemplatesLegalProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = (props: FilterSummaryProps) => {
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);
	const listSpacing = custom.sizes.icon16 + custom.spacing.x2;

	// shared palette styles
	const sharedStyles = css({
		'.ss__filter-summary__title': {
			padding: 0,
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__filter-summary__filters': {
			margin: 0,
		},
	});

	// inline filter summary styles
	const inlineStyles = css([
		sharedStyles,
		{
			'&.ss__filter-summary--inline': {
				'.ss__filter-summary__filters': {
					gap: `${custom.spacing.x1}px`,
				},
			},
		},
	]);

	// list filter summary styles
	const listStyles = css([
		sharedStyles,
		{
			'&.ss__filter-summary--list': {
				'.ss__filter-summary__filters': {
					'.ss__filter': {
						margin: `0 0 ${custom.spacing.x1}px 0`,
						'&:last-of-type': {
							marginBottom: 0,
						},
						'.ss__filter__button': {
							'.ss__button__content': {
								position: 'relative',
								padding: `0 0 0 ${listSpacing}px`,
								'.ss__filter__button__icon': {
									position: 'absolute',
									top: '1.5px',
									left: 0,
									padding: '3px',
									backgroundColor: custom.colors.gray01,
									border: `1px solid ${darkGray}`,
									width: `${custom.sizes.icon16}px`,
									height: `${custom.sizes.icon16}px`,
									boxSizing: 'border-box',
								},
								'.ss__filter__label, .ss__filter__value': {
									margin: 0,
								},
								'.ss__filter__label': {
									padding: '0 4px 0 0',
								},
							},
						},
					},
				},
			},
		},
	]);

	return props?.type == 'list' ? listStyles : inlineStyles;
};

// FilterSummary component props
export const filterSummary: ThemeComponent<'filterSummary', FilterSummaryProps, FilterSummaryTemplatesLegalProps> = {
	default: {
		filterSummary: {
			themeStyleScript: filterSummaryStyleScript,
			clearAllIcon: custom.icons.close,
			filterIcon: custom.icons.close,
			hideTitle: false,
		},
	},
};
