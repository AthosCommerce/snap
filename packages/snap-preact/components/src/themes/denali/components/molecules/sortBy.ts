import { css } from '@emotion/react';
import type { SortByProps, SortByTemplatesLegalProps } from '../../../../components/Molecules/SortBy';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SortBy component
const sortByStyleScript = ({ theme }: SortByProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__button__content': {
			gap: '7px',
		},
		'.ss__dropdown.ss__dropdown--open': {
			'.ss__dropdown__button': {
				boxShadow: 'none',
				zIndex: '10001',
				position: 'relative',
			},
			'.ss__dropdown__content': {
				backgroundColor: custom.colors.gray01,
			},
		},
		'.ss__dropdown': {
			'.ss__dropdown__content': {
				width: 'max-content',
				top: '0px',
				paddingTop: '44px',
				zIndex: '105',
				borderRadius: '25px',
			},
			'.ss__select__dropdown__button': {
				borderRadius: '25px',
				fontWeight: 'initial',
				padding: '10px 12px 10px 15px',
				boxShadow: 'none',
				background: custom.colors.gray01,
				color: 'inherit',

				'&:hover': {
					background: custom.colors.gray01,
				},

				'.ss__select__dropdown__button__icon': {
					background: custom.colors.white,
					padding: '5px',
					borderRadius: '50%',
					marginLeft: '15px',
					...custom.styles.indicator(variables?.colors?.accent),
				},
			},
		},
	});
};

// SortBy component props
export const sortBy: ThemeComponent<'sortBy', SortByProps, SortByTemplatesLegalProps> = {
	default: {
		sortBy: {
			themeStyleScript: sortByStyleScript,
		},

		'sortBy icon': {
			size: '12px',
			icon: 'angle-down',
		},
	},
	tablet: {},
	mobile: {
		'sortBy select': {
			separator: '',
		},
	},
};
