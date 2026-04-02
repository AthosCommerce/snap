import { css } from '@emotion/react';
import type { VariantSelectionProps, VariantSelectionTemplatesLegalProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Swatches component
const variantSelectionStyleScript = (props: VariantSelectionProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);

	// shared styles for variant selections
	const sharedStyles = css({
		margin: `0 0 ${custom.spacing.x2}px 0`,
		'&:last-of-type': {
			marginBottom: 0,
		},
	});

	// dropdown styles
	const dropdownStyles = css([
		sharedStyles,
		{
			'.ss__dropdown': {
				'.ss__dropdown__button, .ss__dropdown__content': {
					border: `1px solid ${custom.colors.gray02}`,
					color: variables?.colors?.text,
					backgroundColor: custom.colors.gray01,
				},
				'.ss__dropdown__button': {
					width: 'auto',
					display: 'flex',
					padding: `0 ${custom.spacing.x2}px`,
					textAlign: 'left',
					height: `${custom.sizes.height}px`,
					lineHeight: `${custom.sizes.height}px`,
					'& > *': {
						minWidth: '1px',
						flex: '0 1 auto',
					},
					'.ss__dropdown__button-wrapper': {
						flex: '1 1 0%',
						gap: `${custom.spacing.x1}px`,
						paddingRight: `${custom.spacing.x1}px`,
						fontWeight: 'normal',
						'.ss__dropdown__button-wrapper__label': {
							fontWeight: custom?.fonts?.weight01,
							textTransform: 'capitalize',
						},
					},
					'.ss__variant-selection__icon': {
						transition: 'transform ease 0.5s',
					},
				},
				'.ss__dropdown__content': {
					marginTop: `-1px`,
					padding: `${custom.spacing.x2}px`,
					'.ss__variant-selection__options': {
						'&, .ss__variant-selection__option': {
							listStyle: 'none',
							padding: 0,
							margin: 0,
						},
						'.ss__variant-selection__option': {
							margin: `0 0 ${custom.spacing.x1}px 0`,
							'&:last-of-type': {
								marginBottom: '0',
							},
							'&:hover': {
								fontWeight: 'normal',
							},
						},
						'.ss__variant-selection__option--selected': {
							fontWeight: custom.fonts.weight01,
							color: variables?.colors?.primary,
						},
						'.ss__variant-selection__option--unavailable': {
							color: lightGray,
							cursor: 'not-allowed',
						},
					},
				},
			},
			'.ss__dropdown--open': {
				'.ss__dropdown__button': {
					'.ss__variant-selection__icon': {
						transform: 'rotate(180deg)',
					},
				},
			},
		},
	]);

	// list styles
	const listStyles = css([
		sharedStyles,
		{
			'.ss__list': {
				'.ss__list__title, .ss__list__options, .ss__list__options .ss__list__option': {
					width: '100%',
					color: variables?.colors?.text,
				},
				'.ss__list__title': {
					textTransform: 'capitalize',
				},
				'.ss__list__options': {
					'.ss__list__option': {
						label: {
							color: 'inherit',
						},
					},
					'.ss__list__option--selected': {
						fontWeight: custom.fonts.weight01,
						color: variables?.colors?.primary,
					},
					'.ss__list__option--unavailable': {
						color: lightGray,
						cursor: 'not-allowed',
						textDecoration: 'line-through',
					},
				},
			},
		},
	]);

	// swatches syles
	const swatchesStyles = css([sharedStyles]);

	// return variant selection styles
	if (props?.type == 'list') {
		return listStyles;
	} else if (props?.type == 'swatches') {
		return swatchesStyles;
	} else {
		return dropdownStyles;
	}
};

// VariantSelection component props
export const variantSelection: ThemeComponent<'variantSelection', VariantSelectionProps, VariantSelectionTemplatesLegalProps> = {
	default: {
		variantSelection: {
			themeStyleScript: variantSelectionStyleScript,
		},
		'variantSelection dropdown icon': {
			size: `${custom.sizes.icon12}px`,
			icon: custom.icons.arrowDown,
		},
	},
};
