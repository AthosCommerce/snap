import { css } from '@emotion/react';
import type { FilterProps, FilterTemplatesLegalProps } from '../../../../components/Molecules/Filter';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Filter component
const filterStyleScript = (props: FilterProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// filter styles
	const filterStyles = css({
		...custom.styles.boxSizing('filter', props?.treePath, props?.name),
		'&, .ss__filter__button': {
			padding: 0,
		},
		'&.ss__filter-summary__clear-all .ss__filter__button .ss__button__content .ss__filter__value': {
			margin: 0,
		},
		'.ss__filter__button': {
			position: 'relative',
			height: 'auto',
			lineHeight: 1.5,
			fontWeight: 'normal',
			color: variables?.colors?.text,
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				backgroundColor: 'transparent',
				borderColor: 'transparent',
			},
			'.ss__button__content': {
				position: 'relative',
				'.ss__filter__button__icon, .ss__filter__label, .ss__filter__value': {
					margin: 0,
				},
				'.ss__filter__label': {
					fontWeight: custom.fonts.weight01,
				},
			},
		},
	});

	return filterStyles;
};

// Filter component props
export const filter: ThemeComponent<'filter', FilterProps, FilterTemplatesLegalProps> = {
	default: {
		filter: {
			themeStyleScript: filterStyleScript,
			icon: custom.icons.close,
		},
		'filter icon': {
			size: `${custom.sizes.icon10}px`,
		},
	},
};
