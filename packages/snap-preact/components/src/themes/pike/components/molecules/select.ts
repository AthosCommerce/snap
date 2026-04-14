import { css } from '@emotion/react';
import type { SelectProps, SelectTemplatesLegalProps } from '../../../../components/Molecules/Select';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const dropdownIcon = `.ss__icon--${custom.icons.arrowDown}`;

// CSS in JS style script for the Select component
const selectStyleScript = (props: SelectProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		...custom.styles.boxSizing('select', props?.treePath, props?.name),
		'&.ss__select--disabled': {
			...custom.styles.disabled(),
		},
	});

	// default styles
	const defaultStyles = css([
		sharedStyles,
		{
			display: 'block',
			'.ss__dropdown': {
				'.ss__dropdown__button .ss__button, .ss__dropdown__content': {
					padding: `${custom.spacing.x2}px`,
				},
				'.ss__dropdown__button': {
					'.ss__button': {
						width: '100%',
						paddingTop: 0,
						paddingBottom: 0,
						textAlign: 'left',
						'.ss__button__content': {
							'.ss__select__selection__icon': {
								margin: 0,
							},
							'.ss__select__selection': {
								flex: '1 1 0%',
								paddingRight: `${custom.spacing.x1}px`,
								fontWeight: 'normal',
							},
							[dropdownIcon]: {
								transition: 'transform ease 0.5s',
								marginLeft: 'auto',
							},
						},
					},
				},
				'.ss__dropdown__content': {
					backgroundColor: props?.backgroundColor ? props?.backgroundColor : custom.colors.gray01,
					border: `1px solid ${props?.borderColor ? props?.borderColor : custom.colors.gray02}`,
					marginTop: `${custom.spacing.x1}px`,
					'.ss__select__select': {
						margin: 0,
						padding: 0,
						border: 0,
						backgroundColor: 'transparent',
						'.ss__select__select__option': {
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
						'.ss__select__select__option--selected': {
							...custom.styles.activeText(variables?.colors?.primary),
						},
					},
				},
			},
			'.ss__dropdown--open': {
				'.ss__dropdown__button': {
					'.ss__button': {
						[dropdownIcon]: {
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
			backgroundColor: props?.backgroundColor ? props?.backgroundColor : custom.colors.gray01,
			border: `1px solid ${props?.borderColor ? props?.borderColor : custom.colors.gray02}`,
			height: `${custom.sizes.height}px`,
			lineHeight: `${custom.sizes.height}px`,
			color: props?.color ? props?.color : variables?.colors?.text,
			'.ss__select__label, .ss__select__select': {
				fontSize: '14px',
			},
			'.ss__select__label': {
				fontWeight: custom.fonts.weight01,
			},
			'.ss__select__select': {
				flex: '1 1 0%',
				padding: `0 ${custom.spacing.x1}px 0 0`,
				backgroundColor: 'transparent',
				height: '100%',
				lineHeight: '100%',
				border: 'none',
				appearance: 'none',
				color: 'inherit',
				cursor: 'pointer',
				'&::-ms-expand': {
					display: 'none',
				},
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
			color: custom.colors.text,
			backgroundColor: custom.colors.gray01,
			borderColor: custom.colors.gray02,
		},
		'select icon.open': {
			size: `${custom.sizes.icon12}px`,
		},
		'select dropdown button icon': {
			size: `${custom.sizes.icon12}px`,
		},
	},
};
