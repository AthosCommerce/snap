import { css } from '@emotion/react';
import type { SelectProps, SelectTemplatesLegalProps } from '../../../../components/Molecules/Select';
import { colord } from 'colord';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Select component
const selectStyleScript = ({ backgroundColor, theme }: SelectProps) => {
	const variables = theme?.variables;
	// hovered/selected rows tint a passed background
	const rowFill = backgroundColor ? (colord(backgroundColor).isDark() ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.06)') : custom.colors.gray01;

	return css({
		'.ss__dropdown': {
			'.ss__select__dropdown__button': {
				border: 'none',
				padding: '6px 30px',
				fontWeight: 'bold',
				'.ss__select__dropdown__button__icon': {
					marginLeft: '5px',
					transition: 'transform 0.25s ease 0s',
					...custom.styles.indicator(variables?.colors?.accent),
				},
			},
			'&.ss__dropdown--open': {
				'.ss__dropdown__button': {
					boxShadow: '0 6px 12px 1px #0000001f',
					borderTopLeftRadius: '3px',
					borderTopRightRadius: '3px',
					'.ss__select__dropdown__button__icon': {
						transform: 'rotate(180deg)',
					},
				},
				'.ss__dropdown__content': {
					backgroundColor: backgroundColor || custom.colors.white,
					boxShadow: '0 6px 12px 1px #0000001f',
					borderBottomLeftRadius: '3px',
					borderBottomRightRadius: '3px',
					zIndex: '10000',
				},
			},
		},

		'.ss__button__content': {
			gap: '7px',
		},

		'.ss__select__select': {
			border: '0px',
			marginBottom: '0px',

			'.ss__select__select__option': {
				listStyle: 'none',
				padding: '6px 30px',
				gap: '6px',
				color: 'inherit',
				'&:hover': {
					backgroundColor: rowFill,
				},
				'&.ss__select__select__option--selected': {
					...custom.styles.activeText(variables?.colors?.primary),
					backgroundColor: rowFill,
				},
			},
		},
	});
};

// Select component props
export const select: ThemeComponent<'select', SelectProps, SelectTemplatesLegalProps> = {
	default: {
		select: {
			themeStyleScript: selectStyleScript,
			iconClose: 'angle-down',
			iconOpen: 'angle-down',
		},

		'select dropdown button icon': {
			size: 17,
		},
	},
};
