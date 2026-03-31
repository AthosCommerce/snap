import { css } from '@emotion/react';
import type { DropdownProps, DropdownTemplatesLegalProps } from '../../../../components/Atoms/Dropdown';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Dropdown component
const dropdownStyleScript = ({ theme }: DropdownProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({
		width: 'auto',
		'&:not(.ss__facet__dropdown)': {
			'&.ss__dropdown--open': {
				'.ss__dropdown__content': {
					zIndex: 200,
				},
			},
		},
		'&.ss__dropdown--open': {
			'.ss__dropdown__content': {
				zIndex: 5,
			},
		},
		'.ss__dropdown__content': {
			minWidth: '1px',
			left: 0,
			right: 0,
			zIndex: -1,
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
