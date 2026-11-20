import { css } from '@emotion/react';
import type { PerPageProps, PerPageTemplatesLegalProps } from '../../../../components/Molecules/PerPage';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the PerPage component
const perPageStyleScript = ({ theme }: PerPageProps) => {
	const variables = theme?.variables;

	return css({
		'.ss__button__content': {
			gap: '7px',
		},
		'.ss__dropdown.ss__dropdown--open': {
			'.ss__dropdown__button': {
				boxShadow: 'none',
				zIndex: '10001',
				position: 'relative',
			},
		},
		// the open list is one rounded card under the pill, with inset rows (out-specifies the select's own open state)
		'&.ss__select .ss__dropdown.ss__dropdown--open .ss__dropdown__content': {
			backgroundColor: custom.colors.gray01,
			borderRadius: '20px',
			boxShadow: 'none',
			padding: '44px 8px 8px',
			'.ss__select__select': {
				backgroundColor: 'transparent',
				'.ss__select__select__option': {
					borderRadius: '14px',
					padding: '6px 22px',
					'&:hover, &.ss__select__select__option--selected': {
						backgroundColor: custom.colors.white,
					},
				},
			},
		},
		'.ss__dropdown': {
			'.ss__dropdown__content': {
				width: 'max-content',
				top: '0px',
				paddingTop: '44px',
				zIndex: '105',
				borderRadius: '25px',
			},
			'.ss__select__dropdown__button': {
				borderRadius: '25px',
				fontWeight: 'initial',
				padding: '10px 12px 10px 15px',
				boxShadow: 'none',
				background: custom.colors.gray01,
				color: 'inherit',

				'&:hover': {
					background: custom.colors.gray01,
				},

				'.ss__select__dropdown__button__icon': {
					background: custom.colors.white,
					padding: '5px',
					borderRadius: '50%',
					marginLeft: '15px',
					...custom.styles.indicator(variables?.colors?.accent),
				},
			},
		},
	});
};

// PerPage component props
export const perPage: ThemeComponent<'perPage', PerPageProps, PerPageTemplatesLegalProps> = {
	default: {
		perPage: {
			themeStyleScript: perPageStyleScript,
			label: '',
		},
		'perPage icon': {
			size: '12px',
		},
	},
	mobile: {
		'perPage select': {
			separator: '',
		},
	},
};
