import { css } from '@emotion/react';
import type { DropdownProps, DropdownTemplatesLegalProps } from '../../../../components/Atoms/Dropdown';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Dropdown component
const dropdownStyleScript = (props: DropdownProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// disabled styles
	const disabled = props?.disabled
		? {
				...custom.styles.disabled(),
		  }
		: {};

	// dropdown styles
	const dropdownStyles = css({
		width: 'auto',
		...disabled,
		...custom.styles.boxSizing('dropdown', props?.treePath, props?.name),
		'&.ss__dropdown__portal': {
			'.ss__dropdown__content': {
				marginTop: `${custom.spacing.x1}px`,
				...custom.styles.box(variables?.colors?.text),
				'ul, ul li': {
					listStyle: 'none',
				},
				'.ss__select__select, .ss__variant-selection__options': {
					margin: 0,
					padding: 0,
					border: 0,
					backgroundColor: 'transparent',
				},
				'.ss__select__select .ss__select__select__option, .ss__variant-selection__options .ss__variant-selection__option': {
					...custom.styles.baseText('inherit'),
					gap: `${custom.spacing.x2}px`,
					padding: 0,
					margin: `0 0 ${custom.spacing.x1}px 0`,
					'&:last-child': {
						marginBottom: '0',
					},
					'&:hover': {
						backgroundColor: 'transparent',
						fontWeight: 'normal',
					},
					'a, span': {
						cursor: 'pointer',
					},
				},
				'.ss__select__select .ss__select__select__option--selected, .ss__variant-selection__options .ss__variant-selection__option--selected': {
					...custom.styles.activeText(variables?.colors?.primary),
				},
				'.ss__select__select .ss__select__select__option----unavailable, .ss__select__select .ss__select__select__option--disabled, .ss__variant-selection__options .ss__variant-selection__option--unavailable, .ss__variant-selection__options .ss__variant-selection__option--disabled':
					{
						color: 'inherit',
						...custom.styles.disabled(),
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

	return dropdownStyles;
};

// Dropdown component props
export const dropdown: ThemeComponent<'dropdown', DropdownProps, DropdownTemplatesLegalProps> = {
	default: {
		dropdown: {
			themeStyleScript: dropdownStyleScript,
		},
	},
};
