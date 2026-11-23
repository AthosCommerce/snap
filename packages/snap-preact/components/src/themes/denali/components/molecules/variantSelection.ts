import { css } from '@emotion/react';
import type { VariantSelectionProps, VariantSelectionTemplatesLegalProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the VariantSelection component
const variantSelectionStyleScript = ({ theme }: VariantSelectionProps) => {
	const variables = theme?.variables;

	return css({
		// the list's title is the field name ("color") - capitalized like the dropdown's label
		'.ss__list__title': {
			textTransform: 'capitalize',
		},
		'.ss__variant-selection__dropdown': {
			'.ss__dropdown__button': {
				borderRadius: '25px',
				fontWeight: 'initial',
				padding: '10px 5px 10px 15px',
				boxShadow: 'none',
				background: custom.colors.gray01,
				color: 'inherit',

				'&:hover': {
					background: custom.colors.gray01,
				},

				// a long selection truncates rather than wrapping the pill onto a second line
				'.ss__dropdown__button-wrapper': {
					minWidth: 0,
					whiteSpace: 'nowrap',
					// the label is the field name ("color") - capitalized like a heading
					'.ss__dropdown__button-wrapper__label': {
						textTransform: 'capitalize',
					},
					'.ss__dropdown__button-wrapper__selection': {
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					},
				},
				'.ss__variant-selection__icon': {
					flex: '0 0 auto',
				},
			},
			'&.ss__dropdown--open .ss__dropdown__button': {
				// the top corners keep the closed pill's radius, so only the bottom edge changes on open
				borderRadius: '25px 25px 0 0',
				zIndex: '10001',
				position: 'relative',
			},
			'.ss__variant-selection__icon': {
				marginLeft: '15px',
				marginRight: '7px',
				// a white disc behind the chevron, like the sort by pill
				boxSizing: 'border-box',
				background: custom.colors.white,
				padding: '5px',
				borderRadius: '50%',
				...custom.styles.indicator(variables?.colors?.accent),
			},
		},
	});
};

// VariantSelection component props
export const variantSelection: ThemeComponent<'variantSelection', VariantSelectionProps, VariantSelectionTemplatesLegalProps> = {
	default: {
		variantSelection: {
			themeStyleScript: variantSelectionStyleScript,
		},
		'variantSelection icon': {
			// the same rendered size as the sort by chevron disc
			size: '17px',
		},
	},
};
