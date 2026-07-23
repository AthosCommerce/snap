import { css } from '@emotion/react';
import type { PerPageProps, PerPageTemplatesLegalProps } from '../../../../components/Molecules/PerPage';
import { ThemeComponent } from '../../../../providers';
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
			'.ss__dropdown__content': {
				backgroundColor: variables?.colors.accent,
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
				padding: '10px 5px 10px 15px',
				boxShadow: 'none',
				background: variables?.colors.accent,
				color: variables?.colors.primary,

				'&:hover': {
					background: variables?.colors.accent,
				},

				'.ss__select__dropdown__button__icon': {
					background: 'white',
					padding: '5px',
					borderRadius: '50%',
					marginLeft: '15px',
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
