import { css } from '@emotion/react';
import type { SelectProps, SelectTemplatesLegalProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Select component
const selectStyleScript = (props: SelectProps) => {
	const variables = props?.theme?.variables;

	// shared styles for select menus
	const sharedStyles = css({
		border: `1px solid ${custom.colors.gray02}`,
		color: variables?.colors?.text,
		backgroundColor: custom.colors.gray01,
	});

	// default styles
	const defaultStyles = css([
		{
			display: 'block',
			'.ss__dropdown': {
				'.ss__dropdown__button .ss__button, .ss__dropdown__content .ss__select__select': {
					...sharedStyles,
				},
				'.ss__dropdown__button': {
					'.ss__button': {
						display: 'flex',
						padding: `0 ${custom.spacing.x2}px`,
						textAlign: 'left',
						'.ss__button__content': {
							'& > *': {
								minWidth: '1px',
								flex: '0 1 auto',
							},
							'.ss__select__selection__icon': {
								margin: 0,
							},
							'.ss__select__selection': {
								flex: '1 1 0%',
								paddingRight: `${custom.spacing.x1}px`,
								fontWeight: 'normal',
							},
							'.ss__select__dropdown__button__icon': {
								transition: 'transform ease 0.5s',
							},
						},
					},
				},
				'.ss__dropdown__content': {
					marginTop: `${custom.spacing.x2}px`,
					'.ss__select__select': {
						padding: `${custom.spacing.x2}px`,
						margin: 0,
						'.ss__select__select__option': {
							gap: `${custom.spacing.x2}px`,
							padding: 0,
							margin: `0 0 ${custom.spacing.x1}px 0`,
							color: 'inherit',
							'&:last-of-type': {
								marginBottom: '0',
							},
							'&:hover': {
								backgroundColor: 'transparent',
							},
						},
						'.ss__select__select__option--selected': {
							fontWeight: custom.fonts.weight01,
							color: variables?.colors?.primary,
						},
					},
				},
			},
			'.ss__dropdown--open': {
				'.ss__dropdown__button': {
					'.ss__button': {
						'.ss__select__dropdown__button__icon': {
							transform: 'rotate(180deg)',
						},
					},
				},
			},
		},
	]);

	// native styles
	const nativeStyles = css([
		sharedStyles,
		{
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			gap: `${custom.spacing.x1}px`,
			padding: `0 ${custom.spacing.x2}px`,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			'& > *': {
				minWidth: '1px',
				flex: '0 1 auto',
			},
			'.ss__select__label, .ss__select__select': {
				fontSize: custom.utils.convertPxToEm(14),
			},
			'.ss__select__label': {
				fontWeight: custom.fonts.weight01,
			},
			'.ss__select__select': {
				flex: '1 1 0%',
				paddingRight: `${custom.spacing.x1}px`,
				backgroundColor: 'transparent',
				border: 'none',
				appearance: 'none',
				color: 'inherit',
				cursor: 'pointer',
				'&[disabled]': {
					cursor: 'not-allowed',
				},
				'&::-ms-expand': {
					display: 'none',
				},
			},
			'.ss__select__dropdown__button__icon': {
				width: `${custom.sizes.icon12}px`,
				height: `${custom.sizes.icon12}px`,
			},
		},
	]);

	return props?.native ? nativeStyles : defaultStyles;
};

// Select component props
export const select: ThemeComponent<'select', SelectProps, SelectTemplatesLegalProps> = {
	default: {
		select: {
			themeStyleScript: selectStyleScript,
			iconOpen: custom.icons.arrowDown,
			iconClose: custom.icons.arrowDown,
		},
		'select icon.open': {
			size: `${custom.sizes.icon12}px`,
		},
		'select dropdown button': {
			native: false,
		},
		'select dropdown button icon': {
			size: `${custom.sizes.icon12}px`,
		},
	},
};
