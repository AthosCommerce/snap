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
		// outside the VariantSelection element - the list is styled here, continuing the open pill
		'&.ss__dropdown__portal.ss__variant-selection__dropdown .ss__dropdown__content': {
			color: custom.colors.black,
			backgroundColor: custom.colors.white,
			borderRadius: '0 0 25px 25px',
			boxShadow: '0 6px 12px 1px #0000001f',
			overflow: 'hidden',
			'.ss__variant-selection__options': {
				margin: 0,
				padding: '0 0 10px',
				border: 'none',
				background: 'none',
				'.ss__variant-selection__option': {
					padding: '6px 15px',
					listStyle: 'none',
					color: 'inherit',
					'&:hover': {
						backgroundColor: custom.colors.gray01,
					},
					'&.ss__variant-selection__option--selected': {
						...custom.styles.activeText(variables?.colors?.primary),
						backgroundColor: custom.colors.gray01,
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
