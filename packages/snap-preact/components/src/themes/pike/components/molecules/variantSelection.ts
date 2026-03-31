import { css } from '@emotion/react';
import type { VariantSelectionProps, VariantSelectionTemplatesLegalProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Swatches component
const variantSelectionStyleScript = (props: VariantSelectionProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		margin: `0 0 ${custom.spacing.x2}px 0`,
		'&:last-child': {
			marginBottom: 0,
		},
		...custom.styles.boxSizing('variantSelection', props?.treePath, props?.name),
	});

	// variant selection dropdown styles
	const variantSelectionDropdownStyles = css([
		sharedStyles,
		{
			'.ss__dropdown': {
				'.ss__dropdown__button, .ss__dropdown__content': {
					...custom.styles.box(variables?.colors?.text),
				},
				'.ss__dropdown__button': {
					gap: `${custom.spacing.x1}px`,
					paddingTop: 0,
					paddingBottom: 0,
					textAlign: 'left',
					height: `${custom.sizes.height}px`,
					lineHeight: `${custom.sizes.height}px`,
					'& > *': {
						minWidth: '1px',
						flex: '0 1 auto',
					},
					'.ss__dropdown__button-wrapper': {
						flex: '1 1 0%',
						overflow: 'hidden',
						'.ss__dropdown__button-wrapper__label': {
							fontWeight: custom?.fonts?.weight01,
							textTransform: 'capitalize',
						},
						'.ss__dropdown__button-wrapper__selection': {
							...custom.styles.textOverflow(),
						},
					},
					'.ss__variant-selection__icon': {
						transition: 'transform ease 0.5s',
					},
				},
				'.ss__dropdown__content': {
					marginTop: `${custom.spacing.x1}px`,
					'.ss__variant-selection__options': {
						border: 0,
						background: 'none',
						textAlign: 'left',
						'&, .ss__variant-selection__option': {
							listStyle: 'none',
							padding: 0,
							margin: 0,
						},
						'.ss__variant-selection__option': {
							margin: `0 0 ${custom.spacing.x1}px 0`,
							'&:last-child': {
								marginBottom: '0',
							},
							'&:hover': {
								fontWeight: 'normal',
							},
						},
						'.ss__variant-selection__option--selected': {
							...custom.styles.activeText(variables?.colors?.primary),
						},
						'.ss__variant-selection__option--unavailable, .ss__variant-selection__option--disabled': {
							color: 'inherit',
							...custom.styles.disabled(),
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

	// variant selection list styles
	const variantSelectionListStyles = css([
		sharedStyles,
		{
			'.ss__list': {
				'.ss__list__title': {
					fontSize: '14px',
					textAlign: 'left',
				},
				'.ss__list__options': {
					'.ss__list__option': {
						color: variables?.colors?.text,
						label: {
							color: 'inherit',
							cursor: 'inherit',
						},
					},
					'.ss__list__option--selected': {
						...custom.styles.activeText(variables?.colors?.primary),
					},
					'.ss__list__option--unavailable, .ss__list__option--disabled': {
						...custom.styles.disabled(),
						textDecoration: 'line-through',
					},
				},
			},
		},
	]);

	// variant selection swatches syles
	const variantSelectionSwatchesStyles = css([sharedStyles]);

	if (props?.type == 'list') {
		return variantSelectionListStyles;
	} else if (props?.type == 'swatches') {
		return variantSelectionSwatchesStyles;
	} else {
		return variantSelectionDropdownStyles;
	}
};

// VariantSelection component props
export const variantSelection: ThemeComponent<'variantSelection', VariantSelectionProps, VariantSelectionTemplatesLegalProps> = {
	default: {
		variantSelection: {
			themeStyleScript: variantSelectionStyleScript,
		},
		'variantSelection dropdown icon': {
			icon: custom.icons.arrowDown,
			size: `${custom.sizes.icon12}px`,
		},
	},
};
