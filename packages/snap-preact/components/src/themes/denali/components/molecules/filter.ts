import { css } from '@emotion/react';
import type { FilterProps, FilterTemplatesLegalProps } from '../../../../components/Molecules/Filter';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Filter component
const filterStyleScript = ({}: FilterProps) => {
	return css({
		'& .ss__filter__button .ss__filter__button__icon': {
			margin: '0 10px 0 0',
			fill: 'currentColor',
			stroke: 'currentColor',
		},
	});
};

// Filter component props
export const filter: ThemeComponent<'filter', FilterProps, FilterTemplatesLegalProps> = {
	default: {
		filter: {
			themeStyleScript: filterStyleScript,
			hideFacetLabel: true,
		},
	},
};
