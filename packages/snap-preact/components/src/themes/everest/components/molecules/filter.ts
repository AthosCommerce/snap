import { css } from '@emotion/react';
import type { FilterProps, FilterTemplatesLegalProps } from '../../../../components/Molecules/Filter';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Filter component
const filterStyleScript = (props: FilterProps) => {
	const variables = props?.theme?.variables;

	return css({
		display: 'block',
		padding: 0,
		'.ss__filter__button': {
			position: 'relative',
			height: 'auto',
			lineHeight: 1.5,
			padding: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			fontWeight: 'normal',
			color: variables?.colors?.text,
			'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': {
				backgroundColor: custom.colors.gray01,
				border: `1px solid ${custom.colors.gray02}`,
			},
			'.ss__button__content': {
				'.ss__filter__label': {
					fontWeight: custom.fonts.weight01,
				},
			},
		},
	});
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
