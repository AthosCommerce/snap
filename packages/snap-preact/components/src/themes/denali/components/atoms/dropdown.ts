import { css } from '@emotion/react';
import type { DropdownProps, DropdownTemplatesLegalProps } from '../../../../components/Atoms/Dropdown';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Dropdown component
const dropdownStyleScript = ({ theme }: DropdownProps) => {
	const variables = theme?.variables;

	return css({
		position: 'relative',
		'&.ss__dropdown--open': {
			'& .ss__dropdown__content': {
				transition: `opacity .5s ease`,
			},
		},
		// variant dropdowns portal their list to the end of the page (so it escapes cards that clip, like OverlayResult),
		// outside the VariantSelection element - the list is styled here, continuing the open pill as one gray card
		// with inset rows, like the open sort by list
		'&.ss__dropdown__portal.ss__variant-selection__dropdown .ss__dropdown__content': {
			color: custom.colors.black,
			backgroundColor: custom.colors.gray01,
			borderRadius: '0 0 20px 20px',
			// a shadow beneath the list only (the negative spread keeps it off the sides) - it lifts the list off what
			// it covers without a halo around the pill, which keeps its closed shape when it opens
			boxShadow: '0 10px 12px -8px #00000033',
			overflow: 'hidden',
			'.ss__variant-selection__options': {
				margin: 0,
				padding: '0 8px 8px',
				border: 'none',
				background: 'none',
				'.ss__variant-selection__option': {
					borderRadius: '14px',
					padding: '6px 22px',
					listStyle: 'none',
					color: 'inherit',
					'&:hover': {
						backgroundColor: custom.colors.gray02,
					},
					'&.ss__variant-selection__option--selected': {
						...custom.styles.activeText(variables?.colors?.primary),
						backgroundColor: custom.colors.white,
					},
				},
			},
		},
	});
};

// Dropdown component props
export const dropdown: ThemeComponent<'dropdown', DropdownProps, DropdownTemplatesLegalProps> = {
	default: {
		dropdown: {
			themeStyleScript: dropdownStyleScript,
		},
	},
};
