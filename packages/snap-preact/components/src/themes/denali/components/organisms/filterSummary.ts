import { css } from '@emotion/react';
import type { FilterSummaryProps, FilterSummaryTemplatesLegalProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = ({ theme }: FilterSummaryProps) => {
	const variables = theme?.variables;

	return css({
		flexWrap: 'wrap',
		'& .ss__filter-summary__title': {
			fontWeight: 'bold',
			color: variables?.colors?.secondary,
		},

		'& .ss__filter-summary__filters': {
			margin: '0px',
		},

		'&.ss__filter-summary--list .ss__filter-summary__filters .ss__filter .ss__filter__button .ss__button__content': {
			gap: '8px',
			'.ss__icon': {
				width: '8px',
				height: '8px',
				padding: '4px',
				margin: 0,
				borderRadius: '50%',
				border: `1px solid ${custom.colors.controlBorder}`,
				backgroundColor: custom.colors.gray01,
				fill: 'currentColor',
				stroke: 'currentColor',
			},
		},
	});
};

// FilterSummary component props
export const filterSummary: ThemeComponent<'filterSummary', FilterSummaryProps, FilterSummaryTemplatesLegalProps> = {
	default: {
		filterSummary: {
			themeStyleScript: filterSummaryStyleScript,
			hideFacetLabel: true,
			hideTitle: true,
		},
	},
};
