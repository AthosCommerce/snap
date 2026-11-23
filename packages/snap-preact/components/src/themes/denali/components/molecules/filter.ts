import { css } from '@emotion/react';
import type { FilterProps, FilterTemplatesLegalProps } from '../../../../components/Molecules/Filter';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Filter component
const filterStyleScript = ({}: FilterProps) => {
	return css({
		// the chip is a link - keep the site's link colors off it so the pill follows the page color. the doubled
		// class out-specifies a store's `a:hover` rule, which a single class does not
		'&.ss__filter': {
			'&, &:hover, &:focus': {
				color: 'inherit',
			},
		},
		// a compact chip - a thinner outline and tighter padding than an action button, so a row of them wraps less
		'& .ss__filter__button': {
			padding: '6px 12px',
			borderWidth: '2px',
			'.ss__filter__button__icon': {
				margin: '0 6px 0 0',
				fill: 'currentColor',
				stroke: 'currentColor',
			},
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
