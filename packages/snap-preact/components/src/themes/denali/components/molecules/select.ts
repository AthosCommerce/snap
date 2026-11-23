import { css } from '@emotion/react';
import type { SelectProps, SelectTemplatesLegalProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Select component
const selectStyleScript = ({ backgroundColor, theme }: SelectProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);
	const fill = backgroundColor || custom.colors.gray01;
	// hovered and selected rows tint a passed background - on the theme's gray they are a darker gray and white
	const hoverFill = backgroundColor ? custom.utils.rowTint(backgroundColor) : custom.colors.gray02;
	const selectedFill = backgroundColor ? custom.utils.rowTint(backgroundColor) : custom.colors.white;

	return css({
		'.ss__button__content': {
			gap: '7px',
		},
		// a filled pill with its chevron in a white disc
		'.ss__dropdown': {
			'.ss__select__dropdown__button': {
				border: 'none',
				borderRadius: '25px',
				padding: '10px 12px 10px 15px',
				boxShadow: 'none',
				background: fill,
				color: 'inherit',
				'&:hover': {
					background: fill,
				},
				'.ss__select__dropdown__button__icon': {
					// the padding sits inside the icon's size whatever the store's box-sizing reset is
					boxSizing: 'border-box',
					background: custom.colors.white,
					padding: '5px',
					borderRadius: '50%',
					marginLeft: '15px',
					transition: 'transform 0.25s ease 0s',
					// on a passed background the chevron takes that color, so it shows on the white disc
					...custom.styles.indicator(backgroundColor || roles.structure),
				},
			},
			// the open list is one rounded card behind the pill, with inset rows - it floats over what is beneath
			// it, so a soft shadow lifts it
			'.ss__dropdown__content': {
				width: 'max-content',
				minWidth: '100%',
				boxSizing: 'border-box',
				top: '0px',
				zIndex: '105',
			},
			'&.ss__dropdown--open': {
				'.ss__dropdown__button': {
					position: 'relative',
					zIndex: '10001',
					boxShadow: 'none',
					'.ss__select__dropdown__button__icon': {
						transform: 'rotate(180deg)',
					},
				},
				'.ss__dropdown__content': {
					backgroundColor: fill,
					borderRadius: '20px',
					boxShadow: '0 6px 12px 1px #0000001f',
					padding: '44px 8px 8px',
					zIndex: '10000',
				},
			},
		},

		'.ss__select__select': {
			border: '0px',
			marginBottom: '0px',
			backgroundColor: 'transparent',

			'.ss__select__select__option': {
				listStyle: 'none',
				borderRadius: '14px',
				padding: '6px 22px',
				gap: '6px',
				color: 'inherit',
				'&:hover': {
					backgroundColor: hoverFill,
				},
				'&.ss__select__select__option--selected': {
					...custom.styles.activeText(roles.brand),
					backgroundColor: selectedFill,
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
			// the disc's full size - its 5px padding is inside it, leaving a 7px chevron
			size: '17px',
		},
	},
};
